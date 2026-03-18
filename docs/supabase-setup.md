# Supabase Setup Guide

This guide will help you set up Supabase for your developer portfolio blog.

## Prerequisites

- A GitHub account
- Node.js 18+ installed

## Step 1: Create a Supabase Project

1. Go to [Supabase](https://supabase.com/) and sign in with your GitHub account
2. Click "New Project"
3. Fill in the project details:
   - **Name**: Choose a name for your project (e.g., "developer-blog")
   - **Database Password**: Create a strong password (save this securely)
   - **Region**: Choose the region closest to your users
4. Click "Create new project" and wait for the project to be provisioned (this may take a few minutes)

## Step 2: Get Your API Keys

1. Once your project is ready, go to **Settings** → **API**
2. Copy the following values:
   - **Project URL**: This is your `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public**: This is your `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Step 3: Set Up the Database Schema

1. In your Supabase dashboard, go to **SQL Editor**
2. Click "New Query"
3. Copy the contents of `lib/supabase/schema.sql` from your project
4. Paste it into the SQL editor
5. Click "Run" to execute the SQL commands

This will create:
- `posts` table for blog posts
- `reactions` table for post reactions (like, love, fire)
- `projects` table for portfolio projects
- Row Level Security (RLS) policies for data access control

## Step 4: Configure Environment Variables

1. Copy `.env.local.example` to `.env.local` in your project root:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` and add your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
   ```

## Step 5: Verify the Setup

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to a blog post page
3. The reaction buttons should now be visible (though they won't work until you implement authentication)

## Optional: Set Up Authentication

To enable user reactions and comments, you'll need to set up Supabase Authentication:

1. In your Supabase dashboard, go to **Authentication** → **Providers**
2. Enable the authentication providers you want to use (e.g., GitHub, Google, Email)
3. Follow the provider-specific setup instructions
4. Update your application to use Supabase Auth (see Supabase Auth documentation)

## Database Schema Overview

### Posts Table
Stores blog post metadata (title, description, tags, etc.)

### Reactions Table
Stores user reactions to blog posts (like, love, fire)

### Projects Table
Stores portfolio project information

## Row Level Security (RLS)

RLS policies are configured to:
- Allow anyone to read published posts
- Allow only authors to create/update/delete their own posts
- Allow authenticated users to add reactions
- Allow users to delete only their own reactions
- Allow anyone to view projects
- Allow only admins to manage projects

## Troubleshooting

### "Failed to fetch" errors
- Check that your environment variables are set correctly
- Verify that your Supabase project is running
- Check the browser console for detailed error messages

### RLS policy errors
- Make sure you've run the schema.sql file
- Verify that RLS is enabled on all tables
- Check that your policies match your use case

## Next Steps

- Set up authentication to enable user reactions
- Populate the database with your blog posts and projects
- Customize the RLS policies to match your security requirements
- Consider setting up database backups

## Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Auth Guide](https://supabase.com/docs/guides/auth)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)
