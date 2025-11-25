import React, { useState } from 'react';
import { customers } from '../data/customers';
import { calculateReturnLikelihood, getScoreColor, getScoreReasoning } from '../utils/scoring';

export default function CustomerList({ selectedCustomers, onSelectionChange }) {
  // Add scores to customers
  const customersWithScores = customers.map(customer => ({
    ...customer,
    score: calculateReturnLikelihood(customer),
  }));

  // Sort by score (high to low) by default
  const [sortBy, setSortBy] = useState('score');
  const [hoveredCustomer, setHoveredCustomer] = useState(null);

  const sortedCustomers = [...customersWithScores].sort((a, b) => {
    if (sortBy === 'score') return b.score - a.score;
    if (sortBy === 'daysAgo') return b.daysAgo - a.daysAgo;
    if (sortBy === 'avgWeekly') return b.avgWeekly - a.avgWeekly;
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return 0;
  });

  const toggleCustomer = (id) => {
    if (selectedCustomers.includes(id)) {
      onSelectionChange(selectedCustomers.filter((cid) => cid !== id));
    } else {
      onSelectionChange([...selectedCustomers, id]);
    }
  };

  const toggleAll = () => {
    if (selectedCustomers.length === customers.length) {
      onSelectionChange([]);
    } else {
      onSelectionChange(customers.map((c) => c.id));
    }
  };

  return (
    <div className="space-y-4">
      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6">
        <div className="text-center p-3 sm:p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <div className="text-xl sm:text-2xl font-bold text-green-700 dark:text-green-400">
            {customersWithScores.filter(c => c.score >= 70).length}
          </div>
          <div className="text-xs sm:text-sm text-green-600 dark:text-green-500">High Likelihood</div>
        </div>
        <div className="text-center p-3 sm:p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
          <div className="text-xl sm:text-2xl font-bold text-yellow-700 dark:text-yellow-400">
            {customersWithScores.filter(c => c.score >= 40 && c.score < 70).length}
          </div>
          <div className="text-xs sm:text-sm text-yellow-600 dark:text-yellow-500">Medium Likelihood</div>
        </div>
        <div className="text-center p-3 sm:p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
          <div className="text-xl sm:text-2xl font-bold text-red-700 dark:text-red-400">
            {customersWithScores.filter(c => c.score < 40).length}
          </div>
          <div className="text-xs sm:text-sm text-red-600 dark:text-red-500">Low Likelihood</div>
        </div>
      </div>

      {/* Priority Insight */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
        <p className="text-sm text-blue-700 dark:text-blue-300">
          💡 <strong>Naan Sense Recommendation:</strong> Focus on the{' '}
          {customersWithScores.filter(c => c.score >= 70).length} high-likelihood
          customers first for best ROI. Expected recovery:{' '}
          <strong>
            ${customersWithScores
              .filter(c => c.score >= 70)
              .reduce((sum, c) => sum + c.avgWeekly, 0)}
            /week
          </strong>
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <p className="text-sm text-mid-gray dark:text-gray-400">
          {selectedCustomers.length} of {customers.length} selected
        </p>
        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="text-sm text-mid-gray dark:text-gray-400">
            Sort by:
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-spice-orange"
          >
            <option value="score">Return Likelihood</option>
            <option value="daysAgo">Days Ago</option>
            <option value="avgWeekly">Avg Weekly</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>

      {/* Mobile: Card Layout */}
      <div className="md:hidden space-y-3">
        {sortedCustomers.map((customer) => {
          const scoreStyle = getScoreColor(customer.score);
          const isSelected = selectedCustomers.includes(customer.id);
          const isHovered = hoveredCustomer === customer.id;

          return (
            <div
              key={customer.id}
              className={`border rounded-lg p-4 border-l-4 ${
                isSelected
                  ? 'bg-orange-50 dark:bg-orange-900/20 border-spice-orange'
                  : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
              }`}
              style={{
                borderLeftColor: scoreStyle.text.includes('green')
                  ? '#22c55e'
                  : scoreStyle.text.includes('yellow')
                    ? '#eab308'
                    : '#ef4444'
              }}
              onMouseEnter={() => setHoveredCustomer(customer.id)}
              onMouseLeave={() => setHoveredCustomer(null)}
              onTouchStart={() => setHoveredCustomer(customer.id)}
            >
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => toggleCustomer(customer.id)}
                  className="mt-1 w-4 h-4 accent-spice-orange"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-black dark:text-white">{customer.name}</h3>
                      <p className="text-sm text-mid-gray dark:text-gray-400">
                        Last order: {customer.daysAgo} days ago
                      </p>
                    </div>
                    <div className={`px-3 py-1 rounded-full ${scoreStyle.bg} flex items-center gap-1 ml-2`}>
                      <span>{scoreStyle.icon}</span>
                      <span className={`text-sm font-semibold ${scoreStyle.text}`}>
                        {customer.score}%
                      </span>
                    </div>
                  </div>

                  <div className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    <div>Avg: <strong className="text-spice-orange">${customer.avgWeekly}/week</strong></div>
                    <div>Fav: {customer.favoriteItem}</div>
                  </div>

                  {/* Show reasoning on hover/tap */}
                  {isHovered && (
                    <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600">
                      <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Why this score?</p>
                      <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                        {getScoreReasoning(customer, customer.score).map((reason, i) => (
                          <li key={i}>• {reason}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </label>
            </div>
          );
        })}
      </div>

      {/* Desktop: Table Layout */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="text-left py-3 px-2">
                <input
                  type="checkbox"
                  checked={selectedCustomers.length === customers.length}
                  onChange={toggleAll}
                  className="w-4 h-4 accent-spice-orange"
                />
              </th>
              <th className="text-left py-3 px-3 text-xs font-semibold text-mid-gray dark:text-gray-400 uppercase">
                Customer
              </th>
              <th className="text-left py-3 px-3 text-xs font-semibold text-mid-gray dark:text-gray-400 uppercase">
                Score
              </th>
              <th className="text-left py-3 px-3 text-xs font-semibold text-mid-gray dark:text-gray-400 uppercase">
                Last Order
              </th>
              <th className="text-left py-3 px-3 text-xs font-semibold text-mid-gray dark:text-gray-400 uppercase">
                Avg/Week
              </th>
              <th className="text-left py-3 px-3 text-xs font-semibold text-mid-gray dark:text-gray-400 uppercase">
                Favorite
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedCustomers.map((customer) => {
              const scoreStyle = getScoreColor(customer.score);
              const isSelected = selectedCustomers.includes(customer.id);
              const isHovered = hoveredCustomer === customer.id;

              return (
                <tr
                  key={customer.id}
                  className={`border-b border-gray-100 dark:border-gray-700 cursor-pointer ${
                    isSelected
                      ? 'bg-orange-50 dark:bg-orange-900/20'
                      : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                  onMouseEnter={() => setHoveredCustomer(customer.id)}
                  onMouseLeave={() => setHoveredCustomer(null)}
                >
                  <td className="py-3 px-2">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggleCustomer(customer.id)}
                      className="w-4 h-4 accent-spice-orange"
                    />
                  </td>
                  <td className="py-3 px-3">
                    <div className="font-medium text-black dark:text-white">{customer.name}</div>
                    {isHovered && (
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {getScoreReasoning(customer, customer.score)[0]}
                      </div>
                    )}
                  </td>
                  <td className="py-3 px-3">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold ${scoreStyle.bg} ${scoreStyle.text}`}>
                      {scoreStyle.icon} {customer.score}%
                    </span>
                  </td>
                  <td className="py-3 px-3 text-off-black dark:text-gray-300">
                    {customer.daysAgo} days ago
                  </td>
                  <td className="py-3 px-3 text-spice-orange font-medium">
                    ${customer.avgWeekly}
                  </td>
                  <td className="py-3 px-3 text-off-black dark:text-gray-300">
                    {customer.favoriteItem}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
