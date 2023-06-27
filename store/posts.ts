import { ref } from 'vue'
import { defineStore } from 'pinia'
import useWpApi from '@/api/wordpress'
import { Post } from '~/types/post'

export const usePostsStore = defineStore('posts', () => {
  const posts = ref<Post[]>([])

  const wpApi = useWpApi()

  async function initPosts() {
    const { data, error } = await wpApi.getPosts({
      limit: 100,
    })
    if (data.value) posts.value = data.value
    return posts.value
  }

  async function getPostBySlug(slug: string): Promise<Post | null> {
    const storePost = posts.value.find((post) => post.slug === slug)
    if (storePost) return [storePost][0]
    const post = await wpApi.getPostBySlug(slug)
    if (post.data.value) return post.data.value[0]
    return null
  }

  async function getPostsByCat(category: number, exceptPost?: number) {
    if (!posts.value.length) await initPosts()
    return posts.value.filter((post) => {
      const condition = post.categories.includes(category)
      if (exceptPost) return condition && post.id !== exceptPost
      return condition
    })
  }

  return {
    posts,
    initPosts,
    getPostsByCat,
    getPostBySlug,
  }
})
