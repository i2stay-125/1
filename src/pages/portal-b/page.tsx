import React from 'react';
import { Link } from 'react-router-dom';
import PortalHeader from '../../components/feature/PortalHeader';
import PortalFooter from '../../components/feature/PortalFooter';

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
  { value: '10,000+', label: '合作品牌' },
  { value: '50万+', label: '商品SKU' },
  { value: '99.9%', label: '系统稳定性' },
  { value: '24h', label: '极速发货' },
];

export default function PortalBPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <PortalHeader type="B" />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-teal-600 to-teal-800 text-white py-20">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '32px 32px'
            }} />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm mb-6">
                <i className="ri-briefcase-line"></i>
                <span>企业级大客户服务平台</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                B端大客户专属服务
              </h1>
              <p className="text-xl text-teal-100 max-w-2xl mx-auto mb-8">
                专业的产品采购、仓储物流、定制化服务一站式解决方案，助力企业高效运营
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/portal-b/apply"
                  className="px-8 py-4 bg-white text-teal-700 rounded-lg font-semibold text-lg transition-all hover:scale-105 cursor-pointer"
                >
                  立即申请入驻
                </Link>
                <Link
                  to="/portal-b/products"
                  className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg transition-all hover:bg-white/10 cursor-pointer"
                >
                  浏览产品
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-white py-12 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {B_STATS.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">核心服务</h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                为大客户提供全方位的一站式服务支持
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {B_FEATURES.map((feature, idx) => (
                <Link
                  key={idx}
                  to={feature.link}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all group cursor-pointer"
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

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-teal-50 to-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              准备好开始了吗？
            </h2>
            <p className="text-gray-600 mb-8">
              立即申请入驻，享受专属大客户优惠和服务
            </p>
            <Link
              to="/portal-b/apply"
              className="inline-flex items-center gap-2 px-8 py-4 bg-teal-600 text-white rounded-lg font-semibold text-lg transition-all hover:bg-teal-700 cursor-pointer"
            >
              <i className="ri-user-add-line"></i>
              申请入驻
            </Link>
          </div>
        </section>
      </main>

      <PortalFooter type="B" />
    </div>
  );
}
