<template>
  <div class="questions block">
    <div class='container blur-gradient blur-gradient_top'>
      <div class='questions__icon'>
        <Icon />
      </div>
      <h2 class='title title_h2 margin_medium questions__title'>Questions about TEER?</h2>
      <p class='paragraph paragraph_medium margin_medium questions__desc'>Read our Tokenomics paper to fully understand
        how TEER integrates with Integritee network and what its benefits and utility are</p>
      <div class='questions__row margin_large'>
        <p class='paragraph paragraph_large questions__row-text'>Teer Token is available on:</p>
        <a href="#" class="questions__right-item">
          <Kraken />
          <span class="paragraph_large">Kraken</span>
        </a>
        <a href="#" class="questions__right-item">
          <Gateio />
          <span class="paragraph_large">Gate.io</span>
        </a>
      </div>
      <a :href="TEER_TOKEN_WALLET_LINK" class="btn btn_gradient" target="_blank">
        Create wallet
      </a>
    </div>
  </div>
</template>

<script setup>
import Icon from "@/assets/img/teer/icon.svg";
import Kraken from '@/assets/img/index/token/kraken.svg'
import Gateio from '@/assets/img/index/token/gateio.svg'
import { TEER_TOKEN_WALLET_LINK } from '@/configs/app.config'
</script>
<style lang="scss" scoped>
.questions {
  position: relative;
  text-align: center;

  &__icon {
    position: relative;
    width: 64px;
    height: 64px;
    margin: 0 auto;
    margin-bottom: 48px;

    @include slg {
      width: 48px;
      height: 48px;
      margin-bottom: 32px;
    }

    @include sm {
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

  &__desc {
    width: 750px;
    margin: 0 auto;
    margin-bottom: 24px;

    @include slg {
      margin-bottom: 16px;
    }

    @include sm {
      width: 540px;
      margin-bottom: 8px;
    }

    @include xsm {
      width: 350px;
    }
  }

  &__row {
    display: flex;
    justify-content: center;
    align-items: center;

    @include sm {
      flex-wrap: wrap;
    }
  }

  &__row-text {
    width: fit-content;

    @include sm {
      width: 100%;
      margin-bottom: 16px;
    }
  }

  &__right-item {
    svg {
      width: auto;
      height: 32px;

      @include sm {
        height: 18px;
      }
    }
  }

  &__right-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;
    margin-left: 24px;

    @include sm {
      gap: 8px;
      margin-left: 0;
    }

    &:last-child {
      margin-left: 18px;
    }
  }
}
</style>
