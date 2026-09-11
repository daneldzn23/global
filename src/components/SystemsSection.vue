<script setup>
const systems = [
  {
    name: 'Order Management System',
    desc: 'Routing, execution, and full order lifecycle across multi-asset desks. Built for institutional volume.',
    image: '/images/img-5.webp',
  },
  {
    name: 'Risk Manager',
    desc: 'Pre-trade and real-time controls across accounts, desks, and books.',
    image: '/images/img-5-2.webp',
  },
  {
    name: 'Home & Mobile Broker',
    desc: 'White-labeled web and mobile trading. Your brand on the front, our engineering underneath.',
    image: '/images/img-5-1.webp',
  },
]
</script>

<template>
  <section id="systems" class="ground-tint py-12 sm:py-14">
    <div v-reveal class="wrap">
      <h2 class="h2 text-ink-on-lite max-w-[18ch] mx-auto mb-4 text-center">Corporate Solutions</h2>
      <p class="lead text-muted-on-lite mx-auto mb-8 text-center">
        The infrastructure institutions operate on, deployed under your own brand
        and your own controls.
      </p>

      <a
        href="https://use.blackarrowtrading.com/b2b"
        target="_blank"
        rel="noopener"
        class="mb-16 block text-center text-[15px] font-medium text-blue-on-lite transition-colors hover:text-ink-on-lite"
      >See the institutional offering →</a>

      <div class="grid gap-x-10 gap-y-12 sm:grid-cols-3">
        <div v-for="s in systems" :key="s.name">
          <div class="mb-6 overflow-hidden rounded-xl">
            <img :src="s.image" :alt="s.name" width="1058" height="646" />
          </div>
          <h3 class="h3 text-ink-on-lite mb-2.5" style="font-size: 1.25rem">{{ s.name }}</h3>
          <p class="body text-muted-on-lite" style="font-size: 1rem">{{ s.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
