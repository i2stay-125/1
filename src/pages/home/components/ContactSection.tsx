import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    orderVolume: '',
    productLink: ''
  });
  const [countryCode, setCountryCode] = useState('');
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const countries = [
    { code: '+93', name: 'Afghanistan', flag: '🇦🇫' },
    { code: '+355', name: 'Albania', flag: '🇦🇱' },
    { code: '+213', name: 'Algeria', flag: '🇩🇿' },
    { code: '+376', name: 'Andorra', flag: '🇦🇩' },
    { code: '+244', name: 'Angola', flag: '🇦🇴' },
    { code: '+54', name: 'Argentina', flag: '🇦🇷' },
    { code: '+374', name: 'Armenia', flag: '🇦🇲' },
    { code: '+61', name: 'Australia', flag: '🇦🇺' },
    { code: '+43', name: 'Austria', flag: '🇦🇹' },
    { code: '+994', name: 'Azerbaijan', flag: '🇦🇿' },
    { code: '+1242', name: 'Bahamas', flag: '🇧🇸' },
    { code: '+973', name: 'Bahrain', flag: '🇧🇭' },
    { code: '+880', name: 'Bangladesh', flag: '🇧🇩' },
    { code: '+1246', name: 'Barbados', flag: '🇧🇧' },
    { code: '+375', name: 'Belarus', flag: '🇧🇾' },
    { code: '+32', name: 'Belgium', flag: '🇧🇪' },
    { code: '+501', name: 'Belize', flag: '🇧🇿' },
    { code: '+229', name: 'Benin', flag: '🇧🇯' },
    { code: '+1441', name: 'Bermuda', flag: '🇧🇲' },
    { code: '+975', name: 'Bhutan', flag: '🇧🇹' },
    { code: '+591', name: 'Bolivia', flag: '🇧🇴' },
    { code: '+387', name: 'Bosnia and Herzegovina', flag: '🇧🇦' },
    { code: '+267', name: 'Botswana', flag: '🇧🇼' },
    { code: '+55', name: 'Brazil', flag: '🇧🇷' },
    { code: '+673', name: 'Brunei', flag: '🇧🇳' },
    { code: '+359', name: 'Bulgaria', flag: '🇧🇬' },
    { code: '+226', name: 'Burkina Faso', flag: '🇧🇫' },
    { code: '+257', name: 'Burundi', flag: '🇧🇮' },
    { code: '+855', name: 'Cambodia', flag: '🇰🇭' },
    { code: '+237', name: 'Cameroon', flag: '🇨🇲' },
    { code: '+1', name: 'Canada', flag: '🇨🇦' },
    { code: '+238', name: 'Cape Verde', flag: '🇨🇻' },
    { code: '+236', name: 'Central African Republic', flag: '🇨🇫' },
    { code: '+235', name: 'Chad', flag: '🇹🇩' },
    { code: '+56', name: 'Chile', flag: '🇨🇱' },
    { code: '+86', name: 'China', flag: '🇨🇳' },
    { code: '+57', name: 'Colombia', flag: '🇨🇴' },
    { code: '+269', name: 'Comoros', flag: '🇰🇲' },
    { code: '+242', name: 'Congo', flag: '🇨🇬' },
    { code: '+243', name: 'Congo (DRC)', flag: '🇨🇩' },
    { code: '+682', name: 'Cook Islands', flag: '🇨🇰' },
    { code: '+506', name: 'Costa Rica', flag: '🇨🇷' },
    { code: '+385', name: 'Croatia', flag: '🇭🇷' },
    { code: '+53', name: 'Cuba', flag: '🇨🇺' },
    { code: '+357', name: 'Cyprus', flag: '🇨🇾' },
    { code: '+420', name: 'Czech Republic', flag: '🇨🇿' },
    { code: '+225', name: 'Côte d\'Ivoire', flag: '🇨🇮' },
    { code: '+45', name: 'Denmark', flag: '🇩🇰' },
    { code: '+253', name: 'Djibouti', flag: '🇩🇯' },
    { code: '+1767', name: 'Dominica', flag: '🇩🇲' },
    { code: '+1809', name: 'Dominican Republic', flag: '🇩🇴' },
    { code: '+670', name: 'East Timor', flag: '🇹🇱' },
    { code: '+593', name: 'Ecuador', flag: '🇪🇨' },
    { code: '+20', name: 'Egypt', flag: '🇪🇬' },
    { code: '+503', name: 'El Salvador', flag: '🇸🇻' },
    { code: '+240', name: 'Equatorial Guinea', flag: '🇬🇶' },
    { code: '+291', name: 'Eritrea', flag: '🇪🇷' },
    { code: '+372', name: 'Estonia', flag: '🇪🇪' },
    { code: '+251', name: 'Ethiopia', flag: '🇪🇹' },
    { code: '+500', name: 'Falkland Islands', flag: '🇫🇰' },
    { code: '+679', name: 'Fiji', flag: '🇫🇯' },
    { code: '+358', name: 'Finland', flag: '🇫🇮' },
    { code: '+33', name: 'France', flag: '🇫🇷' },
    { code: '+594', name: 'French Guiana', flag: '🇬🇫' },
    { code: '+689', name: 'French Polynesia', flag: '🇵🇫' },
    { code: '+241', name: 'Gabon', flag: '🇬🇦' },
    { code: '+220', name: 'Gambia', flag: '🇬🇲' },
    { code: '+995', name: 'Georgia', flag: '🇬🇪' },
    { code: '+49', name: 'Germany', flag: '🇩🇪' },
    { code: '+233', name: 'Ghana', flag: '🇬🇭' },
    { code: '+30', name: 'Greece', flag: '🇬🇷' },
    { code: '+1473', name: 'Grenada', flag: '🇬🇩' },
    { code: '+502', name: 'Guatemala', flag: '🇬🇹' },
    { code: '+224', name: 'Guinea', flag: '🇬🇳' },
    { code: '+245', name: 'Guinea-Bissau', flag: '🇬🇼' },
    { code: '+592', name: 'Guyana', flag: '🇬🇾' },
    { code: '+509', name: 'Haiti', flag: '🇭🇹' },
    { code: '+504', name: 'Honduras', flag: '🇭🇳' },
    { code: '+852', name: 'Hong Kong', flag: '🇭🇰' },
    { code: '+36', name: 'Hungary', flag: '🇭🇺' },
    { code: '+354', name: 'Iceland', flag: '🇮🇸' },
    { code: '+91', name: 'India', flag: '🇮🇳' },
    { code: '+62', name: 'Indonesia', flag: '🇮🇩' },
    { code: '+98', name: 'Iran', flag: '🇮🇷' },
    { code: '+964', name: 'Iraq', flag: '🇮🇶' },
    { code: '+353', name: 'Ireland', flag: '🇮🇪' },
    { code: '+972', name: 'Israel', flag: '🇮🇱' },
    { code: '+39', name: 'Italy', flag: '🇮🇹' },
    { code: '+1876', name: 'Jamaica', flag: '🇯🇲' },
    { code: '+81', name: 'Japan', flag: '🇯🇵' },
    { code: '+962', name: 'Jordan', flag: '🇯🇴' },
    { code: '+7', name: 'Kazakhstan', flag: '🇰🇿' },
    { code: '+254', name: 'Kenya', flag: '🇰🇪' },
    { code: '+686', name: 'Kiribati', flag: '🇰🇮' },
    { code: '+383', name: 'Kosovo', flag: '🇽🇰' },
    { code: '+965', name: 'Kuwait', flag: '🇰🇼' },
    { code: '+996', name: 'Kyrgyzstan', flag: '🇰🇬' },
    { code: '+856', name: 'Laos', flag: '🇱🇦' },
    { code: '+371', name: 'Latvia', flag: '🇱🇻' },
    { code: '+961', name: 'Lebanon', flag: '🇱🇧' },
    { code: '+266', name: 'Lesotho', flag: '🇱🇸' },
    { code: '+231', name: 'Liberia', flag: '🇱🇷' },
    { code: '+218', name: 'Libya', flag: '🇱🇾' },
    { code: '+423', name: 'Liechtenstein', flag: '🇱🇮' },
    { code: '+370', name: 'Lithuania', flag: '🇱🇹' },
    { code: '+352', name: 'Luxembourg', flag: '🇱🇺' },
    { code: '+853', name: 'Macau', flag: '🇲🇴' },
    { code: '+261', name: 'Madagascar', flag: '🇲🇬' },
    { code: '+265', name: 'Malawi', flag: '🇲🇼' },
    { code: '+60', name: 'Malaysia', flag: '🇲🇾' },
    { code: '+960', name: 'Maldives', flag: '🇲🇻' },
    { code: '+223', name: 'Mali', flag: '🇲🇱' },
    { code: '+356', name: 'Malta', flag: '🇲🇹' },
    { code: '+692', name: 'Marshall Islands', flag: '🇲🇭' },
    { code: '+222', name: 'Mauritania', flag: '🇲🇷' },
    { code: '+230', name: 'Mauritius', flag: '🇲🇺' },
    { code: '+262', name: 'Mayotte', flag: '🇾🇹' },
    { code: '+52', name: 'Mexico', flag: '🇲🇽' },
    { code: '+691', name: 'Micronesia', flag: '🇫🇲' },
    { code: '+373', name: 'Moldova', flag: '🇲🇩' },
    { code: '+377', name: 'Monaco', flag: '🇲🇨' },
    { code: '+976', name: 'Mongolia', flag: '🇲🇳' },
    { code: '+382', name: 'Montenegro', flag: '🇲🇪' },
    { code: '+212', name: 'Morocco', flag: '🇲🇦' },
    { code: '+258', name: 'Mozambique', flag: '🇲🇿' },
    { code: '+95', name: 'Myanmar', flag: '🇲🇲' },
    { code: '+264', name: 'Namibia', flag: '🇳🇦' },
    { code: '+674', name: 'Nauru', flag: '🇳🇷' },
    { code: '+977', name: 'Nepal', flag: '🇳🇵' },
    { code: '+31', name: 'Netherlands', flag: '🇳🇱' },
    { code: '+687', name: 'New Caledonia', flag: '🇳🇨' },
    { code: '+64', name: 'New Zealand', flag: '🇳🇿' },
    { code: '+505', name: 'Nicaragua', flag: '🇳🇮' },
    { code: '+227', name: 'Niger', flag: '🇳🇪' },
    { code: '+234', name: 'Nigeria', flag: '🇳🇬' },
    { code: '+683', name: 'Niue', flag: '🇳🇺' },
    { code: '+389', name: 'North Macedonia', flag: '🇲🇰' },
    { code: '+47', name: 'Norway', flag: '🇳🇴' },
    { code: '+968', name: 'Oman', flag: '🇴🇲' },
    { code: '+92', name: 'Pakistan', flag: '🇵🇰' },
    { code: '+680', name: 'Palau', flag: '🇵🇼' },
    { code: '+507', name: 'Panama', flag: '🇵🇦' },
    { code: '+675', name: 'Papua New Guinea', flag: '🇵🇬' },
    { code: '+595', name: 'Paraguay', flag: '🇵🇾' },
    { code: '+51', name: 'Peru', flag: '🇵🇪' },
    { code: '+63', name: 'Philippines', flag: '🇵🇭' },
    { code: '+48', name: 'Poland', flag: '🇵🇱' },
    { code: '+351', name: 'Portugal', flag: '🇵🇹' },
    { code: '+1787', name: 'Puerto Rico', flag: '🇵🇷' },
    { code: '+974', name: 'Qatar', flag: '🇶🇦' },
    { code: '+262', name: 'Réunion', flag: '🇷🇪' },
    { code: '+40', name: 'Romania', flag: '🇷🇴' },
    { code: '+7', name: 'Russia', flag: '🇷🇺' },
    { code: '+250', name: 'Rwanda', flag: '🇷🇼' },
    { code: '+1869', name: 'Saint Kitts and Nevis', flag: '🇰🇳' },
    { code: '+1758', name: 'Saint Lucia', flag: '🇱🇨' },
    { code: '+1784', name: 'Saint Vincent and the Grenadines', flag: '🇻🇨' },
    { code: '+685', name: 'Samoa', flag: '🇼🇸' },
    { code: '+378', name: 'San Marino', flag: '🇸🇲' },
    { code: '+239', name: 'São Tomé and Príncipe', flag: '🇸🇹' },
    { code: '+966', name: 'Saudi Arabia', flag: '🇸🇦' },
    { code: '+221', name: 'Senegal', flag: '🇸🇳' },
    { code: '+381', name: 'Serbia', flag: '🇷🇸' },
    { code: '+248', name: 'Seychelles', flag: '🇸🇨' },
    { code: '+232', name: 'Sierra Leone', flag: '🇸🇱' },
    { code: '+65', name: 'Singapore', flag: '🇸🇬' },
    { code: '+421', name: 'Slovakia', flag: '🇸🇰' },
    { code: '+386', name: 'Slovenia', flag: '🇸🇮' },
    { code: '+677', name: 'Solomon Islands', flag: '🇸🇧' },
    { code: '+252', name: 'Somalia', flag: '🇸🇴' },
    { code: '+27', name: 'South Africa', flag: '🇿🇦' },
    { code: '+211', name: 'South Sudan', flag: '🇸🇸' },
    { code: '+82', name: 'South Korea', flag: '🇰🇷' },
    { code: '+34', name: 'Spain', flag: '🇪🇸' },
    { code: '+94', name: 'Sri Lanka', flag: '🇱🇰' },
    { code: '+249', name: 'Sudan', flag: '🇸🇩' },
    { code: '+597', name: 'Suriname', flag: '🇸🇷' },
    { code: '+268', name: 'Eswatini', flag: '🇸🇿' },
    { code: '+46', name: 'Sweden', flag: '🇸🇪' },
    { code: '+41', name: 'Switzerland', flag: '🇨🇭' },
    { code: '+963', name: 'Syria', flag: '🇸🇾' },
    { code: '+886', name: 'Taiwan', flag: '🇹🇼' },
    { code: '+992', name: 'Tajikistan', flag: '🇹🇯' },
    { code: '+255', name: 'Tanzania', flag: '🇹🇿' },
    { code: '+66', name: 'Thailand', flag: '🇹🇭' },
    { code: '+228', name: 'Togo', flag: '🇹🇬' },
    { code: '+676', name: 'Tonga', flag: '🇹🇴' },
    { code: '+1868', name: 'Trinidad and Tobago', flag: '🇹🇹' },
    { code: '+216', name: 'Tunisia', flag: '🇹🇳' },
    { code: '+90', name: 'Turkey', flag: '🇹🇷' },
    { code: '+993', name: 'Turkmenistan', flag: '🇹🇲' },
    { code: '+1649', name: 'Turks and Caicos Islands', flag: '🇹🇨' },
    { code: '+688', name: 'Tuvalu', flag: '🇹🇻' },
    { code: '+256', name: 'Uganda', flag: '🇺🇬' },
    { code: '+380', name: 'Ukraine', flag: '🇺🇦' },
    { code: '+971', name: 'United Arab Emirates', flag: '🇦🇪' },
    { code: '+44', name: 'United Kingdom', flag: '🇬🇧' },
    { code: '+1', name: 'United States', flag: '🇺🇸' },
    { code: '+598', name: 'Uruguay', flag: '🇺🇾' },
    { code: '+998', name: 'Uzbekistan', flag: '🇺🇿' },
    { code: '+678', name: 'Vanuatu', flag: '🇻🇺' },
    { code: '+379', name: 'Vatican City', flag: '🇻🇦' },
    { code: '+58', name: 'Venezuela', flag: '🇻🇪' },
    { code: '+84', name: 'Vietnam', flag: '🇻🇳' },
    { code: '+1340', name: 'Virgin Islands (US)', flag: '🇻🇮' },
    { code: '+681', name: 'Wallis and Futuna', flag: '🇼🇫' },
    { code: '+967', name: 'Yemen', flag: '🇾🇪' },
    { code: '+260', name: 'Zambia', flag: '🇿🇲' },
    { code: '+263', name: 'Zimbabwe', flag: '🇿🇼' },
  ];

  const selectedCountry = countries.find(c => c.code === countryCode);

  // 过滤国家列表
  const filteredCountries = countries.filter(country => 
    country.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
    country.code.includes(countrySearch)
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !countryCode) {
      alert('Please fill in all required fields');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // 使用 FormSubmit - 免费服务，无需注册，直接发送到指定邮箱
      const TO_EMAIL = 'business@kungfubuy.com';
      
      // 准备邮件内容
      const emailBody = `
新询盘来自网站联系表单

姓名: ${formData.firstName} ${formData.lastName}
邮箱: ${formData.email}
电话: ${countryCode} ${formData.phone}
预期月订单量: ${formData.orderVolume || '未指定'}
产品链接: ${formData.productLink || '未提供'}

---
此邮件来自网站联系表单
`;

      // 使用 FormSubmit API 发送邮件
      const formDataToSend = new FormData();
      formDataToSend.append('email', TO_EMAIL);
      formDataToSend.append('subject', `新询盘 - ${formData.firstName} ${formData.lastName}`);
      formDataToSend.append('message', emailBody);
      formDataToSend.append('_replyto', formData.email);
      formDataToSend.append('_next', window.location.origin);
      formDataToSend.append('_captcha', 'false');

      const response = await fetch('https://formsubmit.co/ajax/' + TO_EMAIL, {
        method: 'POST',
        body: formDataToSend
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          orderVolume: '',
          productLink: ''
        });
        setCountryCode('');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('邮件发送失败:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fill out the form below to submit your quote request, and our professional team will contact you immediately with the best customized solutions for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form id="contact-form" onSubmit={handleSubmit} data-readdy-form>
              <div className="space-y-5">
                {/* First Name and Last Name - Side by Side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      placeholder="John"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <div className="relative flex gap-2">
                    {/* Country Code Selector */}
                    <div className="relative flex-shrink-0">
                      <button
                        type="button"
                        onClick={() => {
                          setShowCountryDropdown(!showCountryDropdown);
                          setCountrySearch('');
                        }}
                        className={`h-full px-2 sm:px-3 py-3 border rounded-lg text-xs sm:text-sm bg-white flex items-center gap-1 sm:gap-2 cursor-pointer whitespace-nowrap focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ${
                          !countryCode ? 'border-gray-300 text-gray-400' : 'border-gray-300 text-gray-900'
                        }`}
                      >
                        {selectedCountry ? (
                          <>
                            <span className="text-lg sm:text-xl">{selectedCountry.flag}</span>
                            <span className="font-medium text-xs sm:text-sm">{selectedCountry.code}</span>
                          </>
                        ) : (
                          <span className="text-gray-400">Select code</span>
                        )}
                        <i className={`ri-arrow-${showCountryDropdown ? 'up' : 'down'}-s-line text-gray-500`}></i>
                      </button>

                      {/* Dropdown */}
                      {showCountryDropdown && (
                        <>
                          <div 
                            className="fixed inset-0 z-10" 
                            onClick={() => {
                              setShowCountryDropdown(false);
                              setCountrySearch('');
                            }}
                          />
                          <div className="absolute top-full left-0 mt-1 w-64 sm:w-80 bg-white border border-gray-300 rounded-lg shadow-lg z-20 max-h-64 sm:max-h-none">
                            {/* Search Input */}
                            <div className="p-3 border-b border-gray-200">
                              <div className="relative">
                                <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                <input
                                  type="text"
                                  value={countrySearch}
                                  onChange={(e) => setCountrySearch(e.target.value)}
                                  placeholder="Search country or code..."
                                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                  onClick={(e) => e.stopPropagation()}
                                />
                              </div>
                            </div>
                            
                            {/* Country List */}
                            <div className="max-h-60 overflow-y-auto">
                              {filteredCountries.length > 0 ? (
                                filteredCountries.map((country) => (
                                  <button
                                    key={country.code}
                                    type="button"
                                    onClick={() => {
                                      setCountryCode(country.code);
                                      setShowCountryDropdown(false);
                                      setCountrySearch('');
                                    }}
                                    className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3 cursor-pointer transition-colors"
                                  >
                                    <span className="text-xl">{country.flag}</span>
                                    <span className="text-sm text-gray-700 flex-1">{country.name}</span>
                                    <span className="text-sm text-gray-500">{country.code}</span>
                                  </button>
                                ))
                              ) : (
                                <div className="px-4 py-8 text-center text-gray-500 text-sm">
                                  No countries found
                                </div>
                              )}
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Phone Number Input */}
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="flex-1 min-w-0 px-3 sm:px-4 py-3 border border-gray-300 rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      placeholder="123 456 7890"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="orderVolume" className="block text-sm font-semibold text-gray-700 mb-2">
                    Daily Order Level
                  </label>
                  <select
                    id="orderVolume"
                    name="orderVolume"
                    value={formData.orderVolume}
                    onChange={handleChange}
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg text-sm cursor-pointer focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  >
                    <option value="">Please select</option>
                    <option value="0-30">0-30 orders</option>
                    <option value="30-100">30-100 orders</option>
                    <option value="100-500">100-500 orders</option>
                    <option value="500+">500+ orders</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="productLink" className="block text-sm font-semibold text-gray-700 mb-2">
                    Product Link
                  </label>
                  <input
                    type="url"
                    id="productLink"
                    name="productLink"
                    value={formData.productLink}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="https://example.com/product"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="whitespace-nowrap w-full text-white py-4 rounded-lg font-semibold text-lg transition-all disabled:bg-gray-400 disabled:cursor-not-allowed cursor-pointer hover:bg-emerald-700 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 outline-none"
                  style={{ backgroundColor: isSubmitting ? '#9CA3AF' : '#059669' }}
                >
                  {isSubmitting ? 'Submitting...' : 'GET A FREE QUOTE'}
                </button>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                    Thank you for your inquiry! We will contact you within 24 hours.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    Submission failed. Please try again later or contact us directly.
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Right - Company Image */}
          <div className="relative h-full rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/images/0c1e8f139370cce6d922aaa343730a36.jpeg"
              alt="Better 86 Company"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
