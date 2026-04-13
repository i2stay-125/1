import React, { useState } from 'react';
import PortalHeader from '../../../components/feature/PortalHeader';
import PortalFooter from '../../../components/feature/PortalFooter';

const ORDERS = [
  { 
    id: 'DD202604100001', 
    status: 'in_transit', 
    statusText: '运输中',
    product: '智能手表 Pro Max',
    image: 'https://picsum.photos/200/200?random=30',
    logistics: '顺丰速运',
    trackingNo: 'SF1234567890',
    progress: 65,
    eta: '2026-04-12',
    events: [
      { time: '2026-04-10 14:30', location: '上海中转站', status: '快件已发出，正在发往北京' },
      { time: '2026-04-10 10:15', location: '上海华东仓', status: '快件已打包，正在装车' },
      { time: '2026-04-10 09:00', location: '上海华东仓', status: '商家已发货' },
    ]
  },
  { 
    id: 'DD202604090002', 
    status: 'delivered', 
    statusText: '已签收',
    product: '无线蓝牙耳机 x2',
    image: 'https://picsum.photos/200/200?random=31',
    logistics: '中通快递',
    trackingNo: 'ZTO9876543210',
    progress: 100,
    eta: '2026-04-09',
    events: [
      { time: '2026-04-09 18:30', location: '广州客户', status: '已签收，感谢您的购买' },
      { time: '2026-04-09 14:20', location: '广州配送站', status: '正在派送中' },
      { time: '2026-04-09 10:00', location: '广州分拨中心', status: '已到达广州分拨中心' },
    ]
  },
];

const STATUS_CONFIG = {
  pending: { label: '待发货', color: 'bg-gray-100 text-gray-600', icon: 'ri-time-line', bg: 'bg-gray-500' },
  in_transit: { label: '运输中', color: 'bg-blue-100 text-blue-600', icon: 'ri-truck-line', bg: 'bg-blue-500' },
  delivering: { label: '派送中', color: 'bg-amber-100 text-amber-600', icon: 'ri-motorbike-line', bg: 'bg-amber-500' },
  delivered: { label: '已签收', color: 'bg-green-100 text-green-600', icon: 'ri-checkbox-circle-line', bg: 'bg-green-500' },
};

export default function TrackPage() {
  const [searchNo, setSearchNo] = useState('');
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <PortalHeader type="C" />

      <main className="flex-1 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">物流追踪</h1>
            <p className="text-gray-600">实时查看您的订单物流信息</p>
          </div>

          {/* Search */}
          <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="输入运单号或订单号查询..."
                  value={searchNo}
                  onChange={(e) => setSearchNo(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
                <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
              </div>
              <button className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 cursor-pointer">
                查询
              </button>
            </div>
          </div>

          {/* Recent Orders */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">最近订单</h2>
            <div className="space-y-4">
              {ORDERS.map(order => {
                const statusInfo = STATUS_CONFIG[order.status as keyof typeof STATUS_CONFIG];
                const isExpanded = expandedOrder === order.id;
                
                return (
                  <div key={order.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <div
                      className="p-5 cursor-pointer"
                      onClick={() => setExpandedOrder(isExpanded ? null : order.id)}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
                            <img
                              src={order.image}
                              alt={order.product}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{order.product}</div>
                            <div className="text-sm text-gray-500 mt-1">
                              订单号: {order.id}
                            </div>
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm ${statusInfo.color}`}>
                          <i className={`${statusInfo.icon} mr-1`}></i>
                          {statusInfo.label}
                        </span>
                      </div>

                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center text-gray-500">
                          <i className="ri-truck-line mr-1"></i>
                          {order.logistics}
                        </div>
                        <div className="flex items-center text-gray-500">
                          <i className="ri-file-list-line mr-1"></i>
                          {order.trackingNo}
                        </div>
                        <div className="flex items-center text-gray-500 ml-auto">
                          <i className={`${isExpanded ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'} mr-1`}></i>
                          {isExpanded ? '收起' : '展开'}
                        </div>
                      </div>

                      {/* Progress */}
                      <div className="mt-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-500">预计送达: {order.eta}</span>
                          <span className="font-medium">{order.progress}%</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all ${statusInfo.bg}`}
                            style={{ width: `${order.progress}%` }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Timeline */}
                    {isExpanded && (
                      <div className="border-t px-5 py-4 bg-gray-50">
                        <h4 className="font-medium text-gray-900 mb-4">物流详情</h4>
                        <div className="space-y-4">
                          {order.events.map((event, idx) => (
                            <div key={idx} className="flex gap-4">
                              <div className="flex flex-col items-center">
                                <div className={`w-3 h-3 rounded-full ${idx === 0 ? 'bg-emerald-500' : 'bg-gray-300'}`} />
                                {idx < order.events.length - 1 && (
                                  <div className="w-0.5 h-8 bg-gray-200 my-1" />
                                )}
                              </div>
                              <div className="flex-1 pb-4">
                                <div className="font-medium text-gray-900 text-sm">{event.status}</div>
                                <div className="text-xs text-gray-500 mt-1">
                                  {event.time} · {event.location}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-4 cursor-pointer hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                <i className="ri-file-list-3-line text-xl text-emerald-600"></i>
              </div>
              <div>
                <div className="font-medium text-gray-900">查看全部订单</div>
                <div className="text-sm text-gray-500">历史订单记录</div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-4 cursor-pointer hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <i className="ri-customer-service-2-line text-xl text-blue-600"></i>
              </div>
              <div>
                <div className="font-medium text-gray-900">联系客服</div>
                <div className="text-sm text-gray-500">物流问题咨询</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <PortalFooter type="C" />
    </div>
  );
}
