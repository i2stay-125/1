
export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Register for Free',
      description: 'Click here to register your Free Kungfubuy account. We will contact you within 24 hours via Whatsapp to get you setup.',
      icon: 'ri-user-add-line'
    },
    {
      number: '02',
      title: 'Submit Quotes',
      description: 'Submit your product requests through our automated quoting system. Our procurement team will source the best options, compare factories, verify quality, and return verified quotes.',
      icon: 'ri-search-line'
    },
    {
      number: '03',
      title: 'Product Procurement',
      description: 'Once your quotes are approved, orders sync to our system. We begin procurement immediately—working with suppliers and preparing products for inspection and warehousing.',
      icon: 'ri-shopping-bag-line'
    },
    {
      number: '04',
      title: 'Quality Check & Warehousing',
      description: 'When products arrive, our professional QC team inspects their appearance, functionality, packaging, and compliance. Approved items are stored in our warehouse and prepared for fast fulfillment.',
      icon: 'ri-checkbox-circle-line'
    },
    {
      number: '05',
      title: 'Order Processing',
      description: 'When your customers place orders, we process them immediately—picking, verifying, packing, and labeling each parcel for fast, accurate fulfillment.',
      icon: 'ri-file-list-line'
    },
    {
      number: '06',
      title: 'Fast Worldwide Dispatch',
      description: 'Your products are on the way. Through our reliable global logistics network — including express lines — parcels are shipped quickly and securely with full tracking until delivery.',
      icon: 'ri-truck-line'
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple and Effective Workflow
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Get started in a few simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-gradient-to-br from-emerald-50 to-white p-8 rounded-2xl border-2 border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg cursor-pointer"
            >
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-xl flex items-center justify-center shadow-lg" style={{ backgroundColor: '#059669' }}>
                <span className="text-2xl font-bold text-white">{step.number}</span>
              </div>
              <div className="mt-6">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#F5C23D' }}>
                  <i className={`${step.icon} text-2xl text-gray-900`}></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              {(index === 0 || index === 1 || index === 3 || index === 4) && (
                <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                  <i className="ri-arrow-right-line text-3xl text-emerald-300"></i>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="#contact" 
            className="whitespace-nowrap inline-block text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 cursor-pointer"
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
