<script setup>
import { Calendar, Flag, Award, TrendingUp, Cpu } from 'lucide-vue-next'
import companyData from '@/data/company.json'
import SectionTitle from '@/components/ui/SectionTitle.vue'

const history = companyData.history

const getTimelineIcon = (index) => {
  switch (index) {
    case 0: return Flag
    case 1: return TrendingUp
    case 2: return Award
    case 3: return Cpu
    default: return Calendar
  }
}
</script>

<template>
  <section class="py-20 bg-slate-900 text-white border-y border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <SectionTitle
        badge="Jejak Langkah & Pencapaian"
        title="Sejarah Perjalanan Tumbuh Berkembang Kami"
        description="Perjalanan lebih dari satu dekade membuktikan konsistensi mutu rekayasa dan integritas dalam membangun infrastruktur negeri."
        align="center"
        :dark="true"
      />

      <!-- Timeline Container -->
      <div class="relative mt-16 max-w-4xl mx-auto">
        <!-- Central Line for Desktop / Left Line for Mobile -->
        <div class="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 via-amber-400 to-slate-700 transform md:-translate-x-1/2" />

        <div class="space-y-12">
          <div
            v-for="(item, index) in history"
            :key="item.year"
            class="relative flex flex-col md:flex-row items-start md:items-center gap-8"
            :class="[index % 2 === 0 ? 'md:flex-row-reverse' : '']"
          >
            <!-- Timeline Content Card -->
            <div class="ml-16 md:ml-0 md:w-1/2">
              <div 
                class="bg-slate-800/90 rounded-2xl p-6 sm:p-7 border border-slate-700/80 hover:border-amber-400 transition-all duration-300 shadow-xl group"
                :class="[index % 2 === 0 ? 'md:mr-8' : 'md:ml-8']"
              >
                <!-- Year Badge -->
                <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500/15 text-amber-400 border border-amber-400/20 text-xs font-bold font-heading mb-3">
                  <Calendar class="w-3.5 h-3.5" />
                  <span>Tahun {{ item.year }}</span>
                </div>

                <h3 class="text-xl font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
                  {{ item.title }}
                </h3>

                <p class="text-sm text-slate-300 leading-relaxed">
                  {{ item.description }}
                </p>
              </div>
            </div>

            <!-- Central Timeline Node Icon -->
            <div class="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-slate-950 border-4 border-amber-500 flex items-center justify-center text-amber-400 shadow-lg z-10">
              <component :is="getTimelineIcon(index)" class="w-5 h-5" />
            </div>

            <!-- Spacer for the other half on desktop -->
            <div class="hidden md:block md:w-1/2" />
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
