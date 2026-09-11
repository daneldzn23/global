<script setup>
const figures = [
  { figure: '1,357', label: 'B2B partners',     caption: 'Financial institutions, brokers and prop firms across the world.' },
  { figure: '1.2B+', label: 'Orders processed', caption: 'Through our platforms in the last 12 months.' },
  { figure: '4.1M+', label: 'Traders',          caption: 'Using our trading platforms worldwide.' },
  { figure: '23',    label: 'Years',            caption: 'Building technology for the financial markets.' },
]
</script>

<template>
  <!-- stripe.com's real layout — centered heading, then a plain 4-column
       row with a top hairline. No per-stat boxes or cards. Uses the same
       dark ground as the connectivity section for a matching look. -->
  <section id="numbers" class="ground-dark py-12 sm:py-14">
    <div v-reveal class="wrap">
      <h2 class="h2 text-center max-w-[26ch] mx-auto mb-16">
        <span class="block">Built at scale.</span>
        <span class="block">Proven in production.</span>
      </h2>

      <dl class="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 text-center">
        <div v-for="f in figures" :key="f.label">
          <dd
            v-shuffle-number="f.figure"
            class="data mb-2 text-[clamp(1.75rem,3vw,2.5rem)] font-medium leading-none text-text"
          >{{ f.figure }}</dd>
          <dt class="mb-1.5 text-[14.5px] font-medium text-text">{{ f.label }}</dt>
          <p class="text-[13px] leading-relaxed text-muted">{{ f.caption }}</p>
        </div>
      </dl>
    </div>
  </section>
</template>
