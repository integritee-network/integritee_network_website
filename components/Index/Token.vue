<template>
  <section id="token">
    <div class="block token">
      <div class="container">
        <div class="row jcsb token__row">
          <div class="column column_medium token__column">
            <h2 class="title title_h2 token__title">
              A network secured and governed <br />
              by our TEER token
            </h2>
            <p class="paragraph paragraph_medium margin_large token__description">
              The Integritee ecosystem is securely built and governed<br />
              by our trusted community of TEER token holders. Join<br />
              the movement for scaling a secure and fast Web3
            </p>
            <a href="#" class="btn btn_gradient">Learn more</a>
          </div>
          <div class="token__right">
            <img src="/img/index/token/polygon.svg" class="token__polygon" alt="Polygon" />
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
    height: 414px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 91px;

    @include slg {
      height: 324px;
    }

    @include md {
      padding-top: 147px;
    }

    @include sm {
      width: 100%;
      height: 484px;
    }

    @include xsm {
      height: 345px;
      padding-top: 77px;
    }
  }

  &__row {
    @include sm {
      flex-direction: column-reverse;
    }
  }

  &__right-item {
    svg {
      width: auto;
      height: 32px;

      @include slg {
        width: 24px;
        height: auto;
      }
    }
  }

  &__column {
    @include lg {
      width: 560px;
    }

    @include slg {
      width: 480px;
    }

    @include md {
      width: 413px;
    }

    @include sm {
      width: 100%;
    }
  }

  &__polygon {
    position: absolute;
    top: -303px;
    left: -217px;
    width: 938px;

    @include slg {
      top: -253px;
      left: -147px;
      width: 798px;
    }

    @include md {
      top: -180px;
      left: -197px;
    }

    @include sm {
      left: 50%;
      transform: translateX(-50%);
    }

    @include xsm {
      width: 598px;
    }
  }

  &__right-title {
    text-align: center;
    margin-bottom: 45px;

    @include slg {
      margin-bottom: 32px;
      font-size: $pLg;
    }

    @include xsm {
      font-size: $sm_pLg;
      margin-bottom: 24px;
    }
  }

  &__right-item {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 19px;
    gap: 20px;

    @include slg {
      margin-bottom: 14px;
      gap: 15px;
    }


    @include xsm {
      gap: 8px;
    }

    &:last-child {
      margin-bottom: 0;
    }


    &:first-child {
      svg {
        height: 28px;

        @include xsm {
          height: 21px;
        }
      }
    }
  }

  &__right-item-name {
    @include slg {
      font-size: $sm_pLg;
    }

    @include xsm {
      font-size: $md_pDef;
    }
  }

  &__right-content {
    position: relative;
    z-index: 2;
  }

  &__right-item-icon-wrp {
    width: 36px;

    @include xsm {
      width: 24px;
    }
  }

  &__description {
    @include md {
      br {
        display: none;
      }
    }
  }
}
</style>
