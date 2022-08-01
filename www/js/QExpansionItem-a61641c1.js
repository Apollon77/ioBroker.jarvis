import{s as M,bX as V,cu as w,bZ as z,cQ as J,c1 as U,cR as X,k as T,c7 as Y,Q as l,aY as b,cS as Z,ao as F,ac as t,a9 as W,bO as k,bz as p,b3 as ee,bn as ne,cg as te,bJ as q,bA as m,bu as _,ci as ae}from"./index-b364605d.js";import{Q as ie}from"./QSlideTransition-456f7f22.js";const u=M({}),oe=Object.keys(w);var ce=V({name:"QExpansionItem",props:{...w,...z,...J,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...U,"click","after-show","after-hide"],setup(e,{slots:r,emit:g}){const{proxy:{$q:v}}=W(),f=X(e,v),o=T(e.modelValue!==null?e.modelValue:e.defaultOpened),h=T(null),{hide:L,toggle:x}=Y({showing:o});let i,c;const y=l(()=>`q-expansion-item q-item-type q-expansion-item--${o.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),C=l(()=>{if(e.contentInsetLevel===void 0)return null;const n=v.lang.rtl===!0?"Right":"Left";return{["padding"+n]:e.contentInsetLevel*56+"px"}}),s=l(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),Q=l(()=>{const n={};return oe.forEach(a=>{n[a]=e[a]}),n}),O=l(()=>s.value===!0||e.expandIconToggle!==!0),B=l(()=>e.expandedIcon!==void 0&&o.value===!0?e.expandedIcon:e.expandIcon||v.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),P=l(()=>e.disable!==!0&&(s.value===!0||e.expandIconToggle===!0));b(()=>e.group,n=>{c!==void 0&&c(),n!==void 0&&I()});function j(n){s.value!==!0&&x(n),g("click",n)}function N(n){n.keyCode===13&&S(n,!0)}function S(n,a){a!==!0&&h.value!==null&&h.value.focus(),x(n),ae(n)}function R(){g("after-show")}function A(){g("after-hide")}function I(){i===void 0&&(i=Z()),o.value===!0&&(u[e.group]=i);const n=b(o,d=>{d===!0?u[e.group]=i:u[e.group]===i&&delete u[e.group]}),a=b(()=>u[e.group],(d,K)=>{K===i&&d!==void 0&&d!==i&&L()});c=()=>{n(),a(),u[e.group]===i&&delete u[e.group],c=void 0}}function D(){const n={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},a=[t(_,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&o.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:B.value})];return P.value===!0&&(Object.assign(n,{tabindex:0,onClick:S,onKeyup:N}),a.unshift(t("div",{ref:h,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),t(m,n,()=>a)}function E(){let n;return r.header!==void 0?n=[].concat(r.header()):(n=[t(m,()=>[t(q,{lines:e.labelLines},()=>e.label||""),e.caption?t(q,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&n[e.switchToggleSide===!0?"push":"unshift"](t(m,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>t(_,{name:e.icon})))),e.disable!==!0&&n[e.switchToggleSide===!0?"unshift":"push"](D()),n}function H(){const n={ref:"item",style:e.headerStyle,class:e.headerClass,dark:f.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return O.value===!0&&(n.clickable=!0,n.onClick=j,s.value===!0&&Object.assign(n,Q.value)),t(p,n,E)}function $(){return ee(t("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:C.value},te(r.default)),[[ne,o.value]])}function G(){const n=[H(),t(ie,{duration:e.duration,onShow:R,onHide:A},$)];return e.expandSeparator===!0&&n.push(t(k,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:f.value}),t(k,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:f.value})),n}return e.group!==void 0&&I(),F(()=>{c!==void 0&&c()}),()=>t("div",{class:y.value},[t("div",{class:"q-expansion-item__container relative-position"},G())])}});export{ce as Q};
