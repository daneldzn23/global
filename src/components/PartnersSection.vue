<script setup>
import LogoLoop from './LogoLoop.vue'

const files = [
  ['cme-group.png', 'CME Group'],
  ['nasdaq.png', 'Nasdaq'],
  ['nyse.png', 'NYSE'],
  ['itau.png', 'Itaú'],
  ['btg.png', 'BTG'],
  ['xp.png', 'XP'],
  ['avenue.png', 'Avenue'],
  ['plus500.png', 'Plus500'],
  ['ninjatrader.png', 'NinjaTrader'],
  ['binance.png', 'Binance'],
  ['coinbase.png', 'Coinbase'],
  ['earn2trade.png', 'Earn2Trade'],
  ['sagetrader.png', 'SageTrader'],
  ['zimtra.png', 'Zimtra'],
  ['the5ers.png', 'The5ers'],
  ['topone.png', 'TopOne'],
  ['ylos.png', 'Ylos'],
  ['zero7.png', 'Zero7'],
  ['the-trade-makers.png', 'The Trade Makers'],
]

const logos = files.map(([file, alt]) => ({
  src: `/images/partner-logos/${file}`,
  alt,
  title: alt,
}))
</script>

<template>
  <section id="partners" class="ground-tint py-12 sm:py-14">
    <div v-reveal class="wrap">
      <h2 class="h2 text-ink-on-lite max-w-[40ch] mx-auto mb-4 text-center">
        Trusted across the financial industry.
      </h2>
      <p class="lead text-muted-on-lite mx-auto mb-10 text-center">
        Nelogica builds long-term partnerships with institutions across the
        financial industry.
      </p>

      <p class="mb-14 text-center text-[1.125rem] text-muted-on-lite">
        <span class="data font-medium text-ink-on-lite">1,357</span>
        institutional partners across more than 150 countries
      </p>
    </div>

    <div class="grayscale opacity-80 py-4">
      <LogoLoop
        :logos="logos"
        :speed="60"
        direction="left"
        :logo-height="28"
        :gap="64"
        :fade-out="true"
        fade-out-color="#F2F5F8"
        :scale-on-hover="true"
        aria-label="Partner and institution logos"
      />
    </div>
  </section>
</template>
