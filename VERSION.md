# 📌 版本信息

## 当前版本

**版本号：** 1.0.0  
**发布日期：** 2024-01-20  
**状态：** 稳定版（Stable）

---

## 版本存档说明

### 什么是版本存档？

版本存档是项目在特定时间点的完整快照，包括：

- 所有源代码
- 配置文件
- 文档
- 依赖包版本
- 数据库架构

### 为什么要存档？

1. **回滚保障** - 如果新版本出现问题，可以快速回滚
2. **历史记录** - 保留项目演进的完整历史
3. **版本对比** - 方便对比不同版本的差异
4. **学习参考** - 可以回顾之前的实现方式

---

## 如何创建版本存档

### 1. Git Tag

```bash
# 创建带注释的标签
git tag -a v1.0.0 -m "Release version 1.0.0"

# 推送标签到远程仓库
git push origin v1.0.0

# 查看所有标签
git tag -l
```

### 2. GitHub Release

1. 访问 GitHub 仓库
2. 点击 "Releases" → "Create a new release"
3. 选择标签：v1.0.0
4. 填写发布说明（可以从 CHANGELOG.md 复制）
5. 上传构建产物（可选）
6. 点击 "Publish release"

### 3. 本地备份

```bash
# 创建备份目录
mkdir -p backups/v1.0.0

# 复制项目文件（排除 node_modules 和 .next）
rsync -av --exclude='node_modules' --exclude='.next' --exclude='.git' . backups/v1.0.0/

# 压缩备份
tar -czf backups/developer-blog-v1.0.0.tar.gz backups/v1.0.0/
```

### 4. 数据库备份

```bash
# Supabase 数据库导出
# 1. 登录 Supabase Dashboard
# 2. 进入项目设置
# 3. 选择 "Database" → "Backups"
# 4. 点击 "Download" 下载备份

# 或使用 pg_dump（如果有直接访问权限）
pg_dump -h your-project.supabase.co -U postgres -d postgres > backups/db-v1.0.0.sql
```

---

## 版本历史

### v1.0.0 (2024-01-20) - 首次发布

**重要文件快照：**

- `package.json` - 依赖版本锁定
- `.env.local.example` - 环境变量模板
- `ROADMAP.md` - 项目路线图
- `CHANGELOG.md` - 更新日志

**Git Commit：** [commit hash]  
**部署 URL：** <https://developer-blog-weld.vercel.app>

**核心功能：**

- ✅ 博客系统
- ✅ MDX 内容管理
- ✅ 代码高亮
- ✅ 数学公式
- ✅ 评论系统
- ✅ 点赞功能
- ✅ 响应式设计

**技术栈快照：**

```json
{
  "next": "15.1.0",
  "react": "19.0.0",
  "typescript": "5.x",
  "tailwindcss": "4.0.0"
}
```

---

## 版本管理最佳实践

### 1. 语义化版本号

- **主版本号（Major）：** 不兼容的 API 变更
  - 例如：1.0.0 → 2.0.0
  - 场景：重大架构调整、破坏性变更

- **次版本号（Minor）：** 向下兼容的功能新增
  - 例如：1.0.0 → 1.1.0
  - 场景：新增功能、新增 API

- **修订号（Patch）：** 向下兼容的问题修复
  - 例如：1.0.0 → 1.0.1
  - 场景：bug 修复、小优化

### 2. 发布流程

1. **开发阶段**
   - 在 `develop` 分支开发新功能
   - 使用 feature 分支进行功能开发
   - 定期合并到 `develop`

2. **测试阶段**
   - 创建 `release/v1.1.0` 分支
   - 进行完整测试
   - 修复发现的问题

3. **发布阶段**
   - 合并到 `main` 分支
   - 创建 Git tag
   - 创建 GitHub Release
   - 更新 CHANGELOG.md
   - 部署到生产环境

4. **维护阶段**
   - 监控生产环境
   - 收集用户反馈
   - 规划下一个版本

### 3. 分支策略

```text
main (生产环境)
  ├── v1.0.0 (tag)
  ├── v1.1.0 (tag)
  └── v2.0.0 (tag)

develop (开发环境)
  ├── feature/search
  ├── feature/tags
  └── feature/analytics

hotfix (紧急修复)
  └── hotfix/critical-bug
```

---

## 回滚指南

### 如果需要回滚到 v1.0.0

#### 方法 1：Git 回滚

```bash
# 查看标签
git tag -l

# 切换到指定版本
git checkout v1.0.0

# 创建新分支（如果需要）
git checkout -b rollback-v1.0.0

# 强制推送到 main（谨慎使用）
git push origin main --force
```

#### 方法 2：Vercel 回滚

1. 登录 Vercel Dashboard
2. 进入项目
3. 点击 "Deployments"
4. 找到 v1.0.0 的部署
5. 点击 "..." → "Promote to Production"

#### 方法 3：重新部署

```bash
# 从备份恢复
tar -xzf backups/developer-blog-v1.0.0.tar.gz

# 重新安装依赖
npm install

# 重新部署
git push origin main
```

---

## 版本对比

### 查看版本差异

