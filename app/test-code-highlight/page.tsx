import { getMDXContent } from '@/lib/mdx';
import { MDXContent } from '@/components/mdx-content';

export default async function TestCodeHighlightPage() {
    let postData;
    let error = null;

    try {
        postData = await getMDXContent('code-highlight-test');
    } catch (e) {
        error = e;
        console.error('Error loading MDX content:', e);
    }

    if (error || !postData) {
        return (
            <div className="min-h-screen bg-black p-8">
                <div className="mx-auto max-w-4xl">
                    <h1 className="text-2xl font-bold text-red-400">Error Loading Post</h1>
                    <p className="mt-4 text-gray-300">
                        Failed to load the blog post. Error: {error?.toString()}
                    </p>
                </div>
            </div>
        );
    }

    const { frontmatter, content } = postData;

    return (
        <div className="min-h-screen bg-black p-8">
            <div className="mx-auto max-w-4xl">
                <header className="mb-8">
                    <h1 className="mb-2 text-4xl font-bold text-white">
                        {frontmatter.title}
                    </h1>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                        <time>{frontmatter.date}</time>
                        {frontmatter.author && <span>by {frontmatter.author}</span>}
                    </div>
                    {frontmatter.description && (
                        <p className="mt-4 text-lg text-gray-300">
                            {frontmatter.description}
                        </p>
                    )}
                    {frontmatter.tags && frontmatter.tags.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                            {frontmatter.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs text-cyan-400"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </header>

                <article className="prose prose-invert max-w-none">
                    <MDXContent source={content} />
                </article>
            </div>
        </div>
    );
}
