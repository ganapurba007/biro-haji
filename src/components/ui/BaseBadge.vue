<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'amber',
    validator: (v) => ['amber', 'slate', 'green', 'blue', 'red'].includes(v)
  },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md'].includes(v)
  }
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'amber':
      return 'bg-amber-100 text-amber-800 border-amber-200'
    case 'slate':
      return 'bg-slate-100 text-slate-800 border-slate-200'
    case 'green':
      return 'bg-emerald-100 text-emerald-800 border-emerald-200'
    case 'blue':
      return 'bg-sky-100 text-sky-800 border-sky-200'
    case 'red':
      return 'bg-rose-100 text-rose-800 border-rose-200'
    default:
      return 'bg-amber-100 text-amber-800 border-amber-200'
  }
})

const sizeClasses = computed(() => {
  return props.size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-xs font-semibold'
})
</script>

<template>
  <span
    class="inline-flex items-center gap-1.5 rounded-md border font-semibold tracking-wide uppercase select-none"
    :class="[variantClasses, sizeClasses]"
  >
    <slot />
  </span>
</template>
