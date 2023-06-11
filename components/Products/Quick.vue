<template>
    <section id="quick">
        <div class="quick block">
            <div class="container">
                <div class="quick__blur" />
                <h2 class="title title_h2 margin_medium">Quick start guides</h2>
                <div class="paragraph paragraph_medium margin_large">Explore our guides to learn more about our tech</div>
                <div class="row quick__links-row margin_large">
                    <a href="#" class="btn btn_border quick__link">GitHub</a>
                    <a href="#" class="btn btn_border quick__link">Docs</a>
                </div>
                <div class="quick__link-list">
                    <LineLink text="What is the TEER Token" link="#" />
                    <LineLink text="How to setup Integritee infrastructure" link="#" />
                    <LineLink text="Governance on Integritee Network" link="#" />
                    <LineLink text="Check out our Technology" link="#" />
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import LineLink from '@/components/Global/LineLink.vue';
</script>
<style lang="scss" scoped>
.quick {
    &__blur {
        position: absolute;
        right: 190px;
        top: -270px;
        width: 506px;
        height: 506px;
        background: #30A8FF;
        opacity: 0.3;
        filter: blur(150px);
        transform: rotate(-20deg);

        @include sm {
            right: unset;
            left: 0;
        }
    }

    &__links-row {
        display: flex;
        gap: 15px;
    }

    &__link-list {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 20px;
        grid-row-gap: 48px;

        @include md {
            display: block;
        }

        a {
            @include md {
                margin-bottom: 32px;

                &:last-child {
                    margin-bottom: 0;
                }
            }

            @include sm {
                margin-bottom: 24px;
            }
        }
    }
}
</style>