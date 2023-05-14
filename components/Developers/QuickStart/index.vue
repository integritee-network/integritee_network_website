<template>
  <div class="building">
    <div class='container'>
      <div class='building__title'>Quickstart tutorial</div>
      <div class='building__text'>Learn how to build an Integritee DApp in minutes!</div>
      <div class='building__row'>
        <div v-for='item in items' class='building__item'>
          <component :is='item.img' />
          <div class='building__item-title'>{{ item.title }}</div>
          <div class='building__item-text'>{{ item.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FirstIcon from "@/assets/img/developers/first-icon.svg";
import SecondIcon from "@/assets/img/developers/second-icon.svg";
import ThirdIcon from "@/assets/img/developers/third-icon.svg";
import FourthIcon from "@/assets/img/developers/fourth-icon.svg";
export default {
  setup() {
    const items = [
      {
        title: 'Step 1',
        text: 'Read the intro about our SDK and what it offers',
        img: FirstIcon,
      },
      {
        title: 'Step 2',
        text: 'Play through our Sidechain tutorial to get a local setup working',
        img: SecondIcon,
      },
      {
        title: 'Step 3',
        text: 'Write your own logic',
        img: ThirdIcon,
      },
      {
        title: 'Step 4',
        text: 'Deploy  your dApp publicly',
        img: FourthIcon,
      },
    ]

    return { items }
  }
}
</script>
<style lang="scss" scoped>
.building {
  position: relative;
  padding-top: 180px;
  &__title {
    font-family: 'WhyteInktrap';
    font-weight: 500;
    font-size: $tMd;
    line-height: 110%;
    color: #FFFFFF;
    margin-bottom: 24px;
  }
  &__text {
    font-family: 'Inter';
    font-weight: 400;
    font-size: $pDef;
    line-height: 150%;
    color: #FFFFFF;
    margin-bottom: 56px;
  }
  &__row {
    display: flex;
    justify-content: space-between;
  }
  &__item {
    width: 258px;
    &:nth-child(2) {
      width: 298px;
    }
    &:nth-child(3) {
      width: 103px;
    }
    &:nth-child(4) {
      width: 133px;
    }
    svg {
      display: block;
      width: 64px;
      height: 64px;
      margin-bottom: 24px;
    }
  }
  &__item-title {
    font-family: 'Inter';
    font-weight: 500;
    font-size: 2em;
    line-height: 120%;
    color: #FFFFFF;
    margin-bottom: 8px;
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
