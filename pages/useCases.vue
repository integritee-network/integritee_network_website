<template>
  <Hero />
  <List />
  <Socials />
</template>
<script setup lang='ts'>
import Hero from '@/components/UseCases/Hero.vue'
import List from '@/components/UseCases/List.vue'
import Socials from '@/components/Socials/Section.vue'
import { generateSEO } from '~/helpers/generateSEO'

generateSEO({
  title: 'Integritee Network - Use Cases',
  description: 'From DeFi to gaming, a new generation technology serving thousands of possible use cases across multiple industries for the next millions of users.'
})
</script>
