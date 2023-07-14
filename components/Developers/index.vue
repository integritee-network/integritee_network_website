<template>
  <div class="developers">
    <Desc>
      <template #title>
        Get ready to build<br>
        in <span class="text-gradient_blue-purple">Web3</span> like you were <span
          class="text-gradient_purple-blue">always</span> meant to.
      </template>
      <template #text>
        Integritee combines the security and trust of Polkadot, the scalability of second-layer solutions, and the
        confidentiality of trusted execution environments (TEEs) to help you build applications with unrivaled speed,
        verifiable privacy, and interoperability at scale.
      </template>
      <template #button>
        <a :href="GITHUB_LINK" class="btn btn_gradient desc__button">Github</a>
      </template>
      <template #docs>
        <a :href="DEVELOPMENT_DOCS" class="btn btn_border">Docs</a>
      </template>
    </Desc>
    <QuickStart />
    <Resources />
    <Socials />
  </div>
</template>

<script setup lang='ts'>
import Desc from "@/components/Desc/index.vue";
import QuickStart from "@/components/Developers/QuickStart.vue";
import Resources from "@/components/Developers/Resources.vue";
import Socials from "@/components/Socials/Section.vue";
import { GITHUB_LINK, DEVELOPMENT_DOCS } from '@/configs/app.config';
</script>
<style lang="scss" scoped>
.developers {
  position: relative;
}
</style>
