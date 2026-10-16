<script setup>
import { ShieldCheck, Award, FileCheck, CheckCircle } from 'lucide-vue-next'
import companyData from '@/data/company.json'
import SectionTitle from '@/components/ui/SectionTitle.vue'

const certifications = companyData.certifications
</script>

<template>
  <section class="py-20 bg-slate-50 border-t border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <SectionTitle
        badge="Legalitas & Sertifikasi Resmi"
        title="Standar Kepatuhan Regulasi & Manajemen Mutu"
        description="Seluruh operasional rekayasa dan eksekusi konstruksi kami telah terakreditasi dan memiliki izin resmi berskala nasional."
        align="center"
      />

      <!-- Certifications Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        <div
          v-for="(cert, idx) in certifications"
          :key="idx"
          class="bg-white rounded-2xl p-7 border border-slate-200/80 hover:border-amber-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
        >
          <div>
            <!-- Certificate Preview Image -->
            <div class="relative h-32 rounded-xl overflow-hidden mb-5 bg-slate-100 border border-slate-100">
              <img
                :src="cert.image"
                :alt="cert.name"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
              <div class="absolute bottom-2.5 left-2.5 w-8 h-8 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-bold shadow">
                <ShieldCheck class="w-4 h-4" />
              </div>
            </div>

            <h3 class="text-base font-bold text-slate-900 group-hover:text-amber-600 transition-colors mb-2 leading-snug">
              {{ cert.name }}
            </h3>

            <p class="text-xs text-slate-500 font-medium">
              Penerbit: <span class="text-slate-700 font-semibold">{{ cert.issuer }}</span>
            </p>
          </div>

          <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-emerald-600 font-bold">
            <span class="flex items-center gap-1.5">
              <CheckCircle class="w-4 h-4 text-emerald-500" />
              Status Aktif
            </span>
            <span class="text-slate-400 font-mono text-[10px]">VERIFIED</span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
