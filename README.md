# We Cook When You're Cooked

> **The Challenge**: Most analytics platforms show you what's happening, but leave you to figure out "so what?" and "now what?"
> **The Insight**: Users will pay 5-10x more for "insights + judgment + execution" than for "insights alone."
> **This Prototype**: Explores how conversational AI can transform analytics from dashboards → strategic partners.

[Live Demo](#) | [GitHub](#) | AI-powered customer retention with freemium monetization

---

## What This Demonstrates

### The Product Thinking
- **Freemium monetization strategy**: Alert system (free) vs conversational intelligence (premium)
- **MVP discipline**: Built alert flow first to validate value before adding complexity
- **AI product design**: Context management, action detection, and executable workflows

### The Technical Execution
- **ML-powered prioritization**: Customer scoring algorithm (70%+ = high likelihood to return)
- **Mobile-first design**: Responsive interface optimized for on-the-go operators
- **Cost-conscious architecture**: ~$0.10-0.30 per conversation (sustainable at $49/month premium tier)

### The Business Model
**Current implementation**:
- Push-based alerts when patterns emerge
- Pre-packaged solutions with revenue projections
- Clear freemium conversion trigger ($49/month unlocks premium features)

**Next evolution**:
- Pull-based conversational intelligence
- Context-aware advice drawing from full business history
- Multi-turn workflows with one-click execution
- Replaces need for $50-100k/year data analyst hire

---

## The Hook: What Makes This Different

**Most analytics tools:**
- Surface insights ✅
- Require users to interpret "so what?" ❌
- Leave execution manual ❌

**This approach:**
- Detects patterns automatically ✅
- Explains causality (diagnosis) ✅
- Recommends specific actions (prescription) ✅
- Enables one-click execution ✅

**The TAM expansion insight:**
- Traditional dashboards: 20% of SMBs (data-savvy only)
- Conversational intelligence: 80%+ of SMBs (anyone who can ask a question)

---

## Current Features

### 1. Intelligent Customer Retention Alerts
- Identifies 15 at-risk customers ($450/week revenue)
- Shows **why** they're leaving (pattern analysis)
- Recommends **what** to do (win-back strategy)
- Projects **impact** (expected $240/week recovery)

### 2. ML-Powered Customer Scoring
- Likelihood-to-return predictions (🟢 82%, 🟡 54%, 🔴 38%)
- Prioritization recommendations ("Focus on these 8 first")
- Hover states reveal reasoning (recency + frequency + consistency)
- Summary stats at-a-glance (8 high-likelihood targets = $240/week)

### 3. Actionable Win-Back System
- Pre-written message templates with personalization hooks
- Revenue recovery projections (current path vs with action)
- Interactive chart showing 4-week trajectory
- One-click send workflow (simulated)

### 4. Premium Conversion Flow
- Free tier: Alert + basic tip
- Premium unlock: Detailed analysis + execution + tracking
- Clear value proposition: $49/month vs $960/month recovered revenue = 19.6x ROI
- 14-day free trial to reduce friction

---

## Tech Stack

**Frontend**: React 19 + Vite + Tailwind CSS
**Visualization**: Recharts for revenue projections
**Design**: Space Grotesk typography, mobile-first (375px → 1440px)
**Deployment**: Vercel-ready

### Design System

**Color Palette**:
- **Spice Orange** (#E37222): Primary CTAs
- **Royal Purple** (#7B3FF2): Premium features
- **Hunter Green** (#4A9B5E): Success states, growth metrics
- **Mid Gray** (#808080): Metadata
- **Off Black** (#1a1a1a): Body text

**Architecture**:
```
/src
  /components     - Modular React components
  /data          - Customer data (15 realistic records)
  /utils         - Scoring algorithms + API placeholders
```

---

## What I'd Build Next: Conversational Intelligence

### The Vision

Transform from **alert system** → **strategic partner** through natural language conversation.

**Example interaction:**
```
User: "Why are these customers not returning?"

AI: "I analyzed their patterns. Key insight: 12 were lunch regulars
(Mon-Wed, 11:30-1pm). They stopped ordering 3 weeks ago when menu
pricing changed. The remaining 3 show no clear pattern—likely noise."

User: "What's the best way to bring back the lunch crowd?"

AI: "Two approaches to consider:
1. Quick test: Limited-time lunch promotion (15-20% recovery in 2 weeks)
2. Research-first: Survey to understand their decision (higher effort,
   builds long-term loyalty)

Which direction interests you?"

User: "Let's try the survey approach"

AI: [Generates 12 personalized surveys]
"Draft ready. I'll follow up in 48 hours with response data and
next-step recommendations. Sound good?"
```

### Why This Unlocks Premium

**The Core Insight:**
Users don't pay for alerts—they pay for **judgment on demand**.

**What makes it defensible:**
- **Personalized**: Trained on their specific business
- **Interactive**: Explores their unique situation
- **Executable**: One-click from insight → action
- **Irreplaceable**: Can't recreate this manually at scale

**The business model math:**
- SMB alternative: Hire data analyst ($50-100k/year)
- This solution: $49-99/month subscription ($588-1,188/year)
- Value capture: 1-2% of alternative cost
- ROI justification: Platform pays for itself in first recovered customer

---

## Technical Architecture (Conversational Layer)

### System Design
```
User Question → Context Assembly → LLM Processing → Response Parsing → UI Rendering
                       ↓                 ↓                  ↓              ↓
              • Business profile   Claude Sonnet    • Extract         Conversational
              • Relevant data      4.5 analyzes     insights          response with
              • Conversation       in full          • Identify        action buttons
              history              context          recommendations
              • Benchmarks                          • Detect actions
```

### Key Engineering Challenges

**1. Context Window Management**
- **Problem**: Full business history exceeds token limits
- **Solution**: Dynamic context injection (only include data relevant to current question)
- **Cost optimization**: ~$0.10-0.30 per conversation (sustainable at $49/month)

**2. Action Abstraction Layer**
```javascript
// Parse AI response for executable actions
const actions = {
  'send_message': (recipients, content) => triggerMessaging(),
  'fetch_data': (query) => queryDatabase(),
  'create_campaign': (params) => initiateCampaign()
};

// Require confirmation before execution
if (detectedAction) {
  showConfirmationButton(() => actions[actionType](params));
}
```

**3. Safety Constraints**
- Domain boundaries: Operational advice only (no financial/legal/HR)
- Fact-checking: Validate quantitative claims against actual data
- Execution gates: All actions require explicit user confirmation
- Graceful degradation when AI is uncertain

---

## Why Build Alert Flow First (MVP Thinking)

**The Prioritization Logic:**
1. Validate value hypothesis (do users care about these insights?)
2. Prove data feasibility (can we collect/process/present reliably?)
3. Test monetization willingness (will they pay?)
4. Establish baseline (what % improve without AI conversation?)

**Once proven** → Layer conversational intelligence on top.

**The anti-pattern I avoided:**
Building chat-first risks creating a sophisticated interface for insights users don't value. Start with the core value, validate it, then enhance the interaction model.

---

## Experiment Design: Measuring Impact

### Hypothesis
Conversational AI will increase:
- Premium conversion: **2x faster** (7 days vs 14 days)
- Engagement: **3x frequency** (daily vs 2-3x/week)
- Satisfaction: **NPS +20 points**
- Feature utilization: Users explore more capabilities

### Test Structure
- **Control**: Alert-only interface (current implementation)
- **Treatment**: Alert + conversational AI assistant

### Key Metrics
**Conversion & Revenue:**
- Free→Premium conversion rate
- Time-to-upgrade (days from signup)
- Feature adoption within premium tier

**Engagement:**
- Questions asked per user per week
- Conversation depth (turns per conversation)
- Return frequency (DAU/MAU ratio)

**Execution:**
- Action completion rate (AI suggests → user executes)
- Time saved vs manual analysis
- Business outcome impact (revenue recovered)

### Success Criteria
- ≥30% lift in conversion rate
- ≥50% of users ask ≥1 question/week
- API costs <10% of revenue ($5 COGS on $49 price)
- User-reported time savings ≥2 hours/week

---

## Implementation Roadmap

**Phase 1: Foundation (Week 1-2)**
- Integrate Claude Sonnet 4.5 API
- Build conversation UI component
- Implement basic context injection

**Phase 2: Intelligence (Week 3-4)**
- Add business-specific context (history, benchmarks)
- Build action detection and parsing
- Create executable workflow triggers

**Phase 3: Production-Ready (Week 5-6)**
- Safety guardrails and domain restrictions
- Error handling and rate limiting
- Performance optimization (<3s response latency)

**Phase 4: Validation (Week 7-8)**
- Deploy to test cohort (20-50 users)
- Gather qualitative feedback
- Analyze usage patterns

**Phase 5: Scale Decision (Week 9+)**
- Review experiment results
- Go/no-go decision on broader rollout
- Refine based on cost and engagement data

---

## The Hard Problems I'd Focus On

If building this in production:

**1. Context Relevance**
- How much business history does the AI need for good advice?
- How do we select the "right" data subset for each question?
- When do we need real-time data vs historical patterns?

**2. Trust & Transparency**
- What makes users trust AI recommendations enough to execute?
- Should we show "confidence levels" or explain reasoning?
- How do we handle uncertainty without undermining credibility?

**3. Conversation vs Shortcuts**
- Do users prefer natural conversation or "smart buttons"?
- When does conversation add value vs create friction?
- How do we balance flexibility (chat) with speed (pre-built workflows)?

**4. Multi-Entity Complexity**
- How does this scale for users managing multiple locations?
- Per-location questions vs rolled-up insights?
- How do we compare entities ("why is Location A underperforming B?")?

**5. Learning & Personalization**
- How do we learn from user's past decisions?
- Should the AI adapt communication style to user preferences?
- How do we balance personalization with product quality consistency?

**These aren't hypothetical—they're product decisions that directly impact user value and business model.**

---

## What I Learned Building This

### Key Takeaways

**1. The hard part isn't the AI**
It's figuring out which questions users actually want answered, and making sure the AI's advice is executable without leaving the interface.

**2. Context matters more than model quality**
A smaller model with perfect business context outperforms a larger model with generic knowledge.

**3. Users don't want conversation for its own sake**
They want speed to answer. Chat is valuable when the question is unique/complex. For common patterns, smart shortcuts beat conversation.

**4. The monetization insight**
Freemium works when free tier creates "aha moment" but premium unlocks "I can't live without this." Alerts = aha. Conversation = can't live without.

**5. MVP discipline is critical**
I could've built the chat feature first (more impressive demo), but validating core value with alerts first was the right product decision. Ship the minimum that tests your hypothesis.

---

## Open Questions for Discussion

If building this in a production environment, I'd want to explore:

- **Conversation memory**: Session-based vs persistent? How long should the AI "remember"?
- **Proactive vs reactive**: Should the AI initiate conversations ("I noticed something...") or only respond to questions?
- **Multi-modal interaction**: When do visualizations (charts/tables) communicate better than text?
- **Personalization depth**: How much should the AI adapt to individual users?
- **Failure modes**: What happens when the AI doesn't know the answer? Graceful degradation strategies?

---

## Quick Start

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```

**Deploy to Vercel**: Push to GitHub, connect repo, auto-deploy.

---

**Feedback welcome** | A prototype exploring AI product monetization for SMB analytics
