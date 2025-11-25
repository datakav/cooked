import React, { useEffect } from 'react';

export default function PricingModal({ isOpen, onClose, onStartTrial }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto"
      onClick={onClose}
    >
      <div className="min-h-full flex items-center justify-center p-3">
        <div
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-5 w-full relative my-6 transition-colors"
          style={{ maxWidth: '400px' }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-mid-gray dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <h2 className="text-xl font-bold text-black dark:text-white mb-5 pr-8">
            Unlock Premium Features
          </h2>

          <ul className="space-y-3 mb-6">
            {[
              'Detailed customer analysis',
              'Pre-written win-back messages',
              'Revenue recovery predictions',
              'One-click automation'
            ].map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-hunter-green flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm text-off-black dark:text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="text-center mb-6">
            <p className="text-3xl font-bold text-black dark:text-white">$49/month</p>
          </div>

          <button
            onClick={onStartTrial}
            className="w-full bg-spice-orange hover:bg-[#c95f1a] text-white font-semibold px-6 py-3 rounded-lg transition-colors mb-4"
          >
            Start Free Trial
          </button>

          <button
            onClick={onStartTrial}
            className="w-full text-mid-gray hover:text-spice-orange hover:underline text-sm transition-colors"
          >
            See all features →
          </button>
        </div>
      </div>
    </div>
  );
}
