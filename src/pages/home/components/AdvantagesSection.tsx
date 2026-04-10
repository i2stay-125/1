export default function AdvantagesSection() {
  const advantages = [
    {
      icon: 'ri-flashlight-line',
      title: 'Fast & Reliable Support',
      description: 'Fast quotes, efficient order processing, and responsive after-sales support. Our team works in real time to deliver quick, reliable solutions and keep your brand running smoothly.',
      image: '/images/eccefacbb9dd4c3104dcdf4d0a8583ee.png'
    },
    {
      icon: 'ri-building-4-line',
      title: 'Self-operated Warehouses',
      description: 'Your products are stored, inspected, and fulfilled by our most advanced warehouses. With efficient inventory control, strict quality inspections and reliable storage, we ensure consistent, and reliable order processing.',
      image: '/images/f5868b78e3222d78fe509859025bbb5f.png'
    },
    {
      icon: 'ri-money-dollar-circle-line',
      title: 'Lower Operating Costs',
      description: 'Through factory-direct sourcing, smart logistics, and optimized processes, we help you reduce operating costs while maintaining strong quality. Higher efficiency for us means higher profit margins for you.',
      image: '/images/278e7d502ef55100f5654d11f2ffa568.jpeg'
    },
    {
      icon: 'ri-rocket-line',
      title: 'Scale Without Limits',
      description: 'From first orders to high-volume scaling, we grow with you every step of the way. With flexible terms, zero barriers, and a fulfillment system built for any level of demand. We continually expand our services to support your brand as it grows.',
      image: '/images/adv-casual-004.jpg'
    }
  ];

  return (
    <section id="advantages" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Kungfubuy?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Kungfubuy keeps China fulfillment simple and reliable. Clear communication and proactive support ensure smooth operations, so you can focus on growing your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={advantage.image}
                  alt={advantage.title}
                  title={`KungfuBuy ${advantage.title} - Dropshipping服务优势`}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  style={index === 3 ? { filter: 'sepia(0.15) saturate(1.1) brightness(1.05)' } : {}}
                />
              </div>
              <div className="p-8 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style={{ backgroundColor: '#059669' }}>
                    <i className={`${advantage.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {advantage.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
