<template>
  <div class="resources">
    <div class='container'>
      <div class='resources__title'>Resource center</div>
      <div>
        <div v-for='item in items' class='resources__item'>
          <div class='resources__item-info'>
            <div class='resources__item-title'>
              {{ item.title }}
            </div>
            <div class='resources__item-gray'>
              {{ item.gray }}
            </div>
            <div class='resources__item-text'>
              {{ item.text }}
            </div>
            <div>
              <div v-for='el in item.list' class='resources__item-li'>
                {{ el.li }}
              </div>
            </div>
            <div class='resources__row'>
              <div class='resources__button'>Github</div>
              <div class='resources__button'>Docs</div>
              <div class='resources__button'>Demo</div>
            </div>
          </div>
          <div class='resources__item-img' />
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
        gray: 'Web3 development tool',
        text: 'Integritee\'s Sidechain SDK is ideal for building any decentralized application that requires low latency, scalability, and confidentiality',
        list: [
          {
            li: 'Develop a new dapp from scratch',
          },
          {
            li:  'Add to an existing project',
          },{
            li:  'Sub-second block production times',
          },{
            li:  'Combined 1M transactions per second',
          },
          {
            li:  'Advanced privacy features',
          },
        ]
      },
      {
        title: 'Off-Chain Worker',
        gray: 'Secure off-chain computational tool',
        text: 'Extend blockchain utility with secure off-chain computation  and increase the available computing power for your applications',
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
  padding-top: 180px;
  &__title {
    font-family: 'WhyteInktrap';
    font-weight: 500;
    font-size: $tMd;
    line-height: 110%;
    color: #FFFFFF;
    margin-bottom: 48px;
  }
  &__item-title {
    font-family: 'WhyteInktrap';
    font-weight: 500;
    font-size: 48px;
    line-height: 120%;
    background: linear-gradient(90deg, #B000FD 0.01%, #B000FD 0.02%, #30DAFF 97.96%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 8px;
  }
  &__item-img {
    width: 504px;
    height: 504px;
    background: url("@/assets/img/developers/resources/sdk-img.png");
    background-size: cover;
  }
  &__item {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 95px;
    &:nth-child(2) {
      .resources__item-title {
        background: linear-gradient(270deg, #D5A222 0%, #F242E1 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .resources__item-img {
        background: url("@/assets/img/developers/resources/off-chain-img.png");
        background-size: cover;
      }
    }
    &:nth-child(3) {
      .resources__item-title {
        background: linear-gradient(270deg, #9B08CE 0%, #FC315A 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .resources__item-img {
        background: url("@/assets/img/developers/resources/teeracle-img.png");
        background-size: cover;
      }
    }
    &:nth-child(4) {
      .resources__item-title {
        background: linear-gradient(270deg, #24AD7C 9.13%, #1845B9 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .resources__item-img {
        background: url("@/assets/img/developers/resources/attersteer.png");
        background-size: cover;
      }
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__item-info {
    position: relative;
    width: 600px;
  }
  &__item-gray {
    font-family: 'Inter';
    font-weight: 400;
    font-size: $pSm;
    line-height: 150%;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 32px;
  }
  &__item-text {
    font-family: 'Inter';
    font-weight: 400;
    font-size: $pDef;
    line-height: 150%;
    color: #FFFFFF;
    margin-bottom: 32px;
  }
  &__item-li {
    position: relative;
    font-family: 'Inter';
    font-weight: 400;
    font-size: $pDef;
    line-height: 150%;
    color: #FFFFFF;
    margin-bottom: 15px;
    padding-left: 20px;
    &:last-child {
      margin-bottom: 48px;
    }
    &:before {
      content: '';
      position: absolute;
      left: 9px;
      top: 50%;
      transform: translateY(-50%);
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
  &__button {
    font-family: 'Inter';
    font-weight: 500;
    font-size: $pSm;
    line-height: 150%;
    color: #FFFFFF;
    padding: 14px 24px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(30px);
    border-radius: 12px;
    cursor: pointer;
    transition: 0.4s;
    &:hover {
      border: 2px solid rgba(255, 255, 255, 0.5);
    }
  }
}
</style>
