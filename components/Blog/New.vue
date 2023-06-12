<template>
  <a href="#" class="new">
    <img src="http://c5com.com/wp/wp-content/uploads/2011/05/400x400.png" alt="New image" class="new__image" />
    <div class="row new__info">
      <span class="tag new__tag">News</span>
      <span class="date">June 3, 2023</span>
    </div>
    <p class="paragraph paragraph_large new__p">
      Monthly Wrap-Up March 2023: Product Releases, a Privacy Sidechain
      & More
    </p>
  </a>
</template>
<script setup lang="ts">

</script>
<style lang="scss" scoped>
.new {
  display: block;
  width: 100%;

  &__image {
    object-fit: cover;
    height: 225px;
    width: 100%;
    border-radius: 24px;
    margin-bottom: 32px;

    @include lg {
      height: 202px;
    }

    @include slg {
      height: 176px;
    }

    @include md {
      height: 146px;
    }

    @include sm {
      height: 304px;
    }

    @include xsm {
      height: 197px;
    }
  }

  &__p {
    line-height: 120%;
  }

  &__info {
    align-items: center;
    gap: 12px;
    margin-bottom: 18px;

    @include md {
      margin-bottom: 8px;
    }
  }
}
</style>