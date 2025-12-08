
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)


export const AboutHero: typeof import("../components/About/Hero.vue")['default']
export const AboutJoin: typeof import("../components/About/Join.vue")['default']
export const AboutRoadmap: typeof import("../components/About/Roadmap.vue")['default']
export const AboutVision: typeof import("../components/About/Vision.vue")['default']
export const ContactsForm: typeof import("../components/Contacts/Form.vue")['default']
export const ContactsInfo: typeof import("../components/Contacts/Info.vue")['default']
export const Contacts: typeof import("../components/Contacts/index.vue")['default']
export const Desc: typeof import("../components/Desc/index.vue")['default']
export const DevelopersQuickStart: typeof import("../components/Developers/QuickStart.vue")['default']
export const DevelopersResources: typeof import("../components/Developers/Resources.vue")['default']
export const Developers: typeof import("../components/Developers/index.vue")['default']
export const DocsTexts: typeof import("../components/Docs/Texts.vue")['default']
export const Docs: typeof import("../components/Docs/index.vue")['default']
export const Footer: typeof import("../components/Footer/index.vue")['default']
export const GlobalLineLink: typeof import("../components/Global/LineLink.vue")['default']
export const GlobalRadialGradient: typeof import("../components/Global/RadialGradient.vue")['default']
export const GlobalSimple: typeof import("../components/Global/Simple.vue")['default']
export const HeaderMenu: typeof import("../components/Header/Menu.vue")['default']
export const Header: typeof import("../components/Header/index.vue")['default']
export const IndexCommunity: typeof import("../components/Index/Community.vue")['default']
export const IndexMain: typeof import("../components/Index/Main.vue")['default']
export const IndexNews: typeof import("../components/Index/News.vue")['default']
export const IndexScalability: typeof import("../components/Index/Scalability.vue")['default']
export const IndexThings: typeof import("../components/Index/Things.vue")['default']
export const IndexToken: typeof import("../components/Index/Token.vue")['default']
export const Logo: typeof import("../components/Logo/index.vue")['default']
export const ProductsHero: typeof import("../components/Products/Hero.vue")['default']
export const ProductsQuick: typeof import("../components/Products/Quick.vue")['default']
export const ProductsTools: typeof import("../components/Products/Tools.vue")['default']
export const ProductsWhy: typeof import("../components/Products/Why.vue")['default']
export const SocialsSection: typeof import("../components/Socials/Section.vue")['default']
export const Socials: typeof import("../components/Socials/index.vue")['default']
export const TechnologyBuilding: typeof import("../components/Technology/Building.vue")['default']
export const TechnologyHowItWorks: typeof import("../components/Technology/HowItWorks.vue")['default']
export const Technology: typeof import("../components/Technology/index.vue")['default']
export const TeerHowItWorks: typeof import("../components/Teer/HowItWorks.vue")['default']
export const TeerQuestions: typeof import("../components/Teer/Questions.vue")['default']
export const Teer: typeof import("../components/Teer/index.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtIcon: typeof import("../node_modules/nuxt-svgo/dist/runtime/components/nuxt-icon.vue")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const LazyAboutHero: LazyComponent<typeof import("../components/About/Hero.vue")['default']>
export const LazyAboutJoin: LazyComponent<typeof import("../components/About/Join.vue")['default']>
export const LazyAboutRoadmap: LazyComponent<typeof import("../components/About/Roadmap.vue")['default']>
export const LazyAboutVision: LazyComponent<typeof import("../components/About/Vision.vue")['default']>
export const LazyContactsForm: LazyComponent<typeof import("../components/Contacts/Form.vue")['default']>
export const LazyContactsInfo: LazyComponent<typeof import("../components/Contacts/Info.vue")['default']>
export const LazyContacts: LazyComponent<typeof import("../components/Contacts/index.vue")['default']>
export const LazyDesc: LazyComponent<typeof import("../components/Desc/index.vue")['default']>
export const LazyDevelopersQuickStart: LazyComponent<typeof import("../components/Developers/QuickStart.vue")['default']>
export const LazyDevelopersResources: LazyComponent<typeof import("../components/Developers/Resources.vue")['default']>
export const LazyDevelopers: LazyComponent<typeof import("../components/Developers/index.vue")['default']>
export const LazyDocsTexts: LazyComponent<typeof import("../components/Docs/Texts.vue")['default']>
export const LazyDocs: LazyComponent<typeof import("../components/Docs/index.vue")['default']>
export const LazyFooter: LazyComponent<typeof import("../components/Footer/index.vue")['default']>
export const LazyGlobalLineLink: LazyComponent<typeof import("../components/Global/LineLink.vue")['default']>
export const LazyGlobalRadialGradient: LazyComponent<typeof import("../components/Global/RadialGradient.vue")['default']>
export const LazyGlobalSimple: LazyComponent<typeof import("../components/Global/Simple.vue")['default']>
export const LazyHeaderMenu: LazyComponent<typeof import("../components/Header/Menu.vue")['default']>
export const LazyHeader: LazyComponent<typeof import("../components/Header/index.vue")['default']>
export const LazyIndexCommunity: LazyComponent<typeof import("../components/Index/Community.vue")['default']>
export const LazyIndexMain: LazyComponent<typeof import("../components/Index/Main.vue")['default']>
export const LazyIndexNews: LazyComponent<typeof import("../components/Index/News.vue")['default']>
export const LazyIndexScalability: LazyComponent<typeof import("../components/Index/Scalability.vue")['default']>
export const LazyIndexThings: LazyComponent<typeof import("../components/Index/Things.vue")['default']>
export const LazyIndexToken: LazyComponent<typeof import("../components/Index/Token.vue")['default']>
export const LazyLogo: LazyComponent<typeof import("../components/Logo/index.vue")['default']>
export const LazyProductsHero: LazyComponent<typeof import("../components/Products/Hero.vue")['default']>
export const LazyProductsQuick: LazyComponent<typeof import("../components/Products/Quick.vue")['default']>
export const LazyProductsTools: LazyComponent<typeof import("../components/Products/Tools.vue")['default']>
export const LazyProductsWhy: LazyComponent<typeof import("../components/Products/Why.vue")['default']>
export const LazySocialsSection: LazyComponent<typeof import("../components/Socials/Section.vue")['default']>
export const LazySocials: LazyComponent<typeof import("../components/Socials/index.vue")['default']>
export const LazyTechnologyBuilding: LazyComponent<typeof import("../components/Technology/Building.vue")['default']>
export const LazyTechnologyHowItWorks: LazyComponent<typeof import("../components/Technology/HowItWorks.vue")['default']>
export const LazyTechnology: LazyComponent<typeof import("../components/Technology/index.vue")['default']>
export const LazyTeerHowItWorks: LazyComponent<typeof import("../components/Teer/HowItWorks.vue")['default']>
export const LazyTeerQuestions: LazyComponent<typeof import("../components/Teer/Questions.vue")['default']>
export const LazyTeer: LazyComponent<typeof import("../components/Teer/index.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyNuxtIcon: LazyComponent<typeof import("../node_modules/nuxt-svgo/dist/runtime/components/nuxt-icon.vue")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>

export const componentNames: string[]
