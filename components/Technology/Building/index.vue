<template>
  <div class="building">
    <div class='container'>
      <div class='building__icon'><Icon /></div>
      <div class='building__title'>What will you create?</div>
      <div class='building__desc'>If the major problems associated with programming on the blockchain solved...</div>
      <button class='building__button'>
        Start Building
      </button>
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
  padding-top: 235px;
  &__icon {
    position: relative;
    width: 64px;
    height: 64px;
    margin:  0 auto;
    margin-bottom: 48px;
    svg {
      width: 100%;
    }
  }
  &__title {
    font-family: 'WhyteInktrap';
    font-weight: 500;
    font-size: $tMd;
    line-height: 110%;
    color: #FFFFFF;
    text-align: center;
    margin-bottom: 24px;
  }
  &__desc {
    font-family: 'Inter';
    font-weight: 400;
    font-size: $pDef;
    line-height: 150%;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 48px;
  }
  &__button {
    position: relative;
    display: block;
    width: 165px;
    height: 55px;
    background: linear-gradient(84.58deg, #559CFF 0%, #9E20FE 100%);
    backdrop-filter: blur(30px);
    border-radius: 12px;
    font-family: 'Inter';
    font-weight: 500;
    font-size: $pDef;
    line-height: 150%;
    color: #FFFFFF;
    text-align: center;
    border: 0;
    cursor: pointer;
    margin:  0 auto;
    transition: 0.4s;
    &:hover {
      background: linear-gradient(0deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)), linear-gradient(84.58deg, #559CFF 0%, #9E20FE 100%);
    }
  }
}
</style>
