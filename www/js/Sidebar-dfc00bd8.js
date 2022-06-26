import{_ as O,q as Z,H as G,ci as X,dd as Y,c as i,a2 as M,y as _,cF as x,z as ee,A as ae,j as se,o,a as l,w as t,k as r,ab as te,O as re,g as n,e as E,d as k,l as oe,f as b,a6 as N,J as c,a1 as w,Z as j,n as y,i as h,t as S,L as Q,M as p,F as de,N as q,cK as D,cS as ie}from"./index-5ed861c6.js";import{Q as ne}from"./QToolbar-3e5b5a7e.js";import{Q as le}from"./QHeader-1e5012b6.js";import{Q as ue}from"./QDrawer-00958c49.js";const ve=Z({name:"Sidebar",setup(){const e=G(),d=X(),I=Y.isPro(),H=d.platform.is.mobile,C=d.screen.sizes.md,m=i(()=>I?e.layout:e.layout.slice(0,1)),u=i(()=>e.drawerMiniMode),a=M(!0),f=M(m.value),R=s=>{const v=f.value.findIndex(P=>P.id===s.id);f.value[v]={...s,revision:ie().substr(0,5)}};_(()=>{f.value=m.value;for(const s of m.value)s.config={icon:s.icon,title:s.title},x.getBindings(s,R)});const z=s=>e.set("drawerSidebar",s),T=i({get(){return e.drawerSidebar},set(s){z(s)}}),A=i(()=>e.settings),F=i(()=>{var s;return(s=e.getSelectedPage)==null?void 0:s.id}),J=s=>{var P,V;const v=(V=(P=s.tabs)==null?void 0:P[0])==null?void 0:V.id;if(!v)return console.warn("Sidebar","Page "+s.id+" has no tabs!",s),!1;e.set({selectedTabId:v})},U=i(()=>{var s,v;return((v=(s=e.getSelectedPage)==null?void 0:s.tabs)==null?void 0:v.count)||0}),W=i(()=>u.value===!0?!a.value:!0),B=i(()=>u.value===!0?U.value<=1:!0),$=M(),K=i(()=>$.value&&$.value.$el.clientHeight||0),L=M(window.innerHeight-(B.value?40:0)),g=()=>{L.value=window.innerHeight-(B.value?40:0)};return ee(()=>{window.addEventListener("orientationchange",g),window.addEventListener("resize",g)}),ae(()=>{window.removeEventListener("orientationchange",g),window.removeEventListener("resize",g)}),{elementSidebarBottom:$,elementSidebarBottomHeight:K,isPro:I,isSmartphone:H,maxMobileSize:C,windowHeight:L,onResize:g,itemsWithResolvedBindings:f,drawerMiniMode:u,drawerMiniState:a,sidebar:T,toggleSidebar:z,setPage:J,selectedPageId:F,expanded:W,header:B,settings:A}}}),ce=h("jarvis"),be={class:"headerInvisible"};function ye(e,d,I,H,C,m){const u=se("icon");return e.settings.drawerShowMenuButton!==!1?(o(),l(ue,{key:0,ref:"drawer",modelValue:e.sidebar,"onUpdate:modelValue":d[1]||(d[1]=a=>e.sidebar=a),mini:e.drawerMiniMode&&e.drawerMiniState,onMouseover:d[2]||(d[2]=a=>e.drawerMiniState=!1),onMouseout:d[3]||(d[3]=a=>e.drawerMiniState=!0),"mini-to-overlay":"",bordered:"",behavior:e.drawerMiniMode?"default":"mobile",overlay:!e.drawerMiniMode,"show-if-above":e.drawerMiniMode,breakpoint:e.maxMobileSize,class:b(["jarvis-sidebar-container",{"jarvis-sidebar-minimode":e.drawerMiniMode===!0,"jarvis-tabs-bottom":e.settings.tabsBottom===!0,"jarvis-header-hidden":e.settings.headerVisible!==!0}]),"content-class":"jarvis-sidebar"},{default:t(()=>[e.drawerMiniMode!==!0?(o(),l(le,{key:0,style:{position:"relative"}},{default:t(()=>[r(ne,null,{default:t(()=>[r(te),r(re,{flat:"",dense:"",round:"",icon:"mdi-chevron-left","aria-label":"Menu",onClick:d[0]||(d[0]=a=>e.toggleSidebar(!1))})]),_:1})]),_:1})):n("",!0),E("div",{style:y({height:e.windowHeight-44+"px"}),class:"q-mt-xs"},[r(q,{dense:"",class:"jarvis-sidebar-items",style:y({"overflow-x":"hidden","overflow-y":e.expanded?"auto":"hidden",maxHeight:e.windowHeight-(e.header?40:0)-e.elementSidebarBottomHeight+"px"})},{default:t(()=>[(o(!0),k(de,null,oe(e.itemsWithResolvedBindings,a=>(o(),k("div",{key:a.id,class:b(["jarvis-sidebar-item",["jarvis-sidebar-item-"+a.type,"jarvis-"+a.type,"jarvis-"+a.type+"-"+a.id,a.tabs&&a.tabs[0]&&a.tabs[0].id?"jarvis-route-tab-"+(a.tabs&&a.tabs[0]&&a.tabs[0].id):""]])},[a.type==="divider"?(o(),l(N,{key:0,spaced:""})):n("",!0),a.type==="header"?c((o(),l(j,{key:1,header:"",style:y(e.isPro&&a.id===e.selectedPageId&&a.bodySelectedStyle||e.isPro&&a.bodyStyle||{})},{default:t(()=>[h(S(a.title),1)]),_:2},1032,["style"])),[[w,e.expanded]]):n("",!0),a.type==="header"?c((o(),k("div",{key:2,class:"headerInvisible",style:y(e.isPro&&a.id===e.selectedPageId&&a.bodySelectedStyle||e.isPro&&a.bodyStyle||{})},"\xA0",4)),[[w,!e.expanded]]):n("",!0),!a.type||a.type==="page"?(o(),l(Q,{key:3,to:{params:{tabId:a.tabs&&a.tabs[0]&&a.tabs[0].id}},clickable:"",onClick:f=>e.setPage(a),class:b(["full-width",{selected:a.id===e.selectedPageId}]),style:y(e.isPro&&a.id===e.selectedPageId&&a.bodySelectedStyle||e.isPro&&a.bodyStyle||{"background-color":"var(--q-primary)",color:"#fff"}),"active-class":"selected"},{default:t(()=>[r(p,{avatar:"",center:"",class:b({selected:a.id===e.selectedPageId})},{default:t(()=>[r(u,{name:a.icon,style:y(e.isPro&&a.id===e.selectedPageId&&a.iconSelectedStyle||e.isPro&&a.iconStyle||(a.id===e.selectedPageId?"white":"primary"))},null,8,["name","style"])]),_:2},1032,["class"]),r(p,null,{default:t(()=>[r(j,{class:b({selectedText:a.id===e.selectedPageId})},{default:t(()=>[h(S(a.title),1)]),_:2},1032,["class"])]),_:2},1024)]),_:2},1032,["to","onClick","style","class"])):n("",!0),!a.type||a.type==="page"?(o(),k("div",{key:4,class:b(["spacer",{selected:a.id===e.selectedPageId}])},null,2)):n("",!0)],2))),128))]),_:1},8,["style"]),e.isSmartphone?n("",!0):c((o(),l(q,{key:0,ref:"elementSidebarBottom",class:"sidebarBottom"},{default:t(()=>[r(N,{spaced:""}),c(r(j,{header:""},{default:t(()=>[ce]),_:1},512),[[w,e.expanded]]),c(E("div",be,"\xA0",512),[[w,!e.expanded]]),e.isPro?n("",!0):c((o(),l(Q,{key:0,clickable:"",to:{name:"AccountPage",params:e.$route.params},exact:""},{default:t(()=>[r(p,{avatar:""},{default:t(()=>[r(u,{name:"mdi-heart",color:"primary"})]),_:1}),r(p,null,{default:t(()=>[h(S(e.$t("Pro Account")),1)]),_:1})]),_:1},8,["to"])),[[D]]),c((o(),l(Q,{clickable:"",to:{name:"DevicesPage",params:e.$route.params},exact:"",id:"SettingsButton"},{default:t(()=>[r(p,{avatar:""},{default:t(()=>[r(u,{name:"mdi-cog",color:"primary"})]),_:1}),r(p,null,{default:t(()=>[h(S(e.$t("Configuration"))+" & "+S(e.$t("Help")),1)]),_:1})]),_:1},8,["to"])),[[D]])]),_:1},512)),[[w,e.settings.drawerShowSettings!==!1]])],4)]),_:1},8,["modelValue","mini","behavior","overlay","show-if-above","breakpoint","class"])):n("",!0)}var Se=O(ve,[["render",ye]]);export{Se as default};
