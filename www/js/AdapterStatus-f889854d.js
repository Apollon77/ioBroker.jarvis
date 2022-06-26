import{Q as w}from"./QTooltip-6275b293.js";import{_ as T,q as N,dn as R,H as D,dg as V,W as q,c as k,a2 as S,j as F,bD as H,k as a,w as t,J as b,a1 as h,L,o as u,a as v,i,t as s,g as m,M as r,Z as _,d as A,l as z,e as y,cM as G,I as J,N as I,f as O,Q as E,F as K,d7 as P,dy as W,K as Z}from"./index-5ed861c6.js";import{Q as X}from"./QBadge-9f283906.js";const Y=N({name:"ModuleAdapterStatus",props:["widget"],setup(l){const C=R.getConnection;D();const c=V(),M=q(),g=k(()=>l.widget.config),p=k(()=>({...P.joinConfig(g.value,W),list:g.value.list?g.value.list.replace(/, /g,",").toLowerCase().split(","):null,blacklist:g.value.blacklist?g.value.blacklist.replace(/, /g,",").toLowerCase().split(","):null})),n=k(()=>{let o=c.instances;if(o=o&&o.val&&!o.val.error?{...o.val}:{},p.value.list)for(const d in o){const f=d.substr(0,d.indexOf("."));!p.value.list.includes(d)&&!p.value.list.includes(f)&&delete o[d]}else if(p.value.blacklist)for(const d in o){const f=d.substr(0,d.indexOf("."));(p.value.blacklist.includes(d)||p.value.blacklist.includes(f))&&delete o[d]}return o}),e=S([]),U=S([]);C.subscribeState("admin.0.info.updatesList",({err:o,state:d})=>{if(d){const f=d&&d.val?d.val.replace("js-controller,","").replace("js-controller",""):"";e.value=f?f.split(","):[],U.value=e.value.map($=>n.value[$+".0"]?n.value[$+".0"].title+" ("+n.value[$+".0"].name+")":$).join(", ")}});const Q=S({}),j=(o,d)=>{Q.value[o]=!0,C.setAdapter(o,d).then(()=>{c.join("instances",{val:{...c.instances.val,[o]:{...c.instances.val[o],enabled:d}},ts:Date.now()})}).catch(f=>{console.error(f)}).finally(()=>{Q.value[o]=!1})},B=k(()=>M.locale.substr(0,2));return{activeRepo:k(()=>c.meta.activeRepo),adapterUpdates:e,adapterUpdateList:U,instances:n,language:B,loading:Q,moduleConfig:p,onSet:j}}}),x=y("br",null,null,-1),ee=i(", "),le={class:"UpdateAvailable"},ae={key:1},te={key:2};function oe(l,C,c,M,g,p){const n=F("icon");return H([l.widget.revision],()=>a(I,null,{default:t(()=>[b(a(L,{class:"UpdateAvailableListItem",style:{"background-color":"var(--q-accent)"}},{default:t(()=>[l.adapterUpdateList.length>60?(u(),v(w,{key:0},{default:t(()=>[i(s(l.adapterUpdateList),1)]),_:1})):m("",!0),a(r,{avatar:""},{default:t(()=>[a(n,{name:"refresh"})]),_:1}),a(r,null,{default:t(()=>[a(_,null,{default:t(()=>[i(s(l.adapterUpdateList.length>60?l.adapterUpdateList.substr(0,58)+"...":l.adapterUpdateList),1)]),_:1}),a(_,{caption:"",style:{color:"#fff"}},{default:t(()=>[i(s(l.adapterUpdates.length)+" "+s(l.$t("Updates available")),1),x,i(" "+s(l.$t("Repository")+": "+l.activeRepo),1)]),_:1})]),_:1}),a(r,{side:""},{default:t(()=>[a(X,{rounded:"",color:"white",style:{color:"var(--q-accent)"},label:l.adapterUpdates.length},null,8,["label"])]),_:1})]),_:1},512),[[h,l.moduleConfig.updates&&l.adapterUpdates.length>0]]),(u(!0),A(K,null,z(l.instances,e=>(u(),v(L,{key:e.id,clickable:l.moduleConfig.switch&&e.mode!=="none"&&e.mode!=="once"&&l.loading[e.id]!==!0,"v-ripple":l.moduleConfig.switch&&e.mode!=="none"&&e.mode!=="once"&&l.loading[e.id]!==!0},{default:t(()=>[a(r,{avatar:""},{default:t(()=>[a(n,{name:"img:"+e.extIcon},null,8,["name"])]),_:2},1024),a(r,null,{default:t(()=>[a(_,null,{default:t(()=>[i(s(e.titleLang&&(e.titleLang[l.language]||e.titleLang.en||e.titleLang.de)||e.titleLang||e.title),1)]),_:2},1024),a(_,{caption:""},{default:t(()=>[y("span",null,s(e.id)+", v"+s(e.version),1),b(y("span",null,[ee,y("span",le,s(l.$t("Update available")+" v"+e.update),1)],512),[[h,e.update]]),b(y("span",null,", "+s(l.$t("Compact Mode"))+" "+s(l.$t("on"))+" ("+s(l.$t("Group")+" "+e.compactGroup)+")",513),[[h,e.runAsCompactMode]])]),_:2},1024)]),_:2},1024),e.mode!=="none"&&e.mode!=="once"?b((u(),v(r,{key:0,side:""},{default:t(()=>[l.loading[e.id]===!0?(u(),v(G,{key:0,color:"primary",size:"21px"})):m("",!0),l.loading[e.id]!==!0&&e.alive!==!1&&e.connectedToHost!==!1&&e.connectedToInstance!==!1?(u(),A("div",ae,[a(n,{color:"positive",name:"mdi-check-circle"}),a(w,null,{default:t(()=>[i(s(l.$t("Adapter")+" "+l.$t("alive")),1)]),_:1})])):m("",!0),l.loading[e.id]!==!0&&e.alive===!1||e.connectedToHost===!1||e.connectedToInstance===!1?(u(),A("div",te,[a(n,{color:"warning",name:"mdi-alert"}),a(w,null,{default:t(()=>[i(s(l.$t("Adapter")+" "+l.$t("not alive")),1)]),_:1})])):m("",!0)]),_:2},1536)),[[h,e.enabled===!0]]):m("",!0),e.mode!=="none"&&e.mode!=="once"?b((u(),v(r,{key:1,side:""},{default:t(()=>[a(n,{name:"mdi-close"}),a(w,null,{default:t(()=>[i(s(l.$t("Adapter")+" "+l.$t("disabled")),1)]),_:1})]),_:2},1536)),[[h,e.enabled===!1]]):m("",!0),l.moduleConfig.switch&&e.mode!=="none"&&e.mode!=="once"&&l.loading[e.id]!==!0?(u(),v(J,{key:2,ref_for:!0,ref:"menu","touch-position":""},{default:t(()=>[a(I,{style:{"min-width":"120px","man-width":"150px"},class:"body"},{default:t(()=>[a(L,{class:O("text-white bg-"+(e.enabled?"positive":"negative"))},{default:t(()=>[a(r,{avatar:""}),a(r,null,{default:t(()=>[i(s(l.$t(e.enabled?"Currently running":"Currently stopped")),1)]),_:2},1024),a(r,{side:""})]),_:2},1032,["class"]),b((u(),v(L,{clickable:"",onClick:U=>l.onSet(e.id,!e.enabled)},{default:t(()=>[a(r,{avatar:""},{default:t(()=>[a(E,{color:e.enabled?"negative":"positive",name:e.enabled?"mdi-pause":"mdi-play"},null,8,["color","name"])]),_:2},1024),a(r,null,{default:t(()=>[i(s(l.$t(e.enabled?"Stop":"Start")+" "+l.$t("Adapter")),1)]),_:2},1024)]),_:2},1032,["onClick"])),[[Z]])]),_:2},1024)]),_:2},1536)):m("",!0)]),_:2},1032,["clickable","v-ripple"]))),128))]),_:1}),C,0)}var ne=T(Y,[["render",oe]]);export{ne as default};
