<template>
  <div class='info'>
    <div class='info__column'>
      <h2 class='title title_h2 margin_large'>Get in touch<br>
        with Integritee</h2>
      <div class='info__row'>
        <div class='info__item'>
          <div class='info__icon margin_medium' />
          <p class='title_sub margin_medium'>Contact Us</p>
          <p class='paragraph_large'>
            <a href="mailto: hello@integritee.network" class="text-link info__link">hello@integritee.network</a>
            <a href="mailto: support@integritee.network" class="text-link info__link">support@integritee.network</a>
          </p>
        </div>
        <div class='info__item'>
          <div class='info__icon margin_medium' />
          <p class='title_sub margin_medium'>Integritee AG</p>
          <p class='paragraph_large'>Technoparkstrasse 18005, Zurich, Switzerland</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.info {
  &__link {
    display: block;
    line-height: 150%;
    margin-bottom: 14px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__column {
    width: 500px;

    @include slg {
      width: 350px;
    }

    @include md {
      width: 100%;

      br {
        display: none;
      }
    }
  }

  &__row {
    display: block;

    @include md {
      display: flex;
    }

    @include xsm {
      display: block;
    }
  }

  &__icon {
    width: 48px;
    height: 48px;
    background: url("@/assets/img/contacts/contact.svg");
    background-size: cover;

    @include sm {
      width: 32px;
      height: 32px;
    }
  }

  &__item {
    margin-bottom: 32px;

    @include md {
      width: 384px;
      margin-bottom: 0;
      margin-right: 32px;
    }

    @include sm {
      width: 254px;
    }

    @include xsm {
      margin-bottom: 32px;
      margin-right: 0;
    }

    &:nth-child(2) {
      .info__icon {
        background: url("@/assets/img/contacts/address-icon.svg");
        background-size: cover;
      }
    }
  }
}
</style>
