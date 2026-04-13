import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PortalHeader from '../../../components/feature/PortalHeader';
import PortalFooter from '../../../components/feature/PortalFooter';

const CART_ITEMS = [
  { id: 1, name: '智能手表 Pro Max', price: 1299, originalPrice: 1599, quantity: 1, image: 'https://picsum.photos/200/200?random=30', selected: true },
  { id: 2, name: '无线蓝牙耳机', price: 299, originalPrice: 399, quantity: 2, image: 'https://picsum.photos/200/200?random=31', selected: true },
  { id: 3, name: '便携充电宝 20000mAh', price: 99, originalPrice: 149, quantity: 1, image: 'https://picsum.photos/200/200?random=32', selected: false },
];

export default function CartPage() {
  const [items, setItems] = useState(CART_ITEMS);
  const [selectAll, setSelectAll] = useState(false);

  const toggleSelect = (id: number) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, selected: !item.selected } : item
    ));
  };

  const toggleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setItems(items.map(item => ({ ...item, selected: newSelectAll })));
  };

  const updateQuantity = (id: number, delta: number) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const selectedItems = items.filter(item => item.selected);
  const totalPrice = selectedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalDiscount = selectedItems.reduce((sum, item) => sum + (item.originalPrice - item.price) * item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <PortalHeader type="C" />

      <main className="flex-1 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">购物车</h1>
            <p className="text-gray-500 text-sm mt-1">共 {items.length} 件商品</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Cart Items */}
            <div className="flex-1">
              {/* Select All */}
              <div className="bg-white rounded-xl p-4 mb-4 shadow-sm flex items-center justify-between">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={toggleSelectAll}
                    className="w-5 h-5 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                  />
                  <span className="font-medium text-gray-900">全选</span>
                </label>
                <button className="text-gray-500 hover:text-red-500 text-sm cursor-pointer">
                  清除失效商品
                </button>
              </div>

              {/* Items */}
              <div className="space-y-4">
                {items.map(item => (
                  <div key={item.id} className={`bg-white rounded-xl p-4 shadow-sm ${!item.selected ? 'opacity-60' : ''}`}>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={item.selected}
                          onChange={() => toggleSelect(item.id)}
                          className="w-5 h-5 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500 cursor-pointer"
                        />
                      </label>
                      <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <Link to="#" className="font-medium text-gray-900 hover:text-emerald-600 line-clamp-2">
                          {item.name}
                        </Link>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-lg font-bold text-red-500">¥{item.price}</span>
                          <span className="text-sm text-gray-400 line-through">¥{item.originalPrice}</span>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center border border-gray-200 rounded-lg">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 cursor-pointer"
                            >
                              <i className="ri-subtract-line"></i>
                            </button>
                            <span className="w-10 text-center font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 cursor-pointer"
                            >
                              <i className="ri-add-line"></i>
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-gray-400 hover:text-red-500 cursor-pointer"
                          >
                            <i className="ri-delete-bin-line text-xl"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {items.length === 0 && (
                  <div className="bg-white rounded-xl p-12 text-center">
                    <i className="ri-shopping-cart-line text-6xl text-gray-300 mb-4"></i>
                    <p className="text-gray-500 mb-4">购物车是空的</p>
                    <Link
                      to="/portal-c/mall"
                      className="inline-block px-6 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 cursor-pointer"
                    >
                      去逛逛
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:w-80">
              <div className="bg-white rounded-xl p-6 shadow-sm sticky top-24">
                <h3 className="font-semibold text-gray-900 mb-4">订单摘要</h3>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">商品总价</span>
                    <span className="text-gray-900">¥{totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">优惠立减</span>
                    <span className="text-red-500">-¥{totalDiscount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">运费</span>
                    <span className="text-gray-900">
                      {totalPrice >= 99 ? '免运费' : '¥10.00'}
                    </span>
                  </div>
                  <div className="border-t pt-3 flex justify-between">
                    <span className="font-medium text-gray-900">合计</span>
                    <span className="text-xl font-bold text-red-500">
                      ¥{(totalPrice + (totalPrice >= 99 ? 0 : 10)).toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-emerald-50 rounded-lg">
                  <div className="flex items-center gap-2 text-emerald-700 text-sm">
                    <i className="ri-shield-check-line"></i>
                    <span>品质保障 · 7天无理由退换</span>
                  </div>
                </div>

                {selectedItems.length > 0 ? (
                  <Link
                    to="/portal-c/profile"
                    className="block w-full mt-4 px-6 py-4 bg-emerald-600 text-white text-center rounded-lg font-semibold hover:bg-emerald-700 cursor-pointer"
                  >
                    去结算 ({selectedItems.length})
                  </Link>
                ) : (
                  <button
                    disabled
                    className="w-full mt-4 px-6 py-4 bg-gray-300 text-gray-500 rounded-lg font-semibold cursor-not-allowed"
                  >
                    去结算
                  </button>
                )}

                <div className="mt-4 flex items-center justify-center gap-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <i className="ri-lock-line"></i> 安全支付
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="ri-customer-service-2-line"></i> 7x24客服
                  </span>
                </div>
              </div>

              {/* Coupon */}
              <div className="bg-white rounded-xl p-4 mt-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <i className="ri-coupon-3-line text-emerald-600"></i>
                    <span className="font-medium text-gray-900">优惠券</span>
                  </div>
                  <button className="text-emerald-600 text-sm cursor-pointer">
                    领取优惠券
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <PortalFooter type="C" />
    </div>
  );
}
