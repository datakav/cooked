import React, { useState } from 'react';
import { customers } from '../data/customers';

export default function CustomerList({ selectedCustomers, onSelectionChange }) {
  const [sortBy, setSortBy] = useState('daysAgo');

  const sortedCustomers = [...customers].sort((a, b) => {
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
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
        <p className="text-sm text-mid-gray">
          {selectedCustomers.length} of {customers.length} selected
        </p>
        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="text-sm text-mid-gray">
            Sort by:
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-spice-orange"
          >
            <option value="daysAgo">Days Ago</option>
            <option value="avgWeekly">Avg Weekly</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>

      {/* Mobile: Card Layout */}
      <div className="md:hidden space-y-3">
        {sortedCustomers.map((customer) => (
          <div
            key={customer.id}
            className={`border rounded-lg p-4 ${
              selectedCustomers.includes(customer.id)
                ? 'bg-orange-50 border-spice-orange'
                : 'bg-white border-gray-200'
            }`}
          >
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedCustomers.includes(customer.id)}
                onChange={() => toggleCustomer(customer.id)}
                className="mt-1 w-4 h-4 accent-spice-orange"
              />
              <div className="flex-1">
                <p className="font-medium text-black">{customer.name}</p>
                <p className="text-sm text-mid-gray">
                  Last order: {customer.daysAgo} days ago
                </p>
                <p className="text-sm text-spice-orange font-medium">
                  Avg: ${customer.avgWeekly}/week
                </p>
                <p className="text-sm text-off-black mt-1">
                  Fav: {customer.favoriteItem}
                </p>
              </div>
            </label>
          </div>
        ))}
      </div>

      {/* Desktop: Table Layout */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-2">
                <input
                  type="checkbox"
                  checked={selectedCustomers.length === customers.length}
                  onChange={toggleAll}
                  className="w-4 h-4 accent-spice-orange"
                />
              </th>
              <th className="text-left py-3 px-3 text-xs font-semibold text-mid-gray uppercase">
                Name
              </th>
              <th className="text-left py-3 px-3 text-xs font-semibold text-mid-gray uppercase">
                Days Ago
              </th>
              <th className="text-left py-3 px-3 text-xs font-semibold text-mid-gray uppercase">
                Avg/Week
              </th>
              <th className="text-left py-3 px-3 text-xs font-semibold text-mid-gray uppercase">
                Favorite Item
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedCustomers.map((customer) => (
              <tr
                key={customer.id}
                className={`border-b border-gray-100 ${
                  selectedCustomers.includes(customer.id)
                    ? 'bg-orange-50'
                    : 'bg-white'
                }`}
              >
                <td className="py-3 px-2">
                  <input
                    type="checkbox"
                    checked={selectedCustomers.includes(customer.id)}
                    onChange={() => toggleCustomer(customer.id)}
                    className="w-4 h-4 accent-spice-orange"
                  />
                </td>
                <td className="py-3 px-3 font-medium text-black">
                  {customer.name}
                </td>
                <td className="py-3 px-3 text-off-black">{customer.daysAgo}</td>
                <td className="py-3 px-3 text-spice-orange font-medium">
                  ${customer.avgWeekly}
                </td>
                <td className="py-3 px-3 text-off-black">
                  {customer.favoriteItem}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
