<script setup>
import { watch, onUnmounted } from 'vue'
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-vue-next'

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'success',
    validator: (v) => ['success', 'error', 'info'].includes(v)
  },
  title: {
    type: String,
    default: ''
  },
  message: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    default: 5000
  }
})

const emit = defineEmits(['close'])
let timer = null

const startTimer = () => {
  clearTimer()
  if (props.duration > 0 && props.show) {
    timer = setTimeout(() => {
      emit('close')
    }, props.duration)
  }
}

const clearTimer = () => {
  if (timer) {
    clearTimeout(timer)
    timer = null
  }
}

watch(() => props.show, (newVal) => {
  if (newVal) {
    startTimer()
  } else {
    clearTimer()
  }
})

onUnmounted(() => {
  clearTimer()
})
</script>

<template>
  <transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:translate-x-4 scale-95"
    enter-to-class="opacity-100 translate-y-0 sm:translate-x-0 scale-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0 sm:translate-x-0 scale-100"
    leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:translate-x-4 scale-95"
  >
    <div
      v-if="show"
      class="fixed bottom-6 right-6 z-50 max-w-md w-full sm:w-auto p-4 rounded-2xl shadow-2xl border flex items-start gap-3.5 backdrop-blur-md"
      :class="[
        type === 'success' ? 'bg-slate-900/95 text-white border-emerald-500/40' :
        type === 'error' ? 'bg-slate-900/95 text-white border-rose-500/40' :
        'bg-slate-900/95 text-white border-amber-500/40'
      ]"
      role="alert"
      aria-live="assertive"
    >
      <!-- Icon Indicator -->
      <div class="shrink-0 mt-0.5">
        <CheckCircle2 v-if="type === 'success'" class="w-6 h-6 text-emerald-400" />
        <AlertCircle v-else-if="type === 'error'" class="w-6 h-6 text-rose-400" />
        <Info v-else class="w-6 h-6 text-amber-400" />
      </div>

      <!-- Message Text -->
      <div class="flex-grow pr-2">
        <h4 v-if="title" class="text-sm font-bold tracking-tight text-white mb-0.5">
          {{ title }}
        </h4>
        <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {{ message }}
        </p>
      </div>

      <!-- Close Button -->
      <button
        type="button"
        @click="emit('close')"
        class="shrink-0 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors focus:outline-none cursor-pointer"
        aria-label="Tutup notifikasi"
      >
        <X class="w-4 h-4" />
      </button>
    </div>
  </transition>
</template>
