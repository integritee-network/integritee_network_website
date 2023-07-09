<template>
  <Hero />
  <Tools />
  <Why />
  <Quick />
  <Socials />
</template>
<script setup lang='ts'>
import Hero from '@/components/Products/Hero.vue'
import Tools from '@/components/Products/Tools.vue'
import Why from '@/components/Products/Why.vue'
import Quick from '@/components/Products/Quick.vue'
import Socials from '@/components/Socials/Section.vue'
import { generateSEO } from '~/helpers/generateSEO'

generateSEO({
  title: 'Integritee Network - Products',
  description: 'Introducing a product suite for developing Web3 projects that are secure and scalable to power the future of the internet and beyond.'
})
</script>
<style lang=""></style>
