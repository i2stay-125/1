export default function CTASection() {
  return (
    <section 
      className="relative py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #059669 0%, #047857 100%)'
      }}
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: 'linear-gradient(45deg, rgba(255, 215, 0, 0.3) 0%, rgba(147, 197, 253, 0.3) 50%, rgba(255, 215, 0, 0.3) 100%)'
        }}
      >
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Optimize Your Supply Chain Today
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Join thousands of sellers who trust Kungfubuy, and grow your brand with us.
          </p>
          
          <a 
            href="#contact" 
            className="whitespace-nowrap inline-block bg-white text-emerald-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-gray-100 transition-all transform hover:scale-105 cursor-pointer"
          >
            GET A FREE QUOTE
          </a>

          <div className="mt-8 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 max-w-5xl mx-auto">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:bg-white/15 transition-all">
              <div className="text-2xl sm:text-3xl font-bold mb-2 text-yellow-400">
                <i className="ri-price-tag-3-line mr-1 sm:mr-2"></i>
                Save
              </div>
              <div className="text-blue-100 text-xs sm:text-sm">Competitive Pricing</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:bg-white/15 transition-all">
              <div className="text-2xl sm:text-3xl font-bold mb-2 text-yellow-400">
                <i className="ri-line-chart-line mr-1 sm:mr-2"></i>
                Scale
              </div>
              <div className="text-blue-100 text-xs sm:text-sm">Growing With You</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:bg-white/15 transition-all">
              <div className="text-2xl sm:text-3xl font-bold mb-2 text-yellow-400">
                <i className="ri-customer-service-line mr-1 sm:mr-2"></i>
                24/7
              </div>
              <div className="text-blue-100 text-xs sm:text-sm">Customer Support</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:bg-white/15 transition-all">
              <div className="text-2xl sm:text-3xl font-bold mb-2 text-yellow-400">
                <i className="ri-global-line mr-1 sm:mr-2"></i>
                Global
              </div>
              <div className="text-blue-100 text-xs sm:text-sm">Worldwide Shipping</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
