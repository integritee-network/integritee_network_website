<template>
  <Hero />
  <section id="blog" ref="root">
    <div class="blog block">
      <div class="container row blog-row blur-gradient blur-gradient_bottom" ref="parent">
        <div class="blog-nav-column">
          <div class="blog__nav-wrapper blog-nav-column" ref="nav">
            <Nav class="blog__nav" :activeId="activeCatId" @onActiveChange="handleActiveChange" />
          </div>
        </div>
        <div v-if="posts?.length" class="blog-list">
          <New v-for="post in posts" :post="post" class="blog__new-item" :key="post.id" />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'nuxt/app'
import Hero from '@/components/Blog/Hero.vue'
import Nav from '@/components/Blog/Nav.vue'
import New from '@/components/Blog/New.vue'
import { useWpApi } from '@/api/wordpress'
import { usePostsStore } from '@/store/posts'
import { useCategoriesStore } from '@/store/categories'
import { Post } from '@/types/post'
import { useWindowScroll, useWindowSize } from '@vueuse/core'
import { generateSEO } from '~/helpers/generateSEO'

generateSEO({
  title: 'Integritee Network - Blog',
  description: 'Our Latest News and Insights: Exploring the Frontiers of Web3 and Beyond. Stay Updated on the Exciting World of Web3 Technology and Innovations.'
})
// const wpApi = useWpApi()

const { y } = useWindowScroll()
const { height, width } = useWindowSize()

const route = useRoute()
const router = useRouter()

const postsStore = usePostsStore()
const catsStore = useCategoriesStore()

const parent = ref<HTMLElement | null>(null)
const nav = ref<HTMLElement | null>(null)
const root = ref<HTMLElement | null>(null)

const fixedNav = ref(false)
const endNav = ref(false)

const posts = ref<Post[] | null>([])

import { breakpoints } from '@/configs/app.config'

// const { data, error } = await wpApi.getPosts({})

// posts.value = data.value

const queryCat = route.query.category as string

const activeCatId = ref<number | null>(null)

if (queryCat) {
  const category = catsStore.getCatBySlug(queryCat)
  if (category) {
    activeCatId.value = category.id
    posts.value = await postsStore.getPostsByCat(category.id)
  } else {
    posts.value = await postsStore.initPosts()
  }
} else {
  posts.value = await postsStore.initPosts()
}

const handleActiveChange = async (activeId: number | null) => {
  if (activeId === activeCatId.value) return
  activeCatId.value = activeId
  if (activeId) {
    const category = catsStore.getCatById(activeId)
    router.replace({ query: { category: category?.slug } })
  } else {
    router.replace({ query: {} })
  }
  // const catPosts = await wpApi.getPosts({
  //   cat: activeId,
  // })
  // console.log(catPosts.data.value)
  // @ts-ignore
  // posts.value = catPosts.data.value

  if (activeId !== null) posts.value = await postsStore.getPostsByCat(activeId)
  else posts.value = postsStore.posts

  if (!parent.value || !nav.value || !root.value || width.value <= breakpoints.slg) return

  const middleHeight = height.value / 2

  const elementInMiddle = parent.value?.getBoundingClientRect().y + nav.value.offsetHeight / 2
  const elementInEnd = parent.value?.getBoundingClientRect().y + parent.value.offsetHeight - height.value / 2 - nav.value.offsetHeight / 2

  fixedNav.value = middleHeight >= elementInMiddle && elementInEnd > 0
  endNav.value = elementInEnd <= 0
}

watch(y, (value) => {
  if (!parent.value || !nav.value || !root.value || width.value <= breakpoints.slg) return

  const middleHeight = height.value / 2

  const elementInMiddle = parent.value?.getBoundingClientRect().y + nav.value.offsetHeight / 2
  const elementInEnd = parent.value?.getBoundingClientRect().y + parent.value.offsetHeight - height.value / 2 - nav.value.offsetHeight / 2

  fixedNav.value = middleHeight >= elementInMiddle && elementInEnd > 0
  endNav.value = elementInEnd <= 0
})

watch(route, value => {
  if (value.query.category === undefined) {
    activeCatId.value = null
    posts.value = postsStore.posts
  }
})
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
  min-height: 360px;

  @include lg {
    width: 310px;
  }

  @include slg {
    width: auto;
    min-height: auto;
  }
}

.blog-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 40px;
  width: 100%;

  @include slg {
    grid-template-columns: repeat(3, 1fr);
  }

  @include sm {
    grid-column-gap: 10px;
    grid-template-columns: repeat(1, 1fr);
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

  &__nav-wrapper {
    position: sticky;
    top: 180px;
    @include lg {
      top: unset;
      position: relative;
    }
    //&.active {
    //  position: fixed;
    //  top: 50%;
    //  transform: translateY(-50%);
    //
    //  @include lg {
    //    position: static;
    //  }
    //}

    &.end {
      position: absolute;
      bottom: 0;
    }
  }
}
</style>
