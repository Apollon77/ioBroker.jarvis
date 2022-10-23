import{bt as P,a4 as L,bM as Q,cs as R,bw as U,Q as y,dc as G,dS as J,dw as f,k as D,aZ as W,ao as Z,bR as p,aG as B,ay as l,W as c,V as v,b3 as E,bn as h,a2 as O,d3 as X,b1 as Y,a1 as _,D as x,I as H,aE as V,A as k,C as ee,U as m,aI as b,dT as te}from"./index-517dcfcd.js";const{capitalize:ne}=te,ae=L({name:"ModuleHomeKitTile",props:["_containerSize","widget"],setup(e){const w=Q(),I=R(),z=U(),F=y(()=>e.widget.config),r=y(()=>({...G.joinConfig(F.value,J)})),t=y(()=>e.widget.items&&e.widget.items[0]||{}),u=y(()=>f.get(t.value.deviceId)),n=D({}),a=D({}),g=y(()=>({on:"true",off:"false",...n.value&&n.value.properties||{}})),T=y(()=>n.value&&n.value.val!==void 0&&n.value.val.toString()===g.value.on.toString()),$=(i,s,o,d)=>{if(S.value=!0,i){C.value=i;return}n.value=d},q=(i,s,o,d)=>{if(S.value=!0,i){C.value=i;return}a.value=d},S=D(!1),C=D();let K=[];W(()=>{u.value?t.value.bodyStateKey||t.value.primaryStateKey?(t.value.primaryStateKey&&(K=K.concat(f.listen(u.value.id,t.value.primaryStateKey,$))),t.value.bodyStateKey&&(K=K.concat(f.listen(u.value.id,t.value.bodyStateKey,q)))):S.value=!0:(C.value="HomeKitTile: "+w.t("Device {deviceId} not found").replace("{deviceId}",t.value.deviceId),console.warn(C.value),S.value=!0)}),Z(()=>f.unlisten(K));const j=(i,s,o)=>{if(Array.isArray(o))return o.some(N=>j(i,s,N));const d=r.value[i+ne(s)];return d===null?!1:o==="secondaryStates"?d===o&&t.value.secondaryStatesKeys:o==="state"?d===o&&t.value.primaryStateKey:o==="bodyElement"?d===o&&t.value.bodyStateKey&&t.value.bodyElement:o==="actionElement"?d===o&&t.value.primaryStateKey&&t.value.actionElement:d===o},A=(i,s="action",o="State")=>p.Components[i]&&p.Components[i][s][o]||p.Components._defaults&&p.Components._defaults[s][o]||null,M=()=>{if(r.value.action==="website"&&(r.value.website.indexOf("http")>-1||r.value.website.indexOf("www")>-1))window.open((r.value.website.indexOf("http")===-1?"http://":"")+r.value.website,"_blank");else if(r.value.action==="page"&&r.value.jumper)I.push({params:{tabId:r.value.jumper}}).catch(i=>console.warn(i));else if(r.value.action==="popup"&&u.value)z.set({selectedDeviceId:u.value.id});else if(u.value&&r.value.action==="trigger"&&t.value.primaryStateKey){const i=T.value?g.value.setOff:g.value.setOn;let s=T.value?g.value.off:g.value.on;s=typeof s=="string"&&(s==="true"||s==="false")?s==="true":s,f.set(u.value.id,t.value.primaryStateKey,i!==void 0?i:s)}};return{FunctionsComponents:p.Components,FunctionsIcons:p.Icons,horizontal:["left","center","right"],vertical:["top","middle","bottom"],moduleConfig:r,loaded:S,error:C,device:u,deviceConfig:t,primaryState:n,bodyState:a,setDevice:f.set,getComponent:A,hasElement:j,jump:M}}}),ie=["v-ripple"],oe={key:0,class:"q-focus-helper"},se={key:1,class:"q-pa-sm full-height"};function le(e,w,I,z,F,r){const t=B("alert"),u=B("icon");return l(),c("div",{class:k(["HomeKitTile grid",{"cursor-pointer":e.moduleConfig.action&&e.moduleConfig.action!=="none","q-hoverable":e.moduleConfig.action&&e.moduleConfig.action!=="none"}]),style:ee({height:e._containerSize.height+"px",width:e._containerSize.width+"px"}),onClick:w[0]||(w[0]=(...n)=>e.jump&&e.jump(...n)),"v-ripple":e.moduleConfig.action&&e.moduleConfig.action!=="none"},[e.moduleConfig.action&&e.moduleConfig.action!=="none"?(l(),c("span",oe)):v("",!0),E(O(X,{indeterminate:""},null,512),[[h,!e.loaded&&!e.error]]),E(O(t,null,{default:Y(()=>[_(x(e.error),1)]),_:1},512),[[h,e.loaded&&e.error]]),e.device?E((l(),c("div",se,[(l(!0),c(H,null,V(e.vertical,n=>(l(),c("div",{key:n,class:k([n,"item row nowrap"])},[(l(!0),c(H,null,V(e.horizontal,a=>(l(),c("div",{key:a,class:k(["col-grow",a])},[e.hasElement(n,a,"icon")?(l(),m(u,{key:0,alignment:a,styles:e.primaryState.iconStyle||{},loading:!e.loaded,name:e.primaryState.icon,color:"primary",IconButton:""},null,8,["alignment","styles","loading","name"])):v("",!0),e.hasElement(n,a,"deviceIcon")?(l(),m(u,{key:1,alignment:a,styles:e.primaryState.iconStyle||{},loading:!e.loaded,name:e.device.icon||e.FunctionsIcons[e.device.function],color:"primary",IconButton:""},null,8,["alignment","styles","loading","name"])):v("",!0),e.hasElement(n,a,"label")?(l(),m(b(e.FunctionsComponents._defaults.components.Title),{key:2,alignment:a,device:e.device,state:e.bodyState,stateKey:e.deviceConfig.bodyStateKey,deviceConfig:e.deviceConfig,onSetDevice:e.setDevice},null,40,["alignment","device","state","stateKey","deviceConfig","onSetDevice"])):v("",!0),e.hasElement(n,a,"secondaryStates")?(l(),m(b(e.FunctionsComponents._defaults.components.SecondaryStates),{key:3,alignment:a,device:e.device,state:e.primaryState,stateKey:e.deviceConfig.primaryStateKey,deviceConfig:e.deviceConfig,onSetDevice:e.setDevice},null,40,["alignment","device","state","stateKey","deviceConfig","onSetDevice"])):v("",!0),e.hasElement(n,a,"state")?(l(),m(b(e.FunctionsComponents._defaults.components.State),{key:4,alignment:a,device:e.device,state:e.primaryState,stateKey:e.deviceConfig.primaryStateKey,deviceConfig:e.deviceConfig,onSetDevice:e.setDevice},null,40,["alignment","device","state","stateKey","deviceConfig","onSetDevice"])):v("",!0),e.hasElement(n,a,"bodyElement")?(l(),m(b(e.getComponent(e.device.function,"body",e.deviceConfig.bodyElement)),{key:5,alignment:a,device:e.device,state:e.bodyState,stateKey:e.deviceConfig.bodyStateKey,deviceConfig:e.deviceConfig,onSetDevice:e.setDevice},null,40,["alignment","device","state","stateKey","deviceConfig","onSetDevice"])):v("",!0),e.hasElement(n,a,"actionElement")?(l(),m(b(e.getComponent(e.device.function,"action",e.deviceConfig.actionElement)),{key:6,alignment:a,device:e.device,state:e.primaryState,stateKey:e.deviceConfig.primaryStateKey,deviceConfig:e.deviceConfig,onSetDevice:e.setDevice},null,40,["alignment","device","state","stateKey","deviceConfig","onSetDevice"])):v("",!0)],2))),128))],2))),128))],512)),[[h,e.loaded&&!e.error]]):v("",!0)],14,ie)}var ue=P(ae,[["render",le],["__scopeId","data-v-77776564"]]);export{ue as default};
