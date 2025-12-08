import { mergeProps, useSSRContext } from 'file:///home/brenzi/integritee/integritee_network_website/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderSlot } from 'file:///home/brenzi/integritee/integritee_network_website/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "desc block" }, _attrs))} data-v-413154eb><div class="container" data-v-413154eb><div class="column column_large" data-v-413154eb><h1 class="title title_hero desc__title margin_medium" data-v-413154eb>`);
  ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent, "data-v-413154eb-s");
  _push(`</h1><p class="paragraph paragraph_medium main__description margin_large" data-v-413154eb>`);
  ssrRenderSlot(_ctx.$slots, "text", {}, null, _push, _parent, "data-v-413154eb-s");
  _push(`</p>`);
  if (_ctx.$slots.button || _ctx.$slots.docs) {
    _push(`<div class="desc__row" data-v-413154eb>`);
    ssrRenderSlot(_ctx.$slots, "button", {}, null, _push, _parent, "data-v-413154eb-s");
    ssrRenderSlot(_ctx.$slots, "docs", {}, null, _push, _parent, "data-v-413154eb-s");
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Desc/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Desc = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-413154eb"]]);

export { Desc as D };
//# sourceMappingURL=index-DP1QcsTP.mjs.map
