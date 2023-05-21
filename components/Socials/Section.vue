<template>
  <section id="socials">
    <div class="block socials">
      <div class="container">
        <div class="row jcsb socials__row">
          <div class="socials__text">
            <h2 class="title title_h2 margin_medium socials__title">
              We're Integritee
            </h2>
            <p class="paragraph paragraph_medium socials__description">
              Whether you’re a developer, investor, or Web 3.0 enthusiast, get
              <br />
              in touch to learn more about our tools and solutions
            </p>
          </div>
          <div class="column_medium socials__list">
            <a href="#" class="socials__list-item">
              <Telegram class="socials__list-item-icon margin_medium" />
              <span class="socials__list-item-name">Telegram</span>
            </a>
            <a href="#" class="socials__list-item">
              <Discord class="socials__list-item-icon margin_medium" />
              <span class="socials__list-item-name">Discord</span>
            </a>
            <a href="#" class="socials__list-item">
              <Twitter class="socials__list-item-icon margin_medium" />
              <span class="socials__list-item-name">Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import Discord from '@/assets/img/socials/discord.svg'
import Twitter from '@/assets/img/socials/twitter.svg'
import Telegram from '@/assets/img/socials/telegram.svg'
</script>
<style lang="scss" scoped>
.socials {
  &__description {
    line-height: 230%;
  }
  &__row {
    gap: 60px;
  }
  &__list {
    display: flex;
    gap: 20px;
  }
  &__list-item-icon {
    width: 48px;
    height: 48px;
    display: block;
  }
  &__list-item-name {
    font-size: $pDef;
  }
  &__list-item {
    width: 33.33333%;
    background: rgba(81, 81, 81, 0.24);
    backdrop-filter: blur(12px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 24px;
    transition: 0.3s ease;
    &:hover {
      background: rgba(120, 120, 120, 0.24);
    }
  }
}
</style>
