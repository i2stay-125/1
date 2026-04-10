import { useState, useEffect, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  CAROUSEL_IMAGES, 
  STATS_CARDS, 
  CTA_BUTTON 
} from '../../../constants/cta';
import { 
  ANIMATION_CONFIG, 
  ANIMATION_KEYFRAMES,
  PARTICLE_CONFIG,
  SHAPE_CONFIG,
  calculateParticlePosition,
  calculateGradientBackground 
} from '../../../constants/animations';

export default function CTASection() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [gradientHue, setGradientHue] = useState(0);

  // Carousel navigation
  const goTo = useCallback((idx: number) => {
    if (idx === current || animating) return;
    
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, ANIMATION_CONFIG.delays.carouselChange);
  }, [current, animating]);

  // Auto-advance carousel
  useEffect(() => {
    const carouselTimer = setInterval(() => {
      if (!animating) {
        setAnimating(true);
        setTimeout(() => {
          setCurrent(prev => (prev + 1) % CAROUSEL_IMAGES.length);
          setAnimating(false);
        }, ANIMATION_CONFIG.delays.carouselChange);
      }
    }, ANIMATION_CONFIG.intervals.carousel);

    return () => clearInterval(carouselTimer);
  }, [animating]);

  // Gradient hue cycle
  useEffect(() => {
    const gradientTimer = setInterval(() => {
      setGradientHue(prev => (prev + 1) % 360);
    }, ANIMATION_CONFIG.intervals.gradient);

    return () => clearInterval(gradientTimer);
  }, []);

  // Particle generation
  const particles = useMemo(() => 
    Array.from({ length: PARTICLE_CONFIG.count }, (_, i) => {
      const position = calculateParticlePosition(i, gradientHue, PARTICLE_CONFIG.count);
      return {
        ...position,
        animationDelay: `${i * ANIMATION_CONFIG.delays.particleStagger}s`,
        animationDuration: `${ANIMATION_CONFIG.durations.particleFloat + (i % 5)}s`,
      };
    }), [gradientHue]
  );

  // Handle CTA button click
  const handleCTAClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate(CTA_BUTTON.href);
  }, [navigate]);

  // Sub-components
  const CarouselBackground = useMemo(() => (
    <div className="absolute inset-0 z-0">
      {CAROUSEL_IMAGES.map((img, idx) => (
        <div
          key={idx}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: idx === current ? 1 : 0 }}
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.35) saturate(1.1)' }}
            loading="lazy"
          />
        </div>
      ))}
      <div
        className="absolute inset-0 transition-all duration-3000"
        style={{ background: calculateGradientBackground(gradientHue) }}
      ></div>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((particle, i) => (
          <div
            key={i}
            className={`absolute ${PARTICLE_CONFIG.size} ${PARTICLE_CONFIG.color} rounded-full`}
            style={{
              left: particle.left,
              top: particle.top,
              opacity: particle.opacity,
              animation: `${PARTICLE_CONFIG.animation} ${particle.animationDuration} ${ANIMATION_CONFIG.easing.easeInOut} infinite`,
              animationDelay: particle.animationDelay,
            }}
          />
        ))}
      </div>
    </div>
  ), [current, gradientHue, particles]);

  const AnimatedShapes = useMemo(() => (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div
        className={`absolute ${SHAPE_CONFIG.a.size} rounded-full filter ${SHAPE_CONFIG.a.blur}`}
        style={{
          backgroundColor: SHAPE_CONFIG.a.color,
          opacity: SHAPE_CONFIG.a.opacity,
          top: '-4rem',
          left: '-4rem',
          animation: `${SHAPE_CONFIG.a.animation} ${SHAPE_CONFIG.a.duration}ms ${ANIMATION_CONFIG.easing.easeInOut} infinite`,
        }}
      ></div>
      <div
        className={`absolute ${SHAPE_CONFIG.b.size} rounded-full filter ${SHAPE_CONFIG.b.blur}`}
        style={{
          backgroundColor: SHAPE_CONFIG.b.color,
          opacity: SHAPE_CONFIG.b.opacity,
          bottom: '-5rem',
          right: '-5rem',
          animation: `${SHAPE_CONFIG.b.animation} ${SHAPE_CONFIG.b.duration}ms ${ANIMATION_CONFIG.easing.easeInOut} infinite`,
        }}
      ></div>
    </div>
  ), []);

  const CarouselIndicators = useMemo(() => (
    <div className="flex justify-center gap-2 mt-8">
      {CAROUSEL_IMAGES.map((_, idx) => (
        <button
          key={idx}
          onClick={() => goTo(idx)}
          className="transition-all duration-300 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50"
          style={{
            width: idx === current ? '28px' : '10px',
            height: '10px',
            backgroundColor: idx === current ? '#F59E0B' : 'rgba(255,255,255,0.4)',
            border: 'none',
            padding: 0,
          }}
          aria-label={`Slide ${idx + 1}`}
          aria-current={idx === current ? 'true' : 'false'}
        />
      ))}
    </div>
  ), [current, goTo]);

  const StatsCards = useMemo(() => (
    <div className="mt-10 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 max-w-5xl mx-auto">
      {STATS_CARDS.map((card, idx) => (
        <div
          key={idx}
          className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:bg-white/20 transition-all hover:scale-105"
        >
          <div className={`text-2xl sm:text-3xl font-bold mb-2 ${card.colorClass}`}>
            <i className={`${card.icon} mr-1 sm:mr-2`}></i>
            {card.title}
          </div>
          <div className="text-emerald-100 text-xs sm:text-sm">{card.subtitle}</div>
        </div>
      ))}
    </div>
  ), []);

  const CarouselContent = useMemo(() => (
    <div
      key={current}
      style={{ animation: `fadeInUp ${ANIMATION_CONFIG.durations.fadeInUp}ms ${ANIMATION_CONFIG.easing.easeOut} both` }}
    >
      <h2
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
        style={{ transition: 'opacity 0.5s', opacity: animating ? 0 : 1 }}
      >
        Optimize Your Supply Chain Today
      </h2>
      <p
        className="text-base sm:text-lg md:text-xl text-emerald-100 mb-3 max-w-3xl mx-auto"
        style={{ transition: 'opacity 0.5s', opacity: animating ? 0 : 1 }}
      >
        {CAROUSEL_IMAGES[current].alt}
      </p>
    </div>
  ), [current, animating]);

  return (
    <section className="relative py-20 overflow-hidden" aria-label="Call to Action">
      <style>{ANIMATION_KEYFRAMES}</style>
      
      {CarouselBackground}
      {AnimatedShapes}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {CarouselContent}
          
          <p className="text-sm text-emerald-200 mb-8 max-w-2xl mx-auto">
            Join thousands of sellers who trust Kungfubuy, and grow your brand with us.
          </p>

          <a
            href={CTA_BUTTON.href}
            onClick={handleCTAClick}
            className={`${CTA_BUTTON.className} animate-pulseGlow`}
            style={{ animation: `pulseGlow ${ANIMATION_CONFIG.durations.buttonPulse}ms ${ANIMATION_CONFIG.easing.easeInOut} infinite` }}
            aria-label="Get a free quote"
          >
            {CTA_BUTTON.text}
          </a>

          {CarouselIndicators}
          {StatsCards}
        </div>
      </div>
    </section>
  );
}
