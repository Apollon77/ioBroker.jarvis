import{bx as fe,k as Q,aA as me,d9 as be,aq as Se,am as Ce,as as we,ac as Ie,ck as Oe,a9 as De,da as ke,cm as oe,al as $e,db as Ee,a4 as de,cq as q,bM as Ke,cn as ue,Q as H,dc as X,bQ as x,bR as Le,bt as re,dd as Be,d8 as Ve,aG as Y,ay as s,W as w,X as v,b3 as h,bn as m,a2 as o,b1 as u,I as R,aE as ee,U as y,bG as j,bH as $,bO as Ge,A as ce,D as I,a1 as J,V as f,cP as Z,bP as ae,bB as T,bo as Ae,de as le,bU as M,bp as _,aI as ne,ak as ve,by as Me,bF as se,bw as We,aY as Fe,bS as Qe,bT as ie,bD as Pe,bV as Ue,bW as qe}from"./index-ba4a1ec8.js";import{Q as je}from"./QExpansionItem-7e8aeb67.js";import{a as Re,u as Te}from"./useDragDrop-3c3c8a6d.js";var Ne=fe({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validation-success","validation-error"],setup(e,{slots:D,emit:B}){const E=De(),b=Q(null);let S=0;const d=[];function K(p){const L=typeof p=="boolean"?p:e.noErrorFocus!==!0,V=++S,F=(l,c)=>{B("validation-"+(l===!0?"success":"error"),c)},G=l=>{const c=l.validate();return typeof c.then=="function"?c.then(C=>({valid:C,comp:l}),C=>({valid:!1,comp:l,err:C})):Promise.resolve({valid:c,comp:l})};return(e.greedy===!0?Promise.all(d.map(G)).then(l=>l.filter(c=>c.valid!==!0)):d.reduce((l,c)=>l.then(()=>G(c).then(C=>{if(C.valid===!1)return Promise.reject(C)})),Promise.resolve()).catch(l=>[l])).then(l=>{if(l===void 0||l.length===0)return V===S&&F(!0),!0;if(V===S){const{comp:c,err:C}=l[0];if(C!==void 0&&console.error(C),F(!1,c),L===!0){const P=l.find(({comp:N})=>typeof N.focus=="function"&&ke(N.$)===!1);P!==void 0&&P.comp.focus()}}return!1})}function n(){S++,d.forEach(p=>{typeof p.resetValidation=="function"&&p.resetValidation()})}function i(p){p!==void 0&&oe(p);const L=S+1;K().then(V=>{L===S&&V===!0&&(e.onSubmit!==void 0?B("submit",p):p!==void 0&&p.target!==void 0&&typeof p.target.submit=="function"&&p.target.submit())})}function O(p){p!==void 0&&oe(p),B("reset"),$e(()=>{n(),e.autofocus===!0&&e.noResetFocus!==!0&&k()})}function k(){Ee(()=>{if(b.value===null)return;const p=b.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(b.value.querySelectorAll("[tabindex]"),L=>L.tabIndex>-1);p!=null&&p.focus({preventScroll:!0})})}me(be,{bindComponent(p){d.push(p)},unbindComponent(p){const L=d.indexOf(p);L>-1&&d.splice(L,1)}});let W=!1;return Se(()=>{W=!0}),Ce(()=>{W===!0&&e.autofocus===!0&&k()}),we(()=>{e.autofocus===!0&&k()}),Object.assign(E.proxy,{validate:K,resetValidation:n,submit:i,reset:O,focus:k,getValidationComponents:()=>d}),()=>Ie("form",{class:"q-form",ref:b,onSubmit:i,onReset:O},Oe(D.default))}});const ze=de({name:"WidgetDevicesSection",props:["module","itemList"],emits:["onChange"],setup(e,{emit:D}){q.dev("DEBUG","WidgetDevicesSection","setup()");const B=Ke(),E=ue(),b=H(()=>{const t=X.Settings[e.module]||{};return{addDevices:!t.addDevice||t.addDevice&&t.addDevice.max===void 0,...t}}),S=H(()=>E.devices),d=t=>S.value[t],K=t=>S.value[t.deviceId].function==="other"?"_defaults":S.value[t.deviceId].function,n=t=>Object.keys(S.value[t].states)||[],i=t=>n(t).map(r=>({label:r,value:r})),O=t=>k[t].devices.length!==0,k=E.getGroups("function"),W=Q(Object.values(k)),p={},L=t=>(p[t]||(q.dev("DEBUG","WidgetDevicesSection","shallBeShown",t),p[t]=!b.value.addDevice||b.value.addDevice&&(!b.value.addDevice.fields||b.value.addDevice.fields&&b.value.addDevice.fields.includes(t))),p[t]),V=(t,r)=>{q.dev("DEBUG","WidgetDevicesSection","onFilter",t);const g=Object.values(t?E.getGroups("function",t):k);r(()=>{W.value=g})},F=(t,r,g)=>{const A=S.value[t.deviceId]&&S.value[t.deviceId].states[t[g+"StateKey"]]||{},U=t[r+"Element"];return Be(A[U+"Config"]||{},t[U+"Config"]&&t[U+"Config"][g]||{})},G=t=>{let r=!1;return t.map(g=>(r=g.type==="device"?r:g.type==="divider"?!1:g.type==="group"&&g.actions===!0,g.isInGroup=r,g))},a=Q(G(x(e.itemList))),l=Q(a.value.length),c=(t,r=null)=>{q.dev("DEBUG","WidgetDevicesSection","addItem",t,r);const g=Ve(),A={...t,id:g};if(t.type==="device"){const U=n(t.deviceId)[0]||null;A.primaryStateKey=A.primaryStateKey||U,A.bodyStateKey=A.bodyStateKey||U}r===null?a.value.push(A):a.value.splice(r,0,A),document.getElementById("WidgetDialogBody"),a.value=G(a.value),D("onChange",{id:"items",value:a.value})},C=t=>{const r=x(a.value.find(g=>g.id===t));c(r,a.value.findIndex(g=>g.id===r.id)+1)},P=t=>{confirm(B.t("Really delete item?"))&&(a.value.splice(a.value.findIndex(g=>g.id===t),1),a.value=G(a.value),D("onChange",{id:"items",value:a.value}))},N=Q(),pe=t=>{(!t.attributes||t.attributes&&t.attributes.deleted!==!0)&&(c({type:"device",deviceId:t.id},l.value),b.value.addDevice&&b.value.addDevice.max!==void 0&&b.value.addDevice.max<=a.value.length&&N.value.hidePopup())},z=Q({}),ge=()=>{z.value.value&&c({type:"group",name:z.value.value},l.value),z.value={}},he=()=>c({type:"divider"},l.value),te=t=>{if(q.dev("DEBUG","WidgetDevicesSection","onChange",t),t.id&&t.itemId){const r=a.value.findIndex(g=>g.id===t.itemId);if(r>-1){if(t.id.indexOf("moduleConfig.")>-1)a.value[r].moduleConfig={...a.value[r].moduleConfig||{},[t.id.replace("moduleConfig.","")]:t.value};else if(t.id.indexOf("secondaryStatesConfig.")>-1)a.value[r].secondaryStatesConfig={...a.value[r].secondaryStatesConfig||{},[t.id.replace("secondaryStatesConfig.","")]:t.value};else if(t.id==="componentOptions"){const g=t.stateKey||a.value[r].primaryStateKey;a.value[r][t.component+"Config"]={...a.value[r][t.component+"Config"]||{},[g]:{...a.value[r][t.component+"Config"]&&a.value[r][t.component+"Config"][g]||{},...t.value}}}else a.value[r][t.id]=t.value;a.value=G(a.value),D("onChange",{id:"items",value:a.value})}}},ye=(t,r)=>{q.dev("DEBUG","WidgetDevicesSection","onChangeSecondaryStatesKeys",t,r),te({value:r.map(g=>g.value||g),itemId:t,id:"secondaryStatesKeys"})};return{...Re(a,t=>D("onChange",{id:"items",value:G(t)})),FunctionsComponentsList:Le.ComponentsListAsOptions,ModuleSettings:b,onFilter:V,shallBeShown:L,deviceList:S,getDevice:d,getDeviceFunction:K,getDeviceStates:n,getDeviceStatesOptions:i,hasDevices:O,onChange:te,onChangeSecondaryStatesKeys:ye,setGroup:t=>{z.value=t},group:z,addGroup:ge,addDivider:he,addDevice:pe,insert:l,items:a,addItem:c,copyItem:C,deleteItem:P,componentValues:F,addDeviceElement:N,optionsAddDevice:k,optionGroupsAddDevice:W}}}),He={class:"full-width",style:{"min-height":"500px"}},Je={class:"row sticky body"},Xe={class:"col-4"},Ye={key:0},Ze={class:"col-3"},_e={class:"col-3",style:{"line-height":"70px"}},xe={class:"row"},en={class:"row items-center"},nn={key:0},tn={key:1},on={key:2},an={key:3,class:"row nowrap"},ln={key:0,class:"row nowrap"},sn={key:1,class:"row nowrap"},dn={key:2,class:"row nowrap"};function un(e,D,B,E,b,S){const d=Y("inputs"),K=Y("icon");return s(),w("div",He,[v("div",Je,[v("div",Xe,[h(o(ae,{onFilter:e.onFilter,ref:"addDeviceElement",label:e.$t("Add Device"),options:e.optionGroupsAddDevice,"model-value":"","use-input":"","input-debounce":750,"stack-label":"",style:{margin:"0 8px"}},{option:u(n=>[o(je,{"expand-separator":"","header-class":"text-weight-bold",label:n.opt.label,icon:n.opt.icon},{default:u(()=>[(s(!0),w(R,null,ee(n.opt.devices,i=>h((s(),y(j,{key:i.id,clickable:"",onClick:O=>e.addDevice(i)},{default:u(()=>[o($,null,{default:u(()=>[o(Ge,{class:"q-ml-md"},{default:u(()=>[v("span",{class:ce({"text-strike":i.attributes&&i.attributes.deleted===!0})},I(i.label?i.label+" ("+i.name+")":i.name),3),J("\xA0"),i.attributes&&i.attributes.deleted===!0?(s(),w("em",Ye,"[ "+I(e.$t("deleted"))+" ]",1)):f("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[Z]])),128))]),_:2},1032,["label","icon"])]),_:1},8,["onFilter","label","options"]),[[m,e.ModuleSettings.addDevice!==!1&&(!e.ModuleSettings.addDevice||e.ModuleSettings.addDevice&&(e.ModuleSettings.addDevice.max===void 0||e.ModuleSettings.addDevice.max>e.items.length))]])]),h(v("div",{class:"col-1",style:{"text-align":"center","line-height":"70px"}},I(e.$t("or")),513),[[m,e.ModuleSettings.addGroup!==!1]]),h(v("div",Ze,[o(d,{label:"Add Group",onOnChange:e.setGroup,onKeyup:Ae(e.addGroup,["enter"]),value:e.group.value||""},{end:u(()=>[h(o(T,{flat:"",size:"sm",dense:"",icon:"mdi-check",label:e.$t("add"),style:{height:"32px","min-width":"100px","margin-top":"16px"},onClick:e.addGroup},null,8,["label","onClick"]),[[m,!!e.group.value]])]),_:1},8,["onOnChange","onKeyup","value"])],512),[[m,e.ModuleSettings.addGroup!==!1]]),h(v("div",{class:"col-1",style:{"text-align":"center","line-height":"70px"}},I(e.$t("or")),513),[[m,e.ModuleSettings.addDivider!==!1]]),h(v("div",_e,[o(T,{icon:"mdi-minus",label:e.$t("Add Divider"),color:"primary",onClick:e.addDivider},null,8,["label","onClick"])],512),[[m,e.ModuleSettings.addDivider!==!1]])]),v("div",xe,[o(se,{ref:"elDragDrop",class:"full-width"},{default:u(()=>[(s(!0),w(R,null,ee(e.items,(n,i)=>(s(),w("div",{key:n.id,class:"item"},[h((s(),y(j,{style:{"min-height":"auto",padding:"0"},clickable:"",tag:"label",key:"radio-"+n.id+"-"+i},{default:u(()=>[o($,{side:"",class:"q-ml-md text-caption"},{default:u(()=>[o(le,{modelValue:e.insert,"onUpdate:modelValue":D[0]||(D[0]=O=>e.insert=O),val:i,label:i===0?e.$t("insert on top"):e.$t("insert after position")+": "+i,dense:"",size:"xs"},null,8,["modelValue","val","label"])]),_:2},1024),o($,null,{default:u(()=>[o(M,{class:"full-width"})]),_:1})]),_:2},1024)),[[Z]]),o(j,{class:"paper",style:{padding:"8px 12px 8px 8px !important"}},{default:u(()=>[o($,{avatar:""},{default:u(()=>[v("div",en,[h(o(K,{name:"mdi-drag-horizontal",class:"dragndrop",style:{"padding-right":"16px"}},null,512),[[m,e.items.length>1]]),o(d,{type:"button",dense:"",icon:"mdi-content-copy",tooltip:e.$t("copy"),onClick:_(O=>e.copyItem(n.id),["stop"])},null,8,["tooltip","onClick"]),h(o(d,{type:"button",dense:"",icon:"mdi-delete",tooltip:e.$t("delete"),color:"negative",onClick:_(O=>e.deleteItem(n.id),["stop"])},null,8,["tooltip","onClick"]),[[m,n._deleted!==!0]]),h(o(d,{type:"button",dense:"",icon:"mdi-restore",tooltip:e.$t("restore"),color:"positive",onClick:_(O=>e.restoreItem(n.id),["stop"]),class:"restore"},null,8,["tooltip","onClick"]),[[m,n._deleted===!0]])])]),_:2},1024),n.type!=="device"||n.type==="device"&&e.deviceList[n.deviceId]!==void 0?(s(),w(R,{key:0},[e.ModuleSettings.customBodySection?(s(),y($,{key:0},{default:u(()=>[(s(),y(ne(e.ModuleSettings.customBodySection),ve({...e.$props,...e.$attrs},{onOnChange:e.onChange,item:n,device:e.deviceList[n.deviceId]}),null,16,["onOnChange","item","device"]))]),_:2},1024)):(s(),y($,{key:1},{default:u(()=>[n.type==="divider"?(s(),w("span",nn,[v("em",null,I("("+e.$t("divider")+")"),1)])):f("",!0),n.type==="group"?(s(),w("span",tn,[v("strong",null,I(n.name),1)])):f("",!0),n.type==="device"?(s(),w("span",on,[v("strong",null,I(e.deviceList[n.deviceId].name),1),J(" ("+I(e.deviceList[n.deviceId].function+", #"+n.deviceId)+")",1)])):f("",!0),n.type==="device"?(s(),w("div",an,[e.shallBeShown("label")?(s(),y(d,{key:0,dense:"",onOnChange:e.onChange,label:"Label",itemId:n.id,id:"label",json:"",value:n.label||"",placeholder:e.deviceList[n.deviceId].states[n.bodyStateKey]&&e.deviceList[n.deviceId].states[n.bodyStateKey].label?JSON.stringify(e.deviceList[n.deviceId].states[n.bodyStateKey].label):e.deviceList[n.deviceId].name},null,8,["onOnChange","itemId","value","placeholder"])):f("",!0),e.shallBeShown("bodyStateKey")?(s(),y(d,{key:1,dense:"",style:{width:"130px"},onOnSelect:e.onChange,label:"Body State",itemId:n.id,id:"bodyStateKey",value:n.bodyStateKey,type:"select",options:e.getDeviceStatesOptions(n.deviceId)},null,8,["onOnSelect","itemId","value","options"])):f("",!0),e.shallBeShown("bodyElement")?h((s(),y(d,{key:2,dense:"",style:{width:"230px"},onOnSelect:e.onChange,onOnOptions:e.onChange,id:"bodyElement",label:"Body Element",state:e.deviceList[n.deviceId].states[n.bodyStateKey],stateKey:n.bodyStateKey,itemId:n.id,placeholder:n.bodyElement===void 0&&(e.deviceList[n.deviceId].states[n.bodyStateKey]&&e.deviceList[n.deviceId].states[n.bodyStateKey].bodyElement||"LastChangeBody"),value:n.bodyElement,type:"select.components",components:e.FunctionsComponentsList.bodyElements[e.getDeviceFunction(n)],componentValues:e.componentValues(n,"body",n.bodyStateKey)},null,8,["onOnSelect","onOnOptions","state","stateKey","itemId","placeholder","value","components","componentValues"])),[[m,n.bodyStateKey]]):f("",!0)])):f("",!0)]),_:2},1024)),e.ModuleSettings.customActionSection?(s(),y($,{key:2,side:""},{default:u(()=>[(s(),y(ne(e.ModuleSettings.customActionSection),{onOnChange:e.onChange,item:n,device:e.deviceList[n.deviceId]},null,40,["onOnChange","item","device"]))]),_:2},1024)):(s(),y($,{key:3,side:""},{default:u(()=>[n.type==="group"?(s(),w("div",ln,[o(d,{dense:"",style:{width:"100px"},onOnChange:e.onChange,label:e.$t("Group Actions"),itemId:n.id,id:"actions",value:n.actions||!1,type:"switch"},null,8,["onOnChange","label","itemId","value"]),e.shallBeShown("groupElement")?h((s(),y(d,{key:0,dense:"",style:{width:"200px"},onOnSelect:e.onChange,onOnOptions:e.onChange,id:"groupElement",label:"Group Element",stateKey:"group",itemId:n.id,value:n.groupElement,type:"select.components",components:e.FunctionsComponentsList.actionElements._defaults.filter(O=>!["DatePickerAction","TimePickerAction","InputAction","DropdownAction"].includes(O.value)),componentValues:e.componentValues(n,"group","group")},null,8,["onOnSelect","onOnOptions","itemId","value","components","componentValues"])),[[m,n.actions===!0]]):f("",!0)])):f("",!0),n.type==="device"?(s(),w("div",sn,[e.shallBeShown("primaryStateKey")?(s(),y(d,{key:0,dense:"",style:{width:"130px"},onOnSelect:e.onChange,label:"Action State",itemId:n.id,id:"primaryStateKey",value:n.primaryStateKey,type:"select",options:e.getDeviceStatesOptions(n.deviceId)},null,8,["onOnSelect","itemId","value","options"])):f("",!0),e.shallBeShown("showState")?h((s(),y(d,{key:1,dense:"",style:{width:"100px"},onOnChange:e.onChange,label:"Show State",itemId:n.id,id:"showState",value:n.showState!==void 0?n.showState:!0,type:"switch"},null,8,["onOnChange","itemId","value"])),[[m,n.primaryStateKey]]):f("",!0),e.shallBeShown("showGroupAction")?h((s(),y(d,{key:2,dense:"",style:{width:"100px"},onOnChange:e.onChange,label:"Use in Actions",itemId:n.id,id:"useInGroup",value:n.useInGroup!==void 0?n.useInGroup:!0,type:"switch"},null,8,["onOnChange","itemId","value"])),[[m,n.primaryStateKey&&n.isInGroup===!0]]):f("",!0),e.shallBeShown("actionElement")?h((s(),y(d,{key:3,dense:"",style:{width:"200px"},onOnSelect:e.onChange,onOnOptions:e.onChange,id:"actionElement",label:"Action Element",state:e.deviceList[n.deviceId].states[n.primaryStateKey],stateKey:n.primaryStateKey,itemId:n.id,placeholder:n.actionElement===void 0&&e.deviceList[n.deviceId].states[n.primaryStateKey]&&e.deviceList[n.deviceId].states[n.primaryStateKey].actionElement,value:n.actionElement,type:"select.components",components:e.FunctionsComponentsList.actionElements[e.getDeviceFunction(n)],componentValues:e.componentValues(n,"action",n.primaryStateKey)},null,8,["onOnSelect","onOnOptions","state","stateKey","itemId","placeholder","value","components","componentValues"])),[[m,n.primaryStateKey]]):f("",!0)])):f("",!0),n.type==="device"?(s(),w("div",dn,[e.shallBeShown("secondaryStatesKeys")?(s(),y(ae,{key:0,"stack-label":"",dense:"",style:{width:"430px"},"onUpdate:modelValue":O=>e.onChangeSecondaryStatesKeys(n.id,O),label:e.$t("Secondary State"),"model-value":n.secondaryStatesKeys,options:e.getDeviceStatesOptions(n.deviceId),"use-chips":"",multiple:""},{after:u(()=>[o(T,{flat:"",dense:"",icon:"mdi-dots-vertical","click.prevent":""},{default:u(()=>[o(Me,null,{default:u(()=>[o(se,{style:{"min-width":"100px"}},{default:u(()=>[o(j,null,{default:u(()=>[o($,null,{default:u(()=>[o(d,{dense:"",onOnChange:e.onChange,itemId:n.id,label:"Use Labels",id:"secondaryStatesConfig.useLabel",value:n.secondaryStatesConfig&&n.secondaryStatesConfig.useLabel||!1,type:"switch",inline:""},null,8,["onOnChange","itemId","value"])]),_:2},1024)]),_:2},1024),o(j,null,{default:u(()=>[o($,null,{default:u(()=>[o(d,{dense:"",onOnChange:e.onChange,itemId:n.id,label:"Use Colors",id:"secondaryStatesConfig.useColor",value:n.secondaryStatesConfig&&n.secondaryStatesConfig.useColor||!0,type:"switch",inline:""},null,8,["onOnChange","itemId","value"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onUpdate:modelValue","label","model-value","options"])):f("",!0)])):f("",!0)]),_:2},1024))],64)):(s(),y($,{key:1},{default:u(()=>[J(I(e.$t("Device not found")+" ("+e.$t("Device ID")+": "+n.deviceId+")"),1)]),_:2},1024))]),_:2},1024)]))),128)),h((s(),y(j,{style:{"min-height":"auto",padding:"0"},clickable:"",tag:"label"},{default:u(()=>[o($,{side:"",class:"q-ml-md text-caption"},{default:u(()=>[o(le,{modelValue:e.insert,"onUpdate:modelValue":D[1]||(D[1]=n=>e.insert=n),val:e.items.length,label:e.$t("insert at the end"),dense:"",size:"xs"},null,8,["modelValue","val","label"])]),_:1}),o($,null,{default:u(()=>[o(M,{class:"full-width"})]),_:1})]),_:1})),[[m,e.ModuleSettings.addDevices&&e.items.length>1],[Z]])]),_:1},512)])])}var rn=re(ze,[["render",un],["__scopeId","data-v-45b3779c"]]);const cn=de({name:"WidgetPage",props:["widgetId"],emits:["onClose"],components:{WidgetDevicesSection:rn},setup(e,{emit:D}){const B=We(),E=ue(),{errors:b,hasErrors:S,addError:d,removeError:K,resetErrors:n}=Te(),i=Q(null);Fe(()=>e.widgetId,a=>{a?(i.value=E.widgets[a]?x(E.widgets[a]):{id:a,config:{}},i.value.module?K("module"):d("module","Choose a module")):i.value=null});const O=X.ModuleList.map(a=>({label:a,value:a})),k=H(()=>X.Configurations[i.value.module]||[]),W=H(()=>X.Settings[i.value.module]||{}),p=H(()=>{const a={};return k.value.forEach(l=>{if(i.value.config[l.parameter]===void 0){const c=typeof l.value=="function"?l.value(i.value):l.value;V({id:"config."+l.parameter,value:c}),a[l.parameter]=c}else a[l.parameter]=i.value.config[l.parameter]}),a}),L=a=>a?Object.keys(a).some(l=>{const c=Array.isArray(a[l])?a[l]:[a[l]],C=i.value.config[l]===void 0?k.value.find(P=>P.parameter===l).value:i.value.config[l];return c.includes(C)}):!0,V=a=>{const{_error:l,id:c,value:C}=a;l?d(c,l):c!==void 0&&C!==void 0&&c.indexOf("config.")!==-1?(i.value.config[c.replace("config.","")]=C,K(c)):c!==void 0&&C!==void 0&&(i.value[c]=C,K(c),c==="module"&&(n(),i.value.config={}))},F=(a=null)=>{D("onClose",a),i.value=null,n()};return{jarvis:B,editor:E,ModuleList:O,ModuleConfigurations:k,ModuleSettings:W,ModuleConfigValues:p,errors:b,hasErrors:S,dependencies:L,widget:i,onChange:V,onCancel:F,onSave:()=>{E.addWidget({widget:i.value}),F(i.value)}}}}),vn={class:"text-h6 row items-center"},pn={class:"text-h6 primary q-ma-sm"},gn={class:"row"},hn={class:"col"},yn={class:"col"},fn={class:"col"},mn={class:"col-2"},bn={class:"col-1"},Sn={class:"text-h6 primary q-ma-sm"},Cn={class:"row"},wn={class:"col-3"},In={class:"col-9"},On={class:"text-h7 primary q-ma-sm"},Dn={class:"row"},kn={class:"row"},$n={class:"q-pa-sm"},En={key:0,class:"row"},Kn={class:"text-h7 primary q-ma-sm"},Ln={class:"row"};function Bn(e,D,B,E,b,S){const d=Y("inputs"),K=Y("widget-devices-section");return s(),y(qe,{"model-value":e.widget!==null,"full-height":"",persistent:""},{default:u(()=>[e.widget!==null?(s(),y(Qe,{key:0,class:"column full-height",style:{width:"1400px","max-width":"90vw"}},{default:u(()=>[o(ie,{class:"row items-center"},{default:u(()=>[v("div",vn,[J(I(e.$t("Widget"))+": ",1),o(d,{dense:"",onOnChange:e.onChange,id:"title",label:e.$t("Name"),value:e.widget.title||"",autofocus:"",style:{width:"230px","margin-right":"16px"}},null,8,["onOnChange","label","value"]),J(" ("+I(e.$t("Widget ID")+": "+e.widget.id)+") ",1)]),o(Pe),o(T,{flat:"",round:"",color:"grey",icon:"close",onClick:e.onCancel},null,8,["onClick"])]),_:1}),o(M),o(ie,{id:"WidgetDialogBody",class:"col scroll body"},{default:u(()=>[o(Ne,null,{default:u(()=>[v("div",pn,I(e.$t("Widget-Box")),1),o(M,{style:{margin:"0 -16px"}}),v("div",gn,[v("div",hn,[o(d,{onOnChange:e.onChange,id:"icon",label:e.$t("Widget")+" "+e.$t("Icon"),value:e.widget.icon||e.ModuleSettings.icon||"",icon:e.widget.icon},null,8,["onOnChange","label","value","icon"])]),v("div",yn,[o(d,{onOnChange:e.onChange,id:"label",label:e.$t("Widget")+" "+e.$t("Label"),value:e.widget.label||"",placeholder:e.widget.title},null,8,["onOnChange","label","value","placeholder"])]),v("div",fn,[o(d,{onOnChange:e.onChange,id:"link",label:e.$t("Widget")+" "+e.$t("Link"),value:e.widget.link||"",info:"config#HomeKitTile#jumper#info"},null,8,["onOnChange","label","value"])]),v("div",mn,[o(d,{type:"switch",onOnChange:e.onChange,id:"hideTitle",label:e.$t("Hide Widget Label and Icon"),value:e.widget.hideTitle||!1},null,8,["onOnChange","label","value"])]),v("div",bn,[h(o(d,{type:"switch",onOnChange:e.onChange,id:"hideSeparator",label:e.$t("Hide Separator"),value:e.widget.hideSeparator||!1},null,8,["onOnChange","label","value"]),[[m,e.widget.hideTitle!==!0]])])]),v("div",Sn,I(e.$t("Module")),1),o(M,{style:{margin:"0 -16px"}}),v("div",Cn,[v("div",wn,[o(d,{onOnSelect:e.onChange,id:"module",label:e.$t("Module"),type:"select",options:e.ModuleList,value:e.widget.module,"options-dense":"","use-input":"",required:"",error:e.errors.module!==void 0,"error-message":e.errors.module},null,8,["onOnSelect","label","options","value","error","error-message"])]),v("div",In,[h(v("div",{class:"centered"},I(e.$t(e.widget.module+"#description")),513),[[m,e.widget.module]])])]),h(v("div",null,[v("div",On,I(e.$t("Module Configuration")),1),o(M,{style:{margin:"0 0 8px 0"}}),h(v("div",Dn,[(s(!0),w(R,null,ee(e.ModuleConfigurations,n=>(s(),w(R,null,[n.hide!==!0?h((s(),w("div",{class:ce("col-"+(n.columns||4)),key:n.parameter},[o(d,ve(n,{onOnChange:e.onChange,onOnSelect:e.onChange,id:"config."+n.parameter,options:n.options?typeof n.options=="function"?n.options(e.widget.items,{jarvis:e.jarvis,editor:e.editor}):n.options:void 0,value:e.ModuleConfigValues[n.parameter],errorMessage:e.errors["config."+n.parameter]}),null,16,["onOnChange","onOnSelect","id","options","value","errorMessage"])],2)),[[m,e.dependencies(n.dependencies)]]):f("",!0)],64))),256))],512),[[m,e.ModuleConfigurations.length>0]]),h(v("div",kn,[v("p",$n,I(e.$t("No configuration options for this module")),1)],512),[[m,e.ModuleConfigurations.length===0]]),e.ModuleSettings&&e.ModuleSettings.customConfiguration?(s(),w("div",En,[(s(),y(ne(e.ModuleSettings.customConfiguration),{config:e.widget.config,onOnChange:e.onChange},null,40,["config","onOnChange"]))])):f("",!0),e.ModuleSettings.addDevice!==!1?(s(),w(R,{key:1},[v("div",Kn,I(e.$t("Module Devices")),1),o(M,{style:{margin:"0 -0 8px 0"}}),v("div",Ln,[o(K,{onOnChange:e.onChange,ModuleConfigValues:e.ModuleConfigValues,itemList:e.widget.items||[],module:e.widget.module},null,8,["onOnChange","ModuleConfigValues","itemList","module"])])],64)):f("",!0)],512),[[m,e.widget.module]])]),_:1})]),_:1}),o(M),o(Ue,{align:"right"},{default:u(()=>[o(T,{flat:"",label:e.$t("Cancel"),color:"negative",onClick:e.onCancel},null,8,["label","onClick"]),o(T,{flat:"",label:e.$t("Apply"),color:"primary",onClick:e.onSave,disable:e.hasErrors},null,8,["label","onClick","disable"])]),_:1})]),_:1})):f("",!0)]),_:1},8,["model-value"])}var Mn=re(cn,[["render",Bn],["__scopeId","data-v-07784988"]]);export{Mn as W};
