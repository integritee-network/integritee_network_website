<template>
  <section id="quick">
    <div class="quick block">
      <div class="container blur-gradient blur-gradient_top">
        <h2 class="title title_h2 margin_medium">Quick start guides</h2>
        <div class="paragraph paragraph_medium margin_large">Explore our guides to learn more about our tech</div>
        <div class="row quick__links-row margin_large">
          <a :href="GITHUB_LINK" class="btn btn_border quick__link">GitHub</a>
          <a :href="DOCS_LINK" class="btn btn_border quick__link">Docs</a>
        </div>
        <div class="quick__link-list">
          <LineLink text="What is the TEER Token" :link="TEER_TOKEN_LINK" />
          <LineLink text="How to setup Integritee infrastructure" :link="GOVERNANCE_LINK" />
          <LineLink text="Governance on Integritee Network" :link="HOW_TO_SETUP_LINK" />
          <LineLink text="Check out our Technology" :link="CHECK_TECH_LINK" />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import LineLink from '@/components/Global/LineLink.vue';
import {
  TEER_TOKEN_LINK,
  GOVERNANCE_LINK,
  HOW_TO_SETUP_LINK,
  CHECK_TECH_LINK,
  GITHUB_LINK,
  DOCS_LINK } from '@/configs/app.config';
</script>
<style lang="scss" scoped>
.quick {
  &__links-row {
    display: flex;
    gap: 15px;
  }

  .container {
    position: relative;
  }

  &__link-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 48px;

    @include md {
      display: block;
    }

    a {
      @include md {
        margin-bottom: 32px;

        &:last-child {
          margin-bottom: 0;
        }
      }

      @include sm {
        margin-bottom: 24px;
      }
    }
  }
}
</style>
