<template>
  <section id="roadmap">
    <div class="roadmap block">
      <div class="container">
        <h2 class="title title_h2 margin_medium">Project roadmap</h2>
        <p class="roadmap__description margin_large paragraph paragraph_medium">Here’s what we’re building and just as
          importantly, what we’ve
          already built</p>
        <div class="row roadmap__row">
          <div class="roadmap__list-years">
            <button v-for="year in years" class="roadmap__item-year" :class="{ active: year.active }" type=" button"
              :key="year.year">
              {{ year.year }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import useRoadmap from '@/hooks/useRoadmap'

const { getYears } = useRoadmap()

const years = getYears()
</script>
<style lang="scss" scoped></style>