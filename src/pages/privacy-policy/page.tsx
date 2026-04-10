import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import PrivacyHeroSection from './components/PrivacyHeroSection';
import PrivacyContentSection from './components/PrivacyContentSection';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <PrivacyHeroSection />
        <PrivacyContentSection />
      </main>
      <Footer />
    </div>
  );
}
