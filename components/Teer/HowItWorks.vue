<template>
  <div class="how-it-works block">
    <div class="container">
      <h2 class="title title_h2 margin_large">How it works</h2>
      <div>
        <GlobalSimple
          v-for="(item, index) in items"
          class="how-it-works__item"
          :item="item"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ITechnology } from '~/types'

defineProps<{
  items: ITechnology[]
}>()
</script>
<style lang="scss">
.how-it-works {
  position: relative;

  &__item {
    img {
      max-height: 380px !important;
      @media screen and (max-width: $slg) {
        max-height: 300px !important;
      }
    }
  }
}
</style>
