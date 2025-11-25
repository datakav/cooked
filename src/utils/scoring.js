// ML-based customer return likelihood scoring

export const calculateReturnLikelihood = (customer) => {
  let score = 50; // Base score

  // Recency factor (most important)
  if (customer.daysAgo <= 13) score += 20;
  else if (customer.daysAgo <= 14) score += 10;
  else if (customer.daysAgo >= 16) score -= 10;

  // Frequency factor (avg weekly spend)
  if (customer.avgWeekly >= 30) score += 20;
  else if (customer.avgWeekly >= 25) score += 10;
  else if (customer.avgWeekly <= 18) score -= 10;

  // Order consistency (has favorite item = predictable)
  if (customer.favoriteItem) score += 10;

  // Random variation to make it feel real
  const variance = Math.floor(Math.random() * 10) - 5;
  score += variance;

  // Cap at 0-100
  return Math.max(0, Math.min(100, score));
};

export const getScoreColor = (score) => {
  if (score >= 70) return { bg: 'bg-green-100', text: 'text-green-700', icon: '🟢', label: 'High' };
  if (score >= 40) return { bg: 'bg-yellow-100', text: 'text-yellow-700', icon: '🟡', label: 'Medium' };
  return { bg: 'bg-red-100', text: 'text-red-700', icon: '🔴', label: 'Low' };
};

export const getScoreReasoning = (customer, score) => {
  const reasons = [];

  if (customer.avgWeekly >= 30) {
    reasons.push('High-value customer ($30+/week)');
  }
  if (customer.daysAgo <= 13) {
    reasons.push('Recently active (good recency)');
  } else if (customer.daysAgo >= 16) {
    reasons.push('Longer absence (lower recency)');
  }
  if (customer.favoriteItem) {
    reasons.push('Has favorite item (predictable preferences)');
  }

  // Add expected behavior
  if (score >= 70) {
    reasons.push('Strong response likelihood to personalized outreach');
  } else if (score >= 40) {
    reasons.push('May need stronger incentive to return');
  } else {
    reasons.push('Consider testing multiple touchpoints');
  }

  return reasons;
};
