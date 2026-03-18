# Bento Grid 组件文档

## 概述

Bento Grid 是一个现代化的不规则网格布局系统，支持响应式设计和流畅的动画效果。

## 组件

### BentoGrid

容器组件，用于创建响应式网格布局。

**Props:**
- `children`: React.ReactNode - 子元素（通常是 BentoCard 组件）
- `className?`: string - 可选的自定义类名

**响应式断点:**
- 移动端（< 768px）: 1 列
- 平板端（768px - 1023px）: 2 列
- 桌面端（≥ 1024px）: 3 列

### BentoCard

卡片组件，支持不同尺寸和动画效果。

**Props:**
- `title`: string - 卡片标题（必需）
- `description?`: string - 卡片描述（可选）
- `size?`: 'small' | 'medium' | 'large' - 卡片尺寸（默认: 'small'）
- `children?`: React.ReactNode - 卡片内容（可选）
- `className?`: string - 自定义类名（可选）

**尺寸说明:**
- `small`: 1x1 网格单元
- `medium`: 2x1 网格单元（在移动端为 1x1）
- `large`: 2x2 网格单元（在移动端为 1x1，平板端为 2x1）

**动画效果:**
- 进入动画: 从下方淡入滑入（弹性效果）
- 悬停动画: 轻微放大（scale: 1.02）

**样式特性:**
- 毛玻璃效果背景
- 圆角（Squircle）样式
- 细微边框
- 平滑过渡动画

## 使用示例

```tsx
import { BentoGrid, BentoCard } from '@/components/bento-grid';

export default function HomePage() {
  return (
    <BentoGrid>
      {/* 大卡片 - 个人简介 */}
      <BentoCard
        title="关于我"
        description="全栈开发者"
        size="large"
      >
        <p>详细介绍...</p>
      </BentoCard>

      {/* 小卡片 - 技能 */}
      <BentoCard title="技能" size="small">
        <ul>
          <li>React</li>
          <li>Next.js</li>
        </ul>
      </BentoCard>

      {/* 中等卡片 - 项目 */}
      <BentoCard
        title="项目"
        description="我的作品"
        size="medium"
      >
        <div>项目列表...</div>
      </BentoCard>
    </BentoGrid>
  );
}
```

## 设计要求

- **Requirements 8.1**: 响应式网格布局系统
- **Requirements 8.2**: 圆角（Squircle）样式
- **Requirements 8.3**: 细微边框
- **Requirements 8.4**: 支持不同尺寸的网格项目
- **Requirements 11.1**: 页面元素进入动画
- **Requirements 11.2**: 卡片悬停状态动画
- **Requirements 11.3**: 弹性滑入效果
- **Requirements 11.5**: 悬停触发动画

## 测试页面

访问 `/test-bento` 查看 Bento Grid 的实际效果和示例。

## 技术栈

- React 19
- Framer Motion 12
- Tailwind CSS v4
- TypeScript
