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
        <a :href="USE_CASES_LINK" class="btn btn_gradient desc__button" target="_blank">Use cases</a>
      </template>
    </Desc>
  </div>
</template>
<script setup lang="ts">
import Desc from "@/components/Desc/index.vue";
import { USE_CASES_LINK } from '@/configs/app.config';
</script>
<style lang="scss">
.use-cases-hero {
  .title_hero {
    @media screen and (max-width: 1200px) {
      br {
        display: none;
      }
    }
  }
}
</style>
