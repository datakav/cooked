import React from 'react';

export default function FreeTierAlert({ onGetPlan }) {
  return (
    <div className="max-w-2xl mx-auto mt-6">
      <div className="border-l-4 border-spice-orange bg-orange-50 dark:bg-orange-900/20 rounded-r-lg p-6 transition-colors">
        <div className="flex items-start gap-3 mb-4">
          <span className="text-3xl">🚨</span>
          <h3 className="text-2xl font-bold text-black dark:text-white">
            Customer Retention Alert
          </h3>
        </div>

        <p className="text-lg text-off-black dark:text-gray-300 mb-3">
          <strong>15 of your regulars</strong> haven't ordered in 2 weeks.
        </p>

        <p className="mb-6 text-off-black dark:text-gray-300">
          That's{' '}
          <span className="text-[28px] font-bold text-spice-orange">
            $450/week
          </span>{' '}
          in revenue at risk.
        </p>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-6 transition-colors">
          <div className="flex items-start gap-2">
            <span className="text-xl">💡</span>
            <p className="text-off-black dark:text-gray-300">
              <strong>Quick tip:</strong> Re-engage high-value customers first.
            </p>
          </div>
        </div>

        <button
          onClick={onGetPlan}
          className="w-full md:w-auto bg-spice-orange hover:bg-[#c95f1a] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Get Detailed Recovery Plan
        </button>
      </div>
    </div>
  );
}
