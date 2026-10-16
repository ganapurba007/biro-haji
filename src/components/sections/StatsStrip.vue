<script setup>
import { ref, onMounted } from 'vue'
import { PhoneCall, CheckCircle } from 'lucide-vue-next'
import homeData from '@/data/home.json'
import companyData from '@/data/company.json'

const stats = homeData.stats
const sectionRef = ref(null)
const animatedValues = ref(stats.map(() => 0))
const hasAnimated = ref(false)

const animateCounter = () => {
  if (hasAnimated.value) return
  hasAnimated.value = true

  const duration = 2000 // 2 seconds
  const steps = 60
  const intervalTime = duration / steps

  stats.forEach((item, index) => {
    const target = item.value
    let current = 0
    const stepIncrement = target / steps

    const timer = setInterval(() => {
      current += stepIncrement
      if (current >= target) {
        animatedValues.value[index] = target
        clearInterval(timer)
      } else {
        animatedValues.value[index] = Math.floor(current)
      }
    }, intervalTime)
  })
}

onMounted(() => {
  if ('IntersectionObserver' in window && sectionRef.value) {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateCounter()
        observer.disconnect()
      }
    }, { threshold: 0.3 })

    observer.observe(sectionRef.value)
  } else {
    // Fallback if IntersectionObserver not available (e.g. unit test environment)
    stats.forEach((item, index) => {
      animatedValues.value[index] = item.value
    })
  }
})
</script>

<template>
  <section 
    ref="sectionRef"
    class="bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600 text-slate-950 py-12 lg:py-16 shadow-inner relative overflow-hidden"
  >
    <!-- Background Texture/Aesthetic Lines -->
    <div class="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        <!-- Stats Counter (lg:col-span-8) -->
        <div class="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div 
            v-for="(item, index) in stats" 
            :key="item.label"
            class="p-4 rounded-xl bg-slate-950/5 backdrop-blur-sm border border-slate-950/10"
          >
            <div class="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight mb-1 text-slate-950">
              <span>{{ animatedValues[index] }}</span>
              <span>{{ item.suffix }}</span>
            </div>
            <div class="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider">
              {{ item.label }}
            </div>
          </div>
        </div>

        <!-- Toll Free Call CTA (lg:col-span-4) -->
        <div class="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-center lg:items-start justify-center gap-4 bg-slate-950 text-white p-6 sm:p-7 rounded-2xl shadow-xl border border-slate-800">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold shrink-0">
              <PhoneCall class="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <span class="text-xs text-amber-400 font-bold uppercase tracking-wider block">Layanan Bebas Pulsa</span>
              <a 
                :href="`tel:${companyData.contact.tollFree.replace(/[^0-9]/g, '')}`" 
                class="text-lg sm:text-xl font-black text-white hover:text-amber-400 transition-colors"
              >
                {{ companyData.contact.tollFree }}
              </a>
            </div>
          </div>
          <div class="text-xs text-slate-400 flex items-center gap-2">
            <CheckCircle class="w-4 h-4 text-amber-400 shrink-0" />
            <span>Respon Cepat Tim Estimator 24/7</span>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
