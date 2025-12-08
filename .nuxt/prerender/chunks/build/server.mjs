import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { defineComponent, shallowRef, h, resolveComponent, createElementBlock, openBlock, createElementVNode, hasInjectionContext, getCurrentInstance, computed, provide, cloneVNode, useSSRContext, ref, inject, Suspense, Fragment, createApp, mergeProps, unref, shallowReactive, withCtx, createVNode, toRef, onErrorCaptured, onServerPrefetch, resolveDynamicComponent, reactive, effectScope, isReadonly, isRef, isShallow, isReactive, toRaw, defineAsyncComponent, getCurrentScope, markRaw, watch, createTextVNode } from 'file:///home/brenzi/integritee/integritee_network_website/node_modules/vue/index.mjs';
import { $fetch } from 'file:///home/brenzi/integritee/integritee_network_website/node_modules/ofetch/dist/node.mjs';
import { b as baseURL, p as publicAssetsURL } from '../_/renderer.mjs';
import { createHooks } from 'file:///home/brenzi/integritee/integritee_network_website/node_modules/hookable/dist/index.mjs';
import { getContext, executeAsync } from 'file:///home/brenzi/integritee/integritee_network_website/node_modules/unctx/dist/index.mjs';
import { sanitizeStatusCode, createError as createError$1, appendHeader } from 'file:///home/brenzi/integritee/integritee_network_website/node_modules/h3/dist/index.mjs';
import { RouterView, createMemoryHistory, createRouter, START_LOCATION } from 'file:///home/brenzi/integritee/integritee_network_website/node_modules/vue-router/dist/vue-router.node.mjs';
import { toRouteMatcher, createRouter as createRouter$1 } from 'file:///home/brenzi/integritee/integritee_network_website/node_modules/radix3/dist/index.mjs';
import { defu } from 'file:///home/brenzi/integritee/integritee_network_website/node_modules/defu/dist/defu.mjs';
import { parseQuery, hasProtocol, joinURL, withQuery, withTrailingSlash, withoutTrailingSlash, isScriptProtocol } from 'file:///home/brenzi/integritee/integritee_network_website/node_modules/ufo/dist/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderSuspense, ssrRenderVNode, ssrRenderClass } from 'file:///home/brenzi/integritee/integritee_network_website/node_modules/vue/server-renderer/index.mjs';
import { useWindowSize, useWindowScroll } from 'file:///home/brenzi/integritee/integritee_network_website/node_modules/@vueuse/core/index.mjs';
import 'file:///home/brenzi/integritee/integritee_network_website/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import '../nitro/nitro.mjs';
import 'file:///home/brenzi/integritee/integritee_network_website/node_modules/destr/dist/index.mjs';
import 'file:///home/brenzi/integritee/integritee_network_website/node_modules/node-mock-http/dist/index.mjs';
import 'file:///home/brenzi/integritee/integritee_network_website/node_modules/unstorage/dist/index.mjs';
import 'file:///home/brenzi/integritee/integritee_network_website/node_modules/unstorage/drivers/fs.mjs';
import 'file:///home/brenzi/integritee/integritee_network_website/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///home/brenzi/integritee/integritee_network_website/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///home/brenzi/integritee/integritee_network_website/node_modules/ohash/dist/index.mjs';
import 'file:///home/brenzi/integritee/integritee_network_website/node_modules/klona/dist/index.mjs';
import 'file:///home/brenzi/integritee/integritee_network_website/node_modules/scule/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///home/brenzi/integritee/integritee_network_website/node_modules/pathe/dist/index.mjs';
import 'file:///home/brenzi/integritee/integritee_network_website/node_modules/unhead/dist/server.mjs';
import 'file:///home/brenzi/integritee/integritee_network_website/node_modules/devalue/index.js';
import 'file:///home/brenzi/integritee/integritee_network_website/node_modules/unhead/dist/plugins.mjs';
import 'file:///home/brenzi/integritee/integritee_network_website/node_modules/unhead/dist/utils.mjs';

