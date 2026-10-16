<script setup>
import { Award, ShieldCheck, Timer } from 'lucide-vue-next'
import homeData from '@/data/home.json'

const scoreCards = homeData.scoreCards

const getIcon = (index) => {
  switch (index) {
    case 0: return Award
    case 1: return ShieldCheck
    case 2: return Timer
    default: return Award
  }
}
</script>

<template>
  <section class="relative z-20 -mt-16 sm:-mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="(card, index) in scoreCards"
        :key="card.number"
        class="bg-white rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl border border-slate-200/80 hover:border-amber-400/80 transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between"
      >
        <div>
          <!-- Top Row: Number & Icon Badge -->
          <div class="flex items-center justify-between mb-6">
            <span class="text-4xl font-black font-heading text-slate-200 group-hover:text-amber-500/30 transition-colors">
              {{ card.number }}
            </span>
            <div class="w-12 h-12 rounded-xl bg-amber-50 group-hover:bg-amber-500 text-amber-600 group-hover:text-slate-950 flex items-center justify-center transition-all duration-300 shadow-sm">
              <component :is="getIcon(index)" class="w-6 h-6" />
            </div>
          </div>

          <!-- Title -->
          <h3 class="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors mb-3">
            {{ card.title }}
          </h3>

          <!-- Description -->
          <p class="text-sm text-slate-600 leading-relaxed mb-6">
            {{ card.description }}
          </p>
        </div>

        <!-- Score Bar & Percentage -->
        <div class="pt-4 border-t border-slate-100">
          <div class="flex items-center justify-between text-xs font-bold text-slate-700 mb-2">
            <span>Standar Pencapaian</span>
            <span class="text-amber-600 font-extrabold text-sm">{{ card.score }}%</span>
          </div>
          <div class="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
            <div
              class="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full transition-all duration-1000"
              :style="{ width: `${card.score}%` }"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
