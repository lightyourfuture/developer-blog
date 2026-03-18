import { BentoGrid, BentoCard } from '@/components/bento-grid';

/**
 * Bento Grid 测试页面
 * 用于验证 BentoGrid 和 BentoCard 组件的功能
 */
export default function TestBentoPage() {
    return (
        <main className="min-h-screen p-8 bg-background">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-neon-cyan">
                    Bento Grid 布局测试
                </h1>

                <BentoGrid>
                    {/* Large card - 个人简介 */}
                    <BentoCard
                        title="关于我"
                        description="全栈开发者，专注于现代 Web 技术"
                        size="large"
                    >
                        <div className="space-y-4">
                            <p className="text-foreground/80">
                                我是一名热爱技术的开发者，专注于构建优雅且高性能的 Web 应用。
                            </p>
                            <div className="flex gap-2 flex-wrap">
                                <span className="px-3 py-1 bg-neon-purple/20 text-neon-purple rounded-full text-sm">
                                    React
                                </span>
                                <span className="px-3 py-1 bg-neon-blue/20 text-neon-blue rounded-full text-sm">
                                    Next.js
                                </span>
                                <span className="px-3 py-1 bg-neon-cyan/20 text-neon-cyan rounded-full text-sm">
                                    TypeScript
                                </span>
                            </div>
                        </div>
                    </BentoCard>

                    {/* Small card - 技能 */}
                    <BentoCard title="技能" size="small">
                        <ul className="space-y-2 text-foreground/80">
                            <li>• Frontend Development</li>
                            <li>• Backend Development</li>
                            <li>• UI/UX Design</li>
                        </ul>
                    </BentoCard>

                    {/* Small card - 经验 */}
                    <BentoCard title="经验" size="small">
                        <p className="text-foreground/80">5+ 年开发经验</p>
                    </BentoCard>

                    {/* Medium card - 项目 */}
                    <BentoCard
                        title="精选项目"
                        description="我最近的一些作品"
                        size="medium"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-neon-pink/10 rounded-lg">
                                <h4 className="font-semibold text-neon-pink">项目 A</h4>
                                <p className="text-sm text-foreground/70">Web 应用</p>
                            </div>
                            <div className="p-4 bg-neon-orange/10 rounded-lg">
                                <h4 className="font-semibold text-neon-orange">项目 B</h4>
                                <p className="text-sm text-foreground/70">移动应用</p>
                            </div>
                        </div>
                    </BentoCard>

                    {/* Small card - 联系方式 */}
                    <BentoCard title="联系我" size="small">
                        <div className="space-y-2 text-foreground/80">
                            <p>📧 Email</p>
                            <p>💼 LinkedIn</p>
                            <p>🐙 GitHub</p>
                        </div>
                    </BentoCard>
                </BentoGrid>
            </div>
        </main>
    );
}
