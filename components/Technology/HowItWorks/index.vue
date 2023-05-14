<template>
  <div class="how-it-works">
    <div class='container'>
      <div class='how-it-works__title'>
        How it works
      </div>
      <div>
        <div v-for='item in items' class='how-it-works__item'>
          <div class='how-it-works__item-title'>
            {{ item.title }}
          </div>
          <div class='how-it-works__item-text'>
            {{ item.text }}
          </div>
          <component :is='item.img' />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FirstImg from '@/assets/img/technology/first-item.svg'
import SecondImg from '@/assets/img/technology/second-item.svg'
import ThirdImg from '@/assets/img/technology/third-item.svg'
import FourthImg from '@/assets/img/technology/fourth-item.svg'
export default {
  setup() {
    const items = [
      {
        title: 'TEE enterprise hardware ensures the speed and confidentiality of our solution',
        text: 'A trusted execution environment (TEE) is an isolated area within a computer processor that runs separately from the standard OS. Any data processed within a TEE is accessible to no one, not even the admin. A public auditability service will provide all users with assurance that their data can only be processed in pre-defined ways in an isolated and trustworthy hardware environment',
        img: FirstImg,
      },
      {
        title: 'Integritee’s blockchain builds upon the Polkadot network',
        text: 'Polkadot is a scalable and secure protocol that serves as the foundation for an interoperable network of blockchains. The network provides the basis for Web 3.0 — a new, fully decentralized internet. On Polkadot, any type of data can be exchanged between the blockchains inside the ecosystem. Polkadot’s key benefit is that it provides pooled security and cross-chain messaging for all network participants',
        img: SecondImg,
      },
      {
        title: 'Deployment at any stage of your development',
        text: 'Our architecture allows a permissioned or permissionless deployment no matter what requirement you have. Servers can also be self hosted on premise or hosted in the cloud. Our network is providing a great flexlibility for applications operators to host and maintain the solutions',
        img: ThirdImg,
      },
      {
        title: 'Rust & Substrate runtime compatibility',
        text: 'The Integritee SDK is compatible with Substrate runtime pallets and Rust code can be simply integrated with our SDK to run a decentralized application. With a few lines of glue-code, you can reuse your pallets and instantiate them on our chain. It is even possible to trustlessly interact between on- and off-chain runtimes',
        img: FourthImg,
      },
    ]

    console.log(items)

    return { items }
  }
};
</script>
<style lang="scss" scoped>
.how-it-works {
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
  &__item {
    position: relative;
    width: 600px;
    margin-bottom: 180px;
    &:last-child {
      margin-bottom: 0;
    }
    svg {
      position: absolute;
      left: 422px;
      top: -208px;
      width: 817px;
    }
    &:nth-child(2) {
      svg {
        position: absolute;
        left: 552px;
        top: -192px;
        width: 687px;
        .blur {
          filter: drop-shadow(0px 4px 250px rgba(153, 40, 254, 0.6));
        }
      }
    }
    &:nth-child(3) {
      svg {
        position: absolute;
        left: 499px;
        top: -218px;
        width: 740px;
      }
    }
    &:nth-child(4) {
      svg {
        position: absolute;
        left: 552px;
        top: -283px;
        width: 687px;
      }
    }
  }
  &__item-title {
    font-family: 'Inter';
    font-weight: 500;
    font-size: $tDef;
    line-height: 110%;
    color: #FFFFFF;
    margin-bottom: 24px;
  }
  &__item-text {
    font-family: 'Inter';
    font-weight: 400;
    font-size: $pDef;
    line-height: 150%;
    color: #FFFFFF;
  }
}
</style>
