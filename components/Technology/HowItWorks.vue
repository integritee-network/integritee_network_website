<template>
  <div class="how-it-works block">
    <div class='container'>
      <h2 class='title title_h2 margin_large'>
        How it works
      </h2>
      <div>
        <GlobalSimple v-for='(item, index) in items' :item="item" :key='index' />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ITechnology } from '~/types';

defineProps<{
  items: ITechnology[]
}>()
</script>
<style lang="scss" scoped>
.how-it-works {
  position: relative;
}
</style>
