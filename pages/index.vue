<template>
  <Main />
  <Things />
  <Scalability />
  <Token />
  <Community />
  <News />
  <Socials />
</template>

<script setup lang="ts">
import Main from '@/components/Index/Main.vue'
import Things from '@/components/Index/Things.vue'
import Scalability from '@/components/Index/Scalability.vue'
import Token from '@/components/Index/Token.vue'
import Community from '@/components/Index/Community.vue'
import News from '@/components/Index/News.vue'
import Socials from '@/components/Socials/Section.vue'
import { generateSEO } from '~/helpers/generateSEO'

generateSEO({
  title: 'Integritee Network - Home',
  description: 'Let’s power the future Web3 . The fastest, most scalable and secure Web3 network bringing the vision of a trustless, decentralized future for all.'
})
</script>
