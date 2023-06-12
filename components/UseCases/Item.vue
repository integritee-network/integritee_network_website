<template>
  <div class="item row">
    <div class="item__text">
      <span class="item__text-tag margin_medium paragraph paragraph_small">Gaming</span>
      <div class="item__text-title margin_large">
        Ajuna builds performant decentralized games
      </div>
      <div class="item__text-subtitle margin_xmedium paragraph paragraph_large">Problem</div>
      <p class="paragraph paragraph_medium margin_medium">
        “Decentralized” games often still rely on a centralized backend
        architecture and are only using blockchain technology for minor
        features, such as tokens and NFTs
      </p>
      <div class="item__text-subtitl margin_xmedium paragraph paragraph_large">Solution</div>
      <p class="item__text-solution-point">
        Performant TEE-based Sidechain that is running the high-end game logic,
        which can scale to potential millions of users and 2,000 transactions
        per second
      </p>
      <p class="item__text-solution-point">
        High-quality decentralized gaming experience with low latencies ensured
        through 300 ms block times
      </p>
      <p class="item__text-solution-point">
        Confidential game states and transfers of value and information without
        revealing details
      </p>
    </div>
    <div class="item__quote">
      <quote class="item__quote-text">“Integritee was instrumental in helping us get our game to market. The
        platform is the only it is the only platform out there that let us
        protect our users’ privacy while still giving us the speed and
        scalability we needed.”</quote>
      <div class="row item__quote-author">
        <div class="item__quote-author-photo"></div>
        <div class="item__quote-author-name paragraph_large">Cedric Decoster<br /> instead of John Snow</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.item {
  gap: 60px;
  margin-bottom: 83px;

  @include lg {
    margin-bottom: 115px;
  }

  @include slg {
    margin-bottom: 40px;
  }

  @include slg {
    gap: 30px;
  }

  @include md {
    flex-direction: column-reverse;
  }

  @include sm {
    gap: 18px;
  }

  &:last-child {
    margin-bottom: 0;
  }

  &__text {
    width: 600px;

    @include lg {
      width: 480px;
    }

    @include slg {
      width: 475px;
    }

    @include md {
      width: 100%;
    }
  }

  &__quote {
    width: 590px;
    background: rgba(81, 81, 81, 0.246);
    border-radius: 24px;
    backdrop-filter: blur(38.335px);
    padding: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 50px;

    @include lg {
      width: 580px;
    }

    @include slg {
      width: 475px;
    }

    @include md {
      width: 460px;
    }

    @include sm {
      width: 360px;
      padding: 40px;
      border-radius: 18px;
    }

    @include xsm {
      width: 100%;
      gap: 30px;
    }
  }


  &__quote-text {
    font-size: 2.125em;
    line-height: 120%;
    font-weight: 500;

    @include slg {
      font-size: 1.625em;
    }

    @include sm {
      font-size: 1.25em;
    }
  }

  &__text-tag {
    display: inline-block;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 9px 12px;
  }

  &__text-title {
    font-size: $tDef;
    font-weight: 500;
    font-family: "WhyteInktrap";

    @include slg {
      font-size: 2.25em;
    }
  }

  &__text-solution-point {
    position: relative;
    padding-left: 25px;
    margin-bottom: 8px;

    &:last-child {
      margin-bottom: 0;
    }

    &:before {
      position: absolute;
      content: '';
      left: 9px;
      top: 9px;
      width: 5px;
      height: 5px;
      background: #fff;
      border-radius: 50%;
    }
  }

  &__quote-author {
    display: flex;
    gap: 20px;
    align-items: center;
  }
}
</style>
