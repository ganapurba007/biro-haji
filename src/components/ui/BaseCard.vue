<script setup>
import { computed } from 'vue'

const props = defineProps({
  hoverEffect: {
    type: Boolean,
    default: true
  },
  padding: {
    type: String,
    default: 'md',
    validator: (v) => ['none', 'sm', 'md', 'lg'].includes(v)
  },
  border: {
    type: Boolean,
    default: true
  },
  as: {
    type: String,
    default: 'div'
  }
})

const paddingClasses = computed(() => {
  switch (props.padding) {
    case 'none': return 'p-0'
    case 'sm': return 'p-4'
    case 'lg': return 'p-8 sm:p-10'
    case 'md':
    default: return 'p-6'
  }
})
</script>

<template>
  <component
    :is="as"
    class="bg-white rounded-2xl transition-all duration-300 relative overflow-hidden"
    :class="[
      border ? 'border border-slate-200/80 shadow-sm' : 'shadow',
      hoverEffect ? 'hover:shadow-xl hover:-translate-y-1 hover:border-amber-300/60' : '',
      paddingClasses
    ]"
  >
    <slot />
  </component>
</template>