if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
if (!("global" in globalThis)) {
  globalThis.global = globalThis;
}
const nuxtLinkDefaults = { "componentName": "NuxtLink" };
const appId = "nuxt-app";
function getNuxtAppCtx(id = appId) {
  return getContext(id, {
    asyncContext: false
  });
}
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    _id: options.id || appId || "nuxt-app",
    _scope: effectScope(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.19.2";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: shallowReactive({
      ...options.ssrContext?.payload || {},
      data: shallowReactive({}),
      state: reactive({}),
      once: /* @__PURE__ */ new Set(),
      _errors: shallowReactive({})
    }),
    static: {
      data: {}
    },
    runWithContext(fn) {
      if (nuxtApp._scope.active && !getCurrentScope()) {
        return nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn));
      }
      return callWithNuxt(nuxtApp, fn);
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: shallowReactive({}),
    _payloadRevivers: {},
    ...options
  };
  {
    nuxtApp.payload.serverRendered = true;
  }
  if (nuxtApp.ssrContext) {
    nuxtApp.payload.path = nuxtApp.ssrContext.url;
    nuxtApp.ssrContext.nuxt = nuxtApp;
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: nuxtApp.ssrContext.runtimeConfig.public,
      app: nuxtApp.ssrContext.runtimeConfig.app
    };
  }
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
function registerPluginHooks(nuxtApp, plugin2) {
  if (plugin2.hooks) {
    nuxtApp.hooks.addHooks(plugin2.hooks);
  }
}
async function applyPlugin(nuxtApp, plugin2) {
  if (typeof plugin2 === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin2(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  const resolvedPlugins = /* @__PURE__ */ new Set();
  const unresolvedPlugins = [];
  const parallels = [];
  let error = void 0;
  let promiseDepth = 0;
  async function executePlugin(plugin2) {
    const unresolvedPluginsForThisPlugin = plugin2.dependsOn?.filter((name) => plugins2.some((p) => p._name === name) && !resolvedPlugins.has(name)) ?? [];
    if (unresolvedPluginsForThisPlugin.length > 0) {
      unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin2]);
    } else {
      const promise = applyPlugin(nuxtApp, plugin2).then(async () => {
        if (plugin2._name) {
          resolvedPlugins.add(plugin2._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin2._name)) {
              dependsOn.delete(plugin2._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      }).catch((e) => {
        if (!plugin2.parallel && !nuxtApp.payload.error) {
          throw e;
        }
        error ||= e;
      });
      if (plugin2.parallel) {
        parallels.push(promise);
      } else {
        await promise;
      }
    }
  }
  for (const plugin2 of plugins2) {
    if (nuxtApp.ssrContext?.islandContext && plugin2.env?.islands === false) {
      continue;
    }
    registerPluginHooks(nuxtApp, plugin2);
  }
  for (const plugin2 of plugins2) {
    if (nuxtApp.ssrContext?.islandContext && plugin2.env?.islands === false) {
      continue;
    }
    await executePlugin(plugin2);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++) {
      await Promise.all(parallels);
    }
  }
  if (error) {
    throw nuxtApp.payload.error || error;
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin2) {
  if (typeof plugin2 === "function") {
    return plugin2;
  }
  const _name = plugin2._name || plugin2.name;
  delete plugin2.name;
  return Object.assign(plugin2.setup || (() => {
  }), plugin2, { [NuxtPluginIndicator]: true, _name });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => setup();
  const nuxtAppCtx = getNuxtAppCtx(nuxt._id);
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
function tryUseNuxtApp(id) {
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = getCurrentInstance()?.appContext.app.$nuxt;
  }
  nuxtAppInstance ||= getNuxtAppCtx(id).tryUse();
  return nuxtAppInstance || null;
}
function useNuxtApp(id) {
  const nuxtAppInstance = tryUseNuxtApp(id);
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig(_event) {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const LayoutMetaSymbol = Symbol("layout-meta");
const PageRouteSymbol = Symbol("route");
function toArray$1(value) {
  return Array.isArray(value) ? value : [value];
}
globalThis._importMeta_.url.replace(/\/app\/.*$/, "/");
const useRouter = () => {
  return useNuxtApp()?.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
};
const URL_QUOTE_RE = /"/g;
const navigateTo = (to, options) => {
  to ||= "/";
  const toPath = typeof to === "string" ? to : "path" in to ? resolveRouteObject(to) : useRouter().resolve(to).href;
  const isExternalHost = hasProtocol(toPath, { acceptRelative: true });
  const isExternal = options?.external || isExternalHost;
  if (isExternal) {
    if (!options?.external) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const { protocol } = new URL(toPath, "http://localhost");
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(URL_QUOTE_RE, "%22");
        const encodedHeader = encodeURL(location2, isExternalHost);
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode(options?.redirectCode || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: encodedHeader }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options?.replace) {
      (void 0).replace(toPath);
    } else {
      (void 0).href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return options?.replace ? router.replace(to) : router.push(to);
};
function resolveRouteObject(to) {
  return withQuery(to.path || "", to.query || {}) + (to.hash || "");
}
function encodeURL(location2, isExternalHost = false) {
  const url = new URL(location2, "http://localhost");
  if (!isExternalHost) {
    return url.pathname + url.search + url.hash;
  }
  if (location2.startsWith("//")) {
    return url.toString().replace(url.protocol, "");
  }
  return url.toString();
}
const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (error) => {
  const nuxtError = createError(error);
  try {
    const nuxtApp = useNuxtApp();
    const error2 = useError();
    if (false) ;
    error2.value ||= nuxtError;
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const isNuxtError = (error) => !!error && typeof error === "object" && NUXT_ERROR_SIGNATURE in error;
const createError = (error) => {
  const nuxtError = createError$1(error);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  return nuxtError;
};
const unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    nuxtApp.vueApp.use(head);
  }
});
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
async function getRouteRules(arg) {
  const path = typeof arg === "string" ? arg : arg.path;
  {
    useNuxtApp().ssrContext._preloadManifest = true;
    const _routeRulesMatcher = toRouteMatcher(
      createRouter$1({ routes: (/* @__PURE__ */ useRuntimeConfig()).nitro.routeRules })
    );
    return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
  }
}
const _routes = [
  {
    name: "about",
    path: "/about",
    component: () => import('./about-njy7ePbB.mjs')
  },
  {
    name: "index",
    path: "/",
    component: () => import('./index-Dy-mDs1H.mjs')
  },
  {
    name: "contacts",
    path: "/contacts",
    component: () => import('./contacts-BDwNLPy8.mjs')
  },
  {
    name: "products",
    path: "/products",
    component: () => import('./products-BbNv40AF.mjs')
  },
  {
    name: "useCases",
    path: "/useCases",
    component: () => import('./useCases-cRyUaQtu.mjs')
  },
  {
    name: "blog",
    path: "/blog",
    component: () => import('./index-Dx7_WzVl.mjs')
  },
  {
    name: "developers",
    path: "/developers",
    component: () => import('./developers-BDf_SwK9.mjs')
  },
  {
    name: "technology",
    path: "/technology",
    component: () => import('./technology-Do50E7vv.mjs')
  },
  {
    name: "teer-Token",
    path: "/teer-Token",
    component: () => import('./teer-Token-DGW7bhyT.mjs')
  },
  {
    name: "privacy-policy",
    path: "/privacy-policy",
    component: () => import('./privacy-policy-BkMyD-P6.mjs')
  }
];
const ROUTE_KEY_PARENTHESES_RE = /(:\w+)\([^)]+\)/g;
const ROUTE_KEY_SYMBOLS_RE = /(:\w+)[?+*]/g;
const ROUTE_KEY_NORMAL_RE = /:\w+/g;
function generateRouteKey(route) {
  const source = route?.meta.key ?? route.path.replace(ROUTE_KEY_PARENTHESES_RE, "$1").replace(ROUTE_KEY_SYMBOLS_RE, "$1").replace(ROUTE_KEY_NORMAL_RE, (r) => route.params[r.slice(1)]?.toString() || "");
  return typeof source === "function" ? source(route) : source;
}
function isChangingPage(to, from) {
  if (to === from || from === START_LOCATION) {
    return false;
  }
  if (generateRouteKey(to) !== generateRouteKey(from)) {
    return true;
  }
  const areComponentsSame = to.matched.every(
    (comp, index) => comp.components && comp.components.default === from.matched[index]?.components?.default
  );
  if (areComponentsSame) {
    return false;
  }
  return true;
}
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    const nuxtApp = useNuxtApp();
    const hashScrollBehaviour = useRouter().options?.scrollBehaviorType ?? "auto";
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior: hashScrollBehaviour };
      }
      return false;
    }
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (routeAllowsScrollToTop === false) {
      return false;
    }
    const hookToWait = nuxtApp._runningTransition ? "page:transition:finish" : "page:loading:end";
    return new Promise((resolve) => {
      if (from === START_LOCATION) {
        resolve(_calculatePosition(to, from, savedPosition, hashScrollBehaviour));
        return;
      }
      nuxtApp.hooks.hookOnce(hookToWait, () => {
        requestAnimationFrame(() => resolve(_calculatePosition(to, from, savedPosition, hashScrollBehaviour)));
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = (void 0).querySelector(selector);
    if (elem) {
      return (Number.parseFloat(getComputedStyle(elem).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle((void 0).documentElement).scrollPaddingTop) || 0);
    }
  } catch {
  }
  return 0;
}
function _calculatePosition(to, from, savedPosition, defaultHashScrollBehaviour) {
  if (savedPosition) {
    return savedPosition;
  }
  const isPageNavigation = isChangingPage(to, from);
  if (to.hash) {
    return {
      el: to.hash,
      top: _getHashElementScrollMarginTop(to.hash),
      behavior: isPageNavigation ? defaultHashScrollBehaviour : "instant"
    };
  }
  return {
    left: 0,
    top: 0
  };
}
const configRouterOptions = {
  hashMode: false,
  scrollBehaviorType: "auto"
};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to, from) => {
  let __temp, __restore;
  if (!to.meta?.validate) {
    return;
  }
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  const error = createError({
    fatal: false,
    statusCode: result && result.statusCode || 404,
    statusMessage: result && result.statusMessage || `Page Not Found: ${to.fullPath}`,
    data: {
      path: to.fullPath
    }
  });
  return error;
});
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  {
    return;
  }
});
const globalMiddleware = [
  validate,
  manifest_45route_45rule
];
const namedMiddleware = {};
const plugin$1 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    let __temp, __restore;
    let routerBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    const history = routerOptions.history?.(routerBase) ?? createMemoryHistory(routerBase);
    const routes2 = routerOptions.routes ? ([__temp, __restore] = executeAsync(() => routerOptions.routes(_routes)), __temp = await __temp, __restore(), __temp) ?? _routes : _routes;
    let startPosition;
    const router = createRouter({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        if (routerOptions.scrollBehavior) {
          router.options.scrollBehavior = routerOptions.scrollBehavior;
          if ("scrollRestoration" in (void 0).history) {
            const unsub = router.beforeEach(() => {
              unsub();
              (void 0).history.scrollRestoration = "manual";
            });
          }
          return routerOptions.scrollBehavior(to, START_LOCATION, startPosition || savedPosition);
        }
      },
      history,
      routes: routes2
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const initialURL = nuxtApp.ssrContext.url;
    const _route = shallowRef(router.currentRoute.value);
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      if (to.matched[to.matched.length - 1]?.components?.default === from.matched[from.matched.length - 1]?.components?.default) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key],
        enumerable: true
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware ||= {
      global: [],
      named: {}
    };
    useError();
    if (!nuxtApp.ssrContext?.islandContext) {
      router.afterEach(async (to, _from, failure) => {
        delete nuxtApp._processingMiddleware;
        if (failure) {
          await nuxtApp.callHook("page:loading:end");
        }
        if (failure?.type === 4) {
          return;
        }
        if (to.redirectedFrom && to.fullPath !== initialURL) {
          await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
        }
      });
    }
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    const resolvedInitialRoute = router.currentRoute.value;
    syncCurrentRoute();
    if (nuxtApp.ssrContext?.islandContext) {
      return { provide: { router } };
    }
    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to, from) => {
      await nuxtApp.callHook("page:loading:start");
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout;
      }
      nuxtApp._processingMiddleware = true;
      if (!nuxtApp.ssrContext?.islandContext) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          for (const entry2 of toArray(componentMiddleware)) {
            middlewareEntries.add(entry2);
          }
        }
        {
          const routeRules = await nuxtApp.runWithContext(() => getRouteRules({ path: to.path }));
          if (routeRules.appMiddleware) {
            for (const key in routeRules.appMiddleware) {
              if (routeRules.appMiddleware[key]) {
                middlewareEntries.add(key);
              } else {
                middlewareEntries.delete(key);
              }
            }
          }
        }
        for (const entry2 of middlewareEntries) {
          const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await namedMiddleware[entry2]?.().then((r) => r.default || r) : entry2;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry2}'.`);
          }
          try {
            if (false) ;
            const result = await nuxtApp.runWithContext(() => middleware(to, from));
            if (true) {
              if (result === false || result instanceof Error) {
                const error2 = result || createError({
                  statusCode: 404,
                  statusMessage: `Page Not Found: ${initialURL}`
                });
                await nuxtApp.runWithContext(() => showError(error2));
                return false;
              }
            }
            if (result === true) {
              continue;
            }
            if (result === false) {
              return result;
            }
            if (result) {
              if (isNuxtError(result) && result.fatal) {
                await nuxtApp.runWithContext(() => showError(result));
              }
              return result;
            }
          } catch (err) {
            const error2 = createError(err);
            if (error2.fatal) {
              await nuxtApp.runWithContext(() => showError(error2));
            }
            return error2;
          }
        }
      }
    });
    router.onError(async () => {
      delete nuxtApp._processingMiddleware;
      await nuxtApp.callHook("page:loading:end");
    });
    router.afterEach((to) => {
      if (to.matched.length === 0) {
        return nuxtApp.runWithContext(() => showError(createError({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${to.fullPath}`,
          data: {
            path: to.fullPath
          }
        })));
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        if ("name" in resolvedInitialRoute) {
          resolvedInitialRoute.name = void 0;
        }
        await router.replace({
          ...resolvedInitialRoute,
          force: true
        });
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});
function definePayloadReducer(name, reduce) {
  {
    useNuxtApp().ssrContext._payloadReducers[name] = reduce;
  }
}
const reducers = [
  ["NuxtError", (data) => isNuxtError(data) && data.toJSON()],
  ["EmptyShallowRef", (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["EmptyRef", (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["ShallowRef", (data) => isRef(data) && isShallow(data) && data.value],
  ["ShallowReactive", (data) => isReactive(data) && isShallow(data) && toRaw(data)],
  ["Ref", (data) => isRef(data) && data.value],
  ["Reactive", (data) => isReactive(data) && toRaw(data)]
];
const revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const [reducer, fn] of reducers) {
      definePayloadReducer(reducer, fn);
    }
  }
});
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
const piniaSymbol = Symbol("pinia") ;
var MutationType;
(function(MutationType2) {
  MutationType2["direct"] = "direct";
  MutationType2["patchObject"] = "patch object";
  MutationType2["patchFunction"] = "patch function";
})(MutationType || (MutationType = {}));
function createPinia() {
  const scope = effectScope(true);
  const state = scope.run(() => ref({}));
  let _p = [];
  let toBeInstalled = [];
  const pinia = markRaw({
    install(app) {
      {
        pinia._a = app;
        app.provide(piniaSymbol, pinia);
        app.config.globalProperties.$pinia = pinia;
        toBeInstalled.forEach((plugin2) => _p.push(plugin2));
        toBeInstalled = [];
      }
    },
    use(plugin2) {
      if (!this._a && true) {
        toBeInstalled.push(plugin2);
      } else {
        _p.push(plugin2);
      }
      return this;
    },
    _p,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: scope,
    _s: /* @__PURE__ */ new Map(),
    state
  });
  return pinia;
}
defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const clientOnlySymbol = Symbol.for("nuxt:client-only");
defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  ...false,
  setup(props, { slots, attrs }) {
    const mounted = shallowRef(false);
    const vm = getCurrentInstance();
    if (vm) {
      vm._nuxtClientOnly = true;
    }
    provide(clientOnlySymbol, true);
    return () => {
      if (mounted.value) {
        const vnodes = slots.default?.();
        if (vnodes && vnodes.length === 1) {
          return [cloneVNode(vnodes[0], attrs)];
        }
        return vnodes;
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return h(slot);
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
function useRequestEvent(nuxtApp) {
  nuxtApp ||= useNuxtApp();
  return nuxtApp.ssrContext?.event;
}
function prerenderRoutes(path) {
  const paths = toArray$1(path);
  appendHeader(useRequestEvent(), "x-nitro-prerender", paths.map((p) => encodeURIComponent(p)).join(", "));
}
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
// @__NO_SIDE_EFFECTS__
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  function isHashLinkWithoutHashMode(link) {
    return typeof link === "string" && link.startsWith("#");
  }
  function resolveTrailingSlashBehavior(to, resolve, trailingSlash) {
    const effectiveTrailingSlash = trailingSlash ?? options.trailingSlash;
    if (!to || effectiveTrailingSlash !== "append" && effectiveTrailingSlash !== "remove") {
      return to;
    }
    if (typeof to === "string") {
      return applyTrailingSlashBehavior(to, effectiveTrailingSlash);
    }
    const path = "path" in to && to.path !== void 0 ? to.path : resolve(to).path;
    const resolvedPath = {
      ...to,
      name: void 0,
      // named routes would otherwise always override trailing slash behavior
      path: applyTrailingSlashBehavior(path, effectiveTrailingSlash)
    };
    return resolvedPath;
  }
  function useNuxtLink(props) {
    const router = useRouter();
    const config = /* @__PURE__ */ useRuntimeConfig();
    const hasTarget = computed(() => !!props.target && props.target !== "_self");
    const isAbsoluteUrl = computed(() => {
      const path = props.to || props.href || "";
      return typeof path === "string" && hasProtocol(path, { acceptRelative: true });
    });
    const builtinRouterLink = resolveComponent("RouterLink");
    const useBuiltinLink = builtinRouterLink && typeof builtinRouterLink !== "string" ? builtinRouterLink.useLink : void 0;
    const isExternal = computed(() => {
      if (props.external) {
        return true;
      }
      const path = props.to || props.href || "";
      if (typeof path === "object") {
        return false;
      }
      return path === "" || isAbsoluteUrl.value;
    });
    const to = computed(() => {
      const path = props.to || props.href || "";
      if (isExternal.value) {
        return path;
      }
      return resolveTrailingSlashBehavior(path, router.resolve, props.trailingSlash);
    });
    const link = isExternal.value ? void 0 : useBuiltinLink?.({ ...props, to });
    const href = computed(() => {
      const effectiveTrailingSlash = props.trailingSlash ?? options.trailingSlash;
      if (!to.value || isAbsoluteUrl.value || isHashLinkWithoutHashMode(to.value)) {
        return to.value;
      }
      if (isExternal.value) {
        const path = typeof to.value === "object" && "path" in to.value ? resolveRouteObject(to.value) : to.value;
        const href2 = typeof path === "object" ? router.resolve(path).href : path;
        return applyTrailingSlashBehavior(href2, effectiveTrailingSlash);
      }
      if (typeof to.value === "object") {
        return router.resolve(to.value)?.href ?? null;
      }
      return applyTrailingSlashBehavior(joinURL(config.app.baseURL, to.value), effectiveTrailingSlash);
    });
    return {
      to,
      hasTarget,
      isAbsoluteUrl,
      isExternal,
      //
      href,
      isActive: link?.isActive ?? computed(() => to.value === router.currentRoute.value.path),
      isExactActive: link?.isExactActive ?? computed(() => to.value === router.currentRoute.value.path),
      route: link?.route ?? computed(() => router.resolve(to.value)),
      async navigate(_e) {
        await navigateTo(href.value, { replace: props.replace, external: isExternal.value || hasTarget.value });
      }
    };
  }
  return defineComponent({
    name: componentName,
    props: {
      // Routing
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      // Attributes
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Prefetching
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      prefetchOn: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Styling
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      // Vue Router's `<RouterLink>` additional props
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      // Edge cases handling
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Slot API
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Behavior
      trailingSlash: {
        type: String,
        default: void 0,
        required: false
      }
    },
    useLink: useNuxtLink,
    setup(props, { slots }) {
      const router = useRouter();
      const { to, href, navigate, isExternal, hasTarget, isAbsoluteUrl } = useNuxtLink(props);
      shallowRef(false);
      const el = void 0;
      const elRef = void 0;
      async function prefetch(nuxtApp = useNuxtApp()) {
        {
          return;
        }
      }
      return () => {
        if (!isExternal.value && !hasTarget.value && !isHashLinkWithoutHashMode(to.value)) {
          const routerLinkProps = {
            ref: elRef,
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue,
            custom: props.custom
          };
          if (!props.custom) {
            routerLinkProps.rel = props.rel || void 0;
          }
          return h(
            resolveComponent("RouterLink"),
            routerLinkProps,
            slots.default
          );
        }
        const target = props.target || null;
        const rel = firstNonUndefined(
          // converts `""` to `null` to prevent the attribute from being added as empty (`rel=""`)
          props.noRel ? "" : props.rel,
          options.externalRelAttribute,
          /*
          * A fallback rel of `noopener noreferrer` is applied for external links or links that open in a new tab.
          * This solves a reverse tabnapping security flaw in browsers pre-2021 as well as improving privacy.
          */
          isAbsoluteUrl.value || hasTarget.value ? "noopener noreferrer" : ""
        ) || null;
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href: href.value,
            navigate,
            prefetch,
            get route() {
              if (!href.value) {
                return void 0;
              }
              const url = new URL(href.value, "http://localhost");
              return {
                path: url.pathname,
                fullPath: url.pathname,
                get query() {
                  return parseQuery(url.search);
                },
                hash: url.hash,
                params: {},
                name: void 0,
                matched: [],
                redirectedFrom: void 0,
                meta: {},
                href: href.value
              };
            },
            rel,
            target,
            isExternal: isExternal.value || hasTarget.value,
            isActive: false,
            isExactActive: false
          });
        }
        return h("a", {
          ref: el,
          href: href.value || null,
          // converts `""` to `null` to prevent the attribute from being added as empty (`href=""`)
          rel,
          target,
          onClick: (event) => {
            if (isExternal.value || hasTarget.value) {
              return;
            }
            event.preventDefault();
            return props.replace ? router.replace(href.value) : router.push(href.value);
          }
        }, slots.default?.());
      };
    }
    // }) as unknown as DefineComponent<NuxtLinkProps, object, object, ComputedOptions, MethodOptions, object, object, EmitsOptions, string, object, NuxtLinkProps, object, SlotsType<NuxtLinkSlots>>
  });
}
const __nuxt_component_0$2 = /* @__PURE__ */ defineNuxtLink(nuxtLinkDefaults);
function applyTrailingSlashBehavior(to, trailingSlash) {
  const normalizeFn = trailingSlash === "append" ? withTrailingSlash : withoutTrailingSlash;
  const hasProtocolDifferentFromHttp = hasProtocol(to) && !to.startsWith("http");
  if (hasProtocolDifferentFromHttp) {
    return to;
  }
  return normalizeFn(to, true);
}
const plugin = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  const pinia = createPinia();
  nuxtApp.vueApp.use(pinia);
  {
    nuxtApp.payload.pinia = pinia.state.value;
  }
  return {
    provide: {
      pinia
    }
  };
});
const components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components"
});
let routes;
const prerender_server_sqIxOBipVr4FbVMA9kqWL0wT8FPop6sKAXLVfifsJzk = /* @__PURE__ */ defineNuxtPlugin(async () => {
  let __temp, __restore;
  if (routes && !routes.length) {
    return;
  }
  (/* @__PURE__ */ useRuntimeConfig()).nitro.routeRules;
  routes ||= Array.from(processRoutes(([__temp, __restore] = executeAsync(() => routerOptions.routes?.(_routes)), __temp = await __temp, __restore(), __temp) ?? _routes));
  const batch = routes.splice(0, 10);
  prerenderRoutes(batch);
});
const OPTIONAL_PARAM_RE = /^\/?:.*(?:\?|\(\.\*\)\*)$/;
function shouldPrerender(path) {
  return true;
}
function processRoutes(routes2, currentPath = "/", routesToPrerender = /* @__PURE__ */ new Set()) {
  for (const route of routes2) {
    if (OPTIONAL_PARAM_RE.test(route.path) && !route.children?.length && shouldPrerender()) {
      routesToPrerender.add(currentPath);
    }
    if (route.path.includes(":")) {
      continue;
    }
    const fullPath = joinURL(currentPath, route.path);
    {
      routesToPrerender.add(fullPath);
    }
    if (route.children) {
      processRoutes(route.children, fullPath, routesToPrerender);
    }
  }
  return routesToPrerender;
}
const plugins = [
  unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU,
  plugin$1,
  revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms,
  plugin,
  components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4,
  prerender_server_sqIxOBipVr4FbVMA9kqWL0wT8FPop6sKAXLVfifsJzk
];
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$7 = {
  __name: "Menu",
  __ssrInlineRender: true,
  props: {
    active: {
      type: Boolean,
      required: true,
      default: false
    },
    clickHandler: {
      type: Function,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: __props.active ? null : { display: "none" },
        class: "menu"
      }, _attrs))} data-v-6e2ebb7b><nav class="menu__nav" data-v-6e2ebb7b>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/products",
        onClick: __props.clickHandler,
        class: "text-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Products`);
          } else {
            return [
              createTextVNode("Products")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/usecases",
        onClick: __props.clickHandler,
        class: "text-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Use Cases `);
          } else {
            return [
              createTextVNode(" Use Cases ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/technology",
        onClick: __props.clickHandler,
        class: "text-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Technology`);
          } else {
            return [
              createTextVNode("Technology")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/developers",
        onClick: __props.clickHandler,
        class: "text-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Developers`);
          } else {
            return [
              createTextVNode("Developers")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/teer-token",
        onClick: __props.clickHandler,
        class: "text-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`TEER Token`);
          } else {
            return [
              createTextVNode("TEER Token")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        onClick: __props.clickHandler,
        class: "text-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About`);
          } else {
            return [
              createTextVNode("About")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/blog",
        onClick: __props.clickHandler,
        class: "text-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Blog`);
          } else {
            return [
              createTextVNode("Blog")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contacts",
        onClick: __props.clickHandler,
        class: "text-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contacts`);
          } else {
            return [
              createTextVNode("Contacts")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav></div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/Menu.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Menu = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-6e2ebb7b"]]);
const _sfc_main$6 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "144",
    height: "30",
    viewBox: "0 0 144 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))} data-v-5a75ec0f><path class="blue-hover" d="M39 23.0178H42.5455V6.44773H39V23.0178Z" fill="white" data-v-5a75ec0f></path><path class="blue-hover" d="M45.5413 23.0178H48.8536V17.4076C48.8536 16.153 48.8769 13.5965 51.1862 13.5965C52.3291 13.5965 53.0523 14.2593 53.0523 15.8216V23.0178H56.3645V15.1825C56.3645 12.555 54.965 10.827 52.3991 10.827C50.533 10.827 49.3668 12.2236 48.8303 13.9043H47.384C48.0138 12.9811 48.5037 11.9632 48.527 11.182H45.5413V23.0178Z" fill="white" data-v-5a75ec0f></path><path class="blue-hover" d="M63.1449 23.0178H67.0404V20.3429H64.5212C63.798 20.3429 63.4948 20.0115 63.4948 19.3014V13.7386H66.5272V11.182H63.4948V7.46561H60.1825V11.182H57.7333V13.7386H60.1825V19.9168C60.1825 21.7632 61.2555 23.0178 63.1449 23.0178Z" fill="white" data-v-5a75ec0f></path><path class="blue-hover" d="M73.6815 23.3965C77.2271 23.3965 78.6966 21.4555 79.3497 19.9405L76.3873 18.7806C75.8975 19.8931 75.1744 20.84 73.6815 20.84C72.2586 20.84 71.1623 19.9878 71.069 17.9047H79.3031C79.6296 13.9516 77.577 10.827 73.6582 10.827C70.2759 10.827 67.7567 13.3598 67.7567 17.0762C67.7567 20.9584 70.0893 23.3965 73.6815 23.3965ZM71.1856 15.5376C71.4189 14.0463 72.3286 13.2415 73.6582 13.2415C75.0577 13.2415 75.8975 14.07 76.0374 15.5376H71.1856Z" fill="white" data-v-5a75ec0f></path><path class="blue-hover" d="M83.2758 27.6337H89.2706C91.5565 27.6337 93.3293 26.3555 93.3293 23.9646C93.3293 22.0473 91.7664 20.3902 89.2706 20.3902H84.2555C83.579 20.3902 83.0892 20.3902 83.0892 19.8695C83.0892 19.4907 83.3224 19.2303 83.9756 19.041C84.6753 19.3487 85.5384 19.4434 86.4015 19.4434C89.1306 19.4434 91.16 17.8811 91.4399 15.3245L91.4632 15.1115C91.6031 13.9043 91.7898 13.7386 92.5129 13.7386H93.7958V11.182H93.1893C92.0697 11.182 91.5332 11.5844 91.3466 13.3125H90.3435C89.7371 11.5844 87.9876 10.827 86.0749 10.827C83.3458 10.827 81.2231 12.6023 81.2231 15.0878C81.2231 16.2951 81.7363 16.9579 82.5527 17.5497V18.6149C81.5497 18.9463 80.6399 19.5617 80.6399 20.84C80.6399 21.6922 81.2231 22.213 81.9695 22.426V23.5149C81.1298 23.7753 80.36 24.4617 80.36 25.4086C80.36 26.5448 81.0598 27.6337 83.2758 27.6337ZM86.3781 17.2419C85.1419 17.2419 84.3254 16.4371 84.3254 15.2299C84.3254 13.9989 85.1419 13.0994 86.3781 13.0994C87.6144 13.0994 88.4308 13.9989 88.4308 15.2299C88.4308 16.4371 87.6144 17.2419 86.3781 17.2419ZM84.0689 25.1956C83.4391 25.1956 82.9026 24.8405 82.9026 24.083C82.9026 23.6096 83.2291 23.1835 83.509 23.0178H88.6174C89.7137 23.0178 90.0636 23.5386 90.0636 24.083C90.0636 24.7458 89.7137 25.1956 88.6174 25.1956H84.0689Z" fill="white" data-v-5a75ec0f></path><path class="blue-hover" d="M95.2475 23.0178H98.5597V18.4729C98.5597 15.2772 99.6094 14.354 101.989 14.354C102.385 14.354 102.805 14.3777 103.272 14.425V10.969C103.085 10.9453 102.922 10.9453 102.572 10.9453C100.099 10.9453 99.1429 12.3419 98.6297 14.7801H97.2302C97.7667 13.8806 98.2332 12.413 98.2332 11.182H95.2475V23.0178Z" fill="white" data-v-5a75ec0f></path><path class="blue-hover" d="M104.664 9.57237H108.186V6.40039H104.664V9.57237ZM104.78 23.0178H108.093V11.182H104.78V23.0178Z" fill="white" data-v-5a75ec0f></path><path class="blue-hover" d="M114.959 23.0178H118.854V20.3429H116.335C115.612 20.3429 115.309 20.0115 115.309 19.3014V13.7386H118.341V11.182H115.309V7.46561H111.996V11.182H109.547V13.7386H111.996V19.9168C111.996 21.7632 113.069 23.0178 114.959 23.0178Z" fill="white" data-v-5a75ec0f></path><path class="blue-hover" d="M125.495 23.3965C129.041 23.3965 130.51 21.4555 131.163 19.9405L128.201 18.7806C127.711 19.8931 126.988 20.84 125.495 20.84C124.072 20.84 122.976 19.9878 122.883 17.9047H131.117C131.443 13.9516 129.391 10.827 125.472 10.827C122.09 10.827 119.57 13.3598 119.57 17.0762C119.57 20.9584 121.903 23.3965 125.495 23.3965ZM122.999 15.5376C123.233 14.0463 124.142 13.2415 125.472 13.2415C126.871 13.2415 127.711 14.07 127.851 15.5376H122.999Z" fill="white" data-v-5a75ec0f></path><path class="blue-hover" d="M138.332 23.3965C141.877 23.3965 143.347 21.4555 144 19.9405L141.038 18.7806C140.548 19.8931 139.825 20.84 138.332 20.84C136.909 20.84 135.813 19.9878 135.719 17.9047H143.953C144.28 13.9516 142.227 10.827 138.308 10.827C134.926 10.827 132.407 13.3598 132.407 17.0762C132.407 20.9584 134.74 23.3965 138.332 23.3965ZM135.836 15.5376C136.069 14.0463 136.979 13.2415 138.308 13.2415C139.708 13.2415 140.548 14.07 140.688 15.5376H135.836Z" fill="white" data-v-5a75ec0f></path><path d="M4.44434 11V24.6176C4.44396 24.7841 4.4885 24.9478 4.57343 25.0919C4.65836 25.2361 4.78073 25.3556 4.92797 25.4384C6.32268 26.2243 10.3873 28.5162 12.6222 29.7711C12.8089 29.8774 13.0983 30.0514 13.2327 29.9855C13.9796 29.6191 14.7114 29.1739 15.5087 28.7232C15.2996 28.5821 15.1913 28.4997 15.0718 28.4319C12.3621 26.8893 9.65289 25.3467 6.94438 23.8042V21.0561L9.1083 22.2818C11.8803 23.8488 14.6529 25.4133 17.4262 26.9754C17.6316 27.0909 17.9377 27.2759 18.0852 27.2063C18.8955 26.8161 19.6722 26.3562 20.5666 25.8615L6.93691 18.1028V15.3804C8.1169 16.0436 9.29132 16.7142 10.4713 17.3792C14.5229 19.6656 18.5738 21.9526 22.6241 24.2402C22.7455 24.3103 22.8838 24.3472 23.0246 24.3472C23.1654 24.3472 23.3037 24.3103 23.4251 24.2402C24.1308 23.8298 24.841 23.4255 25.5554 23.0274L22.6988 21.395L4.44434 11Z" fill="url(#paint0_linear_392_6457)" data-v-5a75ec0f></path><path d="M27.304 7.25435C25.4762 6.27499 23.6636 5.27415 21.8472 4.27871L18.9882 2.71316L16.4812 4.08036C19.2424 5.58157 22.0043 7.08038 24.7667 8.57683C24.9268 8.64208 25.0617 8.75249 25.1528 8.89294C25.2439 9.03339 25.2868 9.19703 25.2757 9.36141C25.2757 10.0382 25.2757 10.7149 25.2757 11.3916L25.253 11.3791C23.8736 10.6428 19.6069 8.4428 18.237 7.69219C16.8672 6.94159 15.4481 6.16595 14.0536 5.40284L11.3933 6.85403C15.0659 8.85028 21.4082 12.1708 25.2833 14.2689C25.2833 15.1649 25.2864 16.0585 25.2927 16.9497C25.2476 16.9188 25.2009 16.8902 25.1527 16.8639C19.8794 13.9919 11.7188 9.66698 6.4531 6.77715L8.85416 5.46719L11.5239 4.01242L13.9382 2.69352L16.4491 1.32274L14.3507 0.177191C14.1785 0.0842584 13.9079 -0.0461866 13.783 0.0163639C13.3725 0.214738 12.9714 0.427417 12.5627 0.649024L3.60543 5.52614L3.49577 5.57976L3.09462 5.80495L0.445685 7.24719C0.302456 7.3082 0.18291 7.40977 0.103574 7.53787C0.0242376 7.66596 -0.010926 7.81423 0.00296373 7.96206C0.0168391 12.6861 0.0199557 17.4096 0.0123873 22.1324C-0.00103709 22.2896 0.037378 22.4468 0.122421 22.5825C0.207464 22.7182 0.334914 22.8257 0.48726 22.8902C1.17598 23.2476 1.86094 23.6265 2.54399 24V20.8761C2.53155 20.7968 2.5252 20.7167 2.52505 20.6366C2.54776 16.7298 2.54589 12.8231 2.54778 8.91637L3.7758 8.24619C8.36792 10.7482 14.4151 13.9651 19.8189 16.8549L19.8605 16.8764C21.4915 17.7521 23.0638 18.5974 24.5207 19.3784L27.7373 21.1048C27.7373 16.7418 27.7499 12.3787 27.7751 8.01568C27.7886 7.85848 27.7506 7.70116 27.6663 7.56501C27.5821 7.42885 27.4556 7.32043 27.304 7.25435Z" fill="url(#paint1_linear_392_6457)" data-v-5a75ec0f></path><path class="show-on-hover" fill-opacity="0" d="M4.44446 11V24.6176C4.44409 24.7841 4.48862 24.9478 4.57355 25.0919C4.65848 25.2361 4.78085 25.3556 4.9281 25.4384C6.3228 26.2243 10.3874 28.5162 12.6223 29.7711C12.809 29.8774 13.0984 30.0514 13.2329 29.9855C13.9797 29.6191 14.7116 29.1739 15.5088 28.7232C15.2997 28.5821 15.1914 28.4997 15.0719 28.4319C12.3622 26.8893 9.65301 25.3467 6.9445 23.8042V21.0561L9.10842 22.2818C11.8804 23.8488 14.6531 25.4133 17.4263 26.9754C17.6317 27.0909 17.9378 27.2759 18.0853 27.2063C18.8957 26.8161 19.6724 26.3562 20.5667 25.8615L6.93703 18.1028V15.3804C8.11702 16.0436 9.29145 16.7142 10.4714 17.3792C14.523 19.6656 18.5739 21.9526 22.6242 24.2402C22.7456 24.3103 22.8839 24.3472 23.0247 24.3472C23.1655 24.3472 23.3038 24.3103 23.4252 24.2402C24.131 23.8298 24.8411 23.4255 25.5556 23.0274L22.6989 21.395L4.44446 11Z" fill="#5B92FF" data-v-5a75ec0f></path><path class="show-on-hover" fill-opacity="0" d="M27.304 7.25435C25.4762 6.27499 23.6636 5.27415 21.8472 4.27871L18.9882 2.71316L16.4812 4.08036C19.2424 5.58157 22.0043 7.08038 24.7667 8.57683C24.9268 8.64208 25.0617 8.75249 25.1528 8.89294C25.2439 9.03339 25.2868 9.19703 25.2757 9.36141C25.2757 10.0382 25.2757 10.7149 25.2757 11.3916L25.253 11.3791C23.8736 10.6428 19.6069 8.4428 18.237 7.69219C16.8672 6.94159 15.4481 6.16595 14.0536 5.40284L11.3933 6.85403C15.0659 8.85028 21.4082 12.1708 25.2833 14.2689C25.2833 15.1649 25.2864 16.0585 25.2927 16.9497C25.2476 16.9188 25.2009 16.8902 25.1527 16.8639C19.8794 13.9919 11.7188 9.66698 6.4531 6.77715L8.85416 5.46719L11.5239 4.01242L13.9382 2.69352L16.4491 1.32274L14.3507 0.177191C14.1785 0.0842584 13.9079 -0.0461866 13.783 0.0163639C13.3725 0.214738 12.9714 0.427417 12.5627 0.649024L3.60543 5.52614L3.49577 5.57976L3.09462 5.80495L0.445685 7.24719C0.302456 7.3082 0.18291 7.40977 0.103574 7.53787C0.0242376 7.66596 -0.010926 7.81423 0.00296373 7.96206C0.0168391 12.6861 0.0199557 17.4096 0.0123873 22.1324C-0.00103709 22.2896 0.037378 22.4468 0.122421 22.5825C0.207464 22.7182 0.334914 22.8257 0.48726 22.8902C1.17598 23.2476 1.86094 23.6265 2.54399 24V20.8761C2.53155 20.7968 2.5252 20.7167 2.52505 20.6366C2.54776 16.7298 2.54589 12.8231 2.54778 8.91637L3.7758 8.24619C8.36792 10.7482 14.4151 13.9651 19.8189 16.8549L19.8605 16.8764C21.4915 17.7521 23.0638 18.5974 24.5207 19.3784L27.7373 21.1048C27.7373 16.7418 27.7499 12.3787 27.7751 8.01568C27.7886 7.85848 27.7506 7.70116 27.6663 7.56501C27.5821 7.42885 27.4556 7.32043 27.304 7.25435Z" fill="#5B92FF" data-v-5a75ec0f></path><defs data-v-5a75ec0f><linearGradient id="paint0_linear_392_6457" x1="4.44659" y1="20.5093" x2="25.5462" y2="20.5093" gradientUnits="userSpaceOnUse" data-v-5a75ec0f><stop stop-color="#B000FD" data-v-5a75ec0f></stop><stop offset="0.0001" stop-color="#B000FD" data-v-5a75ec0f></stop><stop offset="0.98" stop-color="#30DAFF" data-v-5a75ec0f></stop></linearGradient><linearGradient id="paint1_linear_392_6457" x1="0.0029638" y1="12.0118" x2="27.7657" y2="12.0118" gradientUnits="userSpaceOnUse" data-v-5a75ec0f><stop stop-color="#B000FD" data-v-5a75ec0f></stop><stop offset="0.0001" stop-color="#B000FD" data-v-5a75ec0f></stop><stop offset="0.98" stop-color="#30DAFF" data-v-5a75ec0f></stop></linearGradient></defs></svg>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Logo/index.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Logo = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-5a75ec0f"]]);
const _hoisted_1$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "#fff",
  "fill-opacity": ".5",
  viewBox: "0 0 24 24"
};
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M18.91 5.79a16.2 16.2 0 0 0-4.107-1.29c-.177.32-.384.75-.526 1.092a15 15 0 0 0-4.553 0A12 12 0 0 0 9.192 4.5c-1.442.25-2.822.69-4.11 1.294-2.6 3.928-3.305 7.759-2.953 11.535a16.4 16.4 0 0 0 5.038 2.582q.61-.838 1.08-1.777a10.6 10.6 0 0 1-1.7-.827q.214-.159.417-.33c3.276 1.533 6.835 1.533 10.072 0q.205.171.417.33c-.539.325-1.109.603-1.702.829q.467.937 1.079 1.777a16.4 16.4 0 0 0 5.04-2.584c.414-4.377-.706-8.173-2.96-11.538m-3.603 9.221c-.983 0-1.79-.918-1.79-2.036s.79-2.037 1.79-2.037 1.807.918 1.79 2.037c0 1.118-.789 2.036-1.79 2.036m-8.404-2.036c0 1.118.806 2.036 1.79 2.036 1 0 1.79-.918 1.79-2.036.017-1.12-.79-2.037-1.79-2.037s-1.79.92-1.79 2.037",
      "clip-rule": "evenodd"
    }, null, -1)
  ])]);
}
const Discord = { render: render$2 };
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "#fff",
  "fill-opacity": ".5",
  viewBox: "0 0 24 25"
};
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M19.2 9.85c0 6.3-3.6 10.8-9.9 10.8-3.6 0-5.043-1.879-6.3-3.6m0 0c.029-.005 2.7-.9 2.7-.9-3.006-3.039-3.234-7.54-.9-10.8 1.107 2.059 3.174 3.959 5.4 4.5.086-2.6 1.849-4.5 4.5-4.5 1.805 0 2.867.688 3.6 1.8H21l-1.8 2.7",
      "clip-rule": "evenodd"
    }, null, -1)
  ])]);
}
const Twitter = { render: render$1 };
const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "#fff",
  "fill-opacity": ".5",
  viewBox: "0 0 24 25"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "m14.104 11.427-3.917 3.535a.843.843 0 0 0 .066 1.305l5.378 3.973a.904.904 0 0 0 1.422-.54l2.641-12.447a.775.775 0 0 0-1.037-.884L3.142 12.353a.516.516 0 0 0 .032.975L7.251 14.6",
      "clip-rule": "evenodd"
    }, null, -1)
  ])]);
}
const Telegram = { render };
const breakpoints = {
  lg: 1366,
  slg: 1200,
  md: 1024,
  sm: 840,
  xsm: 420
};
const TEER_TOKEN_LINK = "https://docs.integritee.network/2-integritee-network/2.4-teer-token";
const GOVERNANCE_LINK = "https://docs.integritee.network/2-integritee-network/2.5-governance";
const HOW_TO_SETUP_LINK = "https://docs.integritee.network/5-nodes-and-infrastructure";
const PRODUCTS_DOCS_LINK = "https://docs.integritee.network/3-our-technology";
const SIDECHAIN_SDK_LINK = "https://docs.integritee.network/3-our-technology/3.1-software-development-kit/3.1.1-sidechains";
const OFF_CHAIN_WORKER_LINK = "https://docs.integritee.network/3-our-technology/3.1-software-development-kit/3.1.2-trusted-off-chain-computing";
const TEERACLE_LINK = "https://docs.integritee.network/3-our-technology/3.1-software-development-kit/3.1.3-oracle-framework";
const ATTESTEER_LINK = "https://docs.integritee.network/3-our-technology/3.2-attesteer";
const INCOGNITEE_LINK = "https://incognitee.io";
const SECURE_TEE_INFRASTRUCTURE_LINK = "https://docs.integritee.network/5-nodes-and-infrastructure/5.3-how-to-deploy/5.3.3-securitee-offering";
const TELEGRAM_LINK = "https://t.me/Integritee_Official";
const DISCORD_LINK = "https://discord.com/invite/wwGcqhfXtZ";
const TWITTER_LINK = "https://twitter.com/integri_t_e_e";
const FULL_STACK_DEV = "https://jobs.smartrecruiters.com/IntegriteeAG/743999815448800-full-stack-developer";
const RUST_CORE_DEV = "https://jobs.smartrecruiters.com/IntegriteeAG/743999815462880-rust-core-developer";
const SENIOR_DEVOPS = "https://jobs.smartrecruiters.com/IntegriteeAG/743999815439156-senior-devops-engineer";
const ALL_POSITION = "https://careers.smartrecruiters.com/IntegriteeAG";
const GOVERNANCE_FOOTER_LINK = "https://integritee.polkassembly.io";
const SUBSCAN_LINK = "https://integritee.subscan.io/";
const INTEGRITEE_NETWORK_LINK = "https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.api.integritee.network#/explorer";
const HELP_CENTER_LINK = "https://helpdesk.integritee.network/docs/";
const BUGBOUNTY_LINK = "https://immunefi.com/bug-bounty/integriteenetwork/";
const GITHUB_LINK = "https://github.com/integritee-network";
const DOCS_LINK = "https://docs.integritee.network";
const LIGHTPAPER_LINK = "/docs/Integritee_ Lightpaper_2021.pdf";
const TOKENOMICS_LINK = "/docs/Integritee_Tokenomics_2021.pdf";
const CHECK_TECH_LINK = "https://docs.integritee.network/3-our-technology";
const TECHNOLOGY_LINK = "https://integritee.network/developers";
const DEVELOPMENT_DOCS = "https://docs.integritee.network/4-development";
const READ_LINK = "https://docs.integritee.network/4-development/4.4-sdk/4.4.1-sidechain-sdk";
const PLAY_LINK = "https://docs.integritee.network/4-development/4.6-demos/4.6.1-sidechain-demo";
const WRITE_LINK = "https://docs.integritee.network/4-development/4.4-sdk/4.4.4-custom-business-logic-stf";
const DEPLOY_LINK = "https://docs.integritee.network/5-nodes-and-infrastructure/5.3-how-to-deploy";
const SDK_GITHUB_LINK = "https://github.com/integritee-network/worker";
const SDK_DOCS_LINK = "https://docs.integritee.network/4-development/4.4-sdk/4.4.1-sidechain-sdk";
const SDK_DEMO_LINK = "https://docs.integritee.network/4-development/4.6-demos/4.6.1-sidechain-demo";
const WORKER_GITHUB_LINK = "https://github.com/integritee-network/worker";
const WORKER_DOCS_LINK = "https://docs.integritee.network/4-development/4.4-sdk/4.4.2-trusted-off-chain-worker";
const WORKER_DEMO_LINK = "https://docs.integritee.network/4-development/4.6-demos/4.6.2-tocw-demo";
const TEERACLE_GITHUB_LINK = "https://github.com/integritee-network/worker/tree/master/samples/teeracle";
const TEERACLE_DOCS_LINK = "https://docs.integritee.network/4-development/4.4-sdk/4.4.3-teeracle-oracle-framework";
const TEERACLE_DEMO_LINK = "https://docs.integritee.network/4-development/4.6-demos/4.6.3-teeracle-demo";
const ATTESTEER_GITHUB_LINK = "";
const ATTESTEER_DOCS_LINK = "https://docs.integritee.network/4-development/4.5-attesteer";
const ATTESTEER_DEMO_LINK = "https://docs.integritee.network/4-development/4.6-demos/4.6.4-attesteer-demo";
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "socials" }, _attrs))} data-v-62cdae97><a${ssrRenderAttr("href", unref(DISCORD_LINK))} target="_blank" data-v-62cdae97>`);
      _push(ssrRenderComponent(unref(Discord), null, null, _parent));
      _push(`</a><a${ssrRenderAttr("href", unref(TWITTER_LINK))} target="_blank" data-v-62cdae97>`);
      _push(ssrRenderComponent(unref(Twitter), null, null, _parent));
      _push(`</a><a${ssrRenderAttr("href", unref(TELEGRAM_LINK))} target="_blank" data-v-62cdae97>`);
      _push(ssrRenderComponent(unref(Telegram), null, null, _parent));
      _push(`</a></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Socials/index.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-62cdae97"]]);
