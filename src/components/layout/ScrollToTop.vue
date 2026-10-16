<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowUp } from 'lucide-vue-next'

const isVisible = ref(false)

const checkScroll = () => {
  isVisible.value = window.scrollY > 400
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<template>
  <transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0 translate-y-6 scale-75"
    enter-to-class="opacity-100 translate-y-0 scale-100"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0 scale-100"
    leave-to-class="opacity-0 translate-y-6 scale-75"
  >
    <button
      v-if="isVisible"
      type="button"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 z-50 p-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 flex items-center justify-center border border-amber-400/40 cursor-pointer"
      aria-label="Kembali ke atas halaman"
    >
      <ArrowUp class="w-5 h-5 stroke-[2.5]" />
    </button>
  </transition>
</template>
