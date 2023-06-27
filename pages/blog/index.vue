<template>
  <Hero />
  <section id="blog">
    <div class="blog block">
      <div class="container row blog-row">
        <div class="blog__nav blog-nav-column">
          <Nav :activeId="activeCatId" @onActiveChange="handleActiveChange" />
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
import { useSeoMeta } from '#imports'

useSeoMeta({
  title: '',
  ogTitle: '',
  description: '',
  ogDescription: '',
})

// const wpApi = useWpApi()

const route = useRoute()
const router = useRouter()

const postsStore = usePostsStore()
const catsStore = useCategoriesStore()

const posts = ref<Post[] | null>([])

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
}

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
  width: 100%;

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
