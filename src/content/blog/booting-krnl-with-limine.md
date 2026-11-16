---
title: "Booting an x86_64 Rust kernel with Limine"
description: "Getting from a bare Cargo target to a framebuffer rectangle in QEMU using Limine and xorriso."
pubDate: 2026-11-02
tags: ["rust", "osdev", "krnl"]
readingTime: "3 min"
repo: "https://github.com/cotanjant/krnl"
---

[krnl](https://github.com/cotanjant/krnl) is a small experimental `x86_64` kernel in Rust. Right now it does one thing: boot via Limine and draw a white rectangle in the top-left corner of the framebuffer.

Starting with Limine skips writing a custom real-mode bootloader and drops the kernel directly into 64-bit long mode with a parsed memory map and a linear framebuffer already configured.

## Building for a bare target

Because there is no operating system underneath, the workspace builds against `x86_64-unknown-none` on a nightly Rust toolchain pinned in `rust-toolchain.toml`. After compiling the kernel crate, the binary has to be copied into the ISO staging directory before packaging:

```bash
cargo build -p kernel
cp target/x86_64-unknown-none/debug/kernel iso/boot/kernel
```

Forgetting that copy step means QEMU boots the previous kernel binary inside the ISO while you wonder why your latest edit had no effect.

## Packaging and booting in QEMU

With `xorriso`, turning the `iso/` folder into a bootable image takes one command:

```bash
xorriso -as mkisofs -b boot/limine-bios-cd.bin \
  -no-emul-boot -boot-load-size 4 -boot-info-table \
  -o krnl.iso iso

qemu-system-x86_64 -cdrom krnl.iso
```

Having a single reproducible loop from `cargo build` to `qemu-system-x86_64` makes it much easier to test page tables and interrupt handlers next without guessing whether the toolchain or the image layout broke.