const _sfc_main$4 = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const active = ref(false);
    const { width } = useWindowSize();
    const { y } = useWindowScroll();
    const { $lockScroll } = useNuxtApp();
    const route = useRoute();
    const toggleMenu = () => {
      active.value = !active.value;
      $lockScroll(active.value);
    };
    watch(
      route,
      () => {
        active.value = false;
        $lockScroll(false);
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<!--[--><header class="${ssrRenderClass([{ "header_no-bg": active.value }, "header"])}" data-v-ece7d313><div class="container" data-v-ece7d313>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "header__logo"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Logo), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Logo))
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(width) > unref(breakpoints).slg) {
        _push(`<div class="header__nav" data-v-ece7d313>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/products",
          class: "text-link paragraph_smll"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Products`);
            } else {
              return [
                createTextVNode("Products")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/usecases",
          class: "text-link paragraph_smll"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Use Cases `);
            } else {
              return [
                createTextVNode(" Use Cases ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/technology",
          class: "text-link paragraph_smll"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Technology`);
            } else {
              return [
                createTextVNode("Technology")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/developers",
          class: "text-link paragraph_smll"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Developers`);
            } else {
              return [
                createTextVNode("Developers")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/about",
          class: "text-link paragraph_smll"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`About`);
            } else {
              return [
                createTextVNode("About")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/blog",
          class: "text-link paragraph_smll"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Blog`);
            } else {
              return [
                createTextVNode("Blog")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/contacts",
          class: "text-link paragraph_smll"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Contacts`);
            } else {
              return [
                createTextVNode("Contacts")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></header>`);
      if (unref(width) <= unref(breakpoints).slg) {
        _push(ssrRenderComponent(Menu, {
          active: active.value,
          clickHandler: toggleMenu
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/index.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-ece7d313"]]);
const defineRouteProvider = (name = "RouteProvider") => defineComponent({
  name,
  props: {
    route: {
      type: Object,
      required: true
    },
    vnode: Object,
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key],
        enumerable: true
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      if (!props.vnode) {
        return props.vnode;
      }
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const RouteProvider = defineRouteProvider();
const __nuxt_component_1 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, slots, expose }) {
    const nuxtApp = useNuxtApp();
    const pageRef = ref();
    inject(PageRouteSymbol, null);
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    nuxtApp.deferHydration();
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          return h(Suspense, { suspensible: true }, {
            default() {
              return h(RouteProvider, {
                vnode: slots.default ? normalizeSlot(slots.default, routeProps) : routeProps.Component,
                route: routeProps.route,
                vnodeRef: pageRef
              });
            }
          });
        }
      });
    };
  }
});
function normalizeSlot(slot, data) {
  const slotContent = slot(data);
  return slotContent.length === 1 ? h(slotContent[0]) : h(Fragment, void 0, slotContent);
}
const _imports_0 = publicAssetsURL("/img/global/bg-line.png");
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-a887a871><div class="container" data-v-a887a871><div class="footer__row" data-v-a887a871><div class="footer__column footer__column_about" data-v-a887a871>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "footer__logo"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Logo, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Logo)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="footer__description" data-v-a887a871> The fastest, most scalable and secure Web3 network bringing the vision of a trustless, decentralized future for all. </p>`);
      _push(ssrRenderComponent(__nuxt_component_0$1, null, null, _parent));
      _push(`</div><div class="footer__columns-row" data-v-a887a871><div class="footer__column" data-v-a887a871><div class="footer__column-title" data-v-a887a871>Network</div><div class="footer__column-list" data-v-a887a871><a${ssrRenderAttr("href", unref(GOVERNANCE_FOOTER_LINK))} target="_blank" rel="noopener noreferrer" class="footer__column-link text-link" data-v-a887a871> Governance </a><a${ssrRenderAttr("href", unref(SUBSCAN_LINK))} target="_blank" rel="noopener noreferrer" class="footer__column-link text-link" data-v-a887a871> Integritee Subscan </a><a${ssrRenderAttr("href", unref(INTEGRITEE_NETWORK_LINK))} target="_blank" rel="noopener noreferrer" class="footer__column-link text-link" data-v-a887a871> Integritee Network </a><a${ssrRenderAttr("href", unref(BUGBOUNTY_LINK))} target="_blank" rel="noopener noreferrer" class="footer__column-link text-link" data-v-a887a871> Bug Bounty </a></div></div><div class="footer__column" data-v-a887a871><div class="footer__column-title" data-v-a887a871>Resources</div><div class="footer__column-list" data-v-a887a871><a${ssrRenderAttr("href", unref(TOKENOMICS_LINK))} target="_blank" rel="noopener noreferrer" class="footer__column-link text-link" data-v-a887a871> Tokenomics </a><a${ssrRenderAttr("href", unref(DOCS_LINK))} target="_blank" rel="noopener noreferrer" class="footer__column-link text-link" data-v-a887a871> Documentation </a><a${ssrRenderAttr("href", unref(LIGHTPAPER_LINK))} target="_blank" rel="noopener noreferrer" class="footer__column-link text-link" data-v-a887a871> Lightpaper </a><a${ssrRenderAttr("href", unref(HELP_CENTER_LINK))} target="_blank" rel="noopener noreferrer" class="footer__column-link text-link" data-v-a887a871> Help Center </a></div></div></div></div><div class="footer__bottom" data-v-a887a871><span class="paragraph_medium" data-v-a887a871>©${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Integritee, Inc.</span></div></div></footer>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer/index.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-a887a871"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = __nuxt_component_0;
      const _component_NuxtPage = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Header, null, null, _parent));
      _push(`<div class="image-wrap"><div class="container"><img${ssrRenderAttr("src", _imports_0)} class="top-lines" alt="Lines"></div></div><div class="page-wrapper">`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</div><div class="container"><img${ssrRenderAttr("src", _imports_0)} class="bottom-lines" alt="Lines"></div>`);
      _push(ssrRenderComponent(unref(Footer), null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "nuxt-error-page",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const props = __props;
    const _error = props.error;
    _error.stack ? _error.stack.split("\n").splice(1).map((line) => {
      const text = line.replace("webpack:/", "").replace(".vue", ".js").trim();
      return {
        text,
        internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
      };
    }).map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n") : "";
    const statusCode = Number(_error.statusCode || 500);
    const is404 = statusCode === 404;
    const statusMessage = _error.statusMessage ?? (is404 ? "Page Not Found" : "Internal Server Error");
    const description = _error.message || _error.toString();
    const stack = void 0;
    const _Error404 = defineAsyncComponent(() => import('./error-404-CdLByUG0.mjs'));
    const _Error = defineAsyncComponent(() => import('./error-500-DIBY0bd8.mjs'));
    const ErrorTemplate = is404 ? _Error404 : _Error;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ErrorTemplate), mergeProps({ statusCode: unref(statusCode), statusMessage: unref(statusMessage), description: unref(description), stack: unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = () => null;
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    const abortRender = error.value && !nuxtApp.ssrContext.error;
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(abortRender)) {
            _push(`<div></div>`);
          } else if (unref(error)) {
            _push(ssrRenderComponent(unref(_sfc_main$1), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (error) {
      await nuxt.hooks.callHook("app:error", error);
      nuxt.payload.error ||= createError(error);
    }
    if (ssrContext?._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry$1 = (ssrContext) => entry(ssrContext);

export { ALL_POSITION as A, ATTESTEER_DEMO_LINK as B, CHECK_TECH_LINK as C, DISCORD_LINK as D, ATTESTEER_DOCS_LINK as E, FULL_STACK_DEV as F, GITHUB_LINK as G, HOW_TO_SETUP_LINK as H, INCOGNITEE_LINK as I, ATTESTEER_GITHUB_LINK as J, DEVELOPMENT_DOCS as K, TECHNOLOGY_LINK as L, __nuxt_component_0$1 as M, OFF_CHAIN_WORKER_LINK as O, PRODUCTS_DOCS_LINK as P, RUST_CORE_DEV as R, SENIOR_DEVOPS as S, TELEGRAM_LINK as T, WRITE_LINK as W, _export_sfc as _, __nuxt_component_0$2 as a, breakpoints as b, Telegram as c, Discord as d, entry$1 as default, TWITTER_LINK as e, Twitter as f, SIDECHAIN_SDK_LINK as g, TEERACLE_LINK as h, ATTESTEER_LINK as i, SECURE_TEE_INFRASTRUCTURE_LINK as j, DOCS_LINK as k, TEER_TOKEN_LINK as l, GOVERNANCE_LINK as m, READ_LINK as n, PLAY_LINK as o, DEPLOY_LINK as p, SDK_DEMO_LINK as q, SDK_DOCS_LINK as r, SDK_GITHUB_LINK as s, tryUseNuxtApp as t, WORKER_DEMO_LINK as u, WORKER_DOCS_LINK as v, WORKER_GITHUB_LINK as w, TEERACLE_DEMO_LINK as x, TEERACLE_DOCS_LINK as y, TEERACLE_GITHUB_LINK as z };
//# sourceMappingURL=server.mjs.map
