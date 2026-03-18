'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

/**
 * Page Transition Component
 * Requirements: 11.1
 * 
 * Provides smooth page transitions using Framer Motion
 */
interface PageTransitionProps {
    children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 20,
                    duration: 0.4,
                }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}

/**
 * Fade In Animation Component
 * Requirements: 11.1, 11.3
 */
interface FadeInProps {
    children: ReactNode;
    delay?: number;
    className?: string;
}

export function FadeIn({ children, delay = 0, className }: FadeInProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                delay,
                ease: 'easeOut',
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

/**
 * Stagger Children Animation Component
 * Requirements: 11.1, 11.3
 */
interface StaggerChildrenProps {
    children: ReactNode;
    className?: string;
}

export function StaggerChildren({ children, className }: StaggerChildrenProps) {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.1,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

/**
 * Hover Scale Animation Component
 * Requirements: 11.2, 11.4, 11.5
 */
interface HoverScaleProps {
    children: ReactNode;
    scale?: number;
    className?: string;
}

export function HoverScale({ children, scale = 1.05, className }: HoverScaleProps) {
    return (
        <motion.div
            whileHover={{ scale }}
            whileTap={{ scale: scale * 0.95 }}
            transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
