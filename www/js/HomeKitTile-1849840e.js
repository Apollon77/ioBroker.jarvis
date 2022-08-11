import{bt as M,a4 as P,bI as Q,co as U,bw as G,Q as f,d7 as J,dM as R,dr as K,k as E,aZ as W,ao as Z,bL as y,aG as T,ay as l,W as v,V as d,b3 as I,bn as h,a2 as O,c$ as X,b1 as Y,a1 as _,D as x,I as H,aE as V,A as k,C as ee,U as m,aI as b,dN as te}from"./index-377e822f.js";const{capitalize:ne}=te,ae=P({name:"ModuleHomeKitTile",props:["_containerSize","widget"],setup(e){const w=Q(),z=U(),F=G(),j=f(()=>e.widget.config),r=f(()=>({...J.joinConfig(j.value,R)})),t=f(()=>e.widget.items&&e.widget.items[0]||{}),u=f(()=>K.get(t.value.deviceId)),n=E({}),a=E({}),p=f(()=>({on:"true",off:"false",...n.value&&n.value.properties||{}})),B=f(()=>n.value&&n.value.val!==void 0&&n.value.val.toString()===p.value.on.toString()),$=(i,o)=>{if(g.value=!0,i){C.value=i;return}n.value=o},N=(i,o)=>{if(g.value=!0,i){C.value=i;return}a.value=o},g=E(!1),C=E();let S=[];W(()=>{u.value?t.value.bodyStateKey||t.value.primaryStateKey?(t.value.primaryStateKey&&(S=S.concat(K.listen(u.value.id,t.value.primaryStateKey,$))),t.value.bodyStateKey&&(S=S.concat(K.listen(u.value.id,t.value.bodyStateKey,N)))):g.value=!0:(C.value="HomeKitTile: "+w.t("Device {deviceId} not found").replace("{deviceId}",t.value.deviceId),console.warn(C.value),g.value=!0)}),Z(()=>K.unlisten(S));const D=(i,o,s)=>{if(Array.isArray(s))return s.some(L=>D(i,o,L));const c=r.value[i+ne(o)];return c===null?!1:s==="secondaryStates"?c===s&&t.value.secondaryStatesKeys:s==="state"?c===s&&t.value.primaryStateKey:s==="bodyElement"?c===s&&t.value.bodyStateKey&&t.value.bodyElement:s==="actionElement"?c===s&&t.value.primaryStateKey&&t.value.actionElement:c===s},q=(i,o="action",s="State")=>y.Components[i]&&y.Components[i][o][s]||y.Components._defaults&&y.Components._defaults[o][s]||null,A=()=>{if(r.value.action==="website"&&(r.value.website.indexOf("http")>-1||r.value.website.indexOf("www")>-1))window.open((r.value.website.indexOf("http")===-1?"http://":"")+r.value.website,"_blank");else if(r.value.action==="page"&&r.value.jumper)z.push({params:{tabId:r.value.jumper}}).catch(i=>console.warn(i));else if(r.value.action==="popup"&&u.value)F.set({selectedDeviceId:u.value.id});else if(u.value&&r.value.action==="trigger"&&t.value.primaryStateKey){const i=B.value?p.value.setOff:p.value.setOn;let o=B.value?p.value.off:p.value.on;o=typeof o=="string"&&(o==="true"||o==="false")?o==="true":o,K.set(u.value.id,t.value.primaryStateKey,i!==void 0?i:o)}};return{FunctionsComponents:y.Components,FunctionsIcons:y.Icons,horizontal:["left","center","right"],vertical:["top","middle","bottom"],moduleConfig:r,loaded:g,error:C,device:u,deviceConfig:t,primaryState:n,bodyState:a,getComponent:q,hasElement:D,jump:A}}}),oe=["v-ripple"],ie={key:0,class:"q-focus-helper"},se={key:1,class:"q-pa-sm full-height"};function le(e,w,z,F,j,r){const t=T("alert"),u=T("icon");return l(),v("div",{class:k(["HomeKitTile grid",{"cursor-pointer":e.moduleConfig.action&&e.moduleConfig.action!=="none","q-hoverable":e.moduleConfig.action&&e.moduleConfig.action!=="none"}]),style:ee({height:e._containerSize.height+"px",width:e._containerSize.width+"px"}),onClick:w[0]||(w[0]=(...n)=>e.jump&&e.jump(...n)),"v-ripple":e.moduleConfig.action&&e.moduleConfig.action!=="none"},[e.moduleConfig.action&&e.moduleConfig.action!=="none"?(l(),v("span",ie)):d("",!0),I(O(X,{indeterminate:""},null,512),[[h,!e.loaded&&!e.error]]),I(O(t,null,{default:Y(()=>[_(x(e.error),1)]),_:1},512),[[h,e.loaded&&e.error]]),e.device?I((l(),v("div",se,[(l(!0),v(H,null,V(e.vertical,n=>(l(),v("div",{key:n,class:k([n,"item row nowrap"])},[(l(!0),v(H,null,V(e.horizontal,a=>(l(),v("div",{key:a,class:k(["col-grow",a])},[e.hasElement(n,a,"icon")?(l(),m(u,{key:0,alignment:a,styles:e.primaryState.iconStyle||{},loading:!e.loaded,name:e.primaryState.icon,color:"primary",IconButton:""},null,8,["alignment","styles","loading","name"])):d("",!0),e.hasElement(n,a,"deviceIcon")?(l(),m(u,{key:1,alignment:a,styles:e.primaryState.iconStyle||{},loading:!e.loaded,name:e.device.icon||e.FunctionsIcons[e.device.function],color:"primary",IconButton:""},null,8,["alignment","styles","loading","name"])):d("",!0),e.hasElement(n,a,"label")?(l(),m(b(e.FunctionsComponents._defaults.components.Title),{key:2,alignment:a,device:e.device,state:e.bodyState,stateKey:e.deviceConfig.bodyStateKey,deviceConfig:e.deviceConfig},null,8,["alignment","device","state","stateKey","deviceConfig"])):d("",!0),e.hasElement(n,a,"secondaryStates")?(l(),m(b(e.FunctionsComponents._defaults.components.SecondaryStates),{key:3,alignment:a,device:e.device,state:e.primaryState,stateKey:e.deviceConfig.primaryStateKey,deviceConfig:e.deviceConfig},null,8,["alignment","device","state","stateKey","deviceConfig"])):d("",!0),e.hasElement(n,a,"state")?(l(),m(b(e.FunctionsComponents._defaults.components.State),{key:4,alignment:a,device:e.device,state:e.primaryState,stateKey:e.deviceConfig.primaryStateKey,deviceConfig:e.deviceConfig},null,8,["alignment","device","state","stateKey","deviceConfig"])):d("",!0),e.hasElement(n,a,"bodyElement")?(l(),m(b(e.getComponent(e.device.function,"body",e.deviceConfig.bodyElement)),{key:5,alignment:a,device:e.device,state:e.bodyState,stateKey:e.deviceConfig.bodyStateKey,deviceConfig:e.deviceConfig},null,8,["alignment","device","state","stateKey","deviceConfig"])):d("",!0),e.hasElement(n,a,"actionElement")?(l(),m(b(e.getComponent(e.device.function,"action",e.deviceConfig.actionElement)),{key:6,alignment:a,device:e.device,state:e.primaryState,stateKey:e.deviceConfig.primaryStateKey,deviceConfig:e.deviceConfig},null,8,["alignment","device","state","stateKey","deviceConfig"])):d("",!0)],2))),128))],2))),128))],512)),[[h,e.loaded&&!e.error]]):d("",!0)],14,oe)}var ue=M(ae,[["render",le],["__scopeId","data-v-785412ec"]]);export{ue as default};
