<script setup>
import { RouterView } from 'vue-router'
import TopBar from '@/components/layout/TopBar.vue'
import Navbar from '@/components/layout/Navbar.vue'
import Footer from '@/components/layout/Footer.vue'
import ScrollToTop from '@/components/layout/ScrollToTop.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-slate-50 text-slate-800 selection:bg-amber-500 selection:text-slate-950">
    <!-- Top Contact Bar (Desktop) -->
    <TopBar />

    <!-- Sticky Main Navigation -->
    <Navbar />

    <!-- Main Content Area -->
    <main class="flex-grow">
      <RouterView />
    </main>

    <!-- Global 3-Column Footer -->
    <Footer />

    <!-- Floating Scroll To Top Button -->
    <ScrollToTop />
  </div>
</template>
