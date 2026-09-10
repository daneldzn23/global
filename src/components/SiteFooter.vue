<script setup>
const columns = [
  {
    heading: 'Platforms',
    links: [
      { label: 'BlackArrow', href: '#platforms' },
      { label: 'Bookmap', href: '#platforms' },
      { label: 'Profit', href: '#platforms' },
    ],
  },
  {
    heading: 'Enterprise systems',
    links: [
      { label: 'Order Management System', href: '#systems' },
      { label: 'Risk Manager', href: '#systems' },
      { label: 'Home & Mobile Broker', href: '#systems' },
      { label: 'Institutional offering', href: 'https://use.blackarrowtrading.com/b2b', external: true },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'Careers', href: '#careers' },
      { label: 'Contact', href: '#contact' },
    ],
  },
]
</script>

<template>
  <footer class="ground-tint pb-10 pt-20">
    <div class="wrap">
      <div class="grid gap-14 pb-14 sm:grid-cols-[1.1fr_2fr]">
        <div>
          <img
            class="mb-5 h-[21px] w-auto brightness-0"
            src="/images/brand/nelogica-logo.png"
            alt="Nelogica"
          />
          <p class="max-w-[34ch] text-[14px] leading-relaxed text-muted-on-lite">
            Investment technology since 2003 — the platforms traders open and the
            systems institutions run on, in more than 150 countries.
          </p>
        </div>

        <div class="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <div v-for="col in columns" :key="col.heading">
            <h3 class="mb-5 text-[13px] font-medium text-ink-on-lite">{{ col.heading }}</h3>
            <ul class="flex flex-col gap-3">
              <li v-for="l in col.links" :key="l.label">
                <a
                  :href="l.href"
                  v-bind="l.external ? { target: '_blank', rel: 'noopener' } : {}"
                  class="text-[14px] text-muted-on-lite transition-colors hover:text-ink-on-lite"
                >{{ l.label }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr class="hairline" />

      <div class="flex flex-col gap-3 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p class="text-[13px] text-muted-on-lite">
          <span class="font-medium text-ink-on-lite">BlackArrow</span>,
          <span class="font-medium text-ink-on-lite">Bookmap</span> and
          <span class="font-medium text-ink-on-lite">Profit</span> are Nelogica companies.
        </p>
        <p class="text-[13px] text-muted-on-lite">
          © 2026 Nelogica. Investment technology provider. Not a broker, exchange, or liquidity provider.
        </p>
      </div>
    </div>
  </footer>
</template>
