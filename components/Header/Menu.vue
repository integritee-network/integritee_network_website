<template>
  <Transition name="menu-toggle">
    <div v-show="active" class="menu">
      <nav class="menu__nav">
        <NuxtLink to="/products" @click='clickHandler' class="text-link">Products</NuxtLink>
        <NuxtLink to="/usecases" @click='clickHandler' class="text-link"> Use Cases </NuxtLink>
        <NuxtLink to="/technology" @click='clickHandler' class="text-link">Technology</NuxtLink>
        <NuxtLink to="/developers" @click='clickHandler' class="text-link">Developers</NuxtLink>
        <NuxtLink to="/teer-token" @click='clickHandler' class="text-link">TEER Token</NuxtLink>
        <NuxtLink to="/about" @click='clickHandler' class="text-link">About</NuxtLink>
        <NuxtLink to="/blog" @click='clickHandler' class="text-link">Blog</NuxtLink>
        <NuxtLink to="/contacts" @click='clickHandler' class="text-link">Contacts</NuxtLink>
      </nav>
      <!-- <a href="https://app.incognitee.io" target="_blank" class="btn_border header__button menu__button">
        Incognitee is live
      </a> -->
    </div>
  </Transition>
</template>
<script setup>
const props = defineProps({
  active: {
    type: Boolean,
    required: true,
    default: false
  },
  clickHandler: {
    type: Function,
    required: true
  }
})
</script>
<style lang="scss" scoped>
.menu {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: $darkBlue;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 64px;

  &__button {
    font-size: $pDef;
  }

  &__nav {
    a {
      display: block;
      text-align: center;
      font-size: $pDef;
      margin-bottom: 24px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
