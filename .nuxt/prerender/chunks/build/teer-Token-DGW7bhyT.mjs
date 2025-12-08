import { _ as _export_sfc, M as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, resolveComponent, mergeProps, useSSRContext } from 'file:///home/brenzi/integritee/integritee_network_website/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderAttrs } from 'file:///home/brenzi/integritee/integritee_network_website/node_modules/vue/server-renderer/index.mjs';
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
import 'file:///home/brenzi/integritee/integritee_network_website/node_modules/@vueuse/core/index.mjs';
import './v3-CIrZdX_3.mjs';

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_HowItWorks = resolveComponent("HowItWorks");
  const _component_Questions = resolveComponent("Questions");
  const _component_Socials = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "teer" }, _attrs))} data-v-d3c74d9e>`);
  _push(ssrRenderComponent(_component_HowItWorks, { items: _ctx.items }, null, _parent));
  _push(ssrRenderComponent(_component_Questions, null, null, _parent));
  _push(ssrRenderComponent(_component_Socials, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Teer/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d3c74d9e"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "teer-Token",
  __ssrInlineRender: true,
  setup(__props) {
    generateSEO({
      title: "Integritee Network - TEER Token",
      description: "TEER, a token with utility and long-term value. Our token empowers utility, governance and value at the same time, making it a valuable asset."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Teer = __nuxt_component_0;
      _push(ssrRenderComponent(_component_Teer, _attrs, null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/teer-Token.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=teer-Token-DGW7bhyT.mjs.map
