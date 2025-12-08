import { defineComponent, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
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
export {
  _sfc_main as default
};
//# sourceMappingURL=privacy-policy-BkMyD-P6.js.map
