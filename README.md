# L.A. Apex Technologies - Frontend

A modern Next.js website for L.A. Apex Technologies, showcasing innovative tech solutions and services.

## Tech Stack

- **Framework:** Next.js 15.3.4 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **UI Components:** Radix UI, shadcn/ui
- **Animations:** Framer Motion
- **State Management:** TanStack Query
- **Email Service:** EmailJS
- **Analytics:** Vercel Speed Insights

## Getting Started

### Prerequisites

- Node.js 20+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

Copy `.env.example` to `.env` and fill in your EmailJS credentials:

```bash
NEXT_PUBLIC_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAIL_API=your_api_key
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
src/app/
├── components/
│   ├── layouts/     # Layout components (Header, Footer, etc.)
│   └── ui/          # Reusable UI components
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
├── services/        # Service pages and components
├── request-demo/    # Demo request page
└── page.tsx         # Home page
```

## Features

- Responsive design for all devices
- Dynamic service pages with routing
- Contact form with EmailJS integration
- Smooth animations and transitions
- SEO optimized
- Performance monitoring with Vercel Speed Insights

## Deployment

Deploy easily on [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/la-apex-frontend)

## License

© 2025 L.A. Apex Technologies. All rights reserved.
