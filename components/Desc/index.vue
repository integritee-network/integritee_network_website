<template>
  <div class="desc">
    <div class='container'>
      <div class='desc__wrap'>
        <div class='desc__title'>
          <slot name='title' />
        </div>
        <div class='desc__text'>
          <slot name='text' />
        </div>
        <div class='desc__row'>
          <button class='desc__button'>
            <slot name='button' />
          </button>
          <slot name='docs' />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
:slotted(span) {
    display: inline-block;
    background: linear-gradient(90deg, #30DAFF -20.25%, #B000FD 50%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
:slotted(button) {
  width: 180px;
  height: 55px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  background: transparent;
  backdrop-filter: blur(30px);
  border-radius: 12px;
  font-family: 'Inter';
  font-weight: 500;
  font-size: $pDef;
  line-height: 150%;
  color: #FFFFFF;
  text-align: center;
  cursor: pointer;
  transition: 0.4s;
}
.desc {
  position: relative;
  padding-top: 90px;
  &__wrap {
    width: 800px;
  }
  &__title {
    font-family: 'WhyteInktrap';
    font-weight: 500;
    font-size: $tLg;
    line-height: 110%;
    color: #fff;
    margin-bottom: 24px;
  }
  &__row {
    display: flex;
    align-items: center;
    gap: 18px;
  }
  &__text {
    font-family: 'Inter';
    font-weight: 400;
    font-size: $pDef;
    line-height: 150%;
    color: #E5E5E5;
    margin-bottom: 48px;
  }
  &__button {
    position: relative;
    width: 165px;
    height: 55px;
    background: linear-gradient(84.58deg, #559CFF 0%, #9E20FE 100%);
    backdrop-filter: blur(30px);
    border-radius: 12px;
    font-family: 'Inter';
    font-weight: 500;
    font-size: $pDef;
    line-height: 150%;
    color: #FFFFFF;
    text-align: center;
    border: 0;
    cursor: pointer;
    transition: 0.4s;
    &:hover {
      background: linear-gradient(0deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)), linear-gradient(84.58deg, #559CFF 0%, #9E20FE 100%);
    }
  }
}
</style>
