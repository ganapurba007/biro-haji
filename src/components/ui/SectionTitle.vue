<script setup>
defineProps({
  badge: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  align: {
    type: String,
    default: 'left',
    validator: (v) => ['left', 'center', 'right'].includes(v)
  },
  dark: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div 
    class="mb-10 lg:mb-14"
    :class="[
      align === 'center' ? 'text-center mx-auto max-w-3xl' : align === 'right' ? 'text-right' : 'text-left max-w-2xl'
    ]"
  >
    <!-- Category Eyebrow (Clean Typography Style) -->
    <div 
      v-if="badge"
      class="text-xs font-extrabold uppercase tracking-widest mb-3"
      :class="[
        align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left',
        dark ? 'text-amber-400' : 'text-amber-600'
      ]"
    >
      {{ badge }}
    </div>

    <!-- Main Title Heading -->
    <h2 
      class="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight"
      :class="[dark ? 'text-white' : 'text-slate-900']"
    >
      {{ title }}
    </h2>

    <!-- Description -->
    <p 
      v-if="description"
      class="mt-4 text-base sm:text-lg leading-relaxed"
      :class="[dark ? 'text-slate-300' : 'text-slate-600']"
    >
      {{ description }}
    </p>
  </div>
</template>
