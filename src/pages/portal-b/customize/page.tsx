import React, { useState } from 'react';
import PortalHeader from '../../../components/feature/PortalHeader';
import PortalFooter from '../../../components/feature/PortalFooter';

const CUSTOMIZE_TYPES = [
  { id: 1, name: 'Logo定制', icon: 'ri-vip-diamond-line', desc: '品牌Logo印刷/压印', minQty: 100, price: '¥2-5/件' },
  { id: 2, name: '包装定制', icon: 'ri-package-line', desc: '专属礼盒/包装盒', minQty: 50, price: '¥5-15/件' },
  { id: 3, name: '颜色定制', icon: 'ri-palette-line', desc: '产品颜色个性化', minQty: 200, price: '¥1-3/件' },
  { id: 4, name: '功能定制', icon: 'ri-settings-3-line', desc: '功能参数调整', minQty: 500, price: '¥10-50/件' },
];

const PORTFOLIO = [
  { id: 1, name: '某知名电商平台', category: '包装定制', image: 'https://picsum.photos/400/300?random=20' },
  { id: 2, name: '某连锁超市', category: 'Logo定制', image: 'https://picsum.photos/400/300?random=21' },
  { id: 3, name: '某礼品公司', category: '颜色定制', image: 'https://picsum.photos/400/300?random=22' },
  { id: 4, name: '某品牌服饰', category: '包装定制', image: 'https://picsum.photos/400/300?random=23' },
];

const FAQS = [
  { q: '最小起订量是多少？', a: '根据定制类型不同，最小起订量从50件到500件不等。' },
  { q: '定制周期需要多久？', a: '标准定制周期为7-15个工作日，加急服务可缩短至3-5个工作日。' },
  { q: '是否可以先看样品？', a: '是的，我们可以提供付费样品，确认后再进行大货生产。' },
  { q: '支持哪些付款方式？', a: '支持对公转账、支付宝、微信支付等多种方式。' },
];

export default function CustomizePage() {
  const [selectedType, setSelectedType] = useState<number | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <PortalHeader type="B" />

      <main className="flex-1 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">定制服务</h1>
            <p className="text-gray-600">满足您的个性化定制需求，打造专属品牌形象</p>
          </div>

          {/* Hero Section */}
          <div className="bg-gradient-to-r from-teal-600 to-teal-800 rounded-2xl p-8 md:p-12 text-white mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold mb-4">专业定制解决方案</h2>
              <p className="text-teal-100 text-lg mb-6">
                从Logo印刷到产品定制，我们提供一站式个性化服务，帮助您建立独特的品牌形象。
              </p>
              <button className="px-8 py-4 bg-white text-teal-700 rounded-lg font-semibold hover:bg-teal-50 cursor-pointer">
                立即咨询
              </button>
            </div>
          </div>

          {/* Customization Types */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">定制类型</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {CUSTOMIZE_TYPES.map(type => (
                <div
                  key={type.id}
                  onClick={() => setSelectedType(selectedType === type.id ? null : type.id)}
                  className={`bg-white rounded-xl p-6 shadow-sm cursor-pointer transition-all hover:shadow-lg ${
                    selectedType === type.id ? 'ring-2 ring-teal-500' : ''
                  }`}
                >
                  <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                    <i className={`${type.icon} text-2xl text-teal-600`}></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{type.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{type.desc}</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">起订量</span>
                    <span className="font-medium">{type.minQty}+件</span>
                  </div>
                  <div className="flex justify-between text-sm mt-2">
                    <span className="text-gray-500">参考价格</span>
                    <span className="font-medium text-teal-600">{type.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Portfolio */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">定制案例</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PORTFOLIO.map(item => (
                <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-sm group">
                  <div className="aspect-video bg-gray-100 relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button className="px-4 py-2 bg-white text-gray-900 rounded-lg font-medium cursor-pointer">
                        查看详情
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-xs text-teal-600 mb-1">{item.category}</div>
                    <h3 className="font-medium text-gray-900">{item.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">定制流程</h2>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {[
                  { step: 1, name: '需求沟通', desc: '明确定制需求' },
                  { step: 2, name: '方案设计', desc: '提供设计方案' },
                  { step: 3, name: '样品确认', desc: '打样确认效果' },
                  { step: 4, name: '大货生产', desc: '按单生产' },
                  { step: 5, name: '交付验收', desc: '质检发货' },
                ].map((item, idx) => (
                  <div key={idx} className="text-center relative">
                    {idx < 4 && (
                      <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200" />
                    )}
                    <div className="relative z-10 w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-xl">{item.step}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">常见问题</h2>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              {FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className={`border-b last:border-b-0 ${
                    expandedFaq === idx ? 'bg-gray-50' : ''
                  }`}
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between cursor-pointer"
                  >
                    <span className="font-medium text-gray-900">{faq.q}</span>
                    <i className={`ri-${expandedFaq === idx ? 'subtract' : 'add'}-line text-gray-400`}></i>
                  </button>
                  {expandedFaq === idx && (
                    <div className="px-6 pb-4 text-gray-600">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <PortalFooter type="B" />
    </div>
  );
}
