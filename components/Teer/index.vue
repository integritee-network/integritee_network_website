<template>
  <div class="teer">
    <Desc>
      <template #title>
        TEER, a token with <span>utility</span> and long-term <span class="text-gradient_purple-blue">value</span>
      </template>
      <template #text>
        Our token empowers utility, governance and value at the same time, making it a valuable asset
      </template>
      <template #button>
        <a :href="TEER_TOKEN_LINK" class="btn btn_gradient desc__button" target="_blank"> Learn more</a>
      </template>
    </Desc>
    <HowItWorks :items='items' />
    <Questions />
    <Socials />
  </div>
</template>

<script setup lang="ts">
import Desc from "@/components/Desc";
import HowItWorks from "@/components/Teer/HowItWorks.vue";
import Questions from "@/components/Teer/Questions.vue";
import Socials from "@/components/Socials/Section.vue";
import { TEER_TOKEN_LINK } from '@/configs/app.config'
import { ITechnology } from "~/types";

const items: ITechnology[] = [
  {
    title: 'TEER, a Substrate native\ntoken',
    text: 'The TEER token is the fuel driving the Integritee platform — a common token across both our Kusama and Polkadot parachains. The token is designed in such a way that it has an intrinsic value that increases with adoption',
    img: '/img/teer/substrate.svg',
  },
  {
    title: 'Governance\nby TEER holders keeps\nthe network thriving\nand secured',
    text: 'TEER holders are the heart of our network, as they decide on how the network is governed and moving forward. Every TEER holder is an equal active participating member with a voice and responsible to ensure the healthiness of the ecosystem',
    img: '/img/teer/governance.svg',
  },
  {
    title: 'Keeping a healthy\nbalance through\nthe network Treasury',
    text: 'Fees are collected in an on-chain treasury. Treasury funds are used for ongoing maintenance and software, as well as ecosystemdevelopment and community activity rewards missing full stop',
    img: '/img/teer/treasury.svg',
  },
]
</script>
<style lang="scss" scoped>
.teer {
  position: relative;
}
</style>
