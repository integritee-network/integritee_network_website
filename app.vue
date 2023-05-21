<script setup>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
</script>

<template>
  <div class="wrapper">
    <Header />
    <div class="container">
      <img src="/img/global/bg-line.svg" class="top-lines" alt="Lines" />
    </div>
    <div class="page-wrapper">
      <NuxtPage />
    </div>
    <div class="container">
      <img src="/img/global/bg-line.svg" class="bottom-lines" alt="Lines" />
    </div>
    <Footer />
  </div>
</template>

<style lang="scss">
.page-wrapper {
  position: relative;
  padding-top: 91px;
  overflow: hidden;
}
.wrapper {
  position: relative;
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
}
.bottom-lines {
  position: absolute;
  left: -280px;
  top: -1062px;
  width: 1060px;
  transform: rotate(159.84deg) scale(-1, 1);
  z-index: -1;
}
</style>
