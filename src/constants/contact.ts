/**
 * Contact page constants
 */

import { CLIENT_TYPES } from './config';

// Client type configurations
export const CLIENT_CONFIGS = {
  [CLIENT_TYPES.LARGE]: {
    badgeText: 'ENTERPRISE PATH',
    badgeColor: 'bg-blue-600',
    title: 'Enterprise Application',
    description: 'Exclusive services: Custom warehousing, priority logistics, API system integration, branded packaging solutions',
    benefits: [
      'High-volume fulfillment',
      'Custom branding & packaging',
      'Priority shipping lanes',
      'API & system integration',
    ],
    icon: 'ri-building-4-line',
    iconColor: '#F59E0B',
    iconBgColor: '#fffbeb',
  },
  [CLIENT_TYPES.SMALL]: {
    badgeText: 'STANDARD PATH',
    badgeColor: 'bg-amber-500',
    title: 'Standard Application',
    description: 'Quick start services: No minimum order requirement, dedicated agent support, flexible sourcing, efficient logistics',
    benefits: [
      'No MOQ required',
      'Quick start setup',
      'Dedicated agent support',
      'Affordable pricing',
    ],
    icon: 'ri-store-line',
    iconColor: '#059669',
    iconBgColor: '#ecfdf5',
  },
} as const;

// Form configuration
export const FORM_CONFIG = {
  fields: {
    name: {
      label: 'Full Name',
      required: true,
      type: 'text',
      placeholder: 'Your full name',
    },
    phone: {
      label: 'Phone Number',
      required: true,
      type: 'tel',
      placeholder: '+1 123 456 7890',
    },
    company: {
      label: 'Company Name',
      required: false,
      type: 'text',
      placeholder: 'Your company or store name',
    },
    requirements: {
      label: 'Your Requirements',
      required: false,
      type: 'textarea',
      placeholder: 'Describe your business needs, product type, order volume, or any specific requirements...',
    },
  } as const,
  
  submitText: {
    idle: 'Submit Application',
    submitting: 'Submitting...',
  } as const,
  
  api: {
    email: 'business@kungfubuy.com',
    endpoint: 'https://formsubmit.co/ajax/',
  } as const,
} as const;

// Contact information
export const CONTACT_INFO = [
  {
    icon: 'ri-mail-line',
    label: 'Email',
    value: 'business@kungfubuy.com',
    color: '#059669',
  },
  {
    icon: 'ri-whatsapp-line',
    label: 'WhatsApp',
    value: '+86 XXX XXXX XXXX',
    color: '#059669',
  },
  {
    icon: 'ri-time-line',
    label: 'Response Time',
    value: 'Within 24 hours',
    color: '#059669',
  },
] as const;

// Form validation messages
export const VALIDATION_MESSAGES = {
  required: 'Please fill in all required fields',
  emailInvalid: 'Please enter a valid email address',
  phoneInvalid: 'Please enter a valid phone number',
  submissionSuccess: 'Thank you! We will contact you within 24 hours.',
  submissionError: 'Submission failed. Please try again or contact us directly.',
} as const;