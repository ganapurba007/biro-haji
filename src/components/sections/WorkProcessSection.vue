<script setup>
import homeData from '@/data/home.json'
import SectionTitle from '@/components/ui/SectionTitle.vue'

const workProcess = homeData.workProcess
</script>

<template>
  <section id="alur-kerja" class="py-20 lg:py-28 bg-slate-900 text-white scroll-mt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <SectionTitle
        badge="Metodologi Kerja"
        title="4 Langkah Sistematis Menuju Keberhasilan Proyek Anda"
        description="Setiap tahapan proyek dikawal dengan manajemen mutu ketat, transparansi laporan progres, dan protokol keselamatan K3."
        align="center"
        :dark="true"
      />

      <!-- Steps Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative mt-12">
        <div
          v-for="(step, index) in workProcess"
          :key="step.number"
          class="relative bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80 hover:border-amber-400/80 transition-all duration-300 group flex flex-col justify-between"
        >
          <div>
            <!-- Step Image -->
            <div class="relative h-36 rounded-xl overflow-hidden mb-6 bg-slate-950">
              <img
                :src="step.image"
                :alt="step.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent" />
              
              <!-- Floating Step Number -->
              <span class="absolute top-3 left-3 bg-amber-500 text-slate-950 font-heading font-black text-xs px-2.5 py-1 rounded-md shadow-md">
                Langkah {{ step.number }}
              </span>
            </div>

            <!-- Title -->
            <h3 class="text-lg font-bold text-white group-hover:text-amber-400 transition-colors mb-2.5">
              {{ step.title }}
            </h3>

            <!-- Description -->
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {{ step.description }}
            </p>
          </div>

          <!-- Bottom Status Indicator -->
          <div class="mt-6 pt-4 border-t border-slate-700/50 flex items-center justify-between text-[11px] text-slate-400 font-semibold uppercase tracking-wider">
            <span>Fase 0{{ index + 1 }}</span>
            <span class="text-amber-400 font-bold">Standardized</span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
