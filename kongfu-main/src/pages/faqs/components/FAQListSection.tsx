import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: 'What is Dropshipping?',
    answer: 'Dropshipping is a retail fulfillment method where a store doesn\'t keep the products it sells in stock. Instead, when a store sells a product using the dropshipping model, it purchases the item from a third party and has it shipped directly to the customer. As a result, the seller doesn\'t have to handle the product directly.\n\nThe biggest difference between dropshipping and the standard retail model is that the selling merchant doesn\'t stock or own inventory. Instead, the seller purchases inventory as needed from a third party—usually a wholesaler or manufacturer—to fulfill orders.'
  },
  {
    id: 2,
    question: 'What is a Dropshipping Agent?',
    answer: 'A Dropshipping agent is a third-party order fulfillment service that helps grow your e-commerce business with the ability to source products, negotiate prices with factories, inspect quality, store products, and fulfill orders. KungfuBuy is your best choice.'
  },
  {
    id: 3,
    question: 'How do I start dropshipping business with you?',
    answer: 'You can send us a Request for Quotation (RFQ) including the country you sell to, order quantity, and most importantly, product information (aliexpress/ebay/amazon/shopify links). We will check and get the price for you.'
  },
  {
    id: 4,
    question: 'How long does it take to process my order?',
    answer: 'Once our staff receives your order request, they will process it immediately.'
  },
  {
    id: 5,
    question: 'How can I track my order logistics information?',
    answer: 'Most packages can be tracked through 17track.net.'
  },
  {
    id: 6,
    question: 'Can you make inserts and custom packaging for me?',
    answer: 'Absolutely. Thank you cards/coupons/instruction manuals can be placed with the product. We work with various packaging companies that provide custom packaging services.'
  },
  {
    id: 7,
    question: 'How long does it take to ship from China to the US, France, Australia via ePacket?',
    answer: 'ePacket delivery typically takes 7–20 days to the United States and Australia, and 10–25 days to France, depending on customs and local postal services.'
  },
  {
    id: 8,
    question: 'Will you put invoices or receipts in the package?',
    answer: 'We will not put any invoices or receipts in the package.'
  },
  {
    id: 9,
    question: 'Can you take photos and videos for me?',
    answer: 'Yes, we provide photography services for you. This way you can save time from sending samples to yourself for photography.'
  }
];

export default function FAQListSection() {
  const [openId, setOpenId] = useState<number | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const section = document.getElementById('contact');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById('contact');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          setTimeout(() => {
            const retrySection = document.getElementById('contact');
            if (retrySection) {
              retrySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 200);
        }
      }, 300);
    }
  };

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {faqData.map((faq) => (
            <div 
              key={faq.id}
              className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <span className="text-lg font-medium text-gray-900 pr-4">
                  {faq.question}
                </span>
                <i 
                  className={`ri-arrow-down-s-line text-2xl text-gray-600 flex-shrink-0 transition-transform duration-300 w-6 h-6 flex items-center justify-center ${
                    openId === faq.id ? 'rotate-180' : ''
                  }`}
                ></i>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openId === faq.id ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed whitespace-pre-line">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Questions CTA */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Have Other Questions?
          </h2>
          <a 
            href="/#contact"
            onClick={handleContactClick}
            className="inline-block whitespace-nowrap text-white px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer"
            style={{ backgroundColor: '#059669' }}
            onMouseEnter={(e: any) => e.currentTarget.style.backgroundColor = '#047857'}
            onMouseLeave={(e: any) => e.currentTarget.style.backgroundColor = '#059669'}
          >
            GET A FREE QUOTE
          </a>
        </div>
      </div>
    </section>
  );
}