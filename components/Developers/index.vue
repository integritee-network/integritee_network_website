<template>
  <div class="developers">
    <Desc />
    <QuickStart />
    <Resources />
  </div>
</template>

<script>
import Desc from "@/components/Desc";
import QuickStart from "@/components/Developers/QuickStart";
import Resources from "@/components/Developers/Resources";
export default {
  components: {
    Desc, QuickStart, Resources
  }
}
</script>
<style lang="scss" scoped>
.developers {
  position: relative;
}
</style>
