import React, { useState } from 'react';
import CustomerList from './CustomerList';
import MessageTemplate from './MessageTemplate';
import RevenueChart from './RevenueChart';

export default function PremiumContent() {
  const [activeStep, setActiveStep] = useState(1);
  const [selectedCustomers, setSelectedCustomers] = useState([]);
  const [messagesSent, setMessagesSent] = useState(false);

  const steps = [
    { number: 1, title: 'Identify At-Risk Customers' },
    { number: 2, title: 'Send Win-Back Messages' },
    { number: 3, title: 'Track Results' },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-4 px-2 sm:px-0 sm:mt-6">
      <div className="flex items-center gap-2 mb-4 sm:mb-6">
        <span className="bg-hunter-green text-white text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full">
          ✅ Premium Activated (Free Trial)
        </span>
      </div>

      <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-4 sm:mb-6">
        Naan Sense's Recovery Plan
      </h2>

      <div className="space-y-3 sm:space-y-4">
        {steps.map((step) => (
          <div
            key={step.number}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-colors"
          >
            <button
              onClick={() =>
                setActiveStep(activeStep === step.number ? null : step.number)
              }
              className="w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                <div
                  className={`rounded-full flex items-center justify-center font-bold text-white flex-shrink-0 ${
                    activeStep === step.number
                      ? 'bg-spice-orange'
                      : 'bg-mid-gray'
                  }`}
                  style={{ width: '32px', height: '32px', minWidth: '32px', fontSize: '14px' }}
                >
                  {step.number}
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-black dark:text-white">
                  {step.title}
                </h3>
              </div>
              <svg
                className={`text-mid-gray transform transition-transform flex-shrink-0 ${
                  activeStep === step.number ? 'rotate-180' : ''
                }`}
                style={{ width: '20px', height: '20px', minWidth: '20px', minHeight: '20px' }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {activeStep === step.number && (
              <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-gray-200 dark:border-gray-700">
                <div className="pt-4 sm:pt-6">
                  {step.number === 1 && (
                    <CustomerList
                      selectedCustomers={selectedCustomers}
                      onSelectionChange={setSelectedCustomers}
                    />
                  )}
                  {step.number === 2 && (
                    <MessageTemplate
                      selectedCustomers={selectedCustomers}
                      onMessagesSent={() => setMessagesSent(true)}
                    />
                  )}
                  {step.number === 3 && <RevenueChart />}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
