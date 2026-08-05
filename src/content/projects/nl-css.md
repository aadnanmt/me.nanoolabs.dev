---
title: "@nlbs/css"
description: "CSS foundation for the Nanoo Labs ecosystem. Design tokens, resets, and utility components built on LightningCSS"
date: "2026-06-15"
repoURL: "https://github.com/nanoolabs/css"
category: "nanoo"
tags: ["css", "lightningcss", "design-tokens", "npm"]
---

CSS foundation for the Nanoo Labs ecosystem. Design tokens, resets, and utility components built on LightningCSS.

## Quick Start

```bash
pnpm add @nlbs/css
```

```javascript
import "@nlbs/css"
```

Or via CDN:

```html
<link rel="stylesheet" href="https://unpkg.com/@nlbs/css" />
```

## Features

- **Design tokens**: CSS custom properties (`--nl-*`) for colors, spacing, radius, typography
- **Dark-first**: dark mode by default, light override via `@media` + `[data-theme]`
- **Zero runtime**: no pre-processor, no framework. Static CSS output
- **Components**: BEM-like `nl-*` classes: container, button, card, text utilities

## Architecture

- **Build**: LightningCSS CLI - bundling, minification, autoprefix
- **Tokens**: CSS custom properties (`--nl-*`) - colors, spacing (REM), radius, typography
- **Components:** BEM-like `nl-*` classes
- **Output:** `dist/nanoo.min.css`

## Development

```bash
git clone https://github.com/nanoolabs/css.git # clone repo
cd css/      # move to directory repo @nlbs/css
pnpm install # install deps
pnpm build   # minify → dist/nanoo.min.css
pnpm dev     # unminified → dist/nanoo.css
```

## Maintained

[@aadnanmt](https://github.com/aadnanmt) | [Nanoo Labs](https://nanoolabs.dev)
