<script>
import { defineComponent, h } from 'vue'

const isNodeItem = (item) => 'node' in item

export default defineComponent({
  name: 'LogoLoopContent',
  props: {
    item: { type: Object, required: true },
    scaleOnHover: { type: Boolean, default: false },
  },
  setup(props) {
    return () => {
      const scaleClass = props.scaleOnHover
        ? 'transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/item:scale-120'
        : ''

      if (isNodeItem(props.item)) {
        return h('span', {
          class: [
            'inline-flex items-center',
            'motion-reduce:transition-none',
            scaleClass,
            'text-[length:var(--logoloop-logoHeight)] [&>i]:text-[length:var(--logoloop-logoHeight)] [&>i]:leading-[1]',
          ]
            .filter(Boolean)
            .join(' '),
          innerHTML: props.item.node,
          'aria-hidden': !!props.item.href && !props.item.ariaLabel ? true : undefined,
        })
      }

      return h('img', {
        class: [
          'h-[var(--logoloop-logoHeight)] w-auto block object-contain',
          '[-webkit-user-drag:none] pointer-events-none',
          '[image-rendering:-webkit-optimize-contrast]',
          'motion-reduce:transition-none',
          scaleClass,
        ]
          .filter(Boolean)
          .join(' '),
        src: props.item.src,
        srcset: props.item.srcSet,
        sizes: props.item.sizes,
        width: props.item.width,
        height: props.item.height,
        alt: props.item.alt ?? '',
        title: props.item.title,
        loading: 'lazy',
        decoding: 'async',
        draggable: false,
      })
    }
  },
})
</script>
