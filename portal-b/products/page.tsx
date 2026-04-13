import React, { useState } from 'react';
import PortalHeader from '../../../components/feature/PortalHeader';
import PortalFooter from '../../../components/feature/PortalFooter';

const PRODUCTS = [
  { id: 1, name: '智能手表 Pro Max', category: '数码电子', price: 1299, stock: 500, supplier: '深圳智造', rating: 4.8, image: 'https://picsum.photos/200/200?random=10' },
  { id: 2, name: '无线蓝牙耳机', category: '数码电子', price: 299, stock: 1200, supplier: '东莞电子', rating: 4.6, image: 'https://picsum.photos/200/200?random=11' },
  { id: 3, name: '便携充电宝 20000mAh', category: '数码电子', price: 99, stock: 3000, supplier: '广州能源', rating: 4.9, image: 'https://picsum.photos/200/200?random=12' },
  { id: 4, name: '运动跑步鞋', category: '服饰鞋包', price: 459, stock: 800, supplier: '泉州鞋业', rating: 4.7, image: 'https://picsum.photos/200/200?random=13' },
  { id: 5, name: '空气净化器', category: '家居生活', price: 899, stock: 200, supplier: '上海家电', rating: 4.5, image: 'https://picsum.photos/200/200?random=14' },
  { id: 6, name: '多功能料理锅', category: '家居生活', price: 399, stock: 600, supplier: '杭州厨具', rating: 4.8, image: 'https://picsum.photos/200/200?random=15' },
  { id: 7, name: '护肤套装礼盒', category: '美妆护肤', price: 299, stock: 1500, supplier: '广州美妆', rating: 4.6, image: 'https://picsum.photos/200/200?random=16' },
  { id: 8, name: '有机茶叶礼盒', category: '食品饮料', price: 199, stock: 2000, supplier: '福建茶业', rating: 4.9, image: 'https://picsum.photos/200/200?random=17' },
];

const CATEGORIES = ['全部', '数码电子', '服饰鞋包', '家居生活', '美妆护肤', '食品饮料'];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('全部');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);

  const filteredProducts = PRODUCTS.filter(p => {
    const matchCategory = activeCategory === '全部' || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(searchKeyword.toLowerCase());
    return matchCategory && matchSearch;
  });

  const toggleProduct = (id: number) => {
    setSelectedProducts(prev =>
      prev.includes(id) ? prev.filter(pid => pid !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <PortalHeader type="B" />

      <main className="flex-1 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">产品中心</h1>
            <p className="text-gray-600">浏览海量商品库，支持批量采购和一键代发</p>
          </div>

          {/* Toolbar */}
          <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="搜索商品..."
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    className="w-full md:w-80 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                  <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {selectedProducts.length > 0 && (
                  <button className="px-4 py-2 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 cursor-pointer">
                    批量采购 ({selectedProducts.length})
                  </button>
                )}
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500">
                  <option>按销量排序</option>
                  <option>按价格排序</option>
                  <option>按库存排序</option>
                </select>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-teal-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <div
                key={product.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group"
              >
                <div className="aspect-square bg-gray-100 relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <button
                    onClick={() => toggleProduct(product.id)}
                    className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-colors ${
                      selectedProducts.includes(product.id)
                        ? 'bg-teal-600 text-white'
                        : 'bg-white/90 text-gray-600 hover:bg-teal-50'
                    }`}
                  >
                    <i className={`ri-${selectedProducts.includes(product.id) ? 'check' : 'add'}-line`}></i>
                  </button>
                </div>
                <div className="p-4">
                  <div className="text-xs text-teal-600 mb-1">{product.category}</div>
                  <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                  <div className="flex items-center gap-1 text-amber-500 text-sm mb-2">
                    <i className="ri-star-fill"></i>
                    <span>{product.rating}</span>
                    <span className="text-gray-400 ml-2">{product.supplier}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl font-bold text-teal-600">¥{product.price}</span>
                    </div>
                    <div className="text-sm text-gray-500">库存 {product.stock}</div>
                  </div>
                  <button className="w-full mt-3 px-4 py-2 bg-teal-50 text-teal-600 rounded-lg font-medium hover:bg-teal-600 hover:text-white transition-colors cursor-pointer">
                    加入采购单
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <i className="ri-inbox-line text-6xl text-gray-300 mb-4"></i>
              <p className="text-gray-500">暂无相关商品</p>
            </div>
          )}
        </div>
      </main>

      <PortalFooter type="B" />
    </div>
  );
}
