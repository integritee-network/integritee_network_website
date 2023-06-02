<template>
  <div class="how-it-works block">
    <div class='container'>
      <h2 class='title title_h2 margin_large'>
        How it works
      </h2>
      <div>
        <div v-for='(item, index) in items' :key='index' class='block how-it-works__item'>
          <p class='how-it-works__item-title margin_medium'>
            {{ item.title }}
          </p>
          <p class='paragraph paragraph_medium'>
            {{ item.text }}
          </p>
          <component :is='item.img' />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  setup() {}
};
</script>
<style lang="scss" scoped>
.how-it-works {
  position: relative;
  &__item {
    position: relative;
    width: 600px;
    @include lg {
      width: 560px;
    }
    @include slg {
      width: 480px;
    }
    @include md {
      width: 350px;
    }
    @include sm {
      width: 100%;
      &:first-child {
        margin-top: 422px;
      }
      &:nth-child(2) {
        margin-top: 537px;
      }
      &:nth-child(3) {
        margin-top: 448px;
      }
      &:nth-child(4) {
        margin-top: 534px;
      }
    }
    @include xsm {
      &:first-child {
        margin-top: 316px;
      }
      &:nth-child(2) {
        margin-top: 470px;
      }
      &:nth-child(3) {
        margin-top: 380px;
      }
      &:nth-child(4) {
        margin-top: 459px;
      }
    }
    svg {
      overflow: unset;
    }
  }
  &__item-title {
    font-family: 'Inter';
    font-weight: 500;
    font-size: $tDef;
    line-height: 110%;
    color: #FFFFFF;
    @include slg {
      font-size: $sm_tMd;
    }
    @include sm {
      font-size: 1.688em;
    }
  }
}
</style>
