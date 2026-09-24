---
title: Mod Loader
description: Using Project Galacta's mod loader
---

> ![icon: exclamation](../../../assets/icons/exclamation.webp) _The Companion App isn't required for any of this. Install the Project Galacta mod, launch the game, log in — mods get mounted on their own._

## What it does

The mod loader is responsible for discovering and loading mod packages after the player logs in the game.

## Supported mod format

Project Galacta's Mod Loader can load:
- **Legacy paks** (.pak only) – that contain audio replacements and other raw asset types.
- **IOStore bundles** (.pak, .ucas, .utoc) – that contain meshes, textures, text, UI, and vfx assets.

What it won't load:
- **Config mods** – legacy paks containing configuration (.ini) files will be blocked.
- **Camera Shake mods** – bundles containing any CameraShake related modifications will be blocked.

Both are blocked because they're considered cheating under the game's own [Fair Play Guidelines](https://www.marvelrivals.com/guide/1214569/).

## Loading mods

- Players can stack multiple mods and manage them with mod managers like [Repak X](https://www.nexusmods.com/marvelrivals/mods/10322) as usual.
- Disabled mods (`.bak_repak`) will be skipped.

## Unmounting / remounting mods

Mods are mounted automatically after login, but you don't need to restart the game to toggle them off or change your mod selection. Press **F7** at any time to unmount or remount, then trigger a level change (enter/exit a match or the Practice Range) for it to actually take effect.

**Just want mods off/back on:**
1. F7 to unmount.
2. Switch level to apply.
3. F7 to remount.
4. Switch level again to apply.

**Want to add/remove/enable/disable mods first:**
1. F7 to unmount.
2. Manage your mods (add, remove, enable, disable).
3. F7 to remount.
4. Switch level to apply.

## Troubleshooting

- If the game crashes after mounting, it's most likely because an outdated mod needs to be updated by the author.
- If mods don't seem to load at all, double-check the install steps in [Getting Started](../getting-started/).
