---
title: FAQ
description: Frequently asked questions about Project Galacta
---

### Is this safe to use / will I get banned?

Project Galacta only changes visuals on your own client – it doesn't touch gameplay or affect other players. But modding this game has always carried some risk, since Season 0, and that's still true here. Safer than other mods, but still a mod. Use at your own risk.

### Can Skin Swapper swap premium/limited skins over free ones?

No. The swap only replaces the mesh of a skin you already own and have equipped – it can't point at a vanilla premium skin you don't own, that's blocked. See [Skin Swapping → Integrity concerns](../docs/skin-swapping/#integrity-concerns).

### Is it a virus?

No. Only download it from the official [NexusMods](https://www.nexusmods.com/marvelrivals/mods/12806) or [GitHub Releases](https://github.com/0xSaturno/ProjectGalacta/releases) pages, never a reupload.

GalactaCompanionApp.exe VirusTotal scan: [link](https://www.virustotal.com/gui/file/161ee1f278861db4bae23d3022556f191f1d86bca62b669a91a6399477a6871b?nocache=1).

### Why closed source?

Two reasons:
- First, to keep the anti-piracy checks (see [Skin Swapping → Integrity concerns](../docs/skin-swapping/#integrity-concerns)) from being easy to read and bypass. 
- Second, the underlying [reClass project](../technical/architecture/#overview) can just as easily be used to build something malicious – that stays closed too.

### Does this work on Linux?

Yes, it does.

### How do I know it's working?

See [Getting Started → Verifying it works](../docs/getting-started/#verifying-it-works).

### Will it break with game updates?

Developed and tested for 3 seasons now, never needed an update to survive a patch, weekly or seasonal. Now that it's public though, there's a chance NetEase tries to take it down. No guarantees.

### Can you add X feature to Project Galacta?

Check [Architecture → Future plans](../technical/architecture/#future-plans) first – it might already be on the list.
If not, suggest it in the project's thread on the MRM discord server.

### Do I need the Companion App for my mods to load?

Any compatible mod mounts either way, that's the Mod Loader's job, Companion App or <u>not</u>.

Regular skin mods (not built for the Skin Swapper) work as usual once mounted: they replace the vanilla mesh directly, <u>no Companion App involved</u>.

Skin Swapper-compatible mods are different: they don't replace anything on their own, they add a mesh alongside it. That mod still mounts fine without the Companion App, but it won't be listed in the Skin Swapper menu until the app has scanned it and generated a valid manifest entry for it.

### My game crashes after mod loading, joining a match, selecting a hero, etc.

Almost always an outdated or broken mod, not Project Galacta itself. Remove your mods one by one (or update them) to find the culprit before reporting it. See [Mod Loader → Troubleshooting](../docs/mod-loader/#troubleshooting).

### How can I mute the intro voiceline?

_**"It's your girl Galacta!"**_

### Where do I report bugs?

- Bugs section on [NexusMods Page](https://www.nexusmods.com/marvelrivals/mods/12806?tab=bugs)
- Open an issue on [GitHub](https://github.com/0xSaturno/ProjectGalacta/issues).
- On the Project Galacta thread on MRM Discord server.

### Where do I get support?

Join the [Marvel Rivals Modding Discord](https://discord.gg/mrm).
