<script setup>
import { RouterLink } from 'vue-router'
import { CheckCircle2, ArrowRight, HardHat, Compass } from 'lucide-vue-next'
import companyData from '@/data/company.json'

const highlights = [
  'Penerapan Building Information Modeling (BIM)',
  'Standar Keselamatan Kerja Zero Accident (K3)',
  'Sertifikasi Resmi SBU Kualifikasi Besar & ISO',
  'Jaminan Mutu & Garansi Pemeliharaan Purnajual'
]
</script>

<template>
  <section class="py-20 lg:py-28 bg-slate-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        <!-- Left Column: Visual with Overlapping Badges (lg:col-span-6) -->
        <div class="lg:col-span-6 relative">
          <!-- Main Image -->
          <div class="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"
              alt="Tim Konstruksi PT Adhirajasa Karya Mandiri"
              class="w-full h-[400px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>

          <!-- Decorative Accent Background Element -->
          <div class="absolute -bottom-6 -left-6 w-72 h-72 bg-amber-400/20 rounded-3xl -z-0 blur-xl" />
          <div class="absolute -top-6 -right-6 w-72 h-72 bg-slate-800/10 rounded-3xl -z-0 blur-xl" />

          <!-- Floating Experience Card -->
          <div class="absolute -bottom-8 right-4 sm:-right-6 z-20 bg-slate-950 text-white p-6 rounded-2xl shadow-2xl border border-slate-800 flex items-center gap-4 max-w-[260px]">
            <div class="w-14 h-14 rounded-xl bg-amber-500 flex items-center justify-center text-slate-950 font-black text-2xl shrink-0">
              14+
            </div>
            <div>
              <div class="text-sm font-bold text-white">Tahun Pengalaman</div>
              <div class="text-xs text-slate-400">Membangun proyek prestisius di Indonesia</div>
            </div>
          </div>
        </div>

        <!-- Right Column: Content (lg:col-span-6) -->
        <div class="lg:col-span-6 space-y-6">
          <!-- Section Eyebrow -->
          <div class="text-xs font-extrabold uppercase tracking-widest text-amber-600">
            Tentang Perusahaan
          </div>

          <!-- Main Title -->
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Komitmen Kami Membangun Standar Kualitas Tanpa Kompromi
          </h2>

          <!-- Description -->
          <p class="text-base text-slate-600 leading-relaxed">
            {{ companyData.about }}
          </p>

          <p class="text-sm font-medium text-slate-700 italic border-l-4 border-amber-500 pl-4 py-1">
            "{{ companyData.tagline }}"
          </p>

          <!-- Highlights List -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div 
              v-for="(item, i) in highlights" 
              :key="i"
              class="flex items-start gap-2.5 text-sm font-semibold text-slate-800"
            >
              <CheckCircle2 class="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <span>{{ item }}</span>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="pt-6 flex flex-wrap items-center gap-4">
            <RouterLink
              to="/tentang"
              class="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-bold text-sm shadow-md hover:shadow transition-all duration-200"
            >
              <span>Profil Perusahaan</span>
              <ArrowRight class="w-4 h-4 text-amber-400" />
            </RouterLink>

            <a
              href="#alur-kerja"
              class="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-semibold text-sm border border-slate-200 shadow-sm transition-colors duration-200"
            >
              <Compass class="w-4 h-4 text-amber-600" />
              <span>Cara Kami Bekerja</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
