<script setup>
import { ref } from 'vue'
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-vue-next'
import testimonialsData from '@/data/testimonials.json'
import SectionTitle from '@/components/ui/SectionTitle.vue'

const testimonials = testimonialsData
const activeIndex = ref(0)

const nextTestimonial = () => {
  activeIndex.value = (activeIndex.value + 1) % testimonials.length
}

const prevTestimonial = () => {
  activeIndex.value = (activeIndex.value - 1 + testimonials.length) % testimonials.length
}
</script>

<template>
  <section class="py-20 lg:py-28 bg-white border-y border-slate-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <SectionTitle
        badge="Pengalaman Jamaah"
        title="Kenyamanan & Kekhusyukan Ibadah Jamaah Kami"
        description="Ungkapan kebahagiaan dan kesan mendalam dari para jamaah yang telah menunaikan ibadah umroh dan haji bersama kami."
        align="center"
      />

      <!-- Testimonials Grid (Desktop) and Interactive Carousel on Tablet/Mobile -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        <div
          v-for="(item, idx) in testimonials"
          :key="item.id"
          class="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200/80 hover:border-amber-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
        >
          <div>
            <!-- Star Ratings & Quote Icon -->
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-1 text-amber-500">
                <Star v-for="i in 5" :key="i" class="w-4 h-4 fill-amber-400 text-amber-400" />
              </div>
              <Quote class="w-8 h-8 text-slate-300 group-hover:text-amber-500/40 transition-colors" />
            </div>

            <!-- Quote Text -->
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
              "{{ item.quote }}"
            </p>
          </div>

          <!-- Client Profile -->
          <div class="pt-4 border-t border-slate-200 flex items-center gap-3.5">
            <img
              :src="item.avatar"
              :alt="item.name"
              class="w-12 h-12 rounded-full object-cover border-2 border-amber-400 shadow-sm shrink-0"
              loading="lazy"
            />
            <div class="min-w-0">
              <h4 class="text-sm font-bold text-slate-900 group-hover:text-amber-600 transition-colors truncate">
                {{ item.name }}
              </h4>
              <p class="text-[11px] text-slate-500 leading-snug line-clamp-2">
                {{ item.role }}
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
