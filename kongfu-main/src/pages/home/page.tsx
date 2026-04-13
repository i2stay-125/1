import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AdvantagesSection from './components/AdvantagesSection';
import ProcessSection from './components/ProcessSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import ContactSection from './components/ContactSection';
import { useSEO, generateOrganizationSchema } from '../../utils/seo';

export default function HomePage() {
  useSEO({
    title: 'KungfuBuy - Professional Dropshipping Sourcing & Fulfillment Service | Europe Dropshipping Logistics Expert',
    description: 'KungfuBuy provides professional dropshipping sourcing and fulfillment services, focusing on European market dropshipping logistics solutions. Fast delivery, quality assurance, one-stop service to help your dropshipping business succeed.',
    keywords: 'dropshippers,sourcing and fulfillment,Dropshipping,Europe logistics,cross-border dropshippers,one-piece dropshipping',
    canonical: '/',
    schema: generateOrganizationSchema()
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AdvantagesSection />
        <ProcessSection />
        <TestimonialsSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
