export default function AboutHeroSection() {
  return (
    <section 
      className="relative py-20 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, #059669 0%, #047857 100%)`
      }}
    >
      {/* 装饰性背景元素 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-1/3 w-24 h-24 bg-white rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 小标签 */}
        <div className="inline-flex items-center bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/30 rounded-full px-4 py-2 mb-6">
          <i className="ri-team-line mr-2 text-yellow-400"></i>
          <span className="text-sm font-medium text-yellow-300">About KungfuBuy</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          About Us
        </h1>

        <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
          A dynamic young team providing professional dropshipping solutions for global dropshippers
        </p>

        {/* 底部装饰图标 */}
        <div className="flex justify-center items-center gap-8 mt-12">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center bg-yellow-400/20 rounded-full mb-2">
              <i className="ri-global-line text-2xl text-yellow-400"></i>
            </div>
            <span className="text-xs text-blue-200">Global Service</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center bg-yellow-400/20 rounded-full mb-2">
              <i className="ri-truck-line text-2xl text-yellow-400"></i>
            </div>
            <span className="text-xs text-blue-200">Fast Shipping</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center bg-yellow-400/20 rounded-full mb-2">
              <i className="ri-customer-service-2-line text-2xl text-yellow-400"></i>
            </div>
            <span className="text-xs text-blue-200">24/7 Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
