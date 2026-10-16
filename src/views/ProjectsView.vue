<script setup>
import { ref, computed } from 'vue'
import projectsData from '@/data/projects.json'
import PageHeader from '@/components/ui/PageHeader.vue'
import ProjectCard from '@/components/projects/ProjectCard.vue'
import ProjectFilter from '@/components/projects/ProjectFilter.vue'
import CtaBanner from '@/components/sections/CtaBanner.vue'
import { FolderSearch, Sparkles } from 'lucide-vue-next'

const selectedCategory = ref('Semua')
const categories = ['Semua', 'Umroh Reguler', 'Umroh Plus', 'Haji Khusus', 'Wisata Halal']

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'Semua') {
    return projectsData
  }
  return projectsData.filter(
    (p) => p.category.toLowerCase() === selectedCategory.value.toLowerCase()
  )
})

const handleCategoryChange = (category) => {
  selectedCategory.value = category
}
</script>

<template>
  <div class="space-y-0">
    <!-- Page Header Banner with Breadcrumbs -->
    <PageHeader
      title="Katalog Paket Ibadah"
      subtitle="Pilihan paket ibadah haji khusus, umroh reguler bintang 5, umroh plus mancanegara, dan wisata halal dengan fasilitas terbaik."
      :breadcrumbs="[{ name: 'Katalog Paket Ibadah' }]"
      backgroundImage="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1600&q=80"
    />

    <!-- Main Projects Section -->
    <section class="py-16 sm:py-20 lg:py-24 bg-slate-50 min-h-[600px]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <!-- Category Filter Pills (FR-5.2) -->
        <ProjectFilter
          :categories="categories"
          :selectedCategory="selectedCategory"
          :projects="projectsData"
          @select-category="handleCategoryChange"
        />

        <!-- Results Counter -->
        <div class="flex items-center justify-between text-xs sm:text-sm text-slate-500 border-b border-slate-200 pb-4">
          <div class="flex items-center gap-1.5">
            <Sparkles class="w-4 h-4 text-amber-500" />
            <span>Menampilkan <strong class="text-slate-900">{{ filteredProjects.length }}</strong> dari <strong class="text-slate-900">{{ projectsData.length }}</strong> total proyek</span>
          </div>
          <span class="font-medium text-amber-600">Kategori: {{ selectedCategory }}</span>
        </div>

        <!-- Projects Grid (FR-5.1) -->
        <div 
          v-if="filteredProjects.length > 0"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <ProjectCard
            v-for="project in filteredProjects"
            :key="project.id"
            :project="project"
          />
        </div>

        <!-- Empty State if no project matches -->
        <div 
          v-else
          class="text-center py-20 bg-white rounded-3xl border border-slate-200 shadow-sm max-w-md mx-auto p-8 space-y-4"
        >
          <div class="w-16 h-16 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto">
            <FolderSearch class="w-8 h-8" />
          </div>
          <h3 class="text-lg font-bold text-slate-900">Tidak Ada Proyek Ditemukan</h3>
          <p class="text-sm text-slate-600">
            Belum ada proyek terdaftar untuk kategori <strong>{{ selectedCategory }}</strong>.
          </p>
          <button
            type="button"
            @click="selectedCategory = 'Semua'"
            class="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs shadow transition-colors cursor-pointer"
          >
            Tampilkan Semua Kategori
          </button>
        </div>

      </div>
    </section>

    <!-- Bottom CTA Banner -->
    <CtaBanner />
  </div>
</template>
