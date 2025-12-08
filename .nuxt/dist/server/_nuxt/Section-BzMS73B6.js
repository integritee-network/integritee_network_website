import { defineComponent, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { T as TELEGRAM_LINK, c as Telegram, D as DISCORD_LINK, d as Discord, e as TWITTER_LINK, f as Twitter, _ as _export_sfc } from "../server.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Section",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "socials" }, _attrs))} data-v-04852fbb><div class="block socials" data-v-04852fbb><div class="container" data-v-04852fbb><div class="row jcsb socials__row" data-v-04852fbb><div class="socials__text" data-v-04852fbb><h2 class="title title_h2 margin_medium socials__title" data-v-04852fbb> We&#39;re Integritee </h2><p class="paragraph paragraph_medium socials__description" data-v-04852fbb> Whether you’re a developer, investor, or Web 3.0 enthusiast, get <br data-v-04852fbb> in touch to learn more about our tools and solutions. </p></div><div class="column_medium socials__list" data-v-04852fbb><a${ssrRenderAttr("href", unref(TELEGRAM_LINK))} target="_blank" class="socials__list-item" data-v-04852fbb>`);
      _push(ssrRenderComponent(unref(Telegram), { class: "socials__list-item-icon" }, null, _parent));
      _push(`<span class="socials__list-item-name" data-v-04852fbb>Telegram</span></a><a${ssrRenderAttr("href", unref(DISCORD_LINK))} target="_blank" class="socials__list-item" data-v-04852fbb>`);
      _push(ssrRenderComponent(unref(Discord), { class: "socials__list-item-icon" }, null, _parent));
      _push(`<span class="socials__list-item-name" data-v-04852fbb>Discord</span></a><a${ssrRenderAttr("href", unref(TWITTER_LINK))} target="_blank" class="socials__list-item" data-v-04852fbb>`);
      _push(ssrRenderComponent(unref(Twitter), { class: "socials__list-item-icon" }, null, _parent));
      _push(`<span class="socials__list-item-name paragraph_medium" data-v-04852fbb>Twitter</span></a></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Socials/Section.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Socials = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-04852fbb"]]);
export {
  Socials as S
};
//# sourceMappingURL=Section-BzMS73B6.js.map
