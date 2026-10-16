<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck } from 'lucide-vue-next'
import homeData from '@/data/home.json'

const slides = homeData.heroSlides
const currentSlide = ref(0)
const isPaused = ref(false)
let timer = null

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
}

const goToSlide = (index) => {
  currentSlide.value = index
}

const startAutoplay = () => {
  stopAutoplay()
  timer = setInterval(() => {
    if (!isPaused.value) {
      nextSlide()
    }
  }, 6000)
}

const stopAutoplay = () => {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

const handleMouseEnter = () => {
  isPaused.value = true
}

const handleMouseLeave = () => {
  isPaused.value = false
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<template>
  <section 
    class="relative w-full h-[580px] sm:h-[640px] lg:h-[720px] bg-slate-950 overflow-hidden select-none"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @focusin="handleMouseEnter"
    @focusout="handleMouseLeave"
    aria-label="Hero Slider PT Adhirajasa Karya Mandiri"
  >
    <!-- Slides Loop -->
    <div 
      v-for="(slide, index) in slides" 
      :key="slide.id"
      class="absolute inset-0 transition-opacity duration-1000 ease-in-out"
      :class="[index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none']"
      :aria-hidden="index !== currentSlide"
    >
      <!-- Background Image with Dark & Gradient Overlay -->
      <img 
        :src="slide.image" 
        :alt="slide.headline"
        class="absolute inset-0 w-full h-full object-cover object-center transform scale-105 transition-transform duration-[6000ms] ease-out"
        :class="[index === currentSlide ? 'scale-100' : 'scale-110']"
        :loading="index === 0 ? 'eager' : 'lazy'"
      />
      <!-- Overlays for Contrast and Rich Aesthetics -->
      <div class="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-900/40" />
      <div class="absolute inset-0 bg-radial-at-c from-transparent via-slate-950/40 to-slate-950/80" />

      <!-- Slide Content -->
      <div class="relative max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div class="max-w-3xl space-y-6">
          <!-- Top Eyebrow -->
          <div class="text-amber-400 text-xs sm:text-sm font-extrabold uppercase tracking-widest">
            Kontraktor Terpercaya & Bersertifikasi Nasional
          </div>

          <!-- Headline -->
          <h1 class="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            {{ slide.headline }}
          </h1>

          <!-- Subheadline -->
          <p class="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
            {{ slide.subheadline }}
          </p>

          <!-- Action Buttons -->
          <div class="pt-2 flex flex-wrap items-center gap-4">
            <RouterLink
              :to="slide.ctaLink"
              class="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm sm:text-base shadow-lg hover:shadow-amber-500/20 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>{{ slide.ctaLabel }}</span>
              <ArrowRight class="w-5 h-5" />
            </RouterLink>

            <RouterLink
              to="/tentang"
              class="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-200"
            >
              <span>Tentang Perusahaan</span>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Arrows -->
    <div class="absolute inset-y-0 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
      <button
        type="button"
        @click="prevSlide"
        class="p-3 rounded-full bg-slate-900/60 hover:bg-amber-500 text-white hover:text-slate-950 backdrop-blur-md border border-white/10 transition-all duration-200 pointer-events-auto cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-400"
        aria-label="Slide sebelumnya"
      >
        <ChevronLeft class="w-6 h-6" />
      </button>
      <button
        type="button"
        @click="nextSlide"
        class="p-3 rounded-full bg-slate-900/60 hover:bg-amber-500 text-white hover:text-slate-950 backdrop-blur-md border border-white/10 transition-all duration-200 pointer-events-auto cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-400"
        aria-label="Slide berikutnya"
      >
        <ChevronRight class="w-6 h-6" />
      </button>
    </div>

    <!-- Bottom Indicators / Dots -->
    <div class="absolute bottom-8 left-0 right-0 z-20 flex items-center justify-center gap-3">
      <button
        v-for="(_, index) in slides"
        :key="index"
        type="button"
        @click="goToSlide(index)"
        class="h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer"
        :class="[
          index === currentSlide 
            ? 'w-10 bg-amber-500' 
            : 'w-2.5 bg-white/40 hover:bg-white/70'
        ]"
        :aria-label="`Pindah ke slide ${index + 1}`"
      />
    </div>
  </section>
</template>
