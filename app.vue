<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: { Header },
}
</script>

<template>
  <div>
    <Header />
    <div class="page-wrapper">
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>

<style lang="scss">
.page-wrapper {
  position: relative;
  padding-top: 91px;
}
</style>
