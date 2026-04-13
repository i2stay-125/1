import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PortalHeader from '../../../components/feature/PortalHeader';
import PortalFooter from '../../../components/feature/PortalFooter';

const USER_INFO = {
  name: '张三',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=zhangsan',
  phone: '138****8888',
  memberLevel: '黄金会员',
  points: 12580,
};

const QUICK_ACTIONS = [
  { icon: 'ri-file-list-3-line', name: '我的订单', count: 12, path: '/portal-c/track', color: 'bg-blue-500' },
  { icon: 'ri-coupon-3-line', name: '优惠券', count: 5, path: '/portal-c/service', color: 'bg-orange-500' },
  { icon: 'ri-heart-line', name: '我的收藏', count: 28, path: '/portal-c/mall', color: 'bg-red-500' },
  { icon: 'ri-history-line', name: '浏览记录', count: 0, path: '/portal-c/mall', color: 'bg-purple-500' },
];

const RECENT_ORDERS = [
  { id: 'DD202604100001', product: '智能手表 Pro Max', price: 1299, status: 'in_transit', statusText: '运输中' },
  { id: 'DD202604090002', product: '无线蓝牙耳机', price: 598, status: 'delivered', statusText: '已签收' },
];

const STATUS_CONFIG = {
  pending: { label: '待发货', color: 'text-gray-600 bg-gray-100' },
  in_transit: { label: '运输中', color: 'text-blue-600 bg-blue-100' },
  delivered: { label: '已签收', color: 'text-green-600 bg-green-100' },
};

export default function ProfilePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <PortalHeader type="C" />

      <main className="flex-1">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-white rounded-full overflow-hidden">
                <img
                  src={USER_INFO.avatar}
                  alt={USER_INFO.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h1 className="text-2xl font-bold mb-1">{USER_INFO.name}</h1>
                <p className="text-emerald-100 text-sm">{USER_INFO.phone}</p>
              </div>
              <button className="px-4 py-2 border border-white/30 rounded-lg hover:bg-white/10 cursor-pointer">
                <i className="ri-settings-3-line mr-2"></i>
                设置
              </button>
            </div>

            {/* Member Card */}
            <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                  <i className="ri-vip-crown-line text-2xl text-white"></i>
                </div>
                <div>
                  <div className="font-semibold">{USER_INFO.memberLevel}</div>
                  <div className="text-sm text-emerald-100">
                    成长值: {USER_INFO.points.toLocaleString()} / 20000
                  </div>
                </div>
              </div>
              <button className="px-4 py-2 bg-white/20 rounded-lg text-sm hover:bg-white/30 cursor-pointer">
                升级
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Quick Actions */}
          <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
            <div className="grid grid-cols-4 gap-4">
              {QUICK_ACTIONS.map((action, idx) => (
                <Link
                  key={idx}
                  to={action.path}
                  className="text-center p-3 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer"
                >
                  <div className={`w-12 h-12 ${action.color} rounded-full flex items-center justify-center mx-auto mb-2`}>
                    <i className={`${action.icon} text-xl text-white`}></i>
                  </div>
                  <div className="font-medium text-gray-900 text-sm">{action.name}</div>
                  {action.count > 0 && (
                    <div className="text-xs text-gray-500">{action.count}个</div>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Recent Orders */}
          <div className="bg-white rounded-xl shadow-sm mb-6">
            <div className="flex items-center justify-between p-5 border-b">
              <h2 className="font-semibold text-gray-900">最近订单</h2>
              <Link to="/portal-c/track" className="text-emerald-600 hover:text-emerald-700 text-sm cursor-pointer">
                查看全部 <i className="ri-arrow-right-line align-middle"></i>
              </Link>
            </div>
            <div className="divide-y">
              {RECENT_ORDERS.map(order => {
                const statusInfo = STATUS_CONFIG[order.status as keyof typeof STATUS_CONFIG];
                return (
                  <div key={order.id} className="p-4 flex items-center gap-4">
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{order.product}</div>
                      <div className="text-sm text-gray-500">订单号: {order.id}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-gray-900">¥{order.price}</div>
                      <span className={`px-2 py-0.5 rounded text-xs ${statusInfo.color}`}>
                        {statusInfo.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-white rounded-xl shadow-sm p-5 mb-6">
            <h2 className="font-semibold text-gray-900 mb-4">会员权益</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: 'ri-percent-line', name: '专属折扣', desc: '全场9折起' },
                { icon: 'ri-gift-line', name: '生日礼包', desc: '生日当天领取' },
                { icon: 'ri-vip-diamond-line', name: '优先发货', desc: '会员优先处理' },
                { icon: 'ri-customer-service-2-line', name: '专属客服', desc: '7x24在线服务' },
              ].map((benefit, idx) => (
                <div key={idx} className="text-center p-3 bg-gray-50 rounded-xl">
                  <i className={`${benefit.icon} text-2xl text-emerald-600 mb-2`}></i>
                  <div className="font-medium text-gray-900 text-sm">{benefit.name}</div>
                  <div className="text-xs text-gray-500">{benefit.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-5 border-b">
              <h2 className="font-semibold text-gray-900">常用工具</h2>
            </div>
            <div className="grid grid-cols-3 divide-x divide-gray-100">
              {[
                { icon: 'ri-map-pin-line', name: '地址管理' },
                { icon: 'ri-notification-3-line', name: '消息通知' },
                { icon: 'ri-shield-check-line', name: '账号安全' },
                { icon: 'ri-wallet-3-line', name: '支付管理' },
                { icon: 'ri-service-line', name: '联系客服' },
                { icon: 'ri-question-line', name: '帮助中心' },
              ].map((tool, idx) => (
                <button
                  key={idx}
                  className="p-4 text-center hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <i className={`${tool.icon} text-xl text-gray-600 mb-1`}></i>
                  <div className="text-sm text-gray-700">{tool.name}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>

      <PortalFooter type="C" />
    </div>
  );
}
