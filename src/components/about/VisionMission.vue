<script setup>
import { Target, Compass, CheckCircle2, ShieldAlert } from 'lucide-vue-next'
import companyData from '@/data/company.json'
import SectionTitle from '@/components/ui/SectionTitle.vue'
</script>

<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <SectionTitle
        badge="Fondasi Nilai & Komitmen"
        title="Visi, Misi, dan Integritas Membangun Nusantara"
        description="Prinsip dasar yang memandu setiap rekayasa teknis, tata kelola proyek, dan keselamatan tenaga kerja kami di lapangan."
        align="center"
      />

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
        
        <!-- Visi Box (lg:col-span-5) -->
        <div class="lg:col-span-5 bg-gradient-to-br from-slate-950 to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-800 flex flex-col justify-between relative overflow-hidden">
          <!-- Background Glow -->
          <div class="absolute -top-12 -right-12 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl" />

          <div>
            <div class="w-14 h-14 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold mb-8 shadow-md">
              <Compass class="w-7 h-7" />
            </div>

            <span class="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-2">Visi Perusahaan</span>
            <h3 class="text-2xl font-extrabold text-white leading-snug mb-6">
              {{ companyData.vision }}
            </h3>
          </div>

          <div class="pt-6 border-t border-slate-800 text-xs text-slate-400 flex items-center gap-2">
            <span class="w-2 h-2 rounded-sm bg-emerald-400 shrink-0" />
            <span>Terus Berinovasi Menuju Konstruksi Berkelanjutan</span>
          </div>
        </div>

        <!-- Misi Box (lg:col-span-7) -->
        <div class="lg:col-span-7 bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-md flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                <Target class="w-6 h-6" />
              </div>
              <div>
                <span class="text-xs font-bold uppercase tracking-widest text-amber-600 block">Misi Strategis</span>
                <h3 class="text-xl font-bold text-slate-900">4 Pilar Dedikasi Kinerja Kami</h3>
              </div>
            </div>

            <!-- Mission Points -->
            <div class="space-y-4">
              <div
                v-for="(missionText, idx) in companyData.mission"
                :key="idx"
                class="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200/60 shadow-sm hover:border-amber-400 transition-colors"
              >
                <span class="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 font-black text-xs flex items-center justify-center shrink-0 mt-0.5 font-heading">
                  0{{ idx + 1 }}
                </span>
                <p class="text-sm font-medium text-slate-700 leading-relaxed">
                  {{ missionText }}
                </p>
              </div>
            </div>
          </div>

          <div class="mt-6 pt-4 border-t border-slate-200 text-xs text-slate-500 flex items-center gap-2">
            <CheckCircle2 class="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Kepatuhan Total Terhadap Tata Kelola Good Corporate Governance (GCG)</span>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
