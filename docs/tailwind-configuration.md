# Tailwind CSS v4 配置文档

## 概述

本项目使用 Tailwind CSS v4 作为样式框架，配置了暗黑模式主题、高饱和度霓虹色、圆角样式和毛玻璃效果。

## 配置文件

### 主要配置文件

1. **tailwind.config.ts** - Tailwind 配置文件
2. **app/globals.css** - 全局样式和自定义主题
3. **components.json** - shadcn/ui 配置

## 主题配置

### 暗黑模式 (Requirements 3.1, 3.3)

暗黑模式为默认主题，使用深邃的背景色：

```css
--background: #0a0a0a;
--foreground: #ededed;
```

### 霓虹色调色板 (Requirements 3.4)

高饱和度的 Dopamine Colors：

| 颜色名称 | CSS 变量 | 十六进制值 | 用途 |
|---------|---------|-----------|------|
| Neon Pink | `--neon-pink` | `#ff006e` | 强调色、CTA 按钮 |
| Neon Purple | `--neon-purple` | `#8338ec` | 主要品牌色 |
| Neon Blue | `--neon-blue` | `#3a86ff` | 链接、信息提示 |
| Neon Cyan | `--neon-cyan` | `#06ffa5` | 成功状态 |
| Neon Yellow | `--neon-yellow` | `#ffbe0b` | 警告提示 |
| Neon Orange | `--neon-orange` | `#fb5607` | 错误提示 |

**使用方法：**

```tsx
// 使用 CSS 变量
<div className="bg-[var(--neon-pink)] text-white">
  Hello World
</div>

// 使用 Tailwind 颜色类（需要在 @theme 中定义）
<div className="bg-neon-purple text-white">
  Hello World
</div>
```

### 圆角样式 (Requirements 3.5)

Squircle 圆角样式，提供四种尺寸：

| 尺寸 | CSS 变量 | 值 | 用途 |
|-----|---------|---|------|
| Small | `--radius-squircle-sm` | `12px` | 小按钮、标签 |
| Medium | `--radius-squircle-md` | `16px` | 卡片、输入框 |
| Large | `--radius-squircle-lg` | `24px` | 大卡片、模态框 |
| XLarge | `--radius-squircle-xl` | `32px` | 特大容器 |

**使用方法：**

```tsx
<div className="rounded-[var(--radius-squircle-md)]">
  Card Content
</div>
```

### 毛玻璃效果 (Requirements 3.6, 10.1, 10.2, 10.3)

三种毛玻璃效果工具类：

| 类名 | 背景透明度 | 模糊度 | 边框 | 用途 |
|-----|-----------|--------|------|------|
| `.glass` | 5% | 12px | 10% | 标准毛玻璃 |
| `.glass-strong` | 10% | 16px | 15% | 强毛玻璃（更不透明） |
| `.glass-subtle` | 3% | 8px | 5% | 微妙毛玻璃（更透明） |

**使用方法：**

```tsx
<div className="glass p-6 rounded-[var(--radius-squircle-lg)]">
  <h2>毛玻璃卡片</h2>
  <p>内容清晰可读</p>
</div>
```

## shadcn/ui 配置

### 配置详情

- **样式风格**: New York
- **组件库**: Radix UI
- **图标库**: Lucide React
- **CSS 变量**: 启用
- **TypeScript**: 启用
- **React Server Components**: 启用

### 组件路径别名

```json
{
  "components": "@/components",
  "utils": "@/lib/utils",
  "ui": "@/components/ui",
  "lib": "@/lib",
  "hooks": "@/hooks"
}
```

### 安装组件

使用以下命令安装 shadcn/ui 组件：

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
# ... 其他组件
```

## 测试页面

访问 `/test-styles` 查看所有样式配置的实际效果：

- 霓虹色调色板展示
- 圆角样式展示
- 毛玻璃效果展示
- 暗黑模式验证

## 最佳实践

### 1. 颜色使用

- **主要内容**: 使用 `--foreground` 确保可读性
- **强调元素**: 使用霓虹色吸引注意力
- **背景**: 使用 `--background` 保持一致性

### 2. 圆角使用

- **小元素** (按钮、标签): `--radius-squircle-sm`
- **中等元素** (卡片、输入框): `--radius-squircle-md`
- **大元素** (容器、模态框): `--radius-squircle-lg`
- **特大元素** (页面区块): `--radius-squircle-xl`

### 3. 毛玻璃效果使用

- **导航栏**: `.glass` - 标准效果
- **模态框**: `.glass-strong` - 更强的分离感
- **悬浮提示**: `.glass-subtle` - 微妙的层次感

### 4. 可访问性

- 确保文本对比度满足 WCAG AA 标准 (4.5:1)
- 在毛玻璃背景上使用足够的文本对比度
- 为交互元素提供清晰的视觉反馈

## 依赖包

```json
{
  "dependencies": {
    "clsx": "^2.x",
    "tailwind-merge": "^2.x",
    "lucide-react": "^0.577.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "tailwindcss": "^4"
  }
}
```

## 相关需求

- **Requirement 3.1**: Tailwind CSS v4 初始化
- **Requirement 3.2**: shadcn/ui 配置
- **Requirement 3.3**: 暗黑模式为默认主题
- **Requirement 3.4**: 高饱和度霓虹强调色
- **Requirement 3.5**: 圆角样式定义
- **Requirement 3.6**: 毛玻璃效果工具类
- **Requirement 10.1**: 半透明背景效果
- **Requirement 10.2**: 背景模糊滤镜
- **Requirement 10.3**: 细微边框

## 故障排除

### 样式不生效

1. 确保 `@import "tailwindcss"` 在 `globals.css` 顶部
2. 检查 `tailwind.config.ts` 的 `content` 路径是否正确
3. 重启开发服务器

### 毛玻璃效果不显示

1. 确保父元素有背景或内容
2. 检查浏览器是否支持 `backdrop-filter`
3. 使用 `-webkit-backdrop-filter` 兼容 Safari

### 自定义颜色无法使用

1. 使用 `bg-[var(--neon-pink)]` 语法
2. 或在 `@theme` 中定义 Tailwind 颜色类
3. 确保 CSS 变量在 `:root` 中定义

## 下一步

- [ ] 安装常用的 shadcn/ui 组件
- [ ] 创建自定义组件库
- [ ] 实现响应式断点
- [ ] 添加动画过渡效果
