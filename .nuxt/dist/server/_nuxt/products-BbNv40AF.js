import { defineComponent, mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext, createElementBlock, openBlock, createElementVNode, createStaticVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { D as Desc } from "./index-DP1QcsTP.js";
import { P as PRODUCTS_DOCS_LINK, g as SIDECHAIN_SDK_LINK, O as OFF_CHAIN_WORKER_LINK, h as TEERACLE_LINK, i as ATTESTEER_LINK, j as SECURE_TEE_INFRASTRUCTURE_LINK, I as INCOGNITEE_LINK, _ as _export_sfc, G as GITHUB_LINK, k as DOCS_LINK, l as TEER_TOKEN_LINK, H as HOW_TO_SETUP_LINK, m as GOVERNANCE_LINK, C as CHECK_TECH_LINK } from "../server.mjs";
import { a as Link, L as LineLink } from "./LineLink-Cl_e6AwC.js";
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
  __name: "Hero",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "hero" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Desc), null, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Introducing a product suite for developing Web3 projects that are <span${_scopeId}>secure</span> AND <span class="text-gradient_purple-blue"${_scopeId}>scalable</span>`);
          } else {
            return [
              createTextVNode(" Introducing a product suite for developing Web3 projects that are "),
              createVNode("span", null, "secure"),
              createTextVNode(" AND "),
              createVNode("span", { class: "text-gradient_purple-blue" }, "scalable")
            ];
          }
        }),
        text: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` All our development tools and products are fostering a sustainable, workable Web3 to power the future of the internet and beyond. `);
          } else {
            return [
              createTextVNode(" All our development tools and products are fostering a sustainable, workable Web3 to power the future of the internet and beyond. ")
            ];
          }
        }),
        button: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a${ssrRenderAttr("href", unref(PRODUCTS_DOCS_LINK))} class="btn btn_gradient desc__button" target="_blank"${_scopeId}> Learn More </a>`);
          } else {
            return [
              createVNode("a", {
                href: unref(PRODUCTS_DOCS_LINK),
                class: "btn btn_gradient desc__button",
                target: "_blank"
              }, " Learn More ", 8, ["href"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Products/Hero.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Tools",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "tools" }, _attrs))} data-v-f74937b1><div class="tools block" data-v-f74937b1><div class="container" data-v-f74937b1><div class="tools__list" data-v-f74937b1><a${ssrRenderAttr("href", unref(SIDECHAIN_SDK_LINK))} target="_blank" class="tools__item" data-v-f74937b1><span data-v-f74937b1><span class="tools__item-title title_sub" data-v-f74937b1>Sidechain SDK</span><span class="tools__item-subtitle paragraph_small" data-v-f74937b1>Web3 development tool</span><p class="paragraph paragraph_medium" data-v-f74937b1> Build any decentralized application or service that requires low latency, scalability, and confidentiality. </p></span>`);
      _push(ssrRenderComponent(unref(Link), { class: "tools__item-icon" }, null, _parent));
      _push(`</a><a${ssrRenderAttr("href", unref(OFF_CHAIN_WORKER_LINK))} target="_blank" class="tools__item" data-v-f74937b1><span data-v-f74937b1><span class="tools__item-title title_sub" data-v-f74937b1>Off-Chain Worker</span><span class="tools__item-subtitle paragraph_small" data-v-f74937b1>Secure off-chain computational tool</span><p class="paragraph paragraph_medium" data-v-f74937b1> Set up OCWs, to execute a custom state transition function or other operations inside a TEE. </p></span>`);
      _push(ssrRenderComponent(unref(Link), { class: "tools__item-icon" }, null, _parent));
      _push(`</a><a${ssrRenderAttr("href", unref(TEERACLE_LINK))} target="_blank" class="tools__item" data-v-f74937b1><span data-v-f74937b1><span class="tools__item-title title_sub" data-v-f74937b1>Teeracle</span><span class="tools__item-subtitle paragraph_small" data-v-f74937b1>Trusted oracle Framework</span><p class="paragraph paragraph_medium" data-v-f74937b1> Create your own TEE-based oracle and connect to any Web2 API to gather untampered data and process it in a highly secured environment and confidentiality. </p></span>`);
      _push(ssrRenderComponent(unref(Link), { class: "tools__item-icon" }, null, _parent));
      _push(`</a><a${ssrRenderAttr("href", unref(ATTESTEER_LINK))} target="_blank" class="tools__item" data-v-f74937b1><span data-v-f74937b1><span class="tools__item-title title_sub" data-v-f74937b1>Attesteer</span><span class="tools__item-subtitle paragraph_small" data-v-f74937b1>Public auditability service</span><p class="paragraph paragraph_medium" data-v-f74937b1> Add a Proof of Code and a Proof of Execution to your TEE to provide your customers a publicy auditable solution. </p></span>`);
      _push(ssrRenderComponent(unref(Link), { class: "tools__item-icon" }, null, _parent));
      _push(`</a><a${ssrRenderAttr("href", unref(SECURE_TEE_INFRASTRUCTURE_LINK))} target="_blank" class="tools__item" data-v-f74937b1><span data-v-f74937b1><span class="tools__item-title title_sub" data-v-f74937b1>Securitee</span><span class="tools__item-subtitle paragraph_small" data-v-f74937b1>Secure TEE Infrastructure</span><p class="paragraph paragraph_medium" data-v-f74937b1> Intel SGX bare-metal servers that come with a pre-installed images, which enables a seamless deployment of your developed TEE-based application. </p></span>`);
      _push(ssrRenderComponent(unref(Link), { class: "tools__item-icon" }, null, _parent));
      _push(`</a><a${ssrRenderAttr("href", unref(INCOGNITEE_LINK))} target="_blank" rel="noopener noreferrer" class="tools__item" data-v-f74937b1><span data-v-f74937b1><span class="tools__item-title title_sub" data-v-f74937b1>Incognitee</span><span class="tools__item-subtitle paragraph_small" data-v-f74937b1>Privacy Sidechain on Polkadot</span><p class="paragraph paragraph_medium" data-v-f74937b1> A Layer 2 Sidechain that allows for private transfers of tokens on the Kusama and Polkadot Relaychain. </p></span>`);
      _push(ssrRenderComponent(unref(Link), { class: "tools__item-icon" }, null, _parent));
      _push(`</a></div></div></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Products/Tools.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Tools = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-f74937b1"]]);
const _hoisted_1$5 = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 64 64"
};
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$5, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "#9928FE",
      "fill-rule": "evenodd",
      d: "M31.25 9.333C18.37 9.873 8.159 20.391 8 33.283A23.94 23.94 0 0 0 17.97 52.8a10.36 10.36 0 0 0 6.07 1.867h15.942c2.119.031 4.195-.6 5.938-1.806A23.987 23.987 0 0 0 31.25 9.333",
      "clip-rule": "evenodd"
    }, null, -1),
    createElementVNode("path", {
      stroke: "#fff",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "4",
      d: "M32 17.339v2.666M20.685 22.027l1.885 1.885M35.304 30.037l8.01-8.01M22.667 45.339h18.666"
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
      d: "M48 33.339h-2.666M18.667 33.339H16"
    }, null, -1)
  ])]);
}
const Speed = { render: render$5 };
const _hoisted_1$4 = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 65 64"
};
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "#9928FE",
      "fill-rule": "evenodd",
      d: "M10 28.712A28.29 28.29 0 0 0 28.38 55.21l.08.03a12 12 0 0 0 8.415-.003l.065-.025a28.34 28.34 0 0 0 18.394-26.536v-9.929a5.33 5.33 0 0 0-3.744-5.09L34.257 8.243a5.33 5.33 0 0 0-3.18 0l-17.333 5.413A5.33 5.33 0 0 0 10 18.747z",
      "clip-rule": "evenodd"
    }, null, -1),
    createElementVNode("path", {
      stroke: "#fff",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "4",
      d: "m27.333 32 4 4 8-8"
    }, null, -1)
  ])]);
}
const Guard = { render: render$4 };
const _hoisted_1$3 = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 65 64"
};
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "#9928FE",
      "fill-rule": "evenodd",
      d: "m9.653 35.907 3.187 4.17.688 5.192a6.43 6.43 0 0 0 5.525 5.53l5.206.697 4.168 3.184a6.43 6.43 0 0 0 7.81 0l4.17-3.187h-.004l5.194-.688a6.43 6.43 0 0 0 5.53-5.525l.694-5.205c0 .002 1.61-2.107 3.187-4.168a6.43 6.43 0 0 0 0-7.811l-3.181-4.173-.688-5.192a6.43 6.43 0 0 0-5.526-5.531l-5.208-.693-4.168-3.184a6.43 6.43 0 0 0-7.81 0l-4.171 3.184h.005l-5.194.69a6.43 6.43 0 0 0-5.531 5.526l-.696 5.205c0-.003-1.61 2.107-3.187 4.168a6.44 6.44 0 0 0 0 7.81",
      "clip-rule": "evenodd"
    }, null, -1),
    createElementVNode("path", {
      stroke: "#fff",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "4",
      d: "m39.808 28.272-9.336 9.336-5.608-5.603"
    }, null, -1)
  ])]);
}
const Agree = { render: render$3 };
const _hoisted_1$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 64 64"
};
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "#9928FE",
      "fill-rule": "evenodd",
      d: "M45.333 56H18.667C12.776 56 8 51.224 8 45.333V18.667C8 12.776 12.776 8 18.667 8h26.666C51.224 8 56 12.776 56 18.667v26.666C56 51.224 51.224 56 45.333 56",
      "clip-rule": "evenodd"
    }, null, -1),
    createElementVNode("path", {
      stroke: "#fff",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "4",
      d: "M33.824 22.803 32 17.333l-1.824 5.47a5.34 5.34 0 0 1-3.373 3.373L21.333 28l5.47 1.824a5.34 5.34 0 0 1 3.373 3.373L32 38.667l1.824-5.47a5.34 5.34 0 0 1 3.374-3.373L42.667 28l-5.47-1.824a5.32 5.32 0 0 1-3.373-3.373",
      "clip-rule": "evenodd"
    }, null, -1),
    createElementVNode("path", {
      stroke: "#fff",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "4",
      d: "M41.333 38.667v8M45.334 42.667h-8M20 37.333v5.334M22.667 40h-5.334"
    }, null, -1)
  ])]);
}
const Stars = { render: render$2 };
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 65 64"
};
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m57.97 41.333-4-4-4 4M7.334 17.333l4 4 4-4"></path><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M11.334 21.333v-8A5.33 5.33 0 0 1 16.667 8h8M53.97 37.333v13.334c0 2.933-2.4 5.333-5.333 5.333h-7.97"></path><path fill="#9928FE" fill-rule="evenodd" d="M8.667 45.499V35c0-1.656 1.344-3 3-3H30c1.656 0 3 1.344 3 3v10.501c0 1.656-1.344 3-3 3H11.667c-1.656 0-3-1.344-3-3.002" clip-rule="evenodd"></path><path stroke="#9928FE" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20.827 48.507V56M15.494 56H26.16"></path><path fill="#9928FE" fill-rule="evenodd" d="M38.432 13.424c-3.25.443-5.765 3.203-5.765 6.576a6.667 6.667 0 0 0 6.666 6.667H54a5.33 5.33 0 0 0 5.333-5.334A5.33 5.33 0 0 0 54 16a8 8 0 0 0-8-8 7.995 7.995 0 0 0-7.568 5.424" clip-rule="evenodd"></path>', 5)
  ])]);
}
const Cloud = { render: render$1 };
const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 65 64"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "#9928FE",
      "fill-rule": "evenodd",
      d: "M56.333 45.333V28.585c0-3.24-1.473-6.305-4.003-8.33l-11.667-9.333a13.33 13.33 0 0 0-16.66 0l-11.667 9.334a10.67 10.67 0 0 0-4.003 8.33v16.747C8.333 51.224 13.11 56 19 56h26.667c5.89 0 10.666-4.776 10.666-10.667",
      "clip-rule": "evenodd"
    }, null, -1),
    createElementVNode("path", {
      stroke: "#fff",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "4",
      d: "M32.333 24v2.154M27 30.463a4.904 4.904 0 0 1 5.333-4.309M32.333 45.333V43.18M37.667 38.87a4.904 4.904 0 0 1-5.334 4.309M37.53 29.523a5.2 5.2 0 0 0-5.197-3.369M27.136 39.81a5.2 5.2 0 0 0 5.198 3.37"
    }, null, -1),
    createElementVNode("path", {
      stroke: "#fff",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "4",
      d: "M27 30.463a3.83 3.83 0 0 0 3.076 3.752l4.514.903a3.83 3.83 0 0 1 3.077 3.752v0"
    }, null, -1)
  ])]);
}
const Money = { render };
const _sfc_main$2 = {
  __name: "Why",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "why" }, _attrs))} data-v-7e396de1><div class="why block" data-v-7e396de1><div class="container" data-v-7e396de1><h2 class="title title_h2 margin_large" data-v-7e396de1>Why are our tools amazing?</h2><div class="why__list" data-v-7e396de1><div class="why__item" data-v-7e396de1>`);
      _push(ssrRenderComponent(unref(Speed), { class: "why__item-icon margin_medium" }, null, _parent));
      _push(`<div class="why__item-title margin_medium title_sub" data-v-7e396de1>Unrivalled speed at scale</div><p class="why__item-description paragraph paragraph_medium" data-v-7e396de1>Our shardable second-layer sidechains deliver unrivalled transaction speed and volumes at sub-second block production times.</p></div><div class="why__item" data-v-7e396de1>`);
      _push(ssrRenderComponent(unref(Guard), { class: "why__item-icon margin_medium" }, null, _parent));
      _push(`<div class="why__item-title margin_medium title_sub" data-v-7e396de1>Privacy by design</div><p class="why__item-description paragraph paragraph_medium" data-v-7e396de1>By using TEEs to enable confidential state transitions, our solution protects sensitive data and helps to ensure compliance with privacy regulations like GDPR.</p></div><div class="why__item" data-v-7e396de1>`);
      _push(ssrRenderComponent(unref(Agree), { class: "why__item-icon margin_medium" }, null, _parent));
      _push(`<div class="why__item-title margin_medium title_sub" data-v-7e396de1>Verifiable integrity</div><p class="why__item-description paragraph paragraph_medium" data-v-7e396de1>Users can verify that their data has been processed in a genuine TEE through public records on our parachain, fostering transparency and trust.</p></div><div class="why__item" data-v-7e396de1>`);
      _push(ssrRenderComponent(unref(Stars), { class: "why__item-icon margin_medium" }, null, _parent));
      _push(`<div class="why__item-title margin_medium title_sub" data-v-7e396de1>Independent economic model</div><p class="why__item-description paragraph paragraph_medium" data-v-7e396de1>Every sidechain or Dapp operator can determine the fees for exchange independently from integritee.</p></div><div class="why__item" data-v-7e396de1>`);
      _push(ssrRenderComponent(unref(Cloud), { class: "why__item-icon margin_medium" }, null, _parent));
      _push(`<div class="why__item-title margin_medium title_sub" data-v-7e396de1>Flexible deployment</div><p class="why__item-description paragraph paragraph_medium" data-v-7e396de1>You are free to run TEEs on own suitable hardware or rent it at standard market rates. Operate the nodes either on premise or in the cloud.</p></div><div class="why__item" data-v-7e396de1>`);
      _push(ssrRenderComponent(unref(Money), { class: "why__item-icon margin_medium" }, null, _parent));
      _push(`<div class="why__item-title margin_medium title_sub" data-v-7e396de1>Low fees</div><p class="why__item-description paragraph paragraph_medium" data-v-7e396de1>Use TEER – our native cryptocurrency token and keep transaction costs at only a fraction of a cent and maintained at a stable USD price to ensure predictable costs.</p></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Products/Why.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Why = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-7e396de1"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Quick",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "quick" }, _attrs))} data-v-861afed2><div class="quick block" data-v-861afed2><div class="container blur-gradient blur-gradient_top" data-v-861afed2><h2 class="title title_h2 margin_medium" data-v-861afed2>Quick start guides</h2><div class="paragraph paragraph_medium margin_large" data-v-861afed2>Explore our guides to learn more about our tech.</div><div class="row quick__links-row margin_large" data-v-861afed2><a${ssrRenderAttr("href", unref(GITHUB_LINK))} target="_blank" class="btn btn_border quick__link" data-v-861afed2> GitHub </a><a${ssrRenderAttr("href", unref(DOCS_LINK))} target="_blank" class="btn btn_border quick__link" data-v-861afed2> Docs </a></div><div class="quick__link-list" data-v-861afed2>`);
      _push(ssrRenderComponent(LineLink, {
        text: "What is the TEER Token",
        link: unref(TEER_TOKEN_LINK)
      }, null, _parent));
      _push(ssrRenderComponent(LineLink, {
        text: "How to setup Integritee infrastructure",
        link: unref(HOW_TO_SETUP_LINK)
      }, null, _parent));
      _push(ssrRenderComponent(LineLink, {
        text: "Governance on Integritee Network",
        link: unref(GOVERNANCE_LINK)
      }, null, _parent));
      _push(ssrRenderComponent(LineLink, {
        text: "Check out our Technology",
        link: unref(CHECK_TECH_LINK)
      }, null, _parent));
      _push(`</div></div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Products/Quick.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Quick = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-861afed2"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "products",
  __ssrInlineRender: true,
  setup(__props) {
    generateSEO({
      title: "Integritee Network - Products",
      description: "Introducing a product suite for developing Web3 projects that are secure and scalable to power the future of the internet and beyond."
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(ssrRenderComponent(Tools, null, null, _parent));
      _push(ssrRenderComponent(Why, null, null, _parent));
      _push(ssrRenderComponent(Quick, null, null, _parent));
      _push(ssrRenderComponent(Socials, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=products-BbNv40AF.js.map
