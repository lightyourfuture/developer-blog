import { describe, it, expect } from 'vitest';
import { getMDXContent, getAllMDXSlugs } from './mdx';

describe('MDX Utility Functions', () => {
    describe('getAllMDXSlugs', () => {
        it('should return an array of slugs', async () => {
            const slugs = await getAllMDXSlugs();
            expect(Array.isArray(slugs)).toBe(true);
        });

        it('should include sample-post slug', async () => {
            const slugs = await getAllMDXSlugs();
            expect(slugs).toContain('sample-post');
        });

        it('should include all MDX files', async () => {
            const slugs = await getAllMDXSlugs();
            expect(slugs).toContain('sample-post');
            expect(slugs).toContain('advanced-example');
            expect(slugs).toContain('code-highlight-test');
            expect(slugs.length).toBeGreaterThanOrEqual(3);
        });
    });

    describe('getMDXContent', () => {
        it('should parse MDX file with frontmatter', async () => {
            const result = await getMDXContent('sample-post');

            expect(result.frontmatter).toBeDefined();
            expect(result.frontmatter.title).toBe('Sample Blog Post');
            expect(result.frontmatter.date).toBe('2024-01-15');
            expect(result.frontmatter.description).toBe('A sample blog post demonstrating MDX features');
            expect(result.frontmatter.tags).toEqual(['nextjs', 'mdx', 'typescript']);
            expect(result.frontmatter.author).toBe('Developer');
        });

        it('should return MDX content as string', async () => {
            const result = await getMDXContent('sample-post');

            expect(result.content).toBeDefined();
            expect(typeof result.content).toBe('string');
            expect(result.content.length).toBeGreaterThan(0);
        });

        it('should throw error for non-existent file', async () => {
            await expect(getMDXContent('non-existent-post')).rejects.toThrow();
        });

        it('should parse advanced MDX file with math and code', async () => {
            const result = await getMDXContent('advanced-example');

            expect(result.frontmatter.title).toBe('Advanced MDX Features');
            expect(result.frontmatter.coverImage).toBe('/images/advanced.jpg');
            expect(result.content).toBeDefined();
            expect(typeof result.content).toBe('string');
        });

        it('should parse code-highlight-test file', async () => {
            const result = await getMDXContent('code-highlight-test');

            expect(result.frontmatter.title).toBe('Code Highlighting Test');
            expect(result.frontmatter.tags).toContain('syntax-highlighting');
            expect(result.content).toBeDefined();
            expect(result.content).toContain('```javascript');
            expect(result.content).toContain('```typescript');
            expect(result.content).toContain('```python');
        });
    });
});
