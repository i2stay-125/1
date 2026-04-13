import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// B端导航配置
const B_NAV_ITEMS = [
  { name: '首页', path: '/portal-b' },
  { name: '产品中心', path: '/portal-b/products' },
  { name: '仓储管理', path: '/portal-b/warehouse' },
  { name: '物流管理', path: '/portal-b/logistics' },
  { name: '定制服务', path: '/portal-b/customize' },
];

// C端导航配置
const C_NAV_ITEMS = [
  { name: '首页', path: '/portal-c' },
  { name: '商城', path: '/portal-c/mall' },
  { name: '购物车', path: '/portal-c/cart' },
  { name: '物流', path: '/portal-c/track' },
  { name: '售后', path: '/portal-c/service' },
];

interface PortalHeaderProps {
  type: 'B' | 'C';
}

export default function PortalHeader({ type }: PortalHeaderProps) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = type === 'B' ? B_NAV_ITEMS : C_NAV_ITEMS;
  const isB = type === 'B';
  
  const primaryColor = isB ? '#0F766E' : '#059669';
  const primaryHover = isB ? '#0D9488' : '#10B981';

  const isActive = (path: string) => {
    if (path === (isB ? '/portal-b' : '/portal-c')) {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - 功夫买风格 */}
          <Link to={isB ? '/portal-b' : '/portal-c'} className="flex-shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">K</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              KungfuBuy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                  isActive(item.path)
                    ? 'text-teal-600 bg-teal-50'
                    : 'text-gray-700 hover:text-teal-600 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              to={isB ? '/portal-c' : '/portal-b'}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
            >
              {isB ? '个人购物' : '企业服务'}
            </Link>
            <button
              className="px-5 py-2.5 text-white rounded-lg font-semibold text-sm transition-all cursor-pointer hover:scale-105 active:scale-95"
              style={{ backgroundColor: primaryColor }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = primaryHover)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = primaryColor)}
            >
              登录
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
            aria-label={mobileMenuOpen ? '关闭菜单' : '打开菜单'}
          >
            <i className={`ri-${mobileMenuOpen ? 'close' : 'menu'}-line text-2xl text-gray-700`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 text-base font-medium rounded-lg transition-colors cursor-pointer ${
                    isActive(item.path)
                      ? 'text-teal-600 bg-teal-50'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200 flex flex-col space-y-2">
                <Link
                  to={isB ? '/portal-c' : '/portal-b'}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer text-center"
                >
                  {isB ? '个人购物' : '企业服务'}
                </Link>
                <button
                  className="px-4 py-3 text-white rounded-lg font-semibold text-base transition-all cursor-pointer"
                  style={{ backgroundColor: primaryColor }}
                >
                  登录
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
