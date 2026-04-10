import { useState } from 'react';

export default function ApplySection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    requirements: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill in name and phone');
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      const TO_EMAIL = 'business@kungfubuy.com';
      const emailBody = `
New Application from Home Page Apply Section

Name: ${formData.name}
Phone: ${formData.phone}
Company: ${formData.company || 'Not provided'}
Requirements: ${formData.requirements || 'Not provided'}

---
This email is from the website home page apply section
      `;
      const formDataToSend = new FormData();
      formDataToSend.append('email', TO_EMAIL);
      formDataToSend.append('subject', `New Application - ${formData.name}`);
      formDataToSend.append('message', emailBody);
      formDataToSend.append('_next', window.location.origin);
      formDataToSend.append('_captcha', 'false');

      const response = await fetch('https://formsubmit.co/ajax/' + TO_EMAIL, {
        method: 'POST',
        body: formDataToSend,
      });
      const result = await response.json();
      if (response.ok && result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', company: '', requirements: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="apply" className="py-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold text-white mb-4" style={{ backgroundColor: '#059669' }}>
            Quick Apply
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Start Your Journey Today
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Fill in your details and our team will provide a tailored solution for your business — whether you're a growing seller or an established enterprise.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 border border-gray-100">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+1 123 456 7890"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* Company - full width on mobile, half on md+ */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company or store name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* Requirements */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Requirements
                </label>
                <textarea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Describe your product type, order volume, or specific needs..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all resize-none"
                />
              </div>

              {/* Submit */}
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-white py-4 rounded-lg font-semibold text-lg transition-all cursor-pointer hover:opacity-90 disabled:opacity-50"
                  style={{ backgroundColor: '#059669' }}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </div>
            </div>

            {submitStatus === 'success' && (
              <div className="mt-4 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-center">
                <i className="ri-checkbox-circle-line mr-2"></i>
                Thank you! We will contact you within 24 hours.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mt-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-center">
                <i className="ri-error-warning-line mr-2"></i>
                Submission failed. Please try again later.
              </div>
            )}
          </form>

          {/* Trust Badges */}
          <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-3 gap-4 text-center">
            {[
              { icon: 'ri-shield-check-line', label: '100% Secure' },
              { icon: 'ri-time-line', label: '24h Response' },
              { icon: 'ri-team-line', label: 'Dedicated Support' },
            ].map((badge, i) => (
              <div key={i} className="flex flex-col items-center">
                <i className={`${badge.icon} text-xl mb-1`} style={{ color: '#059669' }}></i>
                <span className="text-xs text-gray-500">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
