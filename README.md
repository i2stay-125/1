import { useState } from "react";

export default function QuickApplySection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    requirement: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      alert("请填写姓名和电话");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const TO_EMAIL = "business@kungfubuy.com";
      const emailBody = `
新申请来自首页快速表单

姓名: ${formData.name}
电话: ${formData.phone}
公司: ${formData.company || "未填写"}
需求: ${formData.requirement || "未填写"}

---
此邮件来自网站首页申请表单`;

      const formDataToSend = new FormData();
      formDataToSend.append("email", TO_EMAIL);
      formDataToSend.append("subject", `新申请 - ${formData.name}`);
      formDataToSend.append("message", emailBody);
      formDataToSend.append("_replyto", TO_EMAIL);
      formDataToSend.append("_captcha", "false");

      const response = await fetch("https://formsubmit.co/ajax/" + TO_EMAIL, {
        method: "POST",
        body: formDataToSend
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", phone: "", company: "", requirement: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="quick-apply" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">快速申请</h2>
          <p className="text-lg text-gray-600">填写以下信息，我们将尽快与您联系</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">姓名 <span className="text-red-500">*</span></label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all" placeholder="请输入您的姓名" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">电话 <span className="text-red-500">*</span></label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all" placeholder="请输入您的电话" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">公司名称</label>
              <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all" placeholder="请输入您的公司名称（选填）" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">需求描述</label>
              <textarea name="requirement" value={formData.requirement} onChange={handleChange} rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all resize-none" placeholder="请描述您的需求（选填）" />
            </div>
            <button type="submit" disabled={isSubmitting} className="w-full sm:w-auto px-8 py-4 bg-emerald-600 text-white font-bold text-lg rounded-lg hover:bg-emerald-700 transition-all transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed cursor-pointer shadow-lg">
              {isSubmitting ? "提交中..." : "立即申请"}
            </button>
            {submitStatus === "success" && <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">申请成功！我们将在24小时内与您联系。</div>}
            {submitStatus === "error" && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">提交失败，请稍后重试或直接联系我们。</div>}
          </form>
        </div>
      </div>
    </section>
  );
}
