import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import TermsHeroSection from './components/TermsHeroSection';
import TermsContentSection from './components/TermsContentSection';

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <TermsHeroSection />
        <TermsContentSection />
      </main>
      <Footer />
    </div>
  );
}
