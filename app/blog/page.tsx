import Link from 'next/link';
import { getAllMDXSlugs, getMDXContent } from '@/lib/mdx';

/**
 * Blog List Page
 * Requirements: 5.1, 8.1, 8.4
 * 
 * Displays all blog posts in a Bento Grid layout
 */

export const metadata = {
    title: 'Blog | Developer Portfolio',
    description: 'Technical articles and tutorials on web development, programming, and software engineering',
};

export default async function BlogPage() {
    const slugs = await getAllMDXSlugs();

    // Fetch all blog posts with their frontmatter
    const posts = await Promise.all(
        slugs.map(async (slug) => {
            try {
                const { frontmatter } = await getMDXContent(slug);
                return {
                    slug,
                    ...frontmatter,
                };
            } catch {
                return null;
            }
        })
    );

    // Filter out any failed posts and sort by date (newest first)
    const validPosts = posts
        .filter((post): post is NonNullable<typeof post> => post !== null)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <div className="min-h-screen bg-background py-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Page Header */}
                <header className="mb-12">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                        Blog
                    </h1>
                    <p className="text-xl text-gray-300">
                        Technical articles, tutorials, and thoughts on software development
                    </p>
                </header>

                {/* Blog Posts Grid - Bento Grid Style */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {validPosts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="group"
                        >
                            <article className="glass rounded-[var(--radius-squircle-md)] p-6 h-full transition-all duration-300 hover:scale-[1.02] hover:bg-white/10">
                                {/* Post Title */}
                                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">
                                    {post.title}
                                </h2>

                                {/* Post Description */}
                                {post.description && (
                                    <p className="text-gray-300 mb-4 line-clamp-3">
                                        {post.description}
                                    </p>
                                )}

                                {/* Post Metadata */}
                                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 mb-4">
                                    <time dateTime={post.date}>
                                        {new Date(post.date).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'short',
                                            day: 'numeric',
                                        })}
                                    </time>

                                    {post.author && (
                                        <>
                                            <span>•</span>
                                            <span>{post.author}</span>
                                        </>
                                    )}
                                </div>

                                {/* Tags */}
                                {post.tags && post.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-2">
                                        {post.tags.slice(0, 3).map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2 py-1 text-xs rounded-full bg-neon-purple/20 text-neon-purple border border-neon-purple/30"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                        {post.tags.length > 3 && (
                                            <span className="px-2 py-1 text-xs text-gray-400">
                                                +{post.tags.length - 3} more
                                            </span>
                                        )}
                                    </div>
                                )}

                                {/* Read More Indicator */}
                                <div className="mt-4 flex items-center text-neon-cyan text-sm font-medium">
                                    Read more
                                    <svg
                                        className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>

                {/* Empty State */}
                {validPosts.length === 0 && (
                    <div className="glass rounded-[var(--radius-squircle-lg)] p-12 text-center">
                        <p className="text-xl text-gray-400">
                            No blog posts yet. Check back soon!
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
