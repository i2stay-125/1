import { useNavigate } from 'react-router-dom';
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
  User
} from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();

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
    <div className="min-h-screen flex flex-col">
      {/* 顶部导航 */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                KungfuBuy
              </span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-gray-600 hover:text-teal-600 transition-colors text-sm font-medium">功能服务</a>
              <a href="#about" className="text-gray-600 hover:text-teal-600 transition-colors text-sm font-medium">关于我们</a>
              <a href="#contact" className="text-gray-600 hover:text-teal-600 transition-colors text-sm font-medium">联系我们</a>
            </div>
          </div>
        </div>
      </header>

      {/* 主内容 - 左右分屏 */}
      <main className="flex-1 flex flex-col lg:flex-row pt-16">
        
        {/* B端大客户入口 - 左侧 */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 min-h-[50vh] lg:min-h-screen bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 relative overflow-hidden"
        >
          {/* 装饰背景 */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-teal-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"></div>
          </div>
          
          {/* 内容区域 */}
          <div className="relative z-10 flex flex-col justify-center items-center min-h-[50vh] lg:min-h-screen px-6 lg:px-12 py-12">
            {/* B端图标 */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
              className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-8"
            >
              <Building2 className="w-12 h-12 text-white" />
            </motion.div>
            
            {/* 标题 */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl lg:text-5xl font-bold text-white mb-4 text-center"
            >
              B端 · 大客户
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-teal-100 text-lg mb-10 text-center"
            >
              企业级采购 · 批量定制 · 专业服务
            </motion.p>

            {/* 功能列表 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 w-full max-w-md mb-10"
            >
              {bFeatures.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-4 hover:bg-white/20 transition-all cursor-pointer group"
                  onClick={() => navigate(`/portal-b/${feature.label === '产品中心' ? 'products' : feature.label === '仓储管理' ? 'warehouse' : feature.label === '物流管理' ? 'logistics' : feature.label === '定制服务' ? 'customize' : 'apply'}`)}
                >
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-medium">{feature.label}</div>
                    <div className="text-teal-200 text-sm">{feature.desc}</div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </motion.div>
              ))}
            </motion.div>

            {/* 进入B端按钮 */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              href="/apply.html?type=b2b"
              className="group flex items-center gap-3 bg-white text-teal-700 px-8 py-4 rounded-full font-semibold hover:bg-teal-50 transition-all shadow-lg hover:shadow-xl"
            >
              进入B端平台
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>

          {/* 底部装饰 */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-teal-900/50 to-transparent"></div>
        </motion.div>

        {/* 分割线 - 移动端隐藏 */}
        <div className="hidden lg:block w-1 bg-gradient-to-b from-teal-600 via-gray-300 to-emerald-600"></div>

        {/* C端小客户入口 - 右侧 */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 min-h-[50vh] lg:min-h-screen bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 relative overflow-hidden"
        >
          {/* 装饰背景 */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-300 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-300 rounded-full blur-3xl"></div>
          </div>

          {/* 内容区域 */}
          <div className="relative z-10 flex flex-col justify-center items-center min-h-[50vh] lg:min-h-screen px-6 lg:px-12 py-12">
            {/* C端图标 */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
              className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-8"
            >
              <ShoppingBag className="w-12 h-12 text-white" />
            </motion.div>

            {/* 标题 */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl lg:text-5xl font-bold text-white mb-4 text-center"
            >
              C端 · 小客户
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-emerald-100 text-lg mb-10 text-center"
            >
              精选商品 · 便捷购物 · 贴心服务
            </motion.p>

            {/* 功能列表 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 w-full max-w-md mb-10"
            >
              {cFeatures.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-4 hover:bg-white/20 transition-all cursor-pointer group"
                  onClick={() => navigate(`/portal-c/${feature.label === '商品商城' ? 'mall' : feature.label === '购物车' ? 'cart' : feature.label === '物流追踪' ? 'track' : feature.label === '售后中心' ? 'service' : 'profile'}`)}
                >
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-medium">{feature.label}</div>
                    <div className="text-emerald-100 text-sm">{feature.desc}</div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </motion.div>
              ))}
            </motion.div>

            {/* 进入C端按钮 */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              href="/apply.html?type=b2c"
              className="group flex items-center gap-3 bg-white text-emerald-700 px-8 py-4 rounded-full font-semibold hover:bg-emerald-50 transition-all shadow-lg hover:shadow-xl"
            >
              进入C端平台
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>

          {/* 底部装饰 */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-emerald-900/50 to-transparent"></div>
        </motion.div>
      </main>
    </div>
  );
};

export default HomePage;
