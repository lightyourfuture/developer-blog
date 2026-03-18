'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

/**
 * BentoGrid 组件
 * 实现响应式网格布局系统
 * Requirements: 8.1, 8.2, 8.3, 8.4
 */
interface BentoGridProps {
    children: React.ReactNode;
    className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
    return (
        <div
            className={cn(
                // 移动端：单列布局 (Requirements 14.1)
                'grid grid-cols-1',
                // 平板端：双列布局 (Requirements 14.2)
                'md:grid-cols-2',
                // 桌面端：三列布局 (Requirements 14.3)
                'lg:grid-cols-3',
                // 响应式间距
                'gap-3 sm:gap-4 lg:gap-6',
                'w-full',
                className
            )}
        >
            {children}
        </div>
    );
}

/**
 * BentoCard 组件
 * 支持不同尺寸的卡片 (small, medium, large)
 * 应用圆角和边框样式
 * Requirements: 8.1, 8.2, 8.3, 8.4, 11.1, 11.2, 11.3, 11.5
 */
interface BentoCardProps {
    title: string;
    description?: string;
    size?: 'small' | 'medium' | 'large';
    children?: React.ReactNode;
    className?: string;
}

export function BentoCard({
    title,
    description,
    size = 'small',
    children,
    className,
}: BentoCardProps) {
    // 根据尺寸设置网格跨度 (响应式优化)
    // Requirements: 14.1, 14.2, 14.3
    const sizeClasses = {
        small: 'col-span-1 row-span-1',
        medium: 'col-span-1 sm:col-span-2 md:col-span-2 row-span-1',
        large: 'col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 row-span-2',
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                type: 'spring',
                stiffness: 100,
                damping: 15,
                duration: 0.6,
            }}
            whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
            }}
            className={cn(
                'glass',
                'rounded-[var(--radius-squircle-lg)]',
                'border border-[var(--glass-border)]',
                // 响应式内边距 (Requirements 14.1, 14.2, 14.3)
                'p-4 sm:p-5 md:p-6',
                'flex flex-col',
                'transition-all duration-300',
                // 确保触摸目标尺寸 (Requirements 14.5)
                'touch-target',
                sizeClasses[size],
                className
            )}
        >
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-foreground">{title}</h3>
            {description && (
                <p className="text-xs sm:text-sm text-foreground/70 mb-4">{description}</p>
            )}
            {children && <div className="flex-1">{children}</div>}
        </motion.div>
    );
}
