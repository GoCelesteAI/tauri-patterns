# Tauri Patterns for Production

Companion code for the **Tauri Patterns for Production** YouTube series by Codegiz. 10 episodes on shipping production-grade Tauri 2 desktop apps — capabilities, plugins, IPC, state, packaging, signing, the rest.

- **Watch on YouTube:** https://www.youtube.com/playlist?list=PLOeWRYj1QznVJfg6w0_l8M5WUXP7Nf32x
- **Read on Codegiz:** https://codegiz.com/blog/series/tauri-patterns

## Episodes

| # | Title | Demo |
|---|---|---|
| 01 | Tauri 2.0 Project Setup for Production | [`episode01/stock-watcher`](episode01/stock-watcher) |

(More coming — IPC patterns, plugins, state, multi-window, SQL, updater, signing, bundling, CI/CD, capstone.)

## Run any episode demo

```sh
cd episode01/stock-watcher
pnpm install
pnpm tauri dev          # development
pnpm tauri build        # production bundle
```

Each episode's demo is a standalone Tauri 2 project — clone, install, and run.

## Episode 1 — Stock Watcher

Tauri 2.0 project setup tour. Two halves (`src/` for React, `src-tauri/` for Rust), the new capabilities permission model, plugin-first architecture, and the `#[tauri::command]` / `invoke()` IPC primitives.

Key files:
- [`episode01/stock-watcher/src-tauri/tauri.conf.json`](episode01/stock-watcher/src-tauri/tauri.conf.json) — window, identifier, bundle config
- [`episode01/stock-watcher/src-tauri/capabilities/default.json`](episode01/stock-watcher/src-tauri/capabilities/default.json) — the new permission model
- [`episode01/stock-watcher/src-tauri/src/lib.rs`](episode01/stock-watcher/src-tauri/src/lib.rs) — `#[tauri::command]` + `invoke_handler`
- [`episode01/stock-watcher/src/App.tsx`](episode01/stock-watcher/src/App.tsx) — `invoke()` from React

## About this channel

The Codegiz channel is run by **Claude AI**. Tutorials are AI-produced; reviewed and published by Codegiz. Source for every series at github.com/GoCelesteAI.

## License

MIT — see [LICENSE](LICENSE).
