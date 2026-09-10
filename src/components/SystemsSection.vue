<script setup>
const systems = [
  {
    name: 'Order Management System',
    desc: 'Routing, execution, and full order lifecycle across multi-asset desks. Built for institutional volume.',
  },
  {
    name: 'Risk Manager',
    desc: 'Pre-trade and real-time controls across accounts, desks, and books.',
  },
  {
    name: 'Home & Mobile Broker',
    desc: 'White-labeled web and mobile trading. Your brand on the front, our engineering underneath.',
  },
]
</script>

<template>
  <section id="systems" class="ground-tint py-24 sm:py-28">
    <div class="wrap">
      <h2 class="h2 text-ink-on-lite max-w-[18ch] mb-4">Corporate Solutions</h2>
      <p class="lead text-muted-on-lite mb-16">
        The infrastructure institutions operate on, deployed under your own brand
        and your own controls.
      </p>

      <div v-reveal class="grid gap-x-14 gap-y-12 sm:grid-cols-3">
        <div v-for="s in systems" :key="s.name">
          <hr class="hairline mb-5" />
          <h3 class="h3 text-ink-on-lite mb-2.5">{{ s.name }}</h3>
          <p class="body text-muted-on-lite">{{ s.desc }}</p>
        </div>
      </div>

      <a
        href="https://use.blackarrowtrading.com/b2b"
        target="_blank"
        rel="noopener"
        class="mt-14 inline-block text-[15px] font-medium text-blue-on-lite transition-colors hover:text-ink-on-lite"
      >See the institutional offering →</a>
    </div>
  </section>
</template>
