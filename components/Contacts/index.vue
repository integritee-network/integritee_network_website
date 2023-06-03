<template>
  <div class="contacts">
    <Desc>
      <template #title>
        <span>Build</span> and <span class="text-gradient_purple-blue">deploy</span> a new generation of data-driven
        platforms with Integritee.
      </template>
    </Desc>
    <div class='block'>
      <div class='container'>
        <div class='contacts__row row jcsb'>
          <Info />
          <Form />
        </div>
      </div>
    </div>
    <Socials />
  </div>
</template>

<script setup>
import Desc from "@/components/Desc";
import Info from "@/components/Contacts/Info.vue";
import Form from "@/components/Contacts/Form.vue";
import Socials from "@/components/Socials/Section.vue";
</script>
<style lang="scss" scoped>
.contacts {
  position: relative;

  &__row {
    @include md {
      display: block;
    }
  }
}
</style>
