
import { useState } from 'react';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappNumber = '8613054517917';
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex items-center bg-white hover:bg-gray-50 text-gray-700 rounded-full shadow-lg transition-all duration-300 cursor-pointer border border-gray-200"
        style={{
          width: isHovered ? 'auto' : '48px',
          height: '48px',
          paddingLeft: '12px',
          paddingRight: isHovered ? '16px' : '12px',
        }}
      >
        <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
          <i className="ri-customer-service-2-fill text-xl" style={{ color: '#059669' }}></i>
        </div>
        <span
          className="whitespace-nowrap font-medium overflow-hidden transition-all duration-300"
          style={{
            maxWidth: isHovered ? '200px' : '0px',
            marginLeft: isHovered ? '10px' : '0px',
            opacity: isHovered ? 1 : 0,
            color: '#374151',
            fontSize: '14px'
          }}
        >
          Contact Us
        </span>
      </a>
    </div>
  );
}
