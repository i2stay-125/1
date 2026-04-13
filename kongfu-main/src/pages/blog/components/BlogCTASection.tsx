export default function BlogCTASection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-emerald-600 via-emerald-500 to-emerald-700 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <p className="text-blue-200 text-base sm:text-lg mb-4">Ready to start?</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Start Your E-commerce Journey?
          </h2>
          <p className="text-blue-100 text-base sm:text-lg md:text-xl mb-10 max-w-3xl mx-auto">
            Contact KungfuBuy now to get professional Dropshipping solutions and let us help your business grow rapidly
          </p>
          <a
            href="/#contact"
            className="whitespace-nowrap inline-block bg-white text-emerald-600 px-6 sm:px-10 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
          >
            Contact Us Now
          </a>
        </div>
      </div>
    </section>
  );
}