---
title: Mod Loader
description: Using Project Galacta's mod loader
---

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

## Troubleshooting

- If the game crashes after mounting, it's most likely because an outdated mod needs to be updated by the author.
- If mods don't seem to load at all, double-check the install steps in [Getting Started](../getting-started/).
