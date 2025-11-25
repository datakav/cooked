# We Cook When You're Cooked - Claude Code Spec

## Project Overview

Build a mobile-first restaurant management platform prototype showcasing an AI-powered customer retention feature with freemium-to-premium monetization.

| Field | Value |
|-------|-------|
| **Brand** | We Cook When You're Cooked |
| **AI Assistant** | Naan Sense |
| **Demo Scenario** | Dana's Taco Stand - customer retention problem |
| **Build Time** | 2-3 hours |
| **Tech Stack** | React + Tailwind CSS + Recharts |
| **Output** | Single-file React artifact OR multi-file for Vercel deploy |

---

## Design System (Personal Brand Style Guide)

### Color Palette

**Primary Mode: Light (Utility)**
- Background: Pure White `#ffffff`
- Headlines: Pure Black `#000000`
- Body Text: Off Black `#1a1a1a`
- Metadata: Mid Gray `#808080`

**Accent Colors (use sparingly - color = emphasis)**
- **Spice Orange `#E37222`**: Primary accent. Featured metrics, key CTAs, critical emphasis. Main voice.
- **Royal Purple `#7B3FF2`**: Secondary accent. Comparison data, alternative views, premium features.
- **Hunter Green `#4A9B5E`**: Tertiary accent. Growth metrics, success states, baseline data.

**Semantic Roles**
- Orange = "This is the key thing" (ROI, decision drivers, primary CTA)
- Purple = "Here's another perspective" (comparisons, premium tier)
- Green = "Here's the baseline" (growth, success, neutral data)

**Rule**: Most elements stay black/white/gray. Accent colors are emphasis, not decoration.

### Typography

**Font**: Space Grotesk (Google Fonts) - single typeface, weight as hierarchy

```css
font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
```

**Google Fonts URL**:
```
https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap
```

**Weight Hierarchy**:
- Display/Titles: 700 (Bold), 36px, letter-spacing: -0.02em
- Headings: 600 (Semibold), 24px
- Subheadings: 500 (Medium), 18px
- Body: 400 (Regular), 16px, line-height: 1.7
- Metadata/Captions: 300 (Light), 13-14px

### Visual Style

**Approach**: Middle Ground (Strategic Rule-Breaking)
- Light mode default (print-friendly, accessible)
- Clean grid, generous white space
- One orange accent maximum per section
- Calculated breaks: asymmetric headline, featured metric with accent, pull quote breaking margin
- 95% of page is locked in; breaks hit because of the discipline

**Components**:
- Cards: `rounded-xl`, `shadow-md`, `p-6`, `bg-white`
- Buttons Primary: `rounded-lg`, `px-6 py-3`, `bg-[#E37222]`, `hover:bg-[#c95f1a]`, `text-white`, `font-semibold`
- Buttons Secondary: `rounded-lg`, `px-6 py-3`, `border-2 border-[#E37222]`, `text-[#E37222]`, `bg-transparent`
- Spacing: Generous padding (`p-4` to `p-6`), clear visual breathing room

---

## Application Structure

```
/src
  /components
    Header.jsx              # Top nav with logo + dark mode toggle
    NaanSenseChat.jsx       # Main chat interface
    FreeTierAlert.jsx       # Free tier content
    PremiumContent.jsx      # Premium unlock content
    CustomerList.jsx        # Table of 15 customers with ML scoring
    MessageTemplate.jsx     # Win-back message UI
    RevenueChart.jsx        # Line chart visualization
    PricingModal.jsx        # Upgrade CTA modal
    FeatureHints.jsx        # Grayed out future features
  /data
    customers.js            # 15 customer records
    chartData.js            # Revenue projection data
  /utils
    api.js                  # Placeholder for Claude API
    scoring.js              # ML customer return likelihood scoring
  App.jsx
  index.css                 # Tailwind + Google Fonts
```

---

## Component Specifications

### 1. Header

**Purpose**: Top navigation, brand identity, dark mode control

