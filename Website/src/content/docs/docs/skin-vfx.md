---
title: Skin VFX
description: How to add Niagara effects to a skin, as a player or a modder
---

## Overview

Skin VFX mods attach Niagara effects to a hero's bones while a given skin is worn: a glow around the eyes, sparks on the shoulders, flames on the hand. Like the rest of the Skin Swapper, they're only visible to you.

A VFX mod can reuse any effect already in the game, so most of them need no Unreal Engine at all.

## Using a VFX mod

1. Install the mod into your mods folder.
2. Open the Companion App, run a scan and press **Write to game** on the Manifest tab.
3. In-game, equip the skin the mod is for, hold the **Galacta Wheel Key** (default **P**) and release on the VFX slot to open the VFX panel.
4. Tick the effects you want. Each one has its own toggle, and your choices are saved.

The panel only lists mods for the skin you have on. Effects start once you've opened a Project Galacta menu in the level, the same moment a saved skin applies.

A mod made for a skin works on that skin's vanilla mesh and on any mesh mod for it, unless it targets one specific Skin Swapper mesh. A bone the current mesh doesn't have is simply skipped.

## For modders

The workflow is: build the effect live in the game with the **VFX Lab** addon, export it, and let the Companion App turn the export into a mod.

### Making a setup in the VFX Lab

Install the VFX Lab addon mod, equip the skin you're making the mod for, hold the **Galacta Wheel Key** and release on the VFX Lab slot.

1. Name your setup. This becomes the mod's name in the VFX panel.
2. Paste the path of a Niagara System into the path field. A "ObjectPath" path copied from FModel works as it is, the Lab cleans it when you press **Apply**:
   `/Game/Marvel/VFX/Particles/Characters/1031/1031313/NS_1031313_BodyStar_01.20`
3. Pick a bone from the list on the right, and the effect moves there.
4. Adjust its offset, rotation and scale.
5. Tick **Loop** if the effect plays once and stops, see below.
   For a hero with several forms, the button next to it switches the entry between **All Forms** and the form on screen (**Form N**). The Lab follows form changes, so switch forms in game to place an effect on each one.
6. Press **Add Entry** for each extra effect, up to 16 per setup. **Duplicate** copies the current entry. Give each one its own name: that's its toggle label in the panel.
7. For a symmetrical effect, place it on one side and press **Mirror**. It flips the current entry to the opposite bone with a mirrored offset. A bone with no twin on the other side keeps the same bone.
8. Press **Export**. The setup is saved to `%LOCALAPPDATA%\Marvel\Saved\GalactaVFX\GalactaVFX_{name}.json`.

If a Project Galacta mesh is swapped on when you export, the setup only applies while that mesh is on. Otherwise it applies to the skin, whatever mesh is on it.

### Building the mod

1. Open the Companion App's **Skin VFX** tab. Your exports are listed, newest first.
2. Pick one, fill in your name and press **Build**.

The mod is written to `~mods\GalactaConverted\PG_VFX_{SkinID}_{Name}_9999999_P`, as a `.pak`, `.ucas` and `.utoc`. Those three files are what you ship. To change the setup, tweak it in the Lab, export again and build again: the mod is replaced. The game has to be closed for that.

### Good to know

- **Loop** restarts an effect right after it fully finishes. It does nothing on an effect that already loops.
- **Some effects show nothing.** An effect that reads the hero's mesh to emit from it, such as a full-body burn, has no mesh to read when spawned on a bone. It stays on with nothing on screen, and the Lab is where you find out. (These types will be supported in the future)
- **Some effects ignore Scale.** Many ability effects simulate their particles in world space with fixed sizes, so the Scale slider has no effect on them. That's how the effect is built, and nothing on our side can change it. If one shows up at the wrong size, pick a different effect.
- **Effects stack.** A skin's own VFX keep playing under yours, and so do other VFX mods the player turns on.
- **Keep it light.** The entry limit caps how many effects run, not how heavy they are. Check how your setup performs in a match before you ship it.

### Using your own Niagara System

A custom effect needs Unreal Engine to cook it, but not for its config: the App still builds that.

1. Place the Niagara System in `/Content/Marvel/ProjectGalacta/VFX/{HeroID}/{SkinID}/{YourModFolder}/`.
2. Add it to your project's PrimaryAssetLabel and package it as usual.
3. Install that mod, name your Lab setup the same as `YourModFolder`, and paste your system's path into the Lab.
4. Export and build as above. Ship both mods.

### Common validation errors

- **Too many entries** – a setup has more than 16.
- **Duplicate entry name** – two entries in a setup share a name.
- **Invalid target mesh** – the setup targets a mesh for another hero or skin.

---

##### ⇀ Refer to [Companion App](../companion-app/) for manifest management.
