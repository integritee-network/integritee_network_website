<template>
  <section id="join">
    <div class="join block">
      <div class='container'>
        <div class='row jcsb join__row'>
          <div class='join__titleWrap'>
            <h2 class='title_h2 margin_medium'>
              Want to join
              our&nbsp;team?
            </h2>
            <p class='paragraph_medium join__text'>
              At Integritee, we strongly believe in a mixture of perspectives and experiences. We're proudly committed to equal employment and development opportunities no matter your gender, race, religion, age, sexual orientation, colour, disability, or place of origin. Let your experience speak for itself add full stop
            </p>
          </div>
          <div class='join__links'>
            <LineLink text='Full-Stack Developer' link='#' />
            <LineLink text='Rust Core Developer' link='#' />
            <LineLink text='Senior DevOps Engineer' link='#' />
            <LineLink text='View all positions' link='#' />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import LineLink from '@/components/Global/LineLink'
</script>
<style lang="scss">
.join {
  &__row {
    @include sm {
      display: block;
    }
  }
  &__titleWrap {
    width: 550px;
    @include lg {
      width: 500px;
    }
    @include slg {
      width: 369px;
    }
    @include sm {
      width: 100%;
    }
  }
  &__text {
    color: #E5E5E5;
    line-height: 150%;
  }
  &__links {
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 610px;
    @include lg {
      width: 551px;
    }
    @include md {
      width: 371px;
    }
    @include sm {
      width: 100%;
      margin-top: 24px;
      gap: 24px;
    }
  }
}
</style>
