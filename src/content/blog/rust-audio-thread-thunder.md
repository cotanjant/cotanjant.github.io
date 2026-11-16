---
title: "Keeping Thunder's audio callback lock-free in Rust"
description: "Notes on wiring cpal, fundsp, and out-of-process CLAP plugins without blocking the audio thread."
pubDate: 2026-11-10
tags: ["rust", "audio", "thunder"]
readingTime: "4 min"
repo: "https://github.com/cotanjant/thunder"
---

When I started building [thunder](https://github.com/cotanjant/thunder), the main rule was keeping the UI and the audio graph from stepping on each other. An `egui` interface repaints at display rate and allocates strings and layout buffers every frame. An audio callback from `cpal` runs on a high-priority OS thread that expects buffers filled in a few milliseconds.

If the callback waits on a mutex held by the UI or hits the system allocator, you hear clicks as soon as you drag a fader or resize a dock panel.

## Splitting the UI from the worker

The application keeps two sides separated by lock-free queues. On the interface side, `egui` and `egui_dock` manage the channel rack, piano roll, playlist, and mixer inserts. User edits like moving a note or toggling an FX slot send small command values across a channel instead of mutating shared state under a lock.

On the audio side, a dedicated worker processes preallocated voice buffers, runs `fundsp` synth nodes and built-in effects, and sums the mixer inserts with latency compensation. Disk take streaming also sits outside the callback so file I/O never stalls buffer delivery.

## Running CLAP plugins out of process

Third-party plugins bring their own problems during discovery. Scanning a bad binary in-process can crash the entire DAW before a window even opens. Using `clack-host`, Thunder scans CLAP plugins in an isolated worker process first, records parameters and metadata, and only then exposes them to instrument and FX slots.

## Testing without a sound card

Audio bugs are easy to miss if you only test by ear on one machine. Alongside unit tests, Thunder includes an offline render flag that runs the engine headless and fails on silence or `NaN` samples:

```bash
cargo test
cargo run -- --offline-test
```

That gives CI a deterministic check on whether synths, mixer routing, and WAV/FLAC export still produce valid audio frames after a refactor.
