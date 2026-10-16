<script setup>
import HeroSlider from '@/components/sections/HeroSlider.vue'
import ScoreCards from '@/components/sections/ScoreCards.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import WorkProcessSection from '@/components/sections/WorkProcessSection.vue'
import StatsStrip from '@/components/sections/StatsStrip.vue'
import FeaturedProjects from '@/components/sections/FeaturedProjects.vue'
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue'
import CtaBanner from '@/components/sections/CtaBanner.vue'
</script>

<template>
  <div class="space-y-0">
    <!-- FR-2.1: Hero Slider 3 slide with autoplay & controls -->
    <HeroSlider />

    <!-- FR-2.2: 3 Score Cards overlapping under hero -->
    <ScoreCards />

    <!-- FR-2.3: About Section with dual CTAs & company highlights -->
    <AboutSection />

    <!-- FR-2.4: 4 Services Cards with icons & imagery -->
    <ServicesSection />

    <!-- FR-2.5: 4-Step Work Process with anchor id "alur-kerja" -->
    <WorkProcessSection />

    <!-- FR-2.6: Animated Stats Counter & Toll-Free CTA Strip -->
    <StatsStrip />

    <!-- FR-2.7: Featured Projects Grid (3 items) with detail links -->
    <FeaturedProjects />

    <!-- FR-2.8: Client Testimonials with stars & avatars -->
    <TestimonialsSection />

    <!-- FR-2.9: Bottom CTA Banner to /kontak -->
    <CtaBanner />
  </div>
</template>
