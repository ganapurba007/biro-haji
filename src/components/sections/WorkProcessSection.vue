<script setup>
import homeData from '@/data/home.json'
import SectionTitle from '@/components/ui/SectionTitle.vue'

const workProcess = homeData.workProcess
</script>

<template>
  <section id="alur-kerja" class="py-20 lg:py-28 bg-gradient-to-b from-slate-900 via-emerald-950/70 to-slate-900 text-white scroll-mt-20 relative overflow-hidden">
    <!-- Ambient Background Glow -->
    <div class="absolute -top-32 -left-32 w-96 h-96 bg-brand-500/15 rounded-full blur-3xl pointer-events-none" />
    <div class="absolute -bottom-32 -right-32 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <SectionTitle
        badge="Tahapan Pendaftaran"
        title="4 Langkah Mudah Menuju Baitullah Bersama Kami"
        description="Setiap tahapan pendaftaran dan persiapan ibadah Anda dikawal dengan pelayanan amanah, kepastian dokumen 5 Pasti Umroh, dan bimbingan manasik intensif."
        align="center"
        :dark="true"
      />

      <!-- Steps Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative mt-12">
        <div
          v-for="(step, index) in workProcess"
          :key="step.number"
          class="relative bg-slate-900/90 rounded-2xl p-6 border border-emerald-900/60 hover:border-amber-400/80 hover:bg-slate-900 shadow-xl transition-all duration-300 group flex flex-col justify-between"
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
