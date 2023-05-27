<template>
  <section id="scalability">
    <div class="block scalability">
      <div class="container">
        <div class="row scalability__row">
          <div class="column column_medium">
            <h2 class="title title_h2 scalability__title">
              Scaleability and performance without sacrificing trust
            </h2>
            <p class="paragraph paragraph_large margin_medium">
              Integritee utilizes the blockchain to create security and trust
              without the computational compromises.
            </p>
            <p class="paragraph paragraph_medium margin_large">
              Centralized approaches to data-driven services tend to be fast and
              convenient, but involve big compromises of user privacy and data
              security
            </p>
            <a href="#" class="btn btn_gradient">Learn more</a>
          </div>
          <div class="column scalability__column_icons">
            <div class="scalability__item margin_large">
              <div class="scalability__item-icon margin_small">
                <Guard />
              </div>
              <h3 class="scalability__item-title title_sub margin_medium">
                Privacy & security
              </h3>
              <p
                class="paragrapg paragraph_medium scalability__item-description"
              >
                The security and trust of the blockchain with the speed and
                power of enterprise grade confidential computing hardware
              </p>
            </div>
            <div class="scalability__item">
              <div class="scalability__item-icon margin_small">
                <Speed />
              </div>
              <h3 class="scalability__item-title margin_medium">
                Speed & scalabillity
              </h3>
              <p
                class="paragrapg paragraph_medium scalability__item-description"
              >
                The scalability of second-layer technology based on substrate
                for building state of the art data-driven dApps and services
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
  &__item-icon {
    width: 64px;
    height: 64px;
  }
  &__row {
    gap: 135px;
  }
}
</style>
