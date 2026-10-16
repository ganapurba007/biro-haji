<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  backgroundImage: {
    type: String,
    default: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80'
  }
})
</script>

<template>
  <div class="relative bg-gradient-to-b from-emerald-950 via-slate-950 to-slate-950 py-16 sm:py-20 overflow-hidden select-none border-b border-emerald-900/50">
    <!-- Background Image with Gradient Overlays -->
    <img
      :src="backgroundImage"
      :alt="title"
      class="absolute inset-0 w-full h-full object-cover object-center opacity-30"
      loading="eager"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-emerald-950/60 to-transparent" />
    <div class="absolute inset-0 bg-radial-at-c from-transparent via-emerald-950/30 to-slate-950/90" />

    <!-- Content Container -->
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
      <div class="space-y-3 max-w-3xl">
        <!-- Main Page Title -->
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          {{ title }}
        </h1>
        <p v-if="subtitle" class="text-sm sm:text-base text-slate-200 leading-relaxed">
          {{ subtitle }}
        </p>
      </div>
    </div>
  </div>
</template>
