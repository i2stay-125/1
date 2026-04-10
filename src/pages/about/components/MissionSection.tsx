export default function MissionSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-yellow-400 text-primary-800 px-4 py-2 rounded-full text-sm font-semibold">
              Our Mission
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-t-4 border-emerald-600">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                  <i className="ri-rocket-line text-2xl text-white"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Make Dropshipping Easier
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Enable every dropshippers to obtain <strong className="text-emerald-600">efficient fulfillment</strong> and <strong className="text-emerald-600">professional service</strong> at the <strong className="text-emerald-600">lowest cost</strong>.
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                        <i className="ri-user-star-line text-xl text-white"></i>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900">New Sellers</h4>
                    </div>
                    <p className="text-gray-700">
                      Even with zero experience, you can get started quickly. We provide full guidance and support.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                        <i className="ri-trophy-line text-xl text-white"></i>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900">Growing Sellers</h4>
                    </div>
                    <p className="text-gray-700">
                      Build your brand, scale up your business. We help you achieve bigger goals.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-xl p-8 text-center">
                <p className="text-xl md:text-2xl font-bold text-white">
                  No matter what stage you are at, <span className="text-yellow-400">KungfuBuy</span> can help you achieve your goals
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}