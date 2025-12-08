<template>
  <div class="item row">
    <div class="item__text">
      <span
        v-if="tag"
        class="item__text-tag margin_medium paragraph paragraph_small"
        >{{ tag?.name }}</span
      >
      <div class="item__text-title margin_large">
        {{ useCase.title.rendered }}
      </div>
      <div class="item__text-subtitle margin_xmedium paragraph paragraph_large">
        Problem
      </div>
      <p class="paragraph paragraph_medium margin_medium">
        {{ useCase.acf.problem }}
      </p>
      <div class="item__text-subtitl margin_xmedium paragraph paragraph_large">
        Solution
      </div>
      <p
        v-for="(point, idx) in useCase.acf.solution"
        class="item__text-solution-point"
        :key="idx"
      >
        {{ point.point }}
      </p>
    </div>
    <div v-if='!useCase.acf.quote' class='item__image'>
      <img :src='image' />
    </div>
    <div v-if='useCase.acf.quote' class="item__quote">
      <quote class="item__quote-text">{{ useCase.acf.quote }}</quote>
      <div class="row item__quote-author">
        <div v-if='authorPhoto' class="item__quote-author-photo">
          <Avatar :image="authorPhoto" />
        </div>
        <div class="item__quote-author-name paragraph_large">
          {{ useCase.acf.author }}<br />
          {{ useCase.acf.role }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import Avatar from './Avatar.vue'
import { UseCase } from '@/types/useCase'
import { useCategoriesStore } from '~/store/categories'

const props = defineProps<{ useCase: UseCase }>()

const { useCase } = props

const catsStore = useCategoriesStore()

const authorPhoto = computed(() => {
    if (useCase.acf.author_photo)
      return useCase.acf.author_photo
  return false
})

const image = computed(() => {
  if (useCase._embedded) {
    if (useCase._embedded['wp:featuredmedia'])
      return useCase._embedded['wp:featuredmedia'][0].link
  }
  return false
})

const tag = computed(() => {
  if (useCase['use-cases-tag']?.length)
    return catsStore.getUseCaseTagById(useCase['use-cases-tag'][0])
})
</script>
<style lang="scss" scoped>
.item {
  gap: 60px;
  margin-bottom: 83px;

  @media screen and (max-width: 1366px) {
    margin-bottom: 115px;
  }

  @media screen and (max-width: 1200px) {
    margin-bottom: 40px;
  }

  @media screen and (max-width: 1200px) {
    gap: 30px;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column-reverse;
  }

  @media screen and (max-width: 840px) {
    gap: 18px;
  }

  &:last-child {
    margin-bottom: 0;
  }

  &__text {
    width: 600px;
    flex-shrink: 0;

    @media screen and (max-width: 1366px) {
      width: 480px;
    }

    @media screen and (max-width: 1200px) {
      width: 475px;
    }

    @media screen and (max-width: 1024px) {
      width: 100%;
    }
  }

  &__image {
    width: 590px;
    @media screen and (max-width: 1366px) {
      width: 580px;
    }

    @media screen and (max-width: 1200px) {
      width: 475px;
    }

    @media screen and (max-width: 1024px) {
      width: 460px;
    }

    @media screen and (max-width: 840px) {
      width: 360px;
    }

    img {
      display: block;
      width: 100%;
      height: 611px;
      border-radius: 24px;
      object-fit: cover;

      @media screen and (max-width: 1200px) {
        height: 500px;
      }

      @media screen and (max-width: 1024px) {
        height: 539px;
      }

      @media screen and (max-width: 840px) {
        border-radius: 18px;
        height: 420px;
      }

      @media screen and (max-width: 420px) {
        height: 369px;
      }
    }
  }

  &__quote {
    width: 590px;
    background: rgba(81, 81, 81, 0.246);
    border-radius: 24px;
    backdrop-filter: blur(38.335px);
    padding: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 50px;
    align-self: self-start;

    @media screen and (max-width: 1366px) {
      width: 580px;
    }

    @media screen and (max-width: 1200px) {
      width: 475px;
    }

    @media screen and (max-width: 1024px) {
      width: 460px;
    }

    @media screen and (max-width: 840px) {
      width: 360px;
      padding: 40px;
      border-radius: 18px;
    }

    @media screen and (max-width: 420px) {
      width: 100%;
      gap: 30px;
    }
  }

  &__quote-author-photo {
    width: 61px;
    height: 61px;
    flex-shrink: 0;

    svg {
      width: 100%;
    }
  }

  &__quote-text {
    font-size: 2.125em;
    line-height: 120%;
    font-weight: 500;

    @media screen and (max-width: 1200px) {
      font-size: 1.625em;
    }

    @media screen and (max-width: 840px) {
      font-size: 1.25em;
    }
  }

  &__text-tag {
    display: inline-block;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 9px 12px;

    @media screen and (max-width: 1200px) {
      margin-bottom: 24px;
    }

    @media screen and (max-width: 1024px) {
      margin-bottom: 18px;
    }
  }

  &__text-title {
    font-size: 3em;
    font-weight: 500;
    font-family: 'WhyteInktrap';
    line-height: 120%;

    @media screen and (max-width: 1200px) {
      font-size: 2.25em;
    }
  }

  &__text-solution-point {
    position: relative;
    padding-left: 25px;
    margin-bottom: 8px;

    &:last-child {
      margin-bottom: 0;
    }

    &:before {
      position: absolute;
      content: '';
      left: 9px;
      top: 9px;
      width: 5px;
      height: 5px;
      background: #fff;
      border-radius: 50%;
    }
  }

  &__quote-author {
    display: flex;
    gap: 20px;
    align-items: center;
  }
}
</style>
