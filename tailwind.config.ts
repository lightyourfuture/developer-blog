import type { Config } from 'tailwindcss';

/**
 * Tailwind CSS v4 配置文件
 * 
 * 注意：Tailwind v4 主要通过 CSS 变量和 @theme 指令配置
 * 此文件主要用于文档和类型支持
 * 
 * 主要配置在 app/globals.css 中：
 * - 暗黑模式为默认主题 (Requirements 3.1, 3.3)
 * - 高饱和度霓虹强调色 (Dopamine colors) (Requirements 3.4)
 * - 圆角样式 (Squircle) (Requirements 3.5)
 * - 毛玻璃效果工具类 (Glassmorphism) (Requirements 3.6, 10.1, 10.2, 10.3)
 */
const config: Config = {
    darkMode: 'class', // 支持暗黑模式切换
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
};

export default config;
