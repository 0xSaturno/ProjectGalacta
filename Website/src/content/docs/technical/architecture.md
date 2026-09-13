---
title: Architecture
description: A technical breakdown of how Project Galacta's pieces fit together
---

## Overview

The UE project behind Project Galacta isn't a copy of Marvel Rivals' own source – it's a **reClass project**: class layouts are mirrored from the shipped game itself so new code can compile and run against the game's real classes without ever having the original source. Everything below is built on top of that mirrored project.

The goal is to go beyond the game's current modding ceiling. The modding scene has been stuck to simple cosmetic mesh, texture, and material swaps for too long – this project aims to push that and Skin Swapper is the proof of it. Right now, there are three independent pieces:

- **Mod Loader** – mounts packed mod containers (`.pak`/`.ucas`/`.utoc`) after login using the game's own native functions. More reliable and less invasive than other low-level game patching solutions. It works on its own and has nothing to do with the manifest below.
- **Skin Swapper** – an in-game system that reads a manifest and swaps a hero's equipped mesh for one from an installed mod, allowing for multiple meshes over a single skin.
- **Companion App** – an external desktop tool that scans your installed mods and writes that manifest. It's the Skin Swapper's counterpart, not the Mod Loader's – there's no direct link between the desktop app and the game process either way.

## Why a separate desktop app at all

Each Project Galacta-compatible skin mod carries its own Skin Config data asset describing what it replaces – but mods are packed after the game's own build, so their content never makes it into the game's Asset Registry at all. As far as the engine's own index is concerned, installed mods simply don't exist.

The Companion App exists to bridge that gap: it does the loading and reading of every Skin Config installed on your mods library ahead of time, and distills the result into a single lightweight manifest. In-game, the Skin Swapper only ever reads that manifest – it never has to open a mod's contents itself, which is what makes browsing and swapping skins in the middle of a match instant instead of a scan.

## Data flow

1. You install a skin mod that ships a [Skin Config data asset](../../docs/skin-swapping/#for-modders).
2. The Companion App scans your mods, validates each one, and writes the manifest.
3. In-game, the Skin Swapper reads the manifest and matches entries against whatever skin you currently have equipped.
4. A match swaps in the modded mesh – nothing is downloaded, injected into memory, or modified on disk inside the game's own files.

The manifest is re-read on every hero select – no level reload or game restart needed. The Skins tab can only list meshes from mods already mounted, though, and mounting only happens at login – so a newly added mod still needs a re-login before it shows up.

## Integrity

Every manifest entry is validated before it's allowed to reach the game, both when the Companion App writes it and again when the Skin Swapper reads it. The short version: a mod can only replace the mesh of a skin you already own, and can't be made to point at the game's own vanilla assets. See [Skin Swapping → Integrity concerns](../../docs/skin-swapping/#integrity-concerns) for what that means in practice – the exact validation logic isn't public, since detailing it would mostly just help someone find a way around it.

## Tech stack

- **Game side:** Unreal Engine 5.3, built mostly in Blueprints. A small ASI bridge exists for the handful of cases Blueprints genuinely can't reach on their own, used as a class/object provider only – not publicly released yet.
- **Companion App:** C# / .NET, Avalonia UI. Powered by [UAssetTool](https://github.com/XzantGaming/UassetToolRivals).

See [Future Plans](../../future-plans/) for what's coming next.
