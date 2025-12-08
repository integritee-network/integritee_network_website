import { defineComponent, mergeProps, withCtx, createTextVNode, unref, createElementBlock, openBlock, createElementVNode, useSSRContext } from 'file:///home/brenzi/integritee/integritee_network_website/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'file:///home/brenzi/integritee/integritee_network_website/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc, a as __nuxt_component_0$2 } from './server.mjs';
import { _ as __nuxt_component_0 } from './RadialGradient-CezS1Ddr.mjs';
import { p as publicAssetsURL } from '../_/renderer.mjs';
import { S as Socials } from './Section-BzMS73B6.mjs';
import 'file:///home/brenzi/integritee/integritee_network_website/node_modules/ofetch/dist/node.mjs';
import 'file:///home/brenzi/integritee/integritee_network_website/node_modules/hookable/dist/index.mjs';
import 'file:///home/brenzi/integritee/integritee_network_website/node_modules/unctx/dist/index.mjs';
import 'file:///home/brenzi/integritee/integritee_network_website/node_modules/h3/dist/index.mjs';
import 'file:///home/brenzi/integritee/integritee_network_website/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///home/brenzi/integritee/integritee_network_website/node_modules/radix3/dist/index.mjs';
import 'file:///home/brenzi/integritee/integritee_network_website/node_modules/defu/dist/defu.mjs';
import 'file:///home/brenzi/integritee/integritee_network_website/node_modules/ufo/dist/index.mjs';
import 'file:///home/brenzi/integritee/integritee_network_website/node_modules/@vueuse/core/index.mjs';
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

