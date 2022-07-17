import{Q as be}from"./QToolbarTitle-880d03de.js";import{Q as Ce}from"./QToolbar-171638a5.js";import{q as te,cl as A,Y as re,cm as ne,a4 as H,y as ce,ct as ue,c as B,da as $e,db as we,_ as oe,d5 as ie,j as T,o as v,d as S,k as l,w as t,a as W,a7 as pe,e as i,t as d,ad as Se,P as F,a8 as M,K as O,a2 as _,a3 as ke,F as N,l as J,M as Q,N as y,$ as q,i as C,cL as Oe,O as x,g as R,a9 as Ie,a6 as We,aa as _e,A as De,cp as Te,m as ee,f as Y,n as Z,p as ve,J as me,cu as Ee,cr as Pe,dc as Le,dd as ze,I as je,de as Be,cP as qe}from"./index-52a12785.js";import{Q as ae}from"./QBtnDropdown-a2815741.js";import{D as fe,a as he}from"./useDragDrop-dcc68df6.js";import{J as Ae}from"./json-editor-ef87e827.js";import{Q as de}from"./QTooltip-148752e1.js";import{Q as ye}from"./QExpansionItem-01dcebe5.js";import{W as Qe}from"./WidgetPage-22285b15.js";import"./_commonjsHelpers-45ea234c.js";import"./vue.runtime.esm-bundler-757b0181.js";import"./QSlideTransition-5f3ea158.js";const Fe=te({name:"WidgetPopup",props:["widget"],emits:["onClose","onSave"],components:{WidgetPage:Qe},setup(e,{emit:u}){A.dev("DEBUG","WidgetPopup","setup()");const r=re(),E=ne(),P=[{label:r.t("top aligned"),value:"top"},{label:r.t("middle aligned"),value:"middle"},{label:r.t("bottom aligned"),value:"bottom"}],j=[{label:r.t("left aligned"),value:"left"},{label:r.t("center aligned"),value:"center"},{label:r.t("right aligned"),value:"right"},{label:r.t("fill full width"),value:"fill-width"}];let a={};Object.values(E.widgets).forEach(h=>{a[h.module]=a[h.module]||{label:h.module,widgets:[]},h._deleted!==!0&&a[h.module].widgets.push({...h,value:h.id,label:h.label?h.label+" "+(h.title?"("+h.title+")":""):h.title||""})}),a=Object.values(a);const p=H(a),g=H(null);ce(()=>e.widget,h=>{A.dev("DEBUG","WidgetPopup","watch",h),g.value=h?ue({items:[],...h}):null});const $=B(()=>g.value.scaleToFitContents!==void 0?g.value.scaleToFitContents:!0),o=B(()=>g.value.alignmentVertical||"top"),s=B(()=>g.value.alignmentHorizontal||"center"),D=B(()=>g.value.allowFullscreen||!1),n=B(()=>g.value.items?g.value.items.map(h=>E.widgets[h]||{}):[]),L=(h,ge)=>{A.dev("DEBUG","WidgetPopup","onFilter",h);let se=a;h&&(h=h.toLowerCase(),se=[],a.forEach(K=>{const G=[];K.widgets.forEach(X=>{(X.module&&X.module.toLowerCase().indexOf(h)!==-1||X.title&&X.title.toLowerCase().indexOf(h)!==-1||X.label&&X.label.toLowerCase().indexOf(h)!==-1)&&G.push(X)}),G.length>0&&se.push({label:K.label+" ("+G.length+")",widgets:G})})),ge(()=>{p.value=se.sort((K,G)=>(K=K.label?K.label.toLowerCase():"",G=G.label?G.label.toLowerCase():"",K===G?0:K>G?1:-1))})},m=H(null);let I=!1;const V=h=>{A.dev("DEBUG","WidgetPopup","onChange",h),g.value[h.id]=h.value},le=h=>{h&&I===!0&&z({id:m.value}),I=!1,m.value=null},f=()=>{g.value=null,u("onClose")},b=()=>{u("onSave",g.value),f()},c=H(),z=h=>{g.value.items.push(h.id),c.value.hidePopup()};return{ScaleExceptions:$e,AlignmentExceptions:we,alignmentHorizontal:j,alignmentVertical:P,inputValueAlignmentHorizontal:s,inputValueAlignmentVertical:o,inputScaleToFitContents:$,inputValueAllowFullscreen:D,onChange:V,onClose:le,onCancel:f,onSave:b,onFilter:L,itemList:n,widgetListFiltered:p,selectedWidgetId:m,container:g,addWidgetElement:c,assignWidget:z,addWidget:()=>{I=!0,m.value=ie()},editWidget:h=>{m.value=h},deleteWidget:h=>{confirm(r.t("Really delete item?"))&&g.value.items.splice(g.value.items.indexOf(h),1)}}}}),Ue={class:"text-h6"},He={class:"text-h7 primary q-ma-sm"},Ve={class:"row"},Ge={class:"col"},Me={class:"col-1",style:{"text-align":"center","line-height":"56px"}},Re={class:"col-3",style:{"text-align":"center","line-height":"56px"}},Ne={key:0},Je={class:"row items-center"},Ye={class:"text-h7 primary q-ma-sm",style:{"margin-top":"16px"}},Ke={class:"row q-pb-xs"},Ze={class:"col"},Xe={class:"col"},xe={class:"col"},el={class:"col"};function ll(e,u,r,E,P,j){const a=T("widget-page"),p=T("icon"),g=T("inputs");return v(),S("div",null,[l(a,{onOnClose:e.onClose,widgetId:e.selectedWidgetId},null,8,["onOnClose","widgetId"]),l(_e,{"model-value":e.container!==null,persistent:""},{default:t(()=>[e.container?(v(),W(We,{key:0,class:"column",style:{width:"1200px","max-width":"90vw"}},{default:t(()=>[l(pe,{class:"row items-center"},{default:t(()=>[i("div",Ue,d(e.$t("Assign Widget to Box")),1),l(Se),l(F,{flat:"",round:"",color:"grey",icon:"close",onClick:e.onCancel},null,8,["onClick"])]),_:1}),l(M),l(pe,{class:"col defaultPadding-2 q-pt-none scroll body"},{default:t(()=>[i("div",He,d(e.$t("Widget")),1),l(M,{style:{margin:"0 0 8px 0"}}),O(i("div",Ve,[i("div",Ge,[l(ke,{onFilter:e.onFilter,ref:"addWidgetElement",label:e.$t("Assign Widget"),options:e.widgetListFiltered,"model-value":"","use-input":"","stack-label":"",style:{margin:"0 8px"}},{option:t($=>[l(ye,{"expand-separator":"","header-class":"text-weight-bold",label:$.opt.label},{default:t(()=>[(v(!0),S(N,null,J($.opt.widgets,o=>O((v(),W(Q,{key:o.id,clickable:"",onClick:s=>e.assignWidget(o)},{default:t(()=>[l(y,null,{default:t(()=>[o.label?(v(),W(q,{key:0,class:"q-ml-md"},{default:t(()=>[C(d(o.label),1)]),_:2},1024)):(v(),W(q,{key:1,class:"q-ml-md"},{default:t(()=>[i("em",null,"("+d(e.$t("no title"))+")",1)]),_:1})),l(q,{class:"q-ml-md",caption:""},{default:t(()=>[C(d(o.id),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[Oe]])),128))]),_:2},1032,["label"])]),_:1},8,["onFilter","label","options"])]),i("div",Me,d(e.$t("or")),1),i("div",Re,[l(F,{color:"primary",icon:"mdi-plus-circle",label:e.$t("Add Widget"),onClick:e.addWidget},null,8,["label","onClick"])])],512),[[_,e.itemList.length===0]]),l(x,null,{default:t(()=>[(v(!0),S(N,null,J(e.itemList,($,o)=>(v(),W(Q,{key:$.id+"-"+o,class:"list-group-item"},{default:t(()=>[$.icon?(v(),W(y,{key:0,avatar:""},{default:t(()=>[l(p,{color:"primary",name:$.icon},null,8,["name"])]),_:2},1024)):R("",!0),l(y,null,{default:t(()=>[l(q,null,{default:t(()=>[C(d($.label||$.title||e.$t("no title"))+" ",1),$._deleted?(v(),S("em",Ne,"[ "+d(e.$t("deleted"))+" ]",1)):R("",!0)]),_:2},1024),l(q,{caption:""},{default:t(()=>[C("Widget ID: "+d($.id)+", Module: "+d($.module),1)]),_:2},1024)]),_:2},1024),l(y,{side:""},{default:t(()=>[i("div",Je,[$._deleted!==!0?(v(),W(F,{key:0,size:"sm",flat:"",round:"",onClick:s=>e.editWidget($.id),icon:"mdi-pencil"},null,8,["onClick"])):R("",!0),l(F,{size:"sm",flat:"",round:"",onClick:s=>e.deleteWidget($.id),icon:"mdi-delete",color:"negative"},null,8,["onClick"])])]),_:2},1024)]),_:2},1024))),128))]),_:1}),i("div",Ye,d(e.$t("Options")),1),l(M,{style:{margin:"0 0 8px 0"}}),i("div",Ke,[i("div",Ze,[l(g,{icon:"mdi-resize",onOnChange:e.onChange,id:"allowFullscreen",label:"Allow fullscreen",type:"switch",value:e.inputValueAllowFullscreen},null,8,["onOnChange","value"])]),i("div",Xe,[O(l(g,{icon:"mdi-fit-to-page",onOnChange:e.onChange,id:"scaleToFitContents",label:"Scale contents to fit widget",type:"switch",value:e.inputScaleToFitContents},null,8,["onOnChange","value"]),[[_,e.itemList[0]&&e.ScaleExceptions.includes(e.itemList[0].module)===!1]])]),i("div",xe,[O(l(g,{icon:"mdi-arrow-split-horizontal",onOnSelect:e.onChange,id:"alignmentVertical",label:"Vertical alignment",type:"select",options:e.alignmentVertical,value:e.inputValueAlignmentVertical},null,8,["onOnSelect","options","value"]),[[_,e.itemList[0]&&e.AlignmentExceptions.includes(e.itemList[0].module)===!1]])]),i("div",el,[O(l(g,{icon:"mdi-arrow-split-vertical",onOnSelect:e.onChange,id:"alignmentHorizontal",label:"Horizontal alignment",type:"select",options:e.alignmentHorizontal,value:e.inputValueAlignmentHorizontal},null,8,["onOnSelect","options","value"]),[[_,e.itemList[0]&&e.AlignmentExceptions.includes(e.itemList[0].module)===!1]])])])]),_:1}),l(M),l(Ie,{align:"right"},{default:t(()=>[l(F,{flat:"",label:e.$t("Cancel"),color:"negative",onClick:e.onCancel},null,8,["label","onClick"]),l(F,{flat:"",label:e.$t("Apply"),color:"primary",onClick:e.onSave},null,8,["label","onClick"])]),_:1})]),_:1})):R("",!0)]),_:1},8,["model-value"])])}var tl=oe(Fe,[["render",ll]]);const nl=te({name:"WidgetSection",props:["pageId","tabId","id","label","icon","fullscreen","widgetEdges","widgetConfig","items"],components:{WidgetPopup:tl},setup(e){A.dev("DEBUG","WidgetSection","setup()");const u=re(),r=ne(),E=[{id:"copy",icon:"mdi-content-copy",label:u.t("copy")},{id:"duplicate",icon:"mdi-content-duplicate",label:u.t("duplicate")}],P=B(()=>e.id!=="desktop"&&e.widgetConfig[e.id+"SameAs"]!=="specific-layout"),j=B(()=>[{label:u.t("wie Desktop"),value:"desktop"},{label:u.t("wie Smartphone"),value:"smartphone"},{label:u.t("eigenes Layout"),value:"specific-layout"}].filter(c=>c.value!==e.id));ce(()=>e.fullscreen,c=>{A.dev("DEBUG","WidgetSection","watch",c),c===!0&&n.value.length===0&&I()});const a=c=>{A.dev("DEBUG","WidgetSection","onChange",c),r.setWidgetConfig({pageId:e.pageId,tabId:e.tabId,key:c.id,val:c.value})},p=H({}),g=(c,z,k,w,U)=>{A.dev("DEBUG","WidgetSection","onResize",c,z,k,w,U),p.value[c]=p.value[c]||{width:(100/(12/k)).toFixed(2),height:w}},$=(c,z,k,w,U)=>{A.dev("DEBUG","WidgetSection","onResized",c,z,k,w,U),p.value[c]={width:(100/(12/k)).toFixed(2),height:w}},o={},s=c=>r.widgets[c]||{items:[]},D=c=>{const z=c.join("-");return o[z]?o[z]:(A.dev("DEBUG","WidgetSection","getWidgetsData",c),!c||c.length===0?u.t("No widgets assigned"):(o[z]=c.map(k=>{const w=s(k);w.items=w.items||[];const U=w.items.filter(h=>h.type==="divider").length;return w.module+(!w.label&&!w.title?"":" ("+(w.label||w.title)+(w.module!=="StateList"?"":", "+w.items.length+" "+u.t("items")+" "+u.t("apprx.")+" "+((w.hideTitle!==!0?56:0)+U+(w.items.length-U)*46)+"px "+u.t("in height"))+")")}).join(", "),o[z]))},n=H(ue(e.items)||[]),L=c=>{r.setWidgets({pageId:e.pageId,tabId:e.tabId,key:"widgets"+Te(e.id),val:c})},m=H(),I=()=>{let c=0,z=0;for(const k of n.value){const w=k.y+k.h;w>z&&(z=w,c=k.x)}if(n.value.push({x:c,y:z,w:4,h:4,i:ie()}),m.value&&m.value[m.value.length-1]){const k=m.value[m.value.length-1].$el,{top:w,height:U}=k.getBoundingClientRect();k.parentElement.parentElement.scrollTo(0,w+U+1e3)}L(n.value)},V=c=>{const z=c.id,k=ue(n.value.find(w=>w.i===z));k.i=ie(),c.val==="copy"&&(k.items=k.items||[],k.items=k.items.map(w=>{const U=s(w),h=ie();return r.copyWidget({id:h,widget:U}),h})),n.value.push(k),L(n.value)},le=c=>{confirm(u.t("Really delete item?"))&&(n.value.splice(n.value.findIndex(k=>k.i===c),1),L(n.value))},f=H(null),b=c=>{A.dev("DEBUG","WidgetSection","saveWidgetAssignments",c),n.value.splice(n.value.findIndex(z=>z.i===f.value.i),1,{...f.value,...c}),f.value=null,L(n.value)};return De(()=>{m.value&&m.value.forEach(c=>{$(c.$props.i,c.$props.y,c.$props.x,c.$props.y,c.$props.x)})}),{gridItemElements:m,expanded:e.id==="desktop",copyMenu:E,onChange:a,onResize:g,onResized:$,widgets:n,widgetSizes:p,setWidgets:L,getWidgetsData:D,selectedWidget:f,addWidget:I,copyWidget:V,deleteWidget:le,saveWidgetAssignments:b,disabled:P,options:j}}}),ol={style:{padding:"0 16px 8px 16px","min-height":"64px"},class:"row"},il={class:"grid-item tooltip-widget"},al={class:"row justify-between"},sl={class:"row items-center",style:{"padding-left":"8px"}},dl={class:"row"},ul={style:{padding:"0 16px 8px 16px","min-height":"64px"},class:"row"},rl={class:"grid-layout-container",style:{height:"800px","overflow-y":"scroll"}},cl={class:"row justify-between"},gl={class:"row items-center",style:{"padding-left":"8px"}},pl=C("\xA0 "),ml={key:0},vl={class:"row"},fl={class:"row q-pa-sm tooltip-widget",style:{overflow:"hidden"}};function hl(e,u,r,E,P,j){const a=T("widget-popup"),p=T("icon"),g=T("inputs"),$=T("grid-item"),o=T("grid-layout");return v(),S("div",null,[l(a,{onOnClose:u[0]||(u[0]=s=>e.selectedWidget=null),onOnSave:e.saveWidgetAssignments,widget:e.selectedWidget},null,8,["onOnSave","widget"]),l(ye,{"onUpdate:modelValue":u[4]||(u[4]=s=>e.expanded=!e.expanded),"model-value":e.disabled!==!0?e.expanded:!1,class:"full-width paper",disable:e.disabled},{header:t(()=>[l(y,{avatar:""},{default:t(()=>[l(p,{name:e.icon},null,8,["name"])]),_:1}),l(y,{style:{height:"40px"}},{default:t(()=>[C(d(e.label),1)]),_:1}),e.id!=="desktop"?(v(),W(y,{key:0,side:"",class:"notDisabled"},{default:t(()=>[l(g,{onOnSelect:e.onChange,type:"select",options:e.options,dense:"",label:e.$t("Use same layout as"),id:e.id+"SameAs",onClick:u[1]||(u[1]=ee(()=>{},["prevent"])),value:e.widgetConfig[e.id+"SameAs"]||"desktop",style:{width:"150px"}},null,8,["onOnSelect","options","label","id","value"])]),_:1})):R("",!0)]),default:t(()=>[i("div",null,[O(i("div",null,[O(i("div",ol,[l(F,{color:"secondary",icon:"mdi-plus-circle",label:e.$t("Add Widget"),onClick:e.addWidget,style:{margin:"auto 0"}},null,8,["label","onClick"])],512),[[_,e.widgets.length===0]]),l(M),O(i("div",il,[i("div",al,[i("div",sl,d(e.$t("Fullscreen")),1),i("div",dl,[l(F,{size:"sm",flat:"",round:"",icon:"mdi-pencil",onClick:u[2]||(u[2]=s=>e.selectedWidget=e.widgets[0])})])])],512),[[_,e.widgets[0]!==void 0]])],512),[[_,e.fullscreen===!0]]),O(i("div",null,[i("div",ul,[l(F,{color:"secondary",icon:"mdi-plus-circle",label:e.$t("Add Widget"),onClick:e.addWidget,style:{margin:"auto 0"}},null,8,["label","onClick"]),l(g,{dense:"",type:"switch",inline:"",label:e.$t("Height of all widgets equal to page height (no scrollbars)"),id:e.id+"FitPageHeight",onOnChange:e.onChange,value:e.widgetConfig[e.id+"FitPageHeight"]||!1,style:{margin:"auto 0 auto 16px"}},null,8,["label","id","onOnChange","value"]),O(l(g,{set:e.rowHeight=parseInt(e.widgetConfig[e.id+"FitPageHeight"]!==!0&&e.widgetConfig[e.id+"WidgetHeight"])||50,dense:"",type:"number",min:10,label:e.$t("Widget height")+" ("+e.$t("in pixels")+")",id:e.id+"WidgetHeight",onOnChange:e.onChange,value:e.widgetConfig[e.id+"WidgetHeight"]||50,style:{margin:"auto 0 auto 16px"}},null,8,["set","label","id","onOnChange","value"]),[[_,e.widgetConfig[e.id+"FitPageHeight"]!==!0]]),l(g,{set:e.gapSize=parseInt(e.widgetConfig[e.id+"GapSize"]||5),dense:"",type:"number",min:0,label:e.$t("Widget gaps")+" ("+e.$t("in pixels")+")",id:e.id+"GapSize",onOnChange:e.onChange,value:e.widgetConfig[e.id+"GapSize"]||5,style:{margin:"auto 0 auto 16px"}},null,8,["set","label","id","onOnChange","value"])]),l(M),i("div",rl,[l(o,{onLayoutUpdated:e.setWidgets,layout:e.widgets,"onUpdate:layout":u[3]||(u[3]=s=>e.widgets=s),"row-height":e.rowHeight,margin:[e.gapSize,e.gapSize],"use-css-transforms":!0,responsive:!1,preventCollision:!1,style:{"min-height":"50px"}},{default:t(()=>[(v(!0),S(N,null,J(e.widgets,(s,D)=>(v(),W($,{key:s.i,ref_for:!0,ref:"gridItemElements",x:s.x,y:s.y,w:s.w,h:s.h,i:s.i,class:Y(["grid-item tooltip-widget",{"rounded-borders":e.widgetEdges!==!0}]),onResized:e.onResized},{default:t(()=>[l(de,{target:".tooltip-widget"},{default:t(()=>[C(d(e.getWidgetsData(s.items)),1)]),_:2},1024),i("div",cl,[i("div",gl,[i("span",{class:Y("sort-"+D)},"[ "+d(D)+" ]",3),pl,l(de,{target:".sort-"+D},{default:t(()=>[C(d(e.$t("Responsive Position"))+": "+d(D),1)]),_:2},1032,["target"]),C(" "+d(e.$t("Position")+": "+s.x+"x * "+s.y+"y")+" ",1),e.widgetSizes[s.i]?(v(),S("span",ml,"\xA0- "+d(e.$t("Size")+": "+s.w+"w ("+e.widgetSizes[s.i].width+"%) * "+s.h+"h ("+e.widgetSizes[s.i].height+"px)"),1)):R("",!0)]),i("div",vl,[l(g,{class:"q-ma-none",type:"button",round:"",icon:"mdi-pencil",tooltip:e.$t("edit"),onClick:ee(n=>e.selectedWidget=s,["stop"])},null,8,["tooltip","onClick"]),l(g,{class:"q-ma-none",type:"button",round:"",icon:"mdi-content-copy",tooltip:e.$t("copy"),items:e.copyMenu,onOnSelect:e.copyWidget,id:s.i,denseMenu:""},null,8,["tooltip","items","onOnSelect","id"]),l(g,{class:"q-ma-none",type:"button",round:"",icon:"mdi-delete",tooltip:e.$t("delete"),color:"negative",onClick:ee(n=>e.deleteWidget(s.i),["stop"])},null,8,["tooltip","onClick"])])]),i("div",fl,[C(d(e.getWidgetsData(s.items))+" ",1),l(de,null,{default:t(()=>[C(d(e.getWidgetsData(s.items)),1)]),_:2},1024)])]),_:2},1032,["x","y","w","h","i","class","onResized"]))),128)),i("div",{class:"grid-spacer",style:Z({bottom:-3*e.rowHeight+"px",height:3*e.rowHeight+"px"})},null,4)]),_:1},8,["onLayoutUpdated","layout","row-height","margin"])])],512),[[_,e.fullscreen!==!0]])])]),_:1},8,["model-value","disable"])])}var yl=oe(nl,[["render",hl]]);const bl=te({name:"TabSection",props:["pageId","tabId"],components:{WidgetSection:yl},setup(e){A.dev("DEBUG","TabSection","setup()");const u=ne(),r=j=>{A.dev("DEBUG","TabSection","onChange",j);let a=j.value;try{a=a&&j.json!==void 0&&a.indexOf("{")>-1&&a.indexOf("}")>-1?JSON.parse(a):a}catch(p){console.warn(j.value,p)}u.editTab({pageId:e.pageId,tabId:e.tabId,key:j.id,val:a})},E=B(()=>(u.layout.find(p=>p.id===e.pageId)||{}).tabs.find(p=>p.id===e.tabId)||{}),P=B(()=>E.value.title?typeof E.value.title=="string"?E.value.title:E.value.title.default||Object.values(E.value.title)[0]:"");return{onChange:r,tab:E,tabTitle:P}}}),Cl={style:{padding:"0 8px"}},$l={class:"text-h6 primary q-ma-sm"},wl={class:"row"},Sl={class:"col"},kl={class:"col"},Ol={class:"row"},Il={class:"col"},Wl={class:"col"},_l={class:"row"},Dl={class:"col"},Tl={class:"col"},El={class:"row"},Pl={class:"col-2"},Ll={class:"col"},zl={class:"text-h6 primary q-ma-sm",style:{"margin-top":"24px"}};function jl(e,u,r,E,P,j){const a=T("inputs"),p=T("widget-section");return v(),S("div",Cl,[i("div",$l,d(e.$t("Tab"))+": "+d(e.tabTitle)+" ("+d(e.$t("ID")+": "+e.tab.id)+")",1),i("div",wl,[i("div",Sl,[l(a,{json:"",onOnChange:e.onChange,id:"icon",label:e.$t("Tab")+" "+e.$t("Icon"),value:e.tab.icon||"",icon:e.tab.icon},null,8,["onOnChange","label","value","icon"])]),i("div",kl,[l(a,{json:"",onOnChange:e.onChange,id:"title",label:e.$t("Tab")+" "+e.$t("Title"),value:e.tab.title||""},null,8,["onOnChange","label","value"])])]),i("div",Ol,[i("div",Il,[l(a,{json:"",onOnChange:e.onChange,id:"iconStyle",label:"config#Devices#iconStyle#label",info:"config#Devices#iconStyle#info",value:e.tab.iconStyle},null,8,["onOnChange","value"])]),i("div",Wl,[l(a,{json:"",onOnChange:e.onChange,id:"bodyStyle",label:"config#Devices#bodyStyle#label",info:"config#Devices#bodyStyle#info",value:e.tab.bodyStyle},null,8,["onOnChange","value"])])]),i("div",_l,[i("div",Dl,[l(a,{json:"",onOnChange:e.onChange,id:"iconSelectedStyle",label:"config#Layout#iconSelectedStyle#label",info:"config#Layout#iconSelectedStyle#info",value:e.tab.iconSelectedStyle},null,8,["onOnChange","value"])]),i("div",Tl,[l(a,{json:"",onOnChange:e.onChange,id:"bodySelectedStyle",label:"config#Layout#bodySelectedStyle#label",info:"config#Layout#bodySelectedStyle#info",value:e.tab.bodySelectedStyle},null,8,["onOnChange","value"])])]),i("div",El,[i("div",Pl,[l(a,{type:"switch",inline:"",label:e.$t("Tab")+" "+e.$t("Fullscreen"),id:"fullscreen",onOnChange:e.onChange,value:e.tab.fullscreen||!1,style:{margin:"auto 0 auto 16px"}},null,8,["label","onOnChange","value"])]),i("div",Ll,[l(a,{type:"switch",inline:"",label:e.$t("Widgets edges (round or angled)"),id:"widgetEdges",onOnChange:e.onChange,value:e.tab.widgetEdges||!1,style:{margin:"auto 0 auto 16px"}},null,8,["label","onOnChange","value"])])]),i("div",zl,d(e.$t("Widgets of tab"))+": "+d(e.tabTitle),1),l(p,{pageId:e.pageId,tabId:e.tabId,id:"desktop",label:"Desktop",icon:"mdi-monitor",fullscreen:e.tab.fullscreen||!1,widgetEdges:e.tab.widgetEdges||!1,widgetConfig:e.tab.widgetConfig||{},items:e.tab.widgetsDesktop},null,8,["pageId","tabId","fullscreen","widgetEdges","widgetConfig","items"]),l(p,{pageId:e.pageId,tabId:e.tabId,id:"smartphone",label:"Smartphone",icon:"mdi-cellphone",fullscreen:e.tab.fullscreen||!1,widgetEdges:e.tab.widgetEdges||!1,widgetConfig:e.tab.widgetConfig||{},items:e.tab.widgetsSmartphone},null,8,["pageId","tabId","fullscreen","widgetEdges","widgetConfig","items"])])}var Bl=oe(bl,[["render",jl]]);const ql=te({name:"DrawerSection",props:["pageId"],components:{Draggable:fe,TabSection:Bl},setup(e,{emit:u}){var le;A.dev("DEBUG","DrawerSection","setup()");const r=ne(),E=B(()=>{const f=[];return r.getPagesWithoutDeletions.forEach(b=>{b.id!==e.pageId&&f.push({id:b.id,label:b.title,...b})}),f}),P=B(()=>r.layout.find(f=>f.id===e.pageId)||{}),j=B(()=>typeof P.value.title=="string"?P.value.title:P.value.title.default||Object.values(P.value.title)[0]),a=B({get(){return(P.value.tabs||[]).map(b=>(b._hasIconBinding=typeof b.icon=="object",b._hasTitleBinding=typeof b.title=="object",b))},set(f){r.setTabs({pageId:e.pageId,tabs:f})}}),p=r.selectedTab?r.selectedTab:((le=P.value.tabs)==null?void 0:le[0])||{},g=H(p.id||null),$=H({}),o=(f,b)=>{A.dev("DEBUG","DrawerSection","setRef",f,b),$.value[".tabOptions-move-"+f.id]=b};let s=null;ce(()=>e.pageId,()=>{var f,b;A.dev("DEBUG","DrawerSection","watch",e.pageId),g.value=s||((b=(f=a.value)==null?void 0:f[0])==null?void 0:b.id)||null,s=null});const D=()=>{r.addTab({pageId:e.pageId}),g.value=a.value[a.value.length-1].id},n=(f,b=!1)=>{r.addTab({pageId:e.pageId,tabId:f,copyWidgets:b}),g.value=a.value[a.value.length-1].id},L=(f,b)=>{r.moveTab({pageId:e.pageId,tabId:f,destinationPageId:b}),g.value=f,s=f,u("onSelectPage",r.layout.find(c=>c.id===b)||{})},m=f=>{if(r.deleteTab({pageId:e.pageId,tabId:f}),g.value===f){const b=a.value.find(c=>c._deleted!==!0);g.value=b?b.id:null}},I=f=>{r.restoreTab({pageId:e.pageId,tabId:f}),g.value=f},V=f=>{A.dev("DEBUG","DrawerSection","onChange",f);let b=f.value;try{b=b&&f.json!==void 0&&f.value.indexOf("{")>-1&&f.value.indexOf("}")>-1?JSON.parse(f.value):f.value}catch(c){console.warn(f.value,c)}r.editDrawerItem({itemId:e.pageId,key:f.id,val:b})};return{...he(),onChange:V,setRef:o,pages:E,page:P,pageTitle:j,tabs:a,tabOptions:$,selectedTab:g,addTab:D,copyTab:n,moveTab:L,deleteTab:m,restoreTab:I}}}),Al={class:"text-h6 primary q-ma-sm"},Ql={class:"row"},Fl={class:"col"},Ul={class:"col"},Hl={class:"row"},Vl={class:"col"},Gl={class:"col"},Ml={class:"row"},Rl={class:"col"},Nl={class:"col"},Jl={key:0},Yl={class:"text-h6 primary q-ma-sm"},Kl={class:"q-ma-sm row"},Zl={key:0},Xl={key:1},xl={key:2},et={key:3};function lt(e,u,r,E,P,j){const a=T("inputs"),p=T("icon"),g=T("draggable"),$=T("tab-section");return v(),S("div",{key:e.page.id},[i("div",Al,d(e.$t("Page"))+": "+d(e.pageTitle)+" (ID: "+d(e.page.id)+")",1),i("div",Ql,[i("div",Fl,[l(a,{json:"",onOnChange:e.onChange,id:"icon",label:e.$t("Icon"),value:e.page.icon||"",icon:e.page.icon},null,8,["onOnChange","label","value","icon"])]),i("div",Ul,[l(a,{json:"",onOnChange:e.onChange,id:"title",label:e.$t("Title"),value:e.page.title||""},null,8,["onOnChange","label","value"])])]),i("div",Hl,[i("div",Vl,[l(a,{json:"",onOnChange:e.onChange,id:"iconStyle",label:"config#Devices#iconStyle#label",info:"config#Devices#iconStyle#info",value:e.page.iconStyle},null,8,["onOnChange","value"])]),i("div",Gl,[l(a,{json:"",onOnChange:e.onChange,id:"bodyStyle",label:"config#Devices#bodyStyle#label",info:"config#Devices#bodyStyle#info",value:e.page.bodyStyle},null,8,["onOnChange","value"])])]),i("div",Ml,[i("div",Rl,[l(a,{json:"",onOnChange:e.onChange,id:"iconSelectedStyle",label:"config#Layout#iconSelectedStyle#label",info:"config#Layout#iconSelectedStyle#info",value:e.page.iconSelectedStyle},null,8,["onOnChange","value"])]),i("div",Nl,[l(a,{json:"",onOnChange:e.onChange,id:"bodySelectedStyle",label:"config#Layout#bodySelectedStyle#label",info:"config#Layout#bodySelectedStyle#info",value:e.page.bodySelectedStyle},null,8,["onOnChange","value"])])]),!e.page.type||e.page.type==="page"?(v(),S("div",Jl,[i("div",Yl,d(e.$t("Tabs of page"))+": "+d(e.pageTitle),1),i("div",Kl,[l(F,{color:"secondary",icon:"mdi-plus-circle",label:e.$t("Add Tab"),onClick:e.addTab},null,8,["label","onClick"]),l(a,{type:"switch",inline:"",label:e.$t("Do not show Tab Labels (only Icons)"),id:"hideLabels",onOnChange:e.onChange,value:e.page.hideLabels||!1,style:{margin:"auto 0 auto 16px"}},null,8,["label","onOnChange","value"])]),l(Pe,{modelValue:e.selectedTab,"onUpdate:modelValue":u[4]||(u[4]=o=>e.selectedTab=o),"inline-label":"","outside-arrows":"","mobile-arrows":"",class:"bg-primary text-white full-width",align:"left"},{default:t(()=>[l(g,ve({class:"list-group",tag:"div","component-data":{style:"display: flex; flex-wrap: wrap",tag:"div",type:"transition",name:e.drag?null:"flip-list"},modelValue:e.tabs,"onUpdate:modelValue":u[1]||(u[1]=o=>e.tabs=o)},e.dragOptions,{onStart:u[2]||(u[2]=o=>e.drag=!0),onEnd:u[3]||(u[3]=o=>e.drag=!1),"item-key":"id",handle:".dragndrop"}),{item:t(({element:o})=>[(v(),W(Ee,{key:o.id,name:o.id,style:Z({backgroundColor:o.backgroundColor}),class:Y({"q-px-xs":!0,rowDeleted:o._deleted===!0}),disable:o._deleted===!0},{default:t(()=>[l(p,{size:"sm",name:"mdi-drag-vertical",class:"dragndrop",color:o.color},null,8,["color"]),o._hasIconBinding?(v(),S("div",Zl,[l(ae,{flat:"",dense:""},{label:t(()=>[l(p,{size:"xs",name:o.icon.default||Object.values(o.icon)[0],class:"tabIcon q-mr-xs",color:o.iconColor||o.color},null,8,["name","color"])]),default:t(()=>[l(x,null,{default:t(()=>[(v(!0),S(N,null,J(o.icon,(s,D)=>(v(),W(Q,{key:D},{default:t(()=>[l(y,{avatar:""},{default:t(()=>[l(p,{size:"xs",name:s,class:"tabIcon q-mr-xs",color:o.iconColor||o.color},null,8,["name","color"])]),_:2},1024),l(y,null,{default:t(()=>[l(q,null,{default:t(()=>[C(d(s),1)]),_:2},1024),l(q,{caption:""},{default:t(()=>[C(d(D),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:2},1024)])):(v(),S("div",Xl,[l(p,{size:"xs",name:o.icon,class:"tabIcon q-mr-xs",color:o.iconColor||o.color},null,8,["name","color"])])),o._hasTitleBinding?(v(),S("div",xl,[l(ae,{flat:"",dense:"",label:o.title.default||Object.values(o.title)[0]},{default:t(()=>[l(x,null,{default:t(()=>[(v(!0),S(N,null,J(o.title,(s,D)=>(v(),W(Q,{key:D},{default:t(()=>[l(y,null,{default:t(()=>[l(q,null,{default:t(()=>[C(d(s),1)]),_:2},1024),l(q,{caption:""},{default:t(()=>[C(d(D),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:2},1032,["label"])])):(v(),S("div",et,[O(i("div",{class:"q-tab__label",style:Z({color:o.color})},d(o.title),5),[[_,e.page.hideLabels!==!0]])])),i("div",{class:"row items-center no-wrap",style:Z([{"margin-left":"16px"},{color:o.color}])},[l(M,{vertical:"",class:"q-ma-xs"}),O(l(a,{round:"",type:"button",icon:"mdi-restore",tooltip:e.$t("restore"),color:"positive",onClick:s=>e.restoreTab(o.id)},null,8,["tooltip","onClick"]),[[_,o._deleted===!0]]),O(l(F,{class:Y("tabOptions-"+o.id),dense:"",flat:"",round:"",color:"white",icon:"mdi-dots-vertical",onClick:u[0]||(u[0]=ee(()=>{},["stop"]))},null,8,["class"]),[[_,o._deleted!==!0]]),l(me,{target:".tabOptions-"+o.id,anchor:"bottom left",self:"top left","auto-close":""},{default:t(()=>[O(l(Q,{clickable:"",onClick:s=>e.copyTab(o.id,!0)},{default:t(()=>[l(y,{avatar:""},{default:t(()=>[l(p,{size:"xs",name:"mdi-content-copy"})]),_:1}),l(y,null,{default:t(()=>[C(d(e.$t("copy")),1)]),_:1})]),_:2},1032,["onClick"]),[[_,o._deleted!==!0]]),O(l(Q,{clickable:"",onClick:s=>e.copyTab(o.id)},{default:t(()=>[l(y,{avatar:""},{default:t(()=>[l(p,{size:"xs",name:"mdi-content-duplicate"})]),_:1}),l(y,null,{default:t(()=>[C(d(e.$t("duplicate")),1)]),_:1})]),_:2},1032,["onClick"]),[[_,o._deleted!==!0]]),O(l(Q,{class:Y("tabOptions-move-"+o.id),onMouseover:s=>e.tabOptions[".tabOptions-move-"+o.id].show(),clickable:""},{default:t(()=>[l(y,{avatar:""},{default:t(()=>[l(p,{size:"xs",name:"mdi-folder-move-outline"})]),_:1}),l(y,null,{default:t(()=>[C(d(e.$t("move")),1)]),_:1}),l(y,{side:""},{default:t(()=>[l(p,{name:"mdi-chevron-right"})]),_:1}),l(me,{ref:s=>e.setRef(o,s),anchor:"top end",self:"top start","auto-close":""},{default:t(()=>[l(x,null,{default:t(()=>[(v(!0),S(N,null,J(e.pages,s=>(v(),W(Q,{key:s.id,clickable:"",onClick:D=>e.moveTab(o.id,s.id)},{default:t(()=>[l(y,{avatar:""},{default:t(()=>[l(p,{size:"xs",name:s.icon},null,8,["name"])]),_:2},1024),l(y,null,{default:t(()=>[C(d(s.title),1)]),_:2},1024),l(y,{side:""})]),_:2},1032,["onClick"]))),128))]),_:2},1024)]),_:2},1536)]),_:2},1032,["class","onMouseover"]),[[_,o._deleted!==!0&&e.pages.length>0]]),l(Q,{clickable:"",style:{color:"#fff",background:"var(--q-negative)"},onClick:s=>e.deleteTab(o.id)},{default:t(()=>[l(y,{avatar:""},{default:t(()=>[l(p,{size:"xs",name:"mdi-delete"})]),_:1}),l(y,null,{default:t(()=>[C(d(e.$t("delete")),1)]),_:1})]),_:2},1032,["onClick"])]),_:2},1032,["target"])],4)]),_:2},1032,["name","style","class","disable"]))]),_:1},16,["component-data","modelValue"])]),_:1},8,["modelValue"]),l(ze,{modelValue:e.selectedTab,"onUpdate:modelValue":u[5]||(u[5]=o=>e.selectedTab=o),animated:"","keep-alive":"",class:"border"},{default:t(()=>[(v(!0),S(N,null,J(e.tabs,o=>(v(),W(Le,{key:o.id,name:o.id,style:{padding:"16px 0"},class:"body"},{default:t(()=>[l($,{pageId:e.page.id,tabId:o.id},null,8,["pageId","tabId"])]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"])])):R("",!0)])}var tt=oe(ql,[["render",lt]]);const nt=te({name:"LayoutsPage",components:{Draggable:fe,DrawerSection:tt,JsonEditor:Ae},setup(){A.dev("DEBUG","LayoutsPage","setup()");const e=re(),u=je(),r=ne(),E=[{id:"copy",icon:"mdi-content-copy",label:e.t("copy")},{id:"duplicate",icon:"mdi-content-duplicate",label:e.t("duplicate")}],P=m=>!m._error&&r.set({[m.id]:JSON.parse(m.value)}),j=m=>r.set({["settings."+m.id]:m.value}),a=B({get(){return(r.getLayout||[]).map(I=>(I._hasIconBinding=typeof I.icon=="object",I._hasTitleBinding=typeof I.title=="object",I))},set(m){r.setLayout(m)}}),p=H(r.selectedPage?r.selectedPage:r.getLayout.find(m=>m.type==="page"&&m._deleted!==!0)),g=m=>{p.value=m},$=()=>r.addDrawerItem({type:"divider"}),o=()=>r.addDrawerItem({type:"header",title:e.t("New Header")}),s=()=>{r.addDrawerItem({type:"page",icon:"mdi-file",title:e.t("New Page"),tabs:[]}),p.value=a.value[a.value.length-1],r.addTab({pageId:p.value.id})},D=m=>{const I=m.id;r.copyDrawerItem({itemId:I,copyWidgets:m.val==="copy"});const V=a.value[a.value.length-1];V.type==="page"&&(p.value=V)},n=m=>{r.deleteDrawerItem({itemId:m}),p.value.id===m&&(p.value=a.value.find(I=>I.type==="page"&&I._deleted!==!0))},L=m=>{r.restoreDrawerItem({itemId:m});const I=a.value.find(V=>V.id===m);I.type==="page"&&(p.value=I)};return{...he(),copyMenu:E,json:B(()=>r.layout),settings:B(()=>r.settings),proWarning:B(()=>!Be.isPro()&&a.value.filter(m=>m.type==="page").length>1),pageHeight:B(()=>u.pageHeight),pagesWithoutDeletionsCount:B(()=>r.getPagesWithoutDeletions.length),onChangeSettings:j,onJsonEditor:P,onSelectPage:g,selectedPage:p,pages:a,addDivider:$,addHeader:o,addPage:s,copyItem:D,deleteItem:n,restoreItem:L}}}),ot={class:"full-height LayoutsPage"},it={class:"row no-wrap"},at={class:"row",style:{"margin-bottom":"54px"}},st={class:"col-3"},dt={class:"text-h6 primary q-ma-sm"},ut={key:0},rt={key:1},ct={key:1},gt={key:2},pt={class:"row items-center"},mt={class:"col-9"};function vt(e,u,r,E,P,j){const a=T("alert"),p=T("icon"),g=T("inputs"),$=T("draggable"),o=T("paper"),s=T("drawer-section"),D=T("json-editor");return v(),S("div",ot,[i("div",it,[l(Ce,{class:"paper",style:{"min-height":"56px"}},{default:t(()=>[l(be,{shrink:""},{default:t(()=>[C(d(e.$t("Layout")),1)]),_:1})]),_:1})]),O(i("div",at,[i("div",st,[l(o,{class:"q-pa-sm"},{default:t(()=>[i("div",dt,d(e.$t("Drawer")+" / "+e.$t("Pages")),1),l(qe,null,{default:t(()=>[l(F,{color:"primary",icon:"mdi-plus-circle",label:e.$t("Add Page"),onClick:e.addPage},null,8,["label","onClick"]),l(F,{color:"secondary",icon:"mdi-plus-circle",label:e.$t("Add Header"),onClick:e.addHeader},null,8,["label","onClick"]),l(F,{color:"secondary",icon:"mdi-plus-circle",label:e.$t("Add Divider"),onClick:e.addDivider},null,8,["label","onClick"])]),_:1}),O(l(a,{style:{margin:"16px 0 0 0"}},{default:t(()=>[C(d(e.$t("Only a single page is allowed without Pro. A single page may hold infinite tabs though."))+".",1)]),_:1},512),[[_,e.proWarning]]),l(M,{style:{margin:"16px 0"}}),l(x,null,{default:t(()=>[l($,ve({class:"list-group",tag:"div","component-data":{tag:"div",type:"transition",name:e.drag?null:"flip-list"},modelValue:e.pages,"onUpdate:modelValue":u[0]||(u[0]=n=>e.pages=n)},e.dragOptions,{onStart:u[1]||(u[1]=n=>e.drag=!0),onEnd:u[2]||(u[2]=n=>e.drag=!1),"item-key":"id",handle:".dragndrop"}),{item:t(({element:n})=>[(v(),W(Q,{key:n.id,clickable:!n.type||n.type==="page"||n.type==="header",onClick:L=>e.onSelectPage(n),class:Y({rowDeleted:n._deleted===!0,selected:e.selectedPage.id===n.id}),disable:n._deleted===!0},{default:t(()=>[l(y,{avatar:"",center:""},{default:t(()=>[l(p,{size:"sm",name:"mdi-drag-horizontal",class:"dragndrop"})]),_:1}),!n.type||n.type==="page"?(v(),W(y,{key:0,avatar:"",center:"",style:Z({backgroundColor:n.backgroundColor})},{default:t(()=>[n._hasIconBinding?(v(),S("div",ut,[l(ae,{flat:"",dense:""},{label:t(()=>[l(p,{name:n.icon.default||Object.values(n.icon)[0],color:e.selectedPage.id===n.id?"white":"primary",styles:{color:n.iconColor}},null,8,["name","color","styles"])]),default:t(()=>[l(x,null,{default:t(()=>[(v(!0),S(N,null,J(n.icon,(L,m)=>(v(),W(Q,{key:m},{default:t(()=>[l(y,{avatar:""},{default:t(()=>[l(p,{size:"xs",name:L,class:"pageIcon q-mr-xs",color:n.iconColor||n.color},null,8,["name","color"])]),_:2},1024),l(y,null,{default:t(()=>[l(q,null,{default:t(()=>[C(d(L),1)]),_:2},1024),l(q,{caption:""},{default:t(()=>[C(d(m),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:2},1024)])):(v(),S("div",rt,[l(p,{name:n.icon,color:e.selectedPage.id===n.id?"white":"primary",styles:{color:n.iconColor}},null,8,["name","color","styles"])]))]),_:2},1032,["style"])):R("",!0),l(y,{class:Y({itemDeleted:n._deleted===!0}),style:Z({backgroundColor:n.backgroundColor,color:n.color})},{default:t(()=>[n.type==="divider"?(v(),W(M,{key:0})):R("",!0),n._hasTitleBinding?(v(),S("div",ct,[l(ae,{flat:"",dense:"",label:n.title.default||Object.values(n.title)[0]},{default:t(()=>[l(x,null,{default:t(()=>[(v(!0),S(N,null,J(n.title,(L,m)=>(v(),W(Q,{key:m},{default:t(()=>[l(y,null,{default:t(()=>[l(q,null,{default:t(()=>[C(d(L),1)]),_:2},1024),l(q,{caption:""},{default:t(()=>[C(d(m),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:2},1032,["label"])])):(v(),S("div",gt,[l(q,{class:Y({header:n.type==="header"}),style:Z({color:n.color})},{default:t(()=>[C(d(n.title),1)]),_:2},1032,["class","style"])]))]),_:2},1032,["class","style"]),l(y,{side:"",class:Y({rowDeleted:n._deleted===!0,selected:e.selectedPage.id===n.id})},{default:t(()=>[i("div",pt,[n.type==="page"?O((v(),W(g,{key:0,type:"button",round:"",icon:"mdi-content-copy",tooltip:e.$t("copy"),items:e.copyMenu,onOnSelect:e.copyItem,id:n.id,denseMenu:""},null,8,["tooltip","items","onOnSelect","id"])),[[_,n.type!=="divider"&&n._deleted!==!0]]):O((v(),W(g,{key:1,type:"button",round:"",icon:"mdi-content-copy",tooltip:e.$t("copy"),onClick:ee(L=>e.copyItem({id:n.id}),["stop"])},null,8,["tooltip","onClick"])),[[_,n.type!=="divider"&&n._deleted!==!0]]),O(l(g,{type:"button",round:"",icon:"mdi-delete",tooltip:e.$t("delete"),color:"negative",onClick:ee(L=>e.deleteItem(n.id),["stop"])},null,8,["tooltip","onClick"]),[[_,(n.type&&n.type!=="page"||(!n.type||n.type==="page")&&e.pagesWithoutDeletionsCount>1)&&n._deleted!==!0]]),O(l(g,{type:"button",round:"",icon:"mdi-restore",tooltip:e.$t("restore"),color:"positive",onClick:ee(L=>e.restoreItem(n.id),["stop"]),class:"restore"},null,8,["tooltip","onClick"]),[[_,n._deleted===!0]])])]),_:2},1032,["class"])]),_:2},1032,["clickable","onClick","class","disable"]))]),_:1},16,["component-data","modelValue"]),l(M,{class:"q-my-sm"}),l(Q,null,{default:t(()=>[l(y,{avatar:"",center:""}),l(y,{avatar:"",center:""},{default:t(()=>[l(p,{name:"mdi-cog",color:"primary"})]),_:1}),l(y,null,{default:t(()=>[l(q,null,{default:t(()=>[C(d(e.$t("Configuration"))+" & "+d(e.$t("Help")),1)]),_:1}),l(q,{caption:""},{default:t(()=>[C(d(e.$t("show in sidebar")),1)]),_:1})]),_:1}),l(y,{side:""},{default:t(()=>[l(g,{type:"Switch",inline:"",onOnChange:e.onChangeSettings,id:"drawerShowSettings",value:e.settings.drawerShowSettings},null,8,["onOnChange","value"])]),_:1})]),_:1}),l(Q,null,{default:t(()=>[l(y,{avatar:"",center:""}),l(y,{avatar:"",center:""},{default:t(()=>[l(p,{name:"mdi-menu",color:"primary"})]),_:1}),l(y,null,{default:t(()=>[l(q,null,{default:t(()=>[C(d(e.$t("Drawer")),1)]),_:1}),l(q,{caption:""},{default:t(()=>[C(d(e.$t("show button")),1)]),_:1})]),_:1}),l(y,{side:""},{default:t(()=>[l(g,{type:"Switch",inline:"",onOnChange:e.onChangeSettings,id:"drawerShowMenuButton",value:e.settings.drawerShowMenuButton},null,8,["onOnChange","value"])]),_:1})]),_:1})]),_:1})]),_:1})]),i("div",mt,[l(o,{class:"q-pa-sm"},{default:t(()=>[e.selectedPage&&e.selectedPage.id?(v(),W(s,{key:0,onOnSelectPage:e.onSelectPage,pageId:e.selectedPage.id},null,8,["onOnSelectPage","pageId"])):R("",!0)]),_:1})])],512),[[_,!e.settings.configExpertMode]]),O(l(o,{style:Z({height:e.pageHeight-66-16+"px"})},{default:t(()=>[l(D,{id:"layout",json:e.json,onOnChange:e.onJsonEditor},null,8,["json","onOnChange"])]),_:1},8,["style"]),[[_,e.settings.configExpertMode]])])}var _t=oe(nt,[["render",vt]]);export{_t as default};