```bash
# 对比两个版本
git diff v1.0.0 v1.1.0

# 查看文件变更
git diff v1.0.0 v1.1.0 --stat

# 查看特定文件的变更
git diff v1.0.0 v1.1.0 -- package.json
```

### 生成变更日志

```bash
# 查看两个版本之间的提交
git log v1.0.0..v1.1.0 --oneline

# 生成详细的变更日志
git log v1.0.0..v1.1.0 --pretty=format:"- %s (%h)" > changes.md
```

---

## 依赖版本管理

### 锁定依赖版本

```json
{
  "dependencies": {
    "next": "15.1.0",        // 精确版本
    "react": "^19.0.0",      // 兼容版本
    "typescript": "~5.3.0"   // 补丁版本
  }
}
```

### 版本符号说明

- `15.1.0` - 精确版本，只安装这个版本
- `^15.1.0` - 兼容版本，允许 15.x.x（不包括 16.0.0）
- `~15.1.0` - 补丁版本，允许 15.1.x（不包括 15.2.0）
- `*` - 任意版本（不推荐）

### 更新依赖

```bash
# 检查过时的依赖
npm outdated

# 更新所有依赖到兼容版本
npm update

# 更新特定依赖
npm update next

# 更新到最新版本（可能破坏兼容性）
npm install next@latest
```

---

## 环境变量版本管理

### v1.0.0 环境变量

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Giscus
NEXT_PUBLIC_GISCUS_REPO=username/repo
NEXT_PUBLIC_GISCUS_REPO_ID=your-repo-id
NEXT_PUBLIC_GISCUS_CATEGORY=General
NEXT_PUBLIC_GISCUS_CATEGORY_ID=your-category-id
```

### 环境变量变更追踪

在 `.env.local.example` 文件中记录所有环境变量，并在 CHANGELOG.md 中记录变更：

```markdown
### 环境变量变更

#### 新增
- `NEXT_PUBLIC_ANALYTICS_ID` - Google Analytics ID

#### 修改
- `NEXT_PUBLIC_SUPABASE_URL` - 更新为新的 Supabase 项目

#### 移除
- `LEGACY_API_KEY` - 已废弃的 API 密钥
```

---

## 数据库版本管理

### 数据库迁移

使用 Supabase Migrations 或自定义迁移脚本：

```sql
-- migrations/001_initial_schema.sql
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- migrations/002_add_reactions.sql
CREATE TABLE reactions (
  id SERIAL PRIMARY KEY,
  post_id TEXT NOT NULL,
  user_id TEXT NOT NULL,
  type TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 迁移版本追踪

```bash
# 记录当前数据库版本
echo "v1.0.0" > db-version.txt

# 应用迁移
psql -h your-project.supabase.co -U postgres -d postgres -f migrations/001_initial_schema.sql
```

---

## 文档版本管理

### 版本化文档

```text
docs/
  ├── v1.0/
  │   ├── README.md
  │   ├── API.md
  │   └── DEPLOYMENT.md
  ├── v1.1/
  │   ├── README.md
  │   ├── API.md
  │   └── DEPLOYMENT.md
  └── latest/ (symlink to current version)
```

### 文档变更追踪

在每个版本的文档中添加版本信息：

```markdown
---
version: 1.0.0
date: 2024-01-20
status: stable
---

# API 文档 v1.0.0

本文档适用于 Developer Portfolio Blog v1.0.0
```

---

## 持续集成/持续部署（CI/CD）

### GitHub Actions 工作流

```yaml
name: Release

on:
  push:
    tags:
      - 'v*'

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Create Release
        uses: actions/create-release@v1
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          tag_name: ${{ github.ref }}
          release_name: Release ${{ github.ref }}
          body_path: CHANGELOG.md
          draft: false
          prerelease: false
```

---

## 版本发布检查清单

### 发布前检查

- [ ] 所有测试通过
- [ ] 代码审查完成
- [ ] 文档已更新
- [ ] CHANGELOG.md 已更新
- [ ] 版本号已更新（package.json）
- [ ] 环境变量已确认
- [ ] 数据库迁移已测试
- [ ] 性能测试通过
- [ ] 安全扫描通过
- [ ] 浏览器兼容性测试通过

### 发布步骤

- [ ] 创建 release 分支
- [ ] 运行完整测试套件
- [ ] 合并到 main 分支
- [ ] 创建 Git tag
- [ ] 推送到远程仓库
- [ ] 创建 GitHub Release
- [ ] 部署到生产环境
- [ ] 验证生产环境
- [ ] 通知团队和用户
- [ ] 监控错误和性能

### 发布后检查

- [ ] 生产环境正常运行
- [ ] 所有功能正常工作
- [ ] 性能指标正常
- [ ] 错误率在可接受范围
- [ ] 用户反馈收集
- [ ] 文档链接正确
- [ ] 备份已创建

---

## 联系方式

如有版本相关问题，请联系：

- **GitHub Issues：** [项目 Issues 页面]
- **Email：** [your-email@example.com]
- **Discord：** [Discord 服务器链接]

---

**最后更新：** 2024-01-20  
**维护者：** Light Your Future
