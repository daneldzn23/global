<script setup>
import { ref } from 'vue'

const open = ref(false)
const links = [
  { href: '#platforms', label: 'Platforms' },
  { href: '#partners', label: 'Partners' },
  { href: '#careers', label: 'Careers' },
]
</script>

<template>
  <header class="sticky top-0 z-[100] bg-white/85 backdrop-blur-[6px]">
    <div class="wrap flex h-[68px] items-center justify-between">
      <a href="#" aria-label="Nelogica home" class="shrink-0">
        <img
          class="h-[21px] w-auto brightness-0"
          src="/images/brand/nelogica-logo.png"
          alt="Nelogica"
        />
      </a>

      <button
        class="-mr-2 flex h-10 w-10 items-center justify-center text-ink-on-lite md:hidden"
        :aria-expanded="open"
        aria-controls="site-menu"
        aria-label="Toggle menu"
        @click="open = !open"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
          <path v-if="!open" d="M3 6h18M3 12h18M3 18h18" />
          <path v-else d="M5 5l14 14M19 5L5 19" />
        </svg>
      </button>

      <nav
        id="site-menu"
        class="flex items-center gap-8
               max-md:fixed max-md:inset-x-0 max-md:top-[68px] max-md:bottom-0
               max-md:flex-col max-md:items-stretch max-md:gap-0
               max-md:bg-white max-md:px-[clamp(20px,5vw,56px)] max-md:pt-1
               max-md:transition-opacity max-md:duration-200"
        :class="open
          ? 'max-md:pointer-events-auto max-md:opacity-100'
          : 'max-md:pointer-events-none max-md:opacity-0'"
      >
        <a
          v-for="l in links"
          :key="l.href"
          :href="l.href"
          class="text-[15px] font-medium text-muted-on-lite transition-colors hover:text-ink-on-lite
                 max-md:border-b max-md:border-lite-line max-md:py-5 max-md:text-[16px]"
          @click="open = false"
        >{{ l.label }}</a>

        <a
          href="#contact"
          class="rounded-md bg-ink px-4 py-2.5 text-[14.5px] font-medium text-white transition-colors hover:bg-ink-2
                 max-md:mt-6 max-md:py-3.5 max-md:text-center max-md:text-[16px]"
          @click="open = false"
        >Talk to us</a>
      </nav>
    </div>
  </header>
</template>
