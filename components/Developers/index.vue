<template>
  <div class="developers">
    <Desc>
      <template #title>
        Get ready to build<br>
        in <span>Web3</span> like you were <span>always</span> meant to
      </template>
      <template #text>
        Integritee combines the security and trust of Polkadot, the scalability of second-layer solutions, and the confidentiality of trusted execution environments (TEEs) to help you build applications with unrivaled speed, verifiable privacy, and interoperability at scale
      </template>
      <template #button>
        <a href="#" class="btn btn_gradient desc__button">Github</a>
      </template>
      <template #docs>
        <a href="#" class="btn docs__button">Documentation</a>
      </template>
    </Desc>
    <QuickStart />
    <Resources />
  </div>
</template>

<script setup>
import Desc from "@/components/Desc";
import QuickStart from "@/components/Developers/QuickStart";
import Resources from "@/components/Developers/Resources";
</script>
<style lang="scss" scoped>
.developers {
  position: relative;
}
</style>
