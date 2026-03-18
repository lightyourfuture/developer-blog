'use client';

import Giscus from '@giscus/react';
import { useEffect, useState } from 'react';

interface GiscusCommentsProps {
    repo: string;
    repoId: string;
    category: string;
    categoryId: string;
    mapping?: 'pathname' | 'url' | 'title' | 'og:title';
    theme?: string;
}

/**
 * Giscus Comments Component
 * Requirements: 12.1, 12.3, 12.4
 * 
 * Integrates GitHub Discussions-based comments using Giscus
 */
export function GiscusComments({
    repo,
    repoId,
    category,
    categoryId,
    mapping = 'pathname',
    theme = 'dark',
}: GiscusCommentsProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="flex items-center justify-center py-8">
                <div className="text-gray-400">Loading comments...</div>
            </div>
        );
    }

    return (
        <div className="giscus-container">
            <Giscus
                repo={repo as `${string}/${string}`}
                repoId={repoId}
                category={category}
                categoryId={categoryId}
                mapping={mapping}
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="top"
                theme={theme}
                lang="en"
                loading="lazy"
            />
        </div>
    );
}

/**
 * Error Boundary Fallback for Giscus
 */
export function CommentErrorFallback() {
    return (
        <div className="glass rounded-[var(--radius-squircle-lg)] p-6 text-center">
            <p className="text-gray-400 mb-4">
                Comments are temporarily unavailable. Please try again later.
            </p>
            <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-neon-purple/20 text-neon-purple border border-neon-purple/30 rounded-lg hover:bg-neon-purple/30 transition-colors"
            >
                Retry
            </button>
        </div>
    );
}
