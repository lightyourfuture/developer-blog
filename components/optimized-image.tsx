import Image, { ImageProps } from 'next/image';

/**
 * Optimized Image Component
 * Requirements: 15.2
 * 
 * Wrapper around Next.js Image component with optimized defaults
 */
export function OptimizedImage(props: ImageProps) {
    return (
        <Image
            {...props}
            loading={props.loading || 'lazy'}
            quality={props.quality || 85}
            placeholder={props.placeholder || 'blur'}
            blurDataURL={props.blurDataURL || 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='}
        />
    );
}
