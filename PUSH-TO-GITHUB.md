# 📤 推送代码到 GitHub

## 当前状态

✅ 代码已提交到本地 Git
✅ 远程仓库已配置：`https://github.com/lightyourfuture/developer-blog.git`

## 推送步骤

### 方法 1：使用命令行（推荐）

打开终端（或 Git Bash），运行：

```bash
git push -u origin master
```

**如果需要认证：**

1. **使用 Personal Access Token（推荐）**
   - 访问 GitHub Settings → Developer settings → Personal access tokens
   - 生成新 token（勾选 `repo` 权限）
   - 推送时，用户名输入你的 GitHub 用户名
   - 密码输入生成的 token

2. **使用 GitHub Desktop**
   - 下载并安装 GitHub Desktop
   - 打开项目文件夹
   - 点击 "Publish repository"

### 方法 2：使用 VS Code

1. 打开 VS Code
2. 打开项目文件夹
3. 点击左侧的 "Source Control"（源代码管理）图标
4. 点击 "..." → "Push"
5. 如果需要，输入 GitHub 凭据

### 方法 3：使用 GitHub Desktop

1. 下载 GitHub Desktop：https://desktop.github.com/
2. 安装并登录 GitHub 账号
3. File → Add Local Repository
4. 选择你的项目文件夹
5. 点击 "Publish repository"

## 验证推送成功

推送成功后，访问：
https://github.com/lightyourfuture/developer-blog

你应该能看到所有代码文件。

## 下一步：部署到 Vercel

代码推送成功后，继续部署步骤：

1. 访问 https://vercel.com/signup
2. 用 GitHub 登录
3. 导入 `developer-blog` 项目
4. 配置环境变量
5. 点击 Deploy

详细步骤请查看：`docs/DEPLOY-TO-VERCEL.md`
