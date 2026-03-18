# 🚀 现在开始配置！

## 📋 你需要做的事情

我已经为你准备好了所有文件，现在需要你完成两个简单的配置：

---

## 1️⃣ Supabase 配置 (5分钟)

### 第一步：创建 Supabase 项目

🔗 **打开这个链接**: https://supabase.com/dashboard

1. 用 GitHub 登录
2. 点击 "New Project"
3. 填写：
   - 项目名: `developer-blog`
   - 密码: 创建一个强密码
   - 区域: 选择 Tokyo 或最近的
4. 点击 "Create new project"
5. 等待 2-3 分钟...

### 第二步：获取 API 密钥

项目创建好后：
1. 左侧菜单 → Settings → API
2. 复制这两个值：
   - **Project URL**: `https://xxxxx.supabase.co`
   - **anon public**: `eyJhbGci...` (很长的字符串)

### 第三步：创建数据库表

1. 左侧菜单 → SQL Editor
2. 点击 "New Query"
3. 打开项目中的 `lib/supabase/schema.sql` 文件
4. 复制全部内容，粘贴到 SQL 编辑器
5. 点击 "Run"
6. 看到 "Success" ✅

### 第四步：填写配置

打开项目根目录的 `.env.local` 文件，把这两行：

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

改成：

```env
NEXT_PUBLIC_SUPABASE_URL=https://你复制的URL.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=你复制的那一长串key
```

✅ **Supabase 完成！**

---

## 2️⃣ Giscus 配置 (5分钟)

### 第一步：准备 GitHub 仓库

如果你还没有仓库：

🔗 **打开这个链接**: https://github.com/new

1. 仓库名: `developer-blog`
2. 选择 **Public** (必须公开)
3. 点击 "Create repository"

### 第二步：启用 Discussions

1. 进入你的仓库
2. Settings → Features
3. 勾选 ✅ Discussions

### 第三步：安装 Giscus App

🔗 **打开这个链接**: https://github.com/apps/giscus

1. 点击 "Install"
2. 选择你的博客仓库
3. 点击 "Install"

### 第四步：获取配置

🔗 **打开这个链接**: https://giscus.app/

1. 在 "Repository" 输入: `你的用户名/developer-blog`
2. 应该看到三个绿色勾 ✅✅✅
3. 选择 "pathname"
4. 选择 "General" 分类
5. 选择 "dark" 主题
6. 向下滚动，找到生成的代码

### 第五步：复制配置值

从生成的代码中复制这四个值：

```html
data-repo="你的用户名/仓库名"
data-repo-id="R_kgDOxxxxxxx"
data-category="General"
data-category-id="DIC_kwDOxxxxxxx"
```

### 第六步：填写配置

打开 `.env.local` 文件，把这四行：

```env
NEXT_PUBLIC_GISCUS_REPO=username/repo
NEXT_PUBLIC_GISCUS_REPO_ID=your_repo_id
NEXT_PUBLIC_GISCUS_CATEGORY=General
NEXT_PUBLIC_GISCUS_CATEGORY_ID=your_category_id
```

改成：

```env
NEXT_PUBLIC_GISCUS_REPO=你的用户名/developer-blog
NEXT_PUBLIC_GISCUS_REPO_ID=R_kgDO开头的那串
NEXT_PUBLIC_GISCUS_CATEGORY=General
NEXT_PUBLIC_GISCUS_CATEGORY_ID=DIC_kwDO开头的那串
```

✅ **Giscus 完成！**

---

## 🧪 验证配置

配置完成后，运行：

```bash
npm run check-config
```

如果看到 ✅ 全部通过，就可以启动了：

```bash
npm run dev
```

然后访问: http://localhost:3000/blog/sample-post

你应该看到：
- ❤️ 反应按钮
- 💬 评论框

---

## 📞 需要帮助？

- 详细步骤: `docs/QUICK-CONFIG.md`
- 完整指南: `docs/CONFIGURATION-GUIDE.md`
- 检查配置: `npm run check-config`

配置完成后告诉我，我会帮你测试！🎉
