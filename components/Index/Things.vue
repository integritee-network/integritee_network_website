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
            protocol for securely processing sensitive data
          </p>
          <a href="/usecases" class="btn btn_gradient things__button">Learn more</a>
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

    @include md {
      gap: 15px;
    }

    @include sm {
      flex-direction: column-reverse;
    }
  }

  &__image {
    width: 100%;

    @include sm {
      width: 90%;
    }
  }

  &__image-wrapper {
    position: relative;

    @include sm {
      text-align: center;
      margin-bottom: 70px;
    }

    @include xsm {
      margin-bottom: 50px;
    }
  }

  &__image-gradient {
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 950px;
    height: 445px;

    @include slg {
      height: 338px;
      width: 676px;
    }

    @include md {
      height: 309px;
      width: 618px;
    }

    @include sm {
      height: 330px;
      width: 660px;
    }

    @include xsm {
      height: 258px;
      width: 516px;
    }
  }

  &__column {
    flex-shrink: 0;

    @include lg {
      width: 560px;
    }

    @include slg {
      width: 480px;
    }

    @include slg {
      width: 410px;
    }

    @include sm {
      width: 100%;
    }
  }

  &__title {
    @include slg {
      br {
        display: none;
      }
    }
  }
}
</style>
