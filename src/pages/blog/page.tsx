import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import BlogHeroSection from './components/BlogHeroSection';
import BlogListSection from './components/BlogListSection';
import { useSEO, generateWebPageSchema } from '../../utils/seo';

export default function BlogPage() {
  useSEO({
    title: 'Blog - KungfuBuy | Dropshipping Industry Insights and Practical Tips',
    description: 'Read the latest dropshipping industry trends, logistics optimization tips, and cross-border e-commerce practical guides. KungfuBuy shares professional knowledge to help your business grow.',
    keywords: 'dropshipping blog,logistics tips,cross-border e-commerce,industry insights,practical guides',
    canonical: '/blog',
    schema: generateWebPageSchema(
      'KungfuBuy Blog',
      'Dropshipping industry insights and practical tips to help your business succeed.',
      '/blog'
    )
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <BlogHeroSection />
        <BlogListSection />
      </main>
      <Footer />
    </div>
  );
}
