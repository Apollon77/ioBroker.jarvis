import{de as ie,q as J,I as A,c as m,dj as Je,dk as F,_ as G,j as R,o as h,a as k,w,k as u,a7 as ee,e as W,t as Y,ad as je,P as H,a8 as te,a9 as Ee,a6 as he,f as E,aa as Ge,K as L,a2 as q,b as ye,cj as ae,dl as Ue,a4 as D,z as ge,cH as fe,cT as Ke,g as P,d as j,l as ne,n as N,F as Q,O as Ye,M as De,N as se,i as pe,cr as _e,y as Xe,dm as Ze,co as Ie,aC as Me,r as xe,da as et,dn as tt,$ as nt,cE as ot,ag as it,dd as Pe,dc as Re,cp as Ae,ct as st,dp as rt,d5 as at,dq as me,A as lt,d0 as ct}from"./index-52a12785.js";import dt from"./StateList-8c28963d.js";import{b as ut,c as gt,Q as ft,a as pt}from"./QFooter-03dfa038.js";import{Q as mt}from"./QHeader-f716df32.js";import{Q as vt}from"./QBtnDropdown-a2815741.js";import{Q as ht}from"./QBadge-15c9ee09.js";import{m as wt}from"./marked.esm-5f440e4b.js";import"./StateListGroup-52a2a8b2.js";import"./StateListItem-1a820acf.js";var bt=(()=>`@media (max-width: 1024px){.container.desktop{padding:0;grid-template-rows:none!important}.container.desktop .widget-scaler{transform:none!important}}@media (min-width: 600px) and (max-width: 1024px){.container.desktop>.box:nth-child(odd){grid-area:auto/auto/auto/auto!important;grid-column:1/span 6!important}.container.desktop>.box:nth-child(even){grid-area:auto/auto/auto/auto!important;grid-column:7/span 6!important}}@media (min-width: 0) and (max-width: 600px){.container.desktop>.box{grid-area:auto/auto/auto/auto!important;grid-column:1/span 12!important}}
`)();function ue(e,t,n={}){if(n.id=n.id||"custom",n.onlyPro=n.onlyPro!==void 0?n.onlyPro:!0,n.onlyPro&&!ie.isPro()&&t)ie.warn("Custom Styles / Scripts are only available to Pro!");else if(e&&t&&(!n.onlyPro||n.onlyPro&&ie.isPro())){let o=document.getElementById(n.id);o?o.remove():(o=document.createElement(e),o.id=n.id);for(const a in n)o[a]=n[a];return o.innerHTML=`// $

`+t,document.getElementsByTagName("head")[0].appendChild(o),o}return null}const yt=J({name:"DeviceDetailsPopup",components:{StateList:dt},setup(){const e=A(),t=m(()=>e.selectedDevice),n=m(()=>{const s=[];for(const a in t.value.states){const r=t.value.states[a];if(r.hide===!0||r.state===void 0&&r.action===void 0)continue;const{label:i,...l}=r;s.push({id:Je(t.value.id+":"+a,F.get("UUID")),type:"device",deviceId:t.value.id,bodyStateKey:a,primaryStateKey:a,...l,deviceStateDetails:!0})}return{items:s}});return{onClose:()=>e.set("selectedDeviceId",null),device:t,widget:n}}}),St={class:"text-h6"};function kt(e,t,n,o,s,a){const r=R("state-list");return h(),k(Ge,{"model-value":!!e.device.id,onHide:e.onClose,class:E({"jarvis-popup-container":!0,["jarvis-device-"+e.device.id]:!0})},{default:w(()=>[u(he,{class:"column jarvis-popup",style:{width:"800px","max-width":"95vw","flex-wrap":"nowrap"}},{default:w(()=>[u(ee,{class:"row items-center"},{default:w(()=>[W("div",St,Y(e.device.label||e.device.name),1),u(je),u(H,{flat:"",round:"",color:"grey",icon:"close",onClick:e.onClose},null,8,["onClick"])]),_:1}),u(te),u(ee,{class:"col q-pa-none scroll body",style:{"overflow-x":"hidden"}},{default:w(()=>[u(r,{openDeviceDetails:!1,widget:e.widget,isPopup:""},null,8,["widget"])]),_:1}),u(te),u(Ee,{align:"right"},{default:w(()=>[u(H,{flat:"",label:e.$t("Close"),onClick:e.onClose,color:"primary"},null,8,["label","onClick"])]),_:1})]),_:1})]),_:1},8,["model-value","onHide","class"])}var Ct=G(yt,[["render",kt]]);const Tt=J({name:"Container",props:["tabsCount"],setup(e){const t=A(),n=m(()=>t.drawerMiniMode);return{settings:m(()=>t.settings),drawerMiniMode:n,onHeaderReveals:a=>t.set("headerVisible",a)}}});function $t(e,t,n,o,s,a){return e.settings.tabsBottom!==!0?L((h(),k(mt,{key:0,class:"jarvis-header text-white",bordered:"",onReveal:e.onHeaderReveals,reveal:e.settings.tabsShow==="hide"},{default:w(()=>[ye(e.$slots,"default")]),_:3},8,["onReveal","reveal"])),[[q,e.drawerMiniMode!==!0||e.drawerMiniMode===!0&&e.tabsCount>1]]):L((h(),k(ut,{key:1,class:"jarvis-footer text-white",bordered:"",onReveal:e.onHeaderReveals,reveal:e.settings.tabsShow==="hide"},{default:w(()=>[ye(e.$slots,"default")]),_:3},8,["onReveal","reveal"])),[[q,e.drawerMiniMode!==!0||e.drawerMiniMode===!0&&e.tabsCount>1]])}var zt=G(Tt,[["render",$t]]);const jt=J({name:"Tabs",props:["page","tabs"],setup(e){const t=ae(),n=A(),o=Ue(),s=ie.isPro(),a=D(e.tabs),r=p=>{const C=a.value.findIndex(z=>z.id===p.id);a.value[C]={...p,revision:Ke().substr(0,5)}};ge(()=>{a.value=e.tabs;for(const p of e.tabs)p.config={icon:p.icon,title:p.title},fe.getBindings(p,r)});const i=m({get(){return n.getSelectedTabId},set(p){p&&n.set({selectedTabId:p})}}),l=D(!1),c=()=>{l.value=!t.platform.is.mobile},b=m(()=>n.drawerMiniMode),v=m(()=>n.settings),f=p=>n.set("drawerSidebar",p),y=m(()=>o.getUnread.length);return{tabsWithResolvedBindings:a,tabId:i,tabsHiddenDropdown:l,tabsHiddenShow:c,toggleNotifications:p=>n.set("drawerNotifications",p),toggleSidebar:f,notificationsUnread:y,drawerMiniMode:b,settings:v,isPro:s}}}),Et={class:"row nowrap",style:{margin:"2px 0"}},Dt={key:0,class:"q-tab__label"},It={class:"q-tab__label"};function Mt(e,t,n,o,s,a){const r=R("icon");return h(),k(_e,{modelValue:e.tabId,"onUpdate:modelValue":t[3]||(t[3]=i=>e.tabId=i),"inline-label":"",dense:"",align:"left",style:N({"padding-left":(e.drawerMiniMode!==!0?0:5)+"px","padding-right":"48px"}),id:"tabBar",class:E({"jarvis-tabs-container":!0,"jarvis-tabs-bottom":e.settings.tabsBottom===!0}),"content-class":"jarvis-tabs","indicator-color":"white"},{default:w(()=>[e.settings.drawerShowMenuButton!==!1?(h(),k(H,{key:0,flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:t[0]||(t[0]=i=>e.toggleSidebar(!0)),class:E(["q-ml-sm",{"lt-md":e.drawerMiniMode===!0}])},null,8,["class"])):P("",!0),W("div",Et,[(h(!0),j(Q,null,ne(e.tabsWithResolvedBindings,i=>(h(),k(gt,{key:i.revision,name:i.id,to:{params:{tabId:i.id}},style:N(e.isPro&&i.id===e.tabId&&i.bodySelectedStyle||e.isPro&&i.bodyStyle||{}),class:E(["jarvis-tab","jarvis-tab-"+i.id]),"content-class":e.settings.tabsDense?"dense":"normal"},{default:w(()=>[L(u(r,{name:i.icon,size:"xs",class:"tabIcon",style:N({margin:e.settings.tabsDense?"4px 4px 0 0":"0",...e.isPro&&i.id===e.tabId&&i.iconSelectedStyle||e.isPro&&i.iconStyle||{}})},null,8,["name","style"]),[[q,i.icon]]),e.page.hideLabels!==!0?(h(),j("div",Dt,Y(i.title),1)):P("",!0)]),_:2},1032,["name","to","style","class","content-class"]))),128)),L(u(vt,{modelValue:e.tabsHiddenDropdown,"onUpdate:modelValue":t[1]||(t[1]=i=>e.tabsHiddenDropdown=i),onMouseover:e.tabsHiddenShow,"auto-close":"",stretch:"",flat:""},{label:w(()=>[W("div",{class:E(e.settings.tabsDense?"dense":"normal")},[u(r,{name:"mdi-tab-unselected",size:"xs",class:"tabIcon",style:N({margin:e.settings.tabsDense?"1px 5px 0 0":"-1px 0 1px 0"})},null,8,["style"]),W("div",It,Y(e.$t("More")+"..."),1)],2)]),default:w(()=>[u(Ye,null,{default:w(()=>[(h(!0),j(Q,null,ne(e.hiddenTabs,i=>(h(),k(De,{key:i.id,clickable:"",onClick:l=>e.tabId=i.id,class:E({"q-tab--active":i.id===e.tabId})},{default:w(()=>[u(se,{avatar:""},{default:w(()=>[u(r,{name:i.icon},null,8,["name"])]),_:2},1024),u(se,null,{default:w(()=>[pe(Y(i.title),1)]),_:2},1024)]),_:2},1032,["onClick","class"]))),128))]),_:1})]),_:1},8,["modelValue","onMouseover"]),[[q,e.settings.enableTabsDropdown]])]),L(u(H,{flat:"",dense:"",round:"",icon:"mdi-bell","aria-label":"Notifications",onClick:t[2]||(t[2]=i=>e.toggleNotifications(!0)),class:"q-mr-sm notification-drawer-button"},{default:w(()=>[u(ht,{color:"secondary",align:"middle",floating:""},{default:w(()=>[pe(Y(e.notificationsUnread),1)]),_:1})]),_:1},512),[[q,e.isPro]])]),_:1},8,["modelValue","style","class"])}var Pt=G(jt,[["render",Mt]]);function Rt(e,t){const n=m(()=>typeof e.value!="object"?D({fullscreenSize:e.value}):e),o=D(),s=D(!1),a=()=>{s.value=!0;const l=o.value;l.classList.add("isFullscreen"),l.style.overflow="auto";const c=l.querySelector(".jarvis-widget-scaler");c.style.height="auto"},r=()=>{s.value=!1;const l=o.value;l.classList.remove("isFullscreen"),l.style.overflow="initial";const c=l.querySelector(".jarvis-widget-scaler");c.style.height=n.value.fullscreenSize+"px",document.exitFullscreen?document.exitFullscreen().catch(b=>{}):document.mozCancelFullScreen?document.mozCancelFullScreen().catch(b=>{}):document.webkitCancelFullScreen&&document.webkitCancelFullScreen().catch(b=>{})};return Xe(()=>o.value,()=>{o.value.addEventListener("fullscreenchange",()=>{document.fullscreenElement===null&&r()})}),{fullscreenElement:o,fullscreenActive:s,fullscreenToggle:l=>{l=typeof l=="boolean"?l:!s.value,Ze.toggle(o.value).then(()=>{l===!1?r():a()}).catch(c=>{console.error(c)})}}}const At=J({name:"Widget",props:["page","tab","widgets","config","layout","containerSize"],setup(e){const t=ae(),n=Ie(),o=A(),s=Me(e,"config")||{};D();const a=D(),r=m(()=>{const T=s.value.alignmentHorizontal||"center",de=s.value.alignmentVertical||"top",Z=s.value.scaleToFitContents!==void 0?s.value.scaleToFitContents:!0;return{h:T,v:de,fit:Z}}),i=m(()=>r.value.v!=="middle"?{}:{transform:"translateY(-50%)",position:"relative",top:"50%"}),l=xe({width:0,height:0}),c=m(()=>a.value&&a.value.$el.offsetHeight||0),b=m(()=>e.containerSize.height-c.value),v=m(()=>r.value.fit===!1||et.includes(C.value.module)?{x:1,y:1}:{x:l?Math.min(1,e.containerSize.width/l.width):1,y:l?Math.min(1,b.value/l.height):1}),f=m(()=>{const T=[0,0];return T[0]=r.value.h==="center"?"50%":r.value.h==="right"?"100%":r.value.h,T[1]=r.value.v==="middle"?"50%":r.value.v==="bottom"?"100%":r.value.v,T}),y=m(()=>({width:r.value.h!=="fill-width"?"100%":Math.floor(1/(v.value.y<v.value.x?v.value.y:v.value.x)*100)+"% !important",height:b.value-1+"px"})),d=m(()=>K.value===!0?1:v.value.y<v.value.x?v.value.y:v.value.x),p=m(()=>{const T={"-webkit-transform":"scale("+d.value+")","-webkit-transform-origin":f.value.join(" "),transform:"scale("+d.value+")","transform-origin":f.value.join(" ")};return r.value.v==="middle"&&(T.margin="auto"),t.screen.lt.lg||e.layout==="desktop"&&t.platform.is.mobile?{}:T}),C=m(()=>{const T=e.widgets[0];return T&&o.widgets[T]||{}}),z=()=>{C.value.link&&(C.value.link.indexOf("http")>-1||C.value.link.indexOf("www")>-1)?window.open((C.value.link.indexOf("http")===-1?"http://":"")+C.value.link,"_blank"):C.value.link&&n.push({params:{tabId:C.value.link}}).catch(T=>console.warn(T))};let $=null;const g=T=>{$&&clearTimeout($),$=setTimeout(()=>{Object.assign(l,T)},50)},{fullscreenElement:S,fullscreenActive:K,fullscreenToggle:I}=Rt(b),M=D(s.value.allowFullscreen||!1);return{alignment:r,verticalAlignment:i,scaleSizes:y,scaleStyle:p,size:l,widget:C,widgetTitle:a,widgetTitleSize:c,jump:z,onResize:g,fullscreenEnabled:M,fullscreenElement:S,fullscreenActive:K,fullscreenToggle:I}}});function Ht(e,t,n,o,s,a){const r=R("icon");return h(),j("div",{ref:"fullscreenElement",onDblclick:t[1]||(t[1]=i=>e.fullscreenEnabled&&e.fullscreenToggle()),class:E(["jarvis-widget-container bgcolor",{tile:e.tab.widgetEdges,paper:!e.tab.widgetEdges,fullscreen:e.fullscreenEnabled}])},[e.fullscreenEnabled?(h(),j("div",{key:0,class:E(["fullscreener",{close:e.fullscreenActive}]),onClick:t[0]||(t[0]=(...i)=>e.fullscreenToggle&&e.fullscreenToggle(...i))},null,2)):P("",!0),u(he,{flat:"",class:E(["jarvis-widget full-width full-height",{["jarvis-widget-module-"+e.widget.module]:!0,["jarvis-widget-"+e.widget.id]:!0}])},{default:w(()=>[e.widget.hideTitle!==!0&&(e.widget.icon||e.widget.title)?(h(),k(De,{key:0,class:"jarvis-widget-header",ref:"widgetTitle"},{default:w(()=>[e.widget.icon?(h(),k(se,{key:0,side:"",class:E({"cursor-pointer":e.widget.link}),onClick:e.jump},{default:w(()=>[u(tt,{square:e.tab.widgetEdges,rounded:!e.tab.widgetEdges,class:"jarvis-widget-icon","font-size":"24px"},{default:w(()=>[u(r,{name:e.widget.icon},null,8,["name"])]),_:1},8,["square","rounded"])]),_:1},8,["class","onClick"])):P("",!0),u(se,null,{default:w(()=>[u(nt,{class:E(["text-h6",{"cursor-pointer":e.widget.link}]),onClick:e.jump},{default:w(()=>[pe(Y(e.widget.label||e.widget.title),1)]),_:1},8,["class","onClick"])]),_:1})]),_:1},512)):P("",!0),e.widget.hideSeparator!==!0&&e.widget.hideTitle!==!0&&(e.widget.icon||e.widget.title)?(h(),k(te,{key:1})):P("",!0),u(ee,{horizontal:"",class:"jarvis-widget-content",style:N(e.alignment.fit===!1?{"overflow-y":"auto",...e.scaleSizes,...e.verticalAlignment}:e.verticalAlignment)},{default:w(()=>[u(ot,{onResize:e.onResize},null,8,["onResize"]),W("div",{class:"jarvis-widget-scaler full-width",style:N(e.scaleStyle)},[(h(),k(it(e.widget.module),{key:e.widget.revision,class:"full-width",widget:e.widget,_alignment:e.alignment,_fullscreen:e.fullscreenActive,_containerSize:{width:e.containerSize.width,height:e.containerSize.height-e.widgetTitleSize},_widgetSize:{width:e.size.width,height:e.size.height}},null,8,["widget","_alignment","_fullscreen","_containerSize","_widgetSize"]))],4)]),_:1},8,["style"])]),_:1},8,["class"])],34)}var Lt=G(At,[["render",Ht]]);const qt=J({name:"TabPanel",props:["page","tab"],components:{Widget:Lt},setup(e){const t=A(),n=ae(),o=n.platform.is.mobile,s=!1,a=Me(e.tab,"widgetConfig"),r=m(()=>Math.max(o&&a.value.smartphoneGapSize||s||a.value.desktopGapSize||5,0)),i=m(()=>{let d=[];return o&&a.value.smartphoneSameAs==="specific-layout"||s?d=e.tab.widgetsSmartphone||[]:o&&a.value.smartphoneSameAs==="tablet"?d=e.tab.widgetsTablet||[]:d=e.tab.widgetsDesktop||[],d}),l=m(()=>Math.max.apply(Math,i.value.map(d=>d.y+d.h))),c=m(()=>{var d;return((d=i.value)==null?void 0:d[0])||{}}),b=n.screen.width,v=m(()=>t.pageHeight),f=m(()=>{const d=o&&a.value.smartphoneFitPageHeight||s||a.value.desktopFitPageHeight||!1,p=o&&a.value.smartphoneWidgetHeight||s||a.value.desktopWidgetHeight||50;return d===!0?(v.value-2*r.value)/l.value-r.value:p}),y=m(()=>o&&a.value.smartphoneSameAs==="specific-layout"||s?"smartphone":o&&a.value.smartphoneSameAs==="tablet"?"tablet":"desktop");return{containerRows:l,fullscreenContainer:c,pageWidth:b,pageHeight:v,widgetGap:r,widgetHeight:f,widgetLayout:y,widgetContainers:i}}});function Nt(e,t,n,o,s,a){const r=R("widget");return h(),j("div",{class:E({["jarvis-page-"+e.page.id]:!0,["jarvis-tab-"+e.tab.id]:!0})},[e.tab.fullscreen!==!0?(h(),j("div",{key:0,class:E(["container",e.widgetLayout]),style:N({gridTemplateRows:"repeat("+e.containerRows+", "+e.widgetHeight+"px)",columnGap:e.widgetGap+"px",rowGap:e.widgetGap+"px",padding:e.widgetGap+"px"})},[(h(!0),j(Q,null,ne(e.widgetContainers,i=>(h(),j(Q,null,[i&&i.items&&i.items.length>0?(h(),j("div",{key:i.i,style:N({gridArea:i.y+1+" / "+(i.x+1)+" / span "+i.h+" / span "+i.w}),class:"box"},[u(r,{page:e.page,tab:e.tab,widgets:i.items||[],config:i,layout:e.widgetLayout,containerSize:{width:e.pageWidth/12*i.w,height:i.h*e.widgetHeight+(i.h-1)*e.widgetGap}},null,8,["page","tab","widgets","config","layout","containerSize"])],4)):P("",!0)],64))),256))],6)):(h(),j("div",{key:1,style:N({height:e.pageHeight+"px"})},[u(r,{fullscreen:"",page:e.page,tab:e.tab,widgets:e.fullscreenContainer.items||[],config:e.fullscreenContainer,layout:e.widgetLayout,containerSize:{width:e.pageWidth,height:e.pageHeight}},null,8,["page","tab","widgets","config","layout","containerSize"])],4))],2)}var Bt=G(qt,[["render",Nt]]);const Ot=J({name:"Page",props:["page"],components:{Container:zt,Tabs:Pt,TabPanel:Bt},setup(e){const t=ae(),n=Ie(),o=A(),s=m(()=>t.platform.is.mobile),a=m(()=>o.drawerMiniMode),r=m(()=>o.settings),i=m(()=>Object.keys(e.page.tabs).length),l=m({get(){return"tab-"+o.getSelectedTabId},set(f){f&&n.push({params:{tabId:f.replace("tab-","")}})}});return{setPageContainer:(f,y)=>{const d=document.querySelector(".jarvis-header");return f=d&&d.offsetHeight?d.offsetHeight:f,o.set("pageHeight",y-f),{}},onSelectedTabMoving:()=>o.set("selectedTabReady",!1),onSelectedTabReady:()=>o.set("selectedTabReady",!0),drawerMiniMode:a,isMobile:s,tabsCount:i,tabId:l,tabAnimated:m(()=>r.value.tabsSwipeAnimation==="always"||(!r.value.tabsSwipeAnimation||r.value.tabsSwipeAnimation==="mobile")&&s.value),tabSwipeable:m(()=>r.value.tabsSwipe==="always"||(!r.value.tabsSwipe||r.value.tabsSwipe==="mobile")&&s.value),settings:r}}});function Vt(e,t,n,o,s,a){const r=R("Tabs"),i=R("Container"),l=R("TabPanel");return h(),k(pt,{style:{"padding-top":"0"}},{default:w(()=>[u(i,{tabsCount:e.tabsCount},{default:w(()=>[u(r,{page:e.page,tabs:e.page.tabs},null,8,["page","tabs"])]),_:1},8,["tabsCount"]),u(ft,{"style-fn":e.setPageContainer,class:"jarvis-page jarvis-body"},{default:w(()=>[u(Pe,{modelValue:e.tabId,"onUpdate:modelValue":t[0]||(t[0]=c=>e.tabId=c),"keep-alive":!0,animated:e.tabAnimated,swipeable:e.tabSwipeable,style:{"background-color":"transparent"},onBeforeTransition:e.onSelectedTabMoving,onTransition:e.onSelectedTabReady},{default:w(()=>[(h(!0),j(Q,null,ne(e.page.tabs,c=>(h(),k(Re,{key:c.id,name:"tab-"+c.id,style:N({padding:0,"margin-top":e.settings.tabsBottom?0:e.settings.tabsDense?"40px":"60px"})},{default:w(()=>[u(l,{page:e.page,tab:{widgetConfig:{},...c}},null,8,["page","tab"])]),_:2},1032,["name","style"]))),128))]),_:1},8,["modelValue","animated","swipeable","onBeforeTransition","onTransition"])]),_:1},8,["style-fn"])]),_:1})}var Ft=G(Ot,[["render",Vt],["__scopeId","data-v-627f740b"]]);function He(e){return e.split("-")[0]}function Wt(e){return e.split("-")[1]}function Qt(e){return["top","bottom"].includes(He(e))?"x":"y"}function Jt(e){return e==="y"?"height":"width"}function Se(e,t,n){let{reference:o,floating:s}=e;const a=o.x+o.width/2-s.width/2,r=o.y+o.height/2-s.height/2,i=Qt(t),l=Jt(i),c=o[l]/2-s[l]/2,b=He(t),v=i==="x";let f;switch(b){case"top":f={x:a,y:o.y-s.height};break;case"bottom":f={x:a,y:o.y+o.height};break;case"right":f={x:o.x+o.width,y:r};break;case"left":f={x:o.x-s.width,y:r};break;default:f={x:o.x,y:o.y}}switch(Wt(t)){case"start":f[i]-=c*(n&&v?-1:1);break;case"end":f[i]+=c*(n&&v?-1:1);break}return f}const Gt=async(e,t,n)=>{const{placement:o="bottom",strategy:s="absolute",middleware:a=[],platform:r}=n,i=await(r.isRTL==null?void 0:r.isRTL(t));let l=await r.getElementRects({reference:e,floating:t,strategy:s}),{x:c,y:b}=Se(l,o,i),v=o,f={},y=0;for(let d=0;d<a.length;d++){const{name:p,fn:C}=a[d],{x:z,y:$,data:g,reset:S}=await C({x:c,y:b,initialPlacement:o,placement:v,strategy:s,middlewareData:f,rects:l,platform:r,elements:{reference:e,floating:t}});if(c=z!=null?z:c,b=$!=null?$:b,f={...f,[p]:{...f[p],...g}},S&&y<=50){y++,typeof S=="object"&&(S.placement&&(v=S.placement),S.rects&&(l=S.rects===!0?await r.getElementRects({reference:e,floating:t,strategy:s}):S.rects),{x:c,y:b}=Se(l,v,i)),d=-1;continue}}return{x:c,y:b,placement:v,strategy:s,middlewareData:f}};function ke(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function Le(e){return e&&e.document&&e.location&&e.alert&&e.setInterval}function V(e){if(e==null)return window;if(!Le(e)){const t=e.ownerDocument;return t&&t.defaultView||window}return e}function oe(e){return V(e).getComputedStyle(e)}function O(e){return Le(e)?"":e?(e.nodeName||"").toLowerCase():""}function qe(){const e=navigator.userAgentData;return e!=null&&e.brands?e.brands.map(t=>t.brand+"/"+t.version).join(" "):navigator.userAgent}function B(e){return e instanceof V(e).HTMLElement}function X(e){return e instanceof V(e).Element}function Ut(e){return e instanceof V(e).Node}function we(e){if(typeof ShadowRoot=="undefined")return!1;const t=V(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function le(e){const{overflow:t,overflowX:n,overflowY:o}=oe(e);return/auto|scroll|overlay|hidden/.test(t+o+n)}function Kt(e){return["table","td","th"].includes(O(e))}function Ne(e){const t=/firefox/i.test(qe()),n=oe(e);return n.transform!=="none"||n.perspective!=="none"||n.contain==="paint"||["transform","perspective"].includes(n.willChange)||t&&n.willChange==="filter"||t&&(n.filter?n.filter!=="none":!1)}function Be(){return!/^((?!chrome|android).)*safari/i.test(qe())}const Ce=Math.min,x=Math.max,re=Math.round;function _(e,t,n){var o,s,a,r;t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect();let l=1,c=1;t&&B(e)&&(l=e.offsetWidth>0&&re(i.width)/e.offsetWidth||1,c=e.offsetHeight>0&&re(i.height)/e.offsetHeight||1);const b=X(e)?V(e):window,v=!Be()&&n,f=(i.left+(v&&(o=(s=b.visualViewport)==null?void 0:s.offsetLeft)!=null?o:0))/l,y=(i.top+(v&&(a=(r=b.visualViewport)==null?void 0:r.offsetTop)!=null?a:0))/c,d=i.width/l,p=i.height/c;return{width:d,height:p,top:y,right:f+d,bottom:y+p,left:f,x:f,y}}function U(e){return((Ut(e)?e.ownerDocument:e.document)||window.document).documentElement}function ce(e){return X(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Oe(e){return _(U(e)).left+ce(e).scrollLeft}function Yt(e){const t=_(e);return re(t.width)!==e.offsetWidth||re(t.height)!==e.offsetHeight}function _t(e,t,n){const o=B(t),s=U(t),a=_(e,o&&Yt(t),n==="fixed");let r={scrollLeft:0,scrollTop:0};const i={x:0,y:0};if(o||!o&&n!=="fixed")if((O(t)!=="body"||le(s))&&(r=ce(t)),B(t)){const l=_(t,!0);i.x=l.x+t.clientLeft,i.y=l.y+t.clientTop}else s&&(i.x=Oe(s));return{x:a.left+r.scrollLeft-i.x,y:a.top+r.scrollTop-i.y,width:a.width,height:a.height}}function Ve(e){return O(e)==="html"?e:e.assignedSlot||e.parentNode||(we(e)?e.host:null)||U(e)}function Te(e){return!B(e)||getComputedStyle(e).position==="fixed"?null:e.offsetParent}function Xt(e){let t=Ve(e);for(we(t)&&(t=t.host);B(t)&&!["html","body"].includes(O(t));){if(Ne(t))return t;t=t.parentNode}return null}function ve(e){const t=V(e);let n=Te(e);for(;n&&Kt(n)&&getComputedStyle(n).position==="static";)n=Te(n);return n&&(O(n)==="html"||O(n)==="body"&&getComputedStyle(n).position==="static"&&!Ne(n))?t:n||Xt(e)||t}function $e(e){if(B(e))return{width:e.offsetWidth,height:e.offsetHeight};const t=_(e);return{width:t.width,height:t.height}}function Zt(e){let{rect:t,offsetParent:n,strategy:o}=e;const s=B(n),a=U(n);if(n===a)return t;let r={scrollLeft:0,scrollTop:0};const i={x:0,y:0};if((s||!s&&o!=="fixed")&&((O(n)!=="body"||le(a))&&(r=ce(n)),B(n))){const l=_(n,!0);i.x=l.x+n.clientLeft,i.y=l.y+n.clientTop}return{...t,x:t.x-r.scrollLeft+i.x,y:t.y-r.scrollTop+i.y}}function xt(e,t){const n=V(e),o=U(e),s=n.visualViewport;let a=o.clientWidth,r=o.clientHeight,i=0,l=0;if(s){a=s.width,r=s.height;const c=Be();(c||!c&&t==="fixed")&&(i=s.offsetLeft,l=s.offsetTop)}return{width:a,height:r,x:i,y:l}}function en(e){var t;const n=U(e),o=ce(e),s=(t=e.ownerDocument)==null?void 0:t.body,a=x(n.scrollWidth,n.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),r=x(n.scrollHeight,n.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0);let i=-o.scrollLeft+Oe(e);const l=-o.scrollTop;return oe(s||n).direction==="rtl"&&(i+=x(n.clientWidth,s?s.clientWidth:0)-a),{width:a,height:r,x:i,y:l}}function Fe(e){const t=Ve(e);return["html","body","#document"].includes(O(t))?e.ownerDocument.body:B(t)&&le(t)?t:Fe(t)}function We(e,t){var n;t===void 0&&(t=[]);const o=Fe(e),s=o===((n=e.ownerDocument)==null?void 0:n.body),a=V(o),r=s?[a].concat(a.visualViewport||[],le(o)?o:[]):o,i=t.concat(r);return s?i:i.concat(We(r))}function tn(e,t){const n=t.getRootNode==null?void 0:t.getRootNode();if(e.contains(t))return!0;if(n&&we(n)){let o=t;do{if(o&&e===o)return!0;o=o.parentNode||o.host}while(o)}return!1}function nn(e,t){const n=_(e,!1,t==="fixed"),o=n.top+e.clientTop,s=n.left+e.clientLeft;return{top:o,left:s,x:s,y:o,right:s+e.clientWidth,bottom:o+e.clientHeight,width:e.clientWidth,height:e.clientHeight}}function ze(e,t,n){return t==="viewport"?ke(xt(e,n)):X(t)?nn(t,n):ke(en(U(e)))}function on(e){const t=We(e),o=["absolute","fixed"].includes(oe(e).position)&&B(e)?ve(e):e;return X(o)?t.filter(s=>X(s)&&tn(s,o)&&O(s)!=="body"):[]}function sn(e){let{element:t,boundary:n,rootBoundary:o,strategy:s}=e;const r=[...n==="clippingAncestors"?on(t):[].concat(n),o],i=r[0],l=r.reduce((c,b)=>{const v=ze(t,b,s);return c.top=x(v.top,c.top),c.right=Ce(v.right,c.right),c.bottom=Ce(v.bottom,c.bottom),c.left=x(v.left,c.left),c},ze(t,i,s));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}const rn={getClippingRect:sn,convertOffsetParentRelativeRectToViewportRelativeRect:Zt,isElement:X,getDimensions:$e,getOffsetParent:ve,getDocumentElement:U,getElementRects:e=>{let{reference:t,floating:n,strategy:o}=e;return{reference:_t(t,ve(n),o),floating:{...$e(n),x:0,y:0}}},getClientRects:e=>Array.from(e.getClientRects()),isRTL:e=>oe(e).direction==="rtl"},an=(e,t,n)=>Gt(e,t,{platform:rn,...n});var ln=`[\r
   {\r
      "id":"cfbea70b-925b-40d1-9e8e-d0768336e3da",\r
      "title":"Main Site",\r
      "type":"page",\r
      "icon":"mdi-file",\r
      "tabs":[\r
         {\r
            "id":"0559b5e5-1c56-4ea4-8211-d51226417202",\r
            "title":"Dashboard",\r
            "icon":"mdi-monitor-dashboard",\r
            "widgetsDesktop":[\r
               {\r
                  "x":0,\r
                  "y":0,\r
                  "w":4,\r
                  "h":8,\r
                  "i":"77ac22da-738d-4646-b0f5-940298bd6571",\r
                  "moved":false,\r
                  "items":[\r
                     "3958dfb0-83da-48ae-96f3-e66969a92cac"\r
                  ]\r
               },\r
               {\r
                  "x":4,\r
                  "y":0,\r
                  "w":4,\r
                  "h":4,\r
                  "i":"28e602ec-4064-48d0-94d8-80e64fe37f87",\r
                  "moved":false,\r
                  "items":[\r
                     "be31acad-6bb4-40ed-a9cf-24cd981d8545"\r
                  ]\r
               },\r
               {\r
                  "x":4,\r
                  "y":4,\r
                  "w":4,\r
                  "h":4,\r
                  "i":"0f1c06bc-f5c3-4e32-84e6-41fc0b4d05b5",\r
                  "moved":false,\r
                  "items":[\r
                     "b073226b-14d9-40e9-bbd7-4a54080cfa87"\r
                  ]\r
               },\r
               {\r
                  "x":8,\r
                  "y":0,\r
                  "w":4,\r
                  "h":4,\r
                  "i":"a3c543c8-8135-47ef-905e-681982708764",\r
                  "moved":false,\r
                  "items":[\r
                     "99142690-4245-445b-bbc4-be8d09b93b83"\r
                  ]\r
               }\r
            ],\r
            "widgetsSmartphone":[\r
               \r
            ]\r
         },\r
         {\r
            "id":"e2055e5e-c0a8-46dc-8019-30c97e157d62",\r
            "title":"Map",\r
            "icon":"map",\r
            "fullscreen":true,\r
            "widgetsDesktop":[\r
               {\r
                  "x":0,\r
                  "y":0,\r
                  "w":4,\r
                  "h":4,\r
                  "i":"3587d28c-ffbe-4121-9e93-35cc52a5e947",\r
                  "moved":false,\r
                  "items":[\r
                     "232c9a69-1077-4b03-9c68-2d27eb148e6f"\r
                  ]\r
               }\r
            ],\r
            "widgetsSmartphone":[\r
               \r
            ]\r
         },\r
         {\r
            "id":"c9ae69c1-5c33-49bb-86e9-6ca2106cb9b7",\r
            "title":"Settings",\r
            "icon":"cog",\r
            "widgetsDesktop":[\r
               {\r
                  "x":0,\r
                  "y":0,\r
                  "w":4,\r
                  "h":30,\r
                  "i":"252b1b88-f112-4095-aa75-a8f97fc6856b",\r
                  "moved":false,\r
                  "items":[\r
                     "dc0d5c0e-d82d-41a9-8f55-6d6ce9b94937"\r
                  ],\r
                  "scaleToFitContents":false\r
               },\r
               {\r
                  "x":4,\r
                  "y":0,\r
                  "w":8,\r
                  "h":5,\r
                  "i":"6367c1cf-9e5d-4ec7-a383-f578e6dd0ea2",\r
                  "moved":false,\r
                  "items":[\r
                     "6fc7cca0-306e-40f6-a7c6-556ebd1fbd73"\r
                  ]\r
               },\r
               {\r
                  "x":8,\r
                  "y":5,\r
                  "w":4,\r
                  "h":25,\r
                  "i":"9f4dbd4d-cbe7-4dcd-94f3-c35850e28778",\r
                  "moved":false,\r
                  "items":[\r
                     "e90fd75a-f510-4481-845d-b2cdac5c4e2f"\r
                  ],\r
                  "scaleToFitContents":false\r
               }\r
            ],\r
            "widgetsSmartphone":[\r
               \r
            ]\r
         }\r
      ]\r
   }\r
]`,cn=`{\r
   "232c9a69-1077-4b03-9c68-2d27eb148e6f":{\r
      "id":"232c9a69-1077-4b03-9c68-2d27eb148e6f",\r
      "config":{\r
      },\r
      "module":"Map"\r
   }\r
}`,dn=[{title:"#introduction.title",message:"#introduction.content",onEnter:({props:e})=>{const t=me.getConnection,n=A();t.setState(F.get("NODE_SETTINGS"),JSON.stringify({...n.settings,["tour"+Ae(e.tour)]:!0})).catch(o=>console.warn("Tours.Introduction",o.message||o))}},{target:"#SettingsButton",spotlight:".jarvis-sidebar-container",title:"#settings.title",message:"#settings.content",params:{placement:"right"},secondaryButton:"#settings.buttons.manually",secondaryAction:({finishTour:e,step:t})=>{document.querySelector("#SettingsButton").click(),e()},primaryButton:"#settings.buttons.automatically",primaryAction:({finishTour:e,nextStep:t,step:n})=>{t();const o={},s={};fe.importDevices(F.get("DEFAULT_ADAPTERIMPORT").concat(["daswetter"])).then(a=>{a.forEach(y=>{if(y.status==="fulfilled"){const d=y.value;o[d.function]=o[d.function]||[],o[d.function].push(d),s[d.id]=d}});const r=JSON.parse(ln),i=JSON.parse(cn),l={config:{},items:[],module:"StateList",title:""},c=[{widgetId:"3958dfb0-83da-48ae-96f3-e66969a92cac",function:"light",icon:"mdi-lightbulb-on"},{widgetId:"be31acad-6bb4-40ed-a9cf-24cd981d8545",function:"blind",icon:"mdi-window-shutter-open"},{widgetId:"b073226b-14d9-40e9-bbd7-4a54080cfa87",function:"heating",icon:"mdi-radiator"},{widgetId:"99142690-4245-445b-bbc4-be8d09b93b83",function:"window",icon:"mdi-window-closed-variant"}];i["dc0d5c0e-d82d-41a9-8f55-6d6ce9b94937"]={id:"dc0d5c0e-d82d-41a9-8f55-6d6ce9b94937",config:{},items:[],module:"AdapterStatus",title:""},i["6fc7cca0-306e-40f6-a7c6-556ebd1fbd73"]={id:"6fc7cca0-306e-40f6-a7c6-556ebd1fbd73",config:{},items:[],module:"AdapterLogs",title:""},i["e90fd75a-f510-4481-845d-b2cdac5c4e2f"]={id:"e90fd75a-f510-4481-845d-b2cdac5c4e2f",config:{},items:[],module:"ScriptStatus",title:""},c.forEach((y,d)=>{const p=st(l);p.id=y.widgetId,p.title=rt.global.t(y.function),p.icon=y.icon,o[y.function]=o[y.function]||[];for(const z of o[y.function]){if(!z.states)continue;const $=Object.keys(z.states);let g={id:at(),type:"device",deviceId:z.id,showState:!0,primaryStateKey:$[0]||"",secondaryStatesKeys:[]};z.function==="light"&&($.includes("power")||$.includes("level"))?g={...g,showState:!1,actionElement:"SwitchAction",primaryStateKey:$.includes("power")?"power":"level"}:z.function==="blind"&&$.includes("level")?g={...g,showState:!1,actionElement:"BlindLevelAction",primaryStateKey:"level"}:z.function==="heating"&&$.includes("temperature")?g={...g,showState:!0,primaryStateKey:"temperature",secondaryStatesKeys:$.filter(S=>["setTemperature","humidity"].includes(S))}:z.function==="window"&&$.includes("open")&&(g={...g,primaryStateKey:"open"}),p.items.push(g)}i[p.id]=p;const{height:C}=fe.getDefaultModuleHeight(p,p.items);r[0].tabs[0].widgetsDesktop[d].h=C,r[0].tabs[0].widgetsDesktop[d+1]&&r[0].tabs[0].widgetsDesktop[d].x===r[0].tabs[0].widgetsDesktop[d+1].x&&(r[0].tabs[0].widgetsDesktop[d+1].y=C)});const b=A(),v=me.getConnection,f=[v.setState(F.get("NODE_LAYOUT"),JSON.stringify({version:3,layout:r})),v.setState(F.get("NODE_DEVICES"),JSON.stringify({version:3,devices:s})),v.setState(F.get("NODE_WIDGETS"),JSON.stringify(i)),v.setState(F.get("NODE_SETTINGS"),JSON.stringify({...b.settings,tourInterface:!1}))];Promise.allSettled(f).then(()=>{e(),window.location.reload()}).catch(y=>console.warn("Tours.Introduction",y.message||y))}).catch(a=>{console.warn("Tours.Introduction",a.message||a)})}},{style:{"max-width":"450px"},title:"#jarvis.title",loading:!0,buttons:!1}],un=[{target:".jarvis-sidebar-container",title:"#drawer.title",message:"#drawer.content",params:{placement:"right"},onEnter:({props:e})=>{const t=me.getConnection,n=A();t.setState(F.get("NODE_SETTINGS"),JSON.stringify({...n.settings,["tour"+Ae(e.tour)]:!0})).catch(o=>console.warn("Tours.Interface",o.message||o))}},{target:".jarvis-tabs-container",title:"#tabs.title",message:"#tabs.content"},{spotlight:".q-page-container .jarvis-page",title:"#widgets.title",message:"#widgets.content"},{target:".jarvis-widget-container .jarvis-widget-module-StateList",title:"#modules.title",message:"#modules.content",params:{placement:"right-start"}},{target:".jarvis-widget-container .jarvis-widget-module-StateList .jarvis-widget-header",title:"#WidgetHeader.title",message:"#WidgetHeader.content",targetStyle:{}},{buttons:!1,onSpotlightClick:({nextStep:e})=>{e()},target:".jarvis-widget-container .jarvis-widget-module-StateList .jarvis-widget-content",title:"#WidgetContent.title",message:"#WidgetContent.content",targetStyle:{},params:{placement:"right-start"}},{target:".jarvis-popup",title:"#DeviceStateDetails.title",message:"#DeviceStateDetails.content",params:{placement:"top"}}],gn={introduction:dn,interface:un};const fn=J({name:"Tours",props:{tour:{type:String},start:{type:Boolean,default:!1}},setup(e){const t=D(!1),n=D(null),o=gn[e.tour],s=D(null),a=D(null);let r,i,l={};const c=(g,S)=>{i=S?g.style.position:i,g.style.position=S?g.style.position||"relative":i,g.style.zIndex=S?5001:null,g.style.border=S?"5px solid #fff":null,g.style.opacity=S?.7:"unset",r=S?g.parentElement.style.zIndex:r,g.parentElement.style.zIndex=S?5001:r},b=(g,S=!0)=>{const K=g.spotlight||g.target;if(t.value=!0,K){const I=document.querySelector(K);if(I){if(c(I,S),g.onSpotlightClick!==void 0&&(I.style.pointerEvents="all",I.onclick=()=>g.onSpotlightClick({props:e,step:g,nextStep:d,previousStep:y,skipStep:p,finishTour:C})),g.targetStyle&&S===!0){l={};for(const M in g.targetStyle)l[M]=I.style[M],I.style[M]=g.targetStyle[M]}else if(g.targetStyle&&S===!1)for(const M in g.targetStyle)I.style[M]=l[M]}}},v=g=>{const S=document.querySelector(g.value.target||"body"),K={...g.value.params||{},middleware:[]};return an(S,n.value,K).then(I=>{const{x:M,y:T}=I;n.value.firstChild&&(n.value.firstChild.style.display="block");const de=n.value.offsetWidth,Z=n.value.offsetHeight,be=document.querySelector("body");be.style.pointerEvents="none";const Qe=be.offsetHeight-Z;return n.value.style.left=(g.value.target?M+15:"calc(50% - "+de/2)+"px",n.value.style.top=(g.value.target?Math.max(10,Math.min(Qe-10,T-Z/2+10)):T/2-Z/2)+"px",n.value.style.pointerEvents="all",!0})},f=g=>{a.value;const S=a.value===null||a.value===g-2;a.value=g-1,s.value=o[a.value],v(s).then(()=>{o[a.value-1]&&b(o[a.value-1],!1),o[a.value+1]&&b(o[a.value+1],!1),b(s.value)}),S&&s.value&&s.value.onEnter&&s.value.onEnter({props:e,step:s,previousStep:y,nextStep:d,finishTour:C,skipStep:p})},y=()=>f(a.value),d=()=>f(a.value+2),p=()=>{b(s.value,!1),s.value=null,t.value=!1;const g=document.querySelector("body");g.style.pointerEvents="all"},C=()=>{p()},z=m(()=>a.value<=0),$=m(()=>a.value===o.length-1);return A(),lt(()=>{e.start&&f(1)}),{marked:wt,tooltip:n,overlay:t,step:s,isFirst:z,isLast:$,previousStep:y,nextStep:d,skipStep:p,finishTour:C}}}),pn={class:"tooltip",ref:"tooltip"},mn={class:"text-h6"},vn=["innerHTML"];function hn(e,t,n,o,s,a){const r=R("q-overlay");return h(),j(Q,null,[u(r,{modelValue:e.overlay,"onUpdate:modelValue":t[0]||(t[0]=i=>e.overlay=i),"no-scroll":!0,"z-index":5e3,opacity:.7},null,8,["modelValue","opacity"]),W("div",pn,[e.step?(h(),k(he,{key:e.step.title,class:"step"},{default:w(()=>[u(ee,null,{default:w(()=>[W("div",mn,Y(e.$t(e.step.title||"")),1)]),_:1}),u(te),e.step.loading===!0?(h(),k(ct,{key:0,indeterminate:""})):P("",!0),u(ee,{style:{"max-height":"50vh"},class:"body scroll"},{default:w(()=>[W("div",{innerHTML:e.marked.parse(e.$t(e.step.message||""))},null,8,vn)]),_:1}),u(te),e.step.buttons!==!1?(h(),k(Ee,{key:1,class:"nowrap"},{default:w(()=>[u(H,{onClick:e.skipStep,flat:"",label:e.$t("Skip"),color:"accent"},null,8,["onClick","label"]),u(je),e.step.secondaryAction===void 0?L((h(),k(H,{key:0,onClick:e.previousStep,flat:"",label:e.$t("Previous"),color:"secondary"},null,8,["onClick","label"])),[[q,!e.isFirst]]):L((h(),k(H,{key:1,onClick:t[1]||(t[1]=i=>e.step.secondaryAction({step:e.step,previousStep:e.previousStep,nextStep:e.nextStep,finishTour:e.finishTour,skipStep:e.skipStep})),flat:"",label:e.$t(e.step.secondaryButton),color:"secondary"},null,8,["label"])),[[q,!e.isFirst]]),e.step.primaryButton===void 0?L((h(),k(H,{key:2,onClick:e.nextStep,flat:"",label:e.$t("Next"),color:"primary"},null,8,["onClick","label"])),[[q,!e.isLast]]):P("",!0),e.step.primaryButton===void 0?L((h(),k(H,{key:3,onClick:e.finishTour,label:e.$t("Finish"),color:"primary"},null,8,["onClick","label"])),[[q,e.isLast]]):L((h(),k(H,{key:4,onClick:t[2]||(t[2]=i=>e.step.primaryAction({step:e.step,previousStep:e.previousStep,nextStep:e.nextStep,finishTour:e.finishTour,skipStep:e.skipStep})),flat:"",label:e.$t(e.step.primaryButton),color:"primary"},null,8,["label"])),[[q,!e.isFirst]])]),_:1})):P("",!0)]),_:1})):P("",!0)],512)],64)}var wn=G(fn,[["render",hn]]);const bn=J({name:"Jarvis",components:{DeviceDetailsPopup:Ct,Page:Ft,tours:wn},setup(){const e=A(),t=m(()=>e.settings);ue("style",bt,{id:"responsive",lang:"scss",onlyPro:!1});try{ge(()=>ue("style",e.styles,{id:"css",lang:"scss"}))}catch(s){console.warn("Jarvis-B7cq4T4m","Error injecting custom styles: "+s.message),console.debug("Jarvis-B7cq4T4m",e.styles)}try{ge(()=>ue("script",e.scripts,{id:"scripts"}))}catch(s){console.warn("Jarvis-B7cq4T4m","Error injecting custom scripts: "+s.message),console.debug("Jarvis-B7cq4T4m",e.scripts)}const n=m(()=>e.layout||[]),o=m(()=>"page-"+e.getSelectedPageId);return{settings:t,pages:n,pageId:o}}});function yn(e,t,n,o,s,a){const r=R("tours"),i=R("DeviceDetailsPopup"),l=R("Page");return h(),j(Q,null,[u(r,{tour:"introduction",start:e.settings.tourIntroduction!==!0},null,8,["start"]),u(r,{tour:"interface",start:e.settings.tourIntroduction===!0&&e.settings.tourInterface!==!0},null,8,["start"]),u(i),u(Pe,{"model-value":e.pageId,"keep-alive":!0,style:{"background-color":"transparent"},vertical:""},{default:w(()=>[(h(!0),j(Q,null,ne(e.pages,c=>(h(),k(Re,{key:c.id,name:"page-"+c.id,style:{padding:"0","margin-top":"0px"}},{default:w(()=>[u(l,{page:c},null,8,["page"])]),_:2},1032,["name"]))),128))]),_:1},8,["model-value"])],64)}var In=G(bn,[["render",yn]]);export{In as default};
