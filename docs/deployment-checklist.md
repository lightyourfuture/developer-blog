# Deployment Checklist

Use this checklist to ensure your Developer Portfolio Blog is ready for deployment.

## Pre-Deployment Checklist

### ✅ Environment Configuration

- [ ] Copy `.env.local.example` to `.env.local`
- [ ] Set `NEXT_PUBLIC_SUPABASE_URL`
- [ ] Set `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- [ ] Set `NEXT_PUBLIC_GISCUS_REPO`
- [ ] Set `NEXT_PUBLIC_GISCUS_REPO_ID`
- [ ] Set `NEXT_PUBLIC_GISCUS_CATEGORY`
- [ ] Set `NEXT_PUBLIC_GISCUS_CATEGORY_ID`

### ✅ Supabase Setup

- [ ] Create Supabase project
- [ ] Run SQL schema from `lib/supabase/schema.sql`
- [ ] Verify tables created: `posts`, `reactions`, `projects`
- [ ] Verify RLS policies are enabled
- [ ] Test database connection locally
- [ ] (Optional) Set up Supabase Auth

### ✅ Giscus Setup

- [ ] Enable GitHub Discussions on repository
- [ ] Install Giscus app on repository
- [ ] Configure Giscus at https://giscus.app/
- [ ] Test comments locally
- [ ] Verify comments appear in GitHub Discussions

### ✅ Content

- [ ] Add at least 3 blog posts in `content/blog/`
- [ ] Verify all blog posts have valid frontmatter
- [ ] Test MDX rendering locally
- [ ] Check code highlighting works
- [ ] Check math formulas render correctly
- [ ] Add cover images (if using)

### ✅ Customization

- [ ] Update site title in `app/layout.tsx`
- [ ] Update site description in `app/layout.tsx`
- [ ] Update homepage content in `app/page.tsx`
- [ ] Add your personal information
- [ ] Update social media links (if added)
- [ ] Customize color scheme (optional)
- [ ] Add favicon and app icons

### ✅ Testing

- [ ] Run `npm run build` successfully
- [ ] Test all pages load correctly
- [ ] Test blog post navigation
- [ ] Test reaction buttons (with auth)
- [ ] Test comments system
- [ ] Test on mobile devices
- [ ] Test on different browsers
- [ ] Check console for errors
- [ ] Verify no TypeScript errors

### ✅ Performance

- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Optimize images (use WebP/AVIF)
- [ ] Check bundle size
- [ ] Verify lazy loading works
- [ ] Test page load speed
- [ ] Check Core Web Vitals

### ✅ SEO

- [ ] Verify meta tags are correct
- [ ] Check Open Graph tags
- [ ] Verify Twitter Card tags
- [ ] Add robots.txt (if needed)
- [ ] Add sitemap.xml (if needed)
- [ ] Test with Google Search Console
- [ ] Verify structured data (JSON-LD)

### ✅ Security

- [ ] Review RLS policies
- [ ] Verify environment variables are not exposed
- [ ] Check for sensitive data in code
- [ ] Enable HTTPS (handled by hosting platform)
- [ ] Review CORS settings (if applicable)

## Deployment Steps

### Vercel Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js

3. **Configure Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add all variables from `.env.local`
   - Make sure to add them for Production, Preview, and Development

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Visit your deployed site

5. **Verify Deployment**
   - [ ] Homepage loads correctly
   - [ ] Blog posts are accessible
   - [ ] Reactions work (after auth setup)
   - [ ] Comments load correctly
   - [ ] No console errors
   - [ ] All images load

### Other Platforms

#### Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add environment variables
5. Deploy

#### Railway
1. Create new project from GitHub
2. Add environment variables
3. Railway auto-detects Next.js
4. Deploy

#### AWS Amplify
1. Connect repository
2. Configure build settings
3. Add environment variables
4. Deploy

## Post-Deployment

### ✅ Monitoring

- [ ] Set up error tracking (Sentry, etc.)
- [ ] Set up analytics (Vercel Analytics, Google Analytics)
- [ ] Monitor performance metrics
- [ ] Set up uptime monitoring
- [ ] Configure alerts for errors

### ✅ Domain Configuration

- [ ] Purchase domain (if needed)
- [ ] Configure DNS settings
- [ ] Add custom domain to hosting platform
- [ ] Verify SSL certificate
- [ ] Test domain works

### ✅ Content Management

- [ ] Create content publishing workflow
- [ ] Set up content review process
- [ ] Plan content calendar
- [ ] Configure backups
- [ ] Document content guidelines

### ✅ Maintenance

- [ ] Schedule regular dependency updates
- [ ] Monitor security advisories
- [ ] Plan feature enhancements
- [ ] Review and respond to comments
- [ ] Monitor database usage

## Troubleshooting

### Build Fails

**Issue**: Build fails with TypeScript errors
- **Solution**: Run `npm run build` locally to identify issues
- Check for missing dependencies
- Verify all imports are correct

**Issue**: Environment variables not found
- **Solution**: Verify all required env vars are set in hosting platform
- Check variable names match exactly (case-sensitive)

### Runtime Errors

**Issue**: Supabase connection fails
- **Solution**: Verify Supabase URL and key are correct
- Check Supabase project is running
- Verify RLS policies allow access

**Issue**: Giscus comments don't load
- **Solution**: Verify GitHub Discussions is enabled
- Check Giscus app is installed
- Verify repo and category IDs are correct

**Issue**: Images don't load
- **Solution**: Check image paths are correct
- Verify images are in `public/` folder
- Check Next.js Image configuration

### Performance Issues

**Issue**: Slow page loads
- **Solution**: Enable caching
- Optimize images
- Check bundle size
- Enable compression

**Issue**: High database usage
- **Solution**: Implement caching
- Optimize queries
- Review RLS policies

## Rollback Plan

If deployment fails:

1. **Revert to Previous Version**
   - In Vercel: Go to Deployments → Select previous deployment → Promote to Production
   - In Git: `git revert HEAD` and push

2. **Check Logs**
   - Review build logs
   - Check runtime logs
   - Identify error cause

3. **Fix and Redeploy**
   - Fix identified issues
   - Test locally
   - Redeploy

## Success Criteria

Your deployment is successful when:

- ✅ All pages load without errors
- ✅ Blog posts are readable and well-formatted
- ✅ Code highlighting works correctly
- ✅ Math formulas render properly
- ✅ Comments system is functional
- ✅ Reactions work (with authentication)
- ✅ Site is responsive on all devices
- ✅ Performance scores are good (Lighthouse 90+)
- ✅ No console errors
- ✅ SEO meta tags are correct

## Next Steps After Deployment

1. **Share Your Blog**
   - Share on social media
   - Submit to search engines
   - Join developer communities

2. **Create Content**
   - Write your first real blog post
   - Share your projects
   - Engage with readers

3. **Iterate and Improve**
   - Gather user feedback
   - Monitor analytics
   - Add new features
   - Optimize performance

4. **Build Community**
   - Respond to comments
   - Engage with readers
   - Build your audience

---

**Good luck with your deployment! 🚀**
