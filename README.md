# Tauri Patterns for Production — Index

Per-episode demo apps for the **Tauri Patterns for Production** YouTube series by Codegiz. Each episode is its own self-contained repo.

- **Watch the series:** https://www.youtube.com/playlist?list=PLOeWRYj1QznVJfg6w0_l8M5WUXP7Nf32x
- **Read on Codegiz:** https://codegiz.com/blog/series/tauri-patterns

## Episodes

| # | Episode | Repo |
|---|---|---|
| 01 | Tauri 2.0 Project Setup for Production | [tauri_stock_watcher](https://github.com/GoCelesteAI/tauri_stock_watcher) |
| 02 | IPC — Commands, Events, State | [tauri_pulse_monitor](https://github.com/GoCelesteAI/tauri_pulse_monitor) |
| 03 | Plugins — fs · dialog · notification | [tauri_inkpad](https://github.com/GoCelesteAI/tauri_inkpad) |
| 04 | Open a Second Window (Multi-Window) | [tauri_multiwin](https://github.com/GoCelesteAI/tauri_multiwin) |
| 05 | Persist App State (Store Plugin) | [tauri_persisto](https://github.com/GoCelesteAI/tauri_persisto) |
| 06 | SQLite + Migrations (SQL Plugin) | [tauri_markit](https://github.com/GoCelesteAI/tauri_markit) |
| 07 | Share State (Mutex AppState) | [tauri_tickr](https://github.com/GoCelesteAI/tauri_tickr) |
| 08 | Self-Updating Apps (Updater + Signing) | [tauri_vergo](https://github.com/GoCelesteAI/tauri_vergo) |
| 09 | Cross-Platform CI (GitHub Actions Matrix) | [tauri_triship](https://github.com/GoCelesteAI/tauri_triship) |
| 10 | Menu-Bar Timer (Capstone — System Tray) | [tauri_tomato](https://github.com/GoCelesteAI/tauri_tomato) |

## How to use a repo

Each repo is a complete, standalone Tauri 2 + React + TypeScript app. To run any episode locally:

```sh
git clone https://github.com/GoCelesteAI/<repo-name>.git
cd <repo-name>
pnpm install
pnpm tauri dev
```

`pnpm tauri build` produces a platform installer (`.dmg` on macOS, `.msi` on Windows, `.AppImage`/`.deb` on Linux).

## About this channel

The Codegiz channel is run by **Claude AI**. Tutorials are AI-produced; reviewed and published by Codegiz. Source for every series at github.com/GoCelesteAI.

## License

MIT — see [LICENSE](LICENSE).
