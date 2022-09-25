import{Q as Se}from"./QToolbarTitle-8340e43a.js";import{Q as ke}from"./QToolbar-1a865a70.js";import{a4 as ie,cq as F,bM as ve,cn as ae,k as R,aY as me,bQ as oe,Q as B,dc as Oe,dd as _e,bt as se,d6 as de,aG as q,ay as c,W as k,a2 as l,b1 as t,U as T,bT as ue,X as o,D as d,bD as he,bB as U,bU as N,b3 as E,bn as L,bP as We,I as G,aE as V,bF as Q,bG as y,bO as z,a1 as C,cN as Ie,bH as K,V as Z,bV as ye,bS as be,bW as Ce,aZ as De,as as Te,ct as ge,bp as le,A as Y,by as re,C as x,bw as $e,cv as Ee,cu as Pe,de as Le,df as ze,dg as je,cS as Be}from"./index-70f41d82.js";import{Q as ce}from"./QBtnDropdown-f0a26f50.js";import{J as qe}from"./json-editor-e5dc242c.js";import{Q as pe}from"./QTooltip-3913131f.js";import{Q as we}from"./QExpansionItem-c9ec275c.js";import{W as Ae}from"./WidgetPage-773c72d2.js";import{a as fe}from"./useDragDrop-aea4bcfd.js";import"./_commonjsHelpers-11654ec2.js";import"./QSlideTransition-e865bb4e.js";const Qe=ie({name:"WidgetPopup",props:["widget"],emits:["onClose","onSave"],components:{WidgetPage:Ae},setup(e,{emit:p}){F.dev("DEBUG","WidgetPopup","setup()");const v=ve(),S=ae(),M=[{label:v.t("top aligned"),value:"top"},{label:v.t("middle aligned"),value:"middle"},{label:v.t("bottom aligned"),value:"bottom"}],W=[{label:v.t("left aligned"),value:"left"},{label:v.t("center aligned"),value:"center"},{label:v.t("right aligned"),value:"right"},{label:v.t("fill full width"),value:"fill-width"}];let g={};Object.values(S.widgets).forEach(a=>{g[a.module]=g[a.module]||{label:a.module,widgets:[]},a._deleted!==!0&&g[a.module].widgets.push({...a,value:a.id,label:a.label?a.label+" "+(a.title?"("+a.title+")":""):a.title||""})}),g=Object.values(g);const r=R(g),m=R(null);me(()=>e.widget,a=>{F.dev("DEBUG","WidgetPopup","watch",a),m.value=a?oe({items:[],...a}):null});const n=B(()=>m.value.scaleToFitContents!==void 0?m.value.scaleToFitContents:!0),b=B(()=>m.value.alignmentVertical||"top"),s=B(()=>m.value.alignmentHorizontal||"center"),i=B(()=>m.value.allowFullscreen||!1),I=B(()=>m.value.items?m.value.items.map(a=>S.widgets[a]||{}):[]),$=(a,O)=>{F.dev("DEBUG","WidgetPopup","onFilter",a);let P=g;a&&(a=a.toLowerCase(),P=[],g.forEach(H=>{const A=[];H.widgets.forEach(j=>{(j.module&&j.module.toLowerCase().indexOf(a)!==-1||j.id&&j.id.toLowerCase().indexOf(a)!==-1||j.title&&j.title.toLowerCase().indexOf(a)!==-1||j.label&&j.label.toLowerCase().indexOf(a)!==-1)&&A.push(j)}),A.length>0&&P.push({label:H.label+" ("+A.length+")",widgets:A})})),O(()=>{r.value=P.sort((H,A)=>(H=H.label?H.label.toLowerCase():"",A=A.label?A.label.toLowerCase():"",H===A?0:H>A?1:-1))})},f=R(null);let _=!1;const J=a=>{F.dev("DEBUG","WidgetPopup","onChange",a),m.value[a.id]=a.value},ne=a=>{a&&_===!0&&w({id:f.value}),_=!1,f.value=null},te=()=>{m.value=null,p("onClose")},ee=()=>{p("onSave",m.value),te()},h=R(),w=a=>{m.value.items.push(a.id),h.value.hidePopup()};return{ScaleExceptions:Oe,AlignmentExceptions:_e,alignmentHorizontal:W,alignmentVertical:M,inputValueAlignmentHorizontal:s,inputValueAlignmentVertical:b,inputScaleToFitContents:n,inputValueAllowFullscreen:i,onChange:J,onClose:ne,onCancel:te,onSave:ee,onFilter:$,itemList:I,widgetListFiltered:r,selectedWidgetId:f,container:m,addWidgetElement:h,assignWidget:w,addWidget:()=>{_=!0,f.value=de()},editWidget:a=>{f.value=a},deleteWidget:a=>{confirm(v.t("Really delete item?"))&&m.value.items.splice(m.value.items.indexOf(a),1)}}}}),He={class:"text-h6"},Fe={class:"text-h7 primary q-ma-sm"},Ue={class:"row"},Me={class:"col"},Ge={class:"col-1",style:{"text-align":"center","line-height":"56px"}},Ve={class:"col-3",style:{"text-align":"center","line-height":"56px"}},Re={key:0},Ne={class:"row items-center"},Je={class:"text-h7 primary q-ma-sm",style:{"margin-top":"16px"}},Ye={class:"row q-pb-xs"},Ze={class:"col"},Ke={class:"col"},Xe={class:"col"},xe={class:"col"};function el(e,p,v,S,M,W){const g=q("widget-page"),r=q("icon"),m=q("inputs");return c(),k("div",null,[l(g,{onOnClose:e.onClose,widgetId:e.selectedWidgetId},null,8,["onOnClose","widgetId"]),l(Ce,{"model-value":e.container!==null,persistent:""},{default:t(()=>[e.container?(c(),T(be,{key:0,class:"column",style:{width:"1200px","max-width":"90vw"}},{default:t(()=>[l(ue,{class:"row items-center"},{default:t(()=>[o("div",He,d(e.$t("Assign Widget to Box")),1),l(he),l(U,{flat:"",round:"",color:"grey",icon:"close",onClick:e.onCancel},null,8,["onClick"])]),_:1}),l(N),l(ue,{class:"col defaultPadding-2 q-pt-none scroll body"},{default:t(()=>[o("div",Fe,d(e.$t("Widget")),1),l(N,{style:{margin:"0 0 8px 0"}}),E(o("div",Ue,[o("div",Me,[l(We,{onFilter:e.onFilter,ref:"addWidgetElement",label:e.$t("Assign Widget"),options:e.widgetListFiltered,"model-value":"","use-input":"","stack-label":"",style:{margin:"0 8px"}},{option:t(n=>[l(we,{"expand-separator":"","header-class":"text-weight-bold",label:n.opt.label},{default:t(()=>[(c(!0),k(G,null,V(n.opt.widgets,b=>E((c(),T(Q,{key:b.id,clickable:"",onClick:s=>e.assignWidget(b)},{default:t(()=>[l(y,null,{default:t(()=>[b.label?(c(),T(z,{key:0,class:"q-ml-md"},{default:t(()=>[C(d(b.label),1)]),_:2},1024)):(c(),T(z,{key:1,class:"q-ml-md"},{default:t(()=>[o("em",null,"("+d(e.$t("no title"))+")",1)]),_:1})),l(z,{class:"q-ml-md",caption:""},{default:t(()=>[C(d(b.id),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[Ie]])),128))]),_:2},1032,["label"])]),_:1},8,["onFilter","label","options"])]),o("div",Ge,d(e.$t("or")),1),o("div",Ve,[l(U,{color:"primary",icon:"mdi-plus-circle",label:e.$t("Add Widget"),onClick:e.addWidget},null,8,["label","onClick"])])],512),[[L,e.itemList.length===0]]),l(K,null,{default:t(()=>[(c(!0),k(G,null,V(e.itemList,(n,b)=>(c(),T(Q,{key:n.id+"-"+b,class:"list-group-item"},{default:t(()=>[n.icon?(c(),T(y,{key:0,avatar:""},{default:t(()=>[l(r,{color:"primary",name:n.icon},null,8,["name"])]),_:2},1024)):Z("",!0),l(y,null,{default:t(()=>[l(z,null,{default:t(()=>[C(d(n.label||n.title||e.$t("no title"))+" ",1),n._deleted?(c(),k("em",Re,"[ "+d(e.$t("deleted"))+" ]",1)):Z("",!0)]),_:2},1024),l(z,{caption:""},{default:t(()=>[C("Widget ID: "+d(n.id)+", Module: "+d(n.module),1)]),_:2},1024)]),_:2},1024),l(y,{side:""},{default:t(()=>[o("div",Ne,[n._deleted!==!0?(c(),T(U,{key:0,size:"sm",flat:"",round:"",onClick:s=>e.editWidget(n.id),icon:"mdi-pencil"},null,8,["onClick"])):Z("",!0),l(U,{size:"sm",flat:"",round:"",onClick:s=>e.deleteWidget(n.id),icon:"mdi-delete",color:"negative"},null,8,["onClick"])])]),_:2},1024)]),_:2},1024))),128))]),_:1}),o("div",Je,d(e.$t("Options")),1),l(N,{style:{margin:"0 0 8px 0"}}),o("div",Ye,[o("div",Ze,[l(m,{icon:"mdi-resize",onOnChange:e.onChange,id:"allowFullscreen",label:"Allow fullscreen",type:"switch",value:e.inputValueAllowFullscreen},null,8,["onOnChange","value"])]),o("div",Ke,[E(l(m,{icon:"mdi-fit-to-page",onOnChange:e.onChange,id:"scaleToFitContents",label:"Scale contents to fit widget",type:"switch",value:e.inputScaleToFitContents},null,8,["onOnChange","value"]),[[L,e.itemList[0]&&e.ScaleExceptions.includes(e.itemList[0].module)===!1]])]),o("div",Xe,[E(l(m,{icon:"mdi-arrow-split-horizontal",onOnSelect:e.onChange,id:"alignmentVertical",label:"Vertical alignment",type:"select",options:e.alignmentVertical,value:e.inputValueAlignmentVertical},null,8,["onOnSelect","options","value"]),[[L,e.itemList[0]&&e.AlignmentExceptions.includes(e.itemList[0].module)===!1]])]),o("div",xe,[E(l(m,{icon:"mdi-arrow-split-vertical",onOnSelect:e.onChange,id:"alignmentHorizontal",label:"Horizontal alignment",type:"select",options:e.alignmentHorizontal,value:e.inputValueAlignmentHorizontal},null,8,["onOnSelect","options","value"]),[[L,e.itemList[0]&&e.AlignmentExceptions.includes(e.itemList[0].module)===!1]])])])]),_:1}),l(N),l(ye,{align:"right"},{default:t(()=>[l(U,{flat:"",label:e.$t("Cancel"),color:"negative",onClick:e.onCancel},null,8,["label","onClick"]),l(U,{flat:"",label:e.$t("Apply"),color:"primary",onClick:e.onSave},null,8,["label","onClick"])]),_:1})]),_:1})):Z("",!0)]),_:1},8,["model-value"])])}var ll=se(Qe,[["render",el]]);const tl=ie({name:"WidgetSection",props:["pageId","tabId","id","label","icon","fullscreen","widgetEdges","widgetConfig","items"],components:{WidgetPopup:ll},setup(e){F.dev("DEBUG","WidgetSection","setup()");const p=ve(),v=ae(),S=[{id:"copy",icon:"mdi-content-copy",label:p.t("copy")},{id:"duplicate",icon:"mdi-content-duplicate",label:p.t("duplicate")}],M=B(()=>e.id!=="desktop"&&e.widgetConfig[e.id+"SameAs"]!=="specific-layout"),W=B(()=>[{label:p.t("wie Desktop"),value:"desktop"},{label:p.t("wie Smartphone"),value:"smartphone"},{label:p.t("eigenes Layout"),value:"specific-layout"}].filter(u=>u.value!==e.id));me(()=>e.fullscreen,u=>{F.dev("DEBUG","WidgetSection","watch",u),u===!0&&$.value.length===0&&J()});const g=u=>{F.dev("DEBUG","WidgetSection","onChange",u),v.setWidgetConfig({pageId:e.pageId,tabId:e.tabId,key:u.id,val:u.value})},r=R({}),m=(u,D,a,O,P)=>{F.dev("DEBUG","WidgetSection","onResized",u,D,a,O,P),r.value[u]={width:(100/(12/a)).toFixed(2),height:O}},n=R({}),b=(u,D)=>{n.value[".widgetOptions-move-"+u.id]=D},s={},i=u=>v.widgets[u]||{items:[]},I=u=>{u=u||[];const D=u.join("-");return s[D]?s[D]:(F.dev("DEBUG","WidgetSection","getWidgetsData",u),!u||u.length===0?p.t("No widgets assigned"):(s[D]=u.map(a=>{const O=i(a);O.items=O.items||[];const P=O.items.filter(H=>H.type==="divider").length;return O.module+(!O.label&&!O.title?"":" ("+(O.label||O.title)+(O.module!=="StateList"?"":", "+O.items.length+" "+p.t("items")+" "+p.t("apprx.")+" "+((O.hideTitle!==!0?56:0)+P+(O.items.length-P)*46)+"px "+p.t("in height"))+")")}).join(", "),s[D]))},$=R(oe(e.items)||[]);De(()=>{});const f=u=>{v.setWidgets({pageId:e.pageId,tabId:e.tabId,key:"widgets"+ge(e.id),val:u})},_=R(),J=()=>{let u=0,D=0;for(const a of $.value){const O=a.y+a.h;O>D&&(D=O,u=a.x)}if($.value.push({x:u,y:D,w:4,h:4,i:de()}),_.value&&_.value[_.value.length-1]){const a=_.value[_.value.length-1].$el,{top:O,height:P}=a.getBoundingClientRect();a.parentElement.parentElement.scrollTo(0,O+P+1e3)}f($.value)},ne=(u,D,a)=>{const P=v.layout.find(j=>j.id===a).tabs.find(j=>j.id===D),H=oe(P["widgets"+ge(e.id)]);u=oe(u);let A=0;H.forEach(j=>{A=j.x>=u.x&&j.x+j.w<=u.x+u.w?Math.max(A,j.y+j.h):A}),u.y=A,H.push(u),v.setWidgets({pageId:a,tabId:D,key:"widgets"+ge(e.id),val:H}),ee(u.i,!0)},te=u=>{const D=u.id,a=oe($.value.find(P=>P.i===D));a.i=de(),u.val==="copy"&&(a.items=a.items||[],a.items=a.items.map(P=>{const H=i(P),A=de();return v.copyWidget({id:A,widget:H}),A}));let O=a.y+a.h;$.value.forEach(P=>{O=P.x>=a.x&&P.x+P.w<=a.x+a.w?Math.max(O,P.y+P.h):O}),a.y=O,$.value.push(a),f($.value)},ee=(u,D=!1)=>{D=D||confirm(p.t("Really delete item?")),D&&($.value.splice($.value.findIndex(a=>a.i===u),1),f($.value))},h=R(null),w=u=>{F.dev("DEBUG","WidgetSection","saveWidgetAssignments",u),$.value.splice($.value.findIndex(D=>D.i===h.value.i),1,{...h.value,...u}),h.value=null,f($.value)},X=u=>{for(const D in n.value)n.value[D]&&n.value[D].hide();n.value[u]&&n.value[u].show()};return Te(()=>{_.value&&_.value.forEach(u=>{m(u.$props.i,u.$props.h,u.$props.w,u.$props.h*u.rowHeight+(u.$props.h-1)*u.margin[0],null)})}),{...fe($),gridItemElements:_,expanded:e.id==="desktop",copyMenu:S,onChange:g,onResized:m,popupWidgetOrder:R(!1),pages:v.layout.filter(u=>!u.type||u.type==="page"),widgets:$,widgetSizes:r,setWidgets:f,getWidget:i,getWidgetsData:I,setRef:b,widgetOptions:n,showPageMenu:X,selectedWidget:h,addWidget:J,copyWidget:te,moveWidget:ne,deleteWidget:ee,saveWidgetAssignments:w,disabled:M,options:W}}}),nl={style:{padding:"0 16px 8px 16px","min-height":"64px"},class:"row"},ol={class:"grid-item tooltip-widget"},il={class:"row justify-between"},al={class:"row items-center",style:{"padding-left":"8px"}},sl={class:"row"},dl={style:{padding:"0 8px 8px 8px","min-height":"64px"},class:"row"},ul={style:{margin:"auto 0"}},rl={class:"text-h6 row items-center"},cl={class:"grid-layout-container",style:{height:"800px","overflow-y":"scroll"}},gl={class:"row justify-between"},pl={class:"row items-center",style:{"padding-left":"8px"}},vl=C("\xA0 "),ml={key:0},fl={class:"row"},hl={class:"row q-pa-sm tooltip-widget",style:{overflow:"hidden"}};function yl(e,p,v,S,M,W){const g=q("widget-popup"),r=q("icon"),m=q("inputs"),n=q("grid-item"),b=q("grid-layout");return c(),k("div",null,[l(g,{onOnClose:p[0]||(p[0]=s=>e.selectedWidget=null),onOnSave:e.saveWidgetAssignments,widget:e.selectedWidget},null,8,["onOnSave","widget"]),l(we,{"model-value":e.disabled!==!0?e.expanded:!1,class:"full-width paper",disable:e.disabled},{header:t(()=>[o("div",{class:"row full-width",onClick:p[2]||(p[2]=s=>e.expanded=!e.expanded)},[l(y,{avatar:""},{default:t(()=>[l(r,{name:e.icon},null,8,["name"])]),_:1}),l(y,{style:{height:"40px"}},{default:t(()=>[C(d(e.label),1)]),_:1}),e.id!=="desktop"?(c(),T(y,{key:0,side:"",class:"notDisabled"},{default:t(()=>[l(m,{onOnSelect:e.onChange,type:"select",options:e.options,dense:"",label:e.$t("Use same layout as"),id:e.id+"SameAs",onClick:p[1]||(p[1]=le(()=>{},["prevent"])),value:e.widgetConfig[e.id+"SameAs"]||"desktop",style:{width:"150px"}},null,8,["onOnSelect","options","label","id","value"])]),_:1})):Z("",!0)])]),default:t(()=>[o("div",null,[E(o("div",null,[E(o("div",nl,[l(U,{color:"secondary",icon:"mdi-plus-circle",label:e.$t("Add Widget"),onClick:e.addWidget,style:{margin:"auto 0"}},null,8,["label","onClick"])],512),[[L,e.widgets.length===0]]),l(N),E(o("div",ol,[o("div",il,[o("div",al,d(e.$t("Fullscreen")),1),o("div",sl,[l(U,{size:"sm",flat:"",round:"",icon:"mdi-pencil",onClick:p[3]||(p[3]=s=>e.selectedWidget=e.widgets[0])})])])],512),[[L,e.widgets[0]!==void 0]])],512),[[L,e.fullscreen===!0]]),E(o("div",null,[o("div",dl,[l(U,{color:"secondary",icon:"mdi-plus-circle",label:e.$t("Add Widget"),onClick:e.addWidget,style:{margin:"auto 0"}},null,8,["label","onClick"]),l(m,{dense:"",type:"switch",inline:"",label:e.$t("Height of all widgets equal to page height (no scrollbars)"),id:e.id+"FitPageHeight",onOnChange:e.onChange,value:e.widgetConfig[e.id+"FitPageHeight"]||!1,style:{margin:"auto 0 auto 8px"}},null,8,["label","id","onOnChange","value"]),E(l(m,{set:e.rowHeight=parseInt(e.widgetConfig[e.id+"FitPageHeight"]!==!0&&e.widgetConfig[e.id+"WidgetHeight"])||50,dense:"",type:"number",min:10,label:e.$t("Widget height")+" ("+e.$t("in pixels")+")",id:e.id+"WidgetHeight",onOnChange:e.onChange,value:e.widgetConfig[e.id+"WidgetHeight"]||50,style:{margin:"auto 0 auto 4px"}},null,8,["set","label","id","onOnChange","value"]),[[L,e.widgetConfig[e.id+"FitPageHeight"]!==!0]]),l(m,{set:e.gapSize=parseInt(e.widgetConfig[e.id+"GapSize"]||5),dense:"",type:"number",min:0,label:e.$t("Widget gaps")+" ("+e.$t("in pixels")+")",id:e.id+"GapSize",onOnChange:e.onChange,value:e.widgetConfig[e.id+"GapSize"]||5,style:{margin:"auto 0 auto 4px"}},null,8,["set","label","id","onOnChange","value"]),o("div",ul,[l(m,{type:"button",color:"primary",icon:"mdi-sort-numeric-variant",label:"Change Widget Responsive Order",onOnClick:p[4]||(p[4]=s=>e.popupWidgetOrder=!0),size:"md"})])]),l(N),l(Ce,{modelValue:e.popupWidgetOrder,"onUpdate:modelValue":p[7]||(p[7]=s=>e.popupWidgetOrder=s)},{default:t(()=>[l(be,{class:"column full-height",style:{width:"1400px","max-width":"40vw"}},{default:t(()=>[l(ue,{class:"row items-center"},{default:t(()=>[o("div",rl,d(e.$t("Change Widget Responsive Order")),1),l(he),l(U,{flat:"",round:"",color:"grey",icon:"close",onClick:p[5]||(p[5]=s=>e.popupWidgetOrder=!1)})]),_:1}),l(N),l(ue,{class:"col scroll body"},{default:t(()=>[l(K,{ref:"elDragDrop"},{default:t(()=>[(c(!0),k(G,null,V(e.widgets,(s,i)=>(c(),T(Q,{key:"grid-item-"+s.i,class:"paper","data-id":s.i,set:s=e.getWidget(s.items[0])},{default:t(()=>[l(y,{avatar:"",center:""},{default:t(()=>[l(r,{size:"sm",name:"mdi-drag-horizontal",class:"dragndrop"})]),_:1}),l(y,null,{default:t(()=>[s.title?(c(),T(z,{key:0},{default:t(()=>[C(d(s.title),1)]),_:2},1024)):(c(),T(z,{key:1},{default:t(()=>[o("em",null,d(e.$t("No Title")),1)]),_:1})),l(z,{caption:""},{default:t(()=>[C(d(e.$t("Module"))+" "+d(s.module),1)]),_:2},1024)]),_:2},1024),l(y,{side:""},{default:t(()=>[C(d(i),1)]),_:2},1024)]),_:2},1032,["data-id","set"]))),128))]),_:1},512)]),_:1}),l(N),l(ye,{align:"right"},{default:t(()=>[l(U,{flat:"",label:e.$t("Close"),color:"primary",onClick:p[6]||(p[6]=s=>e.popupWidgetOrder=!1)},null,8,["label"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),o("div",cl,[l(b,{onLayoutUpdated:e.setWidgets,layout:e.widgets,"onUpdate:layout":p[8]||(p[8]=s=>e.widgets=s),"row-height":e.rowHeight,margin:[e.gapSize,e.gapSize],"use-css-transforms":!0,responsive:!1,preventCollision:!1,style:{"min-height":"50px"}},{default:t(()=>[(c(!0),k(G,null,V(e.widgets,(s,i)=>(c(),T(n,{key:"grid-item-"+s.i,ref_for:!0,ref:"gridItemElements",x:s.x,y:s.y,w:s.w,h:s.h,i:s.i,class:Y(["grid-item tooltip-widget",{"rounded-borders":e.widgetEdges!==!0}]),onResized:e.onResized},{default:t(()=>[l(pe,{target:".tooltip-widget"},{default:t(()=>[C(d(e.getWidgetsData(s.items)),1)]),_:2},1024),o("div",gl,[o("div",pl,[o("span",{class:Y("sort-"+i)},"[ "+d(i)+" ]",3),vl,l(pe,{target:".sort-"+i},{default:t(()=>[C(d(e.$t("Responsive Position"))+": "+d(i),1)]),_:2},1032,["target"]),C(" "+d(e.$t("Position")+": "+s.x+"x * "+s.y+"y")+" ",1),e.widgetSizes[s.i]?(c(),k("span",ml,"\xA0- "+d(e.$t("Size")+": "+s.w+"w ("+e.widgetSizes[s.i].width+"%) * "+s.h+"h ("+e.widgetSizes[s.i].height+"px)"),1)):Z("",!0)]),o("div",fl,[l(m,{class:"q-ma-none",type:"button",round:"",icon:"mdi-pencil",tooltip:e.$t("edit"),onClick:le(I=>e.selectedWidget=s,["stop"])},null,8,["tooltip","onClick"]),l(m,{class:"q-ma-none",type:"button",round:"",icon:"mdi-content-copy",tooltip:e.$t("copy"),items:e.copyMenu,onOnSelect:e.copyWidget,id:s.i,denseMenu:""},null,8,["tooltip","items","onOnSelect","id"]),l(m,{class:Y(["widgetOptions-"+s.i,"q-ma-none"]),type:"button",round:"",icon:"mdi-file-move-outline",tooltip:e.$t("move"),id:s.i},null,8,["class","tooltip","id"]),l(re,{target:".widgetOptions-"+s.i,anchor:"bottom left",self:"top left","auto-close":""},{default:t(()=>[(c(!0),k(G,null,V(e.pages,I=>(c(),T(Q,{key:I.id,class:Y("widgetOptions-move-"+I.id),onMouseenter:$=>e.showPageMenu(".widgetOptions-move-"+I.id)},{default:t(()=>[l(y,{avatar:""},{default:t(()=>[l(r,{size:"xs",name:I.icon},null,8,["name"])]),_:2},1024),l(y,null,{default:t(()=>[C(d(I.title),1)]),_:2},1024),l(y,{side:""},{default:t(()=>[l(r,{name:"mdi-chevron-right"})]),_:1}),l(re,{ref_for:!0,ref:$=>e.setRef(I,$),anchor:"top end",self:"top start","auto-close":""},{default:t(()=>[l(K,null,{default:t(()=>[(c(!0),k(G,null,V(I.tabs,$=>(c(),T(Q,{key:$.id,clickable:"",onClick:f=>e.moveWidget(s,$.id,I.id)},{default:t(()=>[l(y,{avatar:""},{default:t(()=>[l(r,{size:"xs",name:$.icon},null,8,["name"])]),_:2},1024),l(y,null,{default:t(()=>[C(d($.title),1)]),_:2},1024),l(y,{side:""})]),_:2},1032,["onClick"]))),128))]),_:2},1024)]),_:2},1536)]),_:2},1032,["class","onMouseenter"]))),128))]),_:2},1032,["target"]),l(m,{class:"q-ma-none",type:"button",round:"",icon:"mdi-delete",tooltip:e.$t("delete"),color:"negative",onClick:le(I=>e.deleteWidget(s.i),["stop"])},null,8,["tooltip","onClick"])])]),o("div",hl,[C(d(e.getWidgetsData(s.items))+" ",1),l(pe,null,{default:t(()=>[C(d(e.getWidgetsData(s.items)),1)]),_:2},1024)])]),_:2},1032,["x","y","w","h","i","class","onResized"]))),128)),o("div",{class:"grid-spacer",style:x({bottom:-3*e.rowHeight+"px",height:3*e.rowHeight+"px"})},null,4)]),_:1},8,["onLayoutUpdated","layout","row-height","margin"])])],512),[[L,e.fullscreen!==!0]])])]),_:1},8,["model-value","disable"])])}var bl=se(tl,[["render",yl]]);const Cl=ie({name:"TabSection",props:["pageId","tabId"],components:{WidgetSection:bl},setup(e){F.dev("DEBUG","TabSection","setup()");const p=ae(),v=W=>{F.dev("DEBUG","TabSection","onChange",W);let g=W.value;try{g=g&&W.json!==void 0&&g.indexOf("{")>-1&&g.indexOf("}")>-1?JSON.parse(g):g}catch(r){console.warn(W.value,r)}p.editTab({pageId:e.pageId,tabId:e.tabId,key:W.id,val:g})},S=B(()=>(p.layout.find(r=>r.id===e.pageId)||{}).tabs.find(r=>r.id===e.tabId)||{}),M=B(()=>S.value.title?typeof S.value.title=="string"?S.value.title:S.value.title.default||Object.values(S.value.title)[0]:"");return{onChange:v,tab:S,tabTitle:M}}}),$l={style:{padding:"0 8px"}},wl={class:"text-h6 primary q-ma-sm"},Sl={class:"row"},kl={class:"col"},Ol={class:"col"},_l={class:"row"},Wl={class:"col"},Il={class:"col"},Dl={class:"row"},Tl={class:"col"},El={class:"col"},Pl={class:"row"},Ll={class:"col-2"},zl={class:"col"},jl={class:"text-h6 primary q-ma-sm",style:{"margin-top":"24px"}};function Bl(e,p,v,S,M,W){const g=q("inputs"),r=q("widget-section");return c(),k("div",$l,[o("div",wl,d(e.$t("Tab"))+": "+d(e.tabTitle)+" ("+d(e.$t("ID")+": "+e.tab.id)+")",1),o("div",Sl,[o("div",kl,[l(g,{json:"",onOnChange:e.onChange,id:"icon",label:e.$t("Tab")+" "+e.$t("Icon"),value:e.tab.icon||"",icon:e.tab.icon},null,8,["onOnChange","label","value","icon"])]),o("div",Ol,[l(g,{json:"",onOnChange:e.onChange,id:"title",label:e.$t("Tab")+" "+e.$t("Title"),value:e.tab.title||""},null,8,["onOnChange","label","value"])])]),o("div",_l,[o("div",Wl,[l(g,{json:"",onOnChange:e.onChange,id:"iconStyle",label:"config#Devices#iconStyle#label",info:"config#Devices#iconStyle#info",value:e.tab.iconStyle},null,8,["onOnChange","value"])]),o("div",Il,[l(g,{json:"",onOnChange:e.onChange,id:"bodyStyle",label:"config#Devices#bodyStyle#label",info:"config#Devices#bodyStyle#info",value:e.tab.bodyStyle},null,8,["onOnChange","value"])])]),o("div",Dl,[o("div",Tl,[l(g,{json:"",onOnChange:e.onChange,id:"iconSelectedStyle",label:"config#Layout#iconSelectedStyle#label",info:"config#Layout#iconSelectedStyle#info",value:e.tab.iconSelectedStyle},null,8,["onOnChange","value"])]),o("div",El,[l(g,{json:"",onOnChange:e.onChange,id:"bodySelectedStyle",label:"config#Layout#bodySelectedStyle#label",info:"config#Layout#bodySelectedStyle#info",value:e.tab.bodySelectedStyle},null,8,["onOnChange","value"])])]),o("div",Pl,[o("div",Ll,[l(g,{type:"switch",inline:"",label:e.$t("Tab")+" "+e.$t("Fullscreen"),id:"fullscreen",onOnChange:e.onChange,value:e.tab.fullscreen||!1,style:{margin:"auto 0 auto 16px"}},null,8,["label","onOnChange","value"])]),o("div",zl,[l(g,{type:"switch",inline:"",label:e.$t("Widgets edges (round or angled)"),id:"widgetEdges",onOnChange:e.onChange,value:e.tab.widgetEdges||!1,style:{margin:"auto 0 auto 16px"}},null,8,["label","onOnChange","value"])])]),o("div",jl,d(e.$t("Widgets of tab"))+": "+d(e.tabTitle),1),l(r,{pageId:e.pageId,tabId:e.tabId,id:"desktop",label:"Desktop",icon:"mdi-monitor",fullscreen:e.tab.fullscreen||!1,widgetEdges:e.tab.widgetEdges||!1,widgetConfig:e.tab.widgetConfig||{},items:e.tab.widgetsDesktop},null,8,["pageId","tabId","fullscreen","widgetEdges","widgetConfig","items"]),l(r,{pageId:e.pageId,tabId:e.tabId,id:"smartphone",label:"Smartphone",icon:"mdi-cellphone",fullscreen:e.tab.fullscreen||!1,widgetEdges:e.tab.widgetEdges||!1,widgetConfig:e.tab.widgetConfig||{},items:e.tab.widgetsSmartphone},null,8,["pageId","tabId","fullscreen","widgetEdges","widgetConfig","items"])])}var ql=se(Cl,[["render",Bl]]);const Al=ie({name:"DrawerSection",props:["pageId"],components:{TabSection:ql},setup(e,{emit:p}){var ee;F.dev("DEBUG","DrawerSection","setup()");const v=$e(),S=ae(),M=B(()=>{const h=[];return S.getPagesWithoutDeletions.forEach(w=>{w.id!==e.pageId&&h.push({id:w.id,label:w.title,...w})}),h}),W=B(()=>S.layout.find(h=>h.id===e.pageId)||{}),g=B(()=>typeof W.value.title=="string"?W.value.title:W.value.title&&W.value.title.default||Object.values(W.value.title)[0]),r=B({get(){return(W.value.tabs||[]).map(w=>(w._hasIconBinding=typeof w.icon=="object",w._hasTitleBinding=typeof w.title=="object",w))},set(h){S.setTabs({pageId:e.pageId,tabs:h})}}),m=v.getSelectedPage.id===W.value.id&&v.getSelectedTab||((ee=W.value.tabs)==null?void 0:ee[0])||{},n=R(m.id||null),b=R({}),s=(h,w)=>{b.value[".tabOptions-move-"+h.id]=w};let i=null;me(()=>e.pageId,()=>{var h,w;F.dev("DEBUG","DrawerSection","watch",e.pageId),n.value=i||((w=(h=r.value)==null?void 0:h[0])==null?void 0:w.id)||null,i=null});const I=()=>{S.addTab({pageId:e.pageId}),n.value=r.value[r.value.length-1].id},$=(h,w=!1)=>{S.addTab({pageId:e.pageId,tabId:h,copyWidgets:w}),n.value=r.value[r.value.length-1].id},f=(h,w)=>{S.moveTab({pageId:e.pageId,tabId:h,destinationPageId:w}),n.value=h,i=h,p("onSelectPage",S.layout.find(X=>X.id===w)||{})},_=h=>{if(S.deleteTab({pageId:e.pageId,tabId:h}),n.value===h){const w=r.value.find(X=>X._deleted!==!0);n.value=w?w.id:null}},J=h=>{S.restoreTab({pageId:e.pageId,tabId:h}),n.value=h},ne=h=>{F.dev("DEBUG","DrawerSection","onChange",h);let w=h.value;try{w=w&&h.json!==void 0&&h.value.indexOf("{")>-1&&h.value.indexOf("}")>-1?JSON.parse(h.value):h.value}catch(X){console.warn(h.value,X)}S.editDrawerItem({itemId:e.pageId,key:h.id,val:w})},te=h=>S.changeDrawerItemId(e.pageId,h);return{...fe(r,h=>r.value=h,{direction:"vertical"}),onChange:ne,setRef:s,onChangeId:te,pages:M,page:W,pageTitle:g,tabs:r,tabOptions:b,selectedTab:n,addTab:I,copyTab:$,moveTab:f,deleteTab:_,restoreTab:J}}}),Ql={class:"text-h6 primary q-ma-sm"},Hl={class:"row"},Fl={class:"col"},Ul={class:"col"},Ml={class:"row"},Gl={class:"col"},Vl={class:"col"},Rl={class:"row"},Nl={class:"col"},Jl={class:"col"},Yl={key:0},Zl={class:"text-h6 primary q-ma-sm"},Kl={class:"q-ma-sm row"},Xl={ref:"elDragDrop",class:"row"},xl={key:0},et={key:1},lt={key:2},tt={key:3};function nt(e,p,v,S,M,W){const g=q("inputs"),r=q("icon"),m=q("tab-section");return c(),k("div",{key:e.page.id},[o("div",Ql,[C(d(e.$t("Page"))+": "+d(e.pageTitle)+" ",1),o("span",null,"(ID: "+d(e.page.id)+")",1)]),o("div",Hl,[o("div",Fl,[l(g,{json:"",onOnChange:e.onChange,id:"icon",label:e.$t("Icon"),value:e.page.icon||"",icon:e.page.icon},null,8,["onOnChange","label","value","icon"])]),o("div",Ul,[l(g,{json:"",onOnChange:e.onChange,id:"title",label:e.$t("Title"),value:e.page.title||""},null,8,["onOnChange","label","value"])])]),o("div",Ml,[o("div",Gl,[l(g,{json:"",onOnChange:e.onChange,id:"iconStyle",label:"config#Devices#iconStyle#label",info:"config#Devices#iconStyle#info",value:e.page.iconStyle},null,8,["onOnChange","value"])]),o("div",Vl,[l(g,{json:"",onOnChange:e.onChange,id:"bodyStyle",label:"config#Devices#bodyStyle#label",info:"config#Devices#bodyStyle#info",value:e.page.bodyStyle},null,8,["onOnChange","value"])])]),o("div",Rl,[o("div",Nl,[l(g,{json:"",onOnChange:e.onChange,id:"iconSelectedStyle",label:"config#Layout#iconSelectedStyle#label",info:"config#Layout#iconSelectedStyle#info",value:e.page.iconSelectedStyle},null,8,["onOnChange","value"])]),o("div",Jl,[l(g,{json:"",onOnChange:e.onChange,id:"bodySelectedStyle",label:"config#Layout#bodySelectedStyle#label",info:"config#Layout#bodySelectedStyle#info",value:e.page.bodySelectedStyle},null,8,["onOnChange","value"])])]),!e.page.type||e.page.type==="page"?(c(),k("div",Yl,[o("div",Zl,d(e.$t("Tabs of page"))+": "+d(e.pageTitle),1),o("div",Kl,[l(U,{color:"secondary",icon:"mdi-plus-circle",label:e.$t("Add Tab"),onClick:e.addTab},null,8,["label","onClick"]),l(g,{type:"switch",inline:"",label:e.$t("Do not show Tab Labels (only Icons)"),id:"hideLabels",onOnChange:e.onChange,value:e.page.hideLabels||!1,style:{margin:"auto 0 auto 16px"}},null,8,["label","onOnChange","value"])]),l(Pe,{modelValue:e.selectedTab,"onUpdate:modelValue":p[1]||(p[1]=n=>e.selectedTab=n),"inline-label":"","outside-arrows":"","mobile-arrows":"",class:"bg-primary text-white full-width",align:"left"},{default:t(()=>[o("div",Xl,[(c(!0),k(G,null,V(e.tabs,n=>(c(),T(Ee,{key:n.id,name:n.id,style:x({backgroundColor:n.backgroundColor}),class:Y({"q-px-xs":!0,rowDeleted:n._deleted===!0}),disable:n._deleted===!0},{default:t(()=>[l(r,{size:"sm",name:"mdi-drag-vertical",class:"dragndrop",color:n.color},null,8,["color"]),n._hasIconBinding?(c(),k("div",xl,[l(ce,{flat:"",dense:""},{label:t(()=>[l(r,{size:"xs",name:n.icon.default||Object.values(n.icon)[0],class:"tabIcon q-mr-xs",color:n.iconColor||n.color},null,8,["name","color"])]),default:t(()=>[l(K,null,{default:t(()=>[(c(!0),k(G,null,V(n.icon,(b,s)=>(c(),T(Q,{key:s},{default:t(()=>[l(y,{avatar:""},{default:t(()=>[l(r,{size:"xs",name:b,class:"tabIcon q-mr-xs",color:n.iconColor||n.color},null,8,["name","color"])]),_:2},1024),l(y,null,{default:t(()=>[l(z,null,{default:t(()=>[C(d(b),1)]),_:2},1024),l(z,{caption:""},{default:t(()=>[C(d(s),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:2},1024)])):(c(),k("div",et,[l(r,{size:"xs",name:n.icon,class:"tabIcon q-mr-xs",color:n.iconColor||n.color},null,8,["name","color"])])),n._hasTitleBinding?(c(),k("div",lt,[l(ce,{flat:"",dense:"",label:n.title.default||Object.values(n.title)[0]},{default:t(()=>[l(K,null,{default:t(()=>[(c(!0),k(G,null,V(n.title,(b,s)=>(c(),T(Q,{key:s},{default:t(()=>[l(y,null,{default:t(()=>[l(z,null,{default:t(()=>[C(d(b),1)]),_:2},1024),l(z,{caption:""},{default:t(()=>[C(d(s),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:2},1032,["label"])])):(c(),k("div",tt,[E(o("div",{class:"q-tab__label",style:x({color:n.color})},d(n.title),5),[[L,e.page.hideLabels!==!0]])])),o("div",{class:"row items-center no-wrap",style:x([{"margin-left":"16px"},{color:n.color}])},[l(N,{vertical:"",class:"q-ma-xs"}),E(l(g,{round:"",type:"button",icon:"mdi-restore",tooltip:e.$t("restore"),color:"positive",onClick:b=>e.restoreTab(n.id)},null,8,["tooltip","onClick"]),[[L,n._deleted===!0]]),E(l(U,{class:Y("tabOptions-"+n.id),dense:"",flat:"",round:"",color:"white",icon:"mdi-dots-vertical",onClick:p[0]||(p[0]=le(()=>{},["stop"]))},null,8,["class"]),[[L,n._deleted!==!0]]),l(re,{target:".tabOptions-"+n.id,anchor:"bottom left",self:"top left","auto-close":""},{default:t(()=>[E(l(Q,{clickable:"",onClick:b=>e.copyTab(n.id,!0)},{default:t(()=>[l(y,{avatar:""},{default:t(()=>[l(r,{size:"xs",name:"mdi-content-copy"})]),_:1}),l(y,null,{default:t(()=>[C(d(e.$t("copy")),1)]),_:1})]),_:2},1032,["onClick"]),[[L,n._deleted!==!0]]),E(l(Q,{clickable:"",onClick:b=>e.copyTab(n.id)},{default:t(()=>[l(y,{avatar:""},{default:t(()=>[l(r,{size:"xs",name:"mdi-content-duplicate"})]),_:1}),l(y,null,{default:t(()=>[C(d(e.$t("duplicate")),1)]),_:1})]),_:2},1032,["onClick"]),[[L,n._deleted!==!0]]),E(l(Q,{class:Y("tabOptions-move-"+n.id),onMouseover:b=>e.tabOptions[".tabOptions-move-"+n.id].show(),clickable:""},{default:t(()=>[l(y,{avatar:""},{default:t(()=>[l(r,{size:"xs",name:"mdi-folder-move-outline"})]),_:1}),l(y,null,{default:t(()=>[C(d(e.$t("move")),1)]),_:1}),l(y,{side:""},{default:t(()=>[l(r,{name:"mdi-chevron-right"})]),_:1}),l(re,{ref_for:!0,ref:b=>e.setRef(n,b),anchor:"top end",self:"top start","auto-close":""},{default:t(()=>[l(K,null,{default:t(()=>[(c(!0),k(G,null,V(e.pages,b=>(c(),T(Q,{key:b.id,clickable:"",onClick:s=>e.moveTab(n.id,b.id)},{default:t(()=>[l(y,{avatar:""},{default:t(()=>[l(r,{size:"xs",name:b.icon},null,8,["name"])]),_:2},1024),l(y,null,{default:t(()=>[C(d(b.title),1)]),_:2},1024),l(y,{side:""})]),_:2},1032,["onClick"]))),128))]),_:2},1024)]),_:2},1536)]),_:2},1032,["class","onMouseover"]),[[L,n._deleted!==!0&&e.pages.length>0]]),l(Q,{clickable:"",style:{color:"#fff",background:"var(--q-negative)"},onClick:b=>e.deleteTab(n.id)},{default:t(()=>[l(y,{avatar:""},{default:t(()=>[l(r,{size:"xs",name:"mdi-delete"})]),_:1}),l(y,null,{default:t(()=>[C(d(e.$t("delete")),1)]),_:1})]),_:2},1032,["onClick"])]),_:2},1032,["target"])],4)]),_:2},1032,["name","style","class","disable"]))),128))],512)]),_:1},8,["modelValue"]),l(ze,{modelValue:e.selectedTab,"onUpdate:modelValue":p[2]||(p[2]=n=>e.selectedTab=n),animated:"","keep-alive":"",class:"border"},{default:t(()=>[(c(!0),k(G,null,V(e.tabs,n=>(c(),T(Le,{key:n.id,name:n.id,style:{padding:"16px 0"},class:"body"},{default:t(()=>[l(m,{pageId:e.page.id,tabId:n.id},null,8,["pageId","tabId"])]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"])])):Z("",!0)])}var ot=se(Al,[["render",nt]]);const it=ie({name:"LayoutsPage",components:{DrawerSection:ot,JsonEditor:qe},setup(){F.dev("DEBUG","LayoutsPage","setup()");const e=ve(),p=$e(),v=ae(),S=[{id:"copy",icon:"mdi-content-copy",label:e.t("copy")},{id:"duplicate",icon:"mdi-content-duplicate",label:e.t("duplicate")}],M=f=>v.set({["settings."+f.id]:f.value}),W=f=>{if(f._error){v.addError(f.id,f._error);return}v.removeError(f.id),f.value&&v.set({tmpJsonEditor:{key:f.id,json:JSON.parse(f.value)}})},g=B({get(){return(v.getLayout||[]).map(_=>(_._hasIconBinding=typeof _.icon=="object",_._hasTitleBinding=typeof _.title=="object",_))},set(f){v.setLayout(f)}}),r=R(v.selectedPage?v.selectedPage:v.getLayout.find(f=>f.type==="page"&&f._deleted!==!0)),m=f=>{r.value=f},n=()=>v.addDrawerItem({type:"divider"}),b=()=>v.addDrawerItem({type:"header",title:e.t("New Header")}),s=()=>{v.addDrawerItem({type:"page",icon:"mdi-file",title:e.t("New Page"),tabs:[]}),r.value=g.value[g.value.length-1],v.addTab({pageId:r.value.id})},i=f=>{const _=f.id;v.copyDrawerItem({itemId:_,copyWidgets:f.val==="copy"});const J=g.value[g.value.length-1];J.type==="page"&&(r.value=J)},I=f=>{v.deleteDrawerItem({itemId:f}),r.value.id===f&&(r.value=g.value.find(_=>_.type==="page"&&_._deleted!==!0))},$=f=>{v.restoreDrawerItem({itemId:f});const _=g.value.find(J=>J.id===f);_.type==="page"&&(r.value=_)};return{...fe(g,f=>g.value=f),copyMenu:S,json:B(()=>v.layout),settings:B(()=>v.settings),proWarning:B(()=>!je.isPro()&&g.value.filter(f=>f.type==="page").length>1),pageHeight:B(()=>p.pageHeight),pagesWithoutDeletionsCount:B(()=>v.getPagesWithoutDeletions.length),onChangeSettings:M,onJsonEditor:W,onSelectPage:m,selectedPage:r,pages:g,addDivider:n,addHeader:b,addPage:s,copyItem:i,deleteItem:I,restoreItem:$}}}),at={class:"full-height LayoutsPage"},st={class:"row no-wrap"},dt={class:"row",style:{"margin-bottom":"54px"}},ut={class:"col-3"},rt={class:"text-h6 primary q-ma-sm"},ct={key:0},gt={key:1},pt={key:1},vt={key:2},mt={class:"row items-center"},ft={class:"col-9"};function ht(e,p,v,S,M,W){const g=q("alert"),r=q("icon"),m=q("inputs"),n=q("paper"),b=q("drawer-section"),s=q("json-editor");return c(),k("div",at,[o("div",st,[l(ke,{class:"paper",style:{"min-height":"56px"}},{default:t(()=>[l(Se,{shrink:""},{default:t(()=>[C(d(e.$t("Layout")),1)]),_:1})]),_:1})]),E(o("div",dt,[o("div",ut,[l(n,{class:"q-pa-sm"},{default:t(()=>[o("div",rt,d(e.$t("Drawer")+" / "+e.$t("Pages")),1),l(Be,null,{default:t(()=>[l(U,{color:"primary",icon:"mdi-plus-circle",label:e.$t("Add Page"),onClick:e.addPage},null,8,["label","onClick"]),l(U,{color:"secondary",icon:"mdi-plus-circle",label:e.$t("Add Header"),onClick:e.addHeader},null,8,["label","onClick"]),l(U,{color:"secondary",icon:"mdi-plus-circle",label:e.$t("Add Divider"),onClick:e.addDivider},null,8,["label","onClick"])]),_:1}),E(l(g,{style:{margin:"16px 0 0 0"}},{default:t(()=>[C(d(e.$t("Only a single page is allowed without Pro. A single page may hold infinite tabs though."))+".",1)]),_:1},512),[[L,e.proWarning]]),l(N,{style:{margin:"16px 0"}}),l(K,{ref:"elDragDrop"},{default:t(()=>[(c(!0),k(G,null,V(e.pages,i=>(c(),T(Q,{key:i.id,clickable:!i.type||i.type==="page"||i.type==="header",onClick:I=>e.onSelectPage(i),class:Y({rowDeleted:i._deleted===!0,selected:e.selectedPage.id===i.id}),disable:i._deleted===!0},{default:t(()=>[l(y,{avatar:"",center:""},{default:t(()=>[l(r,{size:"sm",name:"mdi-drag-horizontal",class:"dragndrop"})]),_:1}),!i.type||i.type==="page"?(c(),T(y,{key:0,avatar:"",center:"",style:x({backgroundColor:i.backgroundColor})},{default:t(()=>[i._hasIconBinding?(c(),k("div",ct,[l(ce,{flat:"",dense:""},{label:t(()=>[l(r,{name:i.icon.default||Object.values(i.icon)[0],color:e.selectedPage.id===i.id?"white":"primary",styles:{color:i.iconColor}},null,8,["name","color","styles"])]),default:t(()=>[l(K,null,{default:t(()=>[(c(!0),k(G,null,V(i.icon,(I,$)=>(c(),T(Q,{key:$},{default:t(()=>[l(y,{avatar:""},{default:t(()=>[l(r,{size:"xs",name:I,class:"pageIcon q-mr-xs",color:i.iconColor||i.color},null,8,["name","color"])]),_:2},1024),l(y,null,{default:t(()=>[l(z,null,{default:t(()=>[C(d(I),1)]),_:2},1024),l(z,{caption:""},{default:t(()=>[C(d($),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:2},1024)])):(c(),k("div",gt,[l(r,{name:i.icon,color:e.selectedPage.id===i.id?"white":"primary",styles:{color:i.iconColor}},null,8,["name","color","styles"])]))]),_:2},1032,["style"])):Z("",!0),l(y,{class:Y({itemDeleted:i._deleted===!0}),style:x({backgroundColor:i.backgroundColor,color:i.color})},{default:t(()=>[i.type==="divider"?(c(),T(N,{key:0})):Z("",!0),i._hasTitleBinding?(c(),k("div",pt,[l(ce,{flat:"",dense:"",label:i.title.default||Object.values(i.title)[0]},{default:t(()=>[l(K,null,{default:t(()=>[(c(!0),k(G,null,V(i.title,(I,$)=>(c(),T(Q,{key:$},{default:t(()=>[l(y,null,{default:t(()=>[l(z,null,{default:t(()=>[C(d(I),1)]),_:2},1024),l(z,{caption:""},{default:t(()=>[C(d($),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:2},1032,["label"])])):(c(),k("div",vt,[l(z,{class:Y({header:i.type==="header"}),style:x({color:i.color})},{default:t(()=>[C(d(i.title),1)]),_:2},1032,["class","style"])]))]),_:2},1032,["class","style"]),l(y,{side:"",class:Y({rowDeleted:i._deleted===!0,selected:e.selectedPage.id===i.id})},{default:t(()=>[o("div",mt,[i.type==="page"?E((c(),T(m,{key:0,type:"button",round:"",icon:"mdi-content-copy",tooltip:e.$t("copy"),items:e.copyMenu,onOnSelect:e.copyItem,id:i.id,denseMenu:""},null,8,["tooltip","items","onOnSelect","id"])),[[L,i.type!=="divider"&&i._deleted!==!0]]):E((c(),T(m,{key:1,type:"button",round:"",icon:"mdi-content-copy",tooltip:e.$t("copy"),onClick:le(I=>e.copyItem({id:i.id}),["stop"])},null,8,["tooltip","onClick"])),[[L,i.type!=="divider"&&i._deleted!==!0]]),E(l(m,{type:"button",round:"",icon:"mdi-delete",tooltip:e.$t("delete"),color:"negative",onClick:le(I=>e.deleteItem(i.id),["stop"])},null,8,["tooltip","onClick"]),[[L,(i.type&&i.type!=="page"||(!i.type||i.type==="page")&&e.pagesWithoutDeletionsCount>1)&&i._deleted!==!0]]),E(l(m,{type:"button",round:"",icon:"mdi-restore",tooltip:e.$t("restore"),color:"positive",onClick:le(I=>e.restoreItem(i.id),["stop"]),class:"restore"},null,8,["tooltip","onClick"]),[[L,i._deleted===!0]])])]),_:2},1032,["class"])]),_:2},1032,["clickable","onClick","class","disable"]))),128)),l(N,{class:"q-my-sm"}),l(Q,null,{default:t(()=>[l(y,{avatar:"",center:""}),l(y,{avatar:"",center:""},{default:t(()=>[l(r,{name:"mdi-cog",color:"primary"})]),_:1}),l(y,null,{default:t(()=>[l(z,null,{default:t(()=>[C(d(e.$t("Configuration"))+" & "+d(e.$t("Help")),1)]),_:1}),l(z,{caption:""},{default:t(()=>[C(d(e.$t("show in sidebar")),1)]),_:1})]),_:1}),l(y,{side:""},{default:t(()=>[l(m,{type:"Switch",inline:"",onOnChange:e.onChangeSettings,id:"drawerShowSettings",value:e.settings.drawerShowSettings},null,8,["onOnChange","value"])]),_:1})]),_:1}),l(Q,null,{default:t(()=>[l(y,{avatar:"",center:""}),l(y,{avatar:"",center:""},{default:t(()=>[l(r,{name:"mdi-menu",color:"primary"})]),_:1}),l(y,null,{default:t(()=>[l(z,null,{default:t(()=>[C(d(e.$t("Drawer")),1)]),_:1}),l(z,{caption:""},{default:t(()=>[C(d(e.$t("show button")),1)]),_:1})]),_:1}),l(y,{side:""},{default:t(()=>[l(m,{type:"Switch",inline:"",onOnChange:e.onChangeSettings,id:"drawerShowMenuButton",value:e.settings.drawerShowMenuButton},null,8,["onOnChange","value"])]),_:1})]),_:1})]),_:1},512)]),_:1})]),o("div",ft,[l(n,{class:"q-pa-sm"},{default:t(()=>[e.selectedPage&&e.selectedPage.id?(c(),T(b,{key:0,onOnSelectPage:e.onSelectPage,pageId:e.selectedPage.id},null,8,["onOnSelectPage","pageId"])):Z("",!0)]),_:1})])],512),[[L,!e.settings.configExpertMode]]),E(l(n,{style:x({height:e.pageHeight-66-16+"px"})},{default:t(()=>[l(s,{id:"layout",json:e.json,onOnChange:e.onJsonEditor},null,8,["json","onOnChange"])]),_:1},8,["style"]),[[L,e.settings.configExpertMode]])])}var Dt=se(it,[["render",ht]]);export{Dt as default};
