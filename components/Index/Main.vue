<template>
  <section id="main">
    <div class="block main">
      <div class="container">
        <div class="column column_large">
          <h1 class="title title_hero main__title">
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
        <img
          src="/img/index/main/scheme.svg"
          class="main__scheme"
          alt="Scheme"
        />
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.main {
  padding-top: 90px;
  .container {
    position: relative;
  }
  &__title {
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
  &__scheme {
    position: absolute;
    right: -460px;
    top: -261px;
    width: 1131px;
  }
}
</style>
