import { mergeProps, ref, useSSRContext, unref, withCtx, createVNode, createTextVNode, defineComponent } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderSlot, ssrRenderComponent } from "vue/server-renderer";
import useVuelidate from "@vuelidate/core";
import { minLength, required, email } from "@vuelidate/validators";
import { _ as _export_sfc } from "../server.mjs";
import { D as Desc } from "./index-DP1QcsTP.js";
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
const _sfc_main$3 = {
  setup() {
    const formData = ref({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    let isSuccess = ref(false);
    let isSending = ref(false);
    const rules = {
      name: { required, minLength: minLength(2) },
      email: { required, email },
      subject: { required, minLength: minLength(2) },
      message: { required, minLength: minLength(2) }
    };
    const v$ = useVuelidate(rules, formData);
    const resetForm = () => {
      formData.value = {
        name: "",
        email: "",
        subject: "",
        message: ""
      };
      v$.value.$reset();
    };
    const onSubmit = async () => {
      const result = await v$.value.$validate();
      if (result) {
        isSending.value = true;
        try {
          await $fetch("/api/mail", {
            method: "POST",
            body: formData.value
          });
          resetForm();
          isSuccess.value = true;
        } catch (err) {
          console.log(err);
        } finally {
          isSending.value = false;
        }
      }
    };
    const onCloseHandler = () => {
      isSuccess.value = false;
    };
    const getCount = (str) => {
      return str.length;
    };
    const onFieldChange = (propertyName, value) => {
      formData.value = { ...formData.value, [propertyName]: value };
    };
    return {
      formData,
      isSuccess,
      v$,
      onSubmit,
      onCloseHandler,
      getCount,
      onFieldChange
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<form${ssrRenderAttrs(mergeProps({ class: "form" }, _attrs))} data-v-6cd205af><div class="form__row row jcsb" data-v-6cd205af><div class="${ssrRenderClass([{
    error: $setup.v$.$errors.length > 0 && $setup.v$.$errors[0].$property === "name",
    active: $setup.formData.name !== ""
  }, "form__field"])}" data-v-6cd205af><input${ssrRenderAttr("value", $setup.formData.name)} type="text" class="paragraph_medium form__input" data-v-6cd205af><label class="${ssrRenderClass([{ active: $setup.formData.name !== "" }, "form__label paragraph_medium"])}" data-v-6cd205af>Name</label><div class="form__field_caption" data-v-6cd205af>${ssrInterpolate($setup.v$.$errors.length > 0 && $setup.v$.$errors[0].$message)}</div></div><div class="${ssrRenderClass([{
    error: $setup.v$.$errors.length > 0 && $setup.v$.$errors[0].$property === "email",
    active: $setup.formData.email !== ""
  }, "form__field"])}" data-v-6cd205af><input${ssrRenderAttr("value", $setup.formData.email)} type="text" class="paragraph_medium form__input" data-v-6cd205af><label class="${ssrRenderClass([{ active: $setup.formData.email !== "" }, "form__label paragraph_medium"])}" data-v-6cd205af>Email</label><div class="form__field_caption" data-v-6cd205af>${ssrInterpolate($setup.v$.$errors.length > 0 && $setup.v$.$errors[0].$message)}</div></div><div class="${ssrRenderClass([{
    error: $setup.v$.$errors.length > 0 && $setup.v$.$errors[0].$property === "subject",
    active: $setup.formData.subject !== ""
  }, "form__field"])}" data-v-6cd205af><input maxlength="80"${ssrRenderAttr("value", $setup.formData.subject)} type="text" class="paragraph_medium form__input" data-v-6cd205af><label class="${ssrRenderClass([{ active: $setup.formData.subject !== "" }, "form__label paragraph_medium"])}" data-v-6cd205af>Subject</label><div class="form__field_caption" data-v-6cd205af>${ssrInterpolate($setup.v$.$errors.length > 0 && $setup.v$.$errors[0].$message)}</div><span class="form__count" data-v-6cd205af>${ssrInterpolate($setup.getCount($setup.formData.subject))}/80</span></div><div class="${ssrRenderClass([{
    error: $setup.v$.$errors.length > 0 && $setup.v$.$errors[0].$property === "message",
    active: $setup.formData.message !== ""
  }, "form__field"])}" data-v-6cd205af><textarea maxlength="200" class="paragraph_medium form__textarea scrollbar" data-v-6cd205af>${ssrInterpolate($setup.formData.message)}</textarea><label class="${ssrRenderClass([{ active: $setup.formData.message !== "" }, "form__label paragraph_medium"])}" data-v-6cd205af>Message</label><div class="form__field_caption" data-v-6cd205af>${ssrInterpolate($setup.v$.$errors.length > 0 && $setup.v$.$errors[0].$message)}</div><span class="form__count" data-v-6cd205af>${ssrInterpolate($setup.getCount($setup.formData.message))}/200</span></div><div class="btn__row row" data-v-6cd205af><button type="submit" class="btn btn_gradient form__button"${ssrIncludeBooleanAttr(_ctx.isSending) ? " disabled" : ""} data-v-6cd205af> Submit </button><div class="${ssrRenderClass([{ active: $setup.isSuccess }, "form__success"])}" data-v-6cd205af><div class="form__success-icon" data-v-6cd205af></div><div class="form__success-text" data-v-6cd205af>Form completed. Thanks!</div><div class="form__success-close" data-v-6cd205af></div></div></div></div></form>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Contacts/Form.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Form = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-6cd205af"]]);
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "info" }, _attrs))} data-v-96ce9ead><div class="info__column" data-v-96ce9ead>`);
  ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent, "data-v-96ce9ead-s");
  ssrRenderSlot(_ctx.$slots, "items", {}, null, _push, _parent, "data-v-96ce9ead-s");
  _push(`</div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Contacts/Info.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Info = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-96ce9ead"]]);
