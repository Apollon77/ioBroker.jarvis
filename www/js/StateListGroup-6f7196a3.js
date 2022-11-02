import{a4 as I,k as N,Q as D,dw as g,ao as k,bR as G,bt as L,ay as p,U as y,b1 as m,a2 as _,bH as h,bO as O,a1 as V,D as $,W as B,aI as Q,ak as w,V as C,bG as E}from"./index-2eefae4b.js";const F=I({name:"ModuleStateListGroup",props:["devices","deviceConfig"],setup(t){const u=N({}),S=D(()=>{const n=Object.values(u.value),f=n.filter(s=>s===!0),e=n.filter(s=>s===!1);return n.length===f.length?!0:n.length===e.length?!1:null}),v=(n,f,e,s)=>{if(n)return;const{item:r}=t.devices[f.id+"#"+e]||{},i=s&&s.val!==void 0?s.val:null;if(r&&r.useInGroup!==!1){let{on:a,off:o}=s&&s.properties||{};a=a!==void 0?a:!0,u.value[f.id+"-"+s.stateKey]=i!==null?i.toString()===a.toString()||typeof i=="number"&&i>0:o}},b=(n,f,e=!0)=>{for(const s in t.devices){const{device:r,item:i}=t.devices[s],a=i.primaryStateKey.toLowerCase(),o=r.states[a]&&r.states[a].properties||{},c=u.value[r.id+"-"+i.primaryStateKey],K=typeof c=="boolean"?!1:typeof c=="number"?!0:!Number.isNaN(parseFloat(c))&&c.toString().length===parseFloat(c).toString().length;e===!0&&o.setOn!==void 0?e=o.setOn:e===!1&&o.setOff!==void 0?e=o.setOff:e===!0&&o.on!==void 0||e===!1&&o.off!==void 0?e=e===!0?o.on:o.off:K&&typeof e=="boolean"&&(e=e===!0?parseInt(o.level)||100:0),e=typeof e=="string"&&(e==="true"||e==="false")?e==="true":e;const l=parseInt(e)||null;e=typeof e=="string"&&l!==null&&!Number.isNaN(l)&&l.toString().length===e.length?l:e,i.useInGroup!==!1&&g.set(r.id,i.primaryStateKey,e)}};let d=[];if(t.deviceConfig.actions)for(const n in t.devices)t.devices[n].item.primaryStateKey&&(d=d.concat(g.listen(t.devices[n].device.id,t.devices[n].item.primaryStateKey,v)));return k(()=>g.unlisten(d)),{components:G.Components._defaults.action,groupDevicesStates:u,groupState:S,setDevice:b}}}),W={key:0};function j(t,u,S,v,b,d){return p(),y(E,{dense:"",class:"jarvis-StateListGroup"},{default:m(()=>[_(h,null,{default:m(()=>[_(O,{overline:""},{default:m(()=>[V($(t.deviceConfig.name),1)]),_:1})]),_:1}),t.deviceConfig.actions===!0?(p(),y(h,{key:0,side:""},{default:m(()=>[t.deviceConfig.groupElement?(p(),B("div",W,[(p(),y(Q(t.components[t.deviceConfig.groupElement]),w(t.$props,{onSetDevice:t.setDevice,device:{id:"group"},stateKey:"group",state:{config:{display:{false:"off",true:"on"}},properties:{},stateStyle:{},val:t.groupState}}),null,16,["onSetDevice","state"]))])):C("",!0)]),_:1})):C("",!0)]),_:1})}var U=L(F,[["render",j]]);export{U as default};
