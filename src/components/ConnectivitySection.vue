<script setup>
const venues = [
  { file: 'cme-group.png', alt: 'CME', width: '90px' },
  { file: 'nasdaq.png', alt: 'Nasdaq', width: '82px' },
  { file: 'nyse.png', alt: 'NYSE', width: '38px' },
]

const columns = [
  {
    title: 'Connected directly to CME, Nasdaq and NYSE.',
    body: "Nelogica is an official market data distributor with a direct line to the world's largest exchanges. Orders reach the market with no intermediaries in between.",
  },
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
  <section id="connectivity" class="ground-dark py-12 sm:py-14">
    <div v-reveal class="wrap">
      <h2 class="h2 max-w-[40ch] mx-auto mb-4 text-center">Built on direct exchange connectivity.</h2>

      <p class="lead text-muted mx-auto mb-14 text-center sm:mb-16">
        Connected directly to CME, Nasdaq and NYSE.
      </p>

      <div class="grid gap-12 sm:grid-cols-3 sm:gap-10">
        <div>
          <div class="mb-6 flex h-7 items-center gap-6">
            <span
              v-for="v in venues"
              :key="v.file"
              role="img"
              :aria-label="v.alt"
              class="venue-mark h-5"
              :style="{
                width: v.width,
                '-webkit-mask-image': `url(/images/partner-logos/${v.file})`,
                maskImage: `url(/images/partner-logos/${v.file})`,
              }"
            />
          </div>
          <h3 class="h3 mb-2.5">{{ columns[0].title }}</h3>
          <p class="body text-muted" style="font-size: 1rem">{{ columns[0].body }}</p>
        </div>

        <div>
          <svg class="mb-6 h-7 w-7 text-blue-bright" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="3" y="3.5" width="18" height="6" rx="1.5" stroke="currentColor" stroke-width="1.5" />
            <rect x="3" y="14.5" width="18" height="6" rx="1.5" stroke="currentColor" stroke-width="1.5" />
            <circle cx="7" cy="6.5" r="1" fill="currentColor" />
            <circle cx="7" cy="17.5" r="1" fill="currentColor" />
            <path d="M11 6.5h6M11 17.5h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
          </svg>
          <h3 class="h3 mb-2.5">{{ columns[1].title }}</h3>
          <p class="body text-muted" style="font-size: 1rem">{{ columns[1].body }}</p>
        </div>

        <div>
          <svg class="mb-6 h-7 w-7 text-blue-bright" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 19a8 8 0 0 1 16 0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            <path d="M12 19V9.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            <path d="M12 9.5 16 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            <circle cx="12" cy="19" r="1.25" fill="currentColor" />
          </svg>
          <h3 class="h3 mb-2.5">{{ columns[2].title }}</h3>
          <p class="body text-muted" style="font-size: 1rem">{{ columns[2].body }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.venue-mark {
  display: inline-block;
  background-color: var(--color-blue-bright);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-position: left center;
  mask-position: left center;
}
</style>
