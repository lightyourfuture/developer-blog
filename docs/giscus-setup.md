# Giscus Setup Guide

This guide will help you set up Giscus comments for your developer portfolio blog.

## What is Giscus?

Giscus is a comments system powered by GitHub Discussions. It allows visitors to leave comments on your blog posts using their GitHub accounts. Comments are stored in your GitHub repository's Discussions section.

## Prerequisites

- A GitHub account
- A public GitHub repository for your blog
- Admin access to the repository

## Step 1: Enable GitHub Discussions

1. Go to your GitHub repository
2. Click on **Settings**
3. Scroll down to the **Features** section
4. Check the box next to **Discussions**
5. Click **Set up discussions** if prompted

## Step 2: Install the Giscus App

1. Go to [giscus.app](https://giscus.app/)
2. Scroll down to the **Configuration** section
3. Enter your repository in the format `username/repo` (e.g., `johndoe/my-blog`)
4. The page will check if your repository meets the requirements:
   - ✅ The repository is public
   - ✅ The giscus app is installed
   - ✅ Discussions feature is enabled

5. If the giscus app is not installed, click the link to install it:
   - Go to [github.com/apps/giscus](https://github.com/apps/giscus)
   - Click **Install**
   - Select your repository
   - Click **Install**

## Step 3: Configure Giscus

On the [giscus.app](https://giscus.app/) configuration page:

### Page ↔️ Discussions Mapping
Choose how blog posts map to discussions:
- **pathname** (recommended): Uses the page URL path
- **URL**: Uses the full page URL
- **title**: Uses the page title
- **og:title**: Uses the Open Graph title

We recommend **pathname** for consistency.

### Discussion Category
Choose a category for your comments:
- Select **General** or create a custom category
- We recommend creating a dedicated category like "Blog Comments"

### Features
- ✅ Enable reactions for the main post
- ✅ Emit discussion metadata (optional)
- Choose **Comment box above comments** for better UX

### Theme
- Select **dark** to match your blog's dark theme
- Or choose **transparent_dark** for a more integrated look

## Step 4: Get Your Configuration Values

After configuring, giscus will generate a script tag. Extract these values:

```html
<script src="https://giscus.app/client.js"
        data-repo="username/repo"
        data-repo-id="R_kgDOxxxxxxx"
        data-category="General"
        data-category-id="DIC_kwDOxxxxxxx"
        ...>
</script>
```

You need:
- `data-repo` → `NEXT_PUBLIC_GISCUS_REPO`
- `data-repo-id` → `NEXT_PUBLIC_GISCUS_REPO_ID`
- `data-category` → `NEXT_PUBLIC_GISCUS_CATEGORY`
- `data-category-id` → `NEXT_PUBLIC_GISCUS_CATEGORY_ID`

## Step 5: Configure Environment Variables

1. Open your `.env.local` file
2. Add your Giscus configuration:

```env
NEXT_PUBLIC_GISCUS_REPO=username/repo
NEXT_PUBLIC_GISCUS_REPO_ID=R_kgDOxxxxxxx
NEXT_PUBLIC_GISCUS_CATEGORY=General
NEXT_PUBLIC_GISCUS_CATEGORY_ID=DIC_kwDOxxxxxxx
```

## Step 6: Verify the Setup

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to a blog post page
3. Scroll down to the comments section
4. You should see the Giscus comment box
5. Try leaving a test comment (you'll need to sign in with GitHub)

## Step 7: Manage Comments

All comments are stored in your GitHub repository's Discussions:

1. Go to your repository on GitHub
2. Click on the **Discussions** tab
3. You'll see all comments as discussion threads
4. You can moderate, edit, or delete comments from here

## Customization Options

### Theme Customization
You can customize the Giscus theme in `components/giscus-comments.tsx`:

```typescript
<GiscusComments
  theme="dark" // or "transparent_dark", "dark_dimmed", etc.
  ...
/>
```

### Mapping Strategy
Change the mapping strategy in `app/blog/[slug]/page.tsx`:

```typescript
<GiscusComments
  mapping="pathname" // or "url", "title", "og:title"
  ...
/>
```

### Input Position
Change where the comment box appears:

```typescript
// In components/giscus-comments.tsx
<Giscus
  inputPosition="top" // or "bottom"
  ...
/>
```

## Troubleshooting

### Comments not loading
- Check that your environment variables are set correctly
- Verify that the giscus app is installed on your repository
- Make sure GitHub Discussions is enabled
- Check the browser console for error messages

### Wrong repository or category
- Double-check your `NEXT_PUBLIC_GISCUS_*` values
- Make sure the category exists in your repository's Discussions

### Comments not appearing in GitHub Discussions
- Verify that the mapping strategy matches your page structure
- Check that the discussion category is correct

## Privacy and Moderation

### Privacy
- Comments are public and stored on GitHub
- Users must have a GitHub account to comment
- User information is visible according to their GitHub profile settings

### Moderation
- You can moderate comments from your GitHub Discussions page
- You can lock, delete, or edit discussions
- You can block users from your repository settings

## Best Practices

1. **Create a dedicated category**: Create a "Blog Comments" category in Discussions for better organization
2. **Set up notifications**: Enable GitHub notifications for new discussions
3. **Moderate regularly**: Check and respond to comments regularly
4. **Use reactions**: Enable reactions to let readers express themselves quickly
5. **Pin important discussions**: Pin FAQs or important announcements

## Resources

- [Giscus Documentation](https://github.com/giscus/giscus)
- [GitHub Discussions Guide](https://docs.github.com/en/discussions)
- [Giscus Configuration Tool](https://giscus.app/)
