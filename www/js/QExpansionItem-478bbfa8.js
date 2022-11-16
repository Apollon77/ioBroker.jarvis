import{s as Y,bx as z,cw as Q,c1 as F,cW as J,c5 as Z,cX as p,k as w,cS as L,cb as ee,Q as o,aY as m,ao as te,ac as n,a9 as ne,bU as _,bG as ae,b3 as ie,bn as oe,ck as le,bO as y,bH as x,bu as C,cm as ue}from"./index-10b56b54.js";import{Q as ce}from"./QSlideTransition-6767eae7.js";const u=Y({}),de=Object.keys(Q);var ge=z({name:"QExpansionItem",props:{...Q,...F,...J,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...Z,"click","afterShow","afterHide"],setup(e,{slots:g,emit:v}){const{proxy:{$q:d}}=ne(),b=p(e,d),a=w(e.modelValue!==null?e.modelValue:e.defaultOpened),f=w(null),S=L(),{show:A,hide:I,toggle:h}=ee({showing:a});let l,c;const O=o(()=>`q-expansion-item q-item-type q-expansion-item--${a.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),B=o(()=>{if(e.contentInsetLevel===void 0)return null;const t=d.lang.rtl===!0?"Right":"Left";return{["padding"+t]:e.contentInsetLevel*56+"px"}}),r=o(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),H=o(()=>{const t={};return de.forEach(i=>{t[i]=e[i]}),t}),P=o(()=>r.value===!0||e.expandIconToggle!==!0),j=o(()=>e.expandedIcon!==void 0&&a.value===!0?e.expandedIcon:e.expandIcon||d.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),E=o(()=>e.disable!==!0&&(r.value===!0||e.expandIconToggle===!0)),N=o(()=>({expanded:a.value===!0,detailsId:e.targetUid,toggle:h,show:A,hide:I})),T=o(()=>{const t=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:d.lang.label[a.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":a.value===!0?"true":"false","aria-controls":S,"aria-label":t}});m(()=>e.group,t=>{c!==void 0&&c(),t!==void 0&&q()});function R(t){r.value!==!0&&h(t),v("click",t)}function D(t){t.keyCode===13&&k(t,!0)}function k(t,i){i!==!0&&f.value!==null&&f.value.focus(),h(t),ue(t)}function G(){v("afterShow")}function U(){v("afterHide")}function q(){l===void 0&&(l=L()),a.value===!0&&(u[e.group]=l);const t=m(a,s=>{s===!0?u[e.group]=l:u[e.group]===l&&delete u[e.group]}),i=m(()=>u[e.group],(s,X)=>{X===l&&s!==void 0&&s!==l&&I()});c=()=>{t(),i(),u[e.group]===l&&delete u[e.group],c=void 0}}function $(){const t={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},i=[n(C,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&a.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:j.value})];return E.value===!0&&(Object.assign(t,{tabindex:0,...T.value,onClick:k,onKeyup:D}),i.unshift(n("div",{ref:f,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),n(x,t,()=>i)}function K(){let t;return g.header!==void 0?t=[].concat(g.header(N.value)):(t=[n(x,()=>[n(y,{lines:e.labelLines},()=>e.label||""),e.caption?n(y,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&t[e.switchToggleSide===!0?"push":"unshift"](n(x,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>n(C,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&t[e.switchToggleSide===!0?"unshift":"push"]($()),t}function M(){const t={ref:"item",style:e.headerStyle,class:e.headerClass,dark:b.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return P.value===!0&&(t.clickable=!0,t.onClick=R,Object.assign(t,r.value===!0?H.value:T.value)),n(ae,t,K)}function V(){return ie(n("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:B.value,id:S},le(g.default)),[[oe,a.value]])}function W(){const t=[M(),n(ce,{duration:e.duration,onShow:G,onHide:U},V)];return e.expandSeparator===!0&&t.push(n(_,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:b.value}),n(_,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:b.value})),t}return e.group!==void 0&&q(),te(()=>{c!==void 0&&c()}),()=>n("div",{class:O.value},[n("div",{class:"q-expansion-item__container relative-position"},W())])}});export{ge as Q};
