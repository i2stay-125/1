import { useNavigate, useLocation } from 'react-router-dom';

export default function ValuesSection() {
  const navigate = useNavigate();
  const location = useLocation();

  // 处理跳转到contact区域
  const handleContactClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (location.pathname === '/') {
      // 如果在首页，直接滚动到contact区域
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // 如果在其他页面，先跳转到首页，然后滚动到contact区域
      navigate('/');
      // 等待页面加载完成后再滚动
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          // 如果第一次没找到，再尝试一次（可能页面还在加载）
          setTimeout(() => {
            const section = document.getElementById('contact');
            if (section) {
              section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 200);
        }
      }, 300);
    }
  };
  const values = [
    {
      icon: 'ri-eye-line',
      title: 'Transparent',
      description: 'Open sourcing prices, reasonable service fees'
    },
    {
      icon: 'ri-flashlight-line',
      title: 'Efficient',
      description: 'Fast picking, packing, and shipping'
    },
    {
      icon: 'ri-settings-3-line',
      title: 'Flexible',
      description: 'Small orders prioritized, one-click store integration'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Reliable',
      description: '7×24 customer service, global shipping, fast after-sales response'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-emerald-100 text-emerald-600 px-4 py-2 rounded-full text-sm font-semibold">
              Our Values
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four core values ensuring the highest quality service experience for every dropshippers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200"
            >
              {/* Unified Blue Gradient Background on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(to bottom right, #EBF0FA, #D6E2F5)' }}></div>
              
              <div className="relative p-8 text-center">
                {/* Icon with Unified Blue Theme */}
                <div 
                  className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center text-white text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: '#059669' }}
                >
                  <i className={value.icon}></i>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                  {value.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 rounded-2xl p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Start Your Dropshipping Journey?
              </h3>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                Join KungfuBuy and let us create a success story in dropshipping together
              </p>
              <a 
                href="/#contact"
                onClick={handleContactClick}
                className="inline-flex items-center gap-2 bg-yellow-400 text-primary-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap cursor-pointer"
              >
                <span>GET A FREE QUOTE</span>
                <i className="ri-arrow-right-line text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}