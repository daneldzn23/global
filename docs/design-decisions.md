# Design Decisions

Log of why specific design choices were made, to avoid relitigating them later.

## Format

- **Decision:**
- **Why:**
- **Date:**

---

- **Decision:** Site scope is a single-page site with real persona-routed
  CTAs (trader / broker / prop firm / careers), not a CTA-free brand
  page.
- **Why:** Superseded 2026-09-10 (same day) once `reference/
  nelogica-global-V1.4.html` was reviewed — it's an approved-copy draft
  of exactly this page and includes "Talk to us", "I'm a trader", "For
  brokers", "For prop firms", and "See open roles" CTAs. The earlier
  "pure institutional, no lead-gen" framing was an assumption made
  before that reference was found; it's wrong and superseded.
- **Date:** 2026-09-10

---

- **Decision:** Must follow existing Nelogica brand identity — now
  sourced directly from `reference/nelogica-global-V1.4.html`'s CSS
  (`:root` custom properties + embedded Effra font files), not from
  screen-sampling nelogica.com.br.
- **Why:** V1.4 contains real hex values and the actual brand typeface
  as embedded font data — an authoritative source, superseding the
  screenshot-based estimates from earlier the same day. See `DESIGN.md`
  for the token table.
- **Date:** 2026-09-10

---

- **Decision:** Copy, information architecture, and section order from
  V1.4 are locked and reused 1:1. Partner logos and platform
  logos/screenshots extracted from V1.4 are reused as real assets. Only
  the visual execution (layout, imagery treatment, composition) is being
  redone.
- **Why:** User confirmed the copy in V1.4 is "the one approved for v1"
  and that partner logos will be reused — the brief is specifically to
  fix a page that's "too forgettable and AI slop," not to rewrite
  content.
- **Date:** 2026-09-10

---

- **Decision:** Superseded — "no lead-gen forms, login, pricing, or
  product deep-dives in v1" from the first draft of this doc is still
  correct for pricing/login/product-deep-dives, but incorrect about
  lead-gen: persona-routed contact CTAs are in scope (see the two
  entries above). Kept here for the record rather than deleted.
- **Why:** Avoid re-deciding this from scratch later; the correction is
  narrow (CTAs yes, product funnels/pricing/login still no).
- **Date:** 2026-09-10

---

- **Decision:** Added six moodboard references to
  `reference/moodboards/`: TradingView, Kraken, Apple, Stripe,
  Coinbase, Linear. Each is a written note (no downloaded images) on
  what specifically to steal and what not to copy, grounded in
  DESIGN.md's brand personality and anti-slop list rather than generic
  praise.
- **Why:** User asked to seed the (previously empty) reference folders
  with design references, naming TradingView/Kraken/Apple; Stripe/
  Coinbase/Linear were proposed and confirmed as complementary —
  covering real-market-data UI (TradingView, Kraken, Coinbase),
  premium device/product staging (Apple), and the explicit
  anti-AI-slop counter-example (Stripe, Linear).
- **Date:** 2026-09-10
