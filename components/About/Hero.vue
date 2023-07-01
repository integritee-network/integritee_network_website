<template>
  <section id="hero">
    <div class="hero">
      <Desc>
        <template #title>
          We’re blockchain veterans who believe<br />
          in the power<br />
          of a <span class="text-gradient_blue-purple">decentralized</span> <span
            class="text-gradient_purple-blue">Web3</span>
        </template>
        <template #text>
          We’ve been developing decentralized solutions for tangible, real-world use cases for over half a decade
        </template>
        <template #button>
          <a href="mailto: hello@integritee.network" class="btn btn_gradient desc__button">Contact us</a>
        </template>
      </Desc>
    </div>
  </section>
</template>
<script setup>
import Desc from "@/components/Desc";
</script>
<style lang="scss" scoped>
.title {
  br {
    @include slg {
      display: none;
    }
  }
}
</style>