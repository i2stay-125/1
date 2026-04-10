import { useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { COLORS, NAVIGATION, CLIENT_TYPES } from '../../../constants/config';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();

  // Video autoplay handling with better error management
  const handleVideoAutoplay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    video.preload = 'auto';
    const playPromise = video.play();
    
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.debug('Video autoplay prevented, waiting for user interaction:', error);
        
        const handleUserInteraction = () => {
          video.play().catch(() => {});
          document.removeEventListener('click', handleUserInteraction);
          document.removeEventListener('touchstart', handleUserInteraction);
          document.removeEventListener('keydown', handleUserInteraction);
        };
        
        document.addEventListener('click', handleUserInteraction);
        document.addEventListener('touchstart', handleUserInteraction);
        document.addEventListener('keydown', handleUserInteraction);
      });
    }
  }, []);

  useEffect(() => {
    handleVideoAutoplay();
  }, [handleVideoAutoplay]);

  // Navigation handlers
  const handleQuickApply = useCallback(() => {
    navigate(`${NAVIGATION.paths.contactUs}?type=${CLIENT_TYPES.SMALL}`);
  }, [navigate]);

  const handleServiceOverview = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Button hover handlers
  const handleButtonHover = useCallback((e: React.MouseEvent<HTMLButtonElement>, color: string, hoverColor: string) => {
    e.currentTarget.style.backgroundColor = hoverColor;
    e.currentTarget.style.transform = 'scale(1.05)';
  }, []);

  const handleButtonLeave = useCallback((e: React.MouseEvent<HTMLButtonElement>, color: string) => {
    e.currentTarget.style.backgroundColor = color;
    e.currentTarget.style.transform = 'scale(1)';
  }, []);

  return (
    <>
      <section
        id="hero"
        className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#2d3748]"
      >
        {/* Video Background */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/bannerImg.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 1 }}
        >
          <source src="/images/banner.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{ zIndex: 2, backgroundColor: '#00000050' }}
        ></div>

        {/* Content */}
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" style={{ zIndex: 10 }}>
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              Kungfu Buy
              <br />
              <span className="text-yellow-400">Master Dropshipping</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white mb-8 leading-relaxed drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] max-w-2xl">
              Connect Instantly · Efficient Dropshipping · 24/7 Support · Ship Worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Quick Apply Button */}
              <button
                onClick={handleQuickApply}
                className="whitespace-nowrap text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 text-center cursor-pointer shadow-xl hover:shadow-2xl"
                style={{ backgroundColor: COLORS.primary.green }}
                onMouseEnter={(e) => handleButtonHover(e, COLORS.primary.green, COLORS.primary.greenHover)}
                onMouseLeave={(e) => handleButtonLeave(e, COLORS.primary.green)}
              >
                {NAVIGATION.buttons.quickApply}
              </button>
              
              {/* Service Overview Button */}
              <a
                href="#services"
                onClick={handleServiceOverview}
                className="whitespace-nowrap bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300 border-2 border-white/30 text-center cursor-pointer shadow-xl hover:shadow-2xl hover:border-white/50"
              >
                SERVICE OVERVIEW
              </a>
            </div>

            {/* Stats - Centered */}
            <div className="grid grid-cols-3 gap-6 sm:gap-12 mt-10 sm:mt-14 w-full max-w-xl mx-auto">
              <div className="text-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-1">3000+</div>
                <div className="text-xs sm:text-sm text-white">Our Clients</div>
              </div>
              <div className="text-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-1">8000m²</div>
                <div className="text-xs sm:text-sm text-white">Fulfillment Center</div>
              </div>
              <div className="text-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-1">75000+</div>
                <div className="text-xs sm:text-sm text-white">Sourcing</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
