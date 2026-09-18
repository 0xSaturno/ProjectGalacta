---
title: Changelog
description: Version history for Project Galacta
---


### v1.2.2 – Sep 18, 2026

**Mod Loader**
- Fixed an issue where some mods couldn't be unmounted/remounted.

### v1.2.1 – Sep 17, 2026

**Mod Loader**
- Refined mod mount ordering to fix additional priority edge cases.

### v1.2.0 – Sep 16, 2026

**Mod Loader**
- Added a dedicated keybind to **unmount/remount** mods on the fly (add/remove or enable/disable, without restarting the game). Press **F7** at any time and trigger a level change (e.g. enter/exit a match or the Practice Range) for changes to apply.
- Now replicates the game's native mod mounting order, fixing most mod priority issues.
- Improved mod loading stability.

**Skin Swapper**
- Rewrote the swapped mesh material refresh logic, fixing cases where heroes with abilities that change their materials (like Emma Frost's Diamond Form and Psylocke's Invisibility) had their materials revert.
- Fixed an issue where Human Torch wasn't targeted by the Skin Swapper, causing performance issues.

**General**
- Added a Project Galacta section under the game's native settings menu (in the "Others" tab): open the game's Paks folder, rebind the Mesh Swapper menu key, and a panic button to stop the Mesh Swapper logic in case of performance issues.

**Companion App**
- Fixed an issue where a custom game directory wouldn't apply correctly.

> ![icon: exclamation](../../../assets/icons/exclamation.webp) _For overlapping mods that still conflict, you may need to adjust priority manually (e.g. prefix the filename with `!`, or increase the number of `9`s). [Repak X](https://github.com/XzantGaming/Repak-X) makes this easy._

### v1.1.0 – Sep 12, 2026

**Mod Loader**
- Mod loading stability has been improved.
- Resolved mod priority issues.

### v1.0.0 – Sep 11, 2026

Public release: Mod Loader, Skin Swapper, Companion App, and the SkinConfig template.
