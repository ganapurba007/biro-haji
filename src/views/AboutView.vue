<script setup>
import PageHeader from '@/components/ui/PageHeader.vue'
import VisionMission from '@/components/about/VisionMission.vue'
import CompanyHistory from '@/components/about/CompanyHistory.vue'
import TeamSection from '@/components/about/TeamSection.vue'
import CertificationsSection from '@/components/about/CertificationsSection.vue'
import CtaBanner from '@/components/sections/CtaBanner.vue'
</script>

<template>
  <div class="space-y-0">
    <!-- Page Header Banner with Breadcrumbs -->
    <PageHeader
      title="Tentang Kami"
      subtitle="Profil komprehensif, visi misi, sejarah perjalanan, dan jajaran pimpinan PT Adhirajasa Karya Mandiri."
      :breadcrumbs="[{ name: 'Tentang Kami' }]"
      backgroundImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80"
    />

    <!-- FR-3.1: Profil Perusahaan, Visi & Misi -->
    <VisionMission />

    <!-- FR-3.2: Timeline Sejarah Perusahaan -->
    <CompanyHistory />

    <!-- FR-3.3: Jajaran Tim Inti Manajemen -->
    <TeamSection />

    <!-- FR-3.4: Legalitas & Sertifikasi (SBU, ISO) -->
    <CertificationsSection />

    <!-- Call to Action Banner -->
    <CtaBanner />
  </div>
</template>