**Content**:
- Logo text: "We Cook When You're Cooked"
- Tagline: "Smart insights for restaurant operators"
- Dark mode toggle (moon/sun icon, functional)

**Layout**:
- Sticky top, full width
- Mobile: Logo stacked, tagline below, toggle always visible on right
- Desktop: Logo + tagline inline, toggle right
- Background: White with subtle bottom border (dark mode: `dark:bg-gray-800`)

**Typography**:
- Logo: Space Grotesk 700, 20-24px, `#000000` (dark mode: white)
- Tagline: Space Grotesk 400, 14px, `#808080` (dark mode: gray-400)

**Dark Mode**:
- Toggle persists preference to localStorage
- Updates `document.documentElement` with `dark` class
- All components respond to dark mode styling

---

### 2. NaanSenseChat

**Purpose**: Main chat interface, AI assistant introduction

**Initial State**:
```
[Naan icon/emoji 🍞]

"Hi Dana! I'm Naan Sense, your AI assistant.
I keep an eye on your restaurant data so you don't have to."

[Button: "Show me insights"]
```

**Styling**:
- Chat bubble: White background, `rounded-xl`, `shadow-md`, `p-6`
- AI name: Space Grotesk 600, `#E37222`
- Message: Space Grotesk 400, `#1a1a1a`
- Button: Primary style (orange)

**Interaction**: Click button → reveal FreeTierAlert

**Voice Guidelines**:
- Punny but professional (1-2 puns max per interaction)
- Lead with insights, not fluff
- Confident recommendations backed by data

---

### 3. FreeTierAlert

**Purpose**: Show problem + basic tip, tease premium

**Content**:
```
🚨 Customer Retention Alert

15 of your regulars haven't ordered in 2 weeks.

That's $450/week in revenue at risk.

💡 Quick tip: Re-engage high-value customers first.

[Button: Get Detailed Recovery Plan]
```

**Styling**:
- Container: `border-l-4 border-[#E37222]`, `bg-orange-50`, `rounded-r-lg`, `p-6`
- Alert icon/emoji: Large, attention-grabbing
- Revenue number ($450): Space Grotesk 700, 28px, `#E37222`
- Tip: Space Grotesk 400, `#1a1a1a`, subtle background
- CTA Button: Primary orange

**Interaction**: Click CTA → open PricingModal

---

### 4. PricingModal

**Purpose**: Monetization conversion prompt

**Content**:
```
[X close button]

Unlock Premium Features

✓ Detailed customer analysis
✓ Pre-written win-back messages  
✓ Revenue recovery predictions
✓ One-click automation

$49/month

[Button: Start Free Trial]
[Link: See all features]
```

**Styling**:
- Overlay: `bg-black/50`, blur backdrop
- Modal: White, `rounded-2xl`, `shadow-2xl`, `p-8`, max-width 400px, centered
- Price: Space Grotesk 700, 32px, `#000000`
- Checkmarks: `#4A9B5E` (Hunter Green)
- CTA: Primary orange button, full width
- Link: `#808080`, underline on hover

**Interactions**:
- "Start Free Trial" → close modal, show PremiumContent
- "X" or backdrop click → close modal
- Escape key → close modal

---

### 5. PremiumContent

**Purpose**: Full retention recovery plan (3-step accordion/tabs)

**Header**:
```
✅ Premium Activated (Free Trial)

Naan Sense's Recovery Plan
```

**Structure**: Three expandable steps (accordion or tabs)

**Step 1: Identify At-Risk Customers**
- Contains: CustomerList component
- Default: Expanded

**Step 2: Send Win-Back Messages**
- Contains: MessageTemplate component
- Default: Collapsed

**Step 3: Track Results**
- Contains: RevenueChart component
- Default: Collapsed

**Styling**:
- Premium badge: `#4A9B5E` background, white text, `rounded-full`, `px-3 py-1`
- Section headers: Space Grotesk 600, 20px
- Step indicators: Numbered circles, active = `#E37222`, inactive = `#808080`

