<script setup>
import { RouterLink } from 'vue-router'
import { ArrowRight, PhoneCall, CheckCircle } from 'lucide-vue-next'
import companyData from '@/data/company.json'
</script>

<template>
  <section class="py-16 lg:py-24 bg-slate-950 text-white relative overflow-hidden">
    <!-- Ambient Background Glow -->
    <div class="absolute -top-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
    <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="bg-gradient-to-r from-slate-900 to-slate-800/90 rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-700 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">
        
        <!-- Left Text Content -->
        <div class="max-w-2xl space-y-4 text-center lg:text-left">
          <div class="text-xs font-extrabold uppercase tracking-widest text-amber-400">
            Mulai Kemitraan Bersama Kami
          </div>

          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Siap Membangun Proyek Impian Anda dengan Presisi & Mutu Terbaik?
          </h2>

          <p class="text-sm sm:text-base text-slate-300 leading-relaxed">
            Diskusikan kebutuhan struktur, rancangan anggaran biaya (RAB), dan jadwal pelaksanaan proyek Anda bersama tim ahli konstruksi kami hari ini.
          </p>

          <div class="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-400">
            <div class="flex items-center gap-1.5">
              <CheckCircle class="w-4 h-4 text-amber-400 shrink-0" />
              <span>Konsultasi & Estimasi Gratis</span>
            </div>
            <div class="flex items-center gap-1.5">
              <CheckCircle class="w-4 h-4 text-amber-400 shrink-0" />
              <span>Supervisi K3 & ISO Certified</span>
            </div>
          </div>
        </div>

        <!-- Right Action Buttons -->
        <div class="flex flex-col sm:flex-row lg:flex-col gap-4 w-full sm:w-auto shrink-0">
          <RouterLink
            to="/kontak"
            class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-base shadow-lg hover:shadow-amber-500/25 hover:-translate-y-0.5 transition-all duration-200 text-center"
          >
            <span>Konsultasi Proyek Sekarang</span>
            <ArrowRight class="w-5 h-5" />
          </RouterLink>

          <a
            :href="`tel:${companyData.contact.phone.replace(/[^0-9+]/g, '')}`"
            class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-600 hover:border-slate-500 transition-colors text-center"
          >
            <PhoneCall class="w-4 h-4 text-amber-400" />
            <span>{{ companyData.contact.phone }}</span>
          </a>
        </div>

      </div>
    </div>
  </section>
</template>
