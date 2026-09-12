![Project Galacta](https://i.ibb.co/XkC5gw7P/Project-Galacta-Promo-Banner.webp)

# Project Galacta

A modding system for Marvel Rivals: mod loader, in-game skin swapper and a companion skin manager app.
No game files are modified on disk; mods are mounted at runtime after login.

---

## Features

- Mod Loader — native blueprint mounting for any mod packages, with robust anti-cheat/security checks.
- In-game Skin Swapper — browse and apply installed mesh mods per hero, with a live preview grid.
- Persistent preferences — skin and morph choices saved per hero/costume.
- Morph target sliders — adjust shape keys live for meshes that ship them.
- Skin Companion App — scans your mods folder and builds the manifest the skin swapper module reads. No manual file editing.

## Requirements

- [Rivals SIG Bypasser](https://www.nexusmods.com/marvelrivals/mods/2940) to load the Project Galacta mod
- For the Companion App: Windows 10/11 and [.NET 8 Desktop Runtime](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)

## Installation

1. Download the latest mod and companion app from [Releases](https://github.com/0xSaturno/ProjectGalacta/releases/latest).
2. Extract the ProjectGalacta mod container (`.pak, .ucas, .utoc`) into your game's Paks folder.
3. Run the Companion App and scan your game for compatible mods.
4. Launch the game and log in. Mods are mounted after login, then press **P** in a match to open the swapper.

## Documentation

For in-depth guides, technical breakdowns, and FAQ, see the [Project Galacta website](https://0xsaturno.github.io/ProjectGalacta/).

## Safety & Fair Use

- Client-side visuals only. No gameplay logic, hitboxes, or competitive advantage.
- Safer than other solutions since the system relies on native Unreal Engine / Rivals Blueprint's code only.
- Project Galacta's mod loader intentionally blocks any config and CameraShake mods to comply with [Marvel Rivals' ToS](https://www.marvelrivals.com/guide/1214569/).

## Credits

- Thanks to [Xzant](https://github.com/XzantGaming) for their help with research and UAT backing powering the companion app.

## License & Usage Terms

- Mod binaries are closed-source and proprietary. Personal, non-commercial use only. No redistribution or reuploading.

---

> This repository contains documentation only. No source code or game assets are published here.

<sub>All Marvel Rivals game assets used in this project are property of Marvel and NetEase. This project is not affiliated with Marvel or NetEase in any way and is not used for profit.</sub>


