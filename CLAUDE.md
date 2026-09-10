# nelogica_global — Project Brief

Claude reads this file every session. Keep it current as the product takes shape.

## What this is

The global (English) institutional/landing page for Nelogica — a
Brazilian trading-technology company (platforms: BlackArrow, Bookmap,
Profit; also OMS/Risk Manager/white-label broker products). Single page,
international audience, real persona-routed CTAs (trader/broker/prop
firm/careers) — not the existing Brazil-market nelogica.com.br site.

**Copy is locked.** [reference/nelogica-global-V1.4.html](reference/nelogica-global-V1.4.html)
is an approved-copy draft — every section's text is final and reused
1:1 (see `docs/product-requirements.md`). The job is a from-scratch
**visual redesign** of that content: V1.4's execution reads as generic
AI-landing-page template (stock trader photo, rainbow-highlight
headline, glass cards, logo marquee — see `DESIGN.md`), and the goal is
a distinctive, non-templated design using the same brand tokens.

Design-first: no source code yet. `src/` will be populated once
implementation starts.

## Where things live

- `docs/brief.md` — product goal, audience, scope
- `docs/product-requirements.md` — locked section-by-section copy, IA, functional requirements
- `docs/design-decisions.md` — why specific design choices were made (includes superseded/corrected decisions — read newest first)
- `DESIGN.md` — real brand tokens (colors/type) + specific AI-slop patterns to avoid
- `reference/nelogica-global-V1.4.html` — the approved-copy source; also contains real logo/screenshot assets (already extracted to `public/images/`)
- `reference/screenshots/` — nelogica.com.br screenshot (secondary reference, superseded by V1.4 for brand tokens)
- `public/images/brand/`, `public/images/platforms/`, `public/images/partner-logos/` — real extracted assets, ready to use
- `.claude/skills/` — reusable design/dev workflows
- `.claude/agents/` — specialized reviewers/assistants

## Skills to use

- `ui-ux-pro-max` — primary design-intelligence source when building
  sections: styles, palettes, font pairings, UX guidelines.
- `design-critique` — self-review pass on drafts against `DESIGN.md`'s
  anti-slop list before considering a section done.
- `web-design-guidelines` — accessibility/interaction-quality check,
  orthogonal to visual style.

Avoid opinionated aesthetic skills (`high-end-visual-design`,
`gpt-taste`, `industrial-brutalist-ui`, `minimalist-ui`,
`stitch-design-taste`, `landing-page-guide-v2`) — each imposes its own
look and risks fighting the real brand tokens and anti-template goal
in `DESIGN.md`. Also not applicable: `redesign-existing-projects` —
this is a from-scratch build, not an audit of an existing site.

## Status

Brief, requirements, and design direction are written and grounded in
the real reference file (not guesses). Assets (wordmark, platform
logos/screenshots, 19 partner logos) are extracted and in `public/images/`.
Next: design/build the actual page — new layout and imagery treatment,
same locked copy and brand tokens.
