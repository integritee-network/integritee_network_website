<template>
  <section id="list">
    <div class="container">
      <h2 class="title title_h2 margin_large">Use cases</h2>
      <div class="block list">
        <Item v-for="(item, idx) in data" :use-case="item"
          :class="{ 'blur-gradient': data?.length === idx + 1, 'blur-gradient_top-middle': data?.length === idx + 1 }"
          :key="idx" />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { useWpApi } from '@/api/wordpress'
import Item from '@/components/UseCases/Item.vue'

const wpApi = useWpApi()

const { data, error } = await wpApi.getUseCases()
</script>
<style lang="scss" scoped></style>
