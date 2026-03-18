/**
 * 测试页面 - 验证 Tailwind CSS 配置
 * 
 * 此页面用于验证以下配置:
 * - 暗黑模式主题 (Requirements 3.1, 3.3)
 * - 高饱和度霓虹色 (Requirements 3.4)
 * - 圆角样式 (Requirements 3.5)
 * - 毛玻璃效果 (Requirements 3.6, 10.1, 10.2, 10.3)
 */
export default function TestStylesPage() {
    return (
        <div className="min-h-screen bg-background text-foreground p-8">
            <h1 className="text-4xl font-bold mb-8">Tailwind CSS 配置测试</h1>

            {/* 霓虹色测试 */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">霓虹色调色板 (Dopamine Colors)</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="p-6 rounded-[var(--radius-squircle-md)] bg-[var(--neon-pink)] text-white">
                        Neon Pink
                    </div>
                    <div className="p-6 rounded-[var(--radius-squircle-md)] bg-[var(--neon-purple)] text-white">
                        Neon Purple
                    </div>
                    <div className="p-6 rounded-[var(--radius-squircle-md)] bg-[var(--neon-blue)] text-white">
                        Neon Blue
                    </div>
                    <div className="p-6 rounded-[var(--radius-squircle-md)] bg-[var(--neon-cyan)] text-black">
                        Neon Cyan
                    </div>
                    <div className="p-6 rounded-[var(--radius-squircle-md)] bg-[var(--neon-yellow)] text-black">
                        Neon Yellow
                    </div>
                    <div className="p-6 rounded-[var(--radius-squircle-md)] bg-[var(--neon-orange)] text-white">
                        Neon Orange
                    </div>
                </div>
            </section>

            {/* 圆角样式测试 */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">圆角样式 (Squircle)</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-6 bg-[var(--neon-purple)] rounded-[var(--radius-squircle-sm)] text-white">
                        Small (12px)
                    </div>
                    <div className="p-6 bg-[var(--neon-blue)] rounded-[var(--radius-squircle-md)] text-white">
                        Medium (16px)
                    </div>
                    <div className="p-6 bg-[var(--neon-pink)] rounded-[var(--radius-squircle-lg)] text-white">
                        Large (24px)
                    </div>
                    <div className="p-6 bg-[var(--neon-cyan)] rounded-[var(--radius-squircle-xl)] text-black">
                        XLarge (32px)
                    </div>
                </div>
            </section>

            {/* 毛玻璃效果测试 */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">毛玻璃效果 (Glassmorphism)</h2>
                <div className="relative h-64 rounded-[var(--radius-squircle-lg)] overflow-hidden">
                    {/* 背景图案 */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon-purple)] via-[var(--neon-blue)] to-[var(--neon-pink)]" />

                    {/* 毛玻璃卡片 */}
                    <div className="absolute inset-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="glass p-6 rounded-[var(--radius-squircle-md)]">
                            <h3 className="font-semibold mb-2">标准毛玻璃</h3>
                            <p className="text-sm">backdrop-blur: 12px</p>
                        </div>
                        <div className="glass-strong p-6 rounded-[var(--radius-squircle-md)]">
                            <h3 className="font-semibold mb-2">强毛玻璃</h3>
                            <p className="text-sm">backdrop-blur: 16px</p>
                        </div>
                        <div className="glass-subtle p-6 rounded-[var(--radius-squircle-md)]">
                            <h3 className="font-semibold mb-2">微妙毛玻璃</h3>
                            <p className="text-sm">backdrop-blur: 8px</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 暗黑模式测试 */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">暗黑模式 (默认主题)</h2>
                <div className="glass p-6 rounded-[var(--radius-squircle-lg)]">
                    <p className="mb-2">背景色: <code className="bg-[var(--neon-purple)] px-2 py-1 rounded">var(--background) = #0a0a0a</code></p>
                    <p>前景色: <code className="bg-[var(--neon-blue)] px-2 py-1 rounded">var(--foreground) = #ededed</code></p>
                </div>
            </section>
        </div>
    );
}
