<script setup>
// Temporary stand-in until real imagery lands. Holds the exact aspect ratio
// of the asset it replaces so dropping the real file in causes no reflow.
defineProps({
  ratio: { type: String, required: true },   // e.g. '1500 / 843'
  name: { type: String, required: true },    // which asset belongs here
  dark: { type: Boolean, default: false },
})
</script>

<template>
  <div
    class="relative w-full overflow-hidden rounded-[10px]"
    :class="dark ? 'bg-surface' : 'bg-[#E8EDF2]'"
    :style="{ aspectRatio: ratio }"
  >
    <div
      class="absolute inset-0 flex flex-col items-center justify-center gap-1.5"
      :class="dark ? 'text-muted-2' : 'text-muted-on-lite'"
    >
      <span class="data text-[12px] opacity-70">{{ name }}</span>
      <span class="data text-[11px] opacity-45">{{ ratio.replace(' / ', ' × ') }}</span>
    </div>
  </div>
</template>
