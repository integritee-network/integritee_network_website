<template>
  <section id="main">
    <div class="block main">
      <div class="container">
        <div class="column column_large">
          <h1 class="title main__title">
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
      </div>
    </div>
  </section>
</template>
<script setup>
import Scheme from '@/assets/img/index/main/scheme.svg'
</script>
<style lang="scss">
.main {
  padding-top: 90px;
  &__title {
    font-size: $tLg;
    line-height: 110%;
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
}
</style>
