<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const open = ref(false)
const scrolled = ref(false)
const links = [
  { href: '#platforms', label: 'Platforms' },
  { href: '#partners', label: 'Partners' },
  { href: '#careers', label: 'Careers' },
]

function onScroll() {
  scrolled.value = window.scrollY > 40
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-[100]">
    <!-- backdrop-filter on <header> itself would make it a containing block
         for the fixed-position mobile nav panel below, collapsing that
         panel's height to the header's own 68px. Isolating the blur to this
         absolutely-positioned backdrop layer avoids that trap. -->
    <div
      class="absolute inset-0 -z-10 transition-colors duration-300"
      :class="scrolled || open ? 'bg-ink/80 backdrop-blur-md' : 'bg-transparent'"
    />

    <div class="wrap flex h-[68px] items-center justify-between">
      <a href="#" aria-label="Nelogica home" class="shrink-0">
        <img
          class="h-[30px] w-auto"
          src="/images/brand/nelogica-logo.svg"
          alt="Nelogica"
        />
      </a>

      <button
        class="-mr-2 flex h-10 w-10 items-center justify-center text-white md:hidden"
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
               max-md:bg-ink max-md:backdrop-blur-md max-md:px-[clamp(20px,5vw,56px)] max-md:pt-1
               max-md:transition-opacity max-md:duration-200"
        :class="open
          ? 'max-md:pointer-events-auto max-md:opacity-100'
          : 'max-md:pointer-events-none max-md:opacity-0'"
      >
        <a
          v-for="l in links"
          :key="l.href"
          :href="l.href"
          class="text-[15px] font-medium text-white/80 hover:text-white transition-colors
                 max-md:border-b max-md:border-white/10 max-md:py-5 max-md:text-[16px] max-md:text-text"
          @click="open = false"
        >{{ l.label }}</a>

        <a
          href="#contact"
          class="rounded-md bg-blue px-4 py-2.5 text-[14.5px] font-medium text-white transition-colors hover:bg-blue-bright
                 max-md:mt-6 max-md:py-3.5 max-md:text-center max-md:text-[16px]"
          @click="open = false"
        >Talk to us</a>
      </nav>
    </div>
  </header>
</template>
