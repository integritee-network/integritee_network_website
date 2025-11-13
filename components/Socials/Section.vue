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
              in touch to learn more about our tools and solutions.
            </p>
          </div>
          <div class="column_medium socials__list">
            <a
              :href="TELEGRAM_LINK"
              target='_blank'
              class="socials__list-item"
            >
              <Telegram class="socials__list-item-icon" />
              <span class="socials__list-item-name">Telegram</span>
            </a>
            <a
              :href="DISCORD_LINK"
              target='_blank'
              class="socials__list-item"
            >
              <Discord class="socials__list-item-icon" />
              <span class="socials__list-item-name">Discord</span>
            </a>
            <a
              :href="TWITTER_LINK"
              target='_blank'
              class="socials__list-item"
            >
              <Twitter class="socials__list-item-icon" />
              <span class="socials__list-item-name paragraph_medium"
                >Twitter</span
              >
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang='ts'>
import Discord from '@/assets/img/socials/discord.svg'
import Twitter from '@/assets/img/socials/twitter.svg'
import Telegram from '@/assets/img/socials/telegram.svg'
import { TELEGRAM_LINK, TWITTER_LINK, DISCORD_LINK } from '@/configs/app.config'
</script>
<style lang="scss">
.socials__list-item-icon {
  path {
    fill-opacity: 1;
  }
}
</style>

<style lang="scss" scoped>
.socials {
  &__title {
    //line-height: unset;
    @media screen and (max-width: $md) {
      line-height: 110%;
    }
  }
  &__description {
    line-height: 150%;

    @media screen and (max-width: $slg) {
      br {
        display: none;
      }
    }
  }

  &__row {
    gap: 60px;

    @media screen and (max-width: $lg) {
      gap: 30px;
    }

    @media screen and (max-width: $sm) {
      display: block;
    }
  }

  &__text {
    @media screen and (max-width: $lg) {
      width: 560px;
      flex-shrink: 0;
    }

    @media screen and (max-width: $slg) {
      width: 450px;
    }

    @media screen and (max-width: $md) {
      width: 340px;
    }

    @media screen and (max-width: $sm) {
      width: 100%;
      margin-bottom: 28px;
    }
  }

  &__list {
    display: flex;
    gap: 20px;

    @media screen and (max-width: $lg) {
      flex: 1;
      width: 100%;
    }

    @media screen and (max-width: $md) {
      gap: 10px;
    }
  }

  &__list-item-icon {
    width: 48px;
    height: 48px;
    display: block;
    margin-bottom: 24px;

    @media screen and (max-width: $sm) {
      width: 32px;
      height: 32px;
      margin-bottom: 8px;
    }
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

    @media screen and (max-width: $lg) {
      height: 179px;
    }

    @media screen and (max-width: $sm) {
      height: 150px;
      font-size: $sm_pDef;
      border-radius: 14px;
    }

    &:hover {
      background: rgba(120, 120, 120, 0.24);
    }
  }
}
</style>
