import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { COLORS, NAVIGATION, ANIMATION, CLIENT_TYPES } from '../../constants/config';

// Type definitions
interface ScrollState {
  scrollTo?: string;
}

type NavSectionKey = keyof typeof NAVIGATION.sections;

// Helper functions
const getActiveByPath = (path: string): string => {
  if (path === NAVIGATION.paths.faqs) return 'FAQS';
  if (path === NAVIGATION.paths.blog) return 'BLOG';
  if (path === NAVIGATION.paths.about) return 'ABOUT US';
  return 'HOME';
};

const getNavNameFromPath = (path: string): string => {
  const pathMap: Record<string, string> = {
    [NAVIGATION.paths.faqs]: 'FAQS',
    [NAVIGATION.paths.blog]: 'BLOG',
    [NAVIGATION.paths.about]: 'ABOUT US',
  };
  return pathMap[path] || 'HOME';
};

// Component-specific constants
const SCROLL_OBSERVER_THRESHOLD = 0.4;
const SCROLL_DELAY = 100;
const SCROLL_LOCK_DURATION = 1500;
const HIGHLIGHT_LOCK_DURATION = 800;

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState<string>(() => {
    const state = location.state as ScrollState | null;
    if (state?.scrollTo) {
      return NAVIGATION.sections[state.scrollTo as NavSectionKey] || 'HOME';
    }
    return getActiveByPath(location.pathname);
  });
  const [scrollLock, setScrollLock] = useState<string | null>(() => {
    const state = location.state as ScrollState | null;
    if (state?.scrollTo) {
      return NAVIGATION.sections[state.scrollTo as NavSectionKey] || null;
    }
    return null;
  });

  const lockTimerRef = useRef<number | null>(null);

  // Navigation helpers
  const navigateToContact = useCallback((clientType: typeof CLIENT_TYPES.LARGE | typeof CLIENT_TYPES.SMALL) => {
    navigate(`${NAVIGATION.paths.contactUs}?type=${clientType}`);
    setMobileMenuOpen(false);
  }, [navigate]);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  // Scroll and navigation effects
  useEffect(() => {
    const state = location.state as ScrollState | null;
    
    if (state?.scrollTo) {
      const sectionId = state.scrollTo;
      const targetName = NAVIGATION.sections[sectionId as NavSectionKey] || 'HOME';
      
      setScrollLock(targetName);
      setActiveNav(targetName);

      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          
          if (lockTimerRef.current) clearTimeout(lockTimerRef.current);
          lockTimerRef.current = window.setTimeout(() => {
            setScrollLock(null);
            lockTimerRef.current = null;
          }, SCROLL_LOCK_DURATION);
        } else {
          setScrollLock(null);
        }
      }, SCROLL_DELAY);

      window.history.replaceState({}, document.title);
    } else {
      if (location.pathname !== NAVIGATION.paths.home) {
        window.scrollTo(0, 0);
      } else if (!location.hash) {
        window.scrollTo(0, 0);
      }
      setActiveNav(getActiveByPath(location.pathname));
    }
  }, [location.pathname, location.state]);

  // Cleanup effect
  useEffect(() => {
    return () => {
      if (lockTimerRef.current) {
        window.clearTimeout(lockTimerRef.current);
      }
    };
  }, []);

  // Helper functions
  const highlightSection = useCallback((sectionKey: string, lockDuration = 0) => {
    setActiveNav(sectionKey);
    if (lockDuration > 0) {
      if (lockTimerRef.current) {
        window.clearTimeout(lockTimerRef.current);
      }
      setScrollLock(sectionKey);
      lockTimerRef.current = window.setTimeout(() => {
        setScrollLock(null);
        lockTimerRef.current = null;
      }, lockDuration);
    }
  }, []);

  // CSS class generators
  const navItemClass = useMemo(() => (name: string) =>
    `relative text-sm font-semibold tracking-wide transition-colors cursor-pointer ${
      activeNav === name
        ? 'text-emerald-600 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-emerald-600 after:rounded-full'
        : 'text-gray-700 hover:text-emerald-600'
    }`, [activeNav]);

  const mobileNavItemClass = useMemo(() => (name: string) =>
    `text-base font-semibold transition-colors cursor-pointer ${
      activeNav === name ? 'text-emerald-600' : 'text-gray-700 hover:text-emerald-600'
    }`, [activeNav]);

  // Event handlers
  const handleHomeClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    closeMobileMenu();
    if (location.pathname === NAVIGATION.paths.home) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      highlightSection('HOME', HIGHLIGHT_LOCK_DURATION);
    } else {
      navigate(NAVIGATION.paths.home, { state: { scrollTo: 'hero' } });
    }
  }, [location.pathname, closeMobileMenu, highlightSection, navigate]);

  const handleAnchorClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    closeMobileMenu();
    
    const target = NAVIGATION.sections[sectionId as NavSectionKey] ?? 
                   sectionId.toUpperCase().replace('-', ' ');
    
    if (location.pathname === NAVIGATION.paths.home) {
      highlightSection(target, SCROLL_LOCK_DURATION);
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(NAVIGATION.paths.home, { state: { scrollTo: sectionId } });
    }
  }, [location.pathname, closeMobileMenu, highlightSection, navigate]);

  const handleContactClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    closeMobileMenu();
    
    if (location.pathname !== NAVIGATION.paths.home) {
      navigate(NAVIGATION.paths.home, { state: { scrollTo: 'contact' } });
    } else {
      highlightSection('CONTACT US', SCROLL_LOCK_DURATION);
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.pathname, closeMobileMenu, highlightSection, navigate]);

  const handlePageClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    navigate(path);
    closeMobileMenu();
    const target = getNavNameFromPath(path);
    highlightSection(target, HIGHLIGHT_LOCK_DURATION);
  }, [navigate, closeMobileMenu, highlightSection]);

  // Scroll observer for active navigation
  useEffect(() => {
    if (location.pathname !== NAVIGATION.paths.home) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (scrollLock) return;
        
        if (window.scrollY < 80) {
          setActiveNav('HOME');
          return;
        }
        
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            if (NAVIGATION.sections[sectionId as NavSectionKey]) {
              setActiveNav(NAVIGATION.sections[sectionId as NavSectionKey]);
            }
          }
        });
      },
      { threshold: SCROLL_OBSERVER_THRESHOLD }
    );

    Object.keys(NAVIGATION.sections).forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [location.pathname, scrollLock]);

  // Button hover handlers
  const handleButtonMouseEnter = useCallback((e: React.MouseEvent<HTMLButtonElement>, color: string, hoverColor: string) => {
    e.currentTarget.style.backgroundColor = hoverColor;
  }, []);

  const handleButtonMouseLeave = useCallback((e: React.MouseEvent<HTMLButtonElement>, color: string) => {
    e.currentTarget.style.backgroundColor = color;
  }, []);

  // Client type navigation handlers
  const handleLargeClientClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigateToContact(CLIENT_TYPES.LARGE);
  }, [navigateToContact]);

  const handleSmallClientClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigateToContact(CLIENT_TYPES.SMALL);
  }, [navigateToContact]);

  // Render helpers
  const renderDesktopNavItems = useMemo(() => (
    <>
      {Object.entries(NAVIGATION.sections).map(([sectionId, sectionName]) => (
        <a
          key={sectionId}
          href={`#${sectionId}`}
          onClick={(e) => handleAnchorClick(e, sectionId)}
          className={navItemClass(sectionName)}
        >
          {sectionName}
        </a>
      ))}
      <a href={NAVIGATION.paths.faqs} onClick={(e) => handlePageClick(e, NAVIGATION.paths.faqs)} className={navItemClass('FAQS')}>
        FAQS
      </a>
      <a href={NAVIGATION.paths.blog} onClick={(e) => handlePageClick(e, NAVIGATION.paths.blog)} className={navItemClass('BLOG')}>
        BLOG
      </a>
      <a href={NAVIGATION.paths.about} onClick={(e) => handlePageClick(e, NAVIGATION.paths.about)} className={navItemClass('ABOUT US')}>
        ABOUT US
      </a>
      <a href="#contact" onClick={handleContactClick} className={navItemClass('CONTACT US')}>
        CONTACT US
      </a>
      <a
        href={`${NAVIGATION.paths.contactUs}?type=${CLIENT_TYPES.LARGE}`}
        onClick={handleLargeClientClick}
        className={navItemClass('CONTACT US')}
      >
        <span 
          className="px-3 py-1 rounded-full text-xs font-bold text-white transition-transform hover:scale-105"
          style={{ backgroundColor: COLORS.primary.green }}
        >
          {NAVIGATION.buttons.largeClient}
        </span>
      </a>
      <a
        href={`${NAVIGATION.paths.contactUs}?type=${CLIENT_TYPES.SMALL}`}
        onClick={handleSmallClientClick}
        className={navItemClass('CONTACT US')}
      >
        <span 
          className="px-3 py-1 rounded-full text-xs font-bold text-white transition-transform hover:scale-105"
          style={{ backgroundColor: COLORS.primary.yellow }}
        >
          {NAVIGATION.buttons.smallClient}
        </span>
      </a>
    </>
  ), [navItemClass, handleAnchorClick, handlePageClick, handleContactClick, handleLargeClientClick, handleSmallClientClick]);

  const renderMobileNavItems = useMemo(() => (
    <>
      {Object.entries(NAVIGATION.sections).map(([sectionId, sectionName]) => (
        <a
          key={`mobile-${sectionId}`}
          href={`#${sectionId}`}
          onClick={(e) => handleAnchorClick(e, sectionId)}
          className={mobileNavItemClass(sectionName)}
        >
          {sectionName}
        </a>
      ))}
      <a href={NAVIGATION.paths.faqs} onClick={(e) => handlePageClick(e, NAVIGATION.paths.faqs)} className={mobileNavItemClass('FAQS')}>
        FAQS
      </a>
      <a href={NAVIGATION.paths.blog} onClick={(e) => handlePageClick(e, NAVIGATION.paths.blog)} className={mobileNavItemClass('BLOG')}>
        BLOG
      </a>
      <a href={NAVIGATION.paths.about} onClick={(e) => handlePageClick(e, NAVIGATION.paths.about)} className={mobileNavItemClass('ABOUT US')}>
        ABOUT US
      </a>
      <a href="#contact" onClick={handleContactClick} className={mobileNavItemClass('CONTACT US')}>
        CONTACT US
      </a>
      <a
        href={`${NAVIGATION.paths.contactUs}?type=${CLIENT_TYPES.LARGE}`}
        onClick={handleLargeClientClick}
        className="inline-flex items-center mb-2"
      >
        <span 
          className="px-4 py-2 rounded-full text-sm font-bold text-white transition-transform hover:scale-105"
          style={{ backgroundColor: COLORS.primary.green }}
        >
          {NAVIGATION.buttons.largeClient}
        </span>
      </a>
      <a
        href={`${NAVIGATION.paths.contactUs}?type=${CLIENT_TYPES.SMALL}`}
        onClick={handleSmallClientClick}
        className="inline-flex items-center"
      >
        <span 
          className="px-4 py-2 rounded-full text-sm font-bold text-white transition-transform hover:scale-105"
          style={{ backgroundColor: COLORS.primary.yellow }}
        >
          {NAVIGATION.buttons.smallClient}
        </span>
      </a>
    </>
  ), [mobileNavItemClass, handleAnchorClick, handlePageClick, handleContactClick, handleLargeClientClick, handleSmallClientClick]);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to={NAVIGATION.paths.home} onClick={handleHomeClick} className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-black tracking-tight">
              <span style={{ color: COLORS.brand.kungfu }}>Kungfu</span>
              <span style={{ color: COLORS.brand.buy }}>Buy</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {renderDesktopNavItems}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              className="whitespace-nowrap text-white px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer hover:scale-105 active:scale-95"
              style={{ backgroundColor: COLORS.primary.green }}
              onMouseEnter={(e) => handleButtonMouseEnter(e, COLORS.primary.green, COLORS.primary.greenHover)}
              onMouseLeave={(e) => handleButtonMouseLeave(e, COLORS.primary.green)}
            >
              {NAVIGATION.buttons.login}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <i className={`ri-${mobileMenuOpen ? 'close' : 'menu'}-line text-2xl text-gray-700`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-slideDown">
            <div className="flex flex-col space-y-4">
              {renderMobileNavItems}
              <button 
                className="whitespace-nowrap text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center cursor-pointer hover:scale-105 active:scale-95"
                style={{ backgroundColor: COLORS.primary.green }}
                onMouseEnter={(e) => handleButtonMouseEnter(e, COLORS.primary.green, COLORS.primary.greenHover)}
                onMouseLeave={(e) => handleButtonMouseLeave(e, COLORS.primary.green)}
              >
                {NAVIGATION.buttons.login}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
