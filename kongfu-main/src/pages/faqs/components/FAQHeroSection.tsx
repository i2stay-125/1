export default function FAQHeroSection() {
  return (
    <section 
      className="relative py-16 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #059669 0%, #047857 100%)'
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-300 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-yellow-400 text-lg font-medium">
          Frequently Asked Questions
        </p>
      </div>
    </section>
  );
}