---
name: human-craft-frontend
description: Forces human-first frontend craft with personality before coding. Enforces 5 mandatory gates (feeling, real moodboard hunting, hand layout sketch, bespoke assets via p5.brush/LottieFiles MCP, intentional iteration). Use for any UI, landing page, dashboard, or interactive web build.
---

# Human-First Frontend Craft

NEVER write HTML, CSS, React, or Tailwind before completing Gates 1 to 3 with the user. Defaulting straight to SaaS hero + 3-card bento grid + generic purple/blue gradients is forbidden.

## Mandatory 5-Gate Workflow

### Gate 1: Feeling & Opinion (STOP AND ASK)
Before touching code, ask the user 4 sharp questions (max 5 lines):
1. Emotional feel in 3 adjectives (e.g., warm/rustic/honest, cold/surgical/editorial, raw/zine/street).
2. Surface & material (paper grain, matte onyx, newsprint, glass, brutalist grid).
3. Palette constraint: max 2 neutrals + 1 intentional accent color.
4. Typography personality (serif editorial, grotesk, mono technical).

### Gate 2: Real Reference Hunting & Mood Board (STOP AND WAIT)
Tell the user to go hunt 2 or 3 concrete visual references BEFORE prompting code. Suggest exact hunting grounds by vibe:
1. Editorial / Bold Typography / Personality: `godly.website`, `awwwards.com`, `siteinspire.com`, `curated.design`
2. Clean Product / App UX / Flows: `mobbin.com`, `refero.design`, `screenlane.com`
3. Visual Mood, Textures & Color Boards: `cosmos.so`, `are.na`, `savee.it`
4. Micro-interactions & Code Motion: `codepen.io`, `tympanus.net/codrops`, `lottiefiles.com`

Once the user pastes screenshots, URLs, or reference notes: extract exact tokens (palette hex, font pairing, spacing rhythm, border radii, easing curves, layout tension) into a brief `DESIGN_SPEC` block. Never copy generic defaults when a moodboard exists.

### Gate 3: Hand Sketch / Structural Map (STOP AND CONFIRM)
Ask for a rough hand sketch photo or propose a bespoke ASCII layout map tailored to Gate 1+2. Wait for user confirmation ("OK" / adjustments) before generating project files.

### Gate 4: Bespoke Assets & Vector Motion
When the design calls for organic illustration or custom motion instead of flat stock icons:
1. Organic / Editorial / Paper art: invoke `watercolor-obj` or `watercolor-obj-p5` (`morikyl/skills`, built on `p5.brush`) when organic textures/paint fit the mood.
2. Interactive vector motion / animated UI icons / loaders / loops: prefer `@lottiefiles/creator-mcp` (`npx -y @lottiefiles/creator-mcp@latest`) to generate/edit live Lottie JSON rather than hand-coding fragile CSS keyframes or opening After Effects.
3. Antigravity house builds: use Onyx (`#0B0D10`) + Google Sans only when user explicitly asks for Antigravity native aesthetic.

### Gate 5: Intentional Iteration & Anti-Slop Audit
First draft is NEVER final. Always run 2 explicit refinement checks after initial render:
1. Font & motion check: verify real hierarchy contrast, non-linear easing, and micro-interaction responsiveness.
2. Anti-AI-slop audit: kill generic gradients, uniform rounded-xl card grids, placeholder buzzwords, and emoji clutter. Keep diffs minimal (YAGNI).
