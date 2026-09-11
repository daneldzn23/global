<script setup>
// Temporary stand-in until real imagery lands. Holds the exact aspect ratio
// of the asset it replaces so dropping the real file in causes no reflow.
defineProps({
  ratio: { type: String, required: true },   // e.g. '1500 / 843'
  name: { type: String, required: true },    // which asset belongs here
})
</script>

<template>
  <div
    class="relative w-full overflow-hidden rounded-[10px] border border-white/8 bg-surface"
    :style="{ aspectRatio: ratio }"
  >
    <div class="absolute inset-0 flex flex-col items-center justify-center gap-1.5 text-muted-2">
      <span class="data text-[12px] opacity-70">{{ name }}</span>
      <span class="data text-[11px] opacity-45">{{ ratio.replace(' / ', ' × ') }}</span>
    </div>
  </div>
</template>
