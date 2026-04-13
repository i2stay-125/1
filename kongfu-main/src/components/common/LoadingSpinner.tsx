export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="text-center space-y-8">
        {/* Brand wordmark */}
        <div className="animate-pulse">
          <span 
            className="text-4xl md:text-5xl font-extrabold tracking-[0.35em]"
            style={{ 
              background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
              WebkitBackgroundClip: 'text',
              color: 'transparent'
            }}
          >
            KungfuBuy
          </span>
          <div 
            className="mt-2 mx-auto h-1 w-28 rounded-full"
            style={{ background: 'linear-gradient(90deg, #FFD347, #059669)' }}
          ></div>
        </div>

        {/* Lightweight spinner */}
        <div className="flex items-center justify-center gap-3">
          {[0, 0.15, 0.3].map((delay) => (
            <div 
              key={delay}
              className="w-3 h-3 rounded-full animate-bounce"
              style={{ 
                backgroundColor: '#059669',
                animationDelay: `${delay}s`,
                animationDuration: '0.9s'
              }}
            ></div>
          ))}
        </div>

        {/* Thin progress indicator */}
        <div className="w-44 h-1.5 bg-emerald-100 rounded-full overflow-hidden mx-auto shadow-inner">
          <div 
            className="h-full rounded-full"
            style={{ 
              background: 'linear-gradient(90deg, rgba(32,68,168,0.2), #059669, rgba(32,68,168,0.2))',
              animation: 'loading-bar 1.2s ease-in-out infinite'
            }}
          ></div>
        </div>

        <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
          Preparing your experience
        </p>
      </div>

      {/* Keyframes inline */}
      <style>
        {`
          @keyframes loading-bar {
            0% { transform: translateX(-100%); }
            50% { transform: translateX(0); }
            100% { transform: translateX(100%); }
          }
        `}
      </style>
    </div>
  );
}

