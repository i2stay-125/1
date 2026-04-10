/**
 * Animation constants and utilities
 */

export const ANIMATION_CONFIG = {
  durations: {
    carouselTransition: 700,
    gradientCycle: 4000,
    particleFloat: 5000,
    shapeFloatA: 7000,
    shapeFloatB: 9000,
    buttonPulse: 2000,
    fadeInUp: 700,
  } as const,
  
  delays: {
    carouselChange: 600,
    particleStagger: 200,
  } as const,
  
  intervals: {
    carousel: 3500,
    gradient: 4000,
  } as const,
  
  easing: {
    easeInOut: 'ease-in-out',
    easeOut: 'cubic-bezier(0.22, 1, 0.36, 1)',
  } as const,
} as const;

// Animation keyframes as CSS strings
export const ANIMATION_KEYFRAMES = `
  @keyframes floatA {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(24px) scale(1.08); }
  }
  @keyframes floatB {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-20px) scale(1.06); }
  }
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(18px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes floatParticle {
    0%, 100% { transform: translate(0, 0); opacity: 0.4; }
    33% { transform: translate(5px, -8px); opacity: 0.7; }
    66% { transform: translate(-5px, 8px); opacity: 0.5; }
  }
  @keyframes pulseGlow {
    0%, 100% { box-shadow: 0 0 20px rgba(245, 158, 11, 0.4); }
    50% { box-shadow: 0 0 30px rgba(245, 158, 11, 0.7), 0 0 50px rgba(5, 150, 105, 0.4); }
  }
  @keyframes slideIn {
    from { opacity: 0; transform: translateX(-10px); }
    to { opacity: 1; transform: translateX(0); }
  }
`;

// Particle configuration
export const PARTICLE_CONFIG = {
  count: 12,
  size: 'w-1 h-1',
  baseOpacity: 0.3,
  color: 'bg-white/30',
  animation: 'floatParticle',
} as const;

// Shape configuration
export const SHAPE_CONFIG = {
  a: {
    size: 'w-64 h-64',
    color: '#F59E0B',
    opacity: 0.2,
    blur: 'blur-3xl',
    animation: 'floatA',
    duration: ANIMATION_CONFIG.durations.shapeFloatA,
  } as const,
  b: {
    size: 'w-80 h-80',
    color: '#6EE7B7',
    opacity: 0.2,
    blur: 'blur-3xl',
    animation: 'floatB',
    duration: ANIMATION_CONFIG.durations.shapeFloatB,
  } as const,
} as const;

// Helper functions
export const calculateParticlePosition = (
  index: number,
  gradientHue: number,
  totalParticles: number
): { left: string; top: string; opacity: number } => {
  return {
    left: `${(index * 7 + gradientHue * 0.1) % 100}%`,
    top: `${(Math.sin(index + gradientHue * 0.01) * 50 + 50)}%`,
    opacity: 0.5 + 0.3 * Math.sin((index + gradientHue * 0.02) * 2),
  };
};

export const calculateGradientBackground = (gradientHue: number): string => {
  return `linear-gradient(135deg, 
    hsla(${gradientHue + 150}, 80%, 40%, 0.75) 0%, 
    hsla(${gradientHue}, 85%, 35%, 0.7) 50%, 
    hsla(${gradientHue + 210}, 75%, 45%, 0.7) 100%)`;
};