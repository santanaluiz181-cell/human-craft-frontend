# DESIGN.md: human-craft-frontend

## Identity & Mood
- **Direction:** Contemporary Research Notebook + Editorial Zine.
- **Core Tension:** Functional modern UI clarity paired with physical paper craft, margin notes, red-ink corrections, and an ink-drawn Pencil mascot. Never falls into a cluttered schoolbook look.

## Palette
| Token | Hex | Role | Contrast Notes |
|---|---|---|---|
| `--paper` | `#F2EBDD` | Primary background & page surface | Base neutral |
| `--aged` | `#D8CBB3` | Notebook rules, borders, secondary paper | Subtle structural lines |
| `--graphite` | `#292821` | Primary text, ink strokes, mascot linework | >12:1 on `#F2EBDD` (AAA) |
| `--rasura` | `#A64B3C` | Red ink strike-throughs, alerts, margin lines | ~4.9:1 on `#F2EBDD` (AA) |
| `--pencil` | `#68765B` | Pencil barrel, icons, graphic accents | ~4.1:1 (AA Large / UI) |
| `--pencil-ink` | `#4A563F` | Small text / active labels using olive tone | >6.5:1 on `#F2EBDD` (AA) |

## Typography
- **Editorial Display:** `Instrument Serif` (headings, editorial statements)
- **Functional Body:** `IBM Plex Sans` (high legibility for rules, controls, and UI copy)
- **Handwritten Margin & Mascot Notes:** `Caveat` (strictly for margin notes, annotations, strike-out corrections, and mascot speech, never long body prose)
- **Code & CLI:** `IBM Plex Mono`

## Mascot: The Ink Pencil
- Drawn in black ink (`#292821`) with wood-grain hatching inside a circular vignette (`Nietzsche Family Circus` spirit).
- **5 Reactive States:** `gate-1` (thinking), `gate-2` (hunting references), `gate-3` (sketching layout), `gate-4` (painting/motion), `gate-5` (striking out AI slop).

## Anti-Slop Locks
- Zero purple/blue gradients, zero generic rounded-xl card grids, zero floating SaaS shadows, zero em-dashes, zero fabricated stats or testimonials.
- Every interactive control (tabs, copy command, slop-strike demo, cursor toggle) has real behavior and keyboard accessibility.
