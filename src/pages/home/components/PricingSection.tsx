
export default function PricingSection() {
  const plans = [
    {
      name: 'Starter Plan',
      price: '€299',
      period: '/month',
      description: 'Perfect for new independent store entrepreneurs',
      features: [
        '100 orders per month',
        'Basic product sourcing service',
        'Standard quality inspection',
        '15-20 days delivery time',
        'Email customer support',
        'Basic data reports',
        'Free storage for 30 days'
      ],
      popular: false,
      buttonText: 'Choose Plan'
    },
    {
      name: 'Professional Plan',
      price: '€599',
      period: '/month',
      description: 'Ideal for growing e-commerce businesses',
      features: [
        '500 orders per month',
        'Priority product sourcing',
        'Strict QC + photo confirmation',
        '10-15 days fast delivery',
        'Online customer support',
        'Advanced data analytics',
        'Free storage for 60 days',
        'Custom packaging service',
        'Dedicated account manager'
      ],
      popular: true,
      buttonText: 'Order Now'
    },
    {
      name: 'Enterprise Plan',
      price: 'Custom',
      period: '',
      description: 'Designed for large e-commerce enterprises',
      features: [
        'Unlimited order processing',
        'VIP sourcing channel',
        'Comprehensive QC service',
        '7-10 days express delivery',
        '7×24 customer service',
        'Custom data solutions',
        'Free long-term storage',
        'Brand custom packaging',
        'Dedicated team service',
        'API system integration',
        'Priority logistics channel'
      ],
      popular: false,
      buttonText: 'Contact Us'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Flexible <strong>Pricing Plans</strong>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the right service plan based on your business scale, all plans can be customized according to actual needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl transition-all duration-300 flex flex-col ${
                plan.popular 
                  ? 'shadow-xl ring-2 ring-[#059669] scale-105 z-10' 
                  : 'shadow-lg border border-gray-100 hover:shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#059669] text-white px-4 py-1 text-sm font-medium rounded-full shadow-md">
                  Most Popular
                </div>
              )}
              
              <div className="p-8 flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-500 text-sm mb-6 h-10">
                  {plan.description}
                </p>
                
                <div className="mb-8 flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900 tracking-tight">{plan.price}</span>
                  <span className="text-gray-500 ml-2">{plan.period}</span>
                </div>

                <a 
                  href="#contact"
                  className={`w-full block text-center py-3 px-6 rounded-full font-semibold transition-all mb-8 cursor-pointer ${
                    plan.popular
                      ? 'bg-[#059669] text-white hover:bg-[#047857] shadow-lg hover:shadow-xl'
                      : 'bg-gray-50 text-gray-900 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {plan.buttonText}
                </a>

                <div className="space-y-4">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">What's included</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-50 flex items-center justify-center mt-0.5 mr-3">
                          <i className="ri-check-line text-green-500 text-xs"></i>
                        </div>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Need more information or a custom plan?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center font-semibold cursor-pointer text-[#059669] hover:text-[#047857] transition-colors duration-300"
          >
            Contact Our Sales Team <i className="ri-arrow-right-line ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
