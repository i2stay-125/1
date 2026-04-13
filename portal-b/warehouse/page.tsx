import React, { useState } from 'react';
import PortalHeader from '../../../components/feature/PortalHeader';
import PortalFooter from '../../../components/feature/PortalFooter';

const WAREHOUSES = [
  { id: 'WH001', name: '华东仓', location: '上海', address: '上海市嘉定区XX路XX号', capacity: 50000, used: 35000, items: 12568 },
  { id: 'WH002', name: '华南仓', location: '深圳', address: '深圳市龙岗区XX路XX号', capacity: 80000, used: 60000, items: 23456 },
  { id: 'WH003', name: '华北仓', location: '北京', address: '北京市大兴区XX路XX号', capacity: 60000, used: 42000, items: 15678 },
  { id: 'WH004', name: '西南仓', location: '成都', address: '成都市双流区XX路XX号', capacity: 40000, used: 28000, items: 8900 },
];

const INVENTORY_ALERTS = [
  { type: 'warning', product: '智能手表 Pro Max', current: 50, min: 100, message: '库存不足，请及时补货' },
  { type: 'danger', product: '空气净化器', current: 20, min: 50, message: '库存严重不足' },
  { type: 'info', product: '无线蓝牙耳机', current: 1200, min: 500, message: '库存充足' },
];

const RECENT_OPERATIONS = [
  { time: '2026-04-10 12:30', type: 'inbound', product: '运动跑步鞋', quantity: 500, operator: '张三' },
  { time: '2026-04-10 11:45', type: 'outbound', product: '多功能料理锅', quantity: 120, operator: '李四' },
  { time: '2026-04-10 10:20', type: 'transfer', product: '护肤套装礼盒', quantity: 200, operator: '王五', from: '华南仓', to: '华东仓' },
  { time: '2026-04-10 09:15', type: 'inbound', product: '便携充电宝', quantity: 1000, operator: '赵六' },
];

export default function WarehousePage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'inventory' | 'operations'>('overview');

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <PortalHeader type="B" />

      <main className="flex-1 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">仓储管理</h1>
            <p className="text-gray-600">实时监控库存状态，智能仓储系统</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                  <i className="ri-government-line text-2xl text-teal-600"></i>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">4</div>
                  <div className="text-sm text-gray-500">仓库数量</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <i className="ri-file-list-3-line text-2xl text-blue-600"></i>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">60,602</div>
                  <div className="text-sm text-gray-500">SKU总数</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                  <i className="ri-bar-chart-box-line text-2xl text-amber-600"></i>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">73.5%</div>
                  <div className="text-sm text-gray-500">总使用率</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <i className="ri-alert-line text-2xl text-red-600"></i>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">2</div>
                  <div className="text-sm text-gray-500">预警数量</div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-xl shadow-sm mb-6">
            <div className="flex border-b">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-6 py-4 font-medium transition-colors cursor-pointer ${
                  activeTab === 'overview'
                    ? 'text-teal-600 border-b-2 border-teal-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                仓库概览
              </button>
              <button
                onClick={() => setActiveTab('inventory')}
                className={`px-6 py-4 font-medium transition-colors cursor-pointer ${
                  activeTab === 'inventory'
                    ? 'text-teal-600 border-b-2 border-teal-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                库存预警
              </button>
              <button
                onClick={() => setActiveTab('operations')}
                className={`px-6 py-4 font-medium transition-colors cursor-pointer ${
                  activeTab === 'operations'
                    ? 'text-teal-600 border-b-2 border-teal-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                最近操作
              </button>
            </div>

            <div className="p-6">
              {activeTab === 'overview' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {WAREHOUSES.map(wh => (
                    <div key={wh.id} className="border border-gray-200 rounded-xl p-5">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="font-semibold text-gray-900">{wh.name}</h3>
                          <p className="text-sm text-gray-500">{wh.address}</p>
                        </div>
                        <span className="px-3 py-1 bg-teal-100 text-teal-700 text-sm rounded-full">
                          {wh.location}
                        </span>
                      </div>
                      <div className="mb-3">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">容量使用</span>
                          <span className="font-medium">{Math.round(wh.used / wh.capacity * 100)}%</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all ${
                              wh.used / wh.capacity > 0.8 ? 'bg-red-500' :
                              wh.used / wh.capacity > 0.6 ? 'bg-amber-500' : 'bg-teal-500'
                            }`}
                            style={{ width: `${(wh.used / wh.capacity) * 100}%` }}
                          />
                        </div>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>已用: {wh.used.toLocaleString()}</span>
                        <span>总容量: {wh.capacity.toLocaleString()}</span>
                      </div>
                      <div className="mt-3 text-sm text-gray-500">
                        <i className="ri-archive-line mr-1"></i>
                        在库商品: {wh.items.toLocaleString()} 件
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'inventory' && (
                <div className="space-y-4">
                  {INVENTORY_ALERTS.map((alert, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-xl border-l-4 ${
                        alert.type === 'warning' ? 'bg-amber-50 border-amber-500' :
                        alert.type === 'danger' ? 'bg-red-50 border-red-500' :
                        'bg-blue-50 border-blue-500'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900">{alert.product}</h4>
                          <p className="text-sm text-gray-600">{alert.message}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold">
                            {alert.current} <span className="text-gray-400 font-normal">/ {alert.min}</span>
                          </div>
                          <button className="text-sm text-teal-600 hover:text-teal-700 font-medium cursor-pointer">
                            立即补货
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'operations' && (
                <div className="space-y-4">
                  {RECENT_OPERATIONS.map((op, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        op.type === 'inbound' ? 'bg-green-100 text-green-600' :
                        op.type === 'outbound' ? 'bg-blue-100 text-blue-600' :
                        'bg-purple-100 text-purple-600'
                      }`}>
                        <i className={`ri-${
                          op.type === 'inbound' ? 'arrow-down-line' :
                          op.type === 'outbound' ? 'arrow-up-line' : 'exchange-line'
                        }`}></i>
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">{op.product}</div>
                        <div className="text-sm text-gray-500">
                          {op.type === 'inbound' && '入库'}
                          {op.type === 'outbound' && '出库'}
                          {op.type === 'transfer' && `调拨: ${op.from} → ${op.to}`}
                          {' · '}{op.quantity}件 · {op.operator}
                        </div>
                      </div>
                      <div className="text-sm text-gray-400">{op.time}</div>
                    </div>
                  ))}
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
