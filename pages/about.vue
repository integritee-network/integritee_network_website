<template>
    <Hero />
    <Vision />
    <Roadmap />
    <Join />
    <Socials />
</template>
<script setup lang='ts'>
import Hero from '@/components/About/Hero.vue'
import Join from '@/components/About/Join.vue'
import Roadmap from '@/components/About/Roadmap.vue'
import Vision from '@/components/About/Vision.vue'
import Socials from '@/components/Socials/Section.vue'
import { generateSEO } from '~/helpers/generateSEO'

generateSEO({
  title: 'Integritee Network - About',
  description: 'We’re blockchain veterans who have been developing decentralized solutions for tangible, real-world use cases for over half a decade.'
})
</script>
