<template>
  <section id="roadmap" ref="root">
    <div class="roadmap block">
      <div class="container">
        <h2 class="title title_h2 margin_medium">Project roadmap</h2>
        <p class="roadmap__description margin_large paragraph paragraph_medium">Here’s what we’re building and just as
          importantly, what we’ve
          already built.</p>
        <div class="row roadmap__row" ref="parent">
          <div class="roadmap__list-years-wrapper">
            <div class="roadmap__list-years" :class="{ active: fixedNav, end: endNav }" ref="nav">
              <button v-for="(year, idx) in years" class="roadmap__item-year" :class="{ active: year.active }"
                type="button" @click="onYearClick(idx)" :key="year.year">
                {{ year.year }}
              </button>
            </div>
          </div>
          <div class="roadmap__list-text">
            <div v-for="(year, idx) in roadmap" ref="items" class="roadmap__item-text" :class="{ active: year.active }"
              :key="idx">
              <div v-for="(quartal, index) in year.info" class="roadmap__item-text-quartal"
                :class="{ full: quartal.type === 'long', mult: quartal.type === 'long' && quartal.content.length > 1 }"
                :key="index">
                <div class="roadmap__item-text-name">{{ quartal.name }}</div>
                <div class="roadmap__item-text-points-wrapper">
                  <span v-for="(point, pIndex) in quartal.content"
                    class="roadmap__item-text-point paragraph paragraph_medium" :key="pIndex">
                    {{ point }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import useRoadmap from '@/hooks/useRoadmap'
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useWindowSize, useWindowScroll } from '@vueuse/core'
import _ from 'lodash'
import { breakpoints } from '@/configs/app.config'

const { getYears, getInfoList, setActive } = useRoadmap()

const { height, width } = useWindowSize()
const { y } = useWindowScroll()

const items = ref<HTMLElement[]>([])
const parent = ref<HTMLElement | null>(null)
const nav = ref<HTMLElement | null>(null)
const root = ref<HTMLElement | null>(null)

const fixedNav = ref(false)
const endNav = ref(false)

const years = getYears()
const roadmap = getInfoList()

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

const onYearClick = (idx: number) => {
  if (!root.value) return
  if (width.value > breakpoints.sm) {
    window.scrollTo({ top: items.value[idx].offsetTop + root.value.offsetTop - height.value / 2 + items.value[idx].offsetHeight / 2, behavior: "smooth" })
  } else {
    window.scrollTo({ top: items.value[idx].offsetTop + root.value.offsetTop - 84, behavior: "smooth" })
  }
}

watch(y, (value) => {
  if (!parent.value || !nav.value || !root.value) return

  const middleHeight = height.value / 2

  if (width.value > breakpoints.sm) {
    const elementInMiddle = parent.value?.getBoundingClientRect().y + nav.value.offsetHeight / 2
    const elementInEnd = parent.value?.getBoundingClientRect().y + parent.value.offsetHeight - height.value / 2 - nav.value.offsetHeight / 2

    fixedNav.value = middleHeight >= elementInMiddle && elementInEnd > 0
    endNav.value = elementInEnd <= 0
  } else {
    const elementInEnd = parent.value?.getBoundingClientRect().y + parent.value.offsetHeight

    fixedNav.value = parent.value?.getBoundingClientRect().y <= 84
    endNav.value = elementInEnd <= 84
  }

  const clonedItems = _.clone(items.value)
  for (const [idx, item] of clonedItems.reverse().entries()) {
    if (item.getBoundingClientRect().y - height.value / 2 <= 0) {
      setActive(years[years.length - 1 - idx].year)
      if (width.value <= breakpoints.sm) {
        const value = fixedNav.value ? 13 : 0
        nav.value.scrollTo({ left: 89 * (years.length - 1 - idx) + value, behavior: "smooth" })
      }
      break
    }
  }
})

