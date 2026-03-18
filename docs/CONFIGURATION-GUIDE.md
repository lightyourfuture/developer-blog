# 🚀 配置向导

欢迎！这个向导会帮你一步步完成 Supabase 和 Giscus 的配置。

---

## 第一部分：Supabase 配置 (5-10 分钟)

### 步骤 1: 创建 Supabase 项目

1. 打开浏览器，访问 [https://supabase.com/](https://supabase.com/)
2. 点击右上角 **"Start your project"** 或 **"Sign in"**
3. 使用 GitHub 账号登录
4. 点击 **"New Project"**
5. 填写项目信息：
   - **Name**: `developer-blog` (或你喜欢的名字)
   - **Database Password**: 创建一个强密码 (请保存好！)
   - **Region**: 选择离你最近的区域 (例如：Northeast Asia (Tokyo))
6. 点击 **"Create new project"**
7. ⏳ 等待 2-3 分钟，项目创建中...

### 步骤 2: 获取 API 密钥

项目创建完成后：

1. 在左侧菜单点击 **"Settings"** (齿轮图标)
2. 点击 **"API"**
3. 你会看到两个重要的值：

```
Project URL: https://xxxxxxxxxxxxx.supabase.co
anon public: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**📝 复制这两个值，稍后需要填入 `.env.local` 文件**

### 步骤 3: 创建数据库表

1. 在左侧菜单点击 **"SQL Editor"**
2. 点击 **"New Query"**
3. 打开项目中的 `lib/supabase/schema.sql` 文件
4. 复制全部内容
5. 粘贴到 Supabase 的 SQL 编辑器中
6. 点击右下角的 **"Run"** 按钮 (或按 Ctrl+Enter)
7. ✅ 看到 "Success. No rows returned" 就说明成功了！

这会创建三个表：
- `posts` - 博客文章
- `reactions` - 点赞/反应
- `projects` - 作品集项目

### 步骤 4: 填写 Supabase 环境变量

打开项目根目录的 `.env.local` 文件，填入你刚才复制的值：

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

✅ **Supabase 配置完成！**

---

## 第二部分：Giscus 配置 (5-10 分钟)

Giscus 是基于 GitHub Discussions 的评论系统。

### 步骤 1: 准备 GitHub 仓库

你需要一个**公开的** GitHub 仓库来存储评论。

**选项 A: 使用现有仓库**
- 如果你已经有这个项目的 GitHub 仓库，确保它是公开的

**选项 B: 创建新仓库**
1. 访问 [https://github.com/new](https://github.com/new)
2. 仓库名称：`developer-blog` (或你喜欢的名字)
3. 选择 **Public** (公开)
4. 点击 **"Create repository"**

### 步骤 2: 启用 GitHub Discussions

1. 进入你的 GitHub 仓库
2. 点击 **"Settings"** (设置)
3. 向下滚动到 **"Features"** (功能) 部分
4. 勾选 **"Discussions"** (讨论)
5. 如果提示，点击 **"Set up discussions"**

### 步骤 3: 安装 Giscus App

1. 访问 [https://github.com/apps/giscus](https://github.com/apps/giscus)
2. 点击绿色的 **"Install"** 按钮
3. 选择 **"Only select repositories"**
4. 从下拉菜单选择你的博客仓库
5. 点击 **"Install"**

### 步骤 4: 配置 Giscus

1. 访问 [https://giscus.app/](https://giscus.app/)
2. 向下滚动到 **"Configuration"** 部分

#### 4.1 仓库配置
在 "Repository" 输入框中输入：`你的用户名/仓库名`
例如：`johndoe/developer-blog`

你应该看到三个绿色的勾：
- ✅ The repository is public
- ✅ The giscus app is installed
- ✅ Discussions feature is enabled

#### 4.2 页面映射
选择 **"pathname"** (推荐)

#### 4.3 Discussion Category
选择 **"General"** 或创建一个新分类 "Blog Comments"

#### 4.4 功能选项
- ✅ Enable reactions for the main post
- 选择 **"Comment box above comments"**

#### 4.5 主题
选择 **"dark"** (匹配你的博客主题)

### 步骤 5: 获取配置值

向下滚动到 **"Enable giscus"** 部分，你会看到生成的代码：

```html
<script src="https://giscus.app/client.js"
        data-repo="johndoe/developer-blog"
        data-repo-id="R_kgDOxxxxxxx"
        data-category="General"
        data-category-id="DIC_kwDOxxxxxxx"
        ...>
</script>
```

**📝 复制这四个值：**
- `data-repo` → 你的仓库名
- `data-repo-id` → 以 R_kgDO 开头的 ID
- `data-category` → 分类名称
- `data-category-id` → 以 DIC_kwDO 开头的 ID

### 步骤 6: 填写 Giscus 环境变量

打开 `.env.local` 文件，填入你刚才复制的值：

```env
# Giscus Configuration
NEXT_PUBLIC_GISCUS_REPO=johndoe/developer-blog
NEXT_PUBLIC_GISCUS_REPO_ID=R_kgDOxxxxxxx
NEXT_PUBLIC_GISCUS_CATEGORY=General
NEXT_PUBLIC_GISCUS_CATEGORY_ID=DIC_kwDOxxxxxxx
```

✅ **Giscus 配置完成！**

---

## 🎉 验证配置

配置完成后，让我们测试一下：

### 1. 重启开发服务器

```bash
# 如果服务器正在运行，先停止 (Ctrl+C)
# 然后重新启动
npm run dev
```

### 2. 测试 Supabase

1. 打开浏览器访问 [http://localhost:3000/blog/sample-post](http://localhost:3000/blog/sample-post)
2. 向下滚动，你应该看到反应按钮 (❤️ 👍 🔥)
3. 点击按钮测试 (需要先配置认证才能真正使用)

### 3. 测试 Giscus

1. 在同一个博客文章页面
2. 向下滚动到评论区
3. 你应该看到 Giscus 评论框
4. 点击 "Sign in with GitHub" 测试留言

---

## ❓ 常见问题

### Supabase 相关

**Q: 看到 "Failed to fetch" 错误**
- 检查 `.env.local` 中的 URL 和 Key 是否正确
- 确保没有多余的空格或引号
- 重启开发服务器

**Q: 数据库表创建失败**
- 确保完整复制了 `schema.sql` 的内容
- 检查 SQL 编辑器中是否有错误提示

### Giscus 相关

**Q: 评论框不显示**
- 检查 `.env.local` 中的四个 Giscus 变量是否都填写了
- 确保 GitHub 仓库是公开的
- 确保 Discussions 功能已启用
- 重启开发服务器

**Q: 无法留言**
- 确保你已经用 GitHub 账号登录
- 检查 Giscus app 是否正确安装在仓库上

---

## 📚 下一步

配置完成后，你可以：

1. **添加内容**
   - 在 `content/blog/` 目录创建新的 `.mdx` 文件
   - 编写你的博客文章

2. **自定义样式**
   - 修改 `tailwind.config.ts` 调整颜色
   - 编辑 `app/page.tsx` 修改主页内容

3. **部署上线**
   - 查看 `docs/deployment-checklist.md`
   - 推荐使用 Vercel 部署

4. **设置认证** (可选)
   - 在 Supabase 中启用 GitHub/Google 认证
   - 让用户可以点赞和评论

---

## 🆘 需要帮助？

如果遇到问题：
1. 查看浏览器控制台的错误信息 (F12)
2. 检查 `.env.local` 文件格式是否正确
3. 确保所有环境变量都已填写
4. 重启开发服务器

祝你配置顺利！🚀
