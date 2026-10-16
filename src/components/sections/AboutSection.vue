<script setup>
import { RouterLink } from 'vue-router'
import { CheckCircle2, ArrowRight, Compass } from 'lucide-vue-next'
import { useAgency } from '@/composables/useAgency'

const { agency, agencyLink } = useAgency()

const highlights = [
  'Kepastian 5 Pasti Umroh Kemenag RI',
  'Bimbingan Ibadah Sesuai Al-Qur\'an & Sunnah',
  'Hotel Bintang 5 Ring 1 Pelataran Masjid',
  'Penerbangan Direct Flight Tanpa Transit'
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
              src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1000&q=80"
              :alt="`Pelayanan Ibadah ${agency.name}`"
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
              11+
            </div>
            <div>
              <div class="text-sm font-bold text-white">Tahun Khidmah</div>
              <div class="text-xs text-slate-400">Melayani tamu Allah menuju ibadah mabrur</div>
            </div>
          </div>
        </div>

        <!-- Right Column: Content (lg:col-span-6) -->
        <div class="lg:col-span-6 space-y-6">
          <!-- Section Eyebrow -->
          <div class="text-xs font-extrabold uppercase tracking-widest text-amber-600">
            Tentang Biro Ibadah
          </div>

          <!-- Main Title -->
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Melayani Sepenuh Hati, Mengutamakan Ketenangan & Kekhusyukan Ibadah
          </h2>

          <!-- Description -->
          <p class="text-base text-slate-600 leading-relaxed">
            {{ agency.about }}
          </p>

          <p class="text-sm font-medium text-slate-700 italic border-l-4 border-amber-500 pl-4 py-1">
            "{{ agency.tagline }}"
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
              :to="agencyLink('/tentang')"
              class="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-bold text-sm shadow-md hover:shadow transition-all duration-200"
            >
              <span>Profil Lengkap</span>
              <ArrowRight class="w-4 h-4 text-amber-400" />
            </RouterLink>

            <a
              href="#alur-kerja"
              class="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-semibold text-sm border border-slate-200 shadow-sm transition-colors duration-200"
            >
              <Compass class="w-4 h-4 text-amber-600" />
              <span>Alur Pendaftaran</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
