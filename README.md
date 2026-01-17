# CodaBuilder Portfolio Website

一个符合澳洲审美的现代化极简builder portfolio展示网站，使用React + Vite构建。

## 技术栈

- **React 18** - UI框架
- **Vite** - 构建工具
- **现代CSS** - 极简设计风格

## 配色方案

网站使用了以下配色（来自设计图）：
- **浅奶油色** (#FCF1DA) - 主背景
- **浅米色** (#D5C7AE) - 次要背景/卡片
- **深棕色** (#4D3F30) - 主要文字/强调
- **明亮橄榄绿** (#A9A135) - 强调色/标签
- **深橄榄绿** (#6D602B) - 次要文字
- **非常深橄榄绿** (#35321E) - 深色文字/页脚

## 功能特性

- 现代化极简设计风格
- React组件化架构
- 响应式布局，支持移动设备
- Portfolio项目展示
- 快速开发体验（Vite）

## 安装和运行

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## 项目结构

```
codabuilder/
├── src/
│   ├── components/      # React组件
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Portfolio.jsx
│   │   ├── PortfolioItem.jsx
│   │   └── Footer.jsx
│   ├── App.jsx          # 主应用组件
│   ├── main.jsx         # 入口文件
│   └── index.css        # 全局样式
├── index.html           # HTML模板
├── vite.config.js       # Vite配置
├── package.json         # 项目配置
└── README.md            # 项目说明
```

## 自定义

可以在 `src/components/Portfolio.jsx` 文件中的 `portfolioItems` 数组中修改portfolio项目数据。
