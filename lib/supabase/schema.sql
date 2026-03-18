-- Supabase Database Schema for Developer Portfolio Blog
-- This file contains all table definitions, indexes, and RLS policies

-- ============================================================================
-- Posts Table
-- ============================================================================
CREATE TABLE IF NOT EXISTS posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  content TEXT,
  published_at TIMESTAMP WITH TIME ZONE,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  author_id UUID REFERENCES auth.users(id),
  tags TEXT[],
  view_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for posts table
CREATE INDEX IF NOT EXISTS idx_posts_slug ON posts(slug);
CREATE INDEX IF NOT EXISTS idx_posts_published_at ON posts(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_posts_tags ON posts USING GIN(tags);

-- ============================================================================
-- Reactions Table
-- ============================================================================
CREATE TABLE IF NOT EXISTS reactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID REFERENCES posts(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  type TEXT NOT NULL CHECK (type IN ('like', 'love', 'fire')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(post_id, user_id, type)
);

-- Indexes for reactions table
CREATE INDEX IF NOT EXISTS idx_reactions_post_id ON reactions(post_id);
CREATE INDEX IF NOT EXISTS idx_reactions_user_id ON reactions(user_id);

-- ============================================================================
-- Projects Table
-- ============================================================================
CREATE TABLE IF NOT EXISTS projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  demo_url TEXT,
  github_url TEXT,
  tags TEXT[],
  featured BOOLEAN DEFAULT FALSE,
  display_order INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for projects table
CREATE INDEX IF NOT EXISTS idx_projects_slug ON projects(slug);
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(featured) WHERE featured = TRUE;
CREATE INDEX IF NOT EXISTS idx_projects_display_order ON projects(display_order);

-- ============================================================================
-- Row Level Security (RLS) Policies
-- ============================================================================

-- Enable RLS on all tables
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE reactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Posts RLS Policies
-- All users can read published posts
CREATE POLICY "Public posts are viewable by everyone"
  ON posts FOR SELECT
  USING (published_at IS NOT NULL AND published_at <= NOW());

-- Only authors can insert their own posts
CREATE POLICY "Authors can insert their own posts"
  ON posts FOR INSERT
  WITH CHECK (auth.uid() = author_id);

-- Only authors can update their own posts
CREATE POLICY "Authors can update their own posts"
  ON posts FOR UPDATE
  USING (auth.uid() = author_id);

-- Only authors can delete their own posts
CREATE POLICY "Authors can delete their own posts"
  ON posts FOR DELETE
  USING (auth.uid() = author_id);

-- Reactions RLS Policies
-- All users can view reactions
CREATE POLICY "Reactions are viewable by everyone"
  ON reactions FOR SELECT
  USING (true);

-- Authenticated users can add reactions
CREATE POLICY "Authenticated users can add reactions"
  ON reactions FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Users can only delete their own reactions
CREATE POLICY "Users can delete their own reactions"
  ON reactions FOR DELETE
  USING (auth.uid() = user_id);

-- Projects RLS Policies
-- All users can view projects
CREATE POLICY "Projects are viewable by everyone"
  ON projects FOR SELECT
  USING (true);

-- Only admins can manage projects (you'll need to customize this)
-- For now, we'll allow authenticated users to manage projects
-- In production, you should create a custom function to check admin status
CREATE POLICY "Admins can manage projects"
  ON projects FOR ALL
  USING (auth.uid() IS NOT NULL);
