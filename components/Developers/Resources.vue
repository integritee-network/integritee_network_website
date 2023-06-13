<template>
  <div class="resources block">
    <div class='container'>
      <h2 class='title title_h2 margin_large'>Resource center</h2>
      <div>
        <div v-for='(item, index) in items' :key='index' class='resources__item'>
          <div class='resources__column'>
            <div class='resources__item-title'>
              {{ item.title }}
            </div>
            <div class='paragraph paragraph_small resources__item-gray'>
              {{ item.gray }}
            </div>
            <div class='paragraph paragraph_medium resources__item-text'>
              {{ item.text }}
            </div>
            <div>
              <div v-for='(el, idx) in item.list' class='paragraph paragraph_medium resources__item-li' :key="idx">
                {{ el.li }}
              </div>
            </div>
            <div class='resources__row'>
              <a href='#' class='btn btn_border resources__btn'>Github</a>
              <a href='#' class='btn btn_border resources__btn'>Docs</a>
              <a href='#' class='btn btn_border resources__btn'>Demo</a>
            </div>
          </div>
          <img class='resources__item-img' :src='item.img' />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const items = [
      {
        title: 'Sidechain SDK',
        img: '/img/resources/sdk-img.png',
        gray: 'Web3 development tool',
        text: 'Integritee\'s Sidechain SDK is ideal for building any decentralized application that requires low latency, scalability, and confidentiality',
        list: [
          {
            li: 'Develop a new dapp from scratch',
          },
          {
            li: 'Add to an existing project',
          }, {
            li: 'Sub-second block production times',
          }, {
            li: 'Combined 1M transactions per second',
          },
          {
            li: 'Advanced privacy features',
          },
        ]
      },
      {
        title: 'Off-Chain Worker',
        img: '/img/resources/off-chain-img.png',
        gray: 'Secure off-chain computational tool',
        text: 'Extend blockchain utility with secure off-chain computation and increase the available computing power for your applications',
        list: [
          {
            li: 'Set up trusted Off-Chain Workers to execute customs state transition functions inside TEEs'
          },
          {
            li: 'Balance high performance with cost efficiency',
          },
          {
            li: 'Increase computational efficiency by integrating off-chain operations',
          },
        ]
      },
      {
        title: 'Teeracle',
        img: '/img/resources/teeracle-img.png',
        gray: 'Trusted oracle framework',
        text: 'Build trusted oracles that run inside TEEs to securely and efficiently bridge the gap between Web2 data sources and Web3 systems',
        list: [
          {
            li: 'Be assured that both the oracle service and all retrieved data are secure and unaltered'
          },
          {
            li: 'Customize data requests (e.g., source, content, type) and schedules according to your needs',
          },
          {
            li: 'Obtain the security of a decentralized oracle and match the efficiency of a centralized provider',
          },
        ]
      },
      {
        title: 'Attesteer',
        img: '/img/resources/attersteer.png',
        gray: 'Public auditability service',
        text: 'Add public auditability to your confidential processes with our decentralized remote attestation service - a transparent on-chain proof of integrity',
        list: [
          {
            li: 'Prove that the TEE hardware used is genuine',
          },
          {
            li: 'Verify that all data and processes inside TEEs are untampered and confidential at all times',
          },
          {
            li: 'Add public auditability by storing the verification proof (attestation result) on our public network',
          },
        ]
      },
    ]

    return { items }
  }
}
</script>
<style lang="scss" scoped>
.resources {
  position: relative;
  &__btn {
    padding: 12px 22px;
    backdrop-filter: unset;
    background: transparent;
  }
  &__column {
    width: 600px;
    flex-shrink: 0;

    @include slg {
      width: 500px;
    }

    @include md {
      width: 431px;
    }

    @include sm {
      width: 100%;
    }
  }

  &__item-title {
    font-family: 'WhyteInktrap';
    font-weight: 500;
    font-size: $md_tMd;
    line-height: 120%;
    background: linear-gradient(90deg, #B000FD 0.01%, #B000FD 0.02%, #30DAFF 97.96%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 8px;

    @include slg {
      font-size: $sm_tMd;
    }

    @include sm {
      font-size: 1.688em;
    }
  }

  &__item-img {
    display: block;
    width: 504px;
    height: 504px;

    @include slg {
      width: 448px;
      height: 448px;
    }

    @include md {
      width: 340px;
      height: 340px;
    }

    @include sm {
      order: -1;
      margin: 0 auto;
      margin-bottom: 18px;
    }

    @include xsm {
      width: 150px;
      height: 150px;
      margin-bottom: 29px;
    }
  }

  &__item {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 95px;

    @include slg {
      margin-bottom: 116px;
    }

    @include md {
      margin-bottom: 60px;
    }

    @include sm {
      flex-wrap: wrap;
    }

    &:nth-child(2) {
      .resources__item-title {
        background: linear-gradient(270deg, #D5A222 0%, #F242E1 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    &:nth-child(3) {
      .resources__item-title {
        background: linear-gradient(270deg, #9B08CE 0%, #FC315A 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    &:nth-child(4) {
      .resources__item-title {
        background: linear-gradient(270deg, #24AD7C 9.13%, #1845B9 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__item-gray {
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 32px;

    @include slg {
      margin-bottom: 24px;
    }

    @include sm {
      margin-bottom: 16px;
    }
  }

  &__item-text {
    margin-bottom: 32px;

    @include slg {
      margin-bottom: 24px;
    }

    @include sm {
      margin-bottom: 16px;
    }
  }

  &__item-li {
    position: relative;
    padding-left: 20px;

    &:last-child {
      margin-bottom: 48px;

      @include slg {
        margin-bottom: 32px;
      }

      @include sm {
        margin-bottom: 24px;
      }
    }

    &:before {
      content: '';
      position: absolute;
      left: 9px;
      top: 12px;
      width: 2px;
      height: 2px;
      border-radius: 50%;
      background: #fff;
    }
  }

  &__row {
    display: flex;
    gap: 10px;
  }
}
</style>
