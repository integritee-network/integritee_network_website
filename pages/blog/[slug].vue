<template>
  <section id="new">
    <div class="new new-root block">
      <div class="container row blog-row">
        <div class="blog__nav blog-nav-column">
          <Nav />
        </div>
        <div class="new__article">
          <div class="new__article-padding block">
            <h1 class="title new__title margin_medium">{{ $route.params.slug }}</h1>
            <div class="row new__info">
              <span class="tag">News</span>
              <span class="date">June 3, 2023</span>
            </div>
            <img src="http://c5com.com/wp/wp-content/uploads/2011/05/400x400.png" class="new__image margin_large"
              alt="New image" />
            <div class="new__content">
              <h2>Business Updates</h2>
              <h3>Roadmap 2023 Release</h3>
              <p>The 2023 roadmap was finally revealed, and we are excited about what’s ahead! From upcoming partnerships
                with both Web3 and traditional businesses to product releases and tech development, the team has a lot
                planned for these coming months. Interested to check it out? Read through our <a href="#">updated
                  roadmap.</a></p>
              <h3>Partnering up with OLI Systems</h3>
              <p>Integritee is teaming up with the German company OLI Systems, which showcases the relevance of our
                technology for any given use case. OLI is building an energy market solution on Integritee Network by
                using
                our SDK and infrastructure, which combines the benefits of blockchain and Confidential Computing. This
                partnership will enable OLI to offer a LEM solution that’s decentralized as it provides an opportunity for
                household owners to directly trade electricity with each other.</p>
              <p>As you might know, our technology can cover virtually any use case, and this time we’re doing so by
                teaming
                up with an enterprise client. They are using blockchain technology to power their services and to deliver
                innovative solutions for traditional markets. If you want to know more about how Integritee and OLI’s
                collaboration will work, read here.</p>
              <h3>Welcoming our Community</h3>
              <p>We kicked off 2023 with a new podcast series, where our CEO Waldemar Scherer, and Advisor Sergei Medvedev
                answer the community’s questions, talk about the latest updates and discuss other Integritee and
                Web3-related aspects.</p>
              <img src="http://c5com.com/wp/wp-content/uploads/2011/05/400x400.png" />
              <p>You can leave your questions on our Discord channel. We will then collect them and reply live on our
                podcast, so be sure to hit us up once we announce the new date! The next one takes place on March 8,
                4:00pm
                CET, so stay tuned through our social media channels.</p>
              <h2>Tech Updates</h2>
              <h3>Release of the New SDK Version</h3>
              <p>Who doesn’t like updates? Our dev team has been busy working on both product development and software
                improvement to deliver unique, state-of-the-art services. We’ve just released a new version of our
                Sidechain
                SDK! Developers creating their own Web3 apps can now make use of the SDK and all its added benefits. To
                know
                all the technical details regarding the SDK v0.11.0, read our article on it.</p>
            </div>
          </div>
          <div class="new__news">
            <h2 class="title new__title margin_medium">You Might Also Like</h2>
            <div class="new__news-list blog-list">
              <New class="new__news-list-item" />
              <New class="new__news-list-item" />
              <New class="new__news-list-item" />
              <New class="new__news-list-item" />
              <New class="new__news-list-item" />
              <New class="new__news-list-item" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import Nav from '@/components/Blog/Nav.vue'
import New from '@/components/Blog/New.vue'
</script>
<style lang="scss" scoped>
.new-root {
  padding-top: 90px;
}

.new {
  &__title {
    font-size: $tDef;
    font-weight: 500;

    @include slg {
      font-size: 2.25em;
    }

    @include sm {
      font-size: 1.75em;
    }
  }

  &__info {
    margin-bottom: 32px;
    gap: 18px;
    align-items: center;
  }

  &__article {
    width: 100%;

    img {
      position: relative;
      left: -30px;
      width: calc(100% + 30px);
      border-radius: 24px;

      @include sm {
        border-radius: 14px;
        position: static;
        width: 100%;
      }
    }
  }

  &__article-padding {
    padding: 0 30px;

    @include sm {
      padding: 0;
    }
  }

  &__content {
    h2 {
      font-size: $tSmd;
      margin-bottom: 28px;
      margin-top: 22px;
      line-height: 120%;

      @include sm {
        margin: 20px 0;
        font-size: $sm_tSmd;
      }
    }

    h3 {
      font-size: $pLg;
      margin-bottom: 22px;
      margin-top: 22px;
      line-height: 120%;

      @include sm {
        margin: 16px 0;
        font-size: $sm_pLg;
      }
    }

    p {
      font-size: $pDef;
      margin-bottom: 16px;
      line-height: 150%;

      @include slg {
        font-size: 1em;
      }

      @include sm {
        font-size: .875em;
        margin-bottom: 12px;
      }
    }

    a {
      color: #5B92FF;
      transition: .3s ease;
      &:hover {
        color: #7ca8ff;
      }
    }

    img {
      margin: 22px 0;

      @include sm {
        margin: 18px 0;
      }
    }
  }

  &__news-list-item {
    @include xsm {
      margin-bottom: 25px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>