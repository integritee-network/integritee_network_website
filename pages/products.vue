<template>
  <Hero />
  <Tools />
  <Why />
  <Quick />
  <Socials />
</template>
<script setup>
import Hero from '@/components/Products/Hero.vue'
import Tools from '@/components/Products/Tools.vue'
import Why from '@/components/Products/Why.vue'
import Quick from '@/components/Products/Quick.vue'
import Socials from '@/components/Socials/Section.vue'
import { useSeoMeta } from '#imports'

useSeoMeta({
  title: 'Integritee Network - Products',
  ogTitle: 'Integritee Network - Products',
  description: 'Introducing a product suite for developing Web3 projects that are secure and scalable to power the future of the internet and beyond.',
  ogDescription: 'Introducing a product suite for developing Web3 projects that are secure and scalable to power the future of the internet and beyond.',
  // ogImage: 'https://example.com/image.png',
  //twitterCard: 'summary_large_image',
})
</script>
<style lang=""></style>
