# Design Direction

**Source of truth for copy only:**
[reference/nelogica-global-V1.4.html](reference/nelogica-global-V1.4.html)
— an approved-copy draft of this page. Its **copy is final and reused
1:1** (see `docs/product-requirements.md`), and it is the authoritative
source for the brand tokens and embedded Effra font files below.

It is **not** a reference for layout, section order, composition, or
information architecture. Its **visual execution is the problem**: it
reads as generic AI-template output — dark navy hero with a stock photo
of a trader at monitors, bold sans headline with one blue-highlighted
phrase, two pill buttons, thin-line eyebrow tag, glassy cards. Do not
design by re-skinning its sections one by one; that reproduces the same
page with new paint. Take the copy and the tokens, and design the
structure from scratch.

## Brand tokens (from V1.4 `:root`, real hex — treat as fixed)

```css
--ink:      #0A1119;   --ink-2:    #0E1721;
--surface:  #111E2A;   --surface-2:#152534;
--text:     #E6EDF3;   --muted:    #8DA0B2;   --muted-2: #61748A;
--blue:     #2E9BE6;   --blue-bright: #5FB7F6;
--green:    #4FB84F;   --tick:     #35D6A4;
--lite:     #F2F5F8;   --lite-line:#E1E7ED;
--ink-on-lite: #0B141C; --muted-on-lite: #51637A; --blue-on-lite: #1E7BC4;
```

- Font: **Effra** (weights 300/400/500/700 embedded in V1.4 as base64
  woff/ttf — real brand typeface, not a placeholder), fallback
  `system-ui, sans-serif`
- The page is **dark throughout** (`--ink` family). Section rhythm comes
  from shifts in depth between `--ink` and `--ink-2`/`--surface`, not
  from alternating light and dark themes. The `--lite` family is
  retained in the token set for assets and future use, but the light
  ground was tried and rejected as too bright.

These are legitimate brand values (they came from the company's actual
CSS, not screen-sampled), so the palette and typeface are **not** what
needs reinventing. What needs reinventing is composition, imagery
strategy, and the specific patterns called out below.

## What reads as AI slop in V1.4 (avoid these specifically)

- **Stock hero photo**: generic "trader looking at monitors" imagery
  behind a gradient scrim — the single most recognizable AI-landing-page
  cliché in fintech right now.
- **Rainbow-highlight headline**: bolding the whole H1 white except one
  clause in accent blue, every single time, in every hero-style section.
- **Thin-line eyebrow tag**: `── SMALL CAPS LABEL` above every heading.
  Used on hero, numbers, stack, speed, partners — same trick, six times.
- **Glass/blur pill buttons and cards**: `backdrop-filter: blur()`,
  translucent borders, radial-gradient glows behind cards
  (`.cta-box`, `.feature`, `.map-badge`) — the generic "premium SaaS"
  card look.
- **Diagonal-stripe placeholder blocks**: `.eplace` sections literally
  say "Preview coming" over a repeating diagonal pattern — reads as
  unfinished, not premium.
- **Marquee logo wall**: infinite-scrolling partner logos in rounded
  white tiles — every B2B landing page since 2021 does this exact thing.
- **Stat-grid with oversized numbers**: 4-column grid of huge mono
  figures + small label — extremely common template block, feels
  interchangeable with any SaaS company's numbers section.

None of these are wrong per se — they're just overused to the point of
being visually mute. The redesign should find compositions, layouts, and
imagery treatments distinctive enough that this page couldn't be
mistaken for a template.

## Brand Personality

Precise, technical, powerful — but rendered with premium, polished,
confident visual craft (refined device/platform mockups, considered
motion, glass/gradient/glow used deliberately rather than
decoratively). The voice should read like a serious trading-technology
vendor speaking to traders, brokers, and prop firms — not a consumer
app: dense information (real platform screenshots, market data, product
breadth across BlackArrow/Bookmap/Profit/OMS) handled cleanly, not
simplified into blandness. Confidence comes from showing real
capability and real partner/client signals, not from hype language.

## Anti-references

Generic AI-generated SaaS landing page grammar: cream/sand backgrounds,
gradient-clip text, a tiny uppercase tracked eyebrow above every
section, numbered 01/02/03 scaffolding where there's no real sequence,
identical icon+heading+text card grids, side-stripe accent borders,
decorative glassmorphism. No specific competitor call-outs beyond this.

## Design Principles

1. **Show, don't tell.** Real product screenshots and mockups (desktop,
   web, tablet, mobile) do the convincing — not adjectives.
2. **Precision reads as craft.** Density and technical detail
   (candlestick charts, order books, multi-device parallax) are a
   feature of the design, not something to sand down for simplicity.
3. **One visual identity across sections.** Eyebrow/heading/body
   treatment stays consistent across every section (Recursos,
   Corretoras, Multiplataforma, Depoimentos, FAQ) — a trader comparing
   platforms should feel one coherent, engineered product, not a
   stitched-together page.
4. **Motion has a job.** Parallax, hover reveals, and reflections
   should reinforce realism and product depth (e.g., mockups behaving
   like real hardware), never feel bolted on for decoration.
5. **Confidence without hype.** Let real platform breadth (Windows,
   macOS, iOS, Android, Web) and partner logos carry authority; avoid
   SaaS-cliché urgency language or unearned superlatives.

## Accessibility & Inclusion

Standard baseline: WCAG AA contrast (4.5:1 body text, 3:1 large text),
full keyboard navigation, and `prefers-reduced-motion` alternatives for
all animated/parallax effects (crossfade or instant state instead of
motion). No additional formal commitments at this time.

## Constraints carried over from V1.4 (keep)

- Copy is locked 1:1 — see `docs/product-requirements.md` for full text
- Partner logos are real and reused — extracted to
  `public/images/partner-logos/` (19 logos: CME Group, Nasdaq, NYSE,
  Itaú, BTG, XP, Binance, Coinbase, Plus500, Avenue, NinjaTrader,
  Earn2Trade, SageTrader, Zimtra, The5ers, TopOne, Ylos, Zero7, The
  Trade Makers)
- Platform assets (BlackArrow, Bookmap, Profit logos + screenshots)
  extracted to `public/images/platforms/`
- Nelogica wordmark extracted to `public/images/brand/nelogica-logo.png`
- Section **content** is listed in `docs/product-requirements.md`. The
  order it happens to be listed in is V1.4's, and is **not** binding —
  section sequence, grouping, and IA are open design decisions. (V1.4's
  own order buried exchange connectivity, arguably the foundational
  claim, in position 5 of 9.)

## Open questions

- How far can layout/imagery diverge from V1.4 while still being
  recognizably "the same brand"? (e.g., is a photo-free hero acceptable,
  or does marketing expect a hero image of some kind?)
- Any existing non-web brand guide (Figma, PDF) beyond this HTML file
  and nelogica.com.br to confirm tokens against?
