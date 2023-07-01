<template>
  <NuxtLink :to="`/blog/${post.slug}`" class="new">
    <img :src="image" alt="New image" class="new__image" />
    <div class="row new__info">
      <span class="tag new__tag">{{ catName }}</span>
      <span class="date">{{ date }}</span>
    </div>
    <p class="paragraph paragraph_large new__p">
      {{ post.title.rendered }}
    </p>
  </NuxtLink>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { Post } from '@/types/post'
import { parse } from '@/helpers/date'
import { useCategoriesStore } from '@/store/categories'

const props = defineProps<{ post: Post }>()

const { post } = props

const catsStore = useCategoriesStore()

const date = computed(() => parse(post.date))
const image = computed(() => {
  if (post._embedded) {
    if (post._embedded['wp:featuredmedia'])
      return post._embedded['wp:featuredmedia'][0].link
  }
  return 'http://c5com.com/wp/wp-content/uploads/2011/05/400x400.png'
})

const catName = computed(() => catsStore.getCatById(post.categories[0])?.name)
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
      height: auto;
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