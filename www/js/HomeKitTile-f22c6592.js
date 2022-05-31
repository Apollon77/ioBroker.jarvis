var M=Object.defineProperty;var H=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var B=(e,s,r)=>s in e?M(e,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[s]=r,q=(e,s)=>{for(var r in s||(s={}))R.call(s,r)&&B(e,r,s[r]);if(H)for(var r of H(s))Q.call(s,r)&&B(e,r,s[r]);return e};import{_ as U,q as X,X as G,cs as W,H as Y,aA as Z,d7 as _,dN as x,c as b,a3 as h,y as ee,A as te,dr as f,a4 as K,j as A,o as v,d as c,g as m,J as E,a2 as k,k as N,w as ne,F as V,l as $,f as I,n as ae,d1 as ie,i as oe,t as se,a as y,ae as w,dO as le}from"./index-29fd0eef.js";const{capitalize:re}=le,de=X({name:"ModuleHomeKitTile",props:["_containerSize","widget"],setup(e){const s=G(),r=W(),j=Y(),z=Z(e.widget,"config"),d=_.joinConfig(z.value,x),t=b(()=>e.widget.items&&e.widget.items[0]||{}),u=b(()=>f.get(t.value.deviceId)),n=h({}),a=h({}),p=b(()=>q({on:"true",off:"false"},n.value&&n.value.properties||{})),F=b(()=>n.value&&n.value.val!==void 0&&n.value.val.toString()===p.value.on.toString()),O=(o,i)=>{if(g.value=!0,o){C.value=o;return}n.value=i},T=(o,i)=>{if(g.value=!0,o){C.value=o;return}a.value=i},g=h(!1),C=h();ee(()=>{u.value?t.value.bodyStateKey||t.value.primaryStateKey?(t.value.primaryStateKey&&f.listen(u.value.id,t.value.primaryStateKey,O),t.value.bodyStateKey&&f.listen(u.value.id,t.value.bodyStateKey,T)):g.value=!0:(C.value="HomeKitTile: "+s.t("Device {deviceId} not found").replace("{deviceId}",t.value.deviceId),console.warn(C.value),g.value=!0)}),te(()=>{u.value&&(f.unlisten(u.value.id,t.value.primaryStateKey,O),f.unlisten(u.value.id,t.value.bodyStateKey,T))});const D=(o,i,l)=>{if(Array.isArray(l))return l.some(L=>D(o,i,L));const S=d[o+re(i)];return l==="secondaryStates"?S===l&&t.value.secondaryStatesKeys:l==="state"?S===l&&t.value.primaryStateKey:l==="bodyElement"?S===l&&t.value.bodyStateKey&&t.value.bodyElement:l==="actionElement"?S===l&&t.value.primaryStateKey&&t.value.actionElement:S===l},P=(o,i="action",l="State")=>K.Components[o]&&K.Components[o][i][l]||K.Components._defaults&&K.Components._defaults[i][l]||null,J=()=>{if(d.action==="website"&&(d.website.indexOf("http")>-1||d.website.indexOf("www")>-1))window.open((d.website.indexOf("http")===-1?"http://":"")+d.website,"_blank");else if(d.action==="page"&&d.jumper)r.push({params:{tabId:d.jumper}}).catch(o=>console.warn(o));else if(d.action==="popup"&&u.value)j.set({selectedDeviceId:u.value.id});else if(u.value&&d.action==="trigger"&&t.value.primaryStateKey){const o=F.value?p.value.setOff:p.value.setOn;let i=F.value?p.value.off:p.value.on;i=typeof i=="string"&&(i==="true"||i==="false")?i==="true":i,f.set(u.value.id,t.value.primaryStateKey,o!==void 0?o:i)}};return{FunctionsComponents:K.Components,horizontal:["left","center","right"],vertical:["top","middle","bottom"],moduleConfig:d,loaded:g,error:C,device:u,deviceConfig:t,primaryState:n,bodyState:a,getComponent:P,hasElement:D,jump:J}}}),ue=["v-ripple"],ve={key:0,class:"q-focus-helper"},me={key:1,class:"q-pa-sm full-height"};function ce(e,s,r,j,z,d){const t=A("alert"),u=A("icon");return v(),c("div",{class:I(["HomeKitTile grid",{"cursor-pointer":e.moduleConfig.action&&e.moduleConfig.action!=="none","q-hoverable":e.moduleConfig.action&&e.moduleConfig.action!=="none"}]),style:ae({height:e._containerSize.height+"px",width:e._containerSize.width+"px"}),onClick:s[0]||(s[0]=(...n)=>e.jump&&e.jump(...n)),"v-ripple":e.moduleConfig.action&&e.moduleConfig.action!=="none"},[e.moduleConfig.action&&e.moduleConfig.action!=="none"?(v(),c("span",ve)):m("",!0),E(N(ie,{indeterminate:""},null,512),[[k,!e.loaded&&!e.error]]),E(N(t,null,{default:ne(()=>[oe(se(e.error),1)]),_:1},512),[[k,e.loaded&&e.error]]),e.device?E((v(),c("div",me,[(v(!0),c(V,null,$(e.vertical,n=>(v(),c("div",{key:n,class:I([n,"item row nowrap"])},[(v(!0),c(V,null,$(e.horizontal,a=>(v(),c("div",{key:a,class:I(["col-grow",a])},[e.hasElement(n,a,"icon")?(v(),y(u,{key:0,alignment:a,styles:e.primaryState.iconStyle||{},loading:!e.loaded,name:e.primaryState.icon,color:"primary",IconButton:""},null,8,["alignment","styles","loading","name"])):m("",!0),e.hasElement(n,a,"label")?(v(),y(w(e.FunctionsComponents._defaults.components.Title),{key:1,alignment:a,device:e.device,state:e.bodyState,stateKey:e.deviceConfig.bodyStateKey,deviceConfig:e.deviceConfig},null,8,["alignment","device","state","stateKey","deviceConfig"])):m("",!0),e.hasElement(n,a,"secondaryStates")?(v(),y(w(e.FunctionsComponents._defaults.components.SecondaryStates),{key:2,alignment:a,device:e.device,state:e.primaryState,stateKey:e.deviceConfig.primaryStateKey,deviceConfig:e.deviceConfig},null,8,["alignment","device","state","stateKey","deviceConfig"])):m("",!0),e.hasElement(n,a,"state")?(v(),y(w(e.FunctionsComponents._defaults.components.State),{key:3,alignment:a,device:e.device,state:e.primaryState,stateKey:e.deviceConfig.primaryStateKey,deviceConfig:e.deviceConfig},null,8,["alignment","device","state","stateKey","deviceConfig"])):m("",!0),e.hasElement(n,a,"bodyElement")?(v(),y(w(e.getComponent(e.device.function,"body",e.deviceConfig.bodyElement)),{key:4,alignment:a,device:e.device,state:e.bodyState,stateKey:e.deviceConfig.bodyStateKey,deviceConfig:e.deviceConfig},null,8,["alignment","device","state","stateKey","deviceConfig"])):m("",!0),e.hasElement(n,a,"actionElement")?(v(),y(w(e.getComponent(e.device.function,"action",e.deviceConfig.actionElement)),{key:5,alignment:a,device:e.device,state:e.primaryState,stateKey:e.deviceConfig.primaryStateKey,deviceConfig:e.deviceConfig},null,8,["alignment","device","state","stateKey","deviceConfig"])):m("",!0)],2))),128))],2))),128))],512)),[[k,e.loaded&&!e.error]]):m("",!0)],14,ue)}var pe=U(de,[["render",ce],["__scopeId","data-v-7c42c76d"]]);export{pe as default};
