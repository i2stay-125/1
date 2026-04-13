import React from 'react';
import { Link } from 'react-router-dom';

interface PortalFooterProps {
  type: 'B' | 'C';
}

export default function PortalFooter({ type }: PortalFooterProps) {
  const isB = type === 'B';

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <span className="text-xl font-bold text-white">KungfuBuy</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {isB
                ? '专业的大客户服务平台，提供企业级产品采购、仓储物流、定制化服务一站式解决方案。'
                : '精选优质商品，为您提供便捷的购物体验、实时物流追踪和完善的售后服务。'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2 text-sm">
              {isB ? (
                <>
                  <li><Link to="/portal-b/products" className="hover:text-white transition-colors cursor-pointer">产品中心</Link></li>
                  <li><Link to="/portal-b/warehouse" className="hover:text-white transition-colors cursor-pointer">仓储管理</Link></li>
                  <li><Link to="/portal-b/logistics" className="hover:text-white transition-colors cursor-pointer">物流管理</Link></li>
                  <li><Link to="/portal-b/customize" className="hover:text-white transition-colors cursor-pointer">定制服务</Link></li>
                </>
              ) : (
                <>
                  <li><Link to="/portal-c/mall" className="hover:text-white transition-colors cursor-pointer">商城首页</Link></li>
                  <li><Link to="/portal-c/cart" className="hover:text-white transition-colors cursor-pointer">购物车</Link></li>
                  <li><Link to="/portal-c/track" className="hover:text-white transition-colors cursor-pointer">物流追踪</Link></li>
                  <li><Link to="/portal-c/service" className="hover:text-white transition-colors cursor-pointer">售后服务</Link></li>
                </>
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">联系我们</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <i className="ri-phone-line"></i>
                <span>400-888-8888</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-mail-line"></i>
                <span>support@kungfubuy.com</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-time-line"></i>
                <span>周一至周五 9:00-18:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-500 text-center">
          <p>© 2026 KungfuBuy. All rights reserved. | 京ICP备XXXXXXXX号</p>
        </div>
      </div>
    </footer>
  );
}
