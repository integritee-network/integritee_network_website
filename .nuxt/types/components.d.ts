
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

interface _GlobalComponents {
      'AboutHero': typeof import("../../components/About/Hero.vue")['default']
    'AboutJoin': typeof import("../../components/About/Join.vue")['default']
    'AboutRoadmap': typeof import("../../components/About/Roadmap.vue")['default']
    'AboutVision': typeof import("../../components/About/Vision.vue")['default']
    'ContactsForm': typeof import("../../components/Contacts/Form.vue")['default']
    'ContactsInfo': typeof import("../../components/Contacts/Info.vue")['default']
    'Contacts': typeof import("../../components/Contacts/index.vue")['default']
    'Desc': typeof import("../../components/Desc/index.vue")['default']
    'DevelopersQuickStart': typeof import("../../components/Developers/QuickStart.vue")['default']
    'DevelopersResources': typeof import("../../components/Developers/Resources.vue")['default']
    'Developers': typeof import("../../components/Developers/index.vue")['default']
    'DocsTexts': typeof import("../../components/Docs/Texts.vue")['default']
    'Docs': typeof import("../../components/Docs/index.vue")['default']
    'Footer': typeof import("../../components/Footer/index.vue")['default']
    'GlobalLineLink': typeof import("../../components/Global/LineLink.vue")['default']
    'GlobalRadialGradient': typeof import("../../components/Global/RadialGradient.vue")['default']
    'GlobalSimple': typeof import("../../components/Global/Simple.vue")['default']
    'HeaderMenu': typeof import("../../components/Header/Menu.vue")['default']
    'Header': typeof import("../../components/Header/index.vue")['default']
    'IndexCommunity': typeof import("../../components/Index/Community.vue")['default']
    'IndexMain': typeof import("../../components/Index/Main.vue")['default']
    'IndexNews': typeof import("../../components/Index/News.vue")['default']
    'IndexScalability': typeof import("../../components/Index/Scalability.vue")['default']
    'IndexThings': typeof import("../../components/Index/Things.vue")['default']
    'IndexToken': typeof import("../../components/Index/Token.vue")['default']
    'Logo': typeof import("../../components/Logo/index.vue")['default']
    'ProductsHero': typeof import("../../components/Products/Hero.vue")['default']
    'ProductsQuick': typeof import("../../components/Products/Quick.vue")['default']
    'ProductsTools': typeof import("../../components/Products/Tools.vue")['default']
    'ProductsWhy': typeof import("../../components/Products/Why.vue")['default']
    'SocialsSection': typeof import("../../components/Socials/Section.vue")['default']
    'Socials': typeof import("../../components/Socials/index.vue")['default']
    'TechnologyBuilding': typeof import("../../components/Technology/Building.vue")['default']
    'TechnologyHowItWorks': typeof import("../../components/Technology/HowItWorks.vue")['default']
    'Technology': typeof import("../../components/Technology/index.vue")['default']
    'TeerHowItWorks': typeof import("../../components/Teer/HowItWorks.vue")['default']
    'TeerQuestions': typeof import("../../components/Teer/Questions.vue")['default']
    'Teer': typeof import("../../components/Teer/index.vue")['default']
    'NuxtWelcome': typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'NuxtIcon': typeof import("../../node_modules/nuxt-svgo/dist/runtime/components/nuxt-icon.vue")['default']
    'NuxtPage': typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
      'LazyAboutHero': LazyComponent<typeof import("../../components/About/Hero.vue")['default']>
    'LazyAboutJoin': LazyComponent<typeof import("../../components/About/Join.vue")['default']>
    'LazyAboutRoadmap': LazyComponent<typeof import("../../components/About/Roadmap.vue")['default']>
    'LazyAboutVision': LazyComponent<typeof import("../../components/About/Vision.vue")['default']>
    'LazyContactsForm': LazyComponent<typeof import("../../components/Contacts/Form.vue")['default']>
    'LazyContactsInfo': LazyComponent<typeof import("../../components/Contacts/Info.vue")['default']>
    'LazyContacts': LazyComponent<typeof import("../../components/Contacts/index.vue")['default']>
    'LazyDesc': LazyComponent<typeof import("../../components/Desc/index.vue")['default']>
    'LazyDevelopersQuickStart': LazyComponent<typeof import("../../components/Developers/QuickStart.vue")['default']>
    'LazyDevelopersResources': LazyComponent<typeof import("../../components/Developers/Resources.vue")['default']>
    'LazyDevelopers': LazyComponent<typeof import("../../components/Developers/index.vue")['default']>
    'LazyDocsTexts': LazyComponent<typeof import("../../components/Docs/Texts.vue")['default']>
    'LazyDocs': LazyComponent<typeof import("../../components/Docs/index.vue")['default']>
    'LazyFooter': LazyComponent<typeof import("../../components/Footer/index.vue")['default']>
    'LazyGlobalLineLink': LazyComponent<typeof import("../../components/Global/LineLink.vue")['default']>
    'LazyGlobalRadialGradient': LazyComponent<typeof import("../../components/Global/RadialGradient.vue")['default']>
    'LazyGlobalSimple': LazyComponent<typeof import("../../components/Global/Simple.vue")['default']>
    'LazyHeaderMenu': LazyComponent<typeof import("../../components/Header/Menu.vue")['default']>
    'LazyHeader': LazyComponent<typeof import("../../components/Header/index.vue")['default']>
    'LazyIndexCommunity': LazyComponent<typeof import("../../components/Index/Community.vue")['default']>
    'LazyIndexMain': LazyComponent<typeof import("../../components/Index/Main.vue")['default']>
    'LazyIndexNews': LazyComponent<typeof import("../../components/Index/News.vue")['default']>
    'LazyIndexScalability': LazyComponent<typeof import("../../components/Index/Scalability.vue")['default']>
    'LazyIndexThings': LazyComponent<typeof import("../../components/Index/Things.vue")['default']>
    'LazyIndexToken': LazyComponent<typeof import("../../components/Index/Token.vue")['default']>
    'LazyLogo': LazyComponent<typeof import("../../components/Logo/index.vue")['default']>
    'LazyProductsHero': LazyComponent<typeof import("../../components/Products/Hero.vue")['default']>
    'LazyProductsQuick': LazyComponent<typeof import("../../components/Products/Quick.vue")['default']>
    'LazyProductsTools': LazyComponent<typeof import("../../components/Products/Tools.vue")['default']>
    'LazyProductsWhy': LazyComponent<typeof import("../../components/Products/Why.vue")['default']>
    'LazySocialsSection': LazyComponent<typeof import("../../components/Socials/Section.vue")['default']>
    'LazySocials': LazyComponent<typeof import("../../components/Socials/index.vue")['default']>
    'LazyTechnologyBuilding': LazyComponent<typeof import("../../components/Technology/Building.vue")['default']>
    'LazyTechnologyHowItWorks': LazyComponent<typeof import("../../components/Technology/HowItWorks.vue")['default']>
    'LazyTechnology': LazyComponent<typeof import("../../components/Technology/index.vue")['default']>
    'LazyTeerHowItWorks': LazyComponent<typeof import("../../components/Teer/HowItWorks.vue")['default']>
    'LazyTeerQuestions': LazyComponent<typeof import("../../components/Teer/Questions.vue")['default']>
    'LazyTeer': LazyComponent<typeof import("../../components/Teer/index.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyNuxtIcon': LazyComponent<typeof import("../../node_modules/nuxt-svgo/dist/runtime/components/nuxt-icon.vue")['default']>
    'LazyNuxtPage': LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
