<template>
  <div class="technology">
    <Desc />
    <HowItWorks />
    <Building />
  </div>
</template>

<script>
import Desc from "@/components/Desc";
import HowItWorks from "@/components/Technology/HowItWorks";
import Building from "@/components/Technology/Building";
export default {
  components: {
    Desc, HowItWorks, Building
  }
}
</script>
<style lang="scss" scoped>
.technology {
  position: relative;
}
</style>
