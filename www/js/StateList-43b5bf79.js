import{a4 as k,Q as g,d7 as b,dq as D,k as y,aZ as h,dr as u,cl as w,ao as K,bt as L,aG as S,ay as n,U as p,b1 as I,W as m,aE as B,I as C,V as _,bO as E,A as F,bB as P}from"./index-377e822f.js";import"./StateListGroup-87fdbb3c.js";import"./StateListItem-fe583cfc.js";const $=k({name:"ModuleStateList",props:["widget","isPopup","openDeviceDetails"],components:{},setup(i){const v=g(()=>i.widget.config),f=g(()=>({...b.joinConfig(v.value,D)})),l=y({}),r=(e,s,o)=>{if(e||!s)return console.warn("StateList",i.widget.id,e&&e.message,e),e&&e.message||e;l.value[o.id+":"+s.key]=s};let c=y([]),a=null,d={},t=[];return h(()=>{c.value=[],a=null,d={},i.widget.items.forEach(e=>{if(e.type==="group"&&(a=e.id,d[a]={}),e.type==="divider"&&(a=null),e.type==="device"){const s=u.get(e.deviceId);if(!s)w.warn("StateList","Device with ID "+e.deviceId+" not found!");else{c.value.push({item:e,device:s});const o=e;a!==null&&d[a]!==void 0&&(d[a][s.id+"#"+e.primaryStateKey]={item:e,device:s}),l.value[s.id+":"+o.primaryStateKey]={},o.primaryStateKey&&(t=t.concat(u.listen(s.id,o.primaryStateKey,r))),l.value[s.id+":"+o.bodyStateKey]={},o.bodyStateKey&&(t=t.concat(u.listen(s.id,o.bodyStateKey,r)))}}else c.value.push({item:e})})}),K(()=>u.unlisten(t)),{entries:c,groups:d,moduleConfig:f,states:l}}}),j={key:0};function z(i,v,f,l,r,c){const a=S("state-list-group"),d=S("state-list-item");return n(),p(P,{key:i.widget.revision,dense:i.moduleConfig.dense,class:F(["jarvis-StateList",{horizontal:i.moduleConfig.horizontal,stacked:i.moduleConfig.stacked}])},{default:I(()=>[(n(!0),m(C,null,B(i.entries,(t,e)=>(n(),m(C,{key:"item-"+t.item.id},[t.item.type==="group"?(n(),m("div",j)):_("",!0),t.item.type==="group"?(n(),p(a,{key:1,devices:i.groups[t.item.id],deviceConfig:t.item,moduleConfig:i.moduleConfig},null,8,["devices","deviceConfig","moduleConfig"])):t.item.type==="device"?(n(),p(d,{key:"state-list-item-"+t.item.id,isFirstItem:e===0,device:t.device,deviceConfig:t.item,primaryState:i.states[t.device.id+":"+t.item.primaryStateKey],bodyState:i.states[t.device.id+":"+t.item.bodyStateKey],isPopup:i.isPopup,openDeviceDetails:i.openDeviceDetails},null,8,["isFirstItem","device","deviceConfig","primaryState","bodyState","isPopup","openDeviceDetails"])):t.item.type==="divider"?(n(),p(E,{key:3,class:"jarvis-StateListSeparator"})):_("",!0)],64))),128))]),_:1},8,["dense","class"])}var V=L($,[["render",z],["__scopeId","data-v-bde4229c"]]);export{V as default};