---

### 6. CustomerList

**Purpose**: Display 15 at-risk customers with actionable data

**Data Structure** (`customers.js`):
```javascript
export const customers = [
  {
    id: 1,
    name: "Maria Garcia",
    lastOrder: "Nov 10, 2025",
    daysAgo: 14,
    avgWeekly: 28,
    favoriteItem: "3 Carne Asada Tacos",
    phone: "201-555-0123"
  },
  {
    id: 2,
    name: "Carlos Martinez",
    lastOrder: "Nov 8, 2025",
    daysAgo: 16,
    avgWeekly: 22,
    favoriteItem: "Al Pastor Burrito",
    phone: "201-555-0145"
  },
  {
    id: 3,
    name: "Sarah Johnson",
    lastOrder: "Nov 11, 2025",
    daysAgo: 13,
    avgWeekly: 32,
    favoriteItem: "Fish Tacos (3)",
    phone: "201-555-0167"
  },
  {
    id: 4,
    name: "James Kim",
    lastOrder: "Nov 9, 2025",
    daysAgo: 15,
    avgWeekly: 18,
    favoriteItem: "Chicken Quesadilla",
    phone: "201-555-0189"
  },
  {
    id: 5,
    name: "Jennifer Rodriguez",
    lastOrder: "Nov 12, 2025",
    daysAgo: 12,
    avgWeekly: 25,
    favoriteItem: "Veggie Bowl",
    phone: "201-555-0201"
  },
  {
    id: 6,
    name: "Michael Chen",
    lastOrder: "Nov 10, 2025",
    daysAgo: 14,
    avgWeekly: 30,
    favoriteItem: "Carnitas Plate",
    phone: "201-555-0223"
  },
  {
    id: 7,
    name: "Lisa Patel",
    lastOrder: "Nov 11, 2025",
    daysAgo: 13,
    avgWeekly: 20,
    favoriteItem: "Breakfast Burrito",
    phone: "201-555-0245"
  },
  {
    id: 8,
    name: "David Brown",
    lastOrder: "Nov 8, 2025",
    daysAgo: 16,
    avgWeekly: 35,
    favoriteItem: "Combo Plate",
    phone: "201-555-0267"
  },
  {
    id: 9,
    name: "Emily Taylor",
    lastOrder: "Nov 12, 2025",
    daysAgo: 12,
    avgWeekly: 15,
    favoriteItem: "Soft Tacos (2)",
    phone: "201-555-0289"
  },
  {
    id: 10,
    name: "Robert Wilson",
    lastOrder: "Nov 9, 2025",
    daysAgo: 15,
    avgWeekly: 28,
    favoriteItem: "Carne Asada Fries",
    phone: "201-555-0301"
  },
  {
    id: 11,
    name: "Amanda Lee",
    lastOrder: "Nov 10, 2025",
    daysAgo: 14,
    avgWeekly: 22,
    favoriteItem: "Taco Salad",
    phone: "201-555-0323"
  },
  {
    id: 12,
    name: "Christopher Davis",
    lastOrder: "Nov 11, 2025",
    daysAgo: 13,
    avgWeekly: 26,
    favoriteItem: "Burrito Bowl",
    phone: "201-555-0345"
  },
  {
    id: 13,
    name: "Nicole Martinez",
    lastOrder: "Nov 8, 2025",
    daysAgo: 16,
    avgWeekly: 19,
    favoriteItem: "Chicken Tacos (3)",
    phone: "201-555-0367"
  },
  {
    id: 14,
    name: "Daniel Anderson",
    lastOrder: "Nov 12, 2025",
    daysAgo: 12,
    avgWeekly: 31,
    favoriteItem: "Super Burrito",
    phone: "201-555-0389"
  },
  {
    id: 15,
    name: "Michelle Thompson",
    lastOrder: "Nov 9, 2025",
    daysAgo: 15,
    avgWeekly: 24,
    favoriteItem: "Nachos Supreme",
    phone: "201-555-0401"
  }
];

// Calculated total
export const totalAtRisk = 450; // Sum of avgWeekly
```