</script>
<style lang="scss" scoped>
.roadmap {
  &__row {
    gap: 20px;

    @include sm {
      position: relative;
      display: block;
    }
  }

  &__description {
    @include sm {
      margin-bottom: 32px;
    }
  }

  &__list-years {
    @include sm {
      margin-bottom: 10px;
      display: flex;
      gap: 8px;
      align-items: flex-start;
      scrollbar-width: none;
      overflow-y: hidden;
      transition: 0.4s;

      &::-webkit-scrollbar {
        display: none;
        height: 0;
      }
    }

    &.active {
      position: fixed;
      top: 50%;
      transform: translateY(-50%);

      @include sm {
        top: 72px;
        left: 0;
        background: rgba(81, 81, 81, 0.25);
        backdrop-filter: blur(4px);
        transform: none;
        padding: 8px 13px 8px 21px;
        z-index: 3;
      }
    }

    &.end {
      position: absolute;
      bottom: 0;
    }
  }

  &__list-years-wrapper {
    position: relative;

    @include sm {
      position: static;
    }
  }

  &__list-years-wrapper,
  &__list-years {
    width: 137px;

    @media screen and (max-height: 740px) and (min-width: 841px) {
      width: 121px;
    }

    @include sm {
      width: 100%;
      height: 56px;
    }
  }

  &__list-years {
    @include sm {
      width: 100%;
      height: 56px;
    }
  }

  &__list-years-wrapper {
    flex-shrink: 0;
  }

  &__item-year {
    width: 100%;
    font-size: 1.5em;
    margin-bottom: 20px;
    border-radius: 24px;
    background: rgba(81, 81, 81, 0.246);
    backdrop-filter: blur(38px);
    padding: 24px 0;
    border: 0;
    color: #fff;
    font-weight: 500;
    transition: .3s ease;
    cursor: pointer;

    @media screen and (max-height: 740px) and (min-width: 841px) {
      font-size: 1.125em;
      padding: 21px 0;
    }

    @include sm {
      font-size: .875em;
      padding: 12px 25px;
      flex-shrink: 0;
      width: auto;
      margin-bottom: 0;
      border-radius: 8px;
    }

    &.active {
      background: #5B92FF;
    }

    &:last-child {
      margin-bottom: 0;
    }

    &:hover {
      background: rgba(133, 133, 133, 0.25);
    }
  }

  &__item-text-name {
    font-size: 2em;
    margin-bottom: 32px;

    @include sm {
      font-size: 1.125em;
      margin-bottom: 18px;
    }
  }

  &__item-text-point {
    position: relative;
    padding-left: 25px;
    display: block;

    @include sm {
      padding-left: 20px;
      margin-bottom: 15px;
    }

    &:before {
      position: absolute;
      content: '';
      left: 9px;
      top: 11px;
      width: 5px;
      height: 5px;
      background: #fff;
      border-radius: 50%;

      @include sm {
        width: 3px;
        height: 3px;
        top: 10px;
      }
    }
  }

  &__item-text {
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    margin-bottom: 20px;
    opacity: 0.5;

    @include sm {
      display: block;
      margin-bottom: 10px;
    }

    &:last-child {
      margin-bottom: 0;
    }

    &.active {
      opacity: 1;
    }
  }

  &__item-text-quartal {
    padding: 60px;
    background: rgba(120, 120, 120, 0.25);
    backdrop-filter: blur(12px);
    border-radius: 24px;
    transition: .3s ease;

    @include sm {
      border-radius: 14px;
      padding: 40px;
      margin-bottom: 10px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    &.full {
      grid-area: 1 / 1 / 2 / 3;

      .roadmap__item-text-points-wrapper {

        .roadmap__item-text-point {
          width: 99%;

          @include sm {
            width: 100%;
          }
        }
      }

      &.mult {
        .roadmap__item-text-points-wrapper {
          column-count: 2;
          column-gap: 20px;

          @include sm {
            column-count: 1;
            column-gap: 0;
          }
        }
      }
    }
  }

}
</style>
