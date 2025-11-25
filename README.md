# We Cook When You're Cooked

AI-powered restaurant management platform prototype showcasing customer retention features with freemium-to-premium monetization.

## Project Overview

**Demo Scenario**: Dana's Taco Stand - solving customer retention problems
**AI Assistant**: Naan Sense

## Features

- Customer retention alerts
- ML-powered customer scoring (return likelihood predictions)
- AI-powered win-back message generation
- Revenue recovery projections
- Freemium to premium conversion flow
- Mobile-first responsive design
- Dark mode support

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- Recharts
- Space Grotesk typography

## Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Design System

### Color Palette
- **Spice Orange** (#E37222): Primary accent, key CTAs
- **Royal Purple** (#7B3FF2): Secondary accent, premium features
- **Hunter Green** (#4A9B5E): Success states, growth metrics
- **Mid Gray** (#808080): Metadata
- **Off Black** (#1a1a1a): Body text

### Typography
- Font: Space Grotesk
- Mobile-first: 375px → 1440px

## Deployment

Deploy to Vercel:
1. Push to GitHub
2. Connect repo to Vercel
3. Auto-deploy on push

## Project Structure

```
/src
  /components    - All React components
  /data         - Customer and chart data
  /utils        - Placeholder API functions
  App.jsx       - Main app orchestration
  main.jsx      - React entry point
  index.css     - Tailwind imports
```

---

## What I'd Build Next: Conversational Intelligence Layer

### The Current State

This prototype demonstrates a **push-based intelligence system**: the AI detects patterns and presents pre-packaged solutions. This works for common, repeatable problems.

**But it has limits:**
- Operators can't explore alternative approaches
- No ability to ask "why?" or "what if?"
- Static recommendations don't adapt to operator's unique context
- Learning curve: operators must understand the full interface upfront

### The Evolution: Pull-Based Intelligence

**Transform the AI from alert system → strategic partner through conversation**

#### Example Interaction Flow
```
User: "Why are these customers not returning?"

AI: "I analyzed their patterns. Key insight: 12 were lunch
regulars (Mon-Wed, 11:30-1pm). They stopped ordering 3 weeks
ago when menu pricing changed. The remaining 3 show no clear
pattern—likely noise."

User: "What's the best way to bring back the lunch crowd?"

AI: "Two approaches to consider:

1. Quick test: Limited-time lunch promotion targeting this
   segment. Benchmark data suggests 15-20% recovery in 2 weeks.

2. Research-first: Survey to understand their decision. Higher
   effort, but personalizes your response and builds long-term
   loyalty.

Which direction interests you?"

User: "Let's try the survey approach"

AI: [Generates personalized survey for 12 customers]
"Draft ready. I'll follow up in 48 hours with response data and
next-step recommendations. Sound good?"
```

#### The Business Model Shift

**Free Tier:**
- Automated alerts when patterns emerge
- Standard recommendations based on best practices
- Limited to pre-defined problem types

**Premium Tier:**
- Conversational exploration of any question
- Context-aware advice drawing from full business history
- Multi-turn workflows with automated execution
- Continuous learning from operator's decisions

**The Core Insight:**
Users don't pay for alerts—they pay for **judgment on demand**. The chat interface becomes the premium moat because it's:
- Personalized (trained on their specific business)
- Interactive (explores their unique situation)
- Executable (goes from insight → action in one click)
- Irreplaceable (can't recreate this manually at scale)

---

### Technical Architecture

#### System Design
```
User Question
    ↓
Context Assembly:
- Business profile (type, location, history)
- Relevant data subset (orders, customers, events)
- Conversation history (last 10 turns)
- Domain knowledge (industry benchmarks, best practices)
    ↓
LLM Processing (Claude Sonnet 4.5):
- Analyze question in full business context
- Generate specific, actionable response
- Detect executable actions
    ↓
Response Parsing:
- Extract insights (what's happening)
- Identify recommendations (what to do)
- Detect actions (API calls, automations)
    ↓
UI Rendering:
- Show conversational response
- Present action buttons for execution
- Maintain conversation state
```

#### Key Engineering Decisions

**1. Context Window Strategy**
- **Challenge**: Full business history (months/years of data) exceeds token limits
- **Solution**: Dynamic context injection
  - Always include: Business profile + current conversation
  - Selectively include: Data relevant to current question
  - Example: Asking about lunch sales? Include lunch order history only
- **Cost**: ~$0.10-0.30 per conversation (sustainable for premium tier)

**2. Conversation State Management**
- Track workflow progress: "User asked → AI suggested → User confirmed → AI executing"
- Enable multi-turn without context loss
- Store conversation summaries for future reference (reduce tokens)

**3. Action Abstraction Layer**
```javascript
// Parse AI response for executable actions
const actions = {
  'send_message': (recipients, content) => triggerMessaging(recipients, content),
  'fetch_data': (query) => queryDatabase(query),
  'create_campaign': (params) => initiateCampaign(params),
  'schedule_followup': (timing) => scheduleReminder(timing)
};

// Require user confirmation before execution
if (detectedAction) {
  showConfirmationButton(() => actions[actionType](params));
}
```

**4. Safety & Constraints**
- Domain boundaries: Restrict to operational advice (no financial/legal/HR)
- Fact-checking: Validate quantitative claims against actual data
- Execution gates: All actions require explicit confirmation
- Fallback handling: Graceful degradation when AI is uncertain

---

### Why Build Alert Flow First (MVP Thinking)

**The Prioritization Logic:**

1. **Validate value hypothesis** - Do users care about these insights at all?
2. **Prove data feasibility** - Can we collect, process, and present data reliably?
3. **Test monetization willingness** - Will they pay for actionable recommendations?
4. **Establish baseline** - What % improve without AI conversation?

**Once proven** → Layer conversational intelligence on top.

**The anti-pattern I avoided:** Building chat-first risks creating a sophisticated interface for insights users don't value. Start with the core value (retention insights), validate it, then enhance the interaction model.

---

### Experiment Design: Measuring Chat Impact

**Hypothesis:**
Conversational AI access will increase:
- Premium conversion rate (2x faster: 7 days vs 14 days)
- Platform engagement (3x frequency: daily vs 2-3x/week)
- User satisfaction (NPS +20 points)
- Feature utilization (users explore more platform capabilities)

**Test Structure:**
- **Control Group:** Alert-only interface (current implementation)
- **Treatment Group:** Alert + conversational AI assistant

**Key Metrics:**

*Conversion & Revenue:*
- Free→Premium conversion rate
- Time-to-upgrade (days from signup)
- Feature adoption within premium tier

*Engagement:*
- Questions asked per user per week
- Conversation depth (turns per conversation)
- Return frequency (DAU/MAU ratio)

*Execution:*
- Action completion rate (AI suggests → user executes)
- Time saved vs manual analysis (reported by users)
- Business outcome impact (e.g., revenue recovered)

**Success Criteria:**
- ≥30% lift in conversion rate
- ≥50% of treatment group asks ≥1 question/week
- API costs stay <10% of subscription revenue ($5 COGS on $49 price)
- User-reported time savings ≥2 hours/week

**Learning Questions:**
- Which question types drive most value? (diagnostic, prescriptive, exploratory)
- Does conversation length correlate with satisfaction?
- What friction points prevent action execution?
- Do users develop "question patterns" over time?

---

### Implementation Roadmap

**Phase 1: Foundation (Week 1-2)**
- Integrate LLM API (Claude Sonnet 4.5)
- Build conversation UI component
- Implement basic context injection
- Test simple Q&A loops

**Phase 2: Intelligence (Week 3-4)**
- Add business-specific context (history, profile, benchmarks)
- Build action detection and parsing
- Create executable workflow triggers
- Implement conversation memory

**Phase 3: Production-Ready (Week 5-6)**
- Safety guardrails and domain restrictions
- Error handling (API failures, malformed queries)
- Cost monitoring and rate limiting
- Performance optimization (response latency <3s)

**Phase 4: Validation (Week 7-8)**
- Deploy to test cohort (20-50 users)
- Gather qualitative feedback
- Analyze usage patterns
- Iterate based on learnings

**Phase 5: Scale Decision (Week 9+)**
- Review experiment results
- Go/no-go decision on broader rollout
- Refine based on cost and engagement data

---

### The Hard Problems I'd Focus On

If building this in production, these are the key challenges:

**1. Context Relevance**
- How much business history does the AI need to give good advice?
- How do we select the "right" data subset for each question?
- When do we need real-time data vs historical patterns?

**2. Trust & Transparency**
- What makes users trust AI recommendations enough to execute?
- Should we show "confidence levels" or explain reasoning?
- How do we handle uncertainty without undermining credibility?

**3. Conversation vs Shortcuts**
- Do users prefer natural conversation, or "smart buttons" that predict their question?
- When does conversation add value vs create friction?
- How do we balance flexibility (chat) with speed (pre-built workflows)?

**4. Multi-Entity Complexity**
- How does this scale for users managing multiple locations/units?
- Do they want to ask questions per-location or see rolled-up insights?
- How do we compare entities ("why is Location A underperforming Location B?")?

**5. Learning & Personalization**
- How do we learn from user's past decisions to improve future recommendations?
- Should the AI adapt its communication style to user preferences?
- How do we balance personalization with consistent product quality?

---

### Why This Matters (General Business Value)

The meta-insight from building this prototype:

**Most analytics platforms fail at the "last mile":**
- They surface insights ✅
- But require users to figure out "so what?" ❌
- And manually execute responses ❌

**Conversational AI bridges the gap:**
- Insight detection (what's happening)
- Diagnosis (why it's happening)
- Prescription (what to do about it)
- Execution (do it in one click)

**The business model unlock:**
Users will pay 5-10x more for "insights + judgment + execution" than for "insights alone."

This isn't about building a better dashboard—it's about **replacing the need for a data analyst + strategist on staff**.

For SMBs (restaurants, retail, services): That's a $50-100k/year hire replaced by a $49-99/month subscription.

**The TAM expansion:**
- Dashboard analytics: Limited to data-savvy users (maybe 20% of SMBs)
- Conversational intelligence: Accessible to anyone who can ask a question (80%+ of SMBs)

---

### Code Architecture Sketch

Here's how I'd structure the conversation system:

```javascript
// Conversation Controller
class ConversationEngine {
  constructor(businessContext, llmClient) {
    this.context = businessContext;
    this.llm = llmClient;
    this.history = [];
  }

  async handleUserMessage(message) {
    // 1. Assemble relevant context
    const context = await this.assembleContext(message);

    // 2. Send to LLM with full context
    const response = await this.llm.chat({
      system: this.buildSystemPrompt(),
      context: context,
      history: this.history,
      message: message
    });

    // 3. Parse response for actions
    const parsed = this.parseResponse(response);

    // 4. Update conversation state
    this.history.push(
      { role: 'user', content: message },
      { role: 'assistant', content: response }
    );

    // 5. Return structured response
    return {
      text: parsed.text,
      actions: parsed.actions,
      confidence: parsed.confidence,
      requiresConfirmation: parsed.actions.length > 0
    };
  }

  async assembleContext(message) {
    // Use message to determine relevant data
    const keywords = this.extractKeywords(message);
    const timeframe = this.detectTimeframe(message);

    return {
      business: this.context.profile,
      relevantData: await this.context.fetchRelevant(keywords, timeframe),
      benchmarks: await this.context.getIndustryData()
    };
  }

  buildSystemPrompt() {
    return `You are an AI business advisor for ${this.context.name}.

Your role:
- Analyze questions in context of their business data
- Provide specific, actionable recommendations
- Explain reasoning clearly but concisely
- Suggest 1-2 options, not overwhelming lists
- Always include a clear next step

Constraints:
- Stay within operational advice domain
- Cite data when making claims
- Acknowledge uncertainty when appropriate
- Never execute actions without user confirmation`;
  }

  parseResponse(responseText) {
    // Detect action intents
    const actions = [];
    const patterns = {
      'send_message': /send (message|email|text|survey)/i,
      'fetch_data': /(show|display|pull|get) (me )?data/i,
      'create_automation': /automate|schedule|set up/i
    };

    for (const [action, pattern] of Object.entries(patterns)) {
      if (pattern.test(responseText)) {
        actions.push(this.extractActionParams(action, responseText));
      }
    }

    return {
      text: responseText,
      actions: actions,
      confidence: this.estimateConfidence(responseText)
    };
  }
}
```

**This is a starting point**—production implementation would need:
- Robust error handling
- Retry logic for API failures
- Context caching to reduce costs
- Streaming for better UX
- Conversation branching and rollback

---

### What I Learned Building This

**Key Takeaways:**

1. **The hard part isn't the AI**—it's figuring out which questions users actually want answered, and making sure the AI's advice is executable without leaving the interface.

2. **Context matters more than model quality**—A smaller model with perfect business context outperforms a larger model with generic knowledge.

3. **Users don't want conversation for its own sake**—They want speed to answer. Chat is valuable when the question is unique/complex. For common patterns, smart shortcuts beat conversation.

4. **The monetization insight**—Freemium works when free tier creates "aha moment" but premium unlocks "I can't live without this." Alerts = aha. Conversation = can't live without.

5. **MVP discipline is critical**—I could've built the chat feature first (more impressive demo), but validating core value with alerts first was the right product decision. Ship the minimum that tests your hypothesis.

---

### Open Questions for Discussion

If building this in a production environment, I'd want to explore:

- **Conversation memory**: How long should the AI "remember" past conversations? Session-based vs persistent?
- **Proactive vs reactive**: Should the AI initiate conversations ("I noticed something...") or only respond to questions?
- **Multi-modal interaction**: When do visualizations (charts/tables) communicate better than text?
- **Personalization depth**: How much should the AI adapt its communication style to individual users?
- **Failure modes**: What happens when the AI doesn't know the answer? Graceful degradation strategies?

**These aren't hypothetical—they're product decisions that directly impact user value and business model.**

---

*This prototype represents ~3 hours of work. The conversational layer would add ~4-6 weeks of development for production-ready implementation. The goal here was to validate the core value proposition and demonstrate product thinking, not to build a complete solution.*
