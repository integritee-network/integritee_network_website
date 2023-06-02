<template>
  <section id="news">
    <div class="block news">
      <div class="container">
        <h2 class="title title_h2 news__title margin_large">
          Network <a href="#" class="color_blue">news</a>
        </h2>
        <div class="row news__list">
          <a href="#" class="news__item">
            <img src="http://c5com.com/wp/wp-content/uploads/2011/05/400x400.png" alt="New image"
              class="news__item-image" />
            <div class="row news__item-info">
              <span class="news__item-tag">News</span>
              <span class="news__item-date">June 3, 2023</span>
            </div>
            <p class="paragraph paragraph_large news__item-p">
              Monthly Wrap-Up March 2023: Product Releases, a Privacy Sidechain
              & More
            </p>
          </a>
          <a href="#" class="news__item">
            <img src="http://c5com.com/wp/wp-content/uploads/2011/05/400x400.png" alt="New image"
              class="news__item-image" />
            <div class="row news__item-info">
              <span class="news__item-tag">News</span>
              <span class="news__item-date">June 3, 2023</span>
            </div>
            <p class="paragraph paragraph_large news__item-p">
              Securitee Launches Confidential Computing Platform to Protect Data
              in Use
            </p>
          </a>
          <a href="#" class="news__item">
            <img src="http://c5com.com/wp/wp-content/uploads/2011/05/400x400.png" alt="New image"
              class="news__item-image" />
            <div class="row news__item-info">
              <span class="news__item-tag paragraph_small">Technical documentation</span>
              <span class="news__item-date">June 3, 2023</span>
            </div>
            <p class="paragraph paragraph_large news__item-p">
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

    @include md {
      gap: 10px;
    }

    @include sm {
      display: block;
    }
  }

  &__item {
    display: block;
    width: 33.33333333%;

    @include sm {
      margin-bottom: 18px;
      width: 100%;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  &__item-image {
    object-fit: cover;
    height: 209px;
    width: 100%;
    border-radius: 24px;
    margin-bottom: 32px;

    @include md {
      height: 200px;
      border-radius: 18px;
      margin-bottom: 8px;
    }
  }

  &__item-p {
    line-height: 120%;
  }

  &__item-tag {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid #34343a;
    backdrop-filter: blur(30px);
    border-radius: 8px;
    padding: 9px 12px;
  }

  &__item-date {
    color: #E5E5E5;
    opacity: 0.5;
  }

  &__item-info {
    align-items: center;
    gap: 12px;
    margin-bottom: 18px;

    @include md {
      margin-bottom: 8px;
    }
  }
}
</style>
