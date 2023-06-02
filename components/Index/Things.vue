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
          <a href="#" class="btn btn_gradient things__button">Learn more</a>
        </div>
        <div class="things__image-wrapper">
          <img src="/img/index/things/polygons.svg" class="things__image" alt="Polygons" />
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

    @include sm {
      display: flex;
      flex-direction: column-reverse;
    }
  }

  &__image {
    position: absolute;
    right: -240px;
    top: -204px;
    width: 1054px;

    @include lg {
      right: -198px;
      top: -174px;
      width: 955px;
    }

    @include slg {
      right: -232px;
      top: -213px;
      width: 985px;
    }

    @include md {
      right: -186px;
      top: -135px;
      width: 735px;
    }

    @include sm {
      position: static;
    }

    @include xsm {
      width: 550px;
    }

  }

  &__column {
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

  &__image-wrapper {
    @include sm {
      height: 360px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    @include xsm {
      height: 240px;
    }
  }
}
</style>
