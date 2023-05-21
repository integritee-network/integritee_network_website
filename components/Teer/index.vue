<template>
  <div class="teer">
    <Desc>
      <template #title>
        TEER, a token with <span>utility</span> and long-term <span>value</span>
      </template>
      <template #text>
        Our token empowers utility, governance and value at the same time, making it a valuable asset
      </template>
      <template #button>
        Learn more
      </template>
    </Desc>
    <HowItWorks :items='items' />
    <Questions />
  </div>
</template>

<script>
import Desc from "@/components/Desc";
import HowItWorks from "@/components/HowItWorks";
import Questions from "@/components/Teer/Questions";
import FirstImg from './images/first-image.vue'
import SecondImg from './images/second-image.vue'
import ThirdImg from './images/third-image.vue'

export default {
  components: {
    Desc, HowItWorks, Questions
  },
  setup() {
    const items = [
      {
        title: 'TEER, a Substrate native\ntoken',
        text: 'The TEER token is the fuel driving the Integritee platform — a common token across both our Kusama and Polkadot parachains. The token is designed in such a way that it has an intrinsic value that increases with adoption',
        img: FirstImg,
      },
      {
        title: 'Governance\nby TEER holders keeps\nthe network thriving\nand secured',
        text: 'TEER holders are the heart of our network, as they decide on how the network is governed and moving forward. Every TEER holder is an equal active participating member with a voice and responsible to ensure the healthiness of the ecosystem',
        img: SecondImg,
      },
      {
        title: 'Keeping a healthy\nbalance through\nthe network Treasury.',
        text: 'Fees are collected in an on-chain treasury. Treasury funds are used for ongoing maintenance and software, as well as ecosystemdevelopment and community activity rewards missing full stop',
        img: ThirdImg,
      },
    ]

    return { items }
  }
}
</script>
<style lang="scss" scoped>
.teer {
  position: relative;
}
</style>
