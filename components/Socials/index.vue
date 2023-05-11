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
  gap: 20px;
  svg {
    display: block;
    width: 24px;
  }
}
</style>
