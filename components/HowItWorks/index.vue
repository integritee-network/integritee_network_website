<template>
  <div class="how-it-works">
    <div class='container'>
      <div class='how-it-works__title'>
        How it works
      </div>
      <div>
        <div v-for='item in items' class='how-it-works__item'>
          <div class='how-it-works__item-title'>
            {{ item.title }}
          </div>
          <div class='how-it-works__item-text'>
            {{ item.text }}
          </div>
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
  padding-top: 180px;
  &__title {
    font-family: 'WhyteInktrap';
    font-weight: 500;
    font-size: $tMd;
    line-height: 110%;
    color: #FFFFFF;
    margin-bottom: 48px;
  }
  &__item {
    position: relative;
    width: 600px;
    margin-bottom: 180px;
    &:last-child {
      margin-bottom: 0;
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
    margin-bottom: 24px;
    white-space:pre;
  }
  &__item-text {
    font-family: 'Inter';
    font-weight: 400;
    font-size: $pDef;
    line-height: 150%;
    color: #FFFFFF;
  }
}
</style>
