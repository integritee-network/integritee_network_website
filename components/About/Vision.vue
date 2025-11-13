<template>
    <section id="vision">
        <div class="vision block">
          <div class='container'>
            <div class='row jcsb vision__row'>
              <div class='vision__card'>
                <div class='vision__icon'><VisionIcon /></div>
                <h2 class='title_sub'>Our vision</h2>
                <p class='paragraph_medium vision__text'>We see a Web 3 that rises above the ‘winner takes all’ privatization of Web 2. One where individuals have governance, global jurisdiction and the ability to actively contribute to the online community.</p>
              </div>
              <div class='vision__card'>
                <div class='vision__icon'><MissionIcon /></div>
                <h2 class='title_sub'>Our misson</h2>
                <p class='paragraph_medium vision__text'>Create the fastest, most scalable and secure network solution for building Web 3 and bringing our vision to life.</p>
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
    @media screen and (max-width: 840px) {
      display: block;
    }
  }
  &__text {
    line-height: 150%;
  }
  &__card {
    display: flex;
    flex-direction: column;
    padding: 60px;
    gap: 24px;
    width: 488px;
    border-radius: 24px;
    @media screen and (max-width: 1366px) {
      width: 405px;
    }
    @media screen and (max-width: 1200px) {
      width: 360px;
      gap: 16px;
    }
    @media screen and (max-width: 1024px) {
      width: 311px;
    }
    @media screen and (max-width: 840px) {
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
      @media screen and (max-width: 1366px) {
        width: 695px;
      }
      @media screen and (max-width: 1200px) {
        width: 580px;
      }
      @media screen and (max-width: 1024px) {
        width: 469px;
      }
      @media screen and (max-width: 840px) {
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
