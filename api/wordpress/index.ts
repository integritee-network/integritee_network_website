import { Category } from '~/types/category'
import { Post } from '~/types/post'
import { UseCase, UseCaseTag } from '~/types/useCase'
import { useAsyncData } from 'nuxt/app'
import { useRuntimeConfig } from 'nuxt/app'

interface QueryConfig {
  method: 'post' | 'get'
  body?: any
}

interface IWpApi {
  post<T>(endpoint: string, body: any): Promise<T>
  get<T>(endpoint: string, body: any): Promise<T>
  getPosts({ limit }: { limit?: number }): Promise<Post[]>
  getCategories(): Promise<Category[]>
  getUseCases(): Promise<UseCase[]>
}

export const useWpApi = () => {
  const runtimeConfig = useRuntimeConfig()
  const WP_API_URL = runtimeConfig.public.apiBase

  return {
    async post<T>(endpoint: string, body = null) {
      const config: QueryConfig = {
        method: 'post',
      }

      if (body) {
        config.body = body
      }

      return useAsyncData<T>(endpoint, () => $fetch(endpoint, config))
    },

    async get<T>(endpoint: string, body: any = null) {
      const config: QueryConfig = {
        method: 'get',
      }

      if (body) {
        config.body = body
      }
      return useAsyncData<T>(endpoint, () => $fetch(endpoint, config))
    },

    async getPosts({
      limit = 10,
      cat,
    }: {
      limit?: number
      cat?: number | null
    }) {
      let url = `${WP_API_URL}/posts?_fields=_embedded,title,id,slug,date,content,categories,acf,yoast_head_json,_links.wp:featuredmedia&_embed=wp:featuredmedia&per_page=${limit}`
      if (cat) url += `&categories=${cat}`
      return this.get<Post[]>(url)
    },

    async getPostBySlug(slug: string) {
      return this.get<Post[]>(
        `${WP_API_URL}/posts?_fields=_embedded,title,id,slug,date,content,categories,acf,yoast_head_json,_links.wp:featuredmedia&_embed=wp:featuredmedia&slug=${slug}`
      )
    },

    async getCategories() {
      return this.get<Category[]>(
        `${WP_API_URL}/categories?_fields=id,name,slug`
      )
    },

    async getUseCases() {
      return this.get<UseCase[]>(
        `${WP_API_URL}/use-case?_fields=_embedded,id,use-cases-tag,title,acf,_links.wp:featuredmedia&_embed=wp:featuredmedia`
      )
    },

    async getUseCasesTaxonomies() {
      return this.get<UseCaseTag[]>(
        `${WP_API_URL}/use-cases-tag?_fields=id,name`
      )
    },
  }
}

export default useWpApi
