<script setup>
const paths = [
  { label: "I'm a trader",   note: 'Platforms & accounts',  href: '#contact', primary: true },
  { label: 'For brokers',    note: 'White-label & OMS',     href: '#contact' },
  { label: 'For prop firms', note: 'Risk & funded programs', href: 'https://use.blackarrowtrading.com/b2b', external: true },
]
</script>

<template>
  <section id="contact" class="ground-base py-24 sm:py-28">
    <div class="wrap">
      <h2 class="h2 text-text max-w-[16ch] mb-4">
        Tell us what you're building.
      </h2>
      <p class="lead text-muted mb-14">
        Traders, brokers, and prop firms start with the path that fits — our team
        takes it from there.
      </p>

      <div v-reveal class="grid gap-x-12 gap-y-8 sm:grid-cols-3">
        <a
          v-for="p in paths"
          :key="p.label"
          :href="p.href"
          v-bind="p.external ? { target: '_blank', rel: 'noopener' } : {}"
          class="group block"
        >
          <hr class="hairline mb-5" />
          <span class="mb-2 block text-[13px] text-muted">{{ p.note }}</span>
          <span
            class="text-[17px] font-medium transition-colors"
            :class="p.primary ? 'text-blue-bright' : 'text-text group-hover:text-blue-bright'"
          >
            {{ p.label }}
            <span class="inline-block transition-transform group-hover:translate-x-1">→</span>
          </span>
        </a>
      </div>
    </div>
  </section>
</template>
