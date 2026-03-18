# Quick Start Guide

Get your Developer Portfolio Blog up and running in 5 minutes!

## 🚀 Fast Track Setup

### Step 1: Install Dependencies (1 min)

```bash
npm install
```

### Step 2: Create Environment File (1 min)

```bash
cp .env.local.example .env.local
```

For now, you can use placeholder values to test locally:

```env
# Temporary placeholders - replace with real values later
NEXT_PUBLIC_SUPABASE_URL=https://placeholder.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=placeholder-key

NEXT_PUBLIC_GISCUS_REPO=username/repo
NEXT_PUBLIC_GISCUS_REPO_ID=placeholder
NEXT_PUBLIC_GISCUS_CATEGORY=General
NEXT_PUBLIC_GISCUS_CATEGORY_ID=placeholder
```

### Step 3: Start Development Server (30 sec)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

### Step 4: Explore the Site (2 min)

- **Homepage**: See the Bento Grid layout with smooth animations
- **Blog**: Navigate to `/blog` to see all posts
- **Blog Post**: Click any post to see MDX rendering, code highlighting, and math formulas

## ✅ What Works Without Configuration

Without setting up Supabase or Giscus, you can still use:

- ✅ Homepage with Bento Grid layout
- ✅ Blog post listing
- ✅ MDX content rendering
- ✅ Code syntax highlighting
- ✅ Math formula rendering
- ✅ Smooth scrolling
- ✅ Animations and transitions
- ✅ Responsive design

## ⚠️ What Needs Configuration

These features require external services:

- ❌ Reaction buttons (needs Supabase + Auth)
- ❌ Comments (needs Giscus + GitHub Discussions)

## 📝 Write Your First Blog Post

Create a new file in `content/blog/my-first-post.mdx`:

```mdx
---
title: "My First Blog Post"
date: "2024-01-15"
description: "This is my first post on my new blog!"
tags: ["hello", "first-post"]
author: "Your Name"
---

# Welcome to My Blog!

This is my first blog post. I'm excited to share my thoughts with you!

## Code Example

Here's some TypeScript code:

\`\`\`typescript
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("World"));
\`\`\`

## Math Formula

The Pythagorean theorem: $a^2 + b^2 = c^2$

## What's Next?

I'll be writing about:
- Web development
- TypeScript tips
- React best practices

Stay tuned!
```

Refresh your browser and see your new post! 🎊

## 🎨 Customize Your Site

### Update Homepage

Edit `app/page.tsx` to customize your homepage content:

```typescript
<BentoCard
  title="About Me"
  description="Your description here"
  size="large"
>
  <p>Tell your story...</p>
</BentoCard>
```

### Update Site Metadata

Edit `app/layout.tsx` to change site title and description:

```typescript
export const metadata: Metadata = {
  title: 'Your Name - Developer Blog',
  description: 'Your description here',
  // ...
};
```

### Customize Colors

Edit `app/globals.css` to change the neon accent colors:

```css
:root {
  --neon-pink: #ff006e;    /* Change these! */
  --neon-purple: #8338ec;
  --neon-blue: #3a86ff;
  /* ... */
}
```

## 🔧 Full Setup (Optional)

When you're ready to enable all features:

### 1. Set Up Supabase (10 min)

Follow: [docs/supabase-setup.md](docs/supabase-setup.md)

This enables:
- Reaction buttons
- User authentication
- Database storage

### 2. Set Up Giscus (5 min)

Follow: [docs/giscus-setup.md](docs/giscus-setup.md)

This enables:
- Comments on blog posts
- GitHub-based authentication

## 📚 Next Steps

1. **Write More Content**: Add more blog posts in `content/blog/`
2. **Customize Design**: Tweak colors, fonts, and layouts
3. **Add Projects**: Create a projects showcase page
4. **Deploy**: Deploy to Vercel (see [docs/deployment-checklist.md](docs/deployment-checklist.md))

## 🆘 Need Help?

- **Documentation**: Check the `docs/` folder
- **Examples**: Look at sample posts in `content/blog/`
- **Issues**: Check for TypeScript errors with `npm run build`

## 🎯 Common Tasks

### Add a New Blog Post
```bash
# Create new file
touch content/blog/my-post.mdx
# Edit with your favorite editor
```

### Check for Errors
```bash
npm run build
```

### Run Tests
```bash
npm test
```

### Format Code
```bash
npm run lint
```

## 🚢 Ready to Deploy?

When you're happy with your site:

```bash
# Build for production
npm run build

# Test production build
npm start
```

Then follow the [Deployment Checklist](docs/deployment-checklist.md) to deploy to Vercel or another platform.

---

**That's it! You're ready to start blogging! 🎉**

For detailed documentation, see:
- [Implementation Summary](docs/implementation-summary.md)
- [Supabase Setup](docs/supabase-setup.md)
- [Giscus Setup](docs/giscus-setup.md)
- [Deployment Checklist](docs/deployment-checklist.md)
