<template>
  <div ref="containerRef" :class="rootClasses" :style="containerStyle" role="region" :aria-label="ariaLabel">
    <template v-if="fadeOut">
      <template v-if="isVertical">
        <div
          aria-hidden="true"
          :class="[
            'pointer-events-none absolute inset-x-0 top-0 z-10',
            'h-[clamp(24px,8%,120px)]',
            'bg-[linear-gradient(to_bottom,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]'
          ]"
        />
        <div
          aria-hidden="true"
          :class="[
            'pointer-events-none absolute inset-x-0 bottom-0 z-10',
            'h-[clamp(24px,8%,120px)]',
            'bg-[linear-gradient(to_top,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]'
          ]"
        />
      </template>

      <template v-else>
        <div
          aria-hidden="true"
          :class="[
            'pointer-events-none absolute inset-y-0 left-0 z-10',
            'w-[clamp(24px,8%,120px)]',
            'bg-[linear-gradient(to_right,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]'
          ]"
        />
        <div
          aria-hidden="true"
          :class="[
            'pointer-events-none absolute inset-y-0 right-0 z-10',
            'w-[clamp(24px,8%,120px)]',
            'bg-[linear-gradient(to_left,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]'
          ]"
        />
      </template>
    </template>

    <div
      ref="trackRef"
      :class="[
        'flex will-change-transform select-none relative z-0',
        'motion-reduce:transform-none',
        isVertical ? 'flex-col h-max w-full' : 'flex-row w-max'
      ]"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <ul
        v-for="copyIndex in copyCount"
        :key="`copy-${copyIndex - 1}`"
        :class="['flex items-center', isVertical && 'flex-col']"
        role="list"
        :aria-hidden="copyIndex > 1 ? true : undefined"
        :ref="
          el => {
            if (copyIndex === 1) seqRef = el;
          }
        "
      >
        <li
          v-for="(item, itemIndex) in logos"
          :key="`${copyIndex - 1}-${itemIndex}`"
          :class="[
            'flex-none text-[length:var(--logoloop-logoHeight)] leading-[1]',
            isVertical ? 'mb-[var(--logoloop-gap)]' : 'mr-[var(--logoloop-gap)]',
            scaleOnHover && 'overflow-visible group/item'
          ]"
          role="listitem"
        >
          <slot v-if="$slots.renderItem" name="renderItem" :item="item" :index="`${copyIndex - 1}-${itemIndex}`" />
          <template v-else>
            <a
              v-if="item.href"
              :class="[
                'inline-flex items-center no-underline rounded',
                'transition-opacity duration-200 ease-linear',
                'hover:opacity-80',
                'focus-visible:outline focus-visible:outline-current focus-visible:outline-offset-2'
              ]"
              :href="item.href"
              :aria-label="getItemAriaLabel(item) || 'logo link'"
              target="_blank"
              rel="noreferrer noopener"
            >
              <LogoLoopContent :item="item" :scale-on-hover="scaleOnHover" />
            </a>
            <LogoLoopContent v-else :item="item" :scale-on-hover="scaleOnHover" />
          </template>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import LogoLoopContent from './LogoLoopContent.vue'

const ANIMATION_CONFIG = {
  SMOOTH_TAU: 0.25,
  MIN_COPIES: 2,
  COPY_HEADROOM: 2,
}

const props = defineProps({
  logos: { type: Array, required: true },
  speed: { type: Number, default: 120 },
  direction: { type: String, default: 'left' }, // 'left' | 'right' | 'up' | 'down'
  width: { type: [Number, String], default: '100%' },
  logoHeight: { type: Number, default: 28 },
  gap: { type: Number, default: 32 },
  pauseOnHover: { type: Boolean, default: undefined },
  hoverSpeed: { type: Number, default: undefined },
  fadeOut: { type: Boolean, default: false },
  fadeOutColor: { type: String, default: undefined },
  scaleOnHover: { type: Boolean, default: false },
  ariaLabel: { type: String, default: 'Partner logos' },
  className: { type: String, default: undefined },
  style: { type: Object, default: undefined },
})

const containerRef = ref(null)
const trackRef = ref(null)
const seqRef = ref(null)

