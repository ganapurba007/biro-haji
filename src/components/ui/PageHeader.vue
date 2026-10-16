<script setup>
import { RouterLink } from 'vue-router'
import { ChevronRight, Home } from 'lucide-vue-next'

defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  breadcrumbs: {
    type: Array,
    default: () => []
  },
  backgroundImage: {
    type: String,
    default: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80'
  }
})
</script>

<template>
  <div class="relative bg-slate-950 py-16 sm:py-24 overflow-hidden select-none border-b border-slate-800">
    <!-- Background Image with Gradient Overlays -->
    <img
      :src="backgroundImage"
      :alt="title"
      class="absolute inset-0 w-full h-full object-cover object-center opacity-25"
      loading="eager"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
    <div class="absolute inset-0 bg-radial-at-c from-transparent via-slate-950/40 to-slate-950/90" />

    <!-- Content Container -->
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
      <div class="space-y-3 max-w-2xl">
        <!-- Main Page Title -->
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          {{ title }}
        </h1>
        <p v-if="subtitle" class="text-sm sm:text-base text-slate-300 leading-relaxed">
          {{ subtitle }}
        </p>
      </div>

      <!-- Breadcrumbs Navigation -->
      <nav aria-label="Breadcrumb" class="shrink-0 flex items-center justify-center sm:justify-end">
        <ol class="inline-flex items-center space-x-2 text-xs sm:text-sm font-medium bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-800 text-slate-400">
          <li class="inline-flex items-center">
            <RouterLink to="/" class="inline-flex items-center gap-1.5 hover:text-amber-400 transition-colors">
              <Home class="w-4 h-4 text-amber-500" />
              <span>Beranda</span>
            </RouterLink>
          </li>
          <li v-for="(crumb, idx) in breadcrumbs" :key="idx" class="inline-flex items-center">
            <ChevronRight class="w-3.5 h-3.5 text-slate-600 mx-1" />
            <RouterLink 
              v-if="crumb.path" 
              :to="crumb.path" 
              class="hover:text-amber-400 transition-colors"
            >
              {{ crumb.name }}
            </RouterLink>
            <span v-else class="text-amber-400 font-semibold">
              {{ crumb.name }}
            </span>
          </li>
        </ol>
      </nav>
    </div>
  </div>
</template>
