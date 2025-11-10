<template>
  <header class="header" :class="{ 'header_no-bg': active }">
    <div class="container">
      <NuxtLink to="/" class="header__logo">
        <Logo />
      </NuxtLink>
      <div v-if="width > breakpoints.slg" class="header__nav">
        <NuxtLink to="/products" class="text-link paragraph_smll">Products</NuxtLink>
        <NuxtLink to="/usecases" class="text-link paragraph_smll">
          Use Cases
        </NuxtLink>
        <NuxtLink to="/technology" class="text-link paragraph_smll">Technology</NuxtLink>
        <NuxtLink to="/developers" class="text-link paragraph_smll">Developers</NuxtLink>
       <!-- <NuxtLink to="/teer-token" class="text-link paragraph_smll">TEER Token</NuxtLink> -->
        <NuxtLink to="/about" class="text-link paragraph_smll">About</NuxtLink>
        <NuxtLink to="/blog" class="text-link paragraph_smll">Blog</NuxtLink>
        <NuxtLink to="/contacts" class="text-link paragraph_smll">Contacts</NuxtLink>
      </div>
     <!-- <div class="header__nav-right">
        <Socials />
        <NuxtLink v-if="width > breakpoints.slg" to="https://app.incognitee.io" target="_blank" class="btn_border header__button paragraph_small">Incognitee is live</NuxtLink>

        <button v-if="width <= breakpoints.slg" class="header__burger" :class="{
          active: active,
        }" type="button" @click="toggleMenu()">
          <div class="header__burger-line" />
          <div class="header__burger-line" />
          <div class="header__burger-line" />
        </button>
      </div>-->
    </div>
  </header>
  <Menu v-if="width <= breakpoints.slg" :active="active" :clickHandler='toggleMenu' />
</template>

<script setup>
// import Logo from '@/assets/img/logo.svg'
import { useNuxtApp, useRoute } from '#imports'
import Menu from '@/components/Header/Menu.vue'
import Logo from '@/components/Logo'
import Socials from '@/components/Socials'
import { breakpoints } from '@/configs/app.config'
import { useWindowScroll, useWindowSize } from '@vueuse/core'
import { ref, watch } from 'vue'

const active = ref(false)

const { width } = useWindowSize()
const { y } = useWindowScroll()

const { $lockScroll } = useNuxtApp()

const route = useRoute()

const toggleMenu = () => {
  active.value = !active.value
  $lockScroll(active.value)
}

watch(
  route,
  () => {
    active.value = false
    $lockScroll(false)
  },
)
</script>

<style lang="scss">
.header__button {
  display: block;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 9px;
  padding: 10px 16px;
}
</style>

<style lang="scss" scoped>
.header {
  position: fixed;
  background: linear-gradient(180deg, #0a0a0f 0%, rgba(10, 10, 15, 0) 100%);
  backdrop-filter: blur(4px);
  top: 0;
  left: 0;
  width: 100%;
  padding: 25px 0;
  z-index: 10;
  transition: 0.3s ease;

  @include slg {
    padding: 21px 0;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    display: block;
    width: 144px;

    @include xsm {
      width: 118px;
    }

    svg {
      width: 100%;
    }

    &:hover {
      svg {
        &.blue-hover {
          background: #5B92FF;
        }
      }
    }
  }

  &__nav {
    @include slg {
      display: none;
    }

    a {
      font-size: 0.875em;
      margin-left: 24px;

      @include lg {
        margin-left: 18px;
      }

      &:first-child {
        margin-left: 0;
      }
    }

    a.router-link-active {
      color: #5B92FF;
    }
  }

  &__nav-right {
    display: flex;
    align-items: center;
    gap: 32px;
  }

  &__burger {
    width: 17px;
    cursor: pointer;
    background: 0;
    border: 0;
    padding: 0;
    flex-shrink: 0;

    &.active {
      .header__burger-line {
        &:nth-child(1) {
          transform: rotate(45deg);
          top: 3px;
        }

        &:nth-child(2) {
          display: none;
        }

        &:nth-child(3) {
          transform: rotate(-45deg);
          bottom: 3px;
        }
      }
    }
  }

  &__burger-line {
    position: relative;
    width: 100%;
    height: 2px;
    margin-bottom: 4px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 40px;
    /* transition: .3s ease; */

    &:last-child {
      margin-bottom: 0;
    }
  }

  &_no-bg {
    background: rgba(81, 81, 81, 0) !important;
  }
}

.gradient {
  display: inline-block;

  &_one {
    background: linear-gradient(90deg, #30daff -12.5%, #b000fd 41%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &_two {
    background: linear-gradient(90deg, #b000fd, #30daff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
