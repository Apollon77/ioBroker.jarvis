import{a4 as L,Q as C,da as D,ds as h,k as f,aZ as w,dt as p,cq as I,ao as K,bt as B,aG as _,ay as n,U as c,b1 as E,W as g,aE as F,I as b,V as k,bU as P,A as $,bH as j}from"./index-6f5af1db.js";import z from"./StateListGroup-c7e8c531.js";import Q from"./StateListItem-e74779ac.js";const U=L({name:"ModuleStateList",props:["widget","isPopup","openDeviceDetails"],components:{StateListGroup:z,StateListItem:Q},setup(t){const S=C(()=>t.widget.config),y=C(()=>({...D.joinConfig(S.value,h)})),r=f({}),u=f({}),m=(i,s,o,v)=>{if(i||!v)return u.value[s.id+":"+o]=i&&i.message||i,console.warn("StateList",t.widget.id,u.value[s.id+":"+o]),u.value[s.id+":"+o];r.value[s.id+":"+v.key]=v};let l=f([]),a=null,e={},d=[];return w(()=>{l.value=[],a=null,e={},t.widget.items.forEach(i=>{if(i.type==="group"&&(a=i.id,e[a]={}),i.type==="divider"&&(a=null),i.type==="device"){const s=p.get(i.deviceId);if(!s)I.warn("StateList","Device with ID "+i.deviceId+" not found!");else{l.value.push({item:i,device:s});const o=i;a!==null&&e[a]!==void 0&&(e[a][s.id+"#"+i.primaryStateKey]={item:i,device:s}),r.value[s.id+":"+o.primaryStateKey]={},o.primaryStateKey&&(d=d.concat(p.listen(s.id,o.primaryStateKey,m))),r.value[s.id+":"+o.bodyStateKey]={},o.bodyStateKey&&(d=d.concat(p.listen(s.id,o.bodyStateKey,m)))}}else l.value.push({item:i})})}),K(()=>p.unlisten(d)),{entries:l,groups:e,moduleConfig:y,states:r,errors:u}}}),G={key:0};function M(t,S,y,r,u,m){const l=_("state-list-group"),a=_("state-list-item");return n(),c(j,{key:t.widget.revision,dense:t.moduleConfig.dense,class:$(["jarvis-StateList",{horizontal:t.moduleConfig.horizontal,stacked:t.moduleConfig.stacked}])},{default:E(()=>[(n(!0),g(b,null,F(t.entries,(e,d)=>(n(),g(b,{key:"item-"+e.item.id},[e.item.type==="group"?(n(),g("div",G)):k("",!0),e.item.type==="group"?(n(),c(l,{key:1,devices:t.groups[e.item.id],deviceConfig:e.item,moduleConfig:t.moduleConfig},null,8,["devices","deviceConfig","moduleConfig"])):e.item.type==="device"?(n(),c(a,{key:"state-list-item-"+e.item.id,isFirstItem:d===0,device:e.device,deviceConfig:e.item,primaryState:t.states[e.device.id+":"+e.item.primaryStateKey],bodyState:t.states[e.device.id+":"+e.item.bodyStateKey],isPopup:t.isPopup,openDeviceDetails:t.openDeviceDetails,error:t.errors[e.device.id+":"+e.item.bodyStateKey]},null,8,["isFirstItem","device","deviceConfig","primaryState","bodyState","isPopup","openDeviceDetails","error"])):e.item.type==="divider"?(n(),c(P,{key:3,class:"jarvis-StateListSeparator"})):k("",!0)],64))),128))]),_:1},8,["dense","class"])}var H=B(U,[["render",M],["__scopeId","data-v-5c138bfa"]]);export{H as default};
