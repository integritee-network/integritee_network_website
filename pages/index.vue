<template>
  <Main />
  <Things />
  <Scalability />
  <Token />
  <Community />
  <News />
  <Socials />
</template>

<script setup>
import Main from '@/components/Index/Main'
import Things from '@/components/Index/Things'
import Scalability from '@/components/Index/Scalability'
import Token from '@/components/Index/Token'
import Community from '@/components/Index/Community'
import News from '@/components/Index/News'
import Socials from '@/components/Socials/Section.vue'
useSeoMeta({
  title: 'Integritee | HomePage',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>
