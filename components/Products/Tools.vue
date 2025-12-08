<template>
  <section id="tools">
    <div class="tools block">
      <div class="container">
        <div class="tools__list">
          <a :href="SIDECHAIN_SDK_LINK" target="_blank" class="tools__item">
            <span>
              <span class="tools__item-title title_sub">Sidechain SDK</span>
              <span class="tools__item-subtitle paragraph_small"
                >Web3 development tool</span
              >
              <p class="paragraph paragraph_medium">
                Build any decentralized application or service that requires low
                latency, scalability, and confidentiality.
              </p>
            </span>
            <Link class="tools__item-icon" />
          </a>
          <a :href="OFF_CHAIN_WORKER_LINK" target="_blank" class="tools__item">
            <span>
              <span class="tools__item-title title_sub">Off-Chain Worker</span>
              <span class="tools__item-subtitle paragraph_small"
                >Secure off-chain computational tool</span
              >
              <p class="paragraph paragraph_medium">
                Set up OCWs, to execute a custom state transition function or
                other operations inside a TEE.
              </p>
            </span>
            <Link class="tools__item-icon" />
          </a>
          <a :href="TEERACLE_LINK" target="_blank" class="tools__item">
            <span>
              <span class="tools__item-title title_sub">Teeracle</span>
              <span class="tools__item-subtitle paragraph_small"
                >Trusted oracle Framework</span
              >
              <p class="paragraph paragraph_medium">
                Create your own TEE-based oracle and connect to any Web2 API to
                gather untampered data and process it in a highly secured
                environment and confidentiality.
              </p>
            </span>
            <Link class="tools__item-icon" />
          </a>
          <a :href="ATTESTEER_LINK" target="_blank" class="tools__item">
            <span>
              <span class="tools__item-title title_sub">Attesteer</span>
              <span class="tools__item-subtitle paragraph_small"
                >Public auditability service</span
              >
              <p class="paragraph paragraph_medium">
                Add a Proof of Code and a Proof of Execution to your TEE to
                provide your customers a publicy auditable solution.
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
              <span class="tools__item-title title_sub">Securitee</span>
              <span class="tools__item-subtitle paragraph_small"
                >Secure TEE Infrastructure</span
              >
              <p class="paragraph paragraph_medium">
                Intel SGX bare-metal servers that come with a pre-installed
                images, which enables a seamless deployment of your developed
                TEE-based application.
              </p>
            </span>
            <Link class="tools__item-icon" />
          </a>
          <a
            :href="INCOGNITEE_LINK"
            target="_blank"
            rel="noopener noreferrer"
            class="tools__item"
          >
            <span>
              <span class="tools__item-title title_sub">Incognitee</span>
              <span class="tools__item-subtitle paragraph_small"
                >Privacy Sidechain on Polkadot</span
              >
              <p class="paragraph paragraph_medium">
                A Layer 2 Sidechain that allows for private transfers of tokens
                on the Kusama and Polkadot Relaychain.
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
  ATTESTEER_LINK,
  INCOGNITEE_LINK,
  OFF_CHAIN_WORKER_LINK,
  SECURE_TEE_INFRASTRUCTURE_LINK,
  SIDECHAIN_SDK_LINK,
  TEERACLE_LINK,
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

    @media screen and (max-width: 1200px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, 1fr);
    }

    @media screen and (max-width: 840px) {
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
    transition: 0.3s ease;

    @media screen and (max-width: 1366px) {
      gap: 15px;
    }

    @media screen and (max-width: 840px) {
      margin-bottom: 10px;
      padding: 40px;
      gap: 40px;
      border-radius: 18px;
    }

    &:hover {
      background: rgba(120, 120, 120, 0.24);
    }

    &:last-child {
      grid-area: 2 / 3 / 4 / 5 / 6;

      @media screen and (max-width: 1200px) {
        grid-area: 3 / 1 / 4 / 3;
      }

      @media screen and (max-width: 840px) {
        margin-bottom: 0;
      }
    }

    &:nth-child(1) {
      .tools__item-title {
        background: linear-gradient(
          90deg,
          #b000fd 0.01%,
          #b000fd 0.02%,
          #30daff 97.96%
        );
      }
    }

    &:nth-child(2) {
      .tools__item-title {
        background: linear-gradient(270deg, #d5a222 0%, #f242e1 100%);
      }
    }

    &:nth-child(3) {
      .tools__item-title {
        background: linear-gradient(270deg, #9b08ce 0%, #fc315a 100%);
      }
    }

    &:nth-child(4) {
      .tools__item-title {
        background: linear-gradient(270deg, #24ad7c 9.13%, #1845b9 100%);
      }
    }

    &:nth-child(5) {
      .tools__item-title {
        background: linear-gradient(270.24deg, #f43053 0.2%, #e38048 99.8%);
      }
    }
    &:nth-child(6) {
      .tools__item-title {
        background: linear-gradient(270deg, #24ad7c 9.13%, #1845b9 100%);
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
