import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  ShoppingBag, 
  ChevronRight, 
  Package, 
  Warehouse, 
  Truck, 
  Palette, 
  FileCheck,
  ShoppingCart,
  MapPin,
  Headphones,
  User,
  Send,
  Globe,
  TrendingUp,
  Users
} from 'lucide-react';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState<'b2b' | 'b2c'>('b2b');

  const navItems = [
    { label: '首页', href: '#', active: true },
    { label: '服务', href: '#services' },
    { label: '为什么是我们', href: '#why-us' },
    { label: '工作流程', href: '#workflow' },
    { label: '常见问题解答', href: '#faqs' },
    { label: '博客', href: '#blog' },
    { label: '关于我们', href: '#about' },
    { label: '联系我们', href: '#contact' },
  ];

  const bFeatures = [
    { icon: Package, label: '产品中心', desc: '海量商品 批量采购' },
    { icon: Warehouse, label: '仓储管理', desc: '智能仓储 库存预警' },
    { icon: Truck, label: '物流管理', desc: '多物流商 全程追踪' },
    { icon: Palette, label: '定制服务', desc: '柔性定制 专属方案' },
    { icon: FileCheck, label: '申请入驻', desc: '快捷入驻 专属客服' },
  ];

  const cFeatures = [
    { icon: ShoppingBag, label: '商品商城', desc: '精选好物 品质保障' },
    { icon: ShoppingCart, label: '购物车', desc: '便捷结算 优惠多多' },
    { icon: MapPin, label: '物流追踪', desc: '实时定位 送达无忧' },
    { icon: Headphones, label: '售后中心', desc: '贴心服务 退换无忧' },
    { icon: User, label: '个人中心', desc: '订单管理 会员权益' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                KungfuBuy
              </span>
            </div>

            {/* 导航菜单 */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                    item.active
                      ? 'text-teal-600 bg-teal-50'
                      : 'text-gray-600 hover:text-teal-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* 移动端菜单按钮 */}
            <button className="lg:hidden p-2 text-gray-600 hover:text-teal-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* 移动端标签切换 */}
      <div className="lg:hidden bg-gray-50 border-b border-gray-200">
        <div className="flex">
          <button
            onClick={() => setActiveTab('b2b')}
            className={`flex-1 py-3 text-sm font-medium transition-colors ${
              activeTab === 'b2b'
                ? 'text-teal-600 border-b-2 border-teal-600 bg-white'
                : 'text-gray-600 hover:text-teal-600'
            }`}
          >
            <Building2 className="w-4 h-4 inline mr-1" />
            大客户
          </button>
          <button
            onClick={() => setActiveTab('b2c')}
            className={`flex-1 py-3 text-sm font-medium transition-colors ${
              activeTab === 'b2c'
                ? 'text-emerald-600 border-b-2 border-emerald-600 bg-white'
                : 'text-gray-600 hover:text-emerald-600'
            }`}
          >
            <ShoppingBag className="w-4 h-4 inline mr-1" />
            小客户
          </button>
        </div>
      </div>

      {/* 主内容 - 双栏布局 */}
      <main className="flex flex-col lg:flex-row min-h-[calc(100vh-64px)]">
        
        {/* 左侧：大客户 (B端) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className={`flex-1 min-h-[60vh] lg:min-h-screen bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 relative overflow-hidden ${
            activeTab === 'b2c' ? 'hidden lg:flex' : 'flex'
          }`}
        >
          {/* 装饰背景 */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-teal-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"></div>
          </div>
          
          {/* 内容区域 */}
          <div className="relative z-10 flex flex-col justify-center items-center w-full px-6 lg:px-12 py-12">
            {/* B端图标 */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
              className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6"
            >
              <Building2 className="w-12 h-12 text-white" />
            </motion.div>
            
            {/* 标题 */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl lg:text-5xl font-bold text-white mb-2 text-center"
            >
              大客户
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-teal-100 text-base lg:text-lg mb-8 text-center"
            >
              企业级采购 · 批量定制 · 专业服务
            </motion.p>

            {/* 功能列表 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="w-full max-w-md space-y-3 mb-8"
            >
              {bFeatures.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 hover:bg-white/20 transition-all cursor-pointer group"
                >
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-medium text-sm lg:text-base">{feature.label}</div>
                    <div className="text-teal-200 text-xs lg:text-sm">{feature.desc}</div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </motion.div>
              ))}
            </motion.div>

            {/* 申请按钮 */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              href="/apply.html?type=b2b"
              className="group flex items-center gap-3 bg-white text-teal-700 px-8 py-4 rounded-full font-semibold hover:bg-teal-50 transition-all shadow-lg hover:shadow-xl"
            >
              大客户申请
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            {/* 数据展示 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="mt-8 flex gap-8 text-center"
            >
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-white">10K+</div>
                <div className="text-teal-200 text-xs lg:text-sm">企业客户</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-white">99%</div>
                <div className="text-teal-200 text-xs lg:text-sm">满意度</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-white">24h</div>
                <div className="text-teal-200 text-xs lg:text-sm">响应时间</div>
              </div>
            </motion.div>
          </div>

          {/* 底部装饰 */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-teal-900/50 to-transparent"></div>
        </motion.div>

        {/* 分割线 - 仅桌面端显示 */}
        <div className="hidden lg:block w-1 bg-gradient-to-b from-teal-600 via-gray-300 to-emerald-600"></div>

        {/* 右侧：小客户 (C端) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className={`flex-1 min-h-[60vh] lg:min-h-screen bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 relative overflow-hidden ${
            activeTab === 'b2b' ? 'hidden lg:flex' : 'flex'
          }`}
        >
          {/* 装饰背景 */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-300 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-300 rounded-full blur-3xl"></div>
          </div>

          {/* 内容区域 */}
          <div className="relative z-10 flex flex-col justify-center items-center w-full px-6 lg:px-12 py-12">
            {/* C端图标 */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
              className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6"
            >
              <ShoppingBag className="w-12 h-12 text-white" />
            </motion.div>

            {/* 标题 */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl lg:text-5xl font-bold text-white mb-2 text-center"
            >
              小客户
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-emerald-100 text-base lg:text-lg mb-8 text-center"
            >
              精选商品 · 便捷购物 · 贴心服务
            </motion.p>

            {/* 功能列表 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="w-full max-w-md space-y-3 mb-8"
            >
              {cFeatures.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 hover:bg-white/20 transition-all cursor-pointer group"
                >
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-medium text-sm lg:text-base">{feature.label}</div>
                    <div className="text-emerald-100 text-xs lg:text-sm">{feature.desc}</div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </motion.div>
              ))}
            </motion.div>

            {/* 申请按钮 */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              href="/apply.html?type=b2c"
              className="group flex items-center gap-3 bg-white text-emerald-700 px-8 py-4 rounded-full font-semibold hover:bg-emerald-50 transition-all shadow-lg hover:shadow-xl"
            >
              小客户申请
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            {/* 数据展示 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="mt-8 flex gap-8 text-center"
            >
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-white">50K+</div>
                <div className="text-emerald-100 text-xs lg:text-sm">活跃用户</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-white">10万+</div>
                <div className="text-emerald-100 text-xs lg:text-sm">商品数量</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-white">48h</div>
                <div className="text-emerald-100 text-xs lg:text-sm">全球送达</div>
              </div>
            </motion.div>
          </div>

          {/* 底部装饰 */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-emerald-900/50 to-transparent"></div>
        </motion.div>
      </main>
    </div>
  );
};

export default HomePage;
