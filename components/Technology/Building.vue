<template>
  <div class="building block">
    <div class='container blur-gradient blur-gradient_extra-top'>
      <h2 class='title title_h2 margin_medium building__title'>What will you create?</h2>
      <p class='paragraph paragraph_medium margin_large'>If the major problems associated with programming on the blockchain are solved...</p>
      <a :href="TECHNOLOGY_LINK" class="btn btn_gradient">
        Start Building
      </a>
    </div>
  </div>
</template>

<script setup lang='ts'>
import Icon from "@/assets/img/technology/icon.svg";
import { TECHNOLOGY_LINK } from '@/configs/app.config';
</script>
<style lang="scss" scoped>
.building {
  position: relative;
  margin-top: 235px;
  text-align: center;

  @media screen and (max-width: 1366px) {
    margin-top: 265px;
  }

  @media screen and (max-width: 1200px) {
    margin-top: 165px;
  }

  @media screen and (max-width: 840px) {
    margin-top: 100px;
  }

  &__icon {
    position: relative;
    width: 64px;
    height: 64px;
    margin: 0 auto;
    margin-bottom: 48px;

    @media screen and (max-width: 1200px) {
      width: 48px;
      height: 48px;
      margin-bottom: 32px;
    }

    @media screen and (max-width: 840px) {
      width: 32px;
      height: 32px;
      margin-bottom: 24px;
    }

    svg {
      width: 100%;
    }
  }

  &__title {
    font-family: 'WhyteInktrap';
  }
}
</style>
