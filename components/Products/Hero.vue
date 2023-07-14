<template>
  <div class="hero">
    <Desc>
      <template #title>
        Introducing a product suite for developing Web3 projects that are <span>secure</span> AND
        <span class="text-gradient_purple-blue">scalable</span>.
      </template>
      <template #text>
        All our development tools and products are fostering a sustainable, workable Web3 to power the future of the
        internet and beyond.
      </template>
      <template #button>
        <a
          :href="PRODUCTS_DOCS_LINK"
          class="btn btn_gradient desc__button"
          target="_blank"
        >
          Learn More
        </a>
      </template>
    </Desc>
  </div>
</template>
<script setup lang="ts">
import Desc from "@/components/Desc";
import { PRODUCTS_DOCS_LINK } from "@/configs/app.config";
</script>
<style lang="">

</style>
