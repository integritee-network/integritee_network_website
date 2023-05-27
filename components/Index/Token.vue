<template>
  <section id="token">
    <div class="block token">
      <div class="container">
        <div class="row jcsb">
          <div class="column column_medium">
            <h2 class="title title_h2 token__title">
              A network secured and governed <br />
              by our TEER token
            </h2>
            <p
              class="paragraph paragraph_medium margin_large token__description"
            >
              The Integritee ecosystem is securely built and governed<br />
              by our trusted community of TEER token holders. Join<br />
              the movement for scaling a secure and fast Web3
            </p>
            <a href="#" class="btn btn_gradient">Learn more</a>
          </div>
          <div class="token__right">
            <img
              src="/img/index/token/polygon.svg"
              class="token__polygon"
              alt="Polygon"
            />
            <div class="token__right-content">
              <div class="token__right-title title_sub">
                Teer Token<br />
                is available on:
              </div>
              <div class="token__right-list">
                <a href="#" class="token__right-item">
                  <span class="token__right-item-icon-wrp">
                    <Kraken />
                  </span>
                  <span class="token__right-item-name paragraph_large">
                    Kraken
                  </span>
                </a>
                <a href="#" class="token__right-item">
                  <span class="token__right-item-icon-wrp">
                    <Gateio />
                  </span>
                  <span class="token__right-item-name paragraph_large">
                    Gate.io
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import Kraken from '@/assets/img/index/token/kraken.svg'
import Gateio from '@/assets/img/index/token/gateio.svg'
</script>
<style lang="scss">
.token {
  &__right {
    position: relative;
    width: 504px;
    height: 504px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 91px;
  }
  &__right-item {
    svg {
      width: auto;
      height: 32px;
    }
  }
  &__polygon {
    position: absolute;
    top: -303px;
    left: -217px;
    width: 938px;
  }
  &__right-title {
    text-align: center;
    margin-bottom: 45px;
  }
  &__right-item {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 19px;
    gap: 20px;
    &:last-child {
      margin-bottom: 0;
    }
    &:first-child {
      svg {
        height: 28px;
      }
    }
  }
  &__right-content {
    position: relative;
    z-index: 2;
  }
  &__right-item-icon-wrp {
    width: 36px;
  }
}
</style>
