import React from 'react';
import { Link } from 'react-router-dom';
import PortalHeader from '../../components/PortalHeader';
import PortalFooter from '../../components/PortalFooter';

const C_FEATURES = [
  {
    icon: 'ri-shopping-bag-line',
    title: '品质商城',
    desc: '精选商品，品质保障',
    link: '/portal-c/mall',
    color: 'bg-emerald-500',
  },
  {
    icon: 'ri-shopping-cart-line',
    title: '购物车',
    desc: '便捷购物，一键结算',
    link: '/portal-c/cart',
    color: 'bg-amber-500',
  },
  {
    icon: 'ri-truck-line',
    title: '物流追踪',
    desc: '实时物流，随时查看',
    link: '/portal-c/track',
    color: 'bg-blue-500',
  },
  {
    icon: 'ri-customer-service-2-line',
    title: '售后服务',
    desc: '7x24在线，专业客服',
    link: '/portal-c/service',
    color: 'bg-purple-500',
  },
];

const CATEGORIES = [
  { name: '数码电子', icon: 'ri-computer-line', count: 1234 },
  { name: '家居生活', icon: 'ri-home-line', count: 856 },
  { name: '服饰箱包', icon: 'ri-t-shirt-line', count: 2341 },
  { name: '美妆护肤', icon: 'ri-hand-heart-line', count: 567 },
  { name: '食品饮料', icon: 'ri-drinks-line', count: 432 },
  { name: '运动户外', icon: 'ri-basketball-line', count: 789 },
];

const HOT_PRODUCTS = [
  { id: 1, name: '智能手表 Pro', price: 1299, originalPrice: 1599, sales: 2341, image: 'https://picsum.photos/200/200?random=1' },
  { id: 2, name: '无线蓝牙耳机', price: 299, originalPrice: 399, sales: 5678, image: 'https://picsum.photos/200/200?random=2' },
  { id: 3, name: '便携充电宝', price: 99, originalPrice: 149, sales: 1234, image: 'https://picsum.photos/200/200?random=3' },
  { id: 4, name: '运动跑步鞋', price: 459, originalPrice: 599, sales: 890, image: 'https://picsum.photos/200/200?random=4' },
];

const BENEFITS = [
  {
    icon: 'ri-shield-check-line',
    title: '品质保证',
    desc: '严选供应商，品质有保障',
  },
  {
    icon: 'ri-truck-line',
    title: '快速配送',
    desc: '全国配送，极速送达',
  },
  {
    icon: 'ri-refresh-line',
    title: '无忧退换',
    desc: '7天无理由退换货',
  },
  {
    icon: 'ri-customer-service-2-line',
    title: '贴心服务',
    desc: '专业客服，随时解答',
  },
];

export default function PortalCPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <PortalHeader type="C" />
      
      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20 overflow-hidden">
          {/* 装饰背景 */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '32px 32px'
            }} />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm mb-6">
                  <i className="ri-shopping-bag-line"></i>
                  <span>品质生活购物平台</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  品质生活 从这里开始
                </h1>
                <p className="text-xl text-emerald-100 mb-8">
                  精选优质商品，畅享购物乐趣，让每一次购物都成为享受
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/portal-c/mall"
                    className="px-8 py-4 bg-white text-emerald-600 rounded-lg font-semibold text-lg transition-all hover:scale-105 cursor-pointer shadow-lg"
                  >
                    进入商城
                  </Link>
                  <Link
                    to="/portal-c/cart"
                    className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg transition-all hover:bg-white/10 cursor-pointer"
                  >
                    我的购物车
                  </Link>
                </div>
              </div>
              <div className="hidden md:grid grid-cols-2 gap-4">
                <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="text-4xl font-bold mb-2">100万+</div>
                  <div className="text-emerald-100">精选商品</div>
                </div>
                <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm mt-8">
                  <div className="text-4xl font-bold mb-2">50万+</div>
                  <div className="text-emerald-100">满意用户</div>
                </div>
                <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="text-4xl font-bold mb-2">99%</div>
                  <div className="text-emerald-100">好评率</div>
                </div>
                <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm mt-8">
                  <div className="text-4xl font-bold mb-2">7x24</div>
                  <div className="text-emerald-100">在线客服</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {BENEFITS.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className={`${benefit.icon} text-xl text-emerald-600`}></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                    <p className="text-sm text-gray-500">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">热门分类</h2>
              <Link to="/portal-c/mall" className="text-emerald-600 hover:text-emerald-700 font-medium cursor-pointer">
                查看全部 <i className="ri-arrow-right-line align-middle"></i>
              </Link>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {CATEGORIES.map((cat, idx) => (
                <Link
                  key={idx}
                  to="/portal-c/mall"
                  className="bg-gray-50 rounded-xl p-4 text-center hover:bg-emerald-50 hover:text-emerald-600 transition-colors group cursor-pointer"
                >
                  <div className="w-12 h-12 mx-auto mb-3 bg-gray-100 group-hover:bg-emerald-100 rounded-full flex items-center justify-center transition-colors">
                    <i className={`${cat.icon} text-2xl`}></i>
                  </div>
                  <div className="font-medium text-gray-900 group-hover:text-emerald-600 mb-1">{cat.name}</div>
                  <div className="text-xs text-gray-500">{cat.count.toLocaleString()} 件商品</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Hot Products */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">热门商品</h2>
              <Link to="/portal-c/mall" className="text-emerald-600 hover:text-emerald-700 font-medium cursor-pointer">
                更多好物 <i className="ri-arrow-right-line align-middle"></i>
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {HOT_PRODUCTS.map((product) => (
                <Link
                  key={product.id}
                  to="/portal-c/mall"
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group cursor-pointer"
                >
                  <div className="aspect-square bg-gray-100 relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                      爆款
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl font-bold text-red-500">¥{product.price}</span>
                      <span className="text-sm text-gray-400 line-through">¥{product.originalPrice}</span>
                    </div>
                    <div className="text-sm text-gray-500">{product.sales.toLocaleString()}人已购</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">我们的服务</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {C_FEATURES.map((feature, idx) => (
                <Link
                  key={idx}
                  to={feature.link}
                  className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors group cursor-pointer"
                >
                  <div className={`w-16 h-16 mx-auto ${feature.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <i className={`${feature.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-500">{feature.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              立即开启品质生活
            </h2>
            <p className="text-emerald-100 mb-8">
              注册会员，享受专属优惠和积分奖励
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/portal-c/mall"
                className="px-8 py-4 bg-white text-emerald-600 rounded-lg font-semibold text-lg transition-all hover:scale-105 cursor-pointer"
              >
                立即购物
              </Link>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg transition-all hover:bg-white/10 cursor-pointer">
                注册会员
              </button>
            </div>
          </div>
        </section>
      </main>

      <PortalFooter type="C" />
    </div>
  );
}
