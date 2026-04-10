import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  schema?: object;
}

export const useSEO = ({
  title,
  description,
  keywords,
  canonical,
  ogType = 'website',
  ogImage,
  schema
}: SEOProps) => {
  useEffect(() => {
    // Update title
    if (title) {
      document.title = title;
    }

    // Update meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    if (description) {
      updateMetaTag('description', description);
      updateMetaTag('og:description', description, true);
      updateMetaTag('twitter:description', description, true);
    }

    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    if (title) {
      updateMetaTag('og:title', title, true);
      updateMetaTag('twitter:title', title, true);
    }

    if (ogType) {
      updateMetaTag('og:type', ogType, true);
    }

    if (ogImage) {
      updateMetaTag('og:image', ogImage, true);
      updateMetaTag('twitter:image', ogImage, true);
    }

    // Update canonical
    if (canonical) {
      let linkElement = document.querySelector('link[rel="canonical"]');
      
      if (!linkElement) {
        linkElement = document.createElement('link');
        linkElement.setAttribute('rel', 'canonical');
        document.head.appendChild(linkElement);
      }
      
      linkElement.setAttribute('href', canonical);
    }

    // Update last-modified
    const lastModified = new Date().toISOString().split('T')[0];
    updateMetaTag('last-modified', lastModified);

    // Add or update schema
    if (schema) {
      let scriptElement = document.querySelector('script[type="application/ld+json"]');
      
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.setAttribute('type', 'application/ld+json');
        document.head.appendChild(scriptElement);
      }
      
      scriptElement.textContent = JSON.stringify(schema);
    }
  }, [title, description, keywords, canonical, ogType, ogImage, schema]);
};

export const generateOrganizationSchema = () => {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://kungfubuy.com';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'KungfuBuy',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: 'KungfuBuy provides professional dropshipping sourcing and fulfillment services, focusing on European market dropshipping logistics solutions.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CN',
      addressLocality: 'Shenzhen'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'support@kungfubuy.com'
    },
    sameAs: [
      'https://facebook.com/kungfubuy',
      'https://twitter.com/kungfubuy',
      'https://linkedin.com/company/kungfubuy'
    ]
  };
};

export const generateWebPageSchema = (name: string, description: string, url: string) => {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://kungfubuy.com';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url: `${siteUrl}${url}`,
    publisher: {
      '@type': 'Organization',
      name: 'KungfuBuy',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`
      }
    }
  };
};

export const generateBlogPostSchema = (post: {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  id: number;
}) => {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://kungfubuy.com';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: 'KungfuBuy'
    },
    publisher: {
      '@type': 'Organization',
      name: 'KungfuBuy',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/blog/${post.id}`
    },
    articleSection: post.category
  };
};

export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
};

export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://kungfubuy.com';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`
    }))
  };
};
