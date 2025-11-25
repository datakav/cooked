# We Cook When You're Cooked

AI-powered restaurant management platform prototype showcasing customer retention features with freemium-to-premium monetization.

## Project Overview

**Demo Scenario**: Dana's Taco Stand - solving customer retention problems
**AI Assistant**: Naan Sense

## Features

- Customer retention alerts
- AI-powered win-back message generation
- Revenue recovery projections
- Freemium to premium conversion flow
- Mobile-first responsive design

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

## Future Enhancements

- Real Claude API integration
- Actual SMS/email sending
- User authentication
- Multi-restaurant support
- Analytics tracking
