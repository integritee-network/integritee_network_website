<template>
  <section id="things">
    <div class="block things">
      <div class="container">
        <div class="column column_medium">
          <h2 class="title title_h2 things__title">
            Great things<br />
            are built with<br />
            Integritee
          </h2>
          <p
            class="paragraph paragraph_medium margin_large things__description"
          >
            Integritee harnesses the speed and confidentiality of Trusted
            Execution Environments (TEEs) as well as the transparency and trust
            of public blockchains to create the fastest, most scalable Web3
            protocol for securely processing sensitive data
          </p>
          <a href="#" class="btn btn_gradient things__button">Learn more</a>
        </div>
        <img
          src="/img/index/things/polygons.svg"
          class="things__image"
          alt="Polygons"
        />
      </div>
    </div>
  </section>
</template>
<script setup></script>
<style lang="scss">
.things {
  .container {
    position: relative;
  }
  &__image {
    position: absolute;
    right: -240px;
    top: -204px;
    width: 1054px;
  }
}
</style>