const seqWidth = ref(0)
const seqHeight = ref(0)
const copyCount = ref(ANIMATION_CONFIG.MIN_COPIES)
const isHovered = ref(false)

let rafRef = null
let lastTimestampRef = null
const offsetRef = ref(0)
const velocityRef = ref(0)

const isVertical = computed(() => props.direction === 'up' || props.direction === 'down')

const effectiveHoverSpeed = computed(() => {
  if (props.hoverSpeed !== undefined) return props.hoverSpeed
  if (props.pauseOnHover === true) return 0
  if (props.pauseOnHover === false) return undefined
  return 0 // default: pause on hover
})

const targetVelocity = computed(() => {
  const magnitude = Math.abs(props.speed)
  let directionMultiplier
  if (isVertical.value) {
    directionMultiplier = props.direction === 'up' ? 1 : -1
  } else {
    directionMultiplier = props.direction === 'left' ? 1 : -1
  }
  const speedMultiplier = props.speed < 0 ? -1 : 1
  return magnitude * directionMultiplier * speedMultiplier
})

const cssVariables = computed(() => ({
  '--logoloop-gap': `${props.gap}px`,
  '--logoloop-logoHeight': `${props.logoHeight}px`,
  ...(props.fadeOutColor ? { '--logoloop-fadeColor': props.fadeOutColor } : {}),
}))

const rootClasses = computed(() =>
  [
    'relative group',
    isVertical.value ? 'overflow-hidden h-full inline-block' : 'overflow-x-hidden',
    '[--logoloop-gap:32px]',
    '[--logoloop-logoHeight:28px]',
    '[--logoloop-fadeColorAuto:#ffffff]',
    'dark:[--logoloop-fadeColorAuto:#0b0b0b]',
    props.scaleOnHover && 'py-[calc(var(--logoloop-logoHeight)*0.1)]',
    props.className,
  ].filter(Boolean)
)

const containerStyle = computed(() => {
  const w = typeof props.width === 'number' ? `${props.width}px` : props.width
  return {
    ...(isVertical.value ? (w !== '100%' && w ? { width: w } : {}) : { width: w ?? '100%' }),
    ...cssVariables.value,
    ...(props.style ?? {}),
  }
})

const isNodeItem = (item) => 'node' in item

const getItemAriaLabel = (item) => {
  if (isNodeItem(item)) return item.ariaLabel ?? item.title
  return item.alt ?? item.title
}

const handleMouseEnter = () => {
  if (effectiveHoverSpeed.value !== undefined) isHovered.value = true
}

const handleMouseLeave = () => {
  if (effectiveHoverSpeed.value !== undefined) isHovered.value = false
}

const updateDimensions = async () => {
  await nextTick()

  const containerWidth = containerRef.value?.clientWidth ?? 0
  const sequenceRect = seqRef.value?.getBoundingClientRect?.()
  const sequenceWidth = sequenceRect?.width ?? 0
  const sequenceHeight = sequenceRect?.height ?? 0

  if (isVertical.value) {
    const parentHeight = containerRef.value?.parentElement?.clientHeight ?? 0
    if (containerRef.value && parentHeight > 0) {
      const targetHeight = Math.ceil(parentHeight)
      if (containerRef.value.style.height !== `${targetHeight}px`) {
        containerRef.value.style.height = `${targetHeight}px`
      }
    }
    if (sequenceHeight > 0) {
      seqHeight.value = Math.ceil(sequenceHeight)
      const viewport = containerRef.value?.clientHeight ?? parentHeight ?? sequenceHeight
      const copiesNeeded = Math.ceil(viewport / sequenceHeight) + ANIMATION_CONFIG.COPY_HEADROOM
      copyCount.value = Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded)
    }
  } else if (sequenceWidth > 0) {
    seqWidth.value = Math.ceil(sequenceWidth)
    const copiesNeeded = Math.ceil(containerWidth / sequenceWidth) + ANIMATION_CONFIG.COPY_HEADROOM
    copyCount.value = Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded)
  }
}

let resizeObserver = null

