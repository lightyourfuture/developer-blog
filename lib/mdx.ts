import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const CONTENT_DIR = path.join(process.cwd(), 'content', 'blog');

export interface MDXFrontmatter {
    title: string;
    date: string;
    description?: string;
    tags?: string[];
    author?: string;
    coverImage?: string;
    draft?: boolean;
}

export interface MDXContent {
    frontmatter: MDXFrontmatter;
    content: string;
}

/**
 * Get MDX content by slug
 * Reads the .mdx file and extracts frontmatter
 */
export async function getMDXContent(slug: string): Promise<MDXContent> {
    const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);

    try {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const { data, content } = matter(fileContent);

        // Validate required frontmatter fields
        if (!data.title || !data.date) {
            throw new Error(`Missing required frontmatter fields in ${slug}.mdx`);
        }

        return {
            frontmatter: data as MDXFrontmatter,
            content: content,
        };
    } catch (error) {
        console.error(`Failed to parse MDX file: ${slug}`, error);
        throw error;
    }
}

/**
 * Get all MDX file slugs from the content directory
 * Returns an array of slugs (filenames without .mdx extension)
 */
export async function getAllMDXSlugs(): Promise<string[]> {
    try {
        // Create content directory if it doesn't exist
        if (!fs.existsSync(CONTENT_DIR)) {
            fs.mkdirSync(CONTENT_DIR, { recursive: true });
            return [];
        }

        const files = fs.readdirSync(CONTENT_DIR);

        // Filter for .mdx files and remove extension
        const slugs = files
            .filter((file) => file.endsWith('.mdx'))
            .map((file) => file.replace(/\.mdx$/, ''));

        return slugs;
    } catch (error) {
        console.error('Failed to read MDX directory:', error);
        return [];
    }
}
