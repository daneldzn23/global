<script setup>
const paths = [
  { label: "I'm a trader",   href: '#contact', primary: true },
  { label: 'For brokers',    href: '#contact' },
  { label: 'For prop firms', href: 'https://use.blackarrowtrading.com/b2b', external: true },
]
</script>

<template>
  <section id="contact" class="ground-tint py-12 sm:py-14">
    <div v-reveal class="wrap">
      <h2 class="h2 text-ink-on-lite max-w-[32ch] mx-auto mb-4 text-center">
        Tell us what you're building.
      </h2>
      <p class="lead text-muted-on-lite mx-auto mb-14 text-center">
        Traders, brokers, and prop firms start with the path that fits — our team
        takes it from there.
      </p>

      <div class="flex flex-wrap items-center justify-center gap-4">
        <a
          v-for="p in paths"
          :key="p.label"
          :href="p.href"
          v-bind="p.external ? { target: '_blank', rel: 'noopener' } : {}"
          class="rounded-md px-5 py-3 text-[15px] font-medium transition-colors"
          :class="p.primary
            ? 'bg-blue text-white hover:bg-blue-bright'
            : 'border border-lite-line text-ink-on-lite hover:border-blue-on-lite hover:text-blue-on-lite'"
        >{{ p.label }}</a>
      </div>
    </div>
  </section>
</template>
