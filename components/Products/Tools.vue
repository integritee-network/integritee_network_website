<template >
  <section id="tools">
    <div class="tools block">
      <div class="container">
        <div class="tools__list">
          <a
            :href="SIDECHAIN_SDK_LINK"
            target="_blank"
            class="tools__item"
          >
            <span>
              <span class="tools__item-title title_sub">Sidechain SDK</span>
              <span class="tools__item-subtitle paragraph_small">Web3 development tool</span>
              <p class="paragraph paragraph_medium">Build any decentralized application or service that requires low
                latency, scalability, and
                confidentiality.
              </p>
            </span>
            <Link class="tools__item-icon" />
          </a>
          <a
            :href="OFF_CHAIN_WORKER_LINK"
            target="_blank"
            class="tools__item"
          >
            <span>
              <span class="tools__item-title title_sub">Off-Chain Worker</span>
              <span class="tools__item-subtitle paragraph_small">Secure off-chain computational tool</span>
              <p class="paragraph paragraph_medium">Set up OCWs, to execute a custom state transition function or other
                operations inside a TEE.
              </p>
            </span>
            <Link class="tools__item-icon" />
          </a>
          <a
            :href="TEERACLE_LINK"
            target="_blank"
            class="tools__item"
          >
            <span>
              <span class="tools__item-title title_sub">Teeracle</span>
              <span class="tools__item-subtitle paragraph_small">Trusted oracle Framework</span>
              <p class="paragraph paragraph_medium">Create your own TEE-based oracle and connect to any Web2 API to gather
                untampered data and process it in
                a highly secured environment and confidentiality.
              </p>
            </span>
            <Link class="tools__item-icon" />
          </a>
          <a
            :href="ATTESTEER_LINK"
            target="_blank"
            class="tools__item"
          >
            <span>
              <span class="tools__item-title title_sub">Attesteer</span>
              <span class="tools__item-subtitle paragraph_small">Public auditability service</span>
              <p class="paragraph paragraph_medium">Add a Proof of Code and a Proof of Execution to your TEE to provide
                your customers a publicy auditable
                solution.
              </p>
            </span>
            <Link class="tools__item-icon" />
          </a>
          <a
            :href="SECURE_TEE_INFRASTRUCTURE_LINK"
            target="_blank"
            class="tools__item"
          >
            <span>
              <span class="tools__item-title title_sub">Securitee TEE Infrastructure</span>
              <span class="tools__item-subtitle paragraph_small">Secure TEE Infrastructure</span>
              <p class="paragraph paragraph_medium">Leverage our complementary secure infrastructure offering for
                deployment: Intel SGX-capable bare-metal
                servers that come with a pre-installed software management system, which enables a seamless deployment of
                your developed TEE-based application.
              </p>
            </span>
            <Link class="tools__item-icon" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import Link from '@/assets/img/link.svg'
import {
  SIDECHAIN_SDK_LINK,
  OFF_CHAIN_WORKER_LINK,
  TEERACLE_LINK,
  ATTESTEER_LINK,
  SECURE_TEE_INFRASTRUCTURE_LINK
} from '~/configs/app.config'
</script>
<style lang="scss" scoped>
.tools {
  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;

    @include slg {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, 1fr);
    }

    @include sm {
      display: block;
    }
  }

  &__item {
    background: rgba(81, 81, 81, 0.25);
    backdrop-filter: blur(38px);
    border-radius: 24px;
    padding: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 40px;
    transition: .3s ease;

    @include lg {
      gap: 15px;
    }

    @include sm {
      margin-bottom: 10px;
      padding: 40px;
      gap: 40px;
      border-radius: 18px;
    }

    &:hover {
      background: rgba(120, 120, 120, 0.24);
    }

    &:last-child {
      grid-area: 2 / 2 / 3 / 4;

      @include slg {
        grid-area: 3 / 1 / 4 / 3;
      }

      @include sm {
        margin-bottom: 0;
      }
    }

    &:nth-child(1) {
      .tools__item-title {
        background: linear-gradient(90deg, #B000FD 0.01%, #B000FD 0.02%, #30DAFF 97.96%);
      }
    }

    &:nth-child(2) {
      .tools__item-title {
        background: linear-gradient(270deg, #D5A222 0%, #F242E1 100%);
      }
    }

    &:nth-child(3) {
      .tools__item-title {
        background: linear-gradient(270deg, #9B08CE 0%, #FC315A 100%);
      }
    }

    &:nth-child(4) {
      .tools__item-title {
        background: linear-gradient(270deg, #24AD7C 9.13%, #1845B9 100%);
      }
    }

    &:nth-child(5) {
      .tools__item-title {
        background: linear-gradient(270.24deg, #F43053 0.2%, #E38048 99.8%);
      }
    }

  }

  &__item-icon {
    width: 21px;
    height: 21px;
  }

  &__item-title {
    display: block;
    margin-bottom: 8px;
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent;

  }

  &__item-subtitle {
    display: block;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 24px;
  }
}
</style>
