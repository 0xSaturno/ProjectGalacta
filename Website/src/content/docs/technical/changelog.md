---
title: Changelog
description: Version history for Project Galacta
---

### v1.6.0 – Nov 26, 2026

**Skin VFX (new mod type)**
- Mods can now attach Niagara effects to a hero's bones while a skin is worn: auras on the back, sparks on the back, and so on. Like the Skin Swapper, only you see them.
- New **Skin VFX** panel: each mod for the skin you have on is listed with an on-count bar and its own box, and the selected mod's effects can be toggled one by one. Your choices are saved per skin.
- A master **Skin VFX** switch pauses every effect without losing your selection.
- See [Skin VFX](../../docs/skin-vfx/).

**Wheel menu**
- New Project Galacta wheel, a quick menu styled like the game's communication wheel. Hold the **Galacta Wheel Key** (default **P**), move the mouse toward a slot and release to open it. Release in the middle to cancel.
  - Slots: **Skin Swapper**, **Skin VFX** and, with the addon installed, **VFX Lab**.
  - The wheel replaces the Skin Swapper key: the old key setting is now **Galacta Wheel Key** in **Settings → Others tab → Project Galacta section**.
  - Optional **Toggle Mods** slot that unloads and reloads your mods, like the Mod Toggle Key. Off by default: **Settings → Others tab → Project Galacta section → Wheel Mod Toggle**.

**For modders**
- New **VFX Lab** addon: spawn any game effect on your hero live, place it on a bone with offset, rotation, scale and loop controls, and export the setup.
  - **Practice Range camera:** orbit around the selected bone, zoom with the mouse wheel, or snap to preset views.
  - **Bone search:** filter the bone list by name.
  - **Duplicate:** copy an entry with all its settings.
- Exported setups become mods in the Companion App's new **Skin VFX** tab, with no Unreal Engine needed. See [Skin VFX → For modders](../../docs/skin-vfx/#for-modders).

**Mod Loader**
- Added support for Repak X's **Galacta Mode** (Repak X v2.4.0): while the game runs, only the mods it has loaded stay locked in Repak X.
- Reloading mods with the Mod Toggle Key now picks up mods you renamed, enabled or disabled while they were unloaded.

**Skeleton Relay (new)**
- Other players using a custom-skeleton skin mod now play their abilities, attacks and emotes on your screen instead of only walking and running, in matches and replays. Works for every such mod.
- Off by default: **Settings → Others tab → Project Galacta section → Skeleton Relay**.
- For those mods' hair and cloth physics too, set the game's **Model Detail** to **Ultra**.

**Skin Swapper**
- Skins reapply faster after form switches and respawns.
- New experimental **Auto-apply saved skins** option (**Settings** tab): applies your saved skin when you pick a hero, no menu open needed. Off by default.

**Replays**
- Project Galacta's features keep working after you skip or rewind in a replay (Skin Swapper still not supported here).

**Companion App**
- New **VFX** tab: build a Skin VFX mod from a VFX Lab export. VFX mods show under their hero and get their own tables on the Manifest tab.
- Now available as a native **Linux** app.
- Converted mods now link the game materials they copy, so they no longer break when a game update changes those materials. A one-time **Fix your converted mods** dialog repairs converted mods you already installed; run it again any time from **Settings → Scan for broken materials**.
- New **Storage** section in Settings: lists the files the app keeps (material patch backups, older mappings, hero assets and scan caches), and lets you delete them.

### v1.5.2 – Nov 15, 2026

**Mod Loader**
- Refined the integrity check: cosmetic mods with harmless packaging differences now load, while mods that hide their contents stay blocked.

### v1.5.1 – Nov 13, 2026

- Fixed a crash on startup after the Season 11 update.
- Mod Loader synced with the new Season 11 anti-cheat integrity check: mods that fail it are no longer loaded.

### v1.5.0 – Oct 24, 2026

Thank you for 1,000+ endorsements and 100,000+ downloads! This update brings a full visual overhaul and new features to the Skin Swapper menu.

**Skin Swapper**
- New **Accessory** tab: move your equipped hero accessory to another spot on the body. Pick one of 15 points on the skeleton (head, back, belt and both belt sides, shoulders, elbows, wrists, knees, ankles), fine-tune its position, rotation and scale, or reset it to the game's placement. Saved per mesh.
- Full UI restyle: a new framed window, slanted tabs, and game-style scrollbars, sliders, checkboxes and buttons, with bigger rows and text, plus toggleable VFX particles.
- **Morphs** tab: each morph now has a value box where you can type an exact value (even above 1 or below 0) or drag to adjust it, and long morph names scroll when you hover them.

**Mod Loader**
- The mod unmount/remount key can now be rebound: **Settings → Others tab → Project Galacta section → Mod Toggle Key** (default F7).

### v1.4.2 – Oct 15, 2026

**Mod Loader**
- Safety patches: synced with what NetEase's anti-cheat enforces (environment mods are now blocked).

**Companion App**
- Converting an encrypted mod into a Skin Swapper-compatible one no longer strips its encryption.

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
