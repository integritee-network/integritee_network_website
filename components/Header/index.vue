<template>
  <header class="header">
    <div class="container">
      <NuxtLink to="/" class="header__logo">
        <Logo />
      </NuxtLink>
      <div class="header__nav">
        <NuxtLink to="/about" class="text-link paragraph_smll">Products</NuxtLink>
        <NuxtLink to="/about" class="text-link paragraph_smll">
          Use Cases
        </NuxtLink>
        <NuxtLink to="/about" class="text-link paragraph_smll">Technology</NuxtLink>
        <NuxtLink to="/about" class="text-link paragraph_smll">Developers</NuxtLink>
        <NuxtLink to="/teer-token" class="text-link paragraph_smll">TEER Token</NuxtLink>
        <NuxtLink to="/blog" class="text-link paragraph_smll">Blog</NuxtLink>
        <NuxtLink to="/about" class="text-link paragraph_smll">About</NuxtLink>
      </div>
      <Socials />
      <a href="/" target="_blank" class="button paragraph_small">Start Building</a>
    </div>
  </header>
</template>

<script setup>
import Logo from '@/assets/img/logo.svg'
import Socials from '@/components/Socials'
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 25px 0;
  z-index: 10;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    display: block;
    width: 144px;

    svg {
      width: 100%;
    }
  }

  &__nav {
    a {
      margin-left: 35px;

      &:first-child {
        margin-left: 0;
      }
    }
  }
}

.button {
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 9px;
  padding: 10px 16px;
}
</style>