**Mobile Layout** (card-based):
```
┌─────────────────────────────┐
│ ☐ Maria Garcia              │
│   Last order: 14 days ago   │
│   Avg: $28/week             │
│   Fav: 3 Carne Asada Tacos  │
└─────────────────────────────┘
```

**Desktop Layout** (table):
| Select | Name | Days Ago | Avg/Week | Favorite Item |
|--------|------|----------|----------|---------------|
| ☐ | Maria Garcia | 14 | $28 | 3 Carne Asada... |

**Features**:
- "Select All" checkbox header
- Individual checkboxes per row
- Sort by: Days ago (default), Avg weekly, Name
- Selected count indicator: "8 of 15 selected"

**Styling**:
- Table header: Space Grotesk 600, `#808080`, uppercase, 12px
- Customer name: Space Grotesk 500, `#000000`
- Data cells: Space Grotesk 400, `#1a1a1a`
- Avg weekly: `#E37222` (orange accent on money)
- Selected row: Light orange background `bg-orange-50`

---

### 6.5. ML Customer Scoring

**Purpose**: Enhance CustomerList with machine learning-based return likelihood predictions

**Implementation** (`/src/utils/scoring.js`):
```javascript
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
  if (score >= 70) return {
    bg: 'bg-green-100',
    text: 'text-green-700',
    icon: '🟢',
    label: 'High'
  };
  if (score >= 40) return {
    bg: 'bg-yellow-100',
    text: 'text-yellow-700',
    icon: '🟡',
    label: 'Medium'
  };
  return {
    bg: 'bg-red-100',
    text: 'text-red-700',
    icon: '🔴',
    label: 'Low'
  };
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
```

**UI Enhancements to CustomerList**:

**Summary Stats** (above customer list):
```
┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│ High Likelihood  │  │ Medium Likelihood│  │ Low Likelihood   │
│       8          │  │        5         │  │       2          │
└──────────────────┘  └──────────────────┘  └──────────────────┘
```
- Green background for High, Yellow for Medium, Red for Low
- Count of customers in each category

**Naan Sense Recommendation** (below stats):
```
💡 Naan Sense Recommendation: Focus on the 8 high-likelihood
customers first for best ROI. Expected recovery: $240/week
```

**Score Badges** (each customer row):
- Mobile: Badge in top-right of card: `🟢 82%`
- Desktop: Dedicated "Score" column with badge
- Color-coded based on score threshold
- Percentage displayed prominently

**Interactive Hover States**:
- Hover/tap on customer → show "Why this score?" section
- Display reasons array as bulleted list
- Helps build trust in ML recommendations

**Updated Sort Options**:
- Default sort: Return Likelihood (high to low)
- Other options: Days Ago, Avg Weekly, Name

**Visual Priority**:
- Mobile: Left border color matches score (green/yellow/red)
- Desktop: Score badge draws eye to prioritization
- High-likelihood customers naturally rise to top of list

**Dark Mode Support**:
- Score badges work in both light and dark modes
- Summary stats have appropriate dark mode colors

---

### 7. MessageTemplate

**Purpose**: Pre-written win-back message with personalization preview

**Content**:
```
📱 Win-Back Message Template

Preview for: Maria Garcia

─────────────────────────────
Hi Maria!

We noticed you haven't stopped by in a couple weeks - 
we miss you! 🌮

Your usual (3 Carne Asada Tacos) is waiting for you.

Here's 20% off your next order this week to welcome you back.

- Dana & the team at Dana's Taco Stand

Use code: COMEBACK20
Expires: Dec 1, 2025
─────────────────────────────

Send via:
○ SMS (201-555-0123)
○ Email (if available)

☐ Send to all 15 selected customers
☐ Personalize each message (recommended)

[Button: Send Messages]
```

