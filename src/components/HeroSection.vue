<script setup>
import ImageSlot from './ImageSlot.vue'
</script>

<template>
  <section class="ground-tint pt-20 pb-0 sm:pt-28">
    <div class="wrap">
      <p class="text-[15px] font-medium text-blue-on-lite mb-5">
        Investment technology since 2003
      </p>

      <h1 class="h1 text-ink-on-lite max-w-[19ch] mb-8">
        We build trading technology from the infrastructure up.
      </h1>

      <p class="lead text-muted-on-lite mb-9">
        Nelogica is a trading technology company. We build the trading platforms
        and order management systems that banks, brokers and prop firms run on,
        connected to the world's major exchanges.
      </p>

      <div class="flex flex-wrap items-center gap-x-7 gap-y-3 mb-16 sm:mb-20">
        <a
          href="#platforms"
          class="rounded-md bg-blue-on-lite px-5 py-3 text-[15px] font-medium text-white transition-colors hover:bg-blue"
        >See the stack</a>
        <a
          href="#contact"
          class="text-[15px] font-medium text-blue-on-lite transition-colors hover:text-ink-on-lite"
        >Talk to our team →</a>
      </div>
    </div>

    <div class="mx-auto max-w-[1400px] px-0 sm:px-6">
      <ImageSlot dark ratio="1500 / 843" name="hero — BlackArrow terminal" />
    </div>
  </section>
</template>
