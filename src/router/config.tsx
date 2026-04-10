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
const ContactUsPage = lazy(() => import('../pages/contact-us/page'));

// B端页面
const PortalBPage = lazy(() => import('../pages/portal-b/page'));
const PortalBProductsPage = lazy(() => import('../pages/portal-b/products/page'));
const PortalBWarehousePage = lazy(() => import('../pages/portal-b/warehouse/page'));
const PortalBLogisticsPage = lazy(() => import('../pages/portal-b/logistics/page'));
const PortalBCustomizePage = lazy(() => import('../pages/portal-b/customize/page'));
const PortalBApplyPage = lazy(() => import('../pages/portal-b/apply/page'));

// C端页面
const PortalCPage = lazy(() => import('../pages/portal-c/page'));
const PortalCMallPage = lazy(() => import('../pages/portal-c/mall/page'));
const PortalCCartPage = lazy(() => import('../pages/portal-c/cart/page'));
const PortalCTrackPage = lazy(() => import('../pages/portal-c/track/page'));
const PortalCServicePage = lazy(() => import('../pages/portal-c/service/page'));
const PortalCProfilePage = lazy(() => import('../pages/portal-c/profile/page'));

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
    path: '/contact-us',
    element: (
      <LazyWrapper>
        <ContactUsPage />
      </LazyWrapper>
    ),
  },
  // B端路由
  {
    path: '/portal-b',
    element: (
      <LazyWrapper>
        <PortalBPage />
      </LazyWrapper>
    ),
  },
  {
    path: '/portal-b/products',
    element: (
      <LazyWrapper>
        <PortalBProductsPage />
      </LazyWrapper>
    ),
  },
  {
    path: '/portal-b/warehouse',
    element: (
      <LazyWrapper>
        <PortalBWarehousePage />
      </LazyWrapper>
    ),
  },
  {
    path: '/portal-b/logistics',
    element: (
      <LazyWrapper>
        <PortalBLogisticsPage />
      </LazyWrapper>
    ),
  },
  {
    path: '/portal-b/customize',
    element: (
      <LazyWrapper>
        <PortalBCustomizePage />
      </LazyWrapper>
    ),
  },
  {
    path: '/portal-b/apply',
    element: (
      <LazyWrapper>
        <PortalBApplyPage />
      </LazyWrapper>
    ),
  },
  // C端路由
  {
    path: '/portal-c',
    element: (
      <LazyWrapper>
        <PortalCPage />
      </LazyWrapper>
    ),
  },
  {
    path: '/portal-c/mall',
    element: (
      <LazyWrapper>
        <PortalCMallPage />
      </LazyWrapper>
    ),
  },
  {
    path: '/portal-c/cart',
    element: (
      <LazyWrapper>
        <PortalCCartPage />
      </LazyWrapper>
    ),
  },
  {
    path: '/portal-c/track',
    element: (
      <LazyWrapper>
        <PortalCTrackPage />
      </LazyWrapper>
    ),
  },
  {
    path: '/portal-c/service',
    element: (
      <LazyWrapper>
        <PortalCServicePage />
      </LazyWrapper>
    ),
  },
  {
    path: '/portal-c/profile',
    element: (
      <LazyWrapper>
        <PortalCProfilePage />
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
