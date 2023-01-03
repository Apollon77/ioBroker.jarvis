import{bx as Q,cR as B,c2 as V,k as h,cS as x,Q as r,cT as H,aY as v,as as I,ac as i,bu as M,by as O,ck as P,bB as d,cU as _,a9 as R,cV as j}from"./index-1747645b.js";const L=Object.keys(B),z=e=>L.reduce((o,t)=>{const l=e[t];return l!==void 0&&(o[t]=l),o},{});var U=Q({name:"QBtnDropdown",props:{...B,...V,modelValue:Boolean,split:Boolean,dropdownIcon:String,contentClass:[Array,String,Object],contentStyle:[Array,String,Object],cover:Boolean,persistent:Boolean,noRouteDismiss:Boolean,autoClose:Boolean,menuAnchor:{type:String,default:"bottom end"},menuSelf:{type:String,default:"top end"},menuOffset:Array,disableMainBtn:Boolean,disableDropdown:Boolean,noIconAnimation:Boolean,toggleAriaLabel:String},emits:["update:modelValue","click","beforeShow","show","beforeHide","hide"],setup(e,{slots:o,emit:t}){const{proxy:l}=R(),u=h(e.modelValue),a=h(null),c=x(),b=r(()=>{const n={"aria-expanded":u.value===!0?"true":"false","aria-haspopup":"true","aria-controls":c,"aria-label":e.toggleAriaLabel||l.$q.lang.label[u.value===!0?"collapse":"expand"](e.label)};return(e.disable===!0||e.split===!1&&e.disableMainBtn===!0||e.disableDropdown===!0)&&(n["aria-disabled"]="true"),n}),m=r(()=>"q-btn-dropdown__arrow"+(u.value===!0&&e.noIconAnimation===!1?" rotate-180":"")+(e.split===!1?" q-btn-dropdown__arrow-container":"")),f=r(()=>H(e)),w=r(()=>z(e));v(()=>e.modelValue,n=>{a.value!==null&&a.value[n?"show":"hide"]()}),v(()=>e.split,s);function S(n){u.value=!0,t("beforeShow",n)}function q(n){t("show",n),t("update:modelValue",!0)}function C(n){u.value=!1,t("beforeHide",n)}function A(n){t("hide",n),t("update:modelValue",!1)}function D(n){t("click",n)}function y(n){j(n),s(),t("click",n)}function k(n){a.value!==null&&a.value.toggle(n)}function g(n){a.value!==null&&a.value.show(n)}function s(n){a.value!==null&&a.value.hide(n)}return Object.assign(l,{show:g,hide:s,toggle:k}),I(()=>{e.modelValue===!0&&g()}),()=>{const n=[i(M,{class:m.value,name:e.dropdownIcon||l.$q.iconSet.arrow.dropdown})];return e.disableDropdown!==!0&&n.push(i(O,{ref:a,id:c,class:e.contentClass,style:e.contentStyle,cover:e.cover,fit:!0,persistent:e.persistent,noRouteDismiss:e.noRouteDismiss,autoClose:e.autoClose,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,separateClosePopup:!0,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:S,onShow:q,onBeforeHide:C,onHide:A},o.default)),e.split===!1?i(d,{class:"q-btn-dropdown q-btn-dropdown--simple",...w.value,...b.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:D},{default:()=>P(o.label,[]).concat(n),loading:o.loading}):i(_,{class:"q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",rounded:e.rounded,square:e.square,...f.value,glossy:e.glossy,stretch:e.stretch},()=>[i(d,{class:"q-btn-dropdown--current",...w.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:y},{default:o.label,loading:o.loading}),i(d,{class:"q-btn-dropdown__arrow-container q-anchor--skip",...b.value,...f.value,disable:e.disable===!0||e.disableDropdown===!0,rounded:e.rounded,color:e.color,textColor:e.textColor,dense:e.dense,size:e.size,padding:e.padding,ripple:e.ripple},()=>n)])}}});export{U as Q};
