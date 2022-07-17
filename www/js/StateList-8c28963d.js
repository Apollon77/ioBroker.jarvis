import{q as b,c as g,d8 as L,dr as K,a4 as y,z as h,ds as r,cl as k,b8 as w,_ as D,j as S,o as n,a as p,w as I,d as u,l as j,F as _,g as C,a8 as z,f as F,O as B}from"./index-52a12785.js";import P from"./StateListGroup-52a2a8b2.js";import $ from"./StateListItem-1a820acf.js";const E=b({name:"ModuleStateList",props:["widget","isPopup","openDeviceDetails"],components:{StateListGroup:P,StateListItem:$},setup(i){const v=g(()=>i.widget.config),m=g(()=>({...L.joinConfig(v.value,K)})),l=y({}),f=(e,a,o)=>{if(e||!a)return console.warn("StateList",e&&e.message,e),e&&e.message||e;l.value[o.id+":"+a.key]=a};let c=y([]),s=null,d={},t=[];return h(()=>{c.value=[],s=null,d={},i.widget.items.forEach(e=>{if(e.type==="group"&&(s=e.id,d[s]={}),e.type==="divider"&&(s=null),e.type==="device"){const a=r.get(e.deviceId);if(!a)k.warn("StateList","Device with ID "+e.deviceId+" not found!");else{c.value.push({item:e,device:a});const o=e;s!==null&&d[s]!==void 0&&(d[s][a.id+"#"+e.primaryStateKey]={item:e,device:a}),l.value[a.id+":"+o.primaryStateKey]={},o.primaryStateKey&&(t=t.concat(r.listen(a.id,o.primaryStateKey,f))),l.value[a.id+":"+o.bodyStateKey]={},o.bodyStateKey&&(t=t.concat(r.listen(a.id,o.bodyStateKey,f)))}}else c.value.push({item:e})})}),w(()=>r.unlisten(t)),{entries:c,groups:d,moduleConfig:m,states:l}}}),M={key:0};function Q(i,v,m,l,f,c){const s=S("state-list-group"),d=S("state-list-item");return n(),p(B,{key:i.widget.revision,dense:i.moduleConfig.dense,class:F(["jarvis-StateList",{horizontal:i.moduleConfig.horizontal,stacked:i.moduleConfig.stacked}])},{default:I(()=>[(n(!0),u(_,null,j(i.entries,(t,e)=>(n(),u(_,{key:"item-"+t.item.id},[t.item.type==="group"?(n(),u("div",M)):C("",!0),t.item.type==="group"?(n(),p(s,{key:1,devices:i.groups[t.item.id],deviceConfig:t.item,moduleConfig:i.moduleConfig},null,8,["devices","deviceConfig","moduleConfig"])):t.item.type==="device"?(n(),p(d,{key:"state-list-item-"+t.item.id,isFirstItem:e===0,device:t.device,deviceConfig:t.item,primaryState:i.states[t.device.id+":"+t.item.primaryStateKey],bodyState:i.states[t.device.id+":"+t.item.bodyStateKey],isPopup:i.isPopup,openDeviceDetails:i.openDeviceDetails},null,8,["isFirstItem","device","deviceConfig","primaryState","bodyState","isPopup","openDeviceDetails"])):t.item.type==="divider"?(n(),p(z,{key:3,class:"jarvis-StateListSeparator"})):C("",!0)],64))),128))]),_:1},8,["dense","class"])}var O=D(E,[["render",Q],["__scopeId","data-v-b6fc8f1e"]]);export{O as default};
