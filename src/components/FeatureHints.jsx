import React from 'react';

export default function FeatureHints() {
  const features = [
    {
      icon: '📊',
      title: 'Revenue Insights',
      description: 'Smart alerts for sales trends',
    },
    {
      icon: '👥',
      title: 'Labor Optimization',
      description: 'Schedule recommendations',
    },
    {
      icon: '🍽️',
      title: 'Menu Engineering',
      description: 'Promote high-margin items',
    },
    {
      icon: '📱',
      title: 'Marketing Automation',
      description: 'Automated campaigns',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-12 mb-12 opacity-50 pointer-events-none">
      <h3 className="text-xl font-semibold text-black mb-6">
        Other Naan Sense Features
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg p-4 flex items-start gap-4"
          >
            <div className="text-3xl grayscale">{feature.icon}</div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-black">{feature.title}</h4>
                <span className="bg-royal-purple text-white text-xs px-2 py-1 rounded-full">
                  Coming Soon
                </span>
              </div>
              <p className="text-sm text-mid-gray">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
