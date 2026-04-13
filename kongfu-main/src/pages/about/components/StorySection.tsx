
export default function StorySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/30faa563d3fbda24538e2f558ac20758.png"
                alt="KungfuBuy Team"
                className="w-full h-auto object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-block mb-4">
              <span className="bg-emerald-100 text-emerald-600 px-4 py-2 rounded-full text-sm font-semibold">
                Our Story
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                <strong className="text-emerald-600">KungfuBuy</strong> is a dynamic young Dropshipping Agent focused on providing one-stop Dropshipping solutions for global dropshippers.
              </p>
              <p>
                We have our own <strong className="text-emerald-600">sourcing team</strong>, <strong className="text-emerald-600">warehouse</strong>, and <strong className="text-emerald-600">professional packing fulfillment team</strong>. Every step is under control, aiming to help every dropshippers start easily and grow quickly.
              </p>
              <div className="bg-gradient-to-r from-emerald-50 to-yellow-50 border-l-4 border-emerald-600 p-6 rounded-r-lg">
                <p className="text-blue-900 font-medium">
                  We believe that through professional service and reliable fulfillment capabilities, every dropshippers can achieve success in the dropshipping field.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}