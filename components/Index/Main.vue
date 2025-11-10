<template>
  <section id="main">
    <div class="shutdown-banner">
      <div class="container">
        <div class="shutdown-banner__content">
          <span class="shutdown-banner__text">
            ⚠️ Important Network Update: The Integritee Network will be shutting down on November 11, 2025. 
            <a href="blog/this-is-the-end" class="shutdown-banner__link">Read the full announcement</a>
          </span>
        </div>
      </div>
    </div>
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
          <NuxtLink to="/developers" class="btn btn_gradient main__button">Start building</NuxtLink>
        </div>
        <div class="main__img-wrapper">
          <img src="/img/index/main/scheme.svg" class="main__scheme" alt="Scheme" />
          <GlobalRadialGradient class="main__img-gradient" />
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.shutdown-banner {
  background-color: #1a73e8;
  color: white;
  padding: 12px 0;
  text-align: center;
  font-size: 15px;
  line-height: 1.4;
  width: 100%;
  
  &__content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  &__text {
    display: block;
  }

  &__link {
    color: white;
    text-decoration: underline;
    font-weight: 600;
    margin-left: 8px;
    white-space: nowrap;

    &:hover {
      text-decoration: none;
    }
  }

  @include sm {
    &__content {
      padding: 0 40px;
    }
    
    &__link {
      display: inline;
      margin-left: 8px;
      white-space: nowrap;
    }
  }
}

.main {
  padding-top: 90px;

  @include xsm {
    padding-top: 70px;
  }

  .container {
    @include sm {
      display: flex;
      flex-direction: column-reverse;
    }
  }

  .container {
    position: relative;
    display: flex;
    justify-content: space-between;
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
    right: -454px;
    top: -71px;
    width: 831px;

    @include slg {
      right: -380px;
      top: -81px;
      width: 741px
    }

    @include md {
      right: -411px;
      top: -50px;
    }

    @include sm {
      position: relative;
      left: 196px;
      top: -50px;
      right: unset;
    }


    @include xsm {
      width: 550px;
      left: 150px;
    }
  }

  &__img-gradient {
    width: 456px;
    height: 456px;
    left: -320px;
    top: -30px;

    @include slg {
      width: 407px;
      height: 407px;
      left: -400px;
      top: -70px;
    }

    @include md {
      left: -370px;
      top: -40px;
    }

    @include sm {
      left: 20px;
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
    position: relative;

    @include sm {
      height: 430px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 11px;
    }

    @include xsm {
      height: 320px;
    }
  }
}
</style>
