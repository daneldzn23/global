<template>
  <section id="platforms" class="ground-tint pt-12 pb-12 sm:pt-14 sm:pb-14">
    <div v-reveal class="wrap">
      <h2 class="h2 text-ink-on-lite max-w-[20ch] mx-auto mb-4 text-center">
        Our flagship platforms.
      </h2>
      <p class="lead text-muted-on-lite mx-auto mb-16 text-center sm:mb-20">
        Different markets, different traders, one engineering standard.
      </p>

      <!-- BlackArrow: full-bleed image card, body overlaid on the left -->
      <div
        class="float-card float-card--on-dark relative mb-6 flex min-h-[320px] flex-col justify-start overflow-hidden p-8 sm:min-h-[440px] sm:justify-center sm:p-11"
        style="box-shadow: none"
      >
        <img
          class="absolute inset-0 h-full w-full object-cover object-[150%_center] sm:object-[85%_center]"
          src="/images/platforms/blackarrow_home.webp"
          alt="BlackArrow terminal"
        />
        <div class="relative z-10 flex flex-col">
          <img
            class="mb-4 self-start brightness-0 invert"
            style="width: auto; height: 42px; border-radius: 0"
            src="/images/platforms/blackarrow-logo.svg"
            alt="BlackArrow"
          />
          <h3 class="h3 text-text mb-2" style="font-size: 1.25rem">Every market, one workspace.</h3>
          <p class="body text-muted" style="max-width: 32ch; font-size: 1rem">
            A multi-asset trading platform for futures, equities and OTC
            instruments, engineered for ultra-low latency, depth and control.
          </p>
        </div>
      </div>

      <!-- Bookmap + Profit: two-up row of cards, media on top, body below -->
      <div class="grid gap-6 sm:grid-cols-2">
        <div
          class="float-card overflow-hidden flex flex-col pt-10 px-10"
          style="background: #fff; box-shadow: none; border: 1px solid var(--color-lite-line)"
        >
          <img
            class="mb-4 self-start"
            style="width: auto; height: 22px; border-radius: 0"
            src="/images/platforms/bookmap-logo-dark.svg"
            alt="Bookmap"
          />
          <h3 class="h3 text-ink-on-lite mb-2" style="font-size: 1.25rem">Order flow, made visible.</h3>
          <p class="body text-muted-on-lite mb-10 max-w-[38ch]" style="font-size: 1rem">
            Traders use Bookmap to read liquidity and market depth as it happens.
          </p>
          <img
            class="mt-auto block w-[82%] self-center"
            style="border-radius: 8px 8px 0 0"
            src="/images/platforms/bookmap-screenshot.webp"
            alt="Bookmap heatmap"
          />
        </div>

        <div
          class="float-card overflow-hidden flex flex-col pt-10 px-10"
          style="background: #fff; box-shadow: none; border: 1px solid var(--color-lite-line)"
        >
          <img
            class="mb-4 self-start"
            style="width: auto; height: 52px; border-radius: 0"
            src="/images/platforms/profit-logo-dark.svg"
            alt="Profit"
          />
          <h3 class="h3 text-ink-on-lite mb-2" style="font-size: 1.25rem">Where Nelogica started.</h3>
          <p class="body text-muted-on-lite mb-10 max-w-[38ch]" style="font-size: 1rem">
            Built in 2003, Profit is the most used trading platform in Latin
            America and helped establish Brazil's trading culture.
          </p>
          <img
            class="mt-auto block w-[82%] self-center"
            style="border-radius: 8px 8px 0 0"
            src="/images/platforms/profit-screenshot.webp"
            alt="Profit — multi-device"
          />
        </div>
      </div>
    </div>
  </section>
</template>
