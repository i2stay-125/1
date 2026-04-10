import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import AboutHeroSection from './components/AboutHeroSection';
import StorySection from './components/StorySection';
import MissionSection from './components/MissionSection';
import ValuesSection from './components/ValuesSection';
import { useSEO, generateWebPageSchema } from '../../utils/seo';

export default function AboutPage() {
  useSEO({
    title: 'About Us - KungfuBuy | Professional Dropshipping Logistics Service Provider',
    description: 'Learn about KungfuBuy\'s story, mission, and values. We are committed to providing professional dropshipping sourcing and fulfillment services to help global dropshippers succeed.',
    keywords: 'about KungfuBuy,company introduction,dropshipping service,logistics provider,company mission',
    canonical: '/about',
    schema: generateWebPageSchema(
      'About KungfuBuy',
      'Learn about KungfuBuy\'s story, mission, and values. We are committed to providing professional dropshipping sourcing and fulfillment services.',
      '/about'
    )
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <AboutHeroSection />
        <StorySection />
        <MissionSection />
        <ValuesSection />
      </main>
      <Footer />
    </div>
  );
}
