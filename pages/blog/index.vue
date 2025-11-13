<template>
  <div>
    <p>
      Redirecting to our Medium blog...
      <br />
      <a :href="mediumUrl">Go to Medium</a>
    </p>
  </div>
</template>

<script setup lang="ts">
const mediumUrl = 'https://medium.com/@integritee'
if (process.client) {
  window.location.href = mediumUrl
}
</script>
