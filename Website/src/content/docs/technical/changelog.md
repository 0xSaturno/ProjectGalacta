---
title: Changelog
description: Version history for Project Galacta
---


### v1.4.2 – Oct 15, 2026

**Mod Loader**
- Safety patches: synced with what NetEase's anti-cheat enforces (environment mods are now blocked).

**Companion App**
- Fixed the Convert tab stripping encryption from encrypted mods.

### v1.4.1 – Oct 14, 2026

**Mod Loader**
- Mods that add custom VFX to abilities are no longer blocked.

### v1.4.0 – Oct 9, 2026

**Skin Swapper**
- Reworked the **Materials** tab: hidden parts now stay hidden through respawns, ability material changes, skin swaps and form changes, and are saved per mesh across level changes and restarts.
- Parts hidden by the game itself now show as unticked, and opening the tab no longer re-shows everything.

**Companion App**
- Added a **Convert** tab: turns a mod that replaces a vanilla skin into a Skin Swapper compatible one. Pick a mod from your mods folder (or **Add from file…**), fill the options, and it writes the converted mod to a `GalactaConverted` subfolder. Can update `skins.txt` automatically afterwards.
- The hero list is now read from the game, so new heroes and their names show up without an app update.
- Added a switch on each skin in the Heroes tab to leave it out of `skins.txt` without uninstalling their mods.

### v1.3.0 – Oct 5, 2026

**Skin Swapper**
- Added support for heroes with multiple forms. Skin Swapper Mods can now ship a separate mesh for each form.
- Pick a skin once on the hero's base form and the matching meshes are applied automatically whenever you change form. A form the mod has no mesh for shows the vanilla one.
- The Skins tab now lists the skins made for the form you are currently in, and your choice is remembered per form.
- Added a **Settings** tab with a "Forms follow the base skin" option, to turn the automatic form matching on or off.
- Reworked how the Skin Swapper tracks your hero, fixing wrong or missed targets on heroes with several bodies or clones, and fixed the lag spikes when changing form.
- Restyled the tab bar to match the game's own UI.

**Companion App**
- Reads the new form setting from Skin Configs and writes it to the manifest. The Manifest tables show a new **Form** column.
- Manifests written by older versions keep working and load as the base form.

**For modders**
- The SkinConfig template has a new `TargetSculptID` property. Leave it at `0` for regular skins; set it to target a specific form. Put one mesh and one config per form in the same mod folder to ship them as one skin. See [Skin Swapping → For modders](../../docs/skin-swapping/#heroes-with-multiple-forms-1).
- Existing base form Skin Configs need no changes.

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
