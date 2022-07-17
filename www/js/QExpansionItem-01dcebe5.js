import{ay as G,bX as V,cv as w,bZ as U,cR as X,c1 as Z,cS as z,a4 as T,c7 as F,c as l,y as m,cT as J,b8 as W,h as t,x as Y,a8 as q,M as p,K as ee,a2 as ne,cg as te,$ as _,N as b,Q as k,ci as ae}from"./index-52a12785.js";import{Q as ie}from"./QSlideTransition-5f3ea158.js";const u=G({}),oe=Object.keys(w);var ce=V({name:"QExpansionItem",props:{...w,...U,...X,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...Z,"click","after-show","after-hide"],setup(e,{slots:r,emit:g}){const{proxy:{$q:v}}=Y(),f=z(e,v),o=T(e.modelValue!==null?e.modelValue:e.defaultOpened),h=T(null),{hide:y,toggle:x}=F({showing:o});let i,c;const L=l(()=>`q-expansion-item q-item-type q-expansion-item--${o.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),C=l(()=>{if(e.contentInsetLevel===void 0)return null;const n=v.lang.rtl===!0?"Right":"Left";return{["padding"+n]:e.contentInsetLevel*56+"px"}}),s=l(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),Q=l(()=>{const n={};return oe.forEach(a=>{n[a]=e[a]}),n}),O=l(()=>s.value===!0||e.expandIconToggle!==!0),B=l(()=>e.expandedIcon!==void 0&&o.value===!0?e.expandedIcon:e.expandIcon||v.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),N=l(()=>e.disable!==!0&&(s.value===!0||e.expandIconToggle===!0));m(()=>e.group,n=>{c!==void 0&&c(),n!==void 0&&I()});function P(n){s.value!==!0&&x(n),g("click",n)}function j(n){n.keyCode===13&&S(n,!0)}function S(n,a){a!==!0&&h.value!==null&&h.value.focus(),x(n),ae(n)}function R(){g("after-show")}function $(){g("after-hide")}function I(){i===void 0&&(i=J()),o.value===!0&&(u[e.group]=i);const n=m(o,d=>{d===!0?u[e.group]=i:u[e.group]===i&&delete u[e.group]}),a=m(()=>u[e.group],(d,M)=>{M===i&&d!==void 0&&d!==i&&y()});c=()=>{n(),a(),u[e.group]===i&&delete u[e.group],c=void 0}}function A(){const n={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},a=[t(k,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&o.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:B.value})];return N.value===!0&&(Object.assign(n,{tabindex:0,onClick:S,onKeyup:j}),a.unshift(t("div",{ref:h,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),t(b,n,()=>a)}function D(){let n;return r.header!==void 0?n=[].concat(r.header()):(n=[t(b,()=>[t(_,{lines:e.labelLines},()=>e.label||""),e.caption?t(_,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&n[e.switchToggleSide===!0?"push":"unshift"](t(b,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>t(k,{name:e.icon})))),e.disable!==!0&&n[e.switchToggleSide===!0?"unshift":"push"](A()),n}function E(){const n={ref:"item",style:e.headerStyle,class:e.headerClass,dark:f.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return O.value===!0&&(n.clickable=!0,n.onClick=P,s.value===!0&&Object.assign(n,Q.value)),t(p,n,D)}function H(){return ee(t("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:C.value},te(r.default)),[[ne,o.value]])}function K(){const n=[E(),t(ie,{duration:e.duration,onShow:R,onHide:$},H)];return e.expandSeparator===!0&&n.push(t(q,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:f.value}),t(q,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:f.value})),n}return e.group!==void 0&&I(),W(()=>{c!==void 0&&c()}),()=>t("div",{class:L.value},[t("div",{class:"q-expansion-item__container relative-position"},K())])}});export{ce as Q};
