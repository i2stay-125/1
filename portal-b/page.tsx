import React from 'react';
import { Link } from 'react-router-dom';
import PortalHeader from '../../components/PortalHeader';
import PortalFooter from '../../components/PortalFooter';

const B_FEATURES = [
  {
    icon: 'ri-store-2-line',
    title: '产品中心',
    desc: '海量商品库，一键代发，支持批量采购',
    link: '/portal-b/products',
    color: 'bg-teal-500',
  },
  {
    icon: 'ri-warehouse-line',
    title: '仓储管理',
    desc: '智能仓储系统，实时库存监控',
    link: '/portal-b/warehouse',
    color: 'bg-blue-500',
  },
  {
    icon: 'ri-truck-line',
    title: '物流管理',
    desc: '多渠道物流对接，全程追踪',
    link: '/portal-b/logistics',
    color: 'bg-purple-500',
  },
  {
    icon: 'ri-palette-line',
    title: '定制服务',
    desc: '个性化定制，满足特殊需求',
    link: '/portal-b/customize',
    color: 'bg-orange-500',
  },
];

const B_STATS = [
  { value: '3000+', label: '合作客户' },
  { value: '8000㎡', label: '履约中心' },
  { value: '75000+', label: '日发货量' },
];

const BENEFITS = [
  {
    icon: 'ri-wallet-3-line',
    title: '保存',
    subtitle: '竞争性定价',
    desc: '透明的价格体系，帮您节省成本',
  },
  {
    icon: 'ri-line-chart-line',
    title: '比例',
    subtitle: '与你共成长',
    desc: '灵活的合作模式，共同发展',
  },
  {
    icon: 'ri-customer-service-2-line',
    title: '24/7',
    subtitle: '客户支持',
    desc: '全天候专业服务团队',
  },
  {
    icon: 'ri-global-line',
    title: '全球',
    subtitle: '全球航运',
    desc: '覆盖全球的物流网络',
  },
];

export default function PortalBPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <PortalHeader type="B" />
      
      <main className="flex-1">
        {/* Hero Section - 参考图片风格 */}
        <section className="relative min-h-[600px] flex items-center">
          {/* 背景图 */}
          <div className="absolute inset-0">
            <img 
              src="/images/hero-bg-001.jpg" 
              alt="Warehouse"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                功夫买
              </h1>
              <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">
                大师代发货
              </h2>
              <p className="text-xl text-gray-200 mb-8">
                即时连接高效的代发货，全天候支持全球航运
              </p>
              
              <div className="flex flex-wrap gap-4 mb-12">
                <Link
                  to="/portal-b/apply"
                  className="px-8 py-4 bg-teal-600 text-white rounded-lg font-semibold text-lg transition-all hover:bg-teal-700 hover:scale-105 cursor-pointer"
                >
                  获取免费报价
                </Link>
                <Link
                  to="/portal-b/products"
                  className="px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-white/50 text-white rounded-lg font-semibold text-lg transition-all hover:bg-white/30 cursor-pointer"
                >
                  服务概述
                </Link>
              </div>
              
              {/* Stats */}
              <div className="flex gap-12">
                {B_STATS.map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-3xl md:text-4xl font-bold text-yellow-400">
                      {stat.value}
                    </div>
                    <div className="text-gray-300 text-sm mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - 绿色背景 + 四个特性卡片 */}
        <section className="py-20 bg-teal-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                今天就优化您的供应链
              </h2>
              <p className="text-xl text-teal-100 max-w-2xl mx-auto">
                加入成千上万信任功夫买的卖家行列，与我们一起壮大你的品牌。
              </p>
            </div>
            
            <div className="text-center mb-12">
              <Link
                to="/portal-b/apply"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-teal-700 rounded-lg font-semibold text-lg transition-all hover:scale-105 cursor-pointer"
              >
                获取免费报价
              </Link>
            </div>
            
            {/* Benefits Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {BENEFITS.map((benefit, idx) => (
                <div 
                  key={idx} 
                  className="bg-teal-500/50 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-teal-500/70 transition-colors"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-yellow-400 rounded-full flex items-center justify-center">
                    <i className={`${benefit.icon} text-2xl text-teal-800`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-yellow-400 mb-1">{benefit.title}</h3>
                  <p className="text-teal-100 font-medium mb-2">{benefit.subtitle}</p>
                  <p className="text-teal-200 text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">核心服务</h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                为企业客户提供全方位的一站式服务支持
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {B_FEATURES.map((feature, idx) => (
                <Link
                  key={idx}
                  to={feature.link}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all group cursor-pointer border border-gray-100"
                >
                  <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <i className={`${feature.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                  <div className="mt-4 text-teal-600 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    了解更多 <i className="ri-arrow-right-line"></i>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">联系我们</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                请填写下方表格提交报价请求，我们的专业团队将立即与您联系，提供最适合您业务的定制解决方案。
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Form */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        名字 <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        placeholder="John"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        姓氏 <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        placeholder="史密斯"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      电子邮件 <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="email" 
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      电话 <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-2">
                      <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all bg-white">
                        <option>选择代码</option>
                        <option>+86</option>
                        <option>+1</option>
                        <option>+44</option>
                      </select>
                      <input 
                        type="tel" 
                        placeholder="123 456 7890"
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      每日订单等级
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all bg-white">
                      <option>请选择</option>
                      <option>0-100</option>
                      <option>100-500</option>
                      <option>500-1000</option>
                      <option>1000+</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      产品链接
                    </label>
                    <input 
                      type="url" 
                      placeholder="https://example.com/product"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full py-4 bg-teal-600 text-white rounded-lg font-semibold text-lg transition-all hover:bg-teal-700 cursor-pointer"
                  >
                    获取免费报价
                  </button>
                </form>
              </div>
              
              {/* Image */}
              <div className="hidden md:block">
                <img 
                  src="/images/office-team.jpg" 
                  alt="Our Team"
                  className="rounded-2xl shadow-lg w-full h-[500px] object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop';
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <PortalFooter type="B" />
    </div>
  );
}
