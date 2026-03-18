# 📝 博客文章写作指南

## 快速开始

### 1. 创建新文章

在 `content/blog/` 目录下创建一个新的 `.mdx` 文件，文件名使用英文和连字符，例如：

- `my-first-post.mdx`
- `react-tutorial.mdx`
- `javascript-tips.mdx`

### 2. 文章结构

每篇文章包含两部分：

#### Frontmatter（元数据）

在文件开头，用 `---` 包裹：

```yaml
---
title: "文章标题"
date: "2024-01-22"
description: "文章简短描述"
tags: ["标签1", "标签2"]
author: "作者名字"
---
```

**字段说明：**

- `title`: 文章标题（必填）
- `date`: 发布日期，格式 YYYY-MM-DD（必填）
- `description`: 简短描述，显示在列表页（必填）
- `tags`: 标签数组，用于分类（可选）
- `author`: 作者名字（可选）

#### 正文内容

Frontmatter 之后就是正文，使用 Markdown 格式。

---

## Markdown 语法

### 标题

```markdown
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
```

### 段落和换行

段落之间空一行。

### 文本格式

```markdown
**粗体文字**
*斜体文字*
~~删除线~~
`行内代码`
```

### 列表

无序列表：

```markdown
- 项目 1
- 项目 2
- 项目 3
```

有序列表：

```markdown
1. 第一项
2. 第二项
3. 第三项
```

### 链接

```markdown
[链接文字](https://example.com)
```

### 引用

```markdown
> 这是一段引用文字
> 可以多行
```

### 表格

```markdown
| 列1 | 列2 | 列3 |
|-----|-----|-----|
| 数据1 | 数据2 | 数据3 |
| 数据4 | 数据5 | 数据6 |
```

---

## 代码高亮

### 基本代码块

使用三个反引号 ``` 包裹代码，并指定语言：

````markdown
```javascript
function hello() {
  console.log("Hello World");
}
```
````

### 支持的语言

- `javascript` / `js`
- `typescript` / `ts`
- `python` / `py`
- `java`
- `cpp` / `c++`
- `c`
- `csharp` / `cs`
- `go`
- `rust`
- `php`
- `ruby`
- `swift`
- `kotlin`
- `html`
- `css`
- `scss`
- `json`
- `yaml`
- `markdown` / `md`
- `bash` / `shell`
- `sql`

### 代码示例

**JavaScript:**

````markdown
```javascript
const greeting = "Hello World";
console.log(greeting);
```
````

**TypeScript:**

````markdown
```typescript
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "张三",
  age: 25
};
```
````

**Python:**

````markdown
```python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(10))
```
````

---

## 数学公式

使用 LaTeX 语法编写数学公式。

### 行内公式

```markdown
这是行内公式：$E = mc^2$
```

### 块级公式

```markdown
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$
```

### 常用公式示例

**求和：**

```markdown
$$
\sum_{i=1}^{n} i = \frac{n(n+1)}{2}
$$
```

**积分：**

```markdown
$$
\int_0^1 x^2 dx = \frac{1}{3}
$$
```

**矩阵：**

```markdown
$$
\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}
$$
```

**分数：**

```markdown
$$
\frac{a}{b} = \frac{c}{d}
$$
```

---

## 完整示例

这是一个完整的文章示例：

```markdown
---
title: "学习 JavaScript 的 10 个技巧"
date: "2024-01-22"
description: "分享我学习 JavaScript 过程中总结的 10 个实用技巧"
tags: ["JavaScript", "编程技巧", "前端开发"]
author: "Light Your Future"
---

# 学习 JavaScript 的 10 个技巧

JavaScript 是现代 Web 开发的核心语言。这里分享我的学习经验。

## 1. 理解变量作用域

JavaScript 有三种声明变量的方式：

```javascript
var oldWay = "不推荐";
let modernWay = "推荐";
const constant = "常量";
```

## 2. 使用箭头函数

箭头函数更简洁：

```javascript
// 传统函数
function add(a, b) {
  return a + b;
}

// 箭头函数
const add = (a, b) => a + b;
```

## 3. 解构赋值

解构让代码更清晰：

```javascript
const user = { name: "张三", age: 25 };
const { name, age } = user;

const numbers = [1, 2, 3];
const [first, second] = numbers;
```

## 总结

掌握这些技巧可以让你的 JavaScript 代码更加优雅和高效！
```

---

## 文件命名规范

### 推荐的命名方式

- ✅ `my-first-post.mdx`
- ✅ `react-hooks-guide.mdx`
- ✅ `javascript-tips-2024.mdx`

### 不推荐的命名方式

- ❌ `My First Post.mdx` (有空格)
- ❌ `我的文章.mdx` (中文文件名)
- ❌ `post_1.mdx` (下划线)

---

## 访问文章

文章创建后，访问地址为：

```
http://localhost:3000/blog/文件名（不含.mdx）
```

例如：
- `my-first-post.mdx` → `http://localhost:3000/blog/my-first-post`
- `react-tutorial.mdx` → `http://localhost:3000/blog/react-tutorial`

---

## 常见问题

### Q: 文章不显示？

1. 检查文件是否在 `content/blog/` 目录
2. 检查文件扩展名是否为 `.mdx`
3. 检查 Frontmatter 格式是否正确（必须有 `---` 包裹）
4. 刷新浏览器页面

### Q: 代码高亮不生效？

1. 确保代码块使用三个反引号 ```
2. 确保指定了正确的语言名称
3. 检查代码块是否正确闭合

### Q: 数学公式不显示？

1. 行内公式使用单个 `$`
2. 块级公式使用双 `$$`
3. 确保 LaTeX 语法正确

---

## 快速模板

使用 `content/blog/_template.mdx` 作为新文章的起点：

1. 复制 `_template.mdx`
2. 重命名为你的文章名
3. 修改 Frontmatter
4. 编写内容
5. 保存并刷新浏览器

---

## 提示

- 📝 使用 VS Code 编辑 MDX 文件
- 🎨 安装 MDX 语法高亮插件
- 👀 开发服务器会自动刷新
- 💾 记得保存文件（Ctrl+S）

祝你写作愉快！🎉
