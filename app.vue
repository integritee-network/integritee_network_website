<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { useAsyncData } from 'nuxt/app'

import Footer from '@/components/Footer'
import { useCategoriesStore } from '@/store/categories'

const Header = defineAsyncComponent(() => import('@/components/Header'))

const catsStore = useCategoriesStore()
const { initCategories, initUseCasesTags } = catsStore

await Promise.all([
  useAsyncData('init', initCategories),
  useAsyncData('initTags', initUseCasesTags),
])
</script>

<template>
  <div class="wrapper">
    <Header />
    <div class='image-wrap'>
      <div class="container">
        <img src="/img/global/bg-line.png" class="top-lines" alt="Lines" />
      </div>
    </div>
    <div class="page-wrapper">
      <NuxtPage />
    </div>
    <div class="container">
      <img src="/img/global/bg-line.png" class="bottom-lines" alt="Lines" />
    </div>
    <Footer />
  </div>
</template>

<style lang="scss">
.page-wrapper {
  position: relative;
  padding-top: 91px;
}

.wrapper {
  position: relative;
  //overflow-x: hidden;
  //overflow-y: auto;

  @include lg {
    overflow: hidden;
  }
}

.image-wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200vh;
  overflow: hidden;
}

.container {
  position: relative;
}

.top-lines {
  position: absolute;
  right: -430px;
  top: -300px;
  width: 1468px;
  transform: rotate(-159.84deg);

  @include lg {
    width: 1417px;
  }

  @include slg {
    width: 873px;
    right: -250px;
    top: -270px;
  }

  @include md {
    width: 838px;
    right: -208px;
    top: -180px;
  }

  @include sm {
    width: 530px;
    right: -141px;
    top: -70px;
  }

  @include xsm {
    right: -171px;
    top: -7px;
  }
}

.bottom-lines {
  position: absolute;
  left: -280px;
  top: -1062px;
  width: 1060px;
  transform: rotate(159.84deg) scale(-1, 1);
  z-index: -1;

  @include lg {
    width: 1023px;
    left: -245px;
    top: -992px;
  }

  @include slg {
    width: 740px;
    left: -185px;
    top: -620px;
  }

  @include sm {
    width: 634px;
    left: -115px;
    top: -216px;
  }
}
</style>
