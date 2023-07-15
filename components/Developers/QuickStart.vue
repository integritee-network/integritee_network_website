<template>
  <div class="building block">
    <div class='container'>
      <h2 class='title title_h2'>Quickstart tutorial</h2>
      <p class='paragraph paragraph_medium margin_large'>Learn how to build an Integritee DApp in minutes!</p>
      <div class='row jcsb building__row'>
        <div v-for='(item, index) in items' :key='index' class='building__item'>
          <component :is='item.img' />
          <p class='title title_sub building__item-title'>{{ item.title }}</p>
          <p class='paragraph paragraph_medium'><a :href='item.link' target='_blank'>{{ item.linkText }}</a> {{ item.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import FirstIcon from "@/assets/img/developers/first-icon.svg";
import SecondIcon from "@/assets/img/developers/second-icon.svg";
import ThirdIcon from "@/assets/img/developers/third-icon.svg";
import FourthIcon from "@/assets/img/developers/fourth-icon.svg";
import { READ_LINK, PLAY_LINK, WRITE_LINK, DEPLOY_LINK } from '@/configs/app.config';
const items = [
  {
    title: 'Step 1',
    text: 'the intro about our SDK and what it offers',
    img: FirstIcon,
    link: READ_LINK,
    linkText: 'Read',
  },
  {
    title: 'Step 2',
    text: 'through our Sidechain tutorial to get a local setup working',
    img: SecondIcon,
    link: PLAY_LINK,
    linkText: 'Play',
  },
  {
    title: 'Step 3',
    text: 'your own logic',
    img: ThirdIcon,
    link: WRITE_LINK,
    linkText: 'Write',
  },
  {
    title: 'Step 4',
    text: 'your dApp publicly',
    img: FourthIcon,
    link: DEPLOY_LINK,
    linkText: 'Deploy',
  },
]
</script>
<style lang="scss" scoped>
.building {
  position: relative;
  &__row {
    @include md {
      flex-wrap: wrap;
    }
  }
  &__item {
    width: 258px;
    @include md {
      width: 325px;
      margin-bottom: 40px;
    }
    @include sm {
      width: 49%;
    }
    @include xsm {
      width: 40%;
    }
    &:nth-child(2) {
      width: 298px;
      @include md {
        width: 405px;
      }
      @include sm {
        width: 49%;
      }
      @include xsm {
        width: 54%;
      }
    }
    &:nth-child(3) {
      width: 103px;
      @include md {
        width: 325px;
        margin-bottom: 0;
      }
      @include sm {
        width: 49%;
      }
      @include xsm {
        width: 40%;
      }
    }
    &:nth-child(4) {
      width: 133px;
      @include md {
        width: 405px;
        margin-bottom: 0;
      }
      @include sm {
        width: 49%;
      }
      @include xsm {
        width: 54%;
      }
    }
    svg {
      display: block;
      width: 64px;
      height: 64px;
      margin-bottom: 24px;
      @include slg {
        width: 48px;
        height: 48px;
      }
      @include sm {
        width: 32px;
        height: 32px
      }
    }
    a {
      color: #5B92FF;
    }
  }
  &__item-title {
    margin-bottom: 8px;
  }
}
</style>
