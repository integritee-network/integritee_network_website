<template>
  <section id="news">
    <div class="block news">
      <div class="container">
        <h2 class="title title_h2 news__title margin_large">
          Network <a href="#" class="color_blue">news</a>
        </h2>
        <div class="row news__list">
          <a href="#" class="news__item">
            <img
              src="http://c5com.com/wp/wp-content/uploads/2011/05/400x400.png"
              alt="New image"
              class="news__item-image"
            />
            <div class="row news__item-info">
              <span class="news__item-tag">News</span>
              <span class="news__item-date">June 3, 2023</span>
            </div>
            <p class="paragraph paragraph_large">
              Monthly Wrap-Up March 2023: Product Releases, a Privacy Sidechain
              & More
            </p>
          </a>
          <a href="#" class="news__item">
            <img
              src="http://c5com.com/wp/wp-content/uploads/2011/05/400x400.png"
              alt="New image"
              class="news__item-image"
            />
            <div class="row news__item-info">
              <span class="news__item-tag">News</span>
              <span class="news__item-date">June 3, 2023</span>
            </div>
            <p class="paragraph paragraph_large">
              Securitee Launches Confidential Computing Platform to Protect Data
              in Use
            </p>
          </a>
          <a href="#" class="news__item">
            <img
              src="http://c5com.com/wp/wp-content/uploads/2011/05/400x400.png"
              alt="New image"
              class="news__item-image"
            />
            <div class="row news__item-info">
              <span class="news__item-tag">Technical documentation</span>
              <span class="news__item-date">June 3, 2023</span>
            </div>
            <p class="paragraph paragraph_large">
              Introducing Integritee's Teeracle: A Framework to Build TEE-Based
              Oracles
            </p>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup></script>
<style lang="scss">
.news {
  &__title {
    a {
      display: inline-block;
    }
  }
  &__list {
    gap: 20px;
  }
  &__item {
    width: 33.33333333%;
  }
  &__item-image {
    object-fit: cover;
    height: 209px;
    width: 100%;
    border-radius: 24px;
    margin-bottom: 32px;
  }
  &__item-tag {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid #34343a;
    backdrop-filter: blur(30px);
    border-radius: 8px;
    font-size: $pSm;
    padding: 9px 12px;
  }
  &__item-info {
    align-items: center;
    gap: 12px;
    margin-bottom: 18px;
  }
}
</style>
