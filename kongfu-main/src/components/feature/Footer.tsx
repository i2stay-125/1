import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-4">
            <div className="flex items-center h-10 mb-4 w-fit">
              <span className="text-xl font-black tracking-tight">
                <span style={{ color: '#F59E0B' }}>Kungfu</span>
                <span style={{ color: '#059669' }}>Buy</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              KungfuBuy is a dynamic dropshipping agent dedicated to providing efficient dropshipping services for dropshippers worldwide.
With our in-house sourcing team, self-operated warehouse, and professional packaging and fulfillment crew, we maintain full control over every step of the process.
Our goal is to help every seller get started easily and grow quickly.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white font-semibold text-lg mb-4 h-7 flex items-center">Quick Links</h3>
            <ul className="space-y-2">
              <li className="h-6 flex items-center">
                <a href="/" className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer">Home</a>
              </li>
              <li className="h-6 flex items-center">
                <a href="/about" className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer">About Us</a>
              </li>
              <li className="h-6 flex items-center">
                <a href="/faqs" className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer">Faq</a>
              </li>
              <li className="h-6 flex items-center">
                <a href="/privacy-policy" className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer">Privacy Policy</a>
              </li>
              <li className="h-6 flex items-center">
                <a href="/terms" className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer">Terms Of Service</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-white font-semibold text-lg mb-4 h-7 flex items-center">Core Services</h4>
            <ul className="space-y-2">
              <li className="text-sm h-6 flex items-center">Product Sourcing</li>
              <li className="text-sm h-6 flex items-center">Quality Inspection</li>
              <li className="text-sm h-6 flex items-center">Warehouse Management</li>
              <li className="text-sm h-6 flex items-center">International Logistics</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1 md:col-span-4">
            <h4 className="text-white font-semibold text-lg mb-4 h-7 flex items-center">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="ri-mail-line mr-3 w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5" style={{ color: '#059669' }}></i>
                <span className="text-sm">business@kungfubuy.com</span>
              </li>
              <li className="flex items-start">
                <i className="ri-phone-line mr-3 w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5" style={{ color: '#059669' }}></i>
                <span className="text-sm">+86 130-5451-7917</span>
              </li>
              <li className="flex items-start">
                <i className="ri-whatsapp-line mr-3 w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5" style={{ color: '#059669' }}></i>
                <a 
                  href="https://wa.me/8613054517917" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm hover:text-yellow-400 transition-colors cursor-pointer"
                >
                  +86 130-5451-7917
                </a>
              </li>
              <li className="flex items-start">
                <i className="ri-map-pin-line mr-3 w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5" style={{ color: '#059669' }}></i>
                <span className="text-sm">Blue Intelligence Valley Building 1, High-tech Zone, Yantai, Shandong, China</span>
              </li>
            </ul>
            
            {/* Social Media Icons */}
            <div className="mt-6">
              <div className="flex items-center space-x-4">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center bg-gray-800 hover:bg-emerald-600 rounded-full transition-colors cursor-pointer"
                >
                  <i className="ri-facebook-fill text-lg"></i>
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center bg-gray-800 hover:bg-pink-600 rounded-full transition-colors cursor-pointer"
                >
                  <i className="ri-instagram-fill text-lg"></i>
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center bg-gray-800 hover:bg-red-600 rounded-full transition-colors cursor-pointer"
                >
                  <i className="ri-youtube-fill text-lg"></i>
                </a>
                <a 
                  href="https://tiktok.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded-full transition-colors cursor-pointer"
                >
                  <i className="ri-tiktok-fill text-lg"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-center md:justify-center items-center">
          <p className="text-sm text-gray-400 text-center">
            © 2025 KungfuBuy. All rights reserved.
          </p>
         
        </div>
      </div>
    </footer>
  );
}