const _sfc_main$1 = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "contacts" }, _attrs))} data-v-74bc6c9a>`);
      _push(ssrRenderComponent(unref(Desc), null, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-74bc6c9a${_scopeId}>Build</span> and <span class="text-gradient_purple-blue" data-v-74bc6c9a${_scopeId}>deploy</span> a new generation of data-driven platforms with Integritee `);
          } else {
            return [
              createVNode("span", null, "Build"),
              createTextVNode(" and "),
              createVNode("span", { class: "text-gradient_purple-blue" }, "deploy"),
              createTextVNode(" a new generation of data-driven platforms with Integritee ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="block" data-v-74bc6c9a><div class="container" data-v-74bc6c9a><div class="contacts__row row jcsb" data-v-74bc6c9a><div class="contacts__column" data-v-74bc6c9a>`);
      _push(ssrRenderComponent(Info, null, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="title title_h2 margin_large" data-v-74bc6c9a${_scopeId}> Get in touch<br data-v-74bc6c9a${_scopeId}> with Integritee </h2>`);
          } else {
            return [
              createVNode("h2", { class: "title title_h2 margin_large" }, [
                createTextVNode(" Get in touch"),
                createVNode("br"),
                createTextVNode(" with Integritee ")
              ])
            ];
          }
        }),
        items: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info__row" data-v-74bc6c9a${_scopeId}><div class="info__item" data-v-74bc6c9a${_scopeId}><div class="contact__icon margin_medium" data-v-74bc6c9a${_scopeId}></div><p class="title_sub margin_medium" data-v-74bc6c9a${_scopeId}>Contact Us</p><p class="paragraph_large" data-v-74bc6c9a${_scopeId}><a href="mailto: hello@integritee.network" class="text-link info__link" data-v-74bc6c9a${_scopeId}>hello@integritee.network</a><a href="mailto: support@integritee.network" class="text-link info__link" data-v-74bc6c9a${_scopeId}>support@integritee.network</a></p></div></div>`);
          } else {
            return [
              createVNode("div", { class: "info__row" }, [
                createVNode("div", { class: "info__item" }, [
                  createVNode("div", { class: "contact__icon margin_medium" }),
                  createVNode("p", { class: "title_sub margin_medium" }, "Contact Us"),
                  createVNode("p", { class: "paragraph_large" }, [
                    createVNode("a", {
                      href: "mailto: hello@integritee.network",
                      class: "text-link info__link"
                    }, "hello@integritee.network"),
                    createVNode("a", {
                      href: "mailto: support@integritee.network",
                      class: "text-link info__link"
                    }, "support@integritee.network")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(Form, null, null, _parent));
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(Socials, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Contacts/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-74bc6c9a"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "contacts",
  __ssrInlineRender: true,
  setup(__props) {
    generateSEO({
      title: "Integritee Network - Contacts",
      description: "Build and deploy a new generation of data-driven platforms with Integritee. Get in touch with Integritee."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Contacts = __nuxt_component_0;
      _push(ssrRenderComponent(_component_Contacts, _attrs, null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contacts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=contacts-BDwNLPy8.js.map
