<template>
  <div class="nav">
    <button class="nav__item paragraph paragraph_medium" type="button">
      <All class="nav__icon" /> All
    </button>
    <button class="nav__item paragraph paragraph_medium" type="button">
      <News class="nav__icon" /> News
    </button>
    <button class="nav__item paragraph paragraph_medium" type="button">
      <Insights class="nav__icon" /> Industry Insights
    </button>
    <button class="nav__item paragraph paragraph_medium" type="button">
      <Updates class="nav__icon" /> Platform updates
    </button>
    <button class="nav__item paragraph paragraph_medium" type="button">
      <Documentation class="nav__icon" /> Technical documentation
    </button>
  </div>
</template>
<script setup>
import All from '@/assets/img/blog/categories/all.svg'
import News from '@/assets/img/blog/categories/news.svg'
import Insights from '@/assets/img/blog/categories/insights.svg'
import Updates from '@/assets/img/blog/categories/updates.svg'
import Documentation from '@/assets/img/blog/categories/documentation.svg'
</script>
<style lang="scss">
.nav {
  @include slg {
    display: flex;
    gap: 12px;
    margin-bottom: 32px;
    overflow-x: scroll;

    @include sm {
      gap: 8px;
    }
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 14px;
    background: rgba(81, 81, 81, 0.25);
    backdrop-filter: blur(38.335px);
    border: 0;
    gap: 12px;
    color: #fff;
    padding: 18px 0;
    margin-bottom: 12px;

    @include slg {
      padding: 16px 24px;
      margin-bottom: 0;
      flex-shrink: 1;
      width: auto;
      flex-shrink: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__icon {
    width: 24px;
    height: 24px;
  }
}
</style>