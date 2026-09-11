<script setup>
const regions = ['Americas', 'Europe', 'Asia']
</script>

<template>
  <section id="careers" class="ground-raised py-24 sm:py-28">
    <div class="wrap grid gap-12 lg:grid-cols-[1fr_minmax(0,20rem)] lg:gap-20">
      <div>
        <h2 class="h2 max-w-[18ch] mb-5">The people behind the platforms.</h2>
        <p class="body text-muted mb-9">
          Nelogica has more than 900 software developers across the Americas,
          Europe and Asia, working alongside the teams that bring our platforms
          to market. As the markets we serve grow, so do we. We're looking for
          people who make it happen.
        </p>
        <div class="flex flex-wrap items-center gap-x-7 gap-y-3">
          <a
            href="#contact"
            class="rounded-md bg-blue px-5 py-3 text-[15px] font-medium text-white transition-colors hover:bg-blue-bright"
          >See open roles</a>
          <span class="text-[14px] text-muted-2">
            Roles open across engineering, product &amp; support
          </span>
        </div>
      </div>

      <dl class="self-center">
        <div class="flex items-baseline justify-between gap-6 border-b border-white/10 py-4">
          <dt class="text-[14px] text-muted">Developers</dt>
          <dd class="data text-[22px] font-medium text-text">900+</dd>
        </div>
        <div
          v-for="r in regions"
          :key="r"
          class="flex items-baseline justify-between gap-6 border-b border-white/10 py-3.5 last:border-b-0"
        >
          <dt class="text-[14px] text-muted">{{ r }}</dt>
          <dd class="data text-[13px] text-tick">active</dd>
        </div>
      </dl>
    </div>
  </section>
</template>
