<template>
  <section class="video-hero">
    <video autoplay muted loop playsinline poster="/images/platforms/blackarrow-screenshot.webp">
      <source src="/videos/home-video1.webm" type="video/webm" />
    </video>

    <div class="wrap relative z-10 pt-20 sm:pt-28 pb-24 sm:pb-32 flex flex-col items-center text-center">
      <h1 class="h1 text-text max-w-[26ch] mb-7">
        We build trading technology
        <span class="text-muted">from the infrastructure up.</span>
      </h1>

      <p class="lead text-muted mb-9 max-w-[64ch]">
        Nelogica is a trading technology company. We build the trading platforms
        and order management systems that banks, brokers and prop firms run on,
        connected to the world's major exchanges.
      </p>

      <div class="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
        <a
          href="#platforms"
          class="rounded-md bg-blue px-5 py-3 text-[15px] font-medium text-white transition-colors hover:bg-blue-bright"
        >See the stack</a>
        <a
          href="#contact"
          class="text-[15px] font-medium text-blue-bright transition-colors hover:text-text"
        >Talk to our team →</a>
      </div>
    </div>
  </section>
</template>
