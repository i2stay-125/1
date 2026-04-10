import React, { useState } from 'react';
import PortalHeader from '../../../components/feature/PortalHeader';
import PortalFooter from '../../../components/feature/PortalFooter';

const BENEFITS = [
  { icon: 'ri-percent-line', title: '专属折扣', desc: '大客户专属采购价格' },
  { icon: 'ri-vip-crown-line', title: '优先服务', desc: '专属客服绿色通道' },
  { icon: 'ri-truck-line', title: '免运费', desc: '月度免运费额度' },
  { icon: 'ri-file-chart-line', title: '账期服务', desc: '最长60天账期' },
];

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    phone: '',
    email: '',
    businessType: '',
    monthlyVolume: '',
    description: '',
  });
  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('申请已提交！我们将在24小时内与您联系。');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <PortalHeader type="B" />

      <main className="flex-1 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">申请入驻</h1>
            <p className="text-gray-600">成为B端大客户，享受专属权益</p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {BENEFITS.map((benefit, idx) => (
              <div key={idx} className="bg-white rounded-xl p-4 text-center shadow-sm">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className={`${benefit.icon} text-xl text-teal-600`}></i>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">{benefit.title}</h3>
                <p className="text-xs text-gray-500 mt-1">{benefit.desc}</p>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            {/* Steps */}
            <div className="flex border-b">
              {[1, 2, 3].map(step => (
                <button
                  key={step}
                  onClick={() => setCurrentStep(step)}
                  className={`flex-1 py-4 text-center font-medium transition-colors cursor-pointer ${
                    currentStep >= step
                      ? 'text-teal-600 border-b-2 border-teal-600'
                      : 'text-gray-500'
                  }`}
                >
                  <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full mr-2 ${
                    currentStep >= step ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    {step}
                  </span>
                  {step === 1 && '基本信息'}
                  {step === 2 && '企业信息'}
                  {step === 3 && '确认提交'}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="p-8">
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        公司名称 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                        placeholder="请输入公司全称"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        联系人 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="contactPerson"
                        value={formData.contactPerson}
                        onChange={handleChange}
                        required
                        placeholder="请输入联系人姓名"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        手机号码 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="请输入手机号码"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        电子邮箱 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="请输入电子邮箱"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        业务类型 <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      >
                        <option value="">请选择业务类型</option>
                        <option value="电商">电商平台</option>
                        <option value="批发">批发分销</option>
                        <option value="零售">线下零售</option>
                        <option value="礼品">礼品定制</option>
                        <option value="其他">其他</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        预计月采购量 <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="monthlyVolume"
                        value={formData.monthlyVolume}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      >
                        <option value="">请选择月采购量</option>
                        <option value="1-10万">1-10万</option>
                        <option value="10-50万">10-50万</option>
                        <option value="50-100万">50-100万</option>
                        <option value="100万以上">100万以上</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      业务描述
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows={4}
                      placeholder="请简单描述您的业务需求..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                    />
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">申请信息确认</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">公司名称：</span>
                        <span className="text-gray-900">{formData.companyName || '-'}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">联系人：</span>
                        <span className="text-gray-900">{formData.contactPerson || '-'}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">手机号码：</span>
                        <span className="text-gray-900">{formData.phone || '-'}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">电子邮箱：</span>
                        <span className="text-gray-900">{formData.email || '-'}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">业务类型：</span>
                        <span className="text-gray-900">{formData.businessType || '-'}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">预计月采购量：</span>
                        <span className="text-gray-900">{formData.monthlyVolume || '-'}</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-teal-50 rounded-xl p-6">
                    <h3 className="font-semibold text-teal-900 mb-2">温馨提示</h3>
                    <ul className="text-sm text-teal-700 space-y-1">
                      <li>• 提交申请后，我们将在24小时内审核</li>
                      <li>• 审核通过后，专属客服将与您联系</li>
                      <li>• 请确保填写的联系方式准确无误</li>
                    </ul>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="agree"
                      required
                      className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                    />
                    <label htmlFor="agree" className="ml-2 text-sm text-gray-600">
                      我已阅读并同意《B端大客户服务协议》和《隐私政策》
                    </label>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between mt-8 pt-6 border-t">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 cursor-pointer"
                  >
                    上一步
                  </button>
                ) : (
                  <div />
                )}
                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(currentStep + 1)}
                    className="px-6 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 cursor-pointer"
                  >
                    下一步
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-8 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 cursor-pointer"
                  >
                    提交申请
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </main>

      <PortalFooter type="B" />
    </div>
  );
}
