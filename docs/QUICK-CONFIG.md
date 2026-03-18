# ⚡ 快速配置指南 (10分钟完成)

## 🎯 目标
完成 Supabase 和 Giscus 的配置，让你的博客完全可用。

---

## Part 1️⃣: Supabase (5分钟)

### 1. 创建账号和项目
👉 打开: [https://supabase.com/dashboard](https://supabase.com/dashboard)

- 用 GitHub 登录
- 点击 "New Project"
- 项目名称: `developer-blog`
- 数据库密码: 创建一个强密码 (记住它！)
- 区域: 选择 `Northeast Asia (Tokyo)` 或离你最近的
- 点击 "Create new project"
- ⏳ 等待 2-3 分钟...

### 2. 获取 API 密钥
项目创建好后：

1. 左侧菜单 → **Settings** (齿轮图标)
2. 点击 **API**
3. 找到这两个值：

```
Project URL: https://xxxxx.supabase.co
anon public: eyJhbGci...很长的字符串
```

### 3. 创建数据库
1. 左侧菜单 → **SQL Editor**
2. 点击 **New Query**
3. 打开你项目中的 `lib/supabase/schema.sql`
4. 全选复制 (Ctrl+A, Ctrl+C)
5. 粘贴到 Supabase SQL 编辑器
6. 点击 **Run** (或 Ctrl+Enter)
7. ✅ 看到 "Success" 就对了！

### 4. 填写配置
打开项目的 `.env.local` 文件，替换这两行：

```env
NEXT_PUBLIC_SUPABASE_URL=https://你的项目ID.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGci开头的那一长串
```

✅ **Supabase 完成！**

---

## Part 2️⃣: Giscus (5分钟)

### 1. 准备 GitHub 仓库

**如果你还没有仓库：**
👉 打开: [https://github.com/new](https://github.com/new)
- 仓库名: `developer-blog`
- 选择 **Public** (必须公开)
- 点击 "Create repository"

**如果已有仓库：**
- 确保仓库是 Public (公开的)

### 2. 启用 Discussions
1. 进入你的 GitHub 仓库
2. 点击 **Settings**
3. 找到 **Features** 部分
4. 勾选 ✅ **Discussions**

### 3. 安装 Giscus App
👉 打开: [https://github.com/apps/giscus](https://github.com/apps/giscus)
- 点击 **Install**
- 选择 "Only select repositories"
- 选择你的博客仓库
- 点击 **Install**

### 4. 获取配置
👉 打开: [https://giscus.app/](https://giscus.app/)

滚动到 "Configuration" 部分：

**Repository:**
```
输入: 你的用户名/仓库名
例如: johndoe/developer-blog
```

应该看到三个绿色勾 ✅✅✅

**Page ↔️ Discussions Mapping:**
- 选择: `pathname`

**Discussion Category:**
- 选择: `General`

**Theme:**
- 选择: `dark`

### 5. 复制配置值
向下滚动到 "Enable giscus" 部分，找到生成的代码：

```html
<script src="https://giscus.app/client.js"
        data-repo="你的用户名/仓库名"
        data-repo-id="R_kgDOxxxxxxx"
        data-category="General"
        data-category-id="DIC_kwDOxxxxxxx"
```

### 6. 填写配置
打开 `.env.local`，替换这四行：

```env
NEXT_PUBLIC_GISCUS_REPO=你的用户名/仓库名
NEXT_PUBLIC_GISCUS_REPO_ID=R_kgDO开头的那串
NEXT_PUBLIC_GISCUS_CATEGORY=General
NEXT_PUBLIC_GISCUS_CATEGORY_ID=DIC_kwDO开头的那串
```

✅ **Giscus 完成！**

---

## 🧪 测试配置

### 重启服务器
```bash
# 停止当前服务器 (Ctrl+C)
npm run dev
```

### 测试页面
打开: [http://localhost:3000/blog/sample-post](http://localhost:3000/blog/sample-post)

你应该看到：
- ❤️ 👍 🔥 反应按钮 (Supabase)
- 评论框 (Giscus)

---

## 🎉 完成！

现在你可以：
- ✅ 查看博客文章
- ✅ 看到评论系统
- ✅ 看到反应按钮

下一步：
- 📝 在 `content/blog/` 添加你的文章
- 🎨 自定义主页内容
- 🚀 部署到 Vercel

---

## ⚠️ 常见问题

**Q: 环境变量不生效？**
- 确保重启了开发服务器
- 检查 `.env.local` 文件名是否正确
- 确保没有多余的空格或引号

**Q: Giscus 不显示？**
- 确保仓库是 Public
- 确保 Discussions 已启用
- 确保 Giscus app 已安装

**Q: Supabase 连接失败？**
- 检查 URL 和 Key 是否完整复制
- 确保项目已创建完成
- 检查浏览器控制台错误信息

需要详细步骤？查看 `docs/CONFIGURATION-GUIDE.md`
