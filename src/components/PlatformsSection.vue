<script setup>
import ImageSlot from './ImageSlot.vue'
</script>

<template>
  <section id="platforms" class="ground-tint pt-24 pb-24 sm:pt-28 sm:pb-28">
    <div class="wrap">
      <h2 class="h2 text-ink-on-lite max-w-[20ch] mb-4">
        Our flagship platforms.
      </h2>
      <p class="lead text-muted-on-lite mb-16 sm:mb-20">
        Different markets, different traders, one engineering standard.
      </p>

      <!-- BlackArrow -->
      <div v-reveal class="grid items-center gap-10 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-16">
        <div>
          <img
            class="mb-6 h-[22px] w-auto brightness-0"
            src="/images/platforms/blackarrow-logo.png"
            alt="BlackArrow"
          />
          <h3 class="h3 text-ink-on-lite mb-3">Every market, one workspace.</h3>
          <p class="body text-muted-on-lite">
            A multi-asset trading platform for futures, equities and OTC
            instruments, engineered for ultra-low latency, depth and control.
          </p>
        </div>
        <ImageSlot dark ratio="1500 / 843" name="BlackArrow terminal" />
      </div>

      <hr class="hairline my-16 sm:my-20" />

      <!-- Bookmap: wide and shallow, so it runs full width under the copy -->
      <div v-reveal>
        <div class="mb-9 max-w-[46ch]">
          <img
            class="mb-6 h-[19px] w-auto brightness-0"
            src="/images/platforms/bookmap-logo.png"
            alt="Bookmap"
          />
          <h3 class="h3 text-ink-on-lite mb-3">Order flow, made visible.</h3>
          <p class="body text-muted-on-lite">
            Traders use Bookmap to read liquidity and market depth as it happens.
          </p>
        </div>
        <ImageSlot dark ratio="913 / 412" name="Bookmap heatmap" />
      </div>

      <hr class="hairline my-16 sm:my-20" />

      <!-- Profit -->
      <div v-reveal class="grid items-center gap-10 lg:grid-cols-[minmax(0,24rem)_1fr] lg:gap-16">
        <div>
          <img
            class="mb-6 h-[26px] w-auto brightness-0"
            src="/images/platforms/profit-logo.png"
            alt="Profit"
          />
          <h3 class="h3 text-ink-on-lite mb-3">Where Nelogica started.</h3>
          <p class="body text-muted-on-lite">
            Built in 2003, Profit is the most used trading platform in Latin
            America and helped establish Brazil's trading culture.
          </p>
        </div>
        <ImageSlot ratio="1300 / 841" name="Profit — multi-device" />
      </div>
    </div>
  </section>
</template>
