<script setup>
import { RouterLink } from 'vue-router'
import { MapPin, Calendar, Clock, ArrowRight, ExternalLink } from 'lucide-vue-next'
import BaseBadge from '@/components/ui/BaseBadge.vue'

defineProps({
  project: {
    type: Object,
    required: true
  }
})

const getCategoryVariant = (category) => {
  switch (category.toLowerCase()) {
    case 'gedung': return 'amber'
    case 'infrastruktur': return 'blue'
    case 'renovasi': return 'green'
    case 'interior': return 'slate'
    default: return 'amber'
  }
}
</script>

<template>
  <article 
    class="bg-white rounded-2xl overflow-hidden border border-slate-200/80 hover:border-amber-400 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between"
  >
    <div>
      <!-- Thumbnail Frame -->
      <div class="relative h-64 overflow-hidden bg-slate-900">
        <img
          :src="project.images[0]"
          :alt="project.title"
          class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

        <!-- Category & Status Badges -->
        <div class="absolute top-4 left-4">
          <BaseBadge :variant="getCategoryVariant(project.category)">
            {{ project.category }}
          </BaseBadge>
        </div>

        <div class="absolute top-4 right-4">
          <BaseBadge variant="green">
            {{ project.status }}
          </BaseBadge>
        </div>

        <!-- Location & Year Overlay -->
        <div class="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white font-medium">
          <span class="flex items-center gap-1">
            <MapPin class="w-3.5 h-3.5 text-amber-400" />
            {{ project.location }}
          </span>
          <span class="flex items-center gap-1">
            <Calendar class="w-3.5 h-3.5 text-amber-400" />
            {{ project.year }}
          </span>
        </div>
      </div>

      <!-- Content Area -->
      <div class="p-6">
        <h3 class="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors line-clamp-1 mb-2">
          {{ project.title }}
        </h3>
        
        <div class="flex items-center gap-2 text-xs text-slate-500 font-semibold mb-3">
          <span>Klien:</span>
          <span class="text-slate-800 font-bold truncate">{{ project.client }}</span>
        </div>

        <p class="text-sm text-slate-600 leading-relaxed line-clamp-2">
          {{ project.summary }}
        </p>
      </div>
    </div>

    <!-- Bottom Actions -->
    <div class="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between bg-slate-50/50">
      <div class="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
        <Clock class="w-3.5 h-3.5 text-amber-500" />
        <span>{{ project.duration }}</span>
      </div>

      <RouterLink
        :to="`/proyek/${project.slug}`"
        class="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-slate-900 group-hover:text-amber-600 transition-colors"
      >
        <span>Lihat Detail</span>
        <ArrowRight class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
      </RouterLink>
    </div>
  </article>
</template>
