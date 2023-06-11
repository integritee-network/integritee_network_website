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
        <div v-if="$slots.button || $slots.docs" class='desc__row'>
          <slot name='button' />
          <slot name='docs' />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
:slotted(span) {
  display: inline-block;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent;
}

:slotted(span:first-child) {
  background: linear-gradient(90deg, #30DAFF -20.25%, #B000FD 50%);
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
    font-weight: 500;
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
