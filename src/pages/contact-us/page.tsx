import { useState, useEffect, useCallback, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { useSEO } from '../../utils/seo';
import { CLIENT_TYPES, COLORS } from '../../constants/config';
import { 
  CLIENT_CONFIGS, 
  FORM_CONFIG, 
  CONTACT_INFO, 
  VALIDATION_MESSAGES 
} from '../../constants/contact';

// Type definitions
interface FormData {
  name: string;
  phone: string;
  company: string;
  requirements: string;
}

type SubmitStatus = 'idle' | 'success' | 'error';

export default function ContactUsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [clientType, setClientType] = useState<typeof CLIENT_TYPES.LARGE | typeof CLIENT_TYPES.SMALL>(CLIENT_TYPES.SMALL);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    company: '',
    requirements: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  
  // SEO configuration
  useSEO({
    title: 'Apply & Contact Us - KungfuBuy | Dropshipping Sourcing & Fulfillment',
    description: 'Get in touch with KungfuBuy team. Submit your application form with name, phone, company and requirements for professional dropshipping solutions.',
    keywords: 'contact kungfubuy,apply dropshipping,sourcing inquiry,fulfillment service',
    canonical: '/contact-us',
  });

  // Client type detection
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const type = params.get('type');
    
    if (type === CLIENT_TYPES.LARGE) {
      setClientType(CLIENT_TYPES.LARGE);
    } else {
      setClientType(CLIENT_TYPES.SMALL);
    }
  }, [location.search]);

  // Form handlers
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const validateForm = useCallback((): boolean => {
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert(VALIDATION_MESSAGES.required);
      return false;
    }
    return true;
  }, [formData.name, formData.phone]);

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const emailBody = `
New Application from Website Contact Form
Client Type: ${clientType.toUpperCase()}

Name: ${formData.name}
Phone: ${formData.phone}
Company: ${formData.company || 'Not provided'}
Requirements: ${formData.requirements || 'Not provided'}

---
This email is from the website contact form
      `;

      const formDataToSend = new FormData();
      formDataToSend.append('email', FORM_CONFIG.api.email);
      formDataToSend.append('subject', `New ${clientType.toUpperCase()} Application - ${formData.name}`);
      formDataToSend.append('message', emailBody);
      formDataToSend.append('_next', window.location.origin);
      formDataToSend.append('_captcha', 'false');

      const response = await fetch(FORM_CONFIG.api.endpoint + FORM_CONFIG.api.email, {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();
      
      if (response.ok && result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', company: '', requirements: '' });
      } else {
        setSubmitStatus('error');
        console.error('Form submission error:', result);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, clientType, validateForm]);

  // Current client configuration
  const clientConfig = useMemo(() => CLIENT_CONFIGS[clientType], [clientType]);

  // Form field configurations
  const formFields = useMemo(() => (
    Object.entries(FORM_CONFIG.fields).map(([key, config]) => {
      const fieldKey = key as keyof FormData;
      const isTextarea = config.type === 'textarea';
      
      return (
        <div key={key}>
          <label htmlFor={key} className="block text-sm font-semibold text-gray-700 mb-2">
            {config.label} {config.required && <span className="text-red-500">*</span>}
          </label>
          {isTextarea ? (
            <textarea
              id={key}
              name={key}
              value={formData[fieldKey]}
              onChange={handleChange}
              rows={5}
              placeholder={config.placeholder}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all resize-none"
              required={config.required}
            />
          ) : (
            <input
              type={config.type}
              id={key}
              name={key}
              value={formData[fieldKey]}
              onChange={handleChange}
              placeholder={config.placeholder}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
              required={config.required}
            />
          )}
        </div>
      );
    })
  ), [formData, handleChange]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Banner */}
        <section 
          className="relative py-24 overflow-hidden" 
          style={{ background: `linear-gradient(135deg, ${COLORS.primary.green} 0%, ${COLORS.primary.greenHover} 100%)` }}
        >
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300 rounded-full filter blur-3xl"></div>
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className={`inline-block px-4 py-2 mb-6 rounded-full font-bold text-white text-sm ${clientConfig.badgeColor}`}>
              {clientConfig.badgeText}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              {clientConfig.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-emerald-100 max-w-2xl mx-auto">
              {clientConfig.description}
            </p>
          </div>
        </section>

        {/* Client Type Cards */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">
              Who We Serve
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(CLIENT_CONFIGS).map(([type, config]) => {
                const isCurrent = type === clientType;
                const borderColor = type === CLIENT_TYPES.LARGE ? 'border-yellow-100 hover:border-yellow-400' : 'border-emerald-100 hover:border-emerald-400';
                const checkColor = type === CLIENT_TYPES.LARGE ? 'text-yellow-500' : 'text-emerald-500';
                
                return (
                  <div 
                    key={type}
                    className={`bg-white rounded-2xl shadow-lg p-8 border-2 ${borderColor} transition-all hover:shadow-xl hover:-translate-y-1 text-center ${
                      isCurrent ? 'ring-2 ring-offset-2 ring-opacity-50' : ''
                    }`}
                    style={{ 
                      ringColor: type === CLIENT_TYPES.LARGE ? COLORS.primary.yellow : COLORS.primary.green 
                    }}
                  >
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ backgroundColor: config.iconBgColor }}
                    >
                      <i className={`${config.icon} text-3xl`} style={{ color: config.iconColor }}></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {type === CLIENT_TYPES.LARGE ? 'Large Enterprises' : 'Small Sellers'}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {type === CLIENT_TYPES.LARGE 
                        ? 'Scaling fast? We handle high-volume orders with precision, custom packaging, dedicated warehousing, and priority logistics tailored to your brand.'
                        : 'Just starting out? No minimum order requirement. We help new dropshippers get started with zero barriers, flexible sourcing, and personal support.'}
                    </p>
                    <ul className="space-y-2 text-left">
                      {config.benefits.map((item, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-700">
                          <i className={`ri-check-line ${checkColor} mr-2`}></i>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    {!isCurrent && (
                      <button
                        onClick={() => navigate(`/contact-us?type=${type}`)}
                        className="mt-6 text-sm font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer hover:opacity-90"
                        style={{ 
                          backgroundColor: type === CLIENT_TYPES.LARGE ? COLORS.primary.yellow : COLORS.primary.green,
                          color: 'white'
                        }}
                      >
                        Switch to {type === CLIENT_TYPES.LARGE ? 'Enterprise' : 'Standard'} Path
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-16 bg-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Submit Your Application
              </h2>
              <p className="text-gray-600">
                Fill in the details below and we'll get back to you within 24 hours.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <form onSubmit={handleSubmit}>
                <div className="space-y-5">
                  {formFields}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full text-white py-4 rounded-lg font-semibold text-lg transition-all cursor-pointer hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98]"
                    style={{ backgroundColor: COLORS.primary.green }}
                  >
                    {isSubmitting ? FORM_CONFIG.submitText.submitting : FORM_CONFIG.submitText.idle}
                  </button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-center animate-fadeIn">
                      <i className="ri-checkbox-circle-line mr-2"></i>
                      {VALIDATION_MESSAGES.submissionSuccess}
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-center animate-fadeIn">
                      <i className="ri-error-warning-line mr-2"></i>
                      {VALIDATION_MESSAGES.submissionError}
                    </div>
                  )}
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              {CONTACT_INFO.map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors">
                  <i className={`${item.icon} text-2xl mb-2 block`} style={{ color: item.color }}></i>
                  <div className="text-xs text-gray-500">{item.label}</div>
                  <div className="text-sm font-semibold text-gray-800 mt-1">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      {/* Additional animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
