'use server';

import { createClient } from '@/lib/supabase/client';

export interface ReactionData {
    postId: string;
    userId: string;
    type: 'like' | 'love' | 'fire';
}

export interface ReactionStats {
    like: number;
    love: number;
    fire: number;
}

/**
 * Add a reaction to a post
 * @param data Reaction data
 * @returns Success status and error message if any
 */
export async function addReaction(data: ReactionData): Promise<{ success: boolean; error?: string }> {
    try {
        const supabase = createClient();

        const { error } = await supabase
            .from('reactions')
            .insert({
                post_id: data.postId,
                user_id: data.userId,
                type: data.type,
            });

        if (error) {
            console.error('Failed to add reaction:', error);
            return { success: false, error: error.message };
        }

        return { success: true };
    } catch (error) {
        console.error('Unexpected error adding reaction:', error);
        return { success: false, error: 'Failed to add reaction' };
    }
}

/**
 * Get reaction statistics for a post
 * @param postId Post ID
 * @returns Reaction counts by type
 */
export async function getReactionStats(postId: string): Promise<ReactionStats> {
    try {
        const supabase = createClient();

        const { data, error } = await supabase
            .from('reactions')
            .select('type')
            .eq('post_id', postId);

        if (error) {
            console.error('Failed to fetch reaction stats:', error);
            return { like: 0, love: 0, fire: 0 };
        }

        // Count reactions by type
        const stats: ReactionStats = { like: 0, love: 0, fire: 0 };
        data?.forEach((reaction) => {
            if (reaction.type in stats) {
                stats[reaction.type as keyof ReactionStats]++;
            }
        });

        return stats;
    } catch (error) {
        console.error('Unexpected error fetching reaction stats:', error);
        return { like: 0, love: 0, fire: 0 };
    }
}

/**
 * Remove a reaction from a post
 * @param data Reaction data
 * @returns Success status and error message if any
 */
export async function removeReaction(data: ReactionData): Promise<{ success: boolean; error?: string }> {
    try {
        const supabase = createClient();

        const { error } = await supabase
            .from('reactions')
            .delete()
            .eq('post_id', data.postId)
            .eq('user_id', data.userId)
            .eq('type', data.type);

        if (error) {
            console.error('Failed to remove reaction:', error);
            return { success: false, error: error.message };
        }

        return { success: true };
    } catch (error) {
        console.error('Unexpected error removing reaction:', error);
        return { success: false, error: 'Failed to remove reaction' };
    }
}