**Post-Send Success State**:
```
✅ Messages sent to 15 customers!

Naan Sense will track responses and follow up.
Check back in 48 hours for results.
```

**Styling**:
- Message preview: `bg-gray-50`, `rounded-lg`, `p-4`, `font-mono` feel but Space Grotesk
- Personalized fields (name, item): `#E37222`, bold
- Radio buttons: Custom styled, orange when selected
- Success toast: `#4A9B5E` background, white text, slide-in animation

**Interaction**:
- "Send Messages" → show success toast, update state
- Preview updates based on selected customer (first selected or Maria as default)

---

### 8. RevenueChart

**Purpose**: Visualize revenue recovery prediction

**Data** (`chartData.js`):
```javascript
export const revenueData = [
  { week: "This Week", current: 2100, withAction: 2100 },
  { week: "Week 2", current: 1950, withAction: 2250 },
  { week: "Week 3", current: 1800, withAction: 2400 },
  { week: "Week 4", current: 1650, withAction: 2550 },
];
```

**Chart Specs**:
- Type: Line chart (Recharts)
- X-axis: Weeks 1-4
- Y-axis: Revenue ($1,500 - $2,700)
- Line 1: "Current Path" - `#808080`, dashed
- Line 2: "With Action" - `#4A9B5E`, solid, 3px stroke
- Grid: Light gray, subtle
- Legend: Top of chart

**Key Metrics Below Chart**:
```
Expected Recovery

8 of 15 customers likely to return (53%)
+$240/week revenue recovered
+$960/month impact

ROI: $960 revenue vs $49 Naan Sense = 19.6x return
```

**Styling**:
- Chart container: White, `rounded-xl`, `shadow-md`, `p-6`
- Recovery rate: `#4A9B5E` 
- Dollar amounts: Space Grotesk 700, `#E37222`
- ROI callout: Highlighted box, `bg-orange-50`, `border-l-4 border-[#E37222]`

---

### 9. FeatureHints

**Purpose**: Tease platform breadth without building features

**Content**:
```
Other Naan Sense Features

📊 Revenue Insights                    Coming Soon
   Smart alerts for sales trends

👥 Labor Optimization                  Coming Soon
   Schedule recommendations

🍽️ Menu Engineering                   Coming Soon
   Promote high-margin items

📱 Marketing Automation               Coming Soon
   Automated campaigns
```

**Styling**:
- Container: `opacity-50`, no interaction
- Feature cards: `bg-gray-100`, `rounded-lg`, `p-4`
- "Coming Soon" badge: `#7B3FF2` (purple), `text-xs`, `rounded-full`
- Icons: Emoji or Lucide icons, grayscale

---

## User Flow

```
1. Land → Header + NaanSenseChat intro
2. Click "Show me insights" → FreeTierAlert slides in
3. Read alert → Click "Get Detailed Recovery Plan"
4. PricingModal overlays → Click "Start Free Trial"
5. Modal closes → PremiumContent expands
6. Step 1 (default open): Browse CustomerList, select customers
7. Step 2: Review MessageTemplate → Click "Send Messages" → Success toast
8. Step 3: View RevenueChart → See ROI projection
9. Scroll → FeatureHints visible (breadth signal)
```

---

## State Management

```javascript
// App-level state
const [currentView, setCurrentView] = useState('intro'); // intro | alert | premium
const [showPricingModal, setShowPricingModal] = useState(false);
const [selectedCustomers, setSelectedCustomers] = useState([]);
const [messagesSent, setMessagesSent] = useState(false);
const [activeStep, setActiveStep] = useState(1); // 1, 2, or 3
```

---

## Technical Notes

### Dependencies
- React 18+
- Tailwind CSS 3.x
- Recharts (chart visualization)
- Lucide React (icons) - optional, can use emoji

