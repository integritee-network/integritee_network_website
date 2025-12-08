import { createElementBlock, openBlock, createElementVNode, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 21 21"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      stroke: "#fff",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "1.5",
      d: "m5.25 15.75 10.5-10.5M7.219 5.25h8.531v8.531"
    }, null, -1)
  ])]);
}
const Link = { render };
const _sfc_main = {
  __name: "LineLink",
  __ssrInlineRender: true,
  props: {
    link: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        href: __props.link,
        class: "line-link",
        target: "_blank"
      }, _attrs))} data-v-bacbfea7><span class="line-link__text paragraph_large" data-v-bacbfea7>${ssrInterpolate(__props.text)}</span>`);
      _push(ssrRenderComponent(unref(Link), { class: "line-link__icon" }, null, _parent));
      _push(`<div class="line-link__underline" data-v-bacbfea7></div></a>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Global/LineLink.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LineLink = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bacbfea7"]]);
export {
  LineLink as L,
  Link as a
};
//# sourceMappingURL=LineLink-Cl_e6AwC.js.map