const setupResizeObserver = () => {
  if (!window.ResizeObserver) {
    window.addEventListener('resize', updateDimensions)
    updateDimensions()
    return () => window.removeEventListener('resize', updateDimensions)
  }

  resizeObserver = new ResizeObserver(updateDimensions)
  if (containerRef.value) resizeObserver.observe(containerRef.value)
  if (seqRef.value) resizeObserver.observe(seqRef.value)
  updateDimensions()

  return () => {
    resizeObserver?.disconnect()
    resizeObserver = null
  }
}

const setupImageLoader = () => {
  const images = seqRef.value?.querySelectorAll('img') ?? []

  if (images.length === 0) {
    updateDimensions()
    return () => {}
  }

  let remaining = images.length
  const handleLoad = () => {
    remaining -= 1
    if (remaining === 0) updateDimensions()
  }

  images.forEach((img) => {
    if (img.complete) {
      handleLoad()
    } else {
      img.addEventListener('load', handleLoad, { once: true })
      img.addEventListener('error', handleLoad, { once: true })
    }
  })

  return () => {
    images.forEach((img) => {
      img.removeEventListener('load', handleLoad)
      img.removeEventListener('error', handleLoad)
    })
  }
}

const startAnimationLoop = () => {
  const track = trackRef.value
  if (!track) return () => {}

  const prefersReduced =
    typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

  const seqSize = isVertical.value ? seqHeight.value : seqWidth.value

  if (seqSize > 0) {
    offsetRef.value = ((offsetRef.value % seqSize) + seqSize) % seqSize
    track.style.transform = isVertical.value
      ? `translate3d(0, ${-offsetRef.value}px, 0)`
      : `translate3d(${-offsetRef.value}px, 0, 0)`
  }

  if (prefersReduced) {
    track.style.transform = 'translate3d(0, 0, 0)'
    return () => {
      lastTimestampRef = null
    }
  }

  const animate = (timestamp) => {
    if (lastTimestampRef === null) lastTimestampRef = timestamp

    const deltaTime = Math.max(0, timestamp - lastTimestampRef) / 1000
    lastTimestampRef = timestamp

    const target =
      isHovered.value && effectiveHoverSpeed.value !== undefined ? effectiveHoverSpeed.value : targetVelocity.value

    const easingFactor = 1 - Math.exp(-deltaTime / ANIMATION_CONFIG.SMOOTH_TAU)
    velocityRef.value += (target - velocityRef.value) * easingFactor

    const currentSeqSize = isVertical.value ? seqHeight.value : seqWidth.value

    if (currentSeqSize > 0) {
      let nextOffset = offsetRef.value + velocityRef.value * deltaTime
      nextOffset = ((nextOffset % currentSeqSize) + currentSeqSize) % currentSeqSize
      offsetRef.value = nextOffset

      track.style.transform = isVertical.value
        ? `translate3d(0, ${-offsetRef.value}px, 0)`
        : `translate3d(${-offsetRef.value}px, 0, 0)`
    }

    rafRef = requestAnimationFrame(animate)
  }

  rafRef = requestAnimationFrame(animate)

  return () => {
    if (rafRef !== null) {
      cancelAnimationFrame(rafRef)
      rafRef = null
    }
    lastTimestampRef = null
  }
}

let cleanupResize
let cleanupImages
let cleanupAnimation

const cleanup = () => {
  cleanupResize?.()
  cleanupImages?.()
  cleanupAnimation?.()
}

onMounted(async () => {
  await nextTick()
  setTimeout(() => {
    cleanupResize = setupResizeObserver()
    cleanupImages = setupImageLoader()
    cleanupAnimation = startAnimationLoop()
  }, 10)
})

onUnmounted(() => {
  cleanup()
})

watch(
  [() => props.logos, () => props.gap, () => props.logoHeight, () => props.direction],
  async () => {
    await nextTick()
    cleanupImages?.()
    cleanupImages = setupImageLoader()
    cleanupAnimation?.()
    cleanupAnimation = startAnimationLoop()
  },
  { deep: true }
)

watch([() => props.speed, () => props.direction, () => props.hoverSpeed, () => props.pauseOnHover], () => {
  cleanupAnimation?.()
  cleanupAnimation = startAnimationLoop()
})
</script>
