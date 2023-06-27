import { YoastSeo } from './seo'

interface PostAcf {
  short_description: string
}

interface PostEmbeds {
  'wp:featuredmedia'?: { link: string }[]
}

export interface Post {
  id: number
  slug: string
  date: string
  title: {
    rendered: string
  }
  content: {
    rendered: string
  }
  featured_media?: number
  categories: number[]
  acf: PostAcf
  yoast_head_json: YoastSeo
  _embedded: PostEmbeds
}
