import { BentoGrid, BentoCard } from '@/components/bento-grid';
import { Code2, Rocket, Mail, Github, Linkedin, BookOpen } from 'lucide-react';
import Link from 'next/link';

/**
 * 主页组件
 * 使用 Bento Grid 布局展示个人作品集
 * Requirements: 8.1, 8.4, 9.1, 9.2, 9.3, 9.4, 10.1, 10.2, 10.3, 10.4, 10.5
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        <BentoGrid>
          {/* 左侧大卡片 - 个人简介 */}
          <BentoCard
            title="你好，我是开发者 👋"
            description="全栈工程师 | 开源爱好者 | 技术博主"
            size="large"
            className="bg-gradient-to-br from-neon-purple/20 to-neon-blue/20"
          >
            <div className="flex flex-col gap-4 mt-4">
              <p className="text-foreground/80 leading-relaxed">
                热衷于构建优雅的用户界面和高性能的 Web 应用。
                专注于 React、Next.js、TypeScript 和现代前端技术栈。
              </p>
              <p className="text-foreground/80 leading-relaxed">
                相信代码不仅是工具，更是艺术。追求极致的用户体验和代码质量。
              </p>
              <div className="flex gap-3 mt-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-[var(--radius-squircle-sm)] glass-subtle hover:glass transition-all duration-300 hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-neon-cyan" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-[var(--radius-squircle-sm)] glass-subtle hover:glass transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-neon-blue" />
                </a>
                <a
                  href="mailto:hello@example.com"
                  className="p-3 rounded-[var(--radius-squircle-sm)] glass-subtle hover:glass transition-all duration-300 hover:scale-110"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 text-neon-pink" />
                </a>
              </div>
            </div>
          </BentoCard>

          {/* 右侧小卡片 - 技能 */}
          <BentoCard
            title="核心技能"
            size="small"
            className="bg-gradient-to-br from-neon-cyan/10 to-neon-blue/10"
          >
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-neon-cyan" />
                <span className="text-sm text-foreground/70">React & Next.js</span>
              </div>
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-neon-blue" />
                <span className="text-sm text-foreground/70">TypeScript</span>
              </div>
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-neon-purple" />
                <span className="text-sm text-foreground/70">Tailwind CSS</span>
              </div>
            </div>
          </BentoCard>

          {/* 右侧小卡片 - 项目 */}
          <BentoCard
            title="精选项目"
            size="small"
            className="bg-gradient-to-br from-neon-pink/10 to-neon-orange/10"
          >
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex items-center gap-2">
                <Rocket className="w-4 h-4 text-neon-pink" />
                <span className="text-sm text-foreground/70">开发者作品集</span>
              </div>
              <div className="flex items-center gap-2">
                <Rocket className="w-4 h-4 text-neon-orange" />
                <span className="text-sm text-foreground/70">博客系统</span>
              </div>
              <p className="text-xs text-foreground/50 mt-2">
                更多项目即将上线...
              </p>
            </div>
          </BentoCard>

          {/* 中等卡片 - 博客 */}
          <Link href="/blog" className="block">
            <BentoCard
              title="最新博客"
              description="分享技术见解和开发经验"
              size="medium"
              className="bg-gradient-to-br from-neon-yellow/10 to-neon-orange/10 cursor-pointer hover:scale-[1.02] transition-transform"
            >
              <div className="flex items-center gap-3 mt-4">
                <BookOpen className="w-6 h-6 text-neon-yellow" />
                <div>
                  <p className="text-sm font-medium text-foreground/90">
                    Next.js 15 新特性解析
                  </p>
                  <p className="text-xs text-foreground/50 mt-1">
                    探索 App Router 和 React Server Components
                  </p>
                </div>
              </div>
            </BentoCard>
          </Link>

          {/* 小卡片 - 联系方式 */}
          <BentoCard
            title="联系我"
            size="small"
            className="bg-gradient-to-br from-neon-purple/10 to-neon-pink/10"
          >
            <div className="flex flex-col gap-2 mt-2">
              <p className="text-sm text-foreground/70">
                欢迎交流合作
              </p>
              <a
                href="mailto:hello@example.com"
                className="text-sm text-neon-cyan hover:text-neon-blue transition-colors"
              >
                hello@example.com
              </a>
            </div>
          </BentoCard>
        </BentoGrid>
      </div>
    </div>
  );
}
