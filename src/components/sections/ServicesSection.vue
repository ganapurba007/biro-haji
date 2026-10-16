<script setup>
import { RouterLink } from 'vue-router'
import { Compass, Globe, Award, HeartHandshake, ArrowRight } from 'lucide-vue-next'
import servicesData from '@/data/services.json'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import { useAgency } from '@/composables/useAgency'

const { agencyLink } = useAgency()

// Ambil 4 layanan utama untuk beranda
const services = servicesData.slice(0, 4)

const getServiceIcon = (iconName) => {
  switch (iconName) {
    case 'Compass': return Compass
    case 'Globe': return Globe
    case 'Award': return Award
    case 'HeartHandshake': return HeartHandshake
    default: return Compass
  }
}
</script>

<template>
  <section class="py-20 lg:py-28 bg-white border-y border-slate-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
        <SectionTitle
          badge="Program Ibadah Unggulan"
          title="Layanan Terpadu Menuju Ibadah Umroh & Haji yang Mabrur"
          description="Dari paket reguler bintang 5 pelataran, umroh plus mancanegara, hingga haji khusus dan badal amanah sesuai sunnah."
          align="left"
        />

        <RouterLink
          :to="agencyLink('/layanan')"
          class="inline-flex items-center gap-2 text-sm font-bold text-amber-600 hover:text-amber-700 transition-colors shrink-0 pb-1"
        >
          <span>Lihat Semua Layanan ({{ servicesData.length }})</span>
          <ArrowRight class="w-4 h-4" />
        </RouterLink>
      </div>

      <!-- Services Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(service, index) in services"
          :key="service.id"
          class="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200/80 hover:border-amber-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <!-- Image & Number Header -->
            <div class="relative h-48 overflow-hidden bg-slate-200">
              <img
                :src="service.image"
                :alt="service.title"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              
              <!-- Number Badge -->
              <span class="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-amber-400 text-xs font-black font-heading px-2.5 py-1 rounded-md border border-slate-700">
                0{{ index + 1 }}
              </span>

              <!-- Floating Icon -->
              <div class="absolute -bottom-5 right-6 w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <component :is="getServiceIcon(service.icon)" class="w-6 h-6" />
              </div>
            </div>

            <!-- Content -->
            <div class="p-6 pt-8">
              <h3 class="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors mb-3">
                {{ service.title }}
              </h3>
              <p class="text-sm text-slate-600 leading-relaxed">
                {{ service.summary }}
              </p>
            </div>
          </div>

          <!-- Bottom Read More Link -->
          <div class="px-6 pb-6 pt-2">
            <RouterLink
              :to="agencyLink('/layanan')"
              class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 group-hover:text-amber-600 transition-colors"
            >
              <span>Selengkapnya</span>
              <ArrowRight class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </RouterLink>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
