<template>
  <section id="why">
    <div class="why block">
      <div class="container">
        <h2 class="title title_h2 margin_large">Why are our tools amazing?</h2>
        <div class="why__list">
          <div class="why__item">
            <Speed class="why__item-icon margin_medium" />
            <div class="why__item-title margin_medium title_sub">Unrivalled speed at scale</div>
            <p class="why__item-description paragraph paragraph_medium">Our shardable second-layer sidechains
              deliver
              unrivalled
              transaction speed and volumes at
              sub-second block production times.</p>
          </div>
          <div class="why__item">
            <Guard class="why__item-icon margin_medium" />
            <div class="why__item-title margin_medium title_sub">Privacy by design</div>
            <p class="why__item-description paragraph paragraph_medium">By using TEEs to enable confidential
              state
              transitions, our
              solution protects sensitive data and helps to ensure compliance with privacy regulations like
              GDPR.</p>
          </div>
          <div class="why__item">
            <Agree class="why__item-icon margin_medium" />
            <div class="why__item-title margin_medium title_sub">Verifiable integrity</div>
            <p class="why__item-description paragraph paragraph_medium">Users can verify that their data has
              been
              processed in a genuine
              TEE through public records on our parachain, fostering transparency and trust.</p>
          </div>
          <div class="why__item">
            <Stars class="why__item-icon margin_medium" />
            <div class="why__item-title margin_medium title_sub">Independent
              economic model</div>
            <p class="why__item-description paragraph paragraph_medium">Every sidechain or Dapp operator can
              determine the
              fees for
              exchange independently from integritee.</p>
          </div>
          <div class="why__item">
            <Cloud class="why__item-icon margin_medium" />
            <div class="why__item-title margin_medium title_sub">Flexible deployment</div>
            <p class="why__item-description paragraph paragraph_medium">You are free to run TEEs on own suitable
              hardware
              or rent it at
              standard market rates. Operate the nodes either on premise or in the cloud.</p>
          </div>
          <div class="why__item">
            <Money class="why__item-icon margin_medium" />
            <div class="why__item-title margin_medium title_sub">Low fees</div>
            <p class="why__item-description paragraph paragraph_medium">Use TEER – our native cryptocurrency
              token and
              keep transaction
              costs at only a fraction of a cent and maintained at a stable USD price to ensure predictable
              costs.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import Speed from '@/assets/img/products/speed.svg'
import Guard from '@/assets/img/products/guard.svg'
import Agree from '@/assets/img/products/agree.svg'
import Stars from '@/assets/img/products/stars.svg'
import Cloud from '@/assets/img/products/cloud.svg'
import Money from '@/assets/img/products/money.svg'
</script>
<style lang="scss" scoped>
.why {
  &__item-icon {
    width: 64px;
    height: 64px;

    @media screen and (max-width: $slg) {
      width: 48px;
      height: 48px;
    }

    @media screen and (max-width: $sm) {
      width: 32px;
      height: 32px;
    }
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 60px;
    grid-row-gap: 40px;

    @media screen and (max-width: $slg) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, 1fr);
      grid-column-gap: 40px;
    }

    @media screen and (max-width: $sm) {
      display: block;
    }
  }

  &__item {
    @media screen and (max-width: $sm) {
      margin-bottom: 32px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }


}
</style>
