<template>
  <div class="use-cases-hero">
    <Desc>
      <template #title>
        From <span>DeFi</span><br />
        to <span class="text-gradient_purple-blue">gaming</span>, Integritee powers scalability
        and security for Web3
      </template>
      <template #text>
        A new generation technology serving thousands of possible use cases across multiple industries for the next
        millions of users.
      </template>
      <template #button>
        <a href="#" class="btn btn_gradient desc__button" target="_blank">Use cases</a>
      </template>
    </Desc>
  </div>
</template>
<script setup>
import Desc from "@/components/Desc";
</script>
<style lang="scss">
.use-cases-hero {
  .title_hero {
    @include slg {
      br {
        display: none;
      }
    }
  }
}
</style>