<template>
  <div v-if="!isLinks" class="nav" ref="nav">
    <button class="nav__item paragraph paragraph_medium" :class="{ active: activeId === null }" type="button"
      @click="$emit('onActiveChange', null)">
      <All class="nav__icon" /> All
    </button>
    <NavItem v-for="cat in catsStore.cats" :key="cat.id" :cat="cat" :activeId="activeId"
      @onActiveClick="handleActiveClick" />
  </div>
  <div v-else class="nav">
    <NuxtLink :to="{ path: '/blog' }" class="nav__item paragraph paragraph_medium" :class="{ active: activeId === null }">
      <All class="nav__icon" /> All
    </NuxtLink>
    <NavItem :isLink="true" v-for="cat in catsStore.cats" :key="cat.id" :cat="cat" :activeId="activeId"
      @onActiveClick="handleActiveClick" />
  </div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import All from '@/assets/img/blog/categories/all.svg'
import { useCategoriesStore } from '~/store/categories'
import NavItem from './NavItem.vue'

const catsStore = useCategoriesStore()

defineProps<{ activeId: number | null, isLinks?: boolean }>()

const nav = ref<HTMLDivElement | null>(null)

const emit = defineEmits<{
  (e: 'onActiveChange', id: number | null): void
}>()

const handleActiveClick = (id: number) => {
  emit('onActiveChange', id)
}

const mouseWheelFunc = (event: any) => {
  if (!event.deltaY) return

  const scrollLeft = event.currentTarget.scrollLeft
  const scrollRight = event.currentTarget.scrollWidth - scrollLeft - event.currentTarget.clientWidth

  if (event.deltaY > 0 && scrollRight === 0) return
  if (event.deltaY < 0 && scrollLeft === 0) return

  event.currentTarget.scrollLeft += event.deltaY + event.deltaX
  event.preventDefault()
}

onMounted(() => {
  nav.value?.addEventListener('wheel', mouseWheelFunc)
})

onUnmounted(() => {
  nav.value?.removeEventListener('wheel', mouseWheelFunc)
})
</script>
<style lang="scss">
.nav {
  @include slg {
    display: flex;
    gap: 12px;
    margin-bottom: 32px;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      height: 0;
    }

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
    transition: 0.3s ease;
    cursor: pointer;

    @include slg {
      padding: 16px 24px;
      margin-bottom: 0;
      flex-shrink: 1;
      width: auto;
      flex-shrink: 0;
    }

    &.active {
      background: #5B92FF;
    }

    &:hover {
      &:not(&.active) {
        background: rgba(120, 120, 120, 0.24);
      }
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