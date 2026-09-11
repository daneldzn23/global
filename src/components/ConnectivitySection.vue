<script setup>
const venues = ['CME', 'Nasdaq', 'NYSE']

const facts = [
  {
    title: 'Server-side execution',
    body: "Orders live on Nelogica's servers and keep working after the terminal closes or the connection drops.",
  },
  {
    title: 'Ultra-low latency',
    body: 'Servers sit alongside the exchange, shortening the path between order and matching engine.',
  },
]
</script>

<template>
  <section id="connectivity" class="ground-raised py-24 sm:py-28">
    <div class="wrap">
      <h2 class="h2 max-w-[22ch] mb-4">Built on direct exchange connectivity.</h2>

      <p class="lead text-muted mb-14 sm:mb-16">
        Connected directly to CME, Nasdaq and NYSE.
      </p>

      <div class="grid gap-12 lg:grid-cols-[1fr_minmax(0,28rem)] lg:gap-20">
        <div>
          <p class="body text-muted mb-12">
            Nelogica is an official market data distributor with a direct line to
            the world's largest exchanges. Orders reach the market with no
            intermediaries in between.
          </p>

          <div class="grid gap-10 sm:grid-cols-2">
            <div v-for="f in facts" :key="f.title">
              <h3 class="h3 mb-2.5">{{ f.title }}</h3>
              <p class="body text-muted">{{ f.body }}</p>
            </div>
          </div>
        </div>

        <!-- Venues as data, not as a diagram -->
        <dl class="self-start">
          <div
            v-for="v in venues"
            :key="v"
            class="flex items-baseline justify-between gap-6 border-b border-white/10 py-4"
          >
            <dt class="data text-[15px] text-text">{{ v }}</dt>
            <dd class="data text-[13px] text-tick">direct</dd>
          </div>
          <div class="flex items-baseline justify-between gap-6 py-4">
            <dt class="data text-[15px] text-text">Intermediaries</dt>
            <dd class="data text-[13px] text-muted-2">none</dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>
