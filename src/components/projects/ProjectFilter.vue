<script setup>
import { computed } from 'vue'

const props = defineProps({
  categories: {
    type: Array,
    required: true
  },
  selectedCategory: {
    type: String,
    default: 'Semua'
  },
  projects: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['select-category'])

const getCategoryCount = (cat) => {
  if (cat === 'Semua') {
    return props.projects.length
  }
  return props.projects.filter(p => p.category.toLowerCase() === cat.toLowerCase()).length
}
</script>

<template>
  <div class="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 py-4" role="tablist" aria-label="Filter Kategori Proyek">
    <button
      v-for="category in categories"
      :key="category"
      type="button"
      @click="emit('select-category', category)"
      role="tab"
      :aria-selected="selectedCategory === category"
      class="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-400 select-none"
      :class="[
        selectedCategory === category
          ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 scale-105'
          : 'bg-white text-slate-600 hover:text-slate-950 hover:bg-slate-100 border border-slate-200/80 shadow-sm'
      ]"
    >
      <span>{{ category }}</span>
      <span
        class="text-[11px] px-2 py-0.5 rounded-md font-extrabold"
        :class="[
          selectedCategory === category
            ? 'bg-slate-950 text-amber-400'
            : 'bg-slate-100 text-slate-600'
        ]"
      >
        {{ getCategoryCount(category) }}
      </span>
    </button>
  </div>
</template>
