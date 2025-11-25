import React, { useState } from 'react';
import { customers } from '../data/customers';

export default function MessageTemplate({ selectedCustomers, onMessagesSent }) {
  const [sendMethod, setSendMethod] = useState('sms');
  const [personalizeEach, setPersonalizeEach] = useState(true);
  const [sent, setSent] = useState(false);

  const previewCustomer =
    customers.find((c) => selectedCustomers.includes(c.id)) || customers[0];

  const handleSend = () => {
    setSent(true);
    onMessagesSent();
  };

  if (sent) {
    return (
      <div className="bg-hunter-green text-white rounded-lg p-6 animate-fade-in">
        <div className="flex items-center gap-3 mb-2">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <h3 className="text-xl font-semibold">
            Messages sent to {selectedCustomers.length} customers!
          </h3>
        </div>
        <p className="text-white/90">
          Naan Sense will track responses and follow up. Check back in 48 hours
          for results.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">📱</span>
        <h3 className="text-xl font-semibold text-black dark:text-white">
          Win-Back Message Template
        </h3>
      </div>

      <p className="text-sm text-mid-gray dark:text-gray-400 mb-4">
        Preview for: <strong>{previewCustomer.name}</strong>
      </p>

      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 mb-6 border border-gray-200 dark:border-gray-600">
        <div className="space-y-3 text-off-black dark:text-gray-100">
          <p>
            Hi <span className="font-bold text-spice-orange">{previewCustomer.name}</span>!
          </p>
          <p>
            We noticed you haven't stopped by in a couple weeks - we miss you! 🌮
          </p>
          <p>
            Your usual (
            <span className="font-bold text-spice-orange">
              {previewCustomer.favoriteItem}
            </span>
            ) is waiting for you.
          </p>
          <p>
            Here's 20% off your next order this week to welcome you back.
          </p>
          <p className="font-medium">- Dana & the team at Dana's Taco Stand</p>
          <div className="pt-3 border-t border-gray-300 dark:border-gray-500 mt-4">
            <p className="text-sm">
              Use code: <strong>COMEBACK20</strong>
            </p>
            <p className="text-sm">Expires: Dec 1, 2025</p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-sm font-medium text-black dark:text-white mb-3">Send via:</p>
        <div className="space-y-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="sendMethod"
              value="sms"
              checked={sendMethod === 'sms'}
              onChange={(e) => setSendMethod(e.target.value)}
              className="w-4 h-4 accent-spice-orange"
            />
            <span className="text-off-black dark:text-gray-200">
              SMS ({previewCustomer.phone})
            </span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="sendMethod"
              value="email"
              checked={sendMethod === 'email'}
              onChange={(e) => setSendMethod(e.target.value)}
              className="w-4 h-4 accent-spice-orange"
            />
            <span className="text-off-black dark:text-gray-200">Email (if available)</span>
          </label>
        </div>
      </div>

      <div className="mb-6 space-y-3">
        <label className="flex items-start gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={true}
            readOnly
            className="mt-1 w-4 h-4 accent-spice-orange"
          />
          <span className="text-off-black dark:text-gray-200">
            Send to all {selectedCustomers.length} selected customers
          </span>
        </label>
        <label className="flex items-start gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={personalizeEach}
            onChange={(e) => setPersonalizeEach(e.target.checked)}
            className="mt-1 w-4 h-4 accent-spice-orange"
          />
          <span className="text-off-black dark:text-gray-200">
            Personalize each message (recommended)
          </span>
        </label>
      </div>

      <button
        onClick={handleSend}
        disabled={selectedCustomers.length === 0}
        className="bg-spice-orange hover:bg-[#c95f1a] text-white font-semibold px-6 py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Send Messages
      </button>
    </div>
  );
}
