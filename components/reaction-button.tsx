'use client';

import { useState, useEffect } from 'react';
import { Heart, Flame, Sparkles } from 'lucide-react';
import { addReaction, removeReaction, getReactionStats, type ReactionStats } from '@/app/actions/reactions';

interface ReactionButtonProps {
    postId: string;
    userId?: string;
    initialStats?: ReactionStats;
}

const reactionIcons = {
    like: Heart,
    love: Sparkles,
    fire: Flame,
};

const reactionLabels = {
    like: 'Like',
    love: 'Love',
    fire: 'Fire',
};

// Generate a unique user ID for anonymous users
function getAnonymousUserId(): string {
    const storageKey = 'blog_anonymous_user_id';
    let userId = localStorage.getItem(storageKey);

    if (!userId) {
        userId = `anon_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        localStorage.setItem(storageKey, userId);
    }

    return userId;
}

// Get user's reaction state from localStorage
function getUserReaction(postId: string): keyof ReactionStats | null {
    const storageKey = `reaction_${postId}`;
    return localStorage.getItem(storageKey) as keyof ReactionStats | null;
}

// Save user's reaction state to localStorage
function setUserReaction(postId: string, type: keyof ReactionStats | null) {
    const storageKey = `reaction_${postId}`;
    if (type) {
        localStorage.setItem(storageKey, type);
    } else {
        localStorage.removeItem(storageKey);
    }
}

export function ReactionButton({ postId, userId: providedUserId, initialStats }: ReactionButtonProps) {
    const [stats, setStats] = useState<ReactionStats>(initialStats || { like: 0, love: 0, fire: 0 });
    const [activeReaction, setActiveReaction] = useState<keyof ReactionStats | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // Load initial stats if not provided
        if (!initialStats) {
            getReactionStats(postId).then(setStats);
        }

        // Load user's previous reaction from localStorage
        const savedReaction = getUserReaction(postId);
        if (savedReaction) {
            setActiveReaction(savedReaction);
        }
    }, [postId, initialStats]);

    const handleReaction = async (type: keyof ReactionStats) => {
        // Use provided userId or generate anonymous userId
        const userId = providedUserId || getAnonymousUserId();

        setIsLoading(true);

        try {
            // Optimistic update
            const isRemoving = activeReaction === type;
            const newStats = { ...stats };

            if (isRemoving) {
                newStats[type] = Math.max(0, newStats[type] - 1);
                setActiveReaction(null);
                setUserReaction(postId, null);
            } else {
                // Remove previous reaction if exists
                if (activeReaction) {
                    newStats[activeReaction] = Math.max(0, newStats[activeReaction] - 1);
                }
                newStats[type] = newStats[type] + 1;
                setActiveReaction(type);
                setUserReaction(postId, type);
            }

            setStats(newStats);

            // Perform actual operation
            if (isRemoving) {
                await removeReaction({ postId, userId, type });
            } else {
                // Remove previous reaction first
                if (activeReaction) {
                    await removeReaction({ postId, userId, type: activeReaction });
                }
                await addReaction({ postId, userId, type });
            }

            // Refresh stats from server
            const updatedStats = await getReactionStats(postId);
            setStats(updatedStats);
        } catch (error) {
            console.error('Failed to update reaction:', error);
            // Revert optimistic update on error
            if (initialStats) {
                setStats(initialStats);
            }
            // Revert localStorage on error
            const savedReaction = getUserReaction(postId);
            setActiveReaction(savedReaction);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex items-center gap-2">
            {(Object.keys(reactionIcons) as Array<keyof ReactionStats>).map((type) => {
                const Icon = reactionIcons[type];
                const isActive = activeReaction === type;
                const count = stats[type];

                return (
                    <button
                        key={type}
                        onClick={() => handleReaction(type)}
                        disabled={isLoading}
                        className={`
              flex items-center gap-1.5 px-3 py-2 rounded-lg
              border transition-all duration-200
              ${isActive
                                ? 'bg-purple-500/20 border-purple-500 text-purple-400'
                                : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:border-white/20'
                            }
              disabled:opacity-50 disabled:cursor-not-allowed
              min-w-[44px] min-h-[44px]
            `}
                        aria-label={`${reactionLabels[type]} this post`}
                    >
                        <Icon className={`w-4 h-4 ${isActive ? 'fill-current' : ''}`} />
                        {count > 0 && <span className="text-sm font-medium">{count}</span>}
                    </button>
                );
            })}
        </div>
    );
}