const _imports_0$3 = publicAssetsURL("/img/index/main/scheme.svg");
const _sfc_main$5 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$2;
  const _component_GlobalRadialGradient = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ id: "main" }, _attrs))} data-v-d6852b8c><div class="shutdown-banner" data-v-d6852b8c><div class="container" data-v-d6852b8c><div class="shutdown-banner__content" data-v-d6852b8c><span class="shutdown-banner__text" data-v-d6852b8c> \u26A0\uFE0F Important Network Update: The Integritee Network will be shutting down on November 11, 2025. <a href="blog/this-is-the-end" class="shutdown-banner__link" data-v-d6852b8c>Read the full announcement</a></span></div></div></div><div class="block main" data-v-d6852b8c><div class="container" data-v-d6852b8c><div class="column column_large main__column" data-v-d6852b8c><h1 class="title title_hero main__title margin_medium" data-v-d6852b8c><span class="gradient gradient_one" data-v-d6852b8c>It\u2019s time.</span> Let\u2019s<br data-v-d6852b8c> power the Web3<br data-v-d6852b8c> of the <span class="gradient gradient_two" data-v-d6852b8c>future</span> together </h1><p class="paragraph paragraph_medium main__description margin_large" data-v-d6852b8c> The fastest, most scalable and secure Web3 network bringing <br data-v-d6852b8c> the vision of a trustless, decentralized future for all. </p>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/developers",
    class: "btn btn_gradient main__button"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Start building`);
      } else {
        return [
          createTextVNode("Start building")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="main__img-wrapper" data-v-d6852b8c><img${ssrRenderAttr("src", _imports_0$3)} class="main__scheme" alt="Scheme" data-v-d6852b8c>`);
  _push(ssrRenderComponent(_component_GlobalRadialGradient, { class: "main__img-gradient" }, null, _parent));
  _push(`</div></div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Index/Main.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Main = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-d6852b8c"]]);
const _imports_0$2 = publicAssetsURL("/img/index/things/polygons.svg");
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$2;
  const _component_GlobalRadialGradient = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ id: "things" }, _attrs))}><div class="block things"><div class="container"><div class="column column_medium things__column"><h2 class="title title_h2 things__title"> Great things<br> are built with<br> Integritee </h2><p class="paragraph paragraph_medium margin_large things__description"> Integritee harnesses the speed and confidentiality of Trusted Execution Environments (TEEs) as well as the transparency and trust of public blockchains to create the fastest, most scalable Web3 protocol for securely processing sensitive data. </p>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/usecases",
    class: "btn btn_gradient things__button"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Learn more`);
      } else {
        return [
          createTextVNode("Learn more")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="things__image-wrapper"><img${ssrRenderAttr("src", _imports_0$2)} class="things__image" alt="Polygons">`);
  _push(ssrRenderComponent(_component_GlobalRadialGradient, { class: "things__image-gradient" }, null, _parent));
  _push(`</div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Index/Things.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Things = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 64 64"
};
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "#9928FE",
      "fill-rule": "evenodd",
      d: "M9.333 28.712a28.29 28.29 0 0 0 18.38 26.498l.08.03a12 12 0 0 0 8.415-.003l.065-.025a28.34 28.34 0 0 0 18.394-26.536v-9.929a5.33 5.33 0 0 0-3.744-5.09L33.59 8.243a5.33 5.33 0 0 0-3.18 0l-17.333 5.413a5.33 5.33 0 0 0-3.744 5.091z",
      "clip-rule": "evenodd"
    }, null, -1),
    createElementVNode("path", {
      stroke: "#fff",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "4",
      d: "m26.667 32 4 4 8-8"
    }, null, -1)
  ])]);
}
const Guard = { render: render$1 };
const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 64 64"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "#9928FE",
      "fill-rule": "evenodd",
      d: "M31.25 9.333C18.37 9.873 8.158 20.391 8 33.283A23.94 23.94 0 0 0 17.97 52.8a10.36 10.36 0 0 0 6.07 1.867h15.941c2.12.031 4.196-.6 5.94-1.806A23.987 23.987 0 0 0 31.25 9.333",
      "clip-rule": "evenodd"
    }, null, -1),
    createElementVNode("path", {
      stroke: "#fff",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "4",
      d: "M32 17.339v2.666M20.685 22.027l1.886 1.885M35.304 30.037l8.01-8.01M22.667 45.339h18.666"
    }, null, -1),
    createElementVNode("circle", {
      cx: "32",
      cy: "33.333",
      r: "4.667",
      fill: "#fff"
    }, null, -1),
    createElementVNode("path", {
      stroke: "#fff",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "4",
      d: "M48 33.339h-2.667M18.667 33.339H16"
    }, null, -1)
  ])]);
}
const Speed = { render };
const _sfc_main$3 = {
  __name: "Scalability",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "scalability" }, _attrs))}><div class="block scalability"><div class="container"><div class="row scalability__row"><div class="column column_medium scalability__column scalability__column_left"><h2 class="title title_h2 scalability__title"> Scalability <br> and performance without sacrificing trust </h2><p class="paragraph paragraph_medium margin_large"> Integritee utilizes the blockchain to create security and trust without the computational compromises. Centralized approaches to data-driven services tend to be fast and convenient, but involve big compromises of user privacy and data security. </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/technology",
        class: "btn btn_gradient"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Learn more`);
          } else {
            return [
              createTextVNode("Learn more")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="column scalability__column_icons"><div class="scalability__item margin_large"><div class="scalability__item-icon margin_small">`);
      _push(ssrRenderComponent(unref(Guard), null, null, _parent));
      _push(`</div><h3 class="scalability__item-title title_sub margin_medium"> Privacy &amp; security </h3><p class="paragraph paragraph_medium scalability__item-description"> The security and trust of the blockchain with the speed and power of enterprise grade confidential computing hardware. </p></div><div class="scalability__item"><div class="scalability__item-icon margin_small">`);
      _push(ssrRenderComponent(unref(Speed), null, null, _parent));
      _push(`</div><h3 class="scalability__item-title title_sub margin_medium"> Speed &amp; scalabillity </h3><p class="paragraph paragraph_medium scalability__item-description"> The scalability of second-layer technology based on substrate for building state of the art data-driven dApps and services. </p></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Index/Scalability.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _imports_0$1 = publicAssetsURL("/img/index/token/polygon1.svg");
const _imports_1 = publicAssetsURL("/img/global/logo-icon.svg");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Token",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "token" }, _attrs))}><div class="block token"><div class="container"><div class="row jcsb token__row"><div class="column column_medium token__column"><h2 class="title title_h2 token__title"> A network secured and governed <br> by our TEER token </h2><p class="paragraph paragraph_medium margin_large token__description"> The Integritee ecosystem is securely built and governed<br> by our trusted community of TEER token holders. Join<br> the movement for scaling a secure and fast Web3. </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/teer-token",
        class: "btn btn_gradient"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Learn more`);
          } else {
            return [
              createTextVNode("Learn more")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="token__right">`);
      _push(ssrRenderComponent(unref(__nuxt_component_0), { class: "token__radial-gradient" }, null, _parent));
      _push(`<img${ssrRenderAttr("src", _imports_0$1)} class="token__polygon1" alt="Polygon"><div class="token__right-content"><img${ssrRenderAttr("src", _imports_1)} class="token__logo-icon" alt="Logo icon"><div class="token__right-title title_sub"> TEER Token<br> is available on: </div></div></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Index/Token.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/img/index/community/image.jpg");
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ id: "community" }, _attrs))}><div class="block community"><div class="container blur-gradient row jcsb community__row"><div class="column column_medium community__column"><h2 class="title title_h2 community__title"> Join our developer community <br> and start your Integritee journey </h2><div class="community__text"><p class="paragraph paragraph_medium margin_large"> Developers are building amazing DApps that utilize our expanding suite of tools. Join us on Discord where we\u2019re building a community of forward thinking devs like you. </p></div><a${ssrRenderAttr("href", _ctx.DISCORD_LINK)} target="_blank" class="btn btn_gradient">Join Discord</a></div><img class="community__image"${ssrRenderAttr("src", _imports_0)}></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Index/Community.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Community = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home-section" }, _attrs))}>`);
      _push(ssrRenderComponent(Main, null, null, _parent));
      _push(ssrRenderComponent(Things, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(Community, null, null, _parent));
      _push(ssrRenderComponent(Socials, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Dy-mDs1H.mjs.map
