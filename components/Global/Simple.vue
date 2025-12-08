<template>
  <div class="block simple">
    <div class="simple__text">
      <p class="simple__item-title margin_medium">
        {{ item.title }}
      </p>
      <p class="simple__item-text paragraph paragraph_medium">
        {{ item.text }}
      </p>
    </div>
    <div class="simple__image-wrapper">
      <div class="simple__image">
        <img :src="item.img" />
        <GlobalRadialGradient class="simple__image-gradient" />
      </div>
    </div>
    <!-- <component :is='item.img' /> -->
  </div>
</template>
<script setup lang="ts">
defineProps<{
  item: {
    title: string
    text: string
    img: string
  }
}>()
</script>
<style lang="scss" scoped>
.simple {
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 75px;

  @media screen and (max-width: 1366px) {
    gap: 50px;
  }

  @media screen and (max-width: 840px) {
    flex-direction: column-reverse;
    gap: 0;
  }

  &__text {
    width: 600px;
    flex-shrink: 0;

    @media screen and (max-width: 1366px) {
      width: 560px;
    }

    @media screen and (max-width: 1200px) {
      width: 480px;
    }

    @media screen and (max-width: 1024px) {
      width: 350px;
    }

    @media screen and (max-width: 840px) {
      width: 100%;
    }
  }

  &__item-title {
    position: relative;
    z-index: 2;
    font-family: 'WhyteInktrap';
    font-weight: 500;
    font-size: 3em;
    line-height: 110%;
    color: #ffffff;

    @media screen and (max-width: 1200px) {
      font-size: 2.25em;
    }

    @media screen and (max-width: 840px) {
      font-size: 1.688em;
    }
  }

  &__item-text {
    position: relative;
    z-index: 2;
  }

  &__image-wrapper {
    position: relative;
    width: 100%;
  }

  &__image {
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 840px) {
      position: relative;
      text-align: center;
      margin-bottom: 40px;
    }

    img {
      width: 100%;
      max-height: 420px;
      z-index: 2;
      object-fit: contain;

      @media screen and (max-width: 1366px) {
        max-height: 390px;
      }

      @media screen and (max-width: 1200px) {
        max-height: 350px;
      }

      @media screen and (max-width: 1024px) {
        max-height: 310px;
      }

      @media screen and (max-width: 840px) {
        position: relative;
        height: 100%;
        max-width: 80%;
        max-height: 300px;
        width: auto;
      }
    }
  }

  &__image-gradient {
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 900px;
    height: 900px;

    @media screen and (max-width: 1366px) {
      width: 850px;
      height: 850px;
    }

    @media screen and (max-width: 1200px) {
      width: 800px;
      height: 800px;
    }

    @media screen and (max-width: 1024px) {
      width: 600px;
      height: 600px;
    }
  }
}
</style>
