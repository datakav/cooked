import React from 'react';

export default function NaanSenseChat({ onShowInsights }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 max-w-2xl mx-auto transition-colors">
      <div className="flex items-start gap-4">
        <div className="text-4xl">🍞</div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-spice-orange mb-2">
            Hi Dana! I'm Naan Sense, your AI assistant.
          </h3>
          <p className="text-off-black dark:text-gray-300 mb-6 leading-relaxed">
            I keep an eye on your restaurant data so you don't have to.
          </p>
          <button
            onClick={onShowInsights}
            className="bg-spice-orange hover:bg-[#c95f1a] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Show me insights
          </button>
        </div>
      </div>
    </div>
  );
}
