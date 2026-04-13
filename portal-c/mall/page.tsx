import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PortalHeader from '../../../components/feature/PortalHeader';
import PortalFooter from '../../../components/feature/PortalFooter';

const CATEGORIES = [
  { name: '数码电子', icon: 'ri-computer-line', count: 1234 },
  { name: '家居生活', icon: 'ri-home-line', count: 856 },
  { name: '服饰箱包', icon: 'ri-t-shirt-line', count: 2341 },
  { name: '美妆护肤', icon: 'ri-hand-heart-line', count: 567 },
  { name: '食品饮料', icon: 'ri-cup-line', count: 432 },
  { name: '运动户外', icon: 'ri-basketball-line', count: 789 },
  { name: '母婴玩具', icon: 'ri-bear-smile-line', count: 654 },
  { name: '图书文具', icon: 'ri-book-open-line', count: 321 },
];

const PRODUCTS = [
  { id: 1, name: '智能手表 Pro Max', price: 1299, originalPrice: 1599, sales: 2341, image: 'https://picsum.photos/300/300?random=30', tag: '热卖' },
  { id: 2, name: '无线蓝牙耳机', price: 299, originalPrice: 399, sales: 5678, image: 'https://picsum.photos/300/300?random=31', tag: '新品' },
  { id: 3, name: '便携充电宝 20000mAh', price: 99, originalPrice: 149, sales: 1234, image: 'https://picsum.photos/300/300?random=32', tag: '' },
  { id: 4, name: '运动跑步鞋', price: 459, originalPrice: 599, sales: 890, image: 'https://picsum.photos/300/300?random=33', tag: '爆款' },
  { id: 5, name: '空气净化器', price: 899, originalPrice: 1199, sales: 456, image: 'https://picsum.photos/300/300?random=34', tag: '' },
  { id: 6, name: '多功能料理锅', price: 399, originalPrice: 599, sales: 789, image: 'https://picsum.photos/300/300?random=35', tag: '推荐' },
  { id: 7, name: '护肤套装礼盒', price: 299, originalPrice: 459, sales: 2345, image: 'https://picsum.photos/300/300?random=36', tag: '热卖' },
  { id: 8, name: '有机茶叶礼盒', price: 199, originalPrice: 299, sales: 1567, image: 'https://picsum.photos/300/300?random=37', tag: '新品' },
  { id: 9, name: '儿童益智玩具', price: 159, originalPrice: 259, sales: 678, image: 'https://picsum.photos/300/300?random=38', tag: '' },
  { id: 10, name: '运动背包', price: 229, originalPrice: 359, sales: 456, image: 'https://picsum.photos/300/300?random=39', tag: '折扣' },
  { id: 11, name: '智能台灯', price: 129, originalPrice: 199, sales: 890, image: 'https://picsum.photos/300/300?random=40', tag: '' },
  { id: 12, name: '时尚连衣裙', price: 359, originalPrice: 599, sales: 1234, image: 'https://picsum.photos/300/300?random=41', tag: '热卖' },
];

const BANNERS = [
  { id: 1, title: '春季新品上市', subtitle: '全场8折起', bg: 'from-emerald-500 to-teal-600', image: 'https://picsum.photos/1200/400?random=50' },
  { id: 2, title: '数码焕新季', subtitle: '爆款直降500', bg: 'from-blue-500 to-indigo-600', image: 'https://picsum.photos/1200/400?random=51' },
  { id: 3, title: '品质生活', subtitle: '精选好物推荐', bg: 'from-amber-500 to-orange-600', image: 'https://picsum.photos/1200/400?random=52' },
];

export default function MallPage() {
  const [activeCategory, setActiveCategory] = useState('全部');
  const [sortBy, setSortBy] = useState('sales');
  const [currentBanner, setCurrentBanner] = useState(0);

  const filteredProducts = PRODUCTS.filter(p => {
    if (activeCategory === '全部') return true;
    return true; // 实际项目中根据分类筛选
  }).sort((a, b) => {
    if (sortBy === 'sales') return b.sales - a.sales;
    if (sortBy === 'price_low') return a.price - b.price;
    if (sortBy === 'price_high') return b.price - a.price;
    return 0;
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <PortalHeader type="C" />

      <main className="flex-1">
        {/* Banner */}
        <section className="relative h-64 md:h-80 overflow-hidden">
          <div className="flex transition-transform duration-500 h-full" style={{ transform: `translateX(-${currentBanner * 100}%)` }}>
            {BANNERS.map(banner => (
              <div key={banner.id} className={`w-full h-full flex-shrink-0 bg-gradient-to-r ${banner.bg}`}>
                <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
                  <div className="text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">{banner.title}</h2>
                    <p className="text-xl md:text-2xl text-white/90">{banner.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {BANNERS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentBanner(idx)}
                className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                  currentBanner === idx ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Categories */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">热门分类</h2>
            </div>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
              {CATEGORIES.map(cat => (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`p-3 rounded-xl text-center transition-all cursor-pointer ${
                    activeCategory === cat.name
                      ? 'bg-emerald-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-emerald-50 hover:text-emerald-600'
                  }`}
                >
                  <i className={`${cat.icon} text-2xl mb-2`}></i>
                  <div className="text-xs font-medium">{cat.name}</div>
                </button>
              ))}
            </div>
          </section>

          {/* Filters & Products */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">商品列表</h2>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
              >
                <option value="sales">销量优先</option>
                <option value="price_low">价格从低到高</option>
                <option value="price_high">价格从高到低</option>
              </select>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {filteredProducts.map(product => (
                <Link
                  key={product.id}
                  to="/portal-c/cart"
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group"
                >
                  <div className="aspect-square bg-gray-100 relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    {product.tag && (
                      <span className={`absolute top-2 left-2 px-2 py-0.5 text-xs font-medium rounded ${
                        product.tag === '热卖' ? 'bg-red-500 text-white' :
                        product.tag === '新品' ? 'bg-blue-500 text-white' :
                        product.tag === '爆款' ? 'bg-orange-500 text-white' :
                        'bg-emerald-500 text-white'
                      }`}>
                        {product.tag}
                      </span>
                    )}
                    <button className="absolute top-2 right-2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:bg-white">
                      <i className="ri-shopping-cart-line text-gray-600"></i>
                    </button>
                  </div>
                  <div className="p-3">
                    <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                    <div className="flex items-center gap-1 mb-2">
                      <span className="text-lg font-bold text-red-500">¥{product.price}</span>
                      <span className="text-xs text-gray-400 line-through">¥{product.originalPrice}</span>
                    </div>
                    <div className="text-xs text-gray-500">{product.sales.toLocaleString()}人已购</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <PortalFooter type="C" />
    </div>
  );
}
