import { defineComponent, mergeProps, unref, withCtx, createVNode, createTextVNode, createElementBlock, openBlock, createElementVNode, createStaticVNode, ref, watch, reactive, useSSRContext } from 'file:///home/brenzi/integritee/integritee_network_website/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrInterpolate } from 'file:///home/brenzi/integritee/integritee_network_website/node_modules/vue/server-renderer/index.mjs';
import { D as Desc } from './index-DP1QcsTP.mjs';
import { _ as _export_sfc, F as FULL_STACK_DEV, R as RUST_CORE_DEV, S as SENIOR_DEVOPS, A as ALL_POSITION, b as breakpoints } from './server.mjs';
import { L as LineLink } from './LineLink-Cl_e6AwC.mjs';
import { useWindowSize, useWindowScroll, objectEntries } from 'file:///home/brenzi/integritee/integritee_network_website/node_modules/@vueuse/core/index.mjs';
import map from 'file:///home/brenzi/integritee/integritee_network_website/node_modules/lodash/map.js';
import _ from 'file:///home/brenzi/integritee/integritee_network_website/node_modules/lodash/lodash.js';
import { S as Socials } from './Section-BzMS73B6.mjs';
import { g as generateSEO } from './generateSEO-BS-OswUA.mjs';
import 'file:///home/brenzi/integritee/integritee_network_website/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///home/brenzi/integritee/integritee_network_website/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///home/brenzi/integritee/integritee_network_website/node_modules/h3/dist/index.mjs';
import 'file:///home/brenzi/integritee/integritee_network_website/node_modules/ufo/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///home/brenzi/integritee/integritee_network_website/node_modules/destr/dist/index.mjs';
import 'file:///home/brenzi/integritee/integritee_network_website/node_modules/hookable/dist/index.mjs';
import 'file:///home/brenzi/integritee/integritee_network_website/node_modules/node-mock-http/dist/index.mjs';
import 'file:///home/brenzi/integritee/integritee_network_website/node_modules/unstorage/dist/index.mjs';
import 'file:///home/brenzi/integritee/integritee_network_website/node_modules/unstorage/drivers/fs.mjs';
import 'file:///home/brenzi/integritee/integritee_network_website/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///home/brenzi/integritee/integritee_network_website/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///home/brenzi/integritee/integritee_network_website/node_modules/ohash/dist/index.mjs';
import 'file:///home/brenzi/integritee/integritee_network_website/node_modules/klona/dist/index.mjs';
import 'file:///home/brenzi/integritee/integritee_network_website/node_modules/defu/dist/defu.mjs';
import 'file:///home/brenzi/integritee/integritee_network_website/node_modules/scule/dist/index.mjs';
import 'file:///home/brenzi/integritee/integritee_network_website/node_modules/unctx/dist/index.mjs';
import 'file:///home/brenzi/integritee/integritee_network_website/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///home/brenzi/integritee/integritee_network_website/node_modules/pathe/dist/index.mjs';
import 'file:///home/brenzi/integritee/integritee_network_website/node_modules/unhead/dist/server.mjs';
import 'file:///home/brenzi/integritee/integritee_network_website/node_modules/devalue/index.js';
import 'file:///home/brenzi/integritee/integritee_network_website/node_modules/unhead/dist/plugins.mjs';
import 'file:///home/brenzi/integritee/integritee_network_website/node_modules/unhead/dist/utils.mjs';
import 'file:///home/brenzi/integritee/integritee_network_website/node_modules/vue-router/dist/vue-router.node.mjs';
import './v3-CIrZdX_3.mjs';

