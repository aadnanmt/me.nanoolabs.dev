---
title: "readmeSync"
description: "Automated GitHub Profile README synchronizer."
date: "2026-04-08"
demoURL: "https://github.com/aadnanmt/aadnanmt"
repoURL: "https://github.com/aadnanmt/readmeSync"
tags: ["github", "readme", "automation", "bun"]
---

A minimalist tool to synchronize your GitHub Profile README. Built with **Bun** and **TypeScript**, it uses the **GitHub GraphQL API** for fast data fetching and headless templating.

## Architecture

This project follows a **Headless Templating** approach:

1. **Source**: `README.template.md` (Markdown with placeholders).
2. **Logic**: Bun + TS scripts fetch data from GitHub GraphQL.
3. **Renderer**: Injects stats into placeholders like `{{languages}}` and `{{commit}}`.
4. **Deploy**: GitHub Actions automates the sync every 12 hours to your public profile repository.

## Tech Stack

- **Runtime**: [Bun](https://bun.sh)
- **Language**: TypeScript
- **API**: GitHub GraphQL API v4
- **Automation**: GitHub Actions (Cron)
- **Formatting**: Prettier

## Quick Start

```bash
git clone https://github.com/aadnanmt/readmeSync.git
cd readmeSync
bun install
bun run setup
# Set GH_TOKEN in .env
bun start <path-to-target-readme>
```

## Authentication

This project requires a GitHub Personal Access Token (PAT). You can use either:

- **Fine-grained PAT**: (Recommended) Requires `Contents (Read/Write)`, `Workflows (Read/Write)`, and `Profile (Read-only)` permissions.
- **Classic PAT**: (Easier for multiple organizations) Requires `repo`, `workflow`, and `read:user` scopes.

## Automation

Updates happen twice a day at **05:00 & 17:00 UTC**.
Check `.github/workflows/stats.yml` for the CI/CD pipeline details.

---

_Zero-bloat. Performance-first. Scalable._

Licensed under the **MIT License**.
