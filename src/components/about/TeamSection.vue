<script setup>
import { Linkedin, Mail } from 'lucide-vue-next'
import teamData from '@/data/team.json'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import { useAgency } from '@/composables/useAgency'

const { agency } = useAgency()
const team = teamData
</script>

<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <SectionTitle
        badge="Pembimbing Ibadah & Manajemen"
        title="Asatidz Pembimbing & Manajemen Amanah"
        description="Dibimbing langsung oleh para asatidz lulusan universitas Islam terkemuka bersertifikat pembimbing ibadah haji Kemenag RI serta jajaran manajemen profesional."
        align="center"
      />

      <!-- Team Members Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        <div
          v-for="member in team"
          :key="member.id"
          class="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200/80 hover:border-amber-400 hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between"
        >
          <div>
            <!-- Photo Frame -->
            <div class="relative h-72 overflow-hidden bg-slate-200">
              <img
                :src="member.photo"
                :alt="member.name"
                class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
            </div>

            <!-- Profile Info -->
            <div class="p-6">
              <h3 class="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors mb-1">
                {{ member.name }}
              </h3>
              <p class="text-xs font-semibold text-amber-600 uppercase tracking-wide">
                {{ member.position }}
              </p>
            </div>
          </div>

          <!-- Bottom Decorative Footer -->
          <div class="px-6 pb-6 pt-2 border-t border-slate-200/60 flex items-center justify-between text-slate-400">
            <span class="text-[11px] font-medium text-slate-500">{{ agency.name }}</span>
            <div class="flex items-center gap-2 text-slate-600 hover:text-amber-600 transition-colors">
              <Linkedin class="w-4 h-4 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
