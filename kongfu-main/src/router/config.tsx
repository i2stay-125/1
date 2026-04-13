import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';
import { Suspense } from 'react';

const HomePage = lazy(() => import('../pages/home/page'));
const AboutPage = lazy(() => import('../pages/about/page'));
const FAQsPage = lazy(() => import('../pages/faqs/page'));
const BlogPage = lazy(() => import('../pages/blog/page'));
const BlogDetailPage = lazy(() => import('../pages/blog/detail/page'));
const PrivacyPolicyPage = lazy(() => import('../pages/privacy-policy/page'));
const TermsPage = lazy(() => import('../pages/terms/page'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));

// 空 Fallback - 秒加载，无加载效果
const LazyWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Suspense fallback={null}>
    {children}
  </Suspense>
);

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <LazyWrapper>
        <HomePage />
      </LazyWrapper>
    ),
  },
  {
    path: '/about',
    element: (
      <LazyWrapper>
        <AboutPage />
      </LazyWrapper>
    ),
  },
  {
    path: '/faqs',
    element: (
      <LazyWrapper>
        <FAQsPage />
      </LazyWrapper>
    ),
  },
  {
    path: '/blog',
    element: (
      <LazyWrapper>
        <BlogPage />
      </LazyWrapper>
    ),
  },
  {
    path: '/blog/:id',
    element: (
      <LazyWrapper>
        <BlogDetailPage />
      </LazyWrapper>
    ),
  },
  {
    path: '/privacy-policy',
    element: (
      <LazyWrapper>
        <PrivacyPolicyPage />
      </LazyWrapper>
    ),
  },
  {
    path: '/terms',
    element: (
      <LazyWrapper>
        <TermsPage />
      </LazyWrapper>
    ),
  },
  {
    path: '*',
    element: (
      <LazyWrapper>
        <NotFoundPage />
      </LazyWrapper>
    ),
  },
];

export default routes;
