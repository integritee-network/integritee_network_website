<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__row">
        <div class="footer__column footer__column_about">
          <NuxtLink to="/" class="footer__logo">
            <Logo />
          </NuxtLink>
          <p class="footer__description">
            The fastest, most scalable and secure Web3 network bringing the
            vision of a trustless, decentralized future for all
          </p>
          <Socials />
        </div>
        <div class="footer__columns-row">
          <div class="footer__column">
            <div class="footer__column-title">TEER Token</div>
            <div class="footer__column-list">
              <a
                href="https://www.kraken.com/prices/integritee?quote=usd&interval=24h"
                target="_blank"
                class="footer__column-link text-link"
              >
                Kraken
              </a>
              <a
                href="https://www.gate.io/de/trade/TEER_USDT"
                target="_blank"
                class="footer__column-link text-link"
              >
                Gate.io
              </a>
              <a
                href="https://coinmarketcap.com/currencies/integritee-network/"
                target="_blank"
                class="footer__column-link text-link"
              >
                CoinMarketCap
              </a>
              <a
                href="https://coinmarketcap.com/currencies/integritee-network/"
                target="_blank"
                class="footer__column-link text-link"
              >
                CoinGecko
              </a>
              <a
                href="https://www.tradingview.com/chart/?symbol=GATEIO%3ATEERUSDT"
                target="_blank"
                class="footer__column-link text-link"
              >
                TradingView
              </a>
            </div>
          </div>
          <div class="footer__column">
            <div class="footer__column-title">Network</div>
            <div class="footer__column-list">
              <a
                href="https://integritee.polkassembly.io"
                target="_blank"
                class="footer__column-link text-link"
              >
                Governance
              </a>
              <a
                href="https://integritee.subscan.io/"
                target="_blank"
                class="footer__column-link text-link"
              >
                Integritee Subscan
              </a>
              <a
                href="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.api.integritee.network#/explorer"
                target="_blank"
                class="footer__column-link text-link"
              >
                Integritee Network
              </a>
            </div>
          </div>
          <div class="footer__column">
            <div class="footer__column-title">Resources</div>
            <div class="footer__column-list">
              <a href="/" target="_blank" class="footer__column-link text-link">
                Tokenomics
              </a>
              <a
                href="https://docs.integritee.network"
                target="_blank"
                class="footer__column-link text-link"
              >
                Documentation
              </a>
              <a href="/" target="_blank" class="footer__column-link text-link">
                Lightpaper
              </a>
              <a
                href="https://helpdesk.integritee.network/docs/"
                target="_blank"
                class="footer__column-link text-link"
              >
                Help Center
              </a>
            </div>
          </div>
          <div class="footer__column">
            <div class="footer__column-title">Community</div>
            <div class="footer__column-list">
              <a
                href="https://app.element.io/#/room/#integritee-watercooler:matrix.org"
                target="_blank"
                class="footer__column-link text-link"
              >
                Watercooler
              </a>
              <a
                href="https://app.subsocial.network/4638"
                target="_blank"
                class="footer__column-link text-link"
              >
                Subsocial
              </a>
              <a
                href="https://www.youtube.com/channel/UCOgztU-FYDdG8ptLKaItBow/featured"
                target="_blank"
                class="footer__column-link text-link"
              >
                YouTube
              </a>
              <a
                href="https://medium.com/integritee"
                target="_blank"
                class="footer__column-link text-link"
              >
                Medium
              </a>
              <a
                href="https://www.reddit.com/r/Integritee/"
                target="_blank"
                class="footer__column-link text-link"
              >
                Reddit
              </a>
            </div>
          </div>
          <div class="footer__column">
            <div class="footer__column-title">Company</div>
            <div class="footer__column-list">
              <a
                href="/about#join"
                class="footer__column-link text-link"
              >
                Jobs
              </a>
              <a
                href="/about#roadmap"
                class="footer__column-link text-link"
              >
                Roadmap
              </a>
              <a
                href="https://www.linkedin.com/company/integritee/"
                target="_blank"
                class="footer__column-link text-link"
              >
                LinkedIn
              </a>
