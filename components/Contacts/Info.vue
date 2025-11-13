<template>
  <div class='info'>
    <div class='info__column'>
      <slot name='title' />
      <slot name='items' />
    </div>
  </div>
</template>

<script setup lang='ts'>
</script>

<style lang="scss" scoped>
.info {
  width: 100%;
  :slotted(.info__link) {
    display: block;
    line-height: 150%;
    margin-bottom: 14px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__column {
    width: 100%;
  }

  :slotted(.info__row) {
    display: block;

    @media screen and (max-width: $md) {
      display: flex;
    }

    @media screen and (max-width: $xsm) {
      display: block;
    }
  }

  :slotted(.info__icon) {
    width: 48px;
    height: 48px;
    background: url("@/assets/img/contacts/contact.svg");
    background-size: cover;

    @media screen and (max-width: $sm) {
      width: 32px;
      height: 32px;
    }
  }

  :slotted(.contact__icon) {
    width: 48px;
    height: 48px;
    background: url("@/assets/img/contacts/contact.svg");
    background-size: cover;
    @media screen and (max-width: $sm) {
      width: 32px;
      height: 32px;
    }
  }

  :slotted(.address__icon) {
    width: 48px;
    height: 48px;
    background: url("@/assets/img/contacts/address-icon.svg");
    background-size: cover;
    @media screen and (max-width: $sm) {
      width: 32px;
      height: 32px;
    }
  }

  :slotted(.info__item) {
    margin-bottom: 32px;

    @media screen and (max-width: $md) {
      width: 384px;
      margin-bottom: 0;
      margin-right: 32px;
    }

    @media screen and (max-width: $sm) {
      width: 254px;
    }

    @media screen and (max-width: $xsm) {
      margin-bottom: 32px;
      margin-right: 0;
    }
  }
}
</style>
