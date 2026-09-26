# Encrypteron color palette

This reference documents the colors currently used by the website. The main theme tokens live in `app/globals.css`; component states and a few page-specific surfaces use additional values in that file.

## Core theme colors

| Role | Dark theme | Light theme | Use |
| --- | --- | --- | --- |
| Brand pink | `#ec4899` | `#ec4899` | Primary actions, links, focus accents, highlights, diagrams, and sale tags |
| Soft brand pink | `#f9a8d4` | `#f9a8d4` | Secondary emphasis on dark surfaces |
| Page background | `#101012` | `#f8f8f6` | Main page canvas |
| Surface | `#17171a` | `#ffffff` | Cards, header, and raised content |
| Alternate surface | `#1d1d21` | `#f0f0ed` | Alternate sections and subtle panels |
| Main text | `#f5f5f4` | `#171719` | Headings and primary copy |
| Muted text | `#a4a4aa` | `#65656d` | Supporting copy, labels, and metadata |
| Borders | `rgba(255,255,255,0.13)` | `rgba(23,23,25,0.14)` | Dividers, card borders, and outlines |
| Grid lines | `rgba(255,255,255,0.05)` | `rgba(23,23,25,0.06)` | Decorative page grids |
| Shadows | `rgba(0,0,0,0.28)` | `rgba(27,20,24,0.10)` | Theme-aware elevation |

The dark theme is the default. `.light` overrides the neutral tokens while retaining the pink brand accent.

## Component and status colors

| Color | Use |
| --- | --- |
| `#ffffff` | Text on solid pink and danger buttons/tags |
| `#db2777` | Pink button hover state |
| `#18a066` | Success status tag |
| `#3b82f6` | Information status tag |
| `#8b5cf6` | Beta status tag |
| `#d97706` | Warning status tag |
| `#dc2626` | Danger status tag background and border |
| `#be185d` | Pink secondary text in light-theme pricing |
| `#62626a` | Muted text in light-theme pricing |

## Supporting neutral and pricing colors

These colors appear in the product pricing section and welcome theme preview.

| Color | Use |
| --- | --- |
| `#202025` | Dark pricing section background token |
| `#27272d` | Dark pricing card surface token |
| `#18181c` | Dark pricing alternate surface token |
| `#17171b` | Dark pricing section background |
| `#2b2b32` | Featured dark pricing card |
| `#f9f9f7` | Pricing text and selected light theme text |
| `#efefec` | Light pricing section and alternate surface |
| `#18181b` | Light pricing text and grid overlay base |
| `#151519` | Dark theme preview swatch |
| `#f7f7f4` | Light theme preview swatch |

## Translucent accents and overlays

| Value | Use |
| --- | --- |
| `rgba(236,72,153,0.65)` | Pink brand-dot glow |
| `rgba(236,72,153,0.55)` | Network diagram highlight border |
| `rgba(236,72,153,0.48)` | Image selection border |
| `rgba(236,72,153,0.42)` | Pricing section pink separators |
| `rgba(236,72,153,0.18)` | Primary button shadow |
| `rgba(236,72,153,0.11)` | Featured pricing card shadow |
| `rgba(236,72,153,0.025)` / `0.018` | Large, faint hero rings |
| `rgba(255,255,255,0.92)` | Light pricing card surface |
| `rgba(255,255,255,0.14)` | Dark pricing borders |
| `rgba(255,255,255,0.035)` | Dark pricing grid |
| `rgba(24,24,27,0.14)` | Light pricing borders |
| `rgba(24,24,27,0.11)` | Light featured-card shadow |
| `rgba(24,24,27,0.045)` | Light pricing grid |
| `rgba(23,23,25,0.04)` | Light page grid override |
| `rgba(0,0,0,0.32)` | Featured dark pricing-card shadow |

Several overlay alpha values are written as CSS decimals, for example `.13` means 13% opacity. Small local variants are intentional for glows, borders, and grid decoration.

## CSS token names

| Token | Purpose |
| --- | --- |
| `--pink`, `--pink-soft` | Brand accents |
| `--bg` | Main page background |
| `--surface`, `--surface-alt` | Card and section surfaces |
| `--text`, `--muted` | Primary and supporting text |
| `--line`, `--grid` | Borders and decorative grids |
| `--shadow` | Theme-aware shadow base |

Use these tokens for new interface styling where a semantic role already exists. Keep state colors reserved for their current meanings: green for success, blue for information, purple for beta, amber for warning, and red for danger.
