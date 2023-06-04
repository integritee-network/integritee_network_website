<template>
  <Hero />
  <section id="blog">
    <div class="blog block">
      <div class="container row blog-row">
        <div class="blog__nav blog-nav-column">
          <Nav />
        </div>
        <div class="blog-list">
          <New class="blog__new-item" />
          <New class="blog__new-item" />
          <New class="blog__new-item" />
          <New class="blog__new-item" />
          <New class="blog__new-item" />
          <New class="blog__new-item" />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import Hero from '@/components/Blog/Hero.vue'
import Nav from '@/components/Blog/Nav.vue'
import New from '@/components/Blog/New.vue'
</script>
<style lang="scss">
.blog-row {
  gap: 60px;

  @include lg {
    gap: 40px;
  }

  @include slg {
    display: block;
  }
}

.blog-nav-column {
  width: 360px;
  flex-shrink: 0;

  @include lg {
    width: 310px;
  }

  @include slg {
    width: auto;
  }
}

.blog-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 40px;

  @include sm {
    grid-column-gap: 10px;
  }

  @include xsm {
    display: block;
  }
}
</style>

<style lang="scss" scoped>
.blog {
  &__new-item {
    @include xsm {
      margin-bottom: 25px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
