/**
 * CTA Section constants
 */

// Carousel images
export const CAROUSEL_IMAGES = [
  { src: '/images/eccefacbb9dd4c3104dcdf4d0a8583ee.png', alt: 'Fast & Reliable Support' },
  { src: '/images/f5868b78e3222d78fe509859025bbb5f.png', alt: 'Self-operated Warehouses' },
  { src: '/images/278e7d502ef55100f5654d11f2ffa568.jpeg', alt: 'Lower Operating Costs' },
  { src: '/images/adv-casual-004.jpg', alt: 'Scale Without Limits' },
  { src: '/images/hero-bg-001.jpg', alt: 'Global Fulfillment' },
] as const;

// Stats cards
export const STATS_CARDS = [
  {
    icon: 'ri-price-tag-3-line',
    title: 'Save',
    subtitle: 'Competitive Pricing',
    colorClass: 'text-yellow-400',
  },
  {
    icon: 'ri-line-chart-line',
    title: 'Scale',
    subtitle: 'Growing With You',
    colorClass: 'text-yellow-400',
  },
  {
    icon: 'ri-customer-service-line',
    title: '24/7',
    subtitle: 'Customer Support',
    colorClass: 'text-yellow-400',
  },
  {
    icon: 'ri-global-line',
    title: 'Global',
    subtitle: 'Worldwide Shipping',
    colorClass: 'text-yellow-400',
  },
] as const;

// CTA button configuration
export const CTA_BUTTON = {
  text: 'GET A FREE QUOTE',
  href: '/contact-us',
  animation: 'pulseGlow',
  className: 'whitespace-nowrap inline-block bg-white text-emerald-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-gray-100 transition-all transform hover:scale-105 cursor-pointer shadow-lg relative z-20',
} as const;