### Google Fonts Import
```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### Tailwind Config Extension
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'spice-orange': '#E37222',
        'royal-purple': '#7B3FF2',
        'hunter-green': '#4A9B5E',
        'mid-gray': '#808080',
        'off-black': '#1a1a1a',
      },
      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif'],
      },
    },
  },
}
```

### Future API Hooks
```javascript
// utils/api.js - placeholder for Claude API integration
export const analyzeCustomerRetention = async (customerData) => {
  // TODO: Replace with actual Anthropic API call
  return {
    atRiskCount: 15,
    revenueAtRisk: 450,
    recommendedAction: "Send personalized win-back messages"
  };
};

export const generateWinBackMessage = async (customer) => {
  // TODO: Replace with Claude API for dynamic message generation
  return `Hi ${customer.name}! We miss you...`;
};
```

---

## Responsive Breakpoints

- Mobile: 320px - 767px (card layouts, stacked)
- Tablet: 768px - 1023px (hybrid layouts)
- Desktop: 1024px+ (table layouts, side-by-side)

**Mobile-First Priority**: All components must work on 375px width (iPhone) first.

---

## Success Criteria

### Must Have (MVP)
- [ ] Mobile-responsive (320px - 1440px)
- [ ] Complete flow: intro → alert → paywall → premium
- [ ] 15 realistic customer records
- [ ] Functional customer selection
- [ ] Message template with personalization preview
- [ ] Revenue chart with two trajectories
- [ ] Pricing modal with clear CTA
- [ ] Feature hints (breadth signal)
- [ ] Style guide colors and typography applied

### Nice to Have
- [ ] Smooth animations (modal, accordions, toasts)
- [ ] Sort functionality on customer list
- [ ] Keyboard navigation (Escape closes modal)
- [ ] Print-friendly premium plan view

### Out of Scope
- Real Claude API integration (placeholders only)
- Actual SMS/email sending
- User authentication
- Database/backend
- Multiple restaurant support
- Analytics tracking

---

## Naan Sense Voice Guide

**Do**:
- Use bread puns sparingly (1-2 max per interaction)
- Lead with insights, not filler
- Be confident in recommendations
- Show data backing claims

**Don't**:
- Overdo puns (gets annoying fast)
- Use excessive emoji
- Be overly casual/unprofessional
- Make unbacked claims

**Good Examples**:
- "I spotted a retention issue worth addressing."
- "Based on your order history, here's what I recommend."
- "Let's get these customers back - here's your action plan."

**Bad Examples**:
- "OMG!!! 😱 Your customers are leaving!!! 🚨🚨🚨"
- "I'm knead-ing you to check this out! 🍞😂"
- "Naan pressure, but you really need to act fast!!!"

---

## Deployment

### Recommended: Vercel
1. Push to GitHub
2. Connect repo to Vercel
3. Auto-deploy on push

### Pre-Deploy Checklist
- [ ] Test on iPhone Safari
- [ ] Test on Android Chrome
- [ ] Test on Desktop (Chrome, Safari, Firefox)
- [ ] Verify modal scrolls correctly on mobile
- [ ] Confirm chart renders at all sizes
- [ ] Check all interactive states work

---

## Files to Generate

When implementing, create in this order:

1. `package.json` - dependencies
2. `tailwind.config.js` - custom colors/fonts
3. `src/index.css` - Tailwind imports + Google Fonts
4. `src/data/customers.js` - customer data
5. `src/data/chartData.js` - revenue data
6. `src/components/Header.jsx`
7. `src/components/NaanSenseChat.jsx`
8. `src/components/FreeTierAlert.jsx`
9. `src/components/PricingModal.jsx`
10. `src/components/CustomerList.jsx`
11. `src/components/MessageTemplate.jsx`
12. `src/components/RevenueChart.jsx`
13. `src/components/PremiumContent.jsx`
14. `src/components/FeatureHints.jsx`
15. `src/App.jsx` - main orchestration
16. `src/utils/api.js` - placeholder hooks

---

END OF SPEC
