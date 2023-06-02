<template>
  <section id="main">
    <div class="block main">
      <div class="container">
        <div class="column column_large main__column">
          <h1 class="title title_hero main__title margin_medium">
            <span class="gradient gradient_one">It’s time.</span> Let’s<br />
            power the Web3<br />
            of the <span class="gradient gradient_two">future</span> together
          </h1>
          <p class="paragraph paragraph_medium main__description margin_large">
            The fastest, most scalable and secure Web3 network bringing <br />
            the vision of a trustless, decentralized future for all.
          </p>
          <a href="#" class="btn btn_gradient main__button">Start building</a>
        </div>
        <div class="main__img-wrapper">
          <img src="/img/index/main/scheme.svg" class="main__scheme" alt="Scheme" />
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.main {
  padding-top: 90px;

  .container {
    @include sm {
      display: flex;
      flex-direction: column-reverse;
    }
  }

  .container {
    position: relative;
  }

  &__title {
    line-height: 110%;
  }

  &__description {
    @include md {
      br {
        display: none;
      }
    }
  }

  .gradient {
    display: inline-block;

    &_one {
      background: linear-gradient(90deg, #30daff -12.5%, #b000fd 41%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    &_two {
      background: linear-gradient(90deg, #b000fd, #30daff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  &__scheme {
    position: absolute;
    right: -460px;
    top: -261px;
    width: 1131px;

    @include slg {
      right: -410px;
      top: -271px;
      width: 941px;
    }

    @include sm {
      position: relative;
      right: -101px;
      top: -50px;
    }

    @include xsm {
      width: 720px;
      right: -79px;
      top: -60px;
    }
  }

  &__column {
    @include lg {
      width: 730px;
    }

    @include slg {
      width: 600px;
    }

    @include md {
      width: 440px;
    }

    @include sm {
      width: 100%;
    }
  }

  &__img-wrapper {
    @include sm {
      height: 430px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    @include xsm {
      height: 320px;
    }
  }
}
</style>
