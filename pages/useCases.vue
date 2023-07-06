<template>
  <Hero />
  <List />
  <Socials />
</template>
<script setup>
import Hero from '@/components/UseCases/Hero.vue'
import List from '@/components/UseCases/List.vue'
import Socials from '@/components/Socials/Section.vue'
import { useSeoMeta } from '#imports'

useSeoMeta({
  title: 'Integritee Network - Use Cases',
  ogTitle: 'Integritee Network - Use Cases',
  description: 'From DeFi to gaming, a new generation technology serving thousands of possible use cases across multiple industries for the next millions of users.',
  ogDescription: 'From DeFi to gaming, a new generation technology serving thousands of possible use cases across multiple industries for the next millions of users.',
  // ogImage: 'https://example.com/image.png',
  //twitterCard: 'summary_large_image',
})
</script>
