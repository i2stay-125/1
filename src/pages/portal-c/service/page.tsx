import React, { useState } from 'react';
import PortalHeader from '../../../components/feature/PortalHeader';
import PortalFooter from '../../../components/feature/PortalFooter';

const SERVICE_TYPES = [
  { id: 1, icon: 'ri-exchange-line', name: '退货退款', desc: '商品有质量问题或不喜欢', color: 'bg-red-500' },
  { id: 2, icon: 'ri-arrow-go-back-line', name: '仅退款', desc: '商品未收到或有问题', color: 'bg-orange-500' },
  { id: 3, icon: 'ri-exchange-funds-line', name: '退换货', desc: '换同款或其他商品', color: 'bg-blue-500' },
  { id: 4, icon: 'ri-tools-line', name: '维修申请', desc: '商品需要维修服务', color: 'bg-purple-500' },
];

const MY_REQUESTS = [
  { id: 'SR20260410001', type: '退货退款', product: '智能手表 Pro Max', status: 'pending', statusText: '待处理', time: '2026-04-10 12:00' },
  { id: 'SR20260409002', type: '退换货', product: '无线蓝牙耳机', status: 'approved', statusText: '已通过', time: '2026-04-09 15:30' },
  { id: 'SR20260408003', type: '仅退款', product: '便携充电宝', status: 'completed', statusText: '已完成', time: '2026-04-08 10:00' },
];

const FAQS = [
  { q: '如何申请售后服务？', a: '进入"我的-售后服务"页面，选择需要售后的订单，点击"申请售后"即可。' },
  { q: '退货需要多长时间？', a: '退货退款申请审核通过后，我们将在1-3个工作日内完成退款。' },
  { q: '运费由谁承担？', a: '因商品质量问题导致的退货，退回运费由我们承担；其他情况需自行承担。' },
  { q: '可以上门取件吗？', a: '是的，我们提供免费上门取件服务，预约后快递员会按时上门。' },
];

const STATUS_CONFIG = {
  pending: { label: '待处理', color: 'bg-amber-100 text-amber-700' },
  approved: { label: '已通过', color: 'bg-green-100 text-green-700' },
  rejected: { label: '已拒绝', color: 'bg-red-100 text-red-700' },
  completed: { label: '已完成', color: 'bg-gray-100 text-gray-700' },
};

export default function ServicePage() {
  const [activeTab, setActiveTab] = useState<'apply' | 'list' | 'faq'>('apply');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <PortalHeader type="C" />

      <main className="flex-1 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">售后服务</h1>
            <p className="text-gray-600">便捷售后申请，7天无理由退换</p>
          </div>

          {/* Service Banner */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-6 mb-8 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold mb-2">放心购物 无忧售后</h2>
                <p className="text-emerald-100">7天无理由退换 · 15天质量问题包退 · 终身维修服务</p>
              </div>
              <div className="hidden md:flex gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">7</div>
                  <div className="text-xs text-emerald-200">天无理由</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">15</div>
                  <div className="text-xs text-emerald-200">天退换</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">24h</div>
                  <div className="text-xs text-emerald-200">极速退款</div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-xl shadow-sm mb-6">
            <div className="flex border-b">
              <button
                onClick={() => setActiveTab('apply')}
                className={`flex-1 py-4 text-center font-medium transition-colors cursor-pointer ${
                  activeTab === 'apply'
                    ? 'text-emerald-600 border-b-2 border-emerald-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <i className="ri-add-circle-line mr-2"></i>
                申请售后
              </button>
              <button
                onClick={() => setActiveTab('list')}
                className={`flex-1 py-4 text-center font-medium transition-colors cursor-pointer ${
                  activeTab === 'list'
                    ? 'text-emerald-600 border-b-2 border-emerald-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <i className="ri-file-list-3-line mr-2"></i>
                我的申请
              </button>
              <button
                onClick={() => setActiveTab('faq')}
                className={`flex-1 py-4 text-center font-medium transition-colors cursor-pointer ${
                  activeTab === 'faq'
                    ? 'text-emerald-600 border-b-2 border-emerald-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <i className="ri-question-line mr-2"></i>
                常见问题
              </button>
            </div>

            <div className="p-6">
              {activeTab === 'apply' && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">选择售后类型</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {SERVICE_TYPES.map(type => (
                      <div
                        key={type.id}
                        className="border-2 border-gray-200 rounded-xl p-4 text-center cursor-pointer hover:border-emerald-500 hover:bg-emerald-50 transition-all"
                      >
                        <div className={`w-12 h-12 ${type.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                          <i className={`${type.icon} text-xl text-white`}></i>
                        </div>
                        <h4 className="font-medium text-gray-900 mb-1">{type.name}</h4>
                        <p className="text-xs text-gray-500">{type.desc}</p>
                      </div>
                    ))}
                  </div>

                  <h3 className="font-semibold text-gray-900 mb-4">选择要售后的订单</h3>
                  <div className="border border-gray-200 rounded-xl p-4 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden">
                        <img
                          src="https://picsum.photos/200/200?random=30"
                          alt="智能手表"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">智能手表 Pro Max</div>
                        <div className="text-sm text-gray-500">订单号: DD202604100001</div>
                        <div className="text-lg font-bold text-red-500 mt-1">¥1299.00</div>
                      </div>
                      <button className="px-4 py-2 border border-emerald-600 text-emerald-600 rounded-lg font-medium hover:bg-emerald-50 cursor-pointer">
                        申请
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'list' && (
                <div className="space-y-4">
                  {MY_REQUESTS.map(request => {
                    const statusInfo = STATUS_CONFIG[request.status as keyof typeof STATUS_CONFIG];
                    return (
                      <div key={request.id} className="border border-gray-200 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm text-gray-500">申请编号: {request.id}</span>
                          <span className={`px-3 py-1 rounded-full text-sm ${statusInfo.color}`}>
                            {request.statusText}
                          </span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="font-medium text-gray-900">{request.product}</div>
                          <div className="text-sm text-emerald-600">{request.type}</div>
                        </div>
                        <div className="flex items-center justify-between mt-3 text-sm text-gray-500">
                          <span>申请时间: {request.time}</span>
                          <button className="text-emerald-600 hover:text-emerald-700 cursor-pointer">
                            查看详情
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {activeTab === 'faq' && (
                <div className="space-y-3">
                  {FAQS.map((faq, idx) => (
                    <div
                      key={idx}
                      className="border border-gray-200 rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                        className="w-full px-5 py-4 text-left flex items-center justify-between cursor-pointer hover:bg-gray-50"
                      >
                        <span className="font-medium text-gray-900">{faq.q}</span>
                        <i className={`ri-${expandedFaq === idx ? 'subtract' : 'add'}-line text-gray-400`}></i>
                      </button>
                      {expandedFaq === idx && (
                        <div className="px-5 pb-4 text-gray-600 bg-gray-50">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Contact */}
          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <h3 className="font-semibold text-gray-900 mb-2">遇到问题？</h3>
            <p className="text-gray-500 text-sm mb-4">我们的客服团队随时为您提供帮助</p>
            <div className="flex justify-center gap-4">
              <button className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 cursor-pointer">
                <i className="ri-customer-service-2-line mr-2"></i>
                在线客服
              </button>
              <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 cursor-pointer">
                <i className="ri-phone-line mr-2"></i>
                电话客服
              </button>
            </div>
          </div>
        </div>
      </main>

      <PortalFooter type="C" />
    </div>
  );
}
