<template>
  <div class="building block">
    <div class='container'>
      <h2 class='title title_h2'>Quickstart tutorial</h2>
      <p class='paragraph paragraph_medium margin_large'>Learn how to build an Integritee DApp in minutes!</p>
      <div class='row jcsb building__row'>
        <div v-for='(item, index) in items' :key='index' class='building__item'>
          <component :is='item.img' />
          <p class='title title_sub building__item-title'>{{ item.title }}</p>
          <p class='paragraph paragraph_medium'><a :href='item.link'>{{ item.linkText }}</a> {{ item.text }}</p>
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
        text: 'the intro about our SDK and what it offers',
        img: FirstIcon,
        link: 'https://docs.integritee.network/3-our-technology/3.1-software-development-kit',
        linkText: 'Read',
      },
      {
        title: 'Step 2',
        text: 'through our Sidechain tutorial to get a local setup working',
        img: SecondIcon,
        link: 'https://docs.integritee.network/4-development/4.6-demos/4.6.1-sidechain-demo',
        linkText: 'Play',
      },
      {
        title: 'Step 3',
        text: 'your own logic',
        img: ThirdIcon,
        link: 'https://docs.integritee.network/4-development/4.4-sdk/4.4.4-custom-business-logic-stf',
        linkText: 'Write',
      },
      {
        title: 'Step 4',
        text: 'your dApp publicly',
        img: FourthIcon,
        link: 'https://docs.integritee.network/5-nodes-and-infrastructure/5.2-how-to-set-up-and-run-a-sidechain-or-tocw-node',
        linkText: 'Deploy',
      },
    ]

    return { items }
  }
}
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
