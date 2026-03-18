# Implementation Plan: Developer Portfolio Blog

## Overview

本实现计划将 Next.js 15 开发者博客与作品集网站的设计转化为可执行的编码任务。系统采用 App Router 架构,集成 MDX 内容管理、Supabase 数据库、Giscus 评论系统,并提供丰富的视觉效果。

实现分为五个阶段:

1. 项目初始化与基础设施搭建
2. 主页视觉与 Bento Grid
3. Markdown 解析引擎
4. Supabase 数据库集成
5. Giscus 与细节完善

## Tasks

### 阶段一: 项目初始化与基础设施搭建

- [x] 1. 创建 Next.js 15 项目并配置基础依赖
  - [x] 1.1 初始化 Next.js 15 项目
    - 使用 `npx create-next-app@latest` 创建项目
    - 选择 App Router、TypeScript、Tailwind CSS
    - _Requirements: 1.1, 1.2, 1.3_

  - [x] 1.2 安装核心依赖包
    - 安装 Framer Motion: `npm install framer-motion`
    - 安装 Lenis: `npm install lenis`
    - 安装 Lucide Icons: `npm install lucide-react`
    - _Requirements: 2.3_

  - [x] 1.3 安装 MDX 和代码高亮依赖
    - 安装 next-mdx-remote: `npm install next-mdx-remote`
    - 安装 Shiki: `npm install shiki`
    - 安装数学公式支持: `npm install remark-math rehype-katex`
    - _Requirements: 2.5, 2.6, 2.7_

  - [x] 1.4 安装 Supabase 和 Giscus 依赖
    - 安装 Supabase 客户端: `npm install @supabase/supabase-js`
    - 安装 Giscus React 组件: `npm install @giscus/react`
    - _Requirements: 2.4, 2.8_

- [x] 2. 配置 Tailwind CSS 和 shadcn/ui
  - [x] 2.1 配置 Tailwind CSS v4
    - 创建 `tailwind.config.ts` 配置文件
    - 配置暗黑模式为默认主题
    - 定义自定义颜色(高饱和度霓虹色)
    - 定义圆角样式变量
    - _Requirements: 3.1, 3.3, 3.4, 3.5_

  - [x] 2.2 初始化 shadcn/ui
    - 运行 `npx shadcn@latest init`
    - 配置组件路径和样式
    - _Requirements: 3.2_

  - [x] 2.3 创建毛玻璃效果工具类
    - 在 Tailwind 配置中添加自定义工具类
    - 定义 backdrop-blur 和半透明背景样式
    - _Requirements: 3.6, 10.1, 10.2, 10.3_

  - [ ]* 2.4 编写 Tailwind 配置的单元测试
    - 验证自定义颜色和样式类正确生成
    - _Requirements: 3.7_

- [x] 3. 实现全局布局和平滑滚动
  - [x] 3.1 创建 SmoothScrollProvider 组件
    - 创建 `components/smooth-scroll-provider.tsx`
    - 实现 Lenis 初始化逻辑
    - 使用 useEffect 管理 Lenis 生命周期
    - 在 requestAnimationFrame 中更新滚动状态
    - _Requirements: 4.3, 4.4, 4.5, 4.6_

  - [x] 3.2 配置全局布局文件
    - 编写 `app/layout.tsx`
    - 注入 SmoothScrollProvider
    - 配置全局样式和字体
    - 添加 HTML 和 body 标签的基础样式
    - _Requirements: 4.1, 4.2_

  - [ ]* 3.3 编写平滑滚动的集成测试
    - 验证 Lenis 实例正确初始化
    - 验证组件卸载时清理资源
    - _Requirements: 4.6_

- [x] 4. Checkpoint - 验证基础设施
  - 确保项目可以成功启动 (`npm run dev`)
  - 确保 Tailwind 样式正确应用
  - 确保平滑滚动效果生效
  - 如有问题,询问用户

