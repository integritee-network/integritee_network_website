<template>
  <div class="building block">
    <div class='container blur-gradient blur-gradient_extra-top'>
      <div class='building__icon'>
        <Icon />
      </div>
      <h2 class='title title_h2 margin_medium building__title'>What will you create?</h2>
      <p class='paragraph paragraph_medium margin_large'>If the major problems associated with programming on the
        blockchain solved...</p>
      <a href="#" class="btn btn_gradient">
        Start Building
      </a>
    </div>
  </div>
</template>

<script>
import Icon from "@/assets/img/technology/icon.svg";
export default {
  components: {
    Icon
  }
}
</script>
<style lang="scss" scoped>
.building {
  position: relative;
  margin-top: 235px;
  text-align: center;

  @include lg {
    margin-top: 265px;
  }

  @include slg {
    margin-top: 165px;
  }

  @include sm {
    margin-top: 100px;
  }

  &__icon {
    position: relative;
    width: 64px;
    height: 64px;
    margin: 0 auto;
    margin-bottom: 48px;

    @include slg {
      width: 48px;
      height: 48px;
      margin-bottom: 32px;
    }

    @include sm {
      width: 32px;
      height: 32px;
      margin-bottom: 24px;
    }

    svg {
      width: 100%;
    }
  }

  &__title {
    font-family: 'WhyteInktrap';
  }
}
</style>
