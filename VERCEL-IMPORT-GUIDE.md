# 📦 Vercel 导入项目指南

## 当前页面说明

你现在看到的是 Vercel 的 "New Project"（新建项目）页面。

## 填写步骤

### 步骤 1：选择 Git Scope

在 "Git Scope" 下拉框中：
1. 点击 "Select Git Scope"
2. 选择 **"lightyourfuture"**（你的 GitHub 用户名）

### 步骤 2：等待仓库列表加载

选择后，Vercel 会：
- 连接到你的 GitHub
- 加载你的所有仓库
- 显示可以导入的项目

### 步骤 3：找到并导入项目

你会看到一个仓库列表，找到 **"developer-blog"**，点击旁边的 **"Import"** 按钮。

---

## 如果看不到仓库

如果选择 Git Scope 后看不到 `developer-blog` 仓库：

### 原因 1：代码还没推送到 GitHub

**解决方法：**
1. 先推送代码到 GitHub
2. 使用 GitHub Desktop 或命令行
3. 推送成功后刷新 Vercel 页面

### 原因 2：Vercel 没有权限

**解决方法：**
1. 点击页面底部的 "Import a different Git Repository"
2. 或者访问 GitHub Settings → Applications
3. 找到 Vercel，授予仓库访问权限

---

## 下一步：配置项目

导入项目后，你会看到配置页面，需要：

1. **Project Name**（项目名称）
   - 保持默认或修改
   - 这将成为你的域名：`项目名.vercel.app`

2. **Framework Preset**（框架预设）
   - 应该自动检测为 "Next.js"
   - 如果没有，手动选择 "Next.js"

3. **Root Directory**（根目录）
   - 保持默认 `./`

4. **Environment Variables**（环境变量）
   - 这是最重要的！
   - 需要添加 6 个变量

---

## 环境变量配置

点击 "Environment Variables" 展开，添加以下变量：

### 变量 1
```
Name: NEXT_PUBLIC_SUPABASE_URL
Value: [打开 .env.local 文件，复制 NEXT_PUBLIC_SUPABASE_URL 的值]
```

### 变量 2
```
Name: NEXT_PUBLIC_SUPABASE_ANON_KEY
Value: [打开 .env.local 文件，复制 NEXT_PUBLIC_SUPABASE_ANON_KEY 的值]
```

### 变量 3
```
Name: NEXT_PUBLIC_GISCUS_REPO
Value: lightyourfuture/developer-blog
```

### 变量 4
```
Name: NEXT_PUBLIC_GISCUS_REPO_ID
Value: [打开 .env.local 文件，复制 NEXT_PUBLIC_GISCUS_REPO_ID 的值]
```

### 变量 5
```
Name: NEXT_PUBLIC_GISCUS_CATEGORY
Value: General
```

### 变量 6
```
Name: NEXT_PUBLIC_GISCUS_CATEGORY_ID
Value: [打开 .env.local 文件，复制 NEXT_PUBLIC_GISCUS_CATEGORY_ID 的值]
```

---

## 如何复制环境变量

1. 在项目中打开 `.env.local` 文件
2. 找到对应的变量
3. 复制等号后面的值（不包括等号）
4. 粘贴到 Vercel 的 Value 输入框

**示例：**

`.env.local` 文件中：
```
NEXT_PUBLIC_SUPABASE_URL=https://nbcxqyjlhusyurfgglnu.supabase.co
```

在 Vercel 中填写：
- Name: `NEXT_PUBLIC_SUPABASE_URL`
- Value: `https://nbcxqyjlhusyurfgglnu.supabase.co`

---

## 最后一步：部署

1. 确认所有 6 个环境变量都已添加
2. 点击页面底部的 **"Deploy"** 按钮
3. 等待 2-3 分钟
4. 完成！🎉

---

## 部署成功后

你会看到：
- 🎊 庆祝动画
- 🔗 你的网站链接
- 📸 网站预览

点击链接访问你的博客！

---

## 遇到问题？

### 问题 1：找不到仓库
- 确保代码已推送到 GitHub
- 刷新 Vercel 页面
- 检查 Vercel 的 GitHub 权限

### 问题 2：部署失败
- 检查环境变量是否都填写了
- 查看构建日志找到错误
- 确保变量名正确（区分大小写）

### 问题 3：网站打不开
- 等待几分钟
- 清除浏览器缓存
- 检查 Vercel Dashboard 的部署状态

---

## 需要帮助？

如果遇到任何问题，告诉我你看到的错误信息或截图，我会帮你解决！
