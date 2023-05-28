<template>
  <div class="desc block">
    <div class='container'>
      <div class="column column_large">
        <h1 class="title title_hero desc__title margin_medium">
          <slot name='title' />
        </h1>
        <p class="paragraph paragraph_medium main__description margin_large">
          <slot name='text' />
        </p>
        <div class='desc__row'>
          <a href="#" class="btn btn_gradient desc__button">
            <slot name='button' />
          </a>
            <slot name='docs' />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
:slotted(span) {
    display: inline-block;
    background: linear-gradient(90deg, #30DAFF -20.25%, #B000FD 50%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
:slotted(.docs__button) {
  border: 2px solid rgba(255, 255, 255, 0.2);
  background: transparent;
  backdrop-filter: blur(30px);
}
.desc {
  position: relative;
  padding-top: 90px;
  @include slg {
    padding-top: 108px;
  }
  @include sm {
    padding-top: 68px;
  }
  &__title {
    line-height: 110%;
  }
  &__row {
    display: flex;
    align-items: center;
    gap: 18px;
    @include sm {
      gap: 12px;
    }
  }
}
</style>
