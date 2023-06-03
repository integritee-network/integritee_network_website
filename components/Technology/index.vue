<template>
  <div class="technology">
    <Desc>
      <template #title>
        <span>Integritee</span> is when privacy and security meet speed and scalability
      </template>
      <template #text>
        The combination of confidential computing and a Substrate-based public chain is the foundation for our superior
        tech.
      </template>
      <template #button>
        <a href="#" class="btn btn_gradient desc__button">Start Building</a>
      </template>
    </Desc>
    <HowItWorks :items='items' />
    <Building />
    <Socials />
  </div>
</template>

<script setup>
import Desc from "@/components/Desc";
import HowItWorks from "@/components/Technology/HowItWorks.vue";
import Building from "@/components/Technology/Building.vue";
import Socials from "@/components/Socials/Section.vue";
import FirstImg from '@/components/Technology/images/FirstImage'
import SecondImg from '@/components/Technology/images/SecondImage'
import ThirdImg from '@/components/Technology/images/ThirdImage'
import FourthImg from '@/components/Technology/images/FourthImage'

const items = [
  {
    title: 'TEE enterprise hardware\nensures the speed\nand confidentiality\nof our solution',
    text: 'A trusted execution environment (TEE) is an isolated area within a computer processor that runs separately from the standard OS. Any data processed within a TEE is accessible to no one, not even the admin. A public auditability service will provide all users with assurance that their data can only be processed in pre-defined ways in an isolated and trustworthy hardware environment',
    img: FirstImg,
  },
  {
    title: 'Integritee’s blockchain\nbuilds upon the Polkadot\nnetwork',
    text: 'Polkadot is a scalable and secure protocol that serves as the foundation for an interoperable network of blockchains. The network provides the basis for Web 3.0 — a new, fully decentralized internet. On Polkadot, any type of data can be exchanged between the blockchains inside the ecosystem. Polkadot’s key benefit is that it provides pooled security and cross-chain messaging for all network participants',
    img: SecondImg,
  },
  {
    title: 'Deployment at any stage\nof your development',
    text: 'Our architecture allows a permissioned or permissionless deployment no matter what requirement you have. Servers can also be self hosted on premise or hosted in the cloud. Our network is providing a great flexlibility for applications operators to host and maintain the solutions',
    img: ThirdImg,
  },
  {
    title: 'Rust & Substrate runtime\ncompatibility',
    text: 'The Integritee SDK is compatible with Substrate runtime pallets and Rust code can be simply integrated with our SDK to run a decentralized application. With a few lines of glue-code, you can reuse your pallets and instantiate them on our chain. It is even possible to trustlessly interact between on- and off-chain runtimes',
    img: FourthImg,
  },
]
</script>
<style lang="scss" scoped>
.technology {
  position: relative;
}
</style>
