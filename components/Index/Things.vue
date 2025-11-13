<template>
  <section id="things">
    <div class="block things">
      <div class="container">
        <div class="column column_medium things__column">
          <h2 class="title title_h2 things__title">
            Great things<br />
            are built with<br />
            Integritee
          </h2>
          <p class="paragraph paragraph_medium margin_large things__description">
            Integritee harnesses the speed and confidentiality of Trusted
            Execution Environments (TEEs) as well as the transparency and trust
            of public blockchains to create the fastest, most scalable Web3
            protocol for securely processing sensitive data.
          </p>
          <NuxtLink to="/usecases" class="btn btn_gradient things__button">Learn more</NuxtLink>
        </div>
        <div class="things__image-wrapper">
          <!-- <img src="/img/index/things/polygons.svg" class="things__image" alt="Polygons" /> -->
          <img src="/img/index/things/polygons.svg" class="things__image" alt="Polygons" />
          <GlobalRadialGradient class="things__image-gradient" />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup></script>
<style lang="scss">
.things {
  .container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;

    @media screen and (max-width: $md) {
      gap: 15px;
    }

    @media screen and (max-width: $sm) {
      flex-direction: column-reverse;
    }
  }

  &__image {
    width: 100%;

    @media screen and (max-width: $sm) {
      width: 90%;
    }
  }

  &__image-wrapper {
    position: relative;

    @media screen and (max-width: $sm) {
      text-align: center;
      margin-bottom: 70px;
    }

    @media screen and (max-width: $xsm) {
      margin-bottom: 50px;
    }
  }

  &__image-gradient {
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 950px;
    height: 445px;

    @media screen and (max-width: $slg) {
      height: 338px;
      width: 676px;
    }

    @media screen and (max-width: $md) {
      height: 309px;
      width: 618px;
    }

    @media screen and (max-width: $sm) {
      height: 330px;
      width: 660px;
    }

    @media screen and (max-width: $xsm) {
      height: 258px;
      width: 516px;
    }
  }

  &__column {
    flex-shrink: 0;

    @media screen and (max-width: $lg) {
      width: 560px;
    }

    @media screen and (max-width: $slg) {
      width: 480px;
    }

    @media screen and (max-width: $slg) {
      width: 410px;
    }

    @media screen and (max-width: $sm) {
      width: 100%;
    }
  }

  &__title {
    @media screen and (max-width: $slg) {
      br {
        display: none;
      }
    }
  }
}
</style>
