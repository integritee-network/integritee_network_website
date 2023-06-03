<template>
    <section id="vision">
        <div class="vision block">
          <div class='container'>
            <div class='row jcsb vision__row'>
              <div class='vision__card'>
                <div class='vision__icon'><VisionIcon /></div>
                <h2 class='title_sub'>Our vision</h2>
                <p class='paragraph_medium'>We see a Web 3 that rises above the ‘winner takes all’ privatization of Web 2. One where individuals have governance, global jurisdiction and the ability to actively contribute to the online community</p>
              </div>
              <div class='vision__card'>
                <div class='vision__icon'><MissionIcon /></div>
                <h2 class='title_sub'>Our misson</h2>
                <p class='paragraph_medium'>Create the fastest, most scalable and secure network solution for building Web 3 and bringing our vision to life</p>
              </div>
            </div>
          </div>
        </div>
    </section>
</template>
<script setup>
import VisionIcon from "@/assets/img/about/vision-icon.svg";
import MissionIcon from "@/assets/img/about/mission-icon.svg";
</script>
<style lang="scss">
.vision {
  &__row {
    @include sm {
      display: block;
    }
  }
  &__card {
    display: flex;
    flex-direction: column;
    padding: 60px;
    gap: 24px;
    width: 488px;
    border-radius: 24px;
    @include lg {
      width: 405px;
    }
    @include slg {
      width: 360px;
      gap: 16px;
    }
    @include md {
      width: 311px;
    }
    @include sm {
      width: 100%;
      padding: 40px;
      gap: 8px;
      border-radius: 18px;
    }
    &:nth-child(1) {
      width: 728px;
      background: rgba(62, 62, 62, 0.01);
      box-shadow: 0px 4px 250px rgba(153, 40, 254, 0.6);
      backdrop-filter: blur(35px);
      @include lg {
        width: 695px;
      }
      @include slg {
        width: 580px;
      }
      @include md {
        width: 469px;
      }
      @include sm {
        width: 100%;
        margin-bottom: 20px;
      }
    }
  }
  &__icon {
    width: 64px;
    svg {
      display: block;
      width: 100%;
    }
  }
}
</style>
