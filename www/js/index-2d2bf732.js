import{Q as v}from"./QToolbarTitle-b2122d67.js";import{Q as C}from"./QToolbar-a55f128f.js";import{bt as k,a4 as S,bw as b,cn as V,k as f,Q as $,aG as u,ay as n,W as d,X as _,a2 as t,b1 as s,a1 as y,D as g,U as E,I as Q,aE as w,V as B,C as H}from"./index-42c3e059.js";const N=S({name:"ScriptsPage",setup(){const e=b(),i=V(),h=({id:r,value:c})=>{const o=l(c);p.value||i.set({scripts:o})},l=r=>r,p=f(),m=f(l(i.scripts||"")),a=$(()=>e.pageHeight);return{errorMessages:p,pageHeight:a,script:m,onChange:h}}}),T={class:"full-height"},D={class:"row no-wrap"};function M(e,i,h,l,p,m){const a=u("alert"),r=u("inputs"),c=u("paper");return n(),d("div",T,[_("div",D,[t(C,{class:"paper",style:{"min-height":"56px"}},{default:s(()=>[t(v,{shrink:""},{default:s(()=>[y(g(e.$t("Scripts")),1)]),_:1})]),_:1})]),t(a,{title:"Remark"},{default:s(()=>[y(g(e.$t("Configuration#scripts#remark")),1)]),_:1}),t(c,{style:H({height:e.pageHeight-66-16+"px"})},{default:s(()=>[e.errorMessages?(n(),E(a,{key:0,title:"Script Validation Errors"},{default:s(()=>[_("ul",null,[(n(!0),d(Q,null,w(e.errorMessages,o=>(n(),d("li",{key:o},g(o),1))),128))])]),_:1})):B("",!0),t(r,{type:"textarea",label:"Scripts Editor",onOnChange:e.onChange,value:e.script,"input-style":"height: "+(e.pageHeight-66-16-20)+"px","full-height":"",borderless:""},null,8,["onOnChange","value","input-style"])]),_:1},8,["style"])])}var x=k(N,[["render",M]]);export{x as default};
