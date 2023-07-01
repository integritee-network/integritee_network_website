<template>
  <div class="socials">
    <a href="/" target="_blank">
      <Discord />
    </a>
    <a href="/" target="_blank">
      <Twitter />
    </a>
    <a href="/" target="_blank">
      <Telegram />
    </a>
  </div>
</template>

<script setup>
import Discord from '@/assets/img/socials/discord.svg'
import Twitter from '@/assets/img/socials/twitter.svg'
import Telegram from '@/assets/img/socials/telegram.svg'
</script>

<style lang="scss" scoped>
.socials {
  display: flex;
  align-items: center;
  gap: 12px;

  svg {
    display: inline-block;
    width: 24px;
    transition: 0.3s ease;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      svg {
        fill-opacity: 1;
      }
    }
  }
}
</style>
