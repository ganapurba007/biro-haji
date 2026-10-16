<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-vue-next'
import { useAgency } from '@/composables/useAgency'
import homeData from '@/data/home.json'

const { agency, agencyLink } = useAgency()
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
    class="relative w-full min-h-[640px] sm:min-h-[700px] lg:min-h-[760px] h-[80vh] bg-slate-950 overflow-hidden select-none"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @focusin="handleMouseEnter"
    @focusout="handleMouseLeave"
    :aria-label="`Hero Slider ${agency.name}`"
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
      <div class="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-900/50" />
      <div class="absolute inset-0 bg-radial-at-c from-transparent via-slate-950/40 to-slate-950/80" />

      <!-- Slide Content -->
      <div class="relative max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center pb-24 sm:pb-32 lg:pb-36">
        <div class="max-w-3xl space-y-6">
          <!-- Top Eyebrow Pill -->
          <div class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 border border-amber-400/40 backdrop-blur-md w-fit shadow-md">
            <span class="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
            <span class="text-amber-400 text-xs sm:text-sm font-black tracking-widest uppercase">
              {{ agency.tagline }}
            </span>
          </div>

          <!-- Headline -->
          <h1 class="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] drop-shadow-md">
            {{ slide.headline }}
          </h1>

          <!-- Subheadline -->
          <p class="text-base sm:text-lg lg:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl drop-shadow">
            {{ slide.subheadline }}
          </p>

          <!-- Action Buttons -->
          <div class="pt-3 flex flex-wrap items-center gap-4">
            <RouterLink
              :to="agencyLink(slide.ctaLink)"
              class="inline-flex items-center gap-2.5 px-7 sm:px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm sm:text-base shadow-xl hover:shadow-amber-500/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>{{ slide.ctaLabel }}</span>
              <ArrowRight class="w-5 h-5 text-slate-950" />
            </RouterLink>

            <RouterLink
              :to="agencyLink('/tentang')"
              class="inline-flex items-center gap-2 px-7 sm:px-8 py-4 rounded-xl bg-slate-900/70 hover:bg-slate-900/90 text-white font-bold text-sm sm:text-base backdrop-blur-md border border-white/30 hover:border-white/60 transition-all duration-200 shadow-lg"
            >
              <span>Tentang Biro</span>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Controls (Desktop Panah Kiri & Kanan) -->
    <div class="absolute z-20 bottom-8 right-8 sm:bottom-12 sm:right-12 flex items-center gap-3">
      <button
        type="button"
        @click="prevSlide"
        class="w-12 h-12 rounded-xl bg-white/10 hover:bg-amber-500 hover:text-slate-950 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 shadow-lg cursor-pointer"
        aria-label="Slide sebelumnya"
      >
        <ChevronLeft class="w-6 h-6" />
      </button>

      <button
        type="button"
        @click="nextSlide"
        class="w-12 h-12 rounded-xl bg-white/10 hover:bg-amber-500 hover:text-slate-950 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 shadow-lg cursor-pointer"
        aria-label="Slide berikutnya"
      >
        <ChevronRight class="w-6 h-6" />
      </button>
    </div>

    <!-- Slide Indicators / Dots (Bottom Center) -->
    <div 
      class="absolute z-20 bottom-8 sm:bottom-12 left-4 sm:left-8 lg:left-12 flex items-center gap-2"
      role="tablist"
      aria-label="Indikator Slide"
    >
      <button
        v-for="(slide, index) in slides"
        :key="slide.id"
        type="button"
        @click="goToSlide(index)"
        role="tab"
        :aria-selected="index === currentSlide"
        :aria-label="`Lompat ke slide ${index + 1}`"
        class="h-2 rounded-full transition-all duration-300 cursor-pointer"
        :class="[
          index === currentSlide 
            ? 'w-8 bg-amber-500' 
            : 'w-2.5 bg-white/40 hover:bg-white/70'
        ]"
      />
    </div>
  </section>
</template>
