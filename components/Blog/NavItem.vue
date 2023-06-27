<template>
  <button v-if="!isLink" class="nav__item paragraph paragraph_medium" :class="{ active: activeId === cat.id }"
    type="button" @click="$emit('onActiveClick', cat.id)">
    <Icon class="nav__icon" /> {{ cat.name }}
  </button>
  <NuxtLink v-else :to="{ path: '/blog', query: { category: cat.slug } }" class="nav__item paragraph paragraph_medium">
    <Icon class="nav__icon" /> {{ cat.name }}
  </NuxtLink>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import All from '@/assets/img/blog/categories/all.svg'
import News from '@/assets/img/blog/categories/news.svg'
import Insights from '@/assets/img/blog/categories/insights.svg'
import Updates from '@/assets/img/blog/categories/updates.svg'
import Documentation from '@/assets/img/blog/categories/documentation.svg'
import { Category } from '~/types/category'

const props = defineProps<{
  cat: Category
  activeId: number | null
  isLink?: boolean
}>()


defineEmits<{
  (e: 'onActiveClick', id: number): void
}>()

const getCatIcon = (slug: string) => {
  switch (slug) {
    case 'news':
      return News
    case 'industry-insights':
      return Insights
    case 'platform-updates':
      return Updates
    case 'technical-documentation':
      return Documentation
    default:
      return All
  }
}

const Icon = computed(() => {
  return getCatIcon(props.cat.slug)
})
</script>
