import { defineComponent, mergeProps, useSSRContext, unref, withCtx, createVNode, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { D as Desc } from "./index-DP1QcsTP.js";
import { _ as __nuxt_component_0$2 } from "./RadialGradient-CezS1Ddr.js";
import { _ as _export_sfc, L as TECHNOLOGY_LINK } from "../server.mjs";
import { S as Socials } from "./Section-BzMS73B6.js";
import { g as generateSEO } from "./generateSEO-BS-OswUA.js";
import "ofetch";
import "#internal/nuxt/paths";
import "/home/brenzi/integritee/integritee_network_website/node_modules/hookable/dist/index.mjs";
import "/home/brenzi/integritee/integritee_network_website/node_modules/unctx/dist/index.mjs";
import "/home/brenzi/integritee/integritee_network_website/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/home/brenzi/integritee/integritee_network_website/node_modules/radix3/dist/index.mjs";
import "/home/brenzi/integritee/integritee_network_website/node_modules/defu/dist/defu.mjs";
import "/home/brenzi/integritee/integritee_network_website/node_modules/ufo/dist/index.mjs";
import "/home/brenzi/integritee/integritee_network_website/node_modules/klona/dist/index.mjs";
import "@vueuse/core";
import "./v3-CIrZdX_3.js";
import "/home/brenzi/integritee/integritee_network_website/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Simple",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_GlobalRadialGradient = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "block simple" }, _attrs))} data-v-4be0bbb3><div class="simple__text" data-v-4be0bbb3><p class="simple__item-title margin_medium" data-v-4be0bbb3>${ssrInterpolate(_ctx.item.title)}</p><p class="simple__item-text paragraph paragraph_medium" data-v-4be0bbb3>${ssrInterpolate(_ctx.item.text)}</p></div><div class="simple__image-wrapper" data-v-4be0bbb3><div class="simple__image" data-v-4be0bbb3><img${ssrRenderAttr("src", _ctx.item.img)} data-v-4be0bbb3>`);
      _push(ssrRenderComponent(_component_GlobalRadialGradient, { class: "simple__image-gradient" }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Global/Simple.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-4be0bbb3"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "HowItWorks",
  __ssrInlineRender: true,
  props: {
    items: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_GlobalSimple = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "how-it-works block" }, _attrs))}><div class="container"><h2 class="title title_h2 margin_large">How it works</h2><div><!--[-->`);
      ssrRenderList(_ctx.items, (item, index) => {
        _push(ssrRenderComponent(_component_GlobalSimple, {
          class: "how-it-works__item",
          item,
          key: index
        }, null, _parent));
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Technology/HowItWorks.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Building",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "building block" }, _attrs))} data-v-9f859f10><div class="container blur-gradient blur-gradient_extra-top" data-v-9f859f10><h2 class="title title_h2 margin_medium building__title" data-v-9f859f10>What will you create?</h2><p class="paragraph paragraph_medium margin_large" data-v-9f859f10>If the major problems associated with programming on the blockchain are solved...</p><a${ssrRenderAttr("href", unref(TECHNOLOGY_LINK))} class="btn btn_gradient" data-v-9f859f10> Start Building </a></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Technology/Building.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Building = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-9f859f10"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      {
        title: "TEE enterprise hardware\nensures the speed\nand confidentiality\nof our solution",
        text: "A trusted execution environment (TEE) is an isolated area within a computer processor that runs separately from the standard OS. Any data processed within a TEE is accessible to no one, not even the admin. A public auditability service will provide all users with assurance that their data can only be processed in pre-defined ways in an isolated and trustworthy hardware environment.",
        img: "/img/technology/tee.svg"
      },
      {
        title: "Integritee’s blockchain\nbuilds upon the Polkadot\nnetwork",
        text: "Polkadot is a scalable and secure protocol that serves as the foundation for an interoperable network of blockchains. The network provides the basis for Web 3.0 — a new, fully decentralized internet. On Polkadot, any type of data can be exchanged between the blockchains inside the ecosystem. Polkadot’s key benefit is that it provides pooled security and cross-chain messaging for all network participants.",
        img: "/img/technology/network.svg"
      },
      {
        title: "Deployment at any stage\nof your development",
        text: "Our architecture allows a permissioned or permissionless deployment no matter what requirement you have. Servers can also be self hosted on premise or hosted in the cloud. Our network is providing a great flexlibility for applications operators to host and maintain the solutions.",
        img: "/img/technology/deployment.svg"
      },
      {
        title: "Rust & Substrate runtime\ncompatibility",
        text: "The Integritee SDK is compatible with Substrate runtime pallets and Rust code can be simply integrated with our SDK to run a decentralized application. With a few lines of glue-code, you can reuse your pallets and instantiate them on our chain. It is even possible to trustlessly interact between on- and off-chain runtimes.",
        img: "/img/technology/substrate.svg"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "technology" }, _attrs))} data-v-6d019d6b>`);
      _push(ssrRenderComponent(Desc, null, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-6d019d6b${_scopeId}>Integritee</span> is when privacy and security meet speed and scalability `);
          } else {
            return [
              createVNode("span", null, "Integritee"),
              createTextVNode(" is when privacy and security meet speed and scalability ")
            ];
          }
        }),
        text: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` The combination of confidential computing and a Substrate-based public chain is the foundation for our superior tech. `);
          } else {
            return [
              createTextVNode(" The combination of confidential computing and a Substrate-based public chain is the foundation for our superior tech. ")
            ];
          }
        }),
        button: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a${ssrRenderAttr("href", unref(TECHNOLOGY_LINK))} class="btn btn_gradient desc__button" data-v-6d019d6b${_scopeId}>Start Building</a>`);
          } else {
            return [
              createVNode("a", {
                href: unref(TECHNOLOGY_LINK),
                class: "btn btn_gradient desc__button"
              }, "Start Building", 8, ["href"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$3, { items }, null, _parent));
      _push(ssrRenderComponent(Building, null, null, _parent));
      _push(ssrRenderComponent(Socials, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Technology/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6d019d6b"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "technology",
  __ssrInlineRender: true,
  setup(__props) {
    generateSEO({
      title: "Integritee Network - Technology",
      description: "The combination of confidential computing and a Substrate-based public chain is the foundation for our superior tech."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Technology = __nuxt_component_0;
      _push(ssrRenderComponent(_component_Technology, _attrs, null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/technology.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=technology-Do50E7vv.js.map
