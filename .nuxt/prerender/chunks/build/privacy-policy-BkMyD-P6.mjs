import { defineComponent, useSSRContext } from 'file:///home/brenzi/integritee/integritee_network_website/node_modules/vue/index.mjs';
import { ssrRenderComponent } from 'file:///home/brenzi/integritee/integritee_network_website/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Docs/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Docs = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-ca7425c8"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "privacy-policy",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Docs, _attrs, null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/privacy-policy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=privacy-policy-BkMyD-P6.mjs.map
