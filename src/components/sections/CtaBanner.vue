<script setup>
import { RouterLink } from 'vue-router'
import { ArrowRight, PhoneCall, CheckCircle } from 'lucide-vue-next'
import { useAgency } from '@/composables/useAgency'

const { agency, agencyLink } = useAgency()
</script>

<template>
  <section class="py-16 lg:py-24 bg-gradient-to-b from-slate-900 to-emerald-950 text-white relative overflow-hidden">
    <!-- Ambient Background Glow -->
    <div class="absolute -top-24 -left-24 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />
    <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="bg-gradient-to-r from-emerald-900/90 via-emerald-950/90 to-slate-900/95 rounded-3xl p-8 sm:p-12 lg:p-16 border border-emerald-700/50 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">
        
        <!-- Left Text Content -->
        <div class="max-w-2xl space-y-4 text-center lg:text-left">
          <div class="text-xs font-extrabold uppercase tracking-widest text-amber-400">
            Panggilan Suci Menuju Baitullah
          </div>

          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Siapkan Niat & Ibadah Anda Menuju Tanah Suci Bersama {{ agency.name }}
          </h2>

          <p class="text-sm sm:text-base text-slate-200 leading-relaxed">
            Konsultasikan jadwal keberangkatan, pilihan hotel pelataran bintang 5, serta rencana ibadah umroh dan haji khusus keluarga Anda bersama konsultan kami hari ini.
          </p>

          <div class="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-emerald-200/90">
            <div class="flex items-center gap-1.5">
              <CheckCircle class="w-4 h-4 text-amber-400 shrink-0" />
              <span>Kepastian 5 Pasti Umroh Kemenag</span>
            </div>
            <div class="flex items-center gap-1.5">
              <CheckCircle class="w-4 h-4 text-amber-400 shrink-0" />
              <span>Bimbingan Ibadah Sesuai Sunnah</span>
            </div>
          </div>
        </div>

        <!-- Right Action Buttons -->
        <div class="flex flex-col sm:flex-row lg:flex-col gap-4 w-full sm:w-auto shrink-0">
          <RouterLink
            :to="agencyLink('/kontak')"
            class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-base shadow-lg hover:shadow-amber-500/25 hover:-translate-y-0.5 transition-all duration-200 text-center"
          >
            <span>Daftar & Konsultasi Sekarang</span>
            <ArrowRight class="w-5 h-5" />
          </RouterLink>

          <a
            :href="`tel:${agency.contact.phone.replace(/[^0-9+]/g, '')}`"
            class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 hover:border-white/40 transition-colors text-center"
          >
            <PhoneCall class="w-4 h-4 text-amber-400" />
            <span>{{ agency.contact.phone }}</span>
          </a>
        </div>

      </div>
    </div>
  </section>
</template>