### 阶段二: 主页视觉与 Bento Grid

- [x] 5. 实现 Bento Grid 布局系统
  - [x] 5.1 创建 BentoGrid 和 BentoCard 组件
    - 创建 `components/bento-grid.tsx`
    - 实现响应式网格布局
    - 支持不同尺寸的卡片 (small, medium, large)
    - 应用圆角和边框样式
    - _Requirements: 8.1, 8.2, 8.3, 8.4_

  - [x] 5.2 添加 Framer Motion 动画
    - 为 BentoCard 添加进入动画
    - 实现弹性滑入效果 (spring animation)
    - 为卡片悬停状态添加微妙的缩放动画
    - _Requirements: 11.1, 11.2, 11.3, 11.5_

  - [ ]* 5.3 编写 Bento Grid 的单元测试
    - 测试不同尺寸卡片的渲染
    - 测试响应式布局在不同屏幕尺寸下的表现
    - _Requirements: 8.5, 14.1, 14.2, 14.3_

  - [ ]* 5.4 编写属性测试: Bento 卡片样式一致性
    - **Property 6: Bento 卡片样式一致性**
    - **Validates: Requirements 8.2, 8.3**
    - 验证所有卡片都包含圆角和边框样式类
    - 使用 fast-check 生成随机卡片属性

- [x] 6. 创建主页内容
  - [x] 6.1 实现主页布局
    - 创建 `app/page.tsx`
    - 使用 BentoGrid 布局
    - 左侧大卡片展示个人简介
    - 右侧多个小卡片展示技能、项目等
    - _Requirements: 8.1, 8.4_

  - [x] 6.2 应用暗黑模式主题
    - 使用深邃的背景色
    - 应用高饱和度霓虹强调色
    - 确保文本对比度符合可访问性标准
    - _Requirements: 9.1, 9.2, 9.3, 9.4_

  - [x] 6.3 添加毛玻璃效果
    - 为卡片应用毛玻璃背景
    - 确保文本在毛玻璃背景上清晰可读
    - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5_

  - [ ]* 6.4 编写属性测试: 文本对比度可访问性
    - **Property 7: 文本对比度可访问性**
    - **Validates: Requirements 9.4**
    - 验证所有文本和背景色组合满足 WCAG AA 标准
    - 使用 fast-check 生成随机颜色组合

  - [ ]* 6.5 编写属性测试: 触摸目标尺寸可访问性
    - **Property 11: 触摸目标尺寸可访问性**
    - **Validates: Requirements 14.5**
    - 验证所有交互元素最小尺寸为 44x44px
    - 使用 fast-check 生成随机交互元素

- [x] 7. Checkpoint - 验证主页视觉效果
  - 确保 Bento Grid 布局正确显示
  - 确保动画效果流畅
  - 确保暗黑模式和毛玻璃效果正确应用
  - 如有问题,询问用户

### 阶段三: Markdown 解析引擎

- [x] 8. 实现 MDX 解析管道
  - [x] 8.1 创建 MDX 工具函数
    - 创建 `lib/mdx.ts`
    - 实现 `getMDXContent(slug)` 函数读取本地 .mdx 文件
    - 实现 `getAllMDXSlugs()` 函数获取所有文章列表
    - 使用 next-mdx-remote 解析 MDX 内容
    - 提取 frontmatter 元数据
    - _Requirements: 5.1, 5.2, 5.4, 5.5_

  - [x] 8.2 配置 remark 和 rehype 插件
    - 配置 remark-math 解析数学公式语法
    - 配置 rehype-katex 渲染数学公式
    - 设置 KaTeX 选项 (throwOnError: false)
    - _Requirements: 7.1, 7.2_

  - [ ]* 8.3 编写属性测试: Markdown 语法解析完整性
    - **Property 1: Markdown 语法解析完整性**
    - **Validates: Requirements 5.2**
    - 验证所有标准 Markdown 元素正确转换为 HTML
    - 使用 fast-check 生成随机 Markdown 语法

  - [ ]* 8.4 编写属性测试: Frontmatter 提取一致性
    - **Property 2: Frontmatter 提取一致性**
    - **Validates: Requirements 5.4**
    - 验证 YAML frontmatter 正确提取且类型一致
    - 使用 fast-check 生成随机 frontmatter 数据

