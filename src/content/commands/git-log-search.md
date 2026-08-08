---
title: "Git log search"
description: "Search your commit history by message or by code change"
category: "Git"
---

Two ways to search history commits, depend on what you remember.

### By commit message

```bash
git log --grep="variables" --oneline
```

_Only commits whose message match the word:_
<img src="/content/commands/git-log-search/git-log-grep.png" alt="Git Log Grep"/>

### By code change

```bash
git log -S "variables" --oneline -- src/
```

- `-S` : find commits that added or removed the string
- `-- src/` : limit to a path

_Find the commit that introduce or remove the code:_
<img src="/content/commands/git-log-search/git-log-pickaxe.png" alt="Git Log Pickaxe"/>

add `-p` to see the diff too.

See you again ^\_^
