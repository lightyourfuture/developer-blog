import { MDXRemote } from 'next-mdx-remote/rsc';
import type { MDXComponents } from 'mdx/types';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import rehypeShiki from '@shikijs/rehype';

interface MDXContentProps {
    source: string;
    components?: MDXComponents;
}

/**
 * Custom MDX components mapping
 * Provides styled components for MDX content
 */
const defaultComponents: MDXComponents = {
    // Style inline code (code blocks are handled by rehype-shiki plugin)
    code: ({ children, ...props }: any) => {
        // This handles inline code only (code blocks are processed by rehype-shiki)
        return (
            <code
                className="rounded bg-white/10 px-1.5 py-0.5 text-sm font-mono text-pink-400"
                {...props}
            >
                {children}
            </code>
        );
    },
    // Style headings
    h1: ({ children }: any) => (
        <h1 className="mb-6 mt-8 text-4xl font-bold text-white">{children}</h1>
    ),
    h2: ({ children }: any) => (
        <h2 className="mb-4 mt-6 text-3xl font-semibold text-white">{children}</h2>
    ),
    h3: ({ children }: any) => (
        <h3 className="mb-3 mt-5 text-2xl font-semibold text-white">{children}</h3>
    ),
    // Style paragraphs
    p: ({ children }: any) => (
        <p className="mb-4 leading-7 text-gray-300">{children}</p>
    ),
    // Style links
    a: ({ href, children }: any) => (
        <a
            href={href}
            className="text-cyan-400 underline decoration-cyan-400/30 underline-offset-2 transition-colors hover:text-cyan-300 hover:decoration-cyan-300/50"
            target={href?.startsWith('http') ? '_blank' : undefined}
            rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
            {children}
        </a>
    ),
    // Style lists
    ul: ({ children }: any) => (
        <ul className="mb-4 ml-6 list-disc space-y-2 text-gray-300">{children}</ul>
    ),
    ol: ({ children }: any) => (
        <ol className="mb-4 ml-6 list-decimal space-y-2 text-gray-300">{children}</ol>
    ),
    li: ({ children }: any) => <li className="leading-7">{children}</li>,
    // Style tables
    table: ({ children }: any) => (
        <div className="my-6 w-full overflow-x-auto">
            <table className="w-full border-collapse text-sm">
                {children}
            </table>
        </div>
    ),
    thead: ({ children }: any) => (
        <thead className="bg-white/5 border-b border-white/10">
            {children}
        </thead>
    ),
    tbody: ({ children }: any) => (
        <tbody className="divide-y divide-white/10">
            {children}
        </tbody>
    ),
    tr: ({ children }: any) => (
        <tr className="hover:bg-white/5 transition-colors">
            {children}
        </tr>
    ),
    th: ({ children }: any) => (
        <th className="px-4 py-3 text-left font-semibold text-white">
            {children}
        </th>
    ),
    td: ({ children }: any) => (
        <td className="px-4 py-3 text-gray-300">
            {children}
        </td>
    ),
    // Style blockquotes
    blockquote: ({ children }: any) => (
        <blockquote className="my-4 border-l-4 border-cyan-500/50 bg-white/5 pl-4 py-2 italic text-gray-300">
            {children}
        </blockquote>
    ),
    // Style horizontal rules
    hr: () => <hr className="my-8 border-white/10" />,
    // Style strong/bold text
    strong: ({ children }: any) => (
        <strong className="font-semibold text-white">{children}</strong>
    ),
    // Style emphasis/italic text
    em: ({ children }: any) => <em className="italic text-gray-200">{children}</em>,
};

/**
 * MDXContent component for React Server Components
 * Renders MDX content with custom component mappings
 * Code highlighting is handled by @shikijs/rehype plugin
 */
export async function MDXContent({ source, components }: MDXContentProps) {
    const mergedComponents = {
        ...defaultComponents,
        ...components,
    };

    return (
        <div className="prose prose-invert max-w-none
            [&_pre]:overflow-x-auto 
            [&_pre]:max-w-full 
            [&_pre]:rounded-lg 
            [&_pre]:p-4 
            [&_pre]:text-sm
            [&_pre]:leading-relaxed
            [&_pre_code]:block
            [&_pre_code]:w-fit
            [&_pre_code]:min-w-full
            [&_table]:block
            [&_table]:overflow-x-auto
            [&_table]:max-w-full
            [&_img]:max-w-full
            [&_img]:h-auto
        ">
            <MDXRemote
                source={source}
                components={mergedComponents}
                options={{
                    mdxOptions: {
                        remarkPlugins: [remarkGfm, remarkMath],
                        rehypePlugins: [
                            [rehypeKatex, { throwOnError: false, errorColor: '#cc0000', strict: 'warn' }],
                            [
                                rehypeShiki,
                                {
                                    theme: 'github-dark',
                                },
                            ],
                        ],
                    },
                }}
            />
        </div>
    );
}
