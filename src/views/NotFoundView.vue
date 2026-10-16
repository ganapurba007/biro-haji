<script setup>
import { RouterLink } from 'vue-router'
import { HardHat, Home, Phone, ArrowLeft } from 'lucide-vue-next'
</script>

<template>
  <div class="min-h-[75vh] flex flex-col items-center justify-center py-24 px-4 text-center bg-slate-50 relative overflow-hidden">
    <!-- Ambient Glow -->
    <div class="absolute -top-12 -left-12 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
    <div class="absolute -bottom-12 -right-12 w-64 h-64 bg-slate-900/10 rounded-full blur-3xl pointer-events-none" />

    <div class="max-w-lg mx-auto relative z-10 space-y-6">
      <div class="w-20 h-20 rounded-3xl bg-amber-500/10 text-amber-600 flex items-center justify-center mx-auto border border-amber-500/20 shadow-sm">
        <HardHat class="w-10 h-10" />
      </div>

      <div class="text-7xl sm:text-8xl font-black font-heading text-slate-900 tracking-tighter">
        404
      </div>

      <div class="space-y-2">
        <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Halaman Tidak Ditemukan
        </h1>
        <p class="text-sm sm:text-base text-slate-600 leading-relaxed">
          Tautan yang Anda tuju mungkin sudah kedaluwarsa, dipindahkan, atau alamat URL yang Anda masukkan salah.
        </p>
      </div>

      <div class="pt-4 flex flex-wrap items-center justify-center gap-4">
        <RouterLink
          to="/"
          class="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm shadow-md hover:shadow-amber-500/20 transition-all cursor-pointer"
        >
          <Home class="w-4 h-4" />
          <span>Kembali ke Beranda</span>
        </RouterLink>

        <RouterLink
          to="/kontak"
          class="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-semibold text-sm border border-slate-200 shadow-sm transition-colors cursor-pointer"
        >
          <Phone class="w-4 h-4 text-amber-600" />
          <span>Bantuan Kontak</span>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
