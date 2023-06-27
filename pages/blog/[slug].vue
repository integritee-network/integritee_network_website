<template>
  <section id="new">
    <div class="new new-root block">
      <div class="container row blog-row">
        <div class="blog__nav blog-nav-column">
          <Nav :activeId="post.categories[0]" :isLinks="true" />
        </div>
        <div class="new__article">
          <div class="new__article-padding block">
            <h1 class="title new__title margin_medium">
              {{ post.title.rendered }}
            </h1>
            <div class="row new__info">
              <span v-if="catName" class="tag">{{ catName }}</span>
              <span class="date">{{ date }}</span>
            </div>
            <img :src="image" class="new__image margin_large" alt="New image" />
            <div class="new__content" v-html="post.content.rendered"></div>
          </div>
          <div v-if="related.length" class="new__news">
            <h2 class="title new__title margin_medium">You Might Also Like</h2>
            <div class="new__news-list blog-list">
              <New v-for="post in related" :post="post" class="new__news-list-item" :key="post.id" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { parse } from '@/helpers/date'
import Nav from '@/components/Blog/Nav.vue'
import New from '@/components/Blog/New.vue'
import { useCategoriesStore } from '@/store/categories'
import { usePostsStore } from '@/store/posts'
import { useRoute } from 'nuxt/app'

const postsStore = usePostsStore()
const catsStore = useCategoriesStore()

const route = useRoute()

const slug = route.params.slug as string
const post = await postsStore.getPostBySlug(slug)

if (!post) throw { statusCode: 404, message: 'Post not found' }

const date = computed(() => parse(post.date))

const catName = computed(() => catsStore.getCatById(post.categories[0])?.name)

const image = computed(() => {
  if (post._embedded) {
    if (post._embedded['wp:featuredmedia'])
      return post._embedded['wp:featuredmedia'][0].link
  }
  return 'http://c5com.com/wp/wp-content/uploads/2011/05/400x400.png'
})

const related = await postsStore.getPostsByCat(post.categories[0], post.id)
</script>
<style lang="scss">
.new-root {
  padding-top: 90px;
}

.new {
  &__title {
    font-size: $tDef;
    font-weight: 500;

    @include slg {
      font-size: 2.25em;
    }

    @include sm {
      font-size: 1.75em;
    }
  }

  &__info {
    margin-bottom: 32px;
    gap: 18px;
    align-items: center;
  }

  &__article {
    width: 100%;

    img {
      position: relative;
      left: -30px;
      width: calc(100% + 30px);
      border-radius: 24px;

      @include sm {
        border-radius: 14px;
        position: static;
        width: 100%;
      }
    }
  }

  &__article-padding {
    padding: 0 30px;

    @include sm {
      padding: 0;
    }
  }

  &__content {
    h2 {
      font-size: $tSmd;
      margin-bottom: 28px;
      margin-top: 22px;
      line-height: 120%;

      @include sm {
        margin: 20px 0;
        font-size: $sm_tSmd;
      }
    }

    h3 {
      font-size: $pLg;
      margin-bottom: 22px;
      margin-top: 22px;
      line-height: 120%;

      @include sm {
        margin: 16px 0;
        font-size: $sm_pLg;
      }
    }

    p {
      font-size: $pDef;
      margin-bottom: 16px;
      line-height: 150%;

      @include slg {
        font-size: 1em;
      }

      @include sm {
        font-size: 0.875em;
        margin-bottom: 12px;
      }
    }

    a {
      color: #5b92ff;
      transition: 0.3s ease;

      &:hover {
        color: #7ca8ff;
      }
    }

    img {
      margin: 22px 0;
      object-fit: cover;

      @include sm {
        margin: 18px 0;
      }
    }
  }

  &__news-list-item {
    @include xsm {
      margin-bottom: 25px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>