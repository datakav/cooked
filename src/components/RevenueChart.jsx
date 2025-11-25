import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { revenueData } from '../data/chartData';

export default function RevenueChart() {
  const expectedRecovery = 8;
  const recoveryRate = 53;
  const weeklyRevenue = 240;
  const monthlyImpact = 960;
  const subscriptionCost = 49;
  const roi = (monthlyImpact / subscriptionCost).toFixed(1);

  return (
    <div>
      <h3 className="text-xl font-semibold text-black mb-6">
        Revenue Recovery Projection
      </h3>

      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
            <XAxis
              dataKey="week"
              tick={{ fill: '#1a1a1a', fontSize: 12 }}
              tickLine={{ stroke: '#808080' }}
            />
            <YAxis
              domain={[1500, 2700]}
              tick={{ fill: '#1a1a1a', fontSize: 12 }}
              tickLine={{ stroke: '#808080' }}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e5e5',
                borderRadius: '8px',
              }}
              formatter={(value) => `$${value}`}
            />
            <Legend
              wrapperStyle={{ paddingTop: '20px' }}
              iconType="line"
            />
            <Line
              type="monotone"
              dataKey="current"
              stroke="#808080"
              strokeWidth={2}
              strokeDasharray="5 5"
              name="Current Path"
              dot={{ fill: '#808080', r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="withAction"
              stroke="#4A9B5E"
              strokeWidth={3}
              name="With Action"
              dot={{ fill: '#4A9B5E', r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h4 className="text-lg font-semibold text-black mb-4">
          Expected Recovery
        </h4>

        <div className="space-y-3 mb-6">
          <p className="text-off-black">
            <span className="font-semibold text-hunter-green">
              {expectedRecovery} of 15 customers
            </span>{' '}
            likely to return ({recoveryRate}%)
          </p>
          <p className="text-off-black">
            <span className="text-xl font-bold text-spice-orange">
              +${weeklyRevenue}/week
            </span>{' '}
            revenue recovered
          </p>
          <p className="text-off-black">
            <span className="text-xl font-bold text-spice-orange">
              +${monthlyImpact}/month
            </span>{' '}
            impact
          </p>
        </div>

        <div className="border-l-4 border-spice-orange bg-orange-50 rounded-r-lg p-4">
          <p className="font-semibold text-black">
            ROI:{' '}
            <span className="text-spice-orange">
              ${monthlyImpact} revenue
            </span>{' '}
            vs ${subscriptionCost} Naan Sense ={' '}
            <span className="text-2xl font-bold text-spice-orange">
              {roi}x return
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
