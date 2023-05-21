<template>
  <div class="questions">
    <div class='container'>
      <div class='questions__icon'><Icon /></div>
      <div class='questions__title'>Questions about TEER?</div>
      <div class='questions__desc'>Read our Tokenomics paper to fully understand how TEER integrates with Integritee network and what its benefits and utility are</div>
      <div class='questions__row'>
        <div class='questions__row-text'>Teer Token is available on:</div>
        <div class='questions__row-icon'><Kraken /></div>
        <div class='questions__row-icon'><Gate /></div>
      </div>
      <button class='questions__button'>
        Start Building
      </button>
    </div>
  </div>
</template>

<script>
import Icon from "@/assets/img/teer/icon.svg";
import Kraken from "@/assets/img/teer/kraken.svg";
import Gate from "@/assets/img/teer/gate.svg";
export default {
  components: {
    Icon, Gate, Kraken
  }
}
</script>
<style lang="scss" scoped>
.questions {
  position: relative;
  padding-top: 180px;
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
    width: 750px;
    font-weight: 400;
    font-size: $pDef;
    line-height: 150%;
    text-align: center;
    color: #FFFFFF;
    margin:  0 auto;
    margin-bottom: 26px;
  }
  &__row {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 48px;
  }
  &__row-text {
    font-family: 'Inter';
    width: fit-content;
    font-weight: 500;
    font-size: 24px;
    line-height: 120%;
    color: #FFFFFF;
  }
  &__row-icon {
    width: 132px;
    margin-left: 18px;
    svg {
      width: 100%;
    }
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
