import React, { useState } from 'react';
import PortalHeader from '../../../components/feature/PortalHeader';
import PortalFooter from '../../../components/feature/PortalFooter';

const LOGISTICS_PROVIDERS = [
  { id: 1, name: '顺丰速运', logo: 'SF', coverage: '全国', onTime: 98.5, avgTime: '1-2天', price: '较高' },
  { id: 2, name: '中通快递', logo: 'ZTO', coverage: '全国', onTime: 95.2, avgTime: '2-3天', price: '中等' },
  { id: 3, name: '韵达快递', logo: 'YD', coverage: '全国', onTime: 94.8, avgTime: '2-4天', price: '较低' },
  { id: 4, name: '圆通速递', logo: 'YT', coverage: '全国', onTime: 95.5, avgTime: '2-3天', price: '中等' },
];

const SHIPMENTS = [
  { id: 'SF1234567890', provider: '顺丰速运', status: 'in_transit', from: '上海华东仓', to: '北京客户', eta: '2026-04-12', progress: 65 },
  { id: 'ZTO9876543210', provider: '中通快递', status: 'delivered', from: '深圳华南仓', to: '广州客户', eta: '2026-04-10', progress: 100 },
  { id: 'YD5555555555', provider: '韵达快递', status: 'pending', from: '成都西南仓', to: '重庆客户', eta: '2026-04-14', progress: 10 },
  { id: 'YT8888888888', provider: '圆通速递', status: 'in_transit', from: '北京华北仓', to: '天津客户', eta: '2026-04-11', progress: 45 },
];

const STATUS_CONFIG = {
  pending: { label: '待发货', color: 'bg-gray-100 text-gray-600', icon: 'ri-time-line' },
  in_transit: { label: '运输中', color: 'bg-blue-100 text-blue-600', icon: 'ri-truck-line' },
  delivered: { label: '已签收', color: 'bg-green-100 text-green-600', icon: 'ri-checkbox-circle-line' },
};

export default function LogisticsPage() {
  const [activeTab, setActiveTab] = useState<'shipments' | 'providers' | 'analytics'>('shipments');
  const [searchNo, setSearchNo] = useState('');

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <PortalHeader type="B" />

      <main className="flex-1 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">物流管理</h1>
            <p className="text-gray-600">多渠道物流对接，全程追踪管理</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                  <i className="ri-file-list-3-line text-2xl text-teal-600"></i>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">1,234</div>
                  <div className="text-sm text-gray-500">本月订单</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <i className="ri-truck-line text-2xl text-blue-600"></i>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">892</div>
                  <div className="text-sm text-gray-500">运输中</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <i className="ri-checkbox-circle-line text-2xl text-green-600"></i>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">342</div>
                  <div className="text-sm text-gray-500">已签收</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <i className="ri-bar-chart-line text-2xl text-purple-600"></i>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">96.8%</div>
                  <div className="text-sm text-gray-500">准时率</div>
                </div>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="输入运单号查询..."
                  value={searchNo}
                  onChange={(e) => setSearchNo(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
                <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
              </div>
              <button className="px-6 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 cursor-pointer">
                查询
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-xl shadow-sm">
            <div className="flex border-b">
              <button
                onClick={() => setActiveTab('shipments')}
                className={`px-6 py-4 font-medium transition-colors cursor-pointer ${
                  activeTab === 'shipments'
                    ? 'text-teal-600 border-b-2 border-teal-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                运单列表
              </button>
              <button
                onClick={() => setActiveTab('providers')}
                className={`px-6 py-4 font-medium transition-colors cursor-pointer ${
                  activeTab === 'providers'
                    ? 'text-teal-600 border-b-2 border-teal-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                物流商管理
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`px-6 py-4 font-medium transition-colors cursor-pointer ${
                  activeTab === 'analytics'
                    ? 'text-teal-600 border-b-2 border-teal-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                数据分析
              </button>
            </div>

            <div className="p-6">
              {activeTab === 'shipments' && (
                <div className="space-y-4">
                  {SHIPMENTS.map(shipment => {
                    const statusInfo = STATUS_CONFIG[shipment.status as keyof typeof STATUS_CONFIG];
                    return (
                      <div key={shipment.id} className="border border-gray-200 rounded-xl p-5">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                              <span className="text-teal-600 font-bold">{shipment.provider.slice(0, 2)}</span>
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900">{shipment.id}</div>
                              <div className="text-sm text-gray-500">{shipment.provider}</div>
                            </div>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-sm ${statusInfo.color}`}>
                            <i className={`${statusInfo.icon} mr-1`}></i>
                            {statusInfo.label}
                          </span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600 mb-4">
                          <span>{shipment.from}</span>
                          <i className="ri-arrow-right-line mx-2"></i>
                          <span>{shipment.to}</span>
                        </div>
                        <div className="mb-2">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-500">预计送达</span>
                            <span className="font-medium">{shipment.eta}</span>
                          </div>
                          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full transition-all ${
                                shipment.status === 'delivered' ? 'bg-green-500' :
                                shipment.status === 'in_transit' ? 'bg-teal-500' : 'bg-gray-400'
                              }`}
                              style={{ width: `${shipment.progress}%` }}
                            />
                          </div>
                        </div>
                        <div className="flex justify-end gap-2 mt-4">
                          <button className="px-4 py-2 text-teal-600 hover:bg-teal-50 rounded-lg font-medium cursor-pointer">
                            查看详情
                          </button>
                          <button className="px-4 py-2 bg-teal-50 text-teal-600 hover:bg-teal-100 rounded-lg font-medium cursor-pointer">
                            打印面单
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {activeTab === 'providers' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {LOGISTICS_PROVIDERS.map(provider => (
                    <div key={provider.id} className="border border-gray-200 rounded-xl p-5">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center">
                          <span className="text-xl font-bold text-gray-600">{provider.logo}</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{provider.name}</h3>
                          <div className="text-sm text-gray-500">覆盖: {provider.coverage}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-lg font-bold text-teal-600">{provider.onTime}%</div>
                          <div className="text-xs text-gray-500">准时率</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-gray-900">{provider.avgTime}</div>
                          <div className="text-xs text-gray-500">平均时效</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-gray-900">{provider.price}</div>
                          <div className="text-xs text-gray-500">价格</div>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <button className="flex-1 px-4 py-2 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 cursor-pointer">
                          设为默认
                        </button>
                        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                          配置
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'analytics' && (
                <div className="text-center py-16">
                  <i className="ri-bar-chart-box-line text-6xl text-gray-300 mb-4"></i>
                  <p className="text-gray-500">数据分析图表展示区域</p>
                  <p className="text-sm text-gray-400 mt-2">展示物流趋势、成本分析、时效统计等</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <PortalFooter type="B" />
    </div>
  );
}
