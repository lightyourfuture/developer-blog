# Developer Portfolio Blog

A modern, high-performance developer blog and portfolio website built with Next.js 15, featuring MDX content management, Supabase database integration, and GitHub Discussions-based comments.

## ✨ Features

- 🎨 **Modern Design**: Dark mode with neon accent colors and glassmorphism effects
- 📝 **MDX Content**: Write blog posts with React components embedded
- 🎯 **Syntax Highlighting**: Beautiful code blocks with Shiki (20+ languages)
- 🧮 **Math Rendering**: LaTeX formula support with KaTeX
- 💬 **Comments**: GitHub Discussions integration via Giscus
- 👍 **Reactions**: Like, love, and fire reactions for posts
- 🎭 **Animations**: Smooth page transitions and hover effects with Framer Motion
- 📱 **Responsive**: Mobile-first design that works on all devices
- ⚡ **Performance**: Optimized images, code splitting, and static generation
- 🔒 **Secure**: Row Level Security with Supabase

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- A Supabase account (for database features)
- A GitHub repository (for comments)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd myblog
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your credentials (see [Configuration](#configuration) below).

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📋 Configuration

### Supabase Setup

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Run the SQL schema from `lib/supabase/schema.sql` in your Supabase SQL editor
3. Get your project URL and anon key from Settings → API
4. Add to `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

See detailed guide: [docs/supabase-setup.md](docs/supabase-setup.md)

### Giscus Setup

1. Enable GitHub Discussions on your repository
2. Install the Giscus app from [github.com/apps/giscus](https://github.com/apps/giscus)
3. Configure at [giscus.app](https://giscus.app)
4. Add to `.env.local`:

```env
NEXT_PUBLIC_GISCUS_REPO=username/repo
NEXT_PUBLIC_GISCUS_REPO_ID=your_repo_id
NEXT_PUBLIC_GISCUS_CATEGORY=General
NEXT_PUBLIC_GISCUS_CATEGORY_ID=your_category_id
```

See detailed guide: [docs/giscus-setup.md](docs/giscus-setup.md)

## 📝 Writing Blog Posts

Create MDX files in `content/blog/`:

```mdx
---
title: "My First Post"
date: "2024-01-01"
description: "This is my first blog post"
tags: ["nextjs", "react"]
author: "Your Name"
---

# Hello World

This is my first blog post with **MDX**!

## Code Example

\`\`\`typescript
function hello() {
  console.log("Hello, world!");
}
\`\`\`

## Math Formula

The quadratic formula: $x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}$
```

## 🏗️ Project Structure

```
myblog/
├── app/                    # Next.js App Router
│   ├── actions/           # Server Actions
│   ├── blog/              # Blog pages
│   └── page.tsx           # Homepage
├── components/            # React components
├── content/blog/          # MDX blog posts
├── docs/                  # Documentation
├── lib/                   # Utilities and configs
│   ├── mdx.ts            # MDX parsing
│   └── supabase/         # Supabase client & schema
└── public/               # Static assets
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Smooth Scroll**: Lenis
- **Content**: MDX (next-mdx-remote)
- **Code Highlighting**: Shiki
- **Math**: KaTeX
- **Database**: Supabase (PostgreSQL)
- **Comments**: Giscus (GitHub Discussions)
- **Testing**: Vitest

## 📜 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm test         # Run tests
npm run lint     # Run ESLint
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The app can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

Make sure to set all environment variables and use Node.js 18+.

## 📚 Documentation

- [Implementation Summary](docs/implementation-summary.md)
- [Supabase Setup Guide](docs/supabase-setup.md)
- [Giscus Setup Guide](docs/giscus-setup.md)
- [Requirements Document](.kiro/specs/developer-portfolio-blog/requirements.md)
- [Design Document](.kiro/specs/developer-portfolio-blog/design.md)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

Built with amazing open source projects:
- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Supabase](https://supabase.com)
- [Giscus](https://giscus.app)

---

Made with ❤️ using Next.js 15
