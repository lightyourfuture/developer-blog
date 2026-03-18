# 🤝 贡献指南

感谢你考虑为 Developer Portfolio Blog 做出贡献！

## 📋 目录

- [行为准则](#行为准则)
- [如何贡献](#如何贡献)
- [开发流程](#开发流程)
- [代码规范](#代码规范)
- [提交规范](#提交规范)
- [Pull Request 流程](#pull-request-流程)
- [报告问题](#报告问题)
- [功能请求](#功能请求)

---

## 行为准则

### 我们的承诺

为了营造一个开放和友好的环境，我们承诺：

- 使用友好和包容的语言
- 尊重不同的观点和经验
- 优雅地接受建设性批评
- 关注对社区最有利的事情
- 对其他社区成员表示同理心

### 不可接受的行为

- 使用性化的语言或图像
- 人身攻击或侮辱性评论
- 公开或私下骚扰
- 未经许可发布他人的私人信息
- 其他不道德或不专业的行为

---

## 如何贡献

### 贡献类型

我们欢迎以下类型的贡献：

1. **代码贡献**
   - 新功能开发
   - Bug 修复
   - 性能优化
   - 代码重构

2. **文档贡献**
   - 改进现有文档
   - 添加新的文档
   - 翻译文档
   - 修正拼写错误

3. **设计贡献**
   - UI/UX 改进
   - 图标和插图
   - 主题设计
   - 响应式优化

4. **测试贡献**
   - 编写测试用例
   - 报告 Bug
   - 测试新功能
   - 性能测试

5. **社区贡献**
   - 回答问题
   - 帮助新用户
   - 分享使用经验
   - 推广项目

---

## 开发流程

### 1. Fork 仓库

点击 GitHub 页面右上角的 "Fork" 按钮。

### 2. 克隆仓库

```bash
git clone https://github.com/your-username/developer-blog.git
cd developer-blog
```

### 3. 添加上游仓库

```bash
git remote add upstream https://github.com/lightyourfuture/developer-blog.git
```

### 4. 创建分支

```bash
# 从 main 分支创建新分支
git checkout -b feature/your-feature-name

# 或者修复 bug
git checkout -b fix/bug-description
```

### 5. 安装依赖

```bash
npm install
```

### 6. 配置环境变量

```bash
cp .env.local.example .env.local
# 编辑 .env.local 添加你的配置
```

### 7. 开始开发

```bash
npm run dev
```

### 8. 运行测试

```bash
npm test
```

### 9. 提交更改

```bash
git add .
git commit -m "feat: add amazing feature"
```

### 10. 推送到 Fork

```bash
git push origin feature/your-feature-name
```

### 11. 创建 Pull Request

访问你的 Fork 仓库，点击 "New Pull Request"。

---

## 代码规范

### TypeScript

- 使用 TypeScript 编写所有代码
- 避免使用 `any` 类型
- 为函数和组件添加类型注解
- 使用接口（interface）定义对象类型

```typescript
// ✅ 好的示例
interface User {
  id: string;
  name: string;
  email: string;
}

function greetUser(user: User): string {
  return `Hello, ${user.name}!`;
}

// ❌ 不好的示例
function greetUser(user: any) {
  return `Hello, ${user.name}!`;
}
```

### React 组件

- 使用函数组件和 Hooks
- 组件名使用 PascalCase
- 文件名与组件名一致
- 为组件添加 Props 类型

```typescript
// ✅ 好的示例
interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export function Button({ label, onClick, disabled = false }: ButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}
```

### 样式

- 使用 Tailwind CSS 类名
- 避免内联样式
- 使用语义化的类名
- 保持响应式设计

```tsx
// ✅ 好的示例
<div className="flex items-center gap-4 p-6 rounded-lg bg-white/5">
  <h2 className="text-2xl font-bold text-white">Title</h2>
</div>

// ❌ 不好的示例
<div style={{ display: 'flex', padding: '24px' }}>
  <h2 style={{ fontSize: '24px' }}>Title</h2>
</div>
```

### 文件组织

```text
components/
  ├── ui/              # 基础 UI 组件
  ├── layout/          # 布局组件
  └── features/        # 功能组件

lib/
  ├── utils/           # 工具函数
  ├── hooks/           # 自定义 Hooks
  └── types/           # 类型定义

app/
  ├── (routes)/        # 路由页面
  └── actions/         # Server Actions
```

### 命名规范

- **组件**: PascalCase (`Button.tsx`, `UserProfile.tsx`)
- **函数**: camelCase (`getUserData`, `formatDate`)
- **常量**: UPPER_SNAKE_CASE (`API_URL`, `MAX_ITEMS`)
- **类型/接口**: PascalCase (`User`, `BlogPost`)
- **文件夹**: kebab-case (`user-profile`, `blog-post`)

---

## 提交规范

我们使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范。

### 提交格式

```text
<type>(<scope>): <subject>

<body>

<footer>
```

### 类型（Type）

- `feat`: 新功能
- `fix`: Bug 修复
- `docs`: 文档更新
- `style`: 代码格式（不影响代码运行）
- `refactor`: 重构（既不是新功能也不是 Bug 修复）
- `perf`: 性能优化
- `test`: 测试相关
- `chore`: 构建过程或辅助工具的变动
- `ci`: CI 配置文件和脚本的变动
- `revert`: 回滚之前的提交

### 示例

```bash
# 新功能
git commit -m "feat(blog): add search functionality"

# Bug 修复
git commit -m "fix(comments): resolve Giscus loading issue"

# 文档更新
git commit -m "docs(readme): update installation instructions"

# 性能优化
git commit -m "perf(images): implement lazy loading"

# 重构
git commit -m "refactor(components): simplify Button component"
```

### 提交消息规则

1. 使用现在时态（"add feature" 而不是 "added feature"）
2. 使用祈使语气（"move cursor to..." 而不是 "moves cursor to..."）
3. 第一行不超过 72 个字符
4. 详细描述放在空行之后
5. 引用相关的 Issue（如 "Closes #123"）

---

## Pull Request 流程

### 1. 确保代码质量

在提交 PR 之前：

```bash
# 运行 linter
npm run lint

# 运行测试
npm test

# 构建项目
npm run build
```

### 2. 更新文档

如果你的更改影响了：

- API 接口
- 配置选项
- 使用方法

请更新相应的文档。

### 3. 编写 PR 描述

一个好的 PR 描述应该包括：

```markdown
## 📝 描述

简要描述这个 PR 做了什么。

## 🎯 相关 Issue

Closes #123

## 🔄 变更类型

- [ ] Bug 修复
- [x] 新功能
- [ ] 破坏性变更
- [ ] 文档更新

## ✅ 测试

描述你如何测试这些更改：

1. 测试步骤 1
2. 测试步骤 2
3. 测试步骤 3

## 📸 截图（如果适用）

添加截图展示变更效果。

## 📋 检查清单

- [x] 代码遵循项目的代码规范
- [x] 已添加必要的注释
- [x] 已更新相关文档
- [x] 所有测试通过
- [x] 没有引入新的警告
```

### 4. 等待审查

- 维护者会审查你的 PR
- 可能会要求修改
- 请及时响应反馈
- 保持友好和专业

### 5. 合并

- PR 被批准后会被合并
- 你的贡献会被记录在 CHANGELOG.md
- 感谢你的贡献！🎉

---

## 报告问题

### 在报告问题之前

1. 检查是否已有相同的 Issue
2. 确保使用最新版本
3. 尝试在本地重现问题

### 如何报告

创建 Issue 时请包括：

1. **清晰的标题**
   - ❌ "网站坏了"
   - ✅ "博客列表页面在移动端显示错误"

2. **详细描述**
   - 问题是什么
   - 预期行为
   - 实际行为

3. **重现步骤**

   ```text
   1. 访问 '/blog'
   2. 在移动设备上查看
   3. 滚动到底部
   4. 看到布局错误
   ```

4. **环境信息**
   - OS: Windows 11
   - Browser: Chrome 120
   - Node: 18.17.0
   - Version: 1.0.0

5. **截图或视频**
   - 如果可能，添加视觉证据

6. **错误日志**

   ```text
   Error: Cannot read property 'map' of undefined
   at BlogList.tsx:42
   ```

---

## 功能请求

### 如何提出功能请求

1. **检查路线图**
   - 查看 [ROADMAP.md](ROADMAP.md)
   - 确保功能未在计划中

2. **创建 Issue**
   - 使用 "Feature Request" 模板
   - 清晰描述功能

3. **包含以下信息**
   - **问题**: 你想解决什么问题？
   - **解决方案**: 你建议的解决方案
   - **替代方案**: 你考虑过的其他方案
   - **用例**: 谁会使用这个功能？
   - **示例**: 其他项目的类似功能

### 功能请求示例

```markdown
## 🚀 功能请求

### 问题描述
作为一个博客作者，我希望能够看到每篇文章的阅读量统计，以便了解哪些内容更受欢迎。

### 建议的解决方案
在文章列表和详情页显示阅读量数字，使用 Supabase 存储浏览记录。

### 替代方案
使用 Google Analytics 或其他第三方分析工具。

### 额外信息
- Medium 和 Dev.to 都有类似功能
- 可以考虑添加趋势图表
- 需要考虑隐私问题
```

---

## 开发技巧

### 调试

```bash
# 查看详细日志
npm run dev -- --debug

# 清除缓存
rm -rf .next
npm run dev
```

### 性能分析

```bash
# 分析包大小
npm run build
npm run analyze
```

### 数据库

```bash
# 重置数据库
# 在 Supabase Dashboard 运行 schema.sql
```

---

## 获取帮助

如果你需要帮助：

1. **查看文档**
   - [README.md](README.md)
   - [ROADMAP.md](ROADMAP.md)
   - [docs/](docs/)

2. **搜索 Issues**
   - 可能已有答案

3. **创建 Discussion**
   - 用于一般性问题
   - 不确定是否是 Bug

4. **联系维护者**
   - GitHub: @lightyourfuture
   - Email: [your-email@example.com]

---

## 致谢

感谢所有贡献者！你们的贡献让这个项目变得更好。

### 贡献者列表

查看 [Contributors](https://github.com/lightyourfuture/developer-blog/graphs/contributors) 页面。

---

## 许可证

通过贡献代码，你同意你的贡献将在 [MIT License](LICENSE) 下授权。

---

**最后更新**: 2024-01-20  
**版本**: 1.0.0

感谢你的贡献！🙏
