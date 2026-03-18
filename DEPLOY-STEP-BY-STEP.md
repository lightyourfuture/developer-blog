# 🚀 部署分步指南

## 当前进度

✅ 代码已准备好
✅ 构建测试通过
✅ 代码已提交到 Git
✅ 远程仓库已配置

## 第一步：推送代码到 GitHub

### 选项 A：使用终端（最快）

1. 打开终端（PowerShell 或 Git Bash）
2. 确保在项目目录：`D:\kiro\myblog`
3. 运行命令：

```bash
git push -u origin master
```

4. 如果提示输入用户名和密码：
   - **用户名**：`lightyourfuture`
   - **密码**：需要使用 Personal Access Token（不是 GitHub 密码）

**如何获取 Personal Access Token：**

1. 访问：https://github.com/settings/tokens
2. 点击 "Generate new token" → "Generate new token (classic)"
3. 勾选 `repo` 权限
4. 点击 "Generate token"
5. 复制生成的 token（只显示一次！）
6. 在推送时，密码处粘贴这个 token

### 选项 B：使用 GitHub Desktop（最简单）

1. 下载 GitHub Desktop：https://desktop.github.com/
2. 安装并用 GitHub 账号登录
3. File → Add Local Repository
4. 选择文件夹：`D:\kiro\myblog`
5. 点击 "Publish repository"
6. 确保勾选 "Public"（公开）
7. 点击 "Publish repository"

---

## 第二步：验证代码已推送

访问：https://github.com/lightyourfuture/developer-blog

你应该能看到所有文件，包括：
- `app/` 文件夹
- `components/` 文件夹
- `content/blog/` 文件夹
- `README.md`
- 等等...

---

## 第三步：部署到 Vercel

### 3.1 注册/登录 Vercel

1. 访问：https://vercel.com/signup
2. 点击 "Continue with GitHub"
3. 用你的 GitHub 账号登录
4. 授权 Vercel 访问你的 GitHub

### 3.2 导入项目

1. 登录后，点击 "Add New..." → "Project"
2. 你会看到你的 GitHub 仓库列表
3. 找到 `developer-blog`
4. 点击 "Import"

### 3.3 配置项目

**Project Name（项目名称）：**
- 可以保持默认，或改成你喜欢的名字
- 这将成为你的域名：`项目名.vercel.app`

**Framework Preset：**
- 应该自动检测为 "Next.js"

**Root Directory：**
- 保持默认 `./`

### 3.4 配置环境变量（重要！）

点击 "Environment Variables"，添加以下 6 个变量：

**变量 1：**
```
Name: NEXT_PUBLIC_SUPABASE_URL
Value: [从你的 .env.local 文件复制]
```

**变量 2：**
```
Name: NEXT_PUBLIC_SUPABASE_ANON_KEY
Value: [从你的 .env.local 文件复制]
```

**变量 3：**
```
Name: NEXT_PUBLIC_GISCUS_REPO
Value: lightyourfuture/developer-blog
```

**变量 4：**
```
Name: NEXT_PUBLIC_GISCUS_REPO_ID
Value: [从你的 .env.local 文件复制]
```

**变量 5：**
```
Name: NEXT_PUBLIC_GISCUS_CATEGORY
Value: General
```

**变量 6：**
```
Name: NEXT_PUBLIC_GISCUS_CATEGORY_ID
Value: [从你的 .env.local 文件复制]
```

### 3.5 开始部署

1. 确认所有环境变量都已添加
2. 点击 "Deploy" 按钮
3. 等待 2-3 分钟
4. 部署完成！🎉

---

## 第四步：访问你的网站

部署成功后，你会看到：
- 🎊 庆祝动画
- 🔗 你的网站链接

点击链接访问你的博客！

---

## 环境变量快速参考

打开你的 `.env.local` 文件，复制以下值：

```
NEXT_PUBLIC_SUPABASE_URL=你的值
NEXT_PUBLIC_SUPABASE_ANON_KEY=你的值
NEXT_PUBLIC_GISCUS_REPO=lightyourfuture/developer-blog
NEXT_PUBLIC_GISCUS_REPO_ID=你的值
NEXT_PUBLIC_GISCUS_CATEGORY=General
NEXT_PUBLIC_GISCUS_CATEGORY_ID=你的值
```

---

## 遇到问题？

### 推送失败
- 检查网络连接
- 确保 GitHub 账号有权限
- 尝试使用 GitHub Desktop

### 部署失败
- 检查环境变量是否都填写了
- 查看 Vercel 构建日志
- 确保所有变量名正确（区分大小写）

### 网站打不开
- 等待几分钟，DNS 可能需要时间
- 清除浏览器缓存
- 尝试无痕模式

---

## 完成后

你的博客就上线了！

- 分享链接给朋友
- 在社交媒体发布
- 继续写文章

每次推送代码到 GitHub，Vercel 会自动更新网站！

🎉 恭喜你完成部署！