<!--              <a href="/" target="_blank" class="footer__column-link text-link">-->
<!--                Contacts-->
<!--              </a>-->
            </div>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <span class="paragraph_medium">©2023 Integritee, Inc.</span>
        <span>
          <a href="#" target="_blank" class="blue paragraph_medium">Imprint</a> and
          <a href="#" target="_blank" class="blue paragraph_medium">Privacy Policy</a>
        </span>
      </div>
    </div>
  </footer>
</template>

<script setup>
import Logo from '@/components/Logo'
import Socials from '@/components/Socials'
</script>

<style lang="scss" scoped>
.footer {
  &__logo {
    display: block;
    width: 191px;
    height: 40px;
    margin-bottom: 19px;

    @include slg {
      width: 117px;
      height: 24px;
      margin-bottom: 26px;
    }

    @include md {
      margin-bottom: 0;
      width: 144px;
      height: 30px;
      flex-shrink: 0;
    }

    @include sm {
      margin-bottom: 24px;
      width: 117px;
      height: 24px;
    }

    svg {
      width: 100%;
      height: auto;
    }
  }

  &__row {
    display: flex;
    gap: 48px;

    @include md {
      display: block;
    }
  }

  &__column {
    @media screen and (max-width: 660px) {
      margin-bottom: 24px;
      width: 50%;

      &:first-child {
        width: 100%;

        .footer__column-list {
          display: flex;
          flex-wrap: wrap;
        }

        .footer__column-link {
          width: 50%;
        }
      }

      &:nth-last-child(1),
      &:nth-last-child(2) {
        margin-bottom: 0;
      }
    }

    @include xsm {
      &:first-child {
        width: 100% !important;

        .footer__column-link {
          width: 125px;
        }

        .footer__column-list {
          justify-content: space-between;
        }
      }

      width: 125px !important;
    }

    &_about {
      flex-shrink: 0;
      max-width: 255px;
      font-size: 1.125em;

      @include slg {
        font-size: 0.875em;
      }

      @include md {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 100%;
        width: 100%;
        gap: 24px;
        margin-bottom: 35px;
        font-size: 0.75em;
      }

      @include sm {
        display: block;
        margin-bottom: 24px !important;
        font-size: 0.875em;
      }

    }

    &:last-child {
      width: auto;

      @media screen and (max-width: 660px) {
        width: 50%;
      }
    }
  }

  &__column-link {
    display: block;
    line-height: 150%;
    margin-bottom: 14px;
    font-size: 1.125em;

    @include slg {
      font-size: 1em;
    }

    @include sm {
      font-size: 0.875em;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__columns-row {
    display: flex;
    gap: 82px;

    @include lg {
      gap: 52px;
    }

    @include slg {
      gap: 32px;
    }

    @include md {
      justify-content: space-between;
    }

    @media screen and (max-width: 660px) {
      gap: 0;
      flex-wrap: wrap;
    }
  }

  &__description {
    line-height: 150%;
    margin-bottom: 19px;

    @include slg {
      margin-bottom: 26px;
    }

    @include md {
      margin-bottom: 0;
      max-width: 415px;
      margin-right: auto;
    }

    @include sm {
      margin-bottom: 24px;
      max-width: 100%;
    }
  }

  &__column-title {
    color: $gray;
    margin-bottom: 32px;
    line-height: 150%;
    font-size: 1.125em;

    @include slg {
      margin-bottom: 24px;
    }

    @include md {
      margin-bottom: 16px;
    }

    @include sm {
      font-size: 0.875em;
    }
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    padding: 36px 0;
    margin-top: 36px;
    border-top: 2px solid $alphaGray;

    @include md {
      padding: 24px 0;
      margin-top: 24px;
    }

    a {
      transition: .3s ease;

      &:hover {
        color: #7ca8ff;
      }
    }
  }
}
</style>
