<template>
  <section id="scalability">
    <div class="block scalability">
      <div class="container">
        <div class="row scalability__row">
          <div class="column column_medium scalability__column scalability__column_left">
            <h2 class="title title_h2 scalability__title">
              Scalability <br /> and performance without sacrificing trust
            </h2>
            <p class="paragraph paragraph_medium margin_large">
              Integritee utilizes the blockchain to create security and trust
              without the computational compromises.
              Centralized approaches to data-driven services tend to be fast and
              convenient, but involve big compromises of user privacy and data
              security.
            </p>
            <NuxtLink to="/technology" class="btn btn_gradient">Learn more</NuxtLink>
          </div>
          <div class="column scalability__column_icons">
            <div class="scalability__item margin_large">
              <div class="scalability__item-icon margin_small">
                <Guard />
              </div>
              <h3 class="scalability__item-title title_sub margin_medium">
                Privacy & security
              </h3>
              <p class="paragraph paragraph_medium scalability__item-description">
                The security and trust of the blockchain with the speed and
                power of enterprise grade confidential computing hardware.
              </p>
            </div>
            <div class="scalability__item">
              <div class="scalability__item-icon margin_small">
                <Speed />
              </div>
              <h3 class="scalability__item-title title_sub margin_medium">
                Speed & scalabillity
              </h3>
              <p class="paragraph paragraph_medium scalability__item-description">
                The scalability of second-layer technology based on substrate
                for building state of the art data-driven dApps and services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import Guard from '@/assets/img/index/scalability/guard.svg'
import Speed from '@/assets/img/index/scalability/speed.svg'
</script>
<style lang="scss">
.scalability {
  margin-bottom: 200px;

  @media screen and (max-width: 1366px) {
    margin-bottom: 170px;
  }

  @media screen and (max-width: 1200px) {
    margin-bottom: 140px;
  }

  @media screen and (max-width: 1024px) {
    margin-bottom: 100px;
  }

  &__item {
    @media screen and (max-width: 1024px) {
      margin-bottom: 48px;
    }

    @media screen and (max-width: 840px) {
      margin-bottom: 32px;
    }

    @media screen and (max-width: 420px) {
      margin-bottom: 24px;
    }
  }

  &__item-icon {
    width: 64px;
    height: 64px;

    @media screen and (max-width: 1024px) {
      width: 48px;
      height: 48px;
    }
  }

  &__item-title {
    @media screen and (max-width: 1024px) {
      font-size: $pLg;
    }
  }

  &__row {
    gap: 135px;

    @media screen and (max-width: 1366px) {
      gap: 55px;
    }

    @media screen and (max-width: 1200px) {
      gap: 100px;
    }

    @media screen and (max-width: 1024px) {
      gap: 52px;
    }

    @media screen and (max-width: 840px) {
      display: block;
    }
  }

  &__column_left {
    @media screen and (max-width: 1366px) {
      width: 560px;
    }

    @media screen and (max-width: 1200px) {
      width: 480px;
    }

    @media screen and (max-width: 1024px) {
      width: 420px;
    }

    @media screen and (max-width: 840px) {
      width: 100%;
      margin-bottom: 42px;
    }
  }
}
</style>
