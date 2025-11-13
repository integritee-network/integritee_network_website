<template>
  <section id="join">
    <div class="join block">
      <div class='container blur-gradient blur-gradient_extra-top'>
        <div class='row jcsb join__row'>
          <div class='join__titleWrap'>
            <h2 class='title title_h2 margin_medium'>
              Want to join
              our&nbsp;team?
            </h2>
            <p class='paragraph_medium join__text'>
              At Integritee, we strongly believe in a mixture of perspectives and experiences. We're proudly committed to
              equal employment and development opportunities no matter your gender, race, religion, age, sexual
              orientation, colour, disability, or place of origin. Let your experience speak for itself add full stop
            </p>
          </div>
          <div class='join__links'>
            <LineLink
              text='Full-Stack Developer'
              :link="FULL_STACK_DEV"
            />
            <LineLink
              text='Rust Core Developer'
              :link="RUST_CORE_DEV"
            />
            <LineLink
              text='Senior DevOps Engineer'
              :link="SENIOR_DEVOPS"
            />
            <LineLink
              text='View all positions'
              :link="ALL_POSITION"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang='ts'>
import LineLink from '@/components/Global/LineLink.vue'
import {
  FULL_STACK_DEV,
  RUST_CORE_DEV,
  SENIOR_DEVOPS,
  ALL_POSITION
} from '@/configs/app.config';
</script>
<style lang="scss">
.join {
  &__row {
    @media screen and (max-width: $sm) {
      display: block;
    }
  }

  &__titleWrap {
    width: 550px;

    @media screen and (max-width: $lg) {
      width: 500px;
    }

    @media screen and (max-width: $slg) {
      width: 369px;
    }

    @media screen and (max-width: $sm) {
      width: 100%;
    }
  }

  &__text {
    line-height: 150%;
  }

  &__links {
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 610px;

    @media screen and (max-width: $lg) {
      width: 551px;
    }

    @media screen and (max-width: $md) {
      width: 371px;
    }

    @media screen and (max-width: $sm) {
      width: 100%;
      margin-top: 24px;
      gap: 24px;
    }
  }
}</style>
