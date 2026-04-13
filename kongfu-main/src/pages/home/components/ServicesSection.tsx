export default function ServicesSection() {
  const services = [
    {
      icon: 'ri-shopping-cart-line',
      title: 'Product Sourcing',
      description:
        'Our sourcing team works directly with factories and top-tier marketplaces to secure quality products at unbeatable prices. With hands-on inspection and transparent communication, we guarantee consistency, reliability, and the best value for your business.',
      features: [
        'Direct Factory Sourcing',
        'In-House Inspection',
        'Price Negotiation',
        "Real Photo's and Sizing",
      ],
    },
    {
      icon: 'ri-link-m',
      title: 'Direct System Integration',
      description:
        'Kungfubuy syncs effortlessly with leading e-commerce platforms so your orders flow automatically — error-free and in real time. Whether you run Shopify, TikTok Shop, or WooCommerce, our smart system handles synchronization, order tracking, and status updates without you lifting a finger.',
      features: ['Order Syncing', 'Quick Quotations', 'Order Management', 'Shipping Status'],
    },
    {
      icon: 'ri-store-line',
      title: 'Warehouse Management',
      description:
        'Our warehouse is built for modern brands: intelligent inventory systems, quality checks, and instant picking for faster delivery. Every product is inspected, ensuring your customers always receive what they expect — and nothing less.',
      features: [
        'Smart Warehousing',
        'Product Inspection',
        'Instant Picking',
        'Careful Packaging',
      ],
    },
    {
      icon: 'ri-box-3-line',
      title: 'Custom Packaging',
      description:
        'Stand out in a crowded market with fully customized packaging solutions. Whether you want premium boxes, eco-friendly materials, or unique gift packaging, we help you create an unboxing experience that strengthens your brand identity.',
      features: [
        'Branded Packaging',
        'Gift Packaging',
        'Protection Packaging',
        'Eco-friendly Materials',
      ],
    },
    {
      icon: 'ri-plane-line',
      title: 'International Logistics',
      description:
        'We partner with trusted logistics providers to bring you stable, affordable, and predictable delivery routes. From express air shipping to large-volume solutions, Kungfubuy ensures your parcels arrive on time — with full tracking and consistent performance.',
      features: [
        'Express Air Shipping',
        '4-10 Days Delivery*',
        'On-time Delivery',
        'Real-time Tracking',
      ],
    },
    {
      icon: 'ri-customer-service-line',
      title: 'After-Sales Support',
      description:
        'Our multilingual team is available 24/7 to assist with orders, issues, and shipping inquiries. We resolve problems quickly, keep you updated, and ensure your business runs smoothly every day — because we\'re more than a supplier; we\'re your operational partner.',
      features: [
        'Online Support',
        'Order Tracking & Updates',
        'Fast Issue Resolution',
        'Data Reports',
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">OUR SERVICES</h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            From product sourcing to final delivery, Kungfubuy helps you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: '#059669' }}
              >
                <i className={`${service.icon} text-3xl text-white`}></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <i className="ri-check-line text-green-500 mr-2 w-5 h-5 flex items-center justify-center"></i>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}