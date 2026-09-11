# Product Requirements

Derived from [brief.md](brief.md) and the approved reference
[reference/nelogica-global-V1.4.html](../reference/nelogica-global-V1.4.html).

**The copy below is approved for v1 and must be reused 1:1.** Only the
visual design/layout is being redone — see `../DESIGN.md` for what to
avoid and why. If a section needs new copy (e.g. an image alt text, a
microcopy tweak required by a new layout), flag it rather than
silently rewriting approved lines.

## Sections — locked copy

**The copy in each section below is locked. The order they are listed in
is V1.4's and is not binding** — section sequence and grouping are open
design decisions; see `../DESIGN.md`.

### 1. Nav
Logo (Nelogica wordmark) · links: Platforms, Partners, Careers ·
primary button: **"Talk to us"**

### 2. Hero
- Eyebrow: "Investment technology since 2003"
- H1: "We build trading technology **from the infrastructure up.**"
- Lead: "Nelogica is a trading technology company. We build the trading
  platforms and order management systems that banks, brokers and prop
  firms run on, connected to the world's major exchanges."
- CTAs: "See the stack →" (primary), "Talk to our team" (ghost)

### 3. Numbers
Heading: "Built at scale. Proven in production"
| Figure | Label | Caption |
|---|---|---|
| 1,357 | B2B partners | Financial institutions, brokers and prop firms across the world. |
| 1.2B+ | Orders processed | Through our platforms in the last 12 months. |
| 4.1M+ | Traders | Using our trading platforms worldwide. |
| 23 | Years | Building technology for the financial markets. |

### 4. Platforms / stack
Heading: "Our flagship platforms." / "Different markets, different
traders, one engineering standard."

**Trading platforms:**
- **BlackArrow** — "Every market, one workspace." — "A multi-asset
  trading platform for futures, equities and OTC instruments, engineered
  for ultra-low latency, depth and control."
- **Bookmap** — "Order flow, made visible." — "Traders use Bookmap to
  read liquidity and market depth as it happens."
- **Profit** — "Where Nelogica started." — "Built in 2003, Profit is the
  most used trading platform in Latin America and helped establish
  Brazil's trading culture."

**Corporate Solutions** ("The infrastructure institutions operate on,
deployed under your own brand and your own controls."):
- **Order Management System** — "Routing, execution, and full order
  lifecycle across multi-asset desks. Built for institutional volume."
- **Risk Manager** — "Pre-trade and real-time controls across accounts,
  desks, and books."
- **Home & Mobile Broker** — "White-labeled web and mobile trading. Your
  brand on the front, our engineering underneath."
- Link: "See the institutional offering →" →
  `https://use.blackarrowtrading.com/b2b`

*(V1.4 shows these three enterprise cards with "Preview coming"
placeholder media — real product imagery is still needed; do not ship
the diagonal-stripe placeholder look, see DESIGN.md.)*

### 5. Speed / connectivity
Heading: "Built on direct exchange connectivity."
- "Connected directly to CME, Nasdaq and NYSE." — "Nelogica is an
  official market data distributor with a direct line to the world's
  largest exchanges. Orders reach the market with no intermediaries in
  between."
- "Server-side execution" — "Orders live on Nelogica's servers and keep
  working after the terminal closes or the connection drops."
- "Ultra-low latency" — "Servers sit alongside the exchange, shortening
  the path between order and matching engine."

### 6. Partners
Heading: "Trusted across the financial industry." / "Nelogica builds
long-term partnerships with institutions across the financial industry."
Count: "**1,357** institutional partners across more than 150 countries"

Partner logos (19, extracted to `public/images/partner-logos/`): CME
Group, Nasdaq, NYSE, Itaú, BTG, XP, Binance, Coinbase, Plus500, Avenue,
NinjaTrader, Earn2Trade, SageTrader, Zimtra, The5ers, TopOne, Ylos,
Zero7, The Trade Makers.

*(V1.4 displays these as an infinite marquee — see DESIGN.md on why
that specific pattern should be reconsidered; the logos themselves are
locked assets.)*

### 7. Careers
Heading: "The people behind the platforms."
Copy: "Nelogica has more than 900 software developers across the
Americas, Europe and Asia, working alongside the teams that bring our
platforms to market. As the markets we serve grow, so do we. We're
looking for people who make it happen."
CTA: "See open roles →" · note: "Roles open across engineering, product
& support"

### 8. Contact / CTA
Heading: "Tell us what you're building."
Copy: "Traders, brokers, and prop firms start with the path that fits —
our team takes it from there."
Actions: "I'm a trader" (primary) · "For brokers" (ghost) · "For prop
firms" (ghost, → `https://use.blackarrowtrading.com/b2b`)

### 9. Footer
- Blurb: "Investment technology since 2003 — the platforms traders open
  and the systems institutions run on, in more than 150 countries."
- Platforms: BlackArrow, Bookmap, Profit
- Enterprise systems: Order Management System, Risk Manager, Home &
  Mobile Broker, Institutional offering (link)
- Company: Careers, Contact
- Endorsement line: "**BlackArrow**, **Bookmap** and **Profit** are
  Nelogica companies."
- Legal: "© 2026 Nelogica. Investment technology provider. Not a broker,
  exchange, or liquidity provider."

## Metadata (locked, from V1.4 `<head>`)

- Title: "Nelogica — Global Trading Technology"
- Meta description: "Nelogica builds the trading platforms and the
  technology stack behind millions of traders and the financial
  institutions that serve them, in more than 150 countries."
- `hreflang`: en → nelogica.com, pt-br → nelogica.com.br, x-default →
  nelogica.com
- Organization JSON-LD: name Nelogica, founded 2003, sameAs
  nelogica.com.br / blackarrowtrading.com / bookmap.com

## Functional requirements

- Static single page — no CMS/backend/database for v1
- English language for v1 (confirmed by `hreflang` structure — separate
  from the existing PT-BR site)
- Responsive: desktop + mobile
- No authentication/accounts
- Anchor-link navigation within the page (`#stack`, `#partners`,
  `#careers`, `#contact`)

## Explicitly out of scope (v1)

- Per-product marketing pages, pricing, login/account areas, blog/news
- Multi-language routing beyond the existing EN/PT-BR split
- New copywriting — only new visual design for the locked copy above
