# 📝 更新日志

所有重要的项目变更都会记录在这个文件中。

格式基于 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.0.0/)，
版本号遵循 [语义化版本](https://semver.org/lang/zh-CN/)。

---

## [1.0.0] - 2024-01-20

### 🎉 首次发布

这是 Developer Portfolio Blog 的第一个正式版本！

### ✨ 新增功能

#### 基础架构

- 使用 Next.js 15 + React 19 + TypeScript 构建
- 集成 Tailwind CSS v4 样式系统
- 配置 ESLint 和代码规范

#### 设计系统

- 实现 Bento Grid 布局系统
- 暗黑模式主题（默认）
- 霓虹色调色板（6 种强调色）
- 毛玻璃效果（Glassmorphism）
- Squircle 圆角设计

#### 内容管理

- MDX 内容解析和渲染
- 支持 20+ 编程语言的代码高亮（Shiki）
- 数学公式支持（KaTeX）
- Markdown 表格支持（remark-gfm）
- 完整的中文内容支持
- 文章元数据（标题、日期、标签、作者等）

#### 页面和路由

- 首页（Bento Grid 布局）
- 博客列表页
- 博客文章详情页
- 动态路由和静态生成

#### 互动功能

- Giscus 评论系统（基于 GitHub Discussions）
- 反应按钮（点赞、喜欢、火）
- 匿名点赞（localStorage 存储）
- Supabase 数据库集成

#### 响应式设计

- 移动端优化（320px+）
- 平板端适配（768px+）
- 桌面端体验（1024px+）
- 代码块横向滚动
- 表格横向滚动
- 触摸友好的交互

#### SEO 优化

- 完整的 metadata 配置
- Open Graph 标签
- 结构化数据
- 语义化 HTML

#### 部署和运维

- Vercel 自动部署
- 环境变量配置
- GitHub 集成
- 免费域名（.vercel.app）

### 🐛 问题修复

- 修复代码块在移动端溢出的问题
- 修复表格在移动端显示不正确的问题
- 修复点赞功能需要登录的问题
- 修复长标题在移动端换行的问题
- 修复响应式间距不一致的问题

### 🎨 样式改进

- 优化移动端代码块字体大小
- 优化表格边框和背景色
- 优化卡片悬停效果
- 优化按钮触摸区域（44px 最小尺寸）
- 优化文本可读性

### 📚 文档

- 创建 README.md
- 创建 ROADMAP.md（项目路线图）
- 创建 CHANGELOG.md（更新日志）
- 创建部署指南
- 创建内容创作指南

### 🔧 技术栈

- **框架：** Next.js 15.1.0
- **UI 库：** React 19.0.0
- **语言：** TypeScript 5.x
- **样式：** Tailwind CSS 4.0.0
- **内容：** MDX, remark, rehype
- **代码高亮：** Shiki 1.24.2
- **数学公式：** KaTeX 0.16.11
- **数据库：** Supabase
- **评论：** Giscus
- **部署：** Vercel
- **动画：** Framer Motion 11.15.0
- **平滑滚动：** Lenis 1.1.17

### 📦 依赖包

```json
{
  "next": "^15.1.0",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "typescript": "^5",
  "tailwindcss": "^4.0.0",
  "framer-motion": "^11.15.0",
  "@lenis/react": "^1.1.17",
  "next-mdx-remote": "^5.0.0",
  "shiki": "^1.24.2",
  "rehype-katex": "^7.0.1",
  "remark-math": "^6.0.0",
  "remark-gfm": "^4.0.0",
  "@supabase/supabase-js": "^2.49.1"
}
```

### 🎯 性能指标

- **首次内容绘制（FCP）：** < 1.5s
- **最大内容绘制（LCP）：** < 2.5s
- **累积布局偏移（CLS）：** < 0.1
- **首次输入延迟（FID）：** < 100ms
- **Lighthouse 分数：** 90+

### 🌐 浏览器支持

- Chrome/Edge（最新版本）
- Firefox（最新版本）
- Safari（最新版本）
- iOS Safari（iOS 14+）
- Chrome Android（最新版本）

### 📱 设备支持

- 手机（320px - 767px）
- 平板（768px - 1023px）
- 桌面（1024px+）
- 超宽屏（1920px+）

### 🙏 致谢

感谢以下开源项目：

- Next.js 团队
- React 团队
- Tailwind CSS 团队
- Vercel 团队
- Supabase 团队
- 所有依赖包的维护者

---

## [未发布]

### 计划中的功能

查看 [ROADMAP.md](./ROADMAP.md) 了解未来版本的规划。

---

**格式说明：**

- `新增功能` - 新增的功能
- `问题修复` - 修复的 bug
- `样式改进` - UI/UX 改进
- `性能优化` - 性能提升
- `文档` - 文档更新
- `依赖更新` - 依赖包更新
- `破坏性变更` - 不兼容的变更
- `废弃` - 即将移除的功能
- `移除` - 已移除的功能
- `安全` - 安全相关的修复

---

**版本号说明：**

- **主版本号（Major）：** 不兼容的 API 变更
- **次版本号（Minor）：** 向下兼容的功能新增
- **修订号（Patch）：** 向下兼容的问题修复

---

**最后更新：** 2024-01-20
