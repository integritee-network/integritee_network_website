import { ref } from 'vue'
import { defineStore } from 'pinia'
import useWpApi from '@/api/wordpress'
import { Category } from '~/types/category'
import { UseCaseTag } from '~/types/useCase'

export const useCategoriesStore = defineStore('categories', () => {
  const cats = ref<Category[]>([])
  const useCasesTags = ref<UseCaseTag[]>([])
  const wpApi = useWpApi()

  async function initCategories() {
    const { data, error } = await wpApi.getCategories()
    if (data.value) cats.value = data.value
  }

  async function initUseCasesTags() {
    const { data, error } = await wpApi.getUseCasesTaxonomies()
    if (data.value) useCasesTags.value = data.value
  }

  function getCatById(id: number) {
    return cats.value.find((cat) => cat.id === id)
  }

  function getCatBySlug(slug: string) {
    return cats.value.find((cat) => cat.slug === slug)
  }

  function getUseCaseTagById(id: number) {
    return useCasesTags.value.find((tag) => tag.id === id)
  }

  return {
    cats,
    useCasesTags,
    initCategories,
    initUseCasesTags,
    getCatById,
    getUseCaseTagById,
    getCatBySlug,
  }
})
