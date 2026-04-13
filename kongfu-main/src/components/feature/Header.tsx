import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const sectionMap: Record<string, string> = {
  hero: 'HOME',
  services: 'SERVICES',
  advantages: 'WHY US',
  process: 'WORKFLOW',
  contact: 'CONTACT US',
};

const getActiveByPath = (path: string) => {
  if (path === '/faqs') return 'FAQS';
  if (path === '/blog') return 'BLOG';
  if (path === '/about') return 'ABOUT US';
  return 'HOME';
};

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Initialize state based on location.state to prevent flash of wrong active nav
  const [activeNav, setActiveNav] = useState<string>(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo) {
      return sectionMap[state.scrollTo] || 'HOME';
    }
    return getActiveByPath(location.pathname);
  });

  const [scrollLock, setScrollLock] = useState<string | null>(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo) {
      return sectionMap[state.scrollTo] || null;
    }
    return null;
  });

  const lockTimerRef = useRef<number | null>(null);

  // 页面切换与初始加载处理
  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    
    if (state?.scrollTo) {
      // 如果有滚动目标
      const sectionId = state.scrollTo;
      const targetName = sectionMap[sectionId] || 'HOME';
      
      // 确保锁定状态 (虽然初始 state 已设置，但这能确保 timer 逻辑正确)
      setScrollLock(targetName);
      setActiveNav(targetName);

      // 延迟滚动以确保 DOM 渲染
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          
          // 延长锁定时间以覆盖滚动过程
          if (lockTimerRef.current) clearTimeout(lockTimerRef.current);
          lockTimerRef.current = window.setTimeout(() => {
            setScrollLock(null);
            lockTimerRef.current = null;
          }, 1500);
        } else {
            setScrollLock(null);
        }
      }, 100);

      // 清除 state 防止刷新重复触发
      window.history.replaceState({}, document.title);
    } else {
      // 只有在没有滚动目标时才重置到顶部
      if (location.pathname !== '/') {
        window.scrollTo(0, 0);
      } else if (!location.hash) {
        // 首页且无 hash 才滚动到顶部
        window.scrollTo(0, 0);
      }
      setActiveNav(getActiveByPath(location.pathname));
    }
  }, [location.pathname, location.state]);

  useEffect(() => {
    return () => {
      if (lockTimerRef.current) {
        window.clearTimeout(lockTimerRef.current);
      }
    };
  }, []);

  const highlightSection = (sectionKey: string, lockDuration = 0) => {
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
  };

  const navItemClass = (name: string) =>
    `relative text-sm font-semibold tracking-wide transition-colors cursor-pointer ${
      activeNav === name
        ? 'text-emerald-600 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-emerald-600 after:rounded-full'
        : 'text-gray-700 hover:text-emerald-600'
    }`;

  const mobileNavItemClass = (name: string) =>
    `text-base font-semibold transition-colors cursor-pointer ${
      activeNav === name ? 'text-emerald-600' : 'text-gray-700 hover:text-emerald-600'
    }`;

  // 处理 HOME 按钮点击 - 始终回到主页顶部
  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        highlightSection('HOME', 800);
    } else {
        navigate('/', { state: { scrollTo: 'hero' } }); 
    }
  };

  useEffect(() => {
    if (location.pathname !== '/') return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (scrollLock) {
          return;
        }
        if (window.scrollY < 80) {
          setActiveNav('HOME');
          return;
        }
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            if (sectionMap[sectionId]) {
              setActiveNav(sectionMap[sectionId]);
            }
          }
        });
      },
      { threshold: 0.4 }
    );

    Object.keys(sectionMap).forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [location.pathname, scrollLock]);

  // 处理锚点跳转
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const target = sectionMap[sectionId] ?? sectionId.toUpperCase().replace('-', ' ');
    setMobileMenuOpen(false);
    
    if (location.pathname === '/') {
      // 如果在首页，直接滚动到对应区块
      highlightSection(target, 1500);
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // 如果在其他页面，通过 state 传递目标
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  // 处理联系表单跳转 - 确保在任何页面都能正确跳转
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    if (location.pathname !== '/') {
      // 如果不在首页，通过 state 传递目标
      navigate('/', { state: { scrollTo: 'contact' } });
    } else {
      // 如果在首页，直接滚动到表单
      highlightSection('CONTACT US', 1500);
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // 处理页面跳转
  const handlePageClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    navigate(path);
    setMobileMenuOpen(false);
    const target = path === '/faqs' ? 'FAQS' : path === '/blog' ? 'BLOG' : 'ABOUT US';
    highlightSection(target, 800);
  };

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" onClick={handleHomeClick} className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-black tracking-tight">
              <span style={{ color: '#F59E0B' }}>Kungfu</span>
              <span style={{ color: '#059669' }}>Buy</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" onClick={handleHomeClick} className={navItemClass('HOME')}>
              HOME
            </a>
            <a href="#services" onClick={(e) => handleAnchorClick(e, 'services')} className={navItemClass('SERVICES')}>
              SERVICES
            </a>
            <a href="#advantages" onClick={(e) => handleAnchorClick(e, 'advantages')} className={navItemClass('WHY US')}>
              WHY US
            </a>
            <a href="#process" onClick={(e) => handleAnchorClick(e, 'process')} className={navItemClass('WORKFLOW')}>
              WORKFLOW
            </a>
            <a href="/faqs" onClick={(e) => handlePageClick(e, '/faqs')} className={navItemClass('FAQS')}>
              FAQS
            </a>
            <a href="/blog" onClick={(e) => handlePageClick(e, '/blog')} className={navItemClass('BLOG')}>
              BLOG
            </a>
            <a href="/about" onClick={(e) => handlePageClick(e, '/about')} className={navItemClass('ABOUT US')}>
              ABOUT US
            </a>
            <a href="#contact" onClick={handleContactClick} className={navItemClass('CONTACT US')}>
              CONTACT US
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              className="whitespace-nowrap text-white px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer"
              style={{ backgroundColor: '#059669' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#047857'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#059669'}
            >
              LOG IN
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
          >
            <i className={`ri-${mobileMenuOpen ? 'close' : 'menu'}-line text-2xl text-gray-700`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a href="/" onClick={handleHomeClick} className={mobileNavItemClass('HOME')}>
                HOME
              </a>
              <a href="#services" onClick={(e) => handleAnchorClick(e, 'services')} className={mobileNavItemClass('SERVICES')}>
                SERVICES
              </a>
              <a href="#advantages" onClick={(e) => handleAnchorClick(e, 'advantages')} className={mobileNavItemClass('WHY US')}>
                WHY US
              </a>
              <a href="#process" onClick={(e) => handleAnchorClick(e, 'process')} className={mobileNavItemClass('WORKFLOW')}>
                WORKFLOW
              </a>
              <a href="/faqs" onClick={(e) => handlePageClick(e, '/faqs')} className={mobileNavItemClass('FAQS')}>
                FAQS
              </a>
              <a href="/blog" onClick={(e) => handlePageClick(e, '/blog')} className={mobileNavItemClass('BLOG')}>
                BLOG
              </a>
              <a href="/about" onClick={(e) => handlePageClick(e, '/about')} className={mobileNavItemClass('ABOUT US')}>
                ABOUT US
              </a>
              <a href="#contact" onClick={handleContactClick} className={mobileNavItemClass('CONTACT US')}>
                CONTACT US
              </a>
              <button 
                className="whitespace-nowrap text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center cursor-pointer"
                style={{ backgroundColor: '#059669' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#047857'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#059669'}
              >
                LOG IN
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
