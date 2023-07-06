<template>
    <Hero />
    <Vision />
    <Roadmap />
    <Join />
    <Socials />
</template>
<script setup>
import Hero from '@/components/About/Hero.vue'
import Join from '@/components/About/Join.vue'
import Roadmap from '@/components/About/Roadmap.vue'
import Vision from '@/components/About/Vision.vue'
import Socials from '@/components/Socials/Section.vue'
import { useSeoMeta } from '#imports'

useSeoMeta({
  title: 'Integritee Network - About',
  ogTitle: 'Integritee Network - About',
  description: 'We’re blockchain veterans who have been developing decentralized solutions for tangible, real-world use cases for over half a decade.',
  ogDescription: 'We’re blockchain veterans who have been developing decentralized solutions for tangible, real-world use cases for over half a decade.',
  // ogImage: 'https://example.com/image.png',
  //twitterCard: 'summary_large_image',
})
</script>
