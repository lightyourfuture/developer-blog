# Developer Portfolio Blog

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/lightyourfuture/developer-blog/releases/tag/v1.0.0)
[![Next.js](https://img.shields.io/badge/Next.js-15.1.0-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0.0-38B2AC)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

A modern, high-performance developer blog and portfolio website built with Next.js 15, featuring MDX content management, Supabase database integration, and GitHub Discussions-based comments.

🌐 **Live Demo:** [developer-blog-weld.vercel.app](https://developer-blog-weld.vercel.app)

## 📸 Screenshots

### Homepage - Bento Grid Layout
![Homepage](docs/screenshots/homepage.png)

### Blog Post with Code Highlighting
![Blog Post](docs/screenshots/blog-post.png)

### Mobile Responsive Design
![Mobile](docs/screenshots/mobile.png)

## ✨ Features

## ✨ Features

### 🎨 Design & UI
- **Bento Grid Layout**: Modern card-based layout system
- **Dark Mode**: Beautiful dark theme with neon accent colors
- **Glassmorphism**: Frosted glass effects throughout the UI
- **Squircle Corners**: Smooth, rounded corners for a modern look
- **Smooth Animations**: Page transitions and hover effects with Framer Motion
- **Smooth Scrolling**: Lenis-powered smooth scroll experience

### 📝 Content Management
- **MDX Support**: Write blog posts with React components embedded
- **20+ Languages**: Syntax highlighting with Shiki for all major languages
- **Math Formulas**: LaTeX formula support with KaTeX (inline and display)
- **Markdown Tables**: Full support for GitHub Flavored Markdown tables
- **Chinese Content**: Full support for Chinese and other languages
- **Frontmatter**: Rich metadata (title, date, tags, author, description)

### 💬 Interactive Features
- **GitHub Comments**: Giscus integration for GitHub Discussions-based comments
- **Anonymous Reactions**: Like, love, and fire reactions without login
- **Persistent Reactions**: Reaction counts stored in Supabase database
- **User-Friendly**: No login required for basic interactions

### 📱 Responsive Design
- **Mobile-First**: Optimized for mobile devices (320px+)
- **Tablet Support**: Perfect layout for tablets (768px+)
- **Desktop Experience**: Enhanced experience for desktop (1024px+)
- **Code Block Scrolling**: Horizontal scrolling for long code lines
- **Table Scrolling**: Horizontal scrolling for wide tables

### ⚡ Performance
- **Static Generation**: Pre-rendered pages for instant loading
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic code splitting for faster page loads
- **Web Vitals**: Optimized for Core Web Vitals (LCP, FID, CLS)
- **Lighthouse Score**: 90+ performance score

### 🔒 Security & Privacy
- **Row Level Security**: Supabase RLS for data protection
- **Environment Variables**: Secure configuration management
- **Anonymous Tracking**: No personal data collection for reactions
- **HTTPS**: Secure connection via Vercel

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

- [📋 Project Roadmap](ROADMAP.md) - Future development plans
- [📝 Changelog](CHANGELOG.md) - Version history and changes
- [🏷️ Version Management](VERSION.md) - Version control guide
- [📖 Implementation Summary](docs/implementation-summary.md)
- [🗄️ Supabase Setup Guide](docs/supabase-setup.md)
- [💬 Giscus Setup Guide](docs/giscus-setup.md)
- [✍️ Writing Guide](docs/WRITING-GUIDE.md)
- [🎨 Customization Guide](docs/CUSTOMIZE-HOMEPAGE.md)
- [🚀 Features Overview](docs/FEATURES-OVERVIEW.md)
- [📋 Requirements Document](.kiro/specs/developer-portfolio-blog/requirements.md)
- [🎯 Design Document](.kiro/specs/developer-portfolio-blog/design.md)

## 🗺️ Roadmap

See [ROADMAP.md](ROADMAP.md) for detailed future plans.

### Version 1.1 (Planned)
- [ ] Article table of contents (TOC)
- [ ] Reading progress bar
- [ ] Full-text search
- [ ] Tag system and tag pages
- [ ] Related articles recommendation

### Version 1.5 (Planned)
- [ ] Social sharing (Twitter, LinkedIn, WeChat)
- [ ] Google Analytics integration
- [ ] RSS feed
- [ ] Performance monitoring

### Version 2.0 (Planned)
- [ ] User authentication (GitHub OAuth)
- [ ] Content management system (CMS)
- [ ] Multi-language support (i18n)
- [ ] Advanced interactive features

## 📊 Project Stats

- **Lines of Code**: ~5,000+
- **Components**: 15+
- **Blog Posts**: 5 examples included
- **Supported Languages**: 20+ for syntax highlighting
- **Performance Score**: 90+ (Lighthouse)
- **Mobile Friendly**: 100% responsive

## 🎯 Use Cases

This project is perfect for:

- 👨‍💻 **Developers**: Showcase your projects and write technical articles
- 📝 **Technical Writers**: Share tutorials and documentation
- 🎓 **Educators**: Create educational content with code examples
- 🚀 **Startups**: Build a company blog with modern design
- 💼 **Freelancers**: Create a professional portfolio

## 🌟 What Makes This Special?

1. **Modern Tech Stack**: Built with the latest Next.js 15 and React 19
2. **Beautiful Design**: Unique Bento Grid layout with glassmorphism
3. **Developer-Friendly**: Full TypeScript support and clean code structure
4. **Production-Ready**: Deployed and tested in real-world scenarios
5. **Well-Documented**: Comprehensive documentation and guides
6. **Free to Deploy**: Zero cost deployment on Vercel
7. **Active Development**: Regular updates and new features

## 📚 Documentation

- [Implementation Summary](docs/implementation-summary.md)
- [Supabase Setup Guide](docs/supabase-setup.md)
- [Giscus Setup Guide](docs/giscus-setup.md)
- [Requirements Document](.kiro/specs/developer-portfolio-blog/requirements.md)
- [Design Document](.kiro/specs/developer-portfolio-blog/design.md)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### How to Contribute

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting

## 🐛 Bug Reports

Found a bug? Please open an issue with:

- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Environment details (OS, browser, Node version)

## 💡 Feature Requests

Have an idea? Open an issue with:

- Clear description of the feature
- Use case and benefits
- Possible implementation approach
- Any relevant examples or mockups

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

Built with amazing open source projects:

- [Next.js](https://nextjs.org) - The React Framework
- [React](https://reactjs.org) - UI Library
- [TypeScript](https://www.typescriptlang.org) - Type Safety
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Lenis](https://lenis.studiofreight.com/) - Smooth Scroll
- [Supabase](https://supabase.com) - Database
- [Giscus](https://giscus.app) - Comments
- [Shiki](https://shiki.matsu.io/) - Code Highlighting
- [KaTeX](https://katex.org/) - Math Rendering
- [Vercel](https://vercel.com) - Hosting

Special thanks to all contributors and the open source community!

## 📞 Contact

- **GitHub**: [@lightyourfuture](https://github.com/lightyourfuture)
- **Website**: [developer-blog-weld.vercel.app](https://developer-blog-weld.vercel.app)
- **Email**: [your-email@example.com]

## ⭐ Show Your Support

If you find this project helpful, please give it a ⭐️ on GitHub!

---

**Version**: 1.0.0  
**Last Updated**: 2024-01-20  
**Status**: Stable ✅

Made with ❤️ using Next.js 15