- [x] 9. 实现代码高亮功能
  - [x] 9.1 创建 CodeBlock 组件
    - 创建 `components/code-block.tsx`
    - 使用 Shiki 进行语法高亮
    - 配置极暗风格主题 (github-dark 或 dracula)
    - 支持至少 20 种主流编程语言
    - _Requirements: 6.1, 6.2, 6.3_

  - [x] 9.2 集成 CodeBlock 到 MDX 组件
    - 创建 `components/mdx-content.tsx`
    - 配置自定义 MDX 组件映射
    - 将代码块映射到 CodeBlock 组件
    - _Requirements: 5.3, 6.4_

  - [ ]* 9.3 编写属性测试: 代码高亮应用普遍性
    - **Property 3: 代码高亮应用普遍性**
    - **Validates: Requirements 6.4**
    - 验证所有标记语言的代码块都应用语法高亮
    - 使用 fast-check 生成随机代码和语言组合

  - [ ]* 9.4 编写属性测试: 代码格式保留不变性
    - **Property 4: 代码格式保留不变性**
    - **Validates: Requirements 6.5**
    - 验证代码高亮后空白字符和缩进完全一致
    - 使用 fast-check 生成包含各种空白字符的代码

- [x] 10. 实现数学公式渲染
  - [x] 10.1 配置 KaTeX 样式
    - 在全局样式中导入 KaTeX CSS
    - 确保数学公式在暗黑模式下清晰可读
    - _Requirements: 7.2_

  - [x] 10.2 创建示例博客文章
    - 创建 `content/blog/` 目录
    - 编写包含代码块和数学公式的示例 .mdx 文件
    - 测试 MDX 解析管道
    - _Requirements: 5.1, 7.3, 7.4_

  - [ ]* 10.3 编写属性测试: LaTeX 公式渲染完整性
    - **Property 5: LaTeX 公式渲染完整性**
    - **Validates: Requirements 7.5**
    - 验证所有有效 LaTeX 语法转换为可视化公式
    - 使用 fast-check 生成随机 LaTeX 公式

- [x] 11. 创建博客文章页面
  - [x] 11.1 实现动态路由
    - 创建 `app/blog/[slug]/page.tsx`
    - 使用 generateStaticParams 生成静态路径
    - 调用 getMDXContent 获取文章内容
    - _Requirements: 5.1_

  - [x] 11.2 渲染 MDX 内容
    - 使用 MDXContent 组件渲染文章
    - 显示 frontmatter 元数据 (标题、日期、标签)
    - 应用文章样式 (排版、间距)
    - _Requirements: 5.5_

  - [ ]* 11.3 编写博客页面的集成测试
    - 测试文章列表页面渲染
    - 测试文章详情页面渲染
    - 测试 MDX 内容正确显示

- [x] 12. Checkpoint - 验证 MDX 解析引擎
  - 确保 MDX 文件正确解析
  - 确保代码高亮正确应用
  - 确保数学公式正确渲染
  - 确保所有测试通过
  - 如有问题,询问用户

### 阶段四: Supabase 数据库集成

