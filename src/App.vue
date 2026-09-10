<script setup>
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import PlatformsSection from './components/PlatformsSection.vue'
import ConnectivitySection from './components/ConnectivitySection.vue'
import SystemsSection from './components/SystemsSection.vue'
import PartnersSection from './components/PartnersSection.vue'
import CareersSection from './components/CareersSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <a
    href="#main"
    class="fixed left-4 -top-12 z-[200] rounded-md bg-blue px-4 py-3 text-[14px] font-medium text-white transition-[top] focus:top-4"
  >Skip to content</a>

  <SiteHeader />

  <main id="main">
    <HeroSection />
    <PlatformsSection />
    <ConnectivitySection />
    <SystemsSection />
    <PartnersSection />
    <CareersSection />
    <ContactSection />
  </main>

  <SiteFooter />
</template>
