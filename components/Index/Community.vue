<template>
  <section id="community">
    <div class="block community">
      <div class="container">
        <div class="column column_medium community__column">
          <h2 class="title title_h2 community__title">
            Join our developer community <br /> and start your integritee journey
          </h2>
          <div class="community__text">
            <p class="paragraph paragraph_medium margin_small">
              Developers are building amazing DApps that utilize our expanding
              suite of tools
            </p>
            <p class="paragraph paragraph_medium margin_large">
              Join us on Discord where we’re building a community of forward
              thinking devs like you
            </p>
          </div>
          <a href="#" class="btn btn_gradient">Join Discord</a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {}
</script>
<style lang="scss">
.community {
  &__title {
    @include slg {
      br {
        display: none;
      }
    }
  }

  &__column {
    @include slg {
      width: 480px;
    }

    @include md {
      width: 420px;
    }

    @include sm {
      width: 100%;
    }
  }
}
</style>
