---
title: "Niri Dotfiles"
description: "Custom Niri WM config with Cyan color style for Arch Linux."
date: "2026-07-20"
repoURL: "https://github.com/aadnanmt/niri-dotfiles"
tags: ["niri", "dotfiles", "arch", "wayland"]
---

Personal dotfiles for Niri (Wayland compositor) on Arch Linux. Cyan theme, minimal, aesthetic.

## Screenshots

<details>
<summary>Interface & Menus</summary>
<br>
<img src="/projects/niri-dotfiles/interface.png" width="800" loading="lazy">
<br>
<img src="/projects/niri-dotfiles/menu-apps-wofi.png" width="800" loading="lazy">
<br>
<img src="/projects/niri-dotfiles/waybar.png" width="800" loading="lazy">
<br>
<img src="/projects/niri-dotfiles/powermenu.png" width="800" loading="lazy">
<br>
<img src="/projects/niri-dotfiles/emoji-picker.png" width="800" loading="lazy">
<br>
<img src="/projects/niri-dotfiles/wp-select.png" width="800" loading="lazy">
</details>

<details>
<summary>TUI & Apps</summary>
<br>
<img src="/projects/niri-dotfiles/tui.png" width="800" loading="lazy">
<br>
<img src="/projects/niri-dotfiles/dunst.png" width="800" loading="lazy">
<br>
<img src="/projects/niri-dotfiles/htop.png" width="800" loading="lazy">
<br>
<img src="/projects/niri-dotfiles/yazi.png" width="800" loading="lazy">
</details>

## Overview

Niri is a scrollable tiling Wayland compositor. Config live in `~/.config/niri/`.

## Tech Stack

- **Compositor:** Niri
- **Shell:** Fish + Starship
- **Terminal:** Kitty
- **Launcher:** wofi
- **Status Bar:** Waybar
- **Editor:** Neovim (LazyVim)
- **Notifications:** Dunst
- **File Manager:** Yazi
- **Lock Screen:** Swaylock

## Quick Start

```bash
git clone https://github.com/aadnanmt/niri-dotfiles.git
cd niri-dotfiles
cp -r .config/* ~/.config/
```

## Directory Structure

```
config/
├── niri/             # WM config (modules/)
├── kitty/            # Terminal
├── fish/             # Shell config
├── waybar/           # Status bar
├── wofi/             # App launcher
├── dunst/            # Notifications
├── yazi/             # File manager
├── swaylock/         # Lock screen
├── nvim/             # Neovim (LazyVim)
└── theme/            # Cyan color palette
```

## Keybinds

| Key | Action |
|-----|--------|
| Mod + Return | Kitty |
| Mod + D | wofi launcher |
| Mod + N | Kitty nvim |
| Mod + Q | Close window |
| Mod + F | Maximize column |
| Mod + V | Toggle floating |
| Mod + O | Toggle overview |
| Mod + 1-9 | Switch workspace |
| Mod + Shift + 1-9 | Move to workspace |
| Mod + P | Powermenu |
| Mod + . | Expel window from column |
| Mod + Space | Consume column |
| Mod + Shift + W | Random wallpaper |
| Mod + Shift + E | Emoji picker |
| Super + Shift + L | Lock screen |

## Credits

Based on [hyprland-dotfiles](https://github.com/aadnanmt/hyprland-dotfiles) - refactored from Hyprland to Niri WM.

- **[elifouts (Dotfiles)](https://github.com/elifouts/Dotfiles):** Wofi configs, Powermenu.
- **[dln (wofi-emoji)](https://github.com/dln/wofi-emoji):** Emoji selector.
- **[victordantasdev/waybar](https://github.com/victordantasdev/waybar):** Waybar base config.
- **[LazyVim](https://www.lazyvim.org/):** Neovim framework.
- **[Niri](https://github.com/YaLTeR/niri):** Wayland compositor.

## License

GPL-3.0