- [x] 13. 设计 Supabase 数据库模型
  - [x] 13.1 创建 posts 表
    - 编写 SQL 建表语句
    - 定义字段: id, slug, title, description, content, published_at, updated_at, author_id, tags, view_count, created_at
    - 创建索引: slug, published_at, tags
    - _Requirements: 13.3_

  - [x] 13.2 创建 reactions 表
    - 编写 SQL 建表语句
    - 定义字段: id, post_id, user_id, type, created_at
    - 添加唯一约束: (post_id, user_id, type)
    - 创建索引: post_id, user_id
    - _Requirements: 13.3_

  - [x] 13.3 创建 projects 表
    - 编写 SQL 建表语句
    - 定义字段: id, slug, title, description, image_url, demo_url, github_url, tags, featured, display_order, created_at, updated_at
    - 创建索引: slug, featured, display_order
    - _Requirements: 13.4_

  - [x] 13.4 配置 Row Level Security (RLS) 策略
    - 为 posts 表创建 RLS 策略 (公开读取、作者管理)
    - 为 reactions 表创建 RLS 策略 (公开读取、用户管理自己的反应)
    - 为 projects 表创建 RLS 策略 (公开读取、管理员管理)
    - _Requirements: 13.3_

- [x] 14. 配置 Supabase 客户端
  - [x] 14.1 创建 Supabase 客户端工具
    - 创建 `lib/supabase/client.ts`
    - 实现 createClient 函数
    - 配置环境变量 (NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY)
    - _Requirements: 13.1, 13.2_

  - [x] 14.2 创建 Server Actions
    - 创建 `app/actions/reactions.ts`
    - 实现 addReaction 函数
    - 实现 getReactionStats 函数
    - 添加错误处理和重试机制
    - _Requirements: 13.5_

  - [ ]* 14.3 编写 Supabase 集成测试
    - 测试数据库连接
    - 测试 CRUD 操作
    - 测试 RLS 策略
    - 测试 Server Actions

- [x] 15. 实现点赞功能
  - [x] 15.1 创建 ReactionButton 组件
    - 创建 `components/reaction-button.tsx`
    - 实现点赞按钮 UI
    - 调用 addReaction Server Action
    - 显示点赞数量
    - _Requirements: 13.5_

  - [x] 15.2 集成到博客文章页面
    - 在文章详情页添加 ReactionButton
    - 获取并显示当前文章的反应统计
    - 添加乐观更新 (optimistic update)
    - _Requirements: 13.5_

  - [ ]* 15.3 编写点赞功能的单元测试
    - 测试点赞按钮点击事件
    - 测试乐观更新逻辑
    - 测试错误处理

- [x] 16. Checkpoint - 验证数据库集成
  - 确保 Supabase 数据库正确配置
  - 确保 RLS 策略正确应用
  - 确保点赞功能正常工作
  - 确保所有测试通过
  - 如有问题,询问用户

### 阶段五: Giscus 与细节完善

- [x] 17. 集成 Giscus 评论系统
  - [x] 17.1 创建 GiscusComments 组件
    - 创建 `components/giscus-comments.tsx`
    - 使用 @giscus/react 包
    - 配置 GitHub Discussions 参数 (repo, repoId, category, categoryId)
    - 配置暗黑模式主题
    - _Requirements: 12.1, 12.4_

  - [x] 17.2 集成到博客文章页面
    - 在文章详情页底部添加 GiscusComments 组件
    - 配置评论映射方式 (pathname)
    - 添加 Error Boundary 处理加载失败
    - _Requirements: 12.3_

  - [ ]* 17.3 编写属性测试: 博客文章评论区存在性
    - **Property 10: 博客文章评论区存在性**
    - **Validates: Requirements 12.3**
    - 验证所有博客文章页面都包含 Giscus 组件
    - 使用 fast-check 生成随机文章 slug

  - [ ]* 17.4 编写 Giscus 集成测试
    - 测试评论组件正确渲染
    - 测试 Error Boundary 捕获错误
    - 测试暗黑模式主题应用

