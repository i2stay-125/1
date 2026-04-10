/**
 * Application constants and configuration
 */

// Color constants
export const COLORS = {
  primary: {
    green: '#059669',
    greenHover: '#047857',
    blue: '#3B82F6',
    blueHover: '#2563EB',
    yellow: '#F59E0B',
    yellowHover: '#D97706',
    emerald: '#10B981',
    emeraldHover: '#059669',
  },
  brand: {
    kungfu: '#F59E0B',
    buy: '#059669',
  },
  background: {
    overlay: '#00000050',
    dark: '#2d3748',
  },
} as const;

// Client types
export const CLIENT_TYPES = {
  LARGE: 'large',
  SMALL: 'small',
} as const;

export type ClientType = typeof CLIENT_TYPES[keyof typeof CLIENT_TYPES];

// Navigation constants
export const NAVIGATION = {
  sections: {
    hero: 'HOME',
    services: 'SERVICES',
    advantages: 'WHY US',
    process: 'WORKFLOW',
    contact: 'CONTACT US',
  } as const,
  
  paths: {
    home: '/',
    faqs: '/faqs',
    blog: '/blog',
    about: '/about',
    contactUs: '/contact-us',
  } as const,
  
  buttons: {
    quickApply: 'QUICK APPLY',
    largeClient: 'ENTERPRISE',
    smallClient: 'STANDARD',
    login: 'LOG IN',
  } as const,
} as const;

// Animation constants
export const ANIMATION = {
  durations: {
    scrollLock: 1500,
    highlightLock: 800,
    hoverTransition: 300,
    buttonPulse: 2000,
  } as const,
  
  timingFunctions: {
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeInOut: 'ease-in-out',
  } as const,
} as const;

// Responsive breakpoints
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const;