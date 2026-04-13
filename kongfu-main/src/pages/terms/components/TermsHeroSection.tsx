export default function TermsHeroSection() {
  return (
    <section 
      className="relative py-16 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1E40AF 0%, #1E3A8A 100%)'
      }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-300 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Terms and Conditions
          </h1>
          <p className="text-white/80 mt-2">
            Last Updated: January 2025
          </p>
        </div>
      </div>
    </section>
  );
}
