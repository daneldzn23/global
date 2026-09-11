<script setup>
const figures = [
  { figure: '1,357', label: 'B2B partners',     caption: 'Financial institutions, brokers and prop firms across the world.' },
  { figure: '1.2B+', label: 'Orders processed', caption: 'Through our platforms in the last 12 months.' },
  { figure: '4.1M+', label: 'Traders',          caption: 'Using our trading platforms worldwide.' },
  { figure: '23',    label: 'Years',            caption: 'Building technology for the financial markets.' },
]

const groups = [
  { label: 'Exchanges & market data', items: [
    ['cme-group.png', 'CME Group'], ['nasdaq.png', 'Nasdaq'], ['nyse.png', 'NYSE'],
  ]},
  { label: 'Banks & brokers', items: [
    ['itau.png', 'Itaú'], ['btg.png', 'BTG'], ['xp.png', 'XP'],
    ['avenue.png', 'Avenue'], ['plus500.png', 'Plus500'], ['ninjatrader.png', 'NinjaTrader'],
  ]},
  { label: 'Digital assets', items: [
    ['binance.png', 'Binance'], ['coinbase.png', 'Coinbase'],
  ]},
  { label: 'Prop firms', items: [
    ['earn2trade.png', 'Earn2Trade'], ['sagetrader.png', 'SageTrader'], ['zimtra.png', 'Zimtra'],
    ['the5ers.png', 'The5ers'], ['topone.png', 'TopOne'], ['ylos.png', 'Ylos'],
    ['zero7.png', 'Zero7'], ['the-trade-makers.png', 'The Trade Makers'],
  ]},
]
</script>

<template>
  <section id="partners" class="ground-base py-24 sm:py-28">
    <div class="wrap">
      <h2 class="h2 text-text max-w-[22ch] mb-4">
        Trusted across the financial industry.
      </h2>
      <p class="lead text-muted mb-16">
        Nelogica builds long-term partnerships with institutions across the
        financial industry.
      </p>

      <!-- Built at scale. Proven in production -->
      <dl v-reveal class="mb-20 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="f in figures" :key="f.label">
          <hr class="hairline mb-5" />
          <dd class="data mb-2 text-[clamp(1.5rem,2.6vw,2rem)] font-medium leading-none text-text">
            {{ f.figure }}
          </dd>
          <dt class="mb-1.5 text-[14px] font-medium text-text">{{ f.label }}</dt>
          <p class="text-[13px] leading-relaxed text-muted">{{ f.caption }}</p>
        </div>
      </dl>

      <p v-reveal class="mb-12 text-[15px] text-muted">
        <span class="data font-medium text-text">1,357</span>
        institutional partners across more than 150 countries
      </p>

      <div v-reveal class="grid gap-x-12 gap-y-11 sm:grid-cols-2">
        <div v-for="g in groups" :key="g.label">
          <h3 class="mb-5 text-[13px] font-medium text-muted">{{ g.label }}</h3>
          <ul class="flex flex-wrap items-center gap-x-9 gap-y-6">
            <li v-for="[file, name] in g.items" :key="file">
              <img
                :src="`/images/partner-logos/${file}`"
                :alt="name"
                class="h-[21px] w-auto opacity-70 grayscale invert transition-all duration-200 hover:opacity-100"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
