<script setup>
import { RouterLink } from 'vue-router'
import { MapPin, Calendar, ArrowRight, ExternalLink } from 'lucide-vue-next'
import { useAgency } from '@/composables/useAgency'
import projectsData from '@/data/projects.json'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import BaseBadge from '@/components/ui/BaseBadge.vue'

const { agencyLink } = useAgency()

// Filter 3 paket unggulan (featured: true)
const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 3)
</script>

<template>
  <section class="py-20 lg:py-28 bg-slate-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
        <SectionTitle
          badge="Paket Ibadah Unggulan"
          title="Pilihan Paket Keberangkatan Terbaik Menuju Tanah Suci"
          description="Akomodasi hotel bintang 5 ring 1 pelataran Masjidil Haram dan Nabawi serta penerbangan direct flight tanpa transit."
          align="left"
        />

        <RouterLink
          :to="agencyLink('/proyek')"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold shadow transition-colors shrink-0"
        >
          <span>Lihat Semua Paket ({{ projectsData.length }})</span>
          <ArrowRight class="w-4 h-4 text-amber-400" />
        </RouterLink>
      </div>

      <!-- Featured Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article
          v-for="project in featuredProjects"
          :key="project.id"
          class="bg-white rounded-2xl overflow-hidden border border-slate-200/80 hover:border-amber-400 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between"
        >
          <div>
            <!-- Image & Badges -->
            <div class="relative h-60 overflow-hidden bg-slate-200">
              <img
                :src="project.images[0]"
                :alt="project.title"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              <!-- Category Badge -->
              <div class="absolute top-4 left-4">
                <BaseBadge variant="amber">
                  {{ project.category }}
                </BaseBadge>
              </div>

              <!-- Status Badge -->
              <div class="absolute top-4 right-4">
                <BaseBadge variant="green">
                  {{ project.status }}
                </BaseBadge>
              </div>

              <!-- Location and Year Overlay -->
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
              <h3 class="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors line-clamp-1 mb-2.5">
                {{ project.title }}
              </h3>
              <p class="text-xs font-semibold text-slate-500 mb-3">
                Maskapai: <span class="text-slate-700 font-bold">{{ project.client }}</span>
              </p>
              <p class="text-sm text-slate-600 leading-relaxed line-clamp-2">
                {{ project.summary }}
              </p>
            </div>
          </div>

          <!-- Bottom Action Link -->
          <div class="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
            <span class="text-xs font-semibold text-amber-600">Durasi: {{ project.duration }}</span>
            <RouterLink
              :to="agencyLink(`/proyek/${project.slug}`)"
              class="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-900 group-hover:text-amber-600 transition-colors"
            >
              <span>Detail Paket</span>
              <ExternalLink class="w-3.5 h-3.5" />
            </RouterLink>
          </div>
        </article>
      </div>

    </div>
  </section>
</template>