const _sfc_main$4 = {
  __name: "Hero",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "hero" }, _attrs))} data-v-2cb43c52><div class="hero" data-v-2cb43c52>`);
      _push(ssrRenderComponent(unref(Desc), null, {
        title: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` We\u2019re blockchain veterans who believe<br data-v-2cb43c52${_scopeId}> in the power<br data-v-2cb43c52${_scopeId}> of a <span class="text-gradient_blue-purple" data-v-2cb43c52${_scopeId}>decentralized</span> <span class="text-gradient_purple-blue" data-v-2cb43c52${_scopeId}>Web3</span>`);
          } else {
            return [
              createTextVNode(" We\u2019re blockchain veterans who believe"),
              createVNode("br"),
              createTextVNode(" in the power"),
              createVNode("br"),
              createTextVNode(" of a "),
              createVNode("span", { class: "text-gradient_blue-purple" }, "decentralized"),
              createTextVNode(),
              createVNode("span", { class: "text-gradient_purple-blue" }, "Web3")
            ];
          }
        }),
        text: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` We\u2019ve been developing decentralized solutions for tangible, real-world use cases for over half a decade. `);
          } else {
            return [
              createTextVNode(" We\u2019ve been developing decentralized solutions for tangible, real-world use cases for over half a decade. ")
            ];
          }
        }),
        button: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a href="mailto: hello@integritee.network" class="btn btn_gradient desc__button" data-v-2cb43c52${_scopeId}>Contact us</a>`);
          } else {
            return [
              createVNode("a", {
                href: "mailto: hello@integritee.network",
                class: "btn btn_gradient desc__button"
              }, "Contact us")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/About/Hero.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Hero = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-2cb43c52"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Join",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "join" }, _attrs))}><div class="join block"><div class="container blur-gradient blur-gradient_extra-top"><div class="row jcsb join__row"><div class="join__titleWrap"><h2 class="title title_h2 margin_medium"> Want to join our\xA0team? </h2><p class="paragraph_medium join__text"> At Integritee, we strongly believe in a mixture of perspectives and experiences. We&#39;re proudly committed to equal employment and development opportunities no matter your gender, race, religion, age, sexual orientation, colour, disability, or place of origin. Let your experience speak for itself add full stop </p></div><div class="join__links">`);
      _push(ssrRenderComponent(LineLink, {
        text: "Full-Stack Developer",
        link: unref(FULL_STACK_DEV)
      }, null, _parent));
      _push(ssrRenderComponent(LineLink, {
        text: "Rust Core Developer",
        link: unref(RUST_CORE_DEV)
      }, null, _parent));
      _push(ssrRenderComponent(LineLink, {
        text: "Senior DevOps Engineer",
        link: unref(SENIOR_DEVOPS)
      }, null, _parent));
      _push(ssrRenderComponent(LineLink, {
        text: "View all positions",
        link: unref(ALL_POSITION)
      }, null, _parent));
      _push(`</div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/About/Join.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
function useRoadmap() {
  const years = reactive([
    {
      year: "2026",
      active: true
    },
    {
      year: "2025",
      active: true
    },
    {
      year: "2024",
      active: false
    },
    {
      year: "2023",
      active: false
    },
    {
      year: "2022",
      active: false
    },
    {
      year: "2021",
      active: false
    },
    {
      year: "2020",
      active: false
    },
    {
      year: "2019",
      active: false
    },
    {
      year: "2018",
      active: false
    }
  ]);
  const roadmap = reactive({
    "2026": {
      info: [
        {
          name: "Q1-Q4",
          content: [
            "Release sidechain SDK v 1.0.0",
            "Release of Incognitee mainnet stable production version",
            "Launch of Incognitee mainnet on Ethereum and other ERC compatible chains",
            "Launch of Incognitee on other parachains",
            "Launch of Incognitee on other chains like Cardano, Avalanche",
            "Integration of Incognitee with other wallets",
            "Onboard 3rd-party validateers for Incognitee",
            "Launch TEERday nomination of validateers for Incognitee",
            "TEER other ERC compatible chains",
            "Launch of referral campaign"
          ],
          type: "long"
        }
      ],
      active: true
    },
    "2025": {
      info: [
        {
          name: "Q1",
          content: [
            "Release sidechain SDK v0.15.7/8/9/10/12/13",
            "Release sidechain SDK v0.16.0/1/2/3",
            "Launch of Incognitee mainnet on Polkadot Asset Hub as beta deployment"
          ]
        },
        {
          name: "Q2",
          content: [
            "Limited TEER on Ethereum",
            "Release sidechain SDK v0.16.4/5/6/7",
            "Release of Incognitee feature W2W Messaging"
          ]
        },
        {
          name: "Q3",
          content: [
            "Release sidechain SDK v0.17.0",
            "Release of Incognitee feature AI Messaging",
            "Bridge TEER from Kusama parachain to Polkadot parachain"
          ]
        },
        {
          name: "Q4",
          content: [
            "TEER Hydration DEX listing",
            "TEER Uniswap DEX listing",
            "TEER on Ethereum",
            "Release of new Incognitee Omnichat"
          ]
        }
      ],
      active: true
    },
    "2024": {
      info: [
        {
          name: "Q1",
          content: [
            "Launch of Incognitee public testnet",
            "Launch of public referenda for TEER holders",
            "Payout of first treasury grant",
            "Listing on Basilisk DEX",
            "Presentation of randomness oracle at Polkadot Sub0"
          ]
        },
        {
          name: "Q2",
          content: [
            "Launch of Incognitee user & bounty campaign",
            "Launch of treasury grant program",
            "Release sidechain SDK v0.13.0",
            "Release of unpermissioned collators"
          ]
        },
        {
          name: "Q3",
          content: [
            "Release sidechain SDK v0.14.0",
            "Presenting Incognitee at Polkadot Decoded",
            "Launch of Incognitee TEERdays campaign",
            "TEER available on Telenova Telegram app"
          ]
        },
        {
          name: "Q4",
          content: [
            "Ledger support for Integritee Network",
            "Launch of Incognitee in beta on Integriee Network mainnet",
            "Release sidechain SDK v0.15.0/1/2/3/4/5",
            "Launch of Incognitee vouchers feature",
            "Launch of Incognitee private messaging feature",
            "Launch of guess-the-number contest",
            "Launch of TEE-Quest campaign"
          ]
        }
      ],
      active: false
    },
    "2023": {
      info: [
        {
          name: "Q1",
          content: [
            "Partnership with OLI Systems",
            "Participation in WEF in Davos",
            "Release sidechain SDK v0.11.0",
            "Release of generic trusted oracle framework",
            "Release of Securitee Confidential Computing Platform"
          ]
        },
        {
          name: "Q2",
          content: [
            "Partnership with Enclaive",
            "Participation in Polkadot India Now and Polkadot Decoded",
            "Launch of Integritee governance platform on Polkassembly",
            "Release of sidechain SDK v0.12.0",
            "Release of Teeracle as add-on on Securitee platorm"
          ]
        },
        {
          name: "Q3",
          content: [
            "Release of DCAP attestation on Integritee Network",
            "Release of Attesteer service for TEEs via API",
            "Integration of Attesteer service with Securitee"
          ]
        },
        {
          name: "Q4",
          content: [
            "Brand Refresh and new website launched",
            "Acceptance to Tech4Trust accelerator season 5",
            "Release of privacy sidechain demo",
            "Release of Incognitee public testnet"
          ]
        }
      ],
      active: false
    },
    "2022": {
      info: [
        {
          name: "Q1",
          content: [
            "Kusama parachain slot secured",
            "Release of sidechain demo",
            "Collaboration with OVH Cloud and Intel"
          ]
        },
        {
          name: "Q2",
          content: [
            "Migration from Solo to Kusama parachain",
            "Release of Sidechains Benchmark",
            "Network Decentralization: Remove Sudo and enable coin voting with TEER",
            "Listing on Kraken Exchange"
          ]
        },
        {
          name: "Q3",
          content: [
            "XCM Integration with Karura and Moonriver",
            "Polkadot parachain slot secured",
            "Partnership with Crust",
            "Release of sidechain SDK v0.9.0"
          ]
        },
        {
          name: "Q4",
          content: [
            "Partnership and XCM Integration with Bifrost",
            "Release of sidechain SDK v0.10.0",
            "PoC for EVM compatible Sidechains"
          ]
        }
      ],
      active: false
    },
    "2021": {
      info: [
        {
          name: "Q1",
          content: [
            "Launch Rococo testnet parachain",
            "Conceptualize and preparation of spin-off"
          ]
        },
        {
          name: "Q2",
          content: [
            "Spin-off from SCS and birth of Integritee AG",
            "Seed round close"
          ]
        },
        {
          name: "Q3",
          content: [
            "New brand and website relaunch",
            "Move from SubstraTEE to Integritee",
            "Release tokenomics paper",
            "Participation in public slot auctions on Kusama",
            "Start of community growth",
            "Series A round close"
          ]
        },
        {
          name: "Q4",
          content: [
            "Mainnet & token launch",
            "First deployment and practical use case hosted on the Integritee mainnet: the US dollar exchange rate oracle",
            "List TEER on major exchange Gate",
            "Start of Integritee ambassador program",
            "Partnership with Ajuna, KILT, Fractal"
          ]
        }
      ],
      active: false
    },
    "2020": {
      info: [
        {
          name: "Q1",
          content: ["3rd Web3 Grant for: SubstraTEE extension pack"]
        },
        {
          name: "Q2-Q3",
          content: [
            "Development of prototype platform based on SubstraTEE.",
            "First deployed and running use case with Encointer on the platform"
          ]
        },
        {
          name: "Q4",
          content: ["Polkadot treasury grant \u201CSubstraTEE scalability\u201D"]
        }
      ],
      active: false
    },
    "2019": {
      info: [
        {
          name: "Q1",
          content: [
            "1st Web3 grant for: Substrate transaction privacy using Intel SGX"
          ]
        },
        {
          name: "Q3",
          content: ["2nd Web3 grant for: Substrate Rust API client"]
        },
        {
          name: "Q4",
          content: [
            "First SubstraTEE meetup to demonstrate private token transactions."
          ]
        }
      ],
      active: false
    },
    "2018": {
      info: [
        {
          name: "Q4",
          content: [
            `Release of the Encointer whitepaper \u2013 \u201CLocal Community Cryptocurrencies with Universal Basic Income\u201D and start of the SubstraTEE journey`
          ],
          type: "long"
        }
      ],
      active: false
    }
  });
  function setActive(year) {
    map(roadmap, (item) => {
      item.active = false;
    });
    roadmap[year].active = true;
    const activeYear = years.find((item) => item.year === year);
    if (activeYear) {
      map(years, (item) => {
        item.active = false;
      });
      activeYear.active = true;
    }
  }
  function getYears() {
    return years;
  }
  function getInfoList() {
    const sort = objectEntries(roadmap).map((item) => item[1]).reverse();
    return sort;
  }
  return { getYears, getInfoList, setActive };
}
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Roadmap",
  __ssrInlineRender: true,
  setup(__props) {
    const { getYears, getInfoList, setActive } = useRoadmap();
    const { height, width } = useWindowSize();
    const { y } = useWindowScroll();
    const items = ref([]);
    const parent = ref(null);
    const nav = ref(null);
    const root = ref(null);
    const fixedNav = ref(false);
    const endNav = ref(false);
    const years = getYears();
    const roadmap = getInfoList();
    watch(y, (value) => {
      var _a, _b, _c, _d;
      if (!parent.value || !nav.value || !root.value) return;
      const middleHeight = height.value / 2;
      if (width.value > breakpoints.sm) {
        const elementInMiddle = ((_a = parent.value) == null ? void 0 : _a.getBoundingClientRect().y) + nav.value.offsetHeight / 2;
        const elementInEnd = ((_b = parent.value) == null ? void 0 : _b.getBoundingClientRect().y) + parent.value.offsetHeight - height.value / 2 - nav.value.offsetHeight / 2;
        fixedNav.value = middleHeight >= elementInMiddle && elementInEnd > 0;
        endNav.value = elementInEnd <= 0;
      } else {
        const elementInEnd = ((_c = parent.value) == null ? void 0 : _c.getBoundingClientRect().y) + parent.value.offsetHeight;
        fixedNav.value = ((_d = parent.value) == null ? void 0 : _d.getBoundingClientRect().y) <= 84;
        endNav.value = elementInEnd <= 84;
      }
      const clonedItems = _.clone(items.value);
      for (const [idx, item] of clonedItems.reverse().entries()) {
        if (item.getBoundingClientRect().y - height.value / 2 <= 0) {
          setActive(years[years.length - 1 - idx].year);
          if (width.value <= breakpoints.sm) {
            const value2 = fixedNav.value ? 13 : 0;
            nav.value.scrollTo({
              left: 89 * (years.length - 1 - idx) + value2,
              behavior: "smooth"
            });
          }
          break;
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "roadmap",
        ref_key: "root",
        ref: root
      }, _attrs))} data-v-39982082><div class="roadmap block" data-v-39982082><div class="container" data-v-39982082><h2 class="title title_h2 margin_medium" data-v-39982082>Project roadmap</h2><p class="roadmap__description margin_large paragraph paragraph_medium" data-v-39982082> Here\u2019s what we\u2019re building and just as importantly, what we\u2019ve already built. </p><div class="row roadmap__row" data-v-39982082><div class="roadmap__list-years-wrapper" data-v-39982082><div class="${ssrRenderClass([{ active: fixedNav.value, end: endNav.value }, "roadmap__list-years"])}" data-v-39982082><!--[-->`);
      ssrRenderList(unref(years), (year, idx) => {
        _push(`<button class="${ssrRenderClass([{ active: year.active }, "roadmap__item-year"])}" type="button" data-v-39982082>${ssrInterpolate(year.year)}</button>`);
      });
      _push(`<!--]--></div></div><div class="roadmap__list-text" data-v-39982082><!--[-->`);
      ssrRenderList(unref(roadmap), (year, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: year.active }, "roadmap__item-text"])}" data-v-39982082><!--[-->`);
        ssrRenderList(year.info, (quartal, index) => {
          _push(`<div class="${ssrRenderClass([{
            full: quartal.type === "long",
            mult: quartal.type === "long" && quartal.content.length > 1
          }, "roadmap__item-text-quartal"])}" data-v-39982082><div class="roadmap__item-text-name" data-v-39982082>${ssrInterpolate(quartal.name)}</div><div class="roadmap__item-text-points-wrapper" data-v-39982082><!--[-->`);
          ssrRenderList(quartal.content, (point, pIndex) => {
            _push(`<span class="roadmap__item-text-point paragraph paragraph_medium" data-v-39982082>${ssrInterpolate(point)}</span>`);
          });
          _push(`<!--]--></div></div>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/About/Roadmap.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Roadmap = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-39982082"]]);
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 65 65"
};
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "#9928FE",
      "fill-rule": "evenodd",
      d: "M8.003 32.013c.003-1.768.41-3.513 1.19-5.1a25.22 25.22 0 0 1 22.82-13.574 25.22 25.22 0 0 1 22.82 13.574 11.53 11.53 0 0 1 0 10.201 25.22 25.22 0 0 1-22.82 13.574 25.22 25.22 0 0 1-22.82-13.574 11.6 11.6 0 0 1-1.19-5.1",
      "clip-rule": "evenodd"
    }, null, -1),
    createElementVNode("path", {
      stroke: "#fff",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "4",
      d: "M40.017 32.013a8.003 8.003 0 1 1-8.004-8.003"
    }, null, -1)
  ])]);
}
const VisionIcon = { render: render$1 };
const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 64 64"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<mask id="i-1694055281__a" width="50" height="50" x="7" y="7" maskUnits="userSpaceOnUse" style="mask-type:alpha;"><path fill="#9928FE" fill-rule="evenodd" d="M49.286 14.715c9.546 9.546 9.546 25.024 0 34.57-9.547 9.547-25.025 9.547-34.571 0-9.547-9.546-9.547-25.024 0-34.57 9.546-9.547 25.024-9.547 34.57 0" clip-rule="evenodd"></path></mask><g mask="url(#i-1694055281__a)"><path fill="#9928FE" fill-rule="evenodd" d="M49.286 14.715c9.546 9.546 9.546 25.024 0 34.57-9.547 9.547-25.025 9.547-34.571 0-9.547-9.546-9.547-25.024 0-34.57 9.546-9.547 25.024-9.547 34.57 0" clip-rule="evenodd"></path><path fill="#fff" fill-rule="evenodd" d="M28.126 34.444v4.85a2.445 2.445 0 0 0 2.446 2.446H41.84a2.445 2.445 0 0 0 2.317-3.221l-1.365-4.075 1.37-4.115a2.445 2.445 0 0 0-2.32-3.218h-8.831" clip-rule="evenodd"></path><path fill="#fff" fill-rule="evenodd" d="M30.571 34.444h-12.22v-9.779a2.445 2.445 0 0 1 2.444-2.445h9.776a2.445 2.445 0 0 1 2.446 2.445V32a2.447 2.447 0 0 1-2.446 2.445" clip-rule="evenodd"></path><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.333 53.174v-18.72"></path></g>', 2)
  ])]);
}
const MissionIcon = { render };
const _sfc_main$1 = {
  __name: "Vision",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "vision" }, _attrs))}><div class="vision block"><div class="container"><div class="row jcsb vision__row"><div class="vision__card"><div class="vision__icon">`);
      _push(ssrRenderComponent(unref(VisionIcon), null, null, _parent));
      _push(`</div><h2 class="title_sub">Our vision</h2><p class="paragraph_medium vision__text">We see a Web 3 that rises above the \u2018winner takes all\u2019 privatization of Web 2. One where individuals have governance, global jurisdiction and the ability to actively contribute to the online community.</p></div><div class="vision__card"><div class="vision__icon">`);
      _push(ssrRenderComponent(unref(MissionIcon), null, null, _parent));
      _push(`</div><h2 class="title_sub">Our misson</h2><p class="paragraph_medium vision__text">Create the fastest, most scalable and secure network solution for building Web 3 and bringing our vision to life.</p></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/About/Vision.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    generateSEO({
      title: "Integritee Network - About",
      description: "We\u2019re blockchain veterans who have been developing decentralized solutions for tangible, real-world use cases for over half a decade."
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Hero, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(ssrRenderComponent(Roadmap, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(ssrRenderComponent(Socials, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=about-njy7ePbB.mjs.map
