export default function BlogHeroSection() {
  return (
    <section className="relative w-full py-20 overflow-hidden" style={{ backgroundColor: '#059669' }}>
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-400 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute top-10 left-10 sm:top-20 sm:left-20 opacity-20">
        <i className="ri-article-line text-4xl sm:text-6xl text-white"></i>
      </div>
      <div className="absolute bottom-10 right-16 sm:bottom-20 sm:right-32 opacity-20">
        <i className="ri-lightbulb-line text-3xl sm:text-5xl text-yellow-400"></i>
      </div>
      <div className="absolute top-20 right-10 sm:top-32 sm:right-20 opacity-15">
        <i className="ri-rocket-line text-5xl sm:text-7xl text-white"></i>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
          <i className="ri-book-open-line text-yellow-400 mr-2 w-5 h-5 flex items-center justify-center"></i>
          <span className="text-white text-sm font-medium">KungfuBuy Knowledge Center</span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Dropshipping Wisdom at <span className="text-yellow-400">KungfuBuy</span>
          <br />
          Empowering Your Business Growth
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
          Professional dropshipping operation strategies, industry insights, and practical tips to help you stand out from the competition and achieve sustainable business growth
        </p>
      </div>
    </section>
  );
}