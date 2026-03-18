'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

interface SmoothScrollProviderProps {
    children: React.ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
    useEffect(() => {
        // Initialize Lenis smooth scroll
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            smoothWheel: true,
        });

        // Update Lenis on each animation frame
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Cleanup on unmount to prevent memory leaks
        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}
