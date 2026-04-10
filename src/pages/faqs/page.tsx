import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import FAQHeroSection from './components/FAQHeroSection';
import FAQListSection from './components/FAQListSection';
import { useSEO, generateFAQSchema } from '../../utils/seo';

const faqData = [
  {
    question: 'What is Dropshipping?',
    answer: 'Dropshipping is a retail fulfillment method where a store doesn\'t keep the products it sells in stock. Instead, when a store sells a product using the dropshipping model, it purchases the item from a third party and has it shipped directly to the customer. As a result, the seller doesn\'t have to handle the product directly. The biggest difference between dropshipping and the standard retail model is that the selling merchant doesn\'t stock or own inventory. Instead, the seller purchases inventory as needed from a third party—usually a wholesaler or manufacturer—to fulfill orders.'
  },
  {
    question: 'What is a Dropshipping Agent?',
    answer: 'A Dropshipping agent is a third-party order fulfillment service that helps grow your e-commerce business with the ability to source products, negotiate prices with factories, inspect quality, store products, and fulfill orders. KungfuBuy is your best choice.'
  },
  {
    question: 'How do I start dropshipping business with you?',
    answer: 'You can send us a Request for Quotation (RFQ) including the country you sell to, order quantity, and most importantly, product information (aliexpress/ebay/amazon/shopify links). We will check and get the price for you.'
  },
  {
    question: 'How long does it take to process my order?',
    answer: 'Processing is completed within one business day.'
  },
  {
    question: 'How can I track my order logistics information?',
    answer: 'Most packages can be tracked through 17track.net.'
  },
  {
    question: 'Can you make inserts and custom packaging for me?',
    answer: 'Absolutely. Thank you cards/coupons/instruction manuals can be placed with the product. We work with various packaging companies that provide custom packaging services.'
  },
  {
    question: 'How long does it take to ship from China to the US, France, Australia via ePacket?',
    answer: 'ePacket delivery typically takes 7–20 days to the United States and Australia, and 10–25 days to France, depending on customs and local postal services.'
  },
  {
    question: 'Will you put invoices or receipts in the package?',
    answer: 'We will not put any invoices or receipts in the package.'
  },
  {
    question: 'Can you take photos and videos for me?',
    answer: 'Yes, we provide photography services for you. This way you can save time from sending samples to yourself for photography.'
  }
];

export default function FAQsPage() {
  useSEO({
    title: 'FAQs - KungfuBuy | Frequently Asked Questions About Dropshipping Services',
    description: 'Find answers to common questions about KungfuBuy dropshipping services, including order processing, shipping times, custom packaging, and more.',
    keywords: 'dropshipping FAQ,common questions,order processing,shipping time,custom packaging,dropshipping agent',
    canonical: '/faqs',
    schema: generateFAQSchema(faqData)
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <FAQHeroSection />
        <FAQListSection />
      </main>
      <Footer />
    </div>
  );
}
