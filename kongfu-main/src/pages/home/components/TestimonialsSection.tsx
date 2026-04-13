export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Marcus Weber',
      company: 'Nordic Home Decor',
      country: 'Germany',
      avatar: '/images/euro-client-001.jpg',
      rating: 5,
      text: 'We have been working with Kungfubuy for over a year now, and their service is extremely professional. From product sourcing to logistics delivery, every step is smooth. Most importantly, they truly understand the needs of the European market, helping us save a lot of time and costs. Highly recommended!'
    },
    {
      name: 'Sophie Laurent',
      company: 'Chic Fashion Store',
      country: 'France',
      avatar: '/images/euro-client-002.jpg',
      rating: 5,
      text: 'As a fashion e-commerce site, product quality is crucial to us. Kungfubuy\'s quality inspection team is very strict and provides detailed inspection reports every time. The delivery speed is also fast, and customer satisfaction has increased significantly. This is the best supply chain service provider I have ever worked with.'
    },
    {
      name: 'Alessandro Rossi',
      company: 'Tech Gadgets EU',
      country: 'Italy',
      avatar: '/images/euro-client-003.jpg',
      rating: 5,
      text: 'Kungfubuy\'s team responds very quickly. Whenever there is a problem, they can solve it promptly. The pricing is transparent with no hidden fees. Their warehouse management system is also very advanced, allowing real-time inventory checks. Very pleasant cooperation!'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Customer Testimonials
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Dropshippers from around the world share their experience working with Kungfubuy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-gray-100 font-serif text-6xl opacity-50 group-hover:text-blue-50 transition-colors duration-300">"</div>
              
              <div className="relative z-10 flex items-center mb-6">
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  title={`${testimonial.name} - ${testimonial.company}`}
                  className="w-14 h-14 rounded-full object-cover object-top mr-4 ring-2 ring-gray-100 group-hover:ring-primary transition-all duration-300"
                />
                <div>
                  <div className="font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>

              <div className="relative z-10 mb-4 flex space-x-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-yellow-400 text-sm"></i>
                ))}
              </div>

              <p className="relative z-10 text-gray-600 leading-relaxed text-sm">
                "{testimonial.text}"
              </p>
              
              <div className="relative z-10 mt-6 pt-4 border-t border-gray-50 flex items-center text-xs text-gray-400">
                <i className="ri-map-pin-line mr-1.5"></i>
                {testimonial.country}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
