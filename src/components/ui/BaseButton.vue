<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { Loader2 } from 'lucide-vue-next'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'secondary', 'dark', 'outline', 'ghost'].includes(v)
  },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v)
  },
  to: {
    type: [String, Object],
    default: null
  },
  href: {
    type: String,
    default: null
  },
  type: {
    type: String,
    default: 'button'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: false
  }
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold shadow-sm hover:shadow focus:ring-amber-400'
    case 'secondary':
      return 'bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold focus:ring-slate-400'
    case 'dark':
      return 'bg-slate-900 hover:bg-slate-800 text-white font-semibold shadow-sm hover:shadow focus:ring-slate-700'
    case 'outline':
      return 'border-2 border-slate-300 hover:border-amber-500 text-slate-700 hover:text-amber-600 font-semibold focus:ring-amber-400 bg-transparent'
    case 'ghost':
      return 'text-slate-700 hover:text-amber-600 hover:bg-slate-100 font-semibold focus:ring-slate-300'
    default:
      return 'bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold'
  }
})

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-3.5 py-1.5 text-xs rounded-md gap-1.5'
    case 'lg':
      return 'px-7 py-3.5 text-base rounded-xl gap-2.5'
    case 'md':
    default:
      return 'px-5 py-2.5 text-sm rounded-lg gap-2'
  }
})
</script>

<template>
  <component
    :is="to ? RouterLink : href ? 'a' : 'button'"
    :to="to"
    :href="href"
    :type="!to && !href ? type : null"
    :disabled="disabled || loading"
    class="inline-flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed select-none"
    :class="[
      variantClasses,
      sizeClasses,
      block ? 'w-full' : ''
    ]"
  >
    <Loader2 v-if="loading" class="w-4 h-4 animate-spin shrink-0" />
    <slot name="icon-left" />
    <slot />
    <slot name="icon-right" />
  </component>
</template>
