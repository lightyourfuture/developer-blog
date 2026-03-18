import { notFound } from 'next/navigation';
import { getMDXContent, getAllMDXSlugs } from '@/lib/mdx';
import { MDXContent } from '@/components/mdx-content';
import { ReactionButton } from '@/components/reaction-button';
import { GiscusComments } from '@/components/giscus-comments';
import { getReactionStats } from '@/app/actions/reactions';

/**
 * Blog Post Page
 * Requirements: 5.1, 5.5
 * 
 * Dynamic route for individual blog posts
 * Uses generateStaticParams for static site generation
 */

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

/**
 * Generate static paths for all blog posts
 * Requirements: 5.1
 */
export async function generateStaticParams() {
    const slugs = await getAllMDXSlugs();
    return slugs.map((slug) => ({
        slug,
    }));
}

/**
 * Generate metadata for SEO
 * Requirements: 15.1
 */
export async function generateMetadata({ params }: BlogPostPageProps) {
    const { slug } = await params;

    try {
        const { frontmatter } = await getMDXContent(slug);

        return {
            title: `${frontmatter.title} | Developer Blog`,
            description: frontmatter.description || frontmatter.title,
            openGraph: {
                title: frontmatter.title,
                description: frontmatter.description,
                type: 'article',
                publishedTime: frontmatter.date,
                authors: frontmatter.author ? [frontmatter.author] : undefined,
                tags: frontmatter.tags,
            },
        };
    } catch {
        return {
            title: 'Post Not Found',
        };
    }
}

/**
 * Blog Post Page Component
 * Requirements: 5.1, 5.5
 */
export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;

    let mdxContent;
    try {
        mdxContent = await getMDXContent(slug);
    } catch {
        notFound();
    }

    const { frontmatter, content } = mdxContent;

    // Fetch reaction stats for this post
    const reactionStats = await getReactionStats(slug);

    return (
        <div className="min-h-screen bg-background py-12 px-4">
            <article className="max-w-4xl mx-auto">
                {/* Article Header - Bento Grid Style Card */}
                <header className="glass rounded-[var(--radius-squircle-lg)] p-8 mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        {frontmatter.title}
                    </h1>

                    {frontmatter.description && (
                        <p className="text-xl text-gray-300 mb-6">
                            {frontmatter.description}
                        </p>
                    )}

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        {frontmatter.date && (
                            <time dateTime={frontmatter.date}>
                                {new Date(frontmatter.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                            </time>
                        )}

                        {frontmatter.author && (
                            <>
                                <span>•</span>
                                <span>By {frontmatter.author}</span>
                            </>
                        )}
                    </div>

                    {frontmatter.tags && frontmatter.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-6">
                            {frontmatter.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 text-sm rounded-full bg-neon-purple/20 text-neon-purple border border-neon-purple/30"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </header>

                {/* Article Content */}
                <div className="glass rounded-[var(--radius-squircle-lg)] p-8 md:p-12">
                    <MDXContent source={content} />
                </div>

                {/* Reactions Section */}
                <div className="glass rounded-[var(--radius-squircle-lg)] p-6 mt-8">
                    <h3 className="text-lg font-semibold text-white mb-4">React to this post</h3>
                    <ReactionButton
                        postId={slug}
                        initialStats={reactionStats}
                    />
                </div>

                {/* Comments Section */}
                <div className="glass rounded-[var(--radius-squircle-lg)] p-6 mt-8">
                    <h3 className="text-lg font-semibold text-white mb-6">Comments</h3>
                    <GiscusComments
                        repo={process.env.NEXT_PUBLIC_GISCUS_REPO || 'username/repo'}
                        repoId={process.env.NEXT_PUBLIC_GISCUS_REPO_ID || ''}
                        category={process.env.NEXT_PUBLIC_GISCUS_CATEGORY || 'General'}
                        categoryId={process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || ''}
                        mapping="pathname"
                        theme="dark"
                    />
                </div>
            </article>
        </div>
    );
}
