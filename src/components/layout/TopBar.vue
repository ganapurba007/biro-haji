<script setup>
import { Phone, Mail, Clock } from 'lucide-vue-next'
import companyData from '@/data/company.json'
</script>

<template>
  <div class="hidden lg:block bg-slate-900 text-slate-300 text-xs py-2 border-b border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      <!-- Left side: Phone & Email -->
      <div class="flex items-center space-x-6">
        <a 
          :href="`tel:${companyData.contact.phone.replace(/[^0-9+]/g, '')}`" 
          class="flex items-center gap-2 hover:text-amber-400 transition-colors"
        >
          <Phone class="w-3.5 h-3.5 text-amber-500" />
          <span>{{ companyData.contact.phone }}</span>
        </a>
        <a 
          :href="`mailto:${companyData.contact.email}`" 
          class="flex items-center gap-2 hover:text-amber-400 transition-colors"
        >
          <Mail class="w-3.5 h-3.5 text-amber-500" />
          <span>{{ companyData.contact.email }}</span>
        </a>
      </div>

      <!-- Right side: Working Hours & Toll Free -->
      <div class="flex items-center space-x-6">
        <div class="flex items-center gap-2 text-slate-400">
          <Clock class="w-3.5 h-3.5 text-amber-500" />
          <span>{{ companyData.workingHours }}</span>
        </div>
        <div class="bg-slate-800 px-2.5 py-0.5 rounded text-amber-400 font-medium">
          Bebas Pulsa: {{ companyData.contact.tollFree }}
        </div>
      </div>
    </div>
  </div>
</template>
