# 🎨 主页自定义指南

## 主页结构

你的主页使用 **Bento Grid** 布局，包含多个卡片。

## 如何修改主页

### 1. 打开主页文件

编辑文件：`app/page.tsx`

### 2. 修改个人简介

找到这部分代码（大约在第 15-30 行）：

```typescript
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
```

**修改内容：**
- `title`: 你的问候语
- `description`: 你的职位/标签
- `<p>` 标签内的文字：你的个人介绍

### 3. 修改社交链接

找到社交媒体图标部分：

```typescript
<a
  href="https://github.com"  // 改成你的 GitHub 地址
  target="_blank"
  rel="noopener noreferrer"
>
  <Github className="w-5 h-5 text-neon-cyan" />
</a>

<a
  href="https://linkedin.com"  // 改成你的 LinkedIn 地址
  target="_blank"
  rel="noopener noreferrer"
>
  <Linkedin className="w-5 h-5 text-neon-blue" />
</a>

<a
  href="mailto:hello@example.com"  // 改成你的邮箱
>
  <Mail className="w-5 h-5 text-neon-pink" />
</a>
```

### 4. 修改技能卡片

找到技能卡片部分：

```typescript
<BentoCard
  title="技术栈"
  description="我擅长的技术"
  size="small"
  icon={<Code2 className="w-6 h-6 text-neon-cyan" />}
>
  <div className="flex flex-wrap gap-2 mt-4">
    <span className="px-3 py-1 rounded-full glass-subtle text-sm">
      React
    </span>
    <span className="px-3 py-1 rounded-full glass-subtle text-sm">
      Next.js
    </span>
    {/* 添加更多技能标签 */}
  </div>
</BentoCard>
```

**添加你自己的技能标签！**

### 5. 修改项目卡片

找到项目卡片部分：

```typescript
<BentoCard
  title="精选项目"
  description="我的开源作品"
  size="small"
  icon={<Rocket className="w-6 h-6 text-neon-pink" />}
>
  <div className="flex flex-col gap-2 mt-4">
    <a href="#" className="text-neon-cyan hover:underline">
      项目 1
    </a>
    <a href="#" className="text-neon-cyan hover:underline">
      项目 2
    </a>
  </div>
</BentoCard>
```

**添加你的项目链接！**

## 卡片尺寸

Bento Grid 支持三种卡片尺寸：

- `size="small"` - 小卡片（1x1）
- `size="medium"` - 中等卡片（2x1）
- `size="large"` - 大卡片（2x2）

## 添加新卡片

你可以添加新的卡片：

```typescript
<BentoCard
  title="新卡片标题"
  description="卡片描述"
  size="small"
  icon={<YourIcon className="w-6 h-6 text-neon-blue" />}
>
  <div className="mt-4">
    {/* 卡片内容 */}
  </div>
</BentoCard>
```

## 可用图标

从 `lucide-react` 导入图标：

```typescript
import { 
  Code2,      // 代码
  Rocket,     // 火箭
  Mail,       // 邮件
  Github,     // GitHub
  Linkedin,   // LinkedIn
  BookOpen,   // 书本
  Heart,      // 心形
  Star,       // 星星
  Zap,        // 闪电
  Coffee,     // 咖啡
  // ... 更多图标
} from 'lucide-react';
```

查看所有图标：https://lucide.dev/icons/

## 颜色主题

可用的霓虹色：

- `text-neon-cyan` - 青色
- `text-neon-pink` - 粉色
- `text-neon-purple` - 紫色
- `text-neon-blue` - 蓝色
- `text-neon-green` - 绿色

## 完整示例

这是一个自定义的主页示例：

```typescript
export default function Home() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        <BentoGrid>
          {/* 个人简介 - 大卡片 */}
          <BentoCard
            title="你好，我是张三 👋"
            description="前端工程师 | React 爱好者"
            size="large"
            className="bg-gradient-to-br from-neon-purple/20 to-neon-blue/20"
          >
            <div className="flex flex-col gap-4 mt-4">
              <p className="text-foreground/80 leading-relaxed">
                我是一名热爱编程的前端开发者，专注于 React 和 Next.js。
              </p>
              <div className="flex gap-3 mt-2">
                <a href="https://github.com/yourusername">
                  <Github className="w-5 h-5 text-neon-cyan" />
                </a>
                <a href="mailto:your@email.com">
                  <Mail className="w-5 h-5 text-neon-pink" />
                </a>
              </div>
            </div>
          </BentoCard>

          {/* 技能 - 小卡片 */}
          <BentoCard
            title="技能"
            description="我的技术栈"
            size="small"
            icon={<Code2 className="w-6 h-6 text-neon-cyan" />}
          >
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 rounded-full glass-subtle text-sm">
                JavaScript
              </span>
              <span className="px-3 py-1 rounded-full glass-subtle text-sm">
                TypeScript
              </span>
              <span className="px-3 py-1 rounded-full glass-subtle text-sm">
                React
              </span>
            </div>
          </BentoCard>

          {/* 博客 - 小卡片 */}
          <BentoCard
            title="博客"
            description="分享我的学习笔记"
            size="small"
            icon={<BookOpen className="w-6 h-6 text-neon-pink" />}
            href="/blog"
          >
            <p className="text-foreground/60 text-sm mt-4">
              点击查看我的技术文章
            </p>
          </BentoCard>

          {/* 项目 - 中等卡片 */}
          <BentoCard
            title="项目"
            description="我的作品集"
            size="medium"
            icon={<Rocket className="w-6 h-6 text-neon-purple" />}
          >
            <div className="flex flex-col gap-3 mt-4">
              <a 
                href="https://github.com/yourusername/project1"
                className="text-neon-cyan hover:underline"
              >
                📦 项目 1 - 一个很酷的项目
              </a>
              <a 
                href="https://github.com/yourusername/project2"
                className="text-neon-cyan hover:underline"
              >
                🚀 项目 2 - 另一个项目
              </a>
            </div>
          </BentoCard>
        </BentoGrid>
      </div>
    </div>
  );
}
```

## 保存和查看

1. 修改 `app/page.tsx`
2. 按 **Ctrl+S** 保存
3. 浏览器会自动刷新
4. 访问 http://localhost:3000 查看效果

## 提示

- 🎨 尝试不同的卡片布局
- 🌈 使用不同的霓虹色
- ✨ 添加你自己的内容
- 💡 发挥创意！

祝你自定义愉快！🎉