- [x] 18. 配置 SEO Meta 标签
  - [x] 18.1 创建 Metadata 配置
    - 在 `app/layout.tsx` 中配置全局 metadata
    - 定义网站标题、描述、关键词
    - 配置 Open Graph 和 Twitter Card
    - _Requirements: 15.1_

  - [x] 18.2 为博客文章添加动态 Metadata
    - 在 `app/blog/[slug]/page.tsx` 中导出 generateMetadata 函数
    - 从 frontmatter 提取标题、描述、封面图
    - 生成结构化数据 (JSON-LD)
    - _Requirements: 15.1_

  - [ ]* 18.3 编写 SEO 配置的单元测试
    - 测试 metadata 正确生成
    - 测试 Open Graph 标签正确设置

- [ ] 19. 性能优化
  - [x] 19.1 配置图片优化
    - 使用 Next.js Image 组件
    - 配置图片加载策略 (lazy loading)
    - 配置图片尺寸和格式优化
    - _Requirements: 15.2_

  - [x] 19.2 实现代码分块加载
    - 使用 dynamic import 延迟加载非关键组件
    - 配置 Framer Motion 的懒加载
    - 配置 Giscus 的懒加载
    - _Requirements: 15.3_

  - [x] 19.3 配置缓存策略
    - 配置静态资源缓存头
    - 配置 MDX 内容的增量静态再生成 (ISR)
    - 配置 Supabase 查询缓存
    - _Requirements: 15.4_

  - [ ]* 19.4 编写性能测试
    - 测试首屏加载时间
    - 测试 Lighthouse 性能评分
    - 测试代码分块是否生效

- [x] 20. 响应式设计完善
  - [x] 20.1 优化移动端布局
    - 调整 Bento Grid 在移动端的列数
    - 优化字体大小和行高
    - 确保触摸目标尺寸符合标准
    - _Requirements: 14.1, 14.5_

  - [x] 20.2 优化平板端布局
    - 调整 Bento Grid 在平板端的列数
    - 优化导航栏和侧边栏
    - _Requirements: 14.2_

  - [x] 20.3 测试响应式断点
    - 在不同屏幕尺寸下测试布局
    - 确保所有交互元素可访问
    - _Requirements: 14.3, 14.4_

  - [ ]* 20.4 编写响应式设计的 E2E 测试
    - 使用 Playwright 测试不同视口尺寸
    - 测试移动端、平板端、桌面端布局
    - 测试触摸交互

- [x] 21. 添加交互动画细节
  - [x] 21.1 优化悬停动画
    - 为所有交互元素添加悬停状态
    - 确保动画过渡流畅
    - 优化动画性能
    - _Requirements: 9.5, 11.2, 11.4, 11.5_

  - [x] 21.2 添加页面过渡动画
    - 使用 Framer Motion 实现路由过渡
    - 添加淡入淡出效果
    - _Requirements: 11.1_

  - [ ]* 21.3 编写属性测试: 交互元素悬停状态完整性
    - **Property 8: 交互元素悬停状态完整性**
    - **Validates: Requirements 9.5**
    - 验证所有交互元素都定义了悬停状态样式
    - 使用 fast-check 生成随机交互元素

  - [ ]* 21.4 编写属性测试: 交互元素动画响应性
    - **Property 9: 交互元素动画响应性**
    - **Validates: Requirements 11.5**
    - 验证悬停事件触发动画效果
    - 使用 fast-check 生成随机交互场景

- [x] 22. 最终检查点 - 完整系统验证
  - 确保所有功能正常工作
  - 确保所有测试通过
  - 确保性能指标达标
  - 确保响应式设计在所有设备上正确显示
  - 确保 SEO 配置正确
  - 如有问题,询问用户

## Notes

- 任务标记 `*` 为可选任务,可以跳过以加快 MVP 开发
- 每个任务都引用了具体的需求编号,确保可追溯性
- 属性测试使用 fast-check 库,每个测试运行 100 次随机输入
- 检查点任务确保增量验证,及时发现问题
- 所有代码示例使用 TypeScript
- 建议按阶段顺序执行任务,确保依赖关系正确
