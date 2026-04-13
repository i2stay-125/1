import { useRef, useEffect } from 'react';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force preload
    video.preload = 'auto';
    
    // Attempt autoplay with fallback
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Browser prevented autoplay, fallback to user interaction
        const handleUserInteraction = () => {
          video.play().catch(() => {
            // Ignore play errors
          });
          document.removeEventListener('click', handleUserInteraction);
          document.removeEventListener('touchstart', handleUserInteraction);
        };
        document.addEventListener('click', handleUserInteraction);
        document.addEventListener('touchstart', handleUserInteraction);
      });
    }
  }, []);

  return (
    <section 
      id="hero"
      className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#2d3748]"
    >
      {/* Video Background - Full Screen */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/bannerImg.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ 
          zIndex: 1
        }}
      >
        <source src="/images/banner.mp4" type="video/mp4" />
      </video>

      {/* Solid Overlay - Semi-transparent Black */}
      <div 
        className="absolute inset-0"
        style={{ zIndex: 2, backgroundColor: '#00000040' }}
      ></div>

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" style={{ zIndex: 10 }}>
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            Kungfu Buy
            <br />
            <span className="text-yellow-400">Master Dropshipping</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white mb-8 leading-relaxed drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            Connect Instantly · Efficient Dropshipping · 24/7 Support · Ship Worldwide
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="whitespace-nowrap text-white px-6 py-3 rounded-lg font-semibold text-base transition-all transform hover:scale-105 text-center cursor-pointer shadow-lg"
              style={{ backgroundColor: '#059669' }}
              onMouseEnter={(e: any) => e.currentTarget.style.backgroundColor = '#047857'}
              onMouseLeave={(e: any) => e.currentTarget.style.backgroundColor = '#059669'}
            >
              GET A FREE QUOTE
            </a>
            <a 
              href="#services" 
              className="whitespace-nowrap bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold text-base hover:bg-white/20 transition-all border-2 border-white/30 text-center cursor-pointer shadow-lg drop-shadow-md"
            >
              SERVICE OVERVIEW
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
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
  );
}



                  


