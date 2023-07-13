interface UseCaseAcf {
  author: string
  author_photo: string
  problem: string
  quote: string
  role: string
  solution: {
    point: string
  }[]
}

interface PostEmbeds {
  'wp:featuredmedia'?: { link: string }[]
}

export interface UseCase {
  id: number
  title: {
    rendered: string
  }
  featured_media?: number
  'use-cases-tag'?: number[]
  acf: UseCaseAcf
  _embedded: PostEmbeds
}

export interface UseCaseTag {
  id: number
  name: string
}
