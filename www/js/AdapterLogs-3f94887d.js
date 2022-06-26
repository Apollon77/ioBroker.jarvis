import{_ as Q,q as S,dn as w,dg as B,c as y,a2 as b,y as I,j as M,o as u,d as A,J as h,a1 as _,k as r,w as l,n as N,c$ as P,i as m,t as f,Q as d,a as g,e as T,f as V,d7 as $,dx as j,cG as E,d4 as D,cE as F}from"./index-5ed861c6.js";import{c as O,Q as H,b as v}from"./QTable-03753a4e.js";import"./QVirtualScroll-9d1c4b50.js";const J=S({name:"ModuleAdapterLogs",props:["widget","_containerSize"],setup(a){const p=w.getConnection,k=B(),C=y(()=>a.widget.config),t=y(()=>({...$.joinConfig(C.value,j)})),x=[{name:"from",field:"from",label:"Adapter",align:"left",sortable:!0},{name:"ts",field:"ts",label:"Time",align:"left",sortable:!0},{name:"severity",field:"severity",label:"Severity",align:"left",sortable:!0},{name:"message",field:"message",label:"Message",align:"left",sortable:!1}],i=e=>!(!t.value.adapters.includes(e.from)||!t.value.severity.includes(e.severity)||t.value.message&&RegExp(t.value.message,"gi").test(e.message)),s=(e,o)=>(e.from.startsWith("host.")||e.from,e.raw=e.message,e._id=D(),e.ts=Number.isInteger(e.ts)?F(e.ts,t.value.timeFormat||"dd.MM.yyyy HH:mm:ss"):e.ts,e.icon=o[e.from]&&o[e.from].extIcon?"img:"+o[e.from].extIcon:"",e.message=e.message.replace(e.from,""),e.message=e.message.indexOf(") ")!==-1?e.message.substr(e.message.indexOf(") ")+2):e.message,e),z=b(!1),L=b(null),c=b();return I(()=>{const e=k.instances.val||{};p.getLogs("current").then(o=>{c.value=o.filter(n=>i(n)).map(n=>s(n,e)),E.getInstance().on("message",n=>{i(n)&&c.value.unshift(s(n,e))}),p.on("_log",n=>{i(n)&&c.value.unshift(s(n,e))})}).catch(o=>{console.error(o),L.value=o.message||o}).finally(()=>{z.value=!0})},{flush:"post"}),{moduleConfig:t,columns:x,columnsVisible:["from","ts","severity","message"],pagination:y(()=>({sortBy:t.value.sortColumn,descending:t.value.sortDirection,rowsPerPage:t.value.rowsPerPage})),loaded:z,error:L,logs:c}}});function q(a,p,k,C,t,x){const i=M("alert");return u(),A("div",{key:a.widget.revision,class:"jarvis-AdapterLogs",style:N({height:a._containerSize.height+"px"})},[h(r(P,{indeterminate:""},null,512),[[_,!a.loaded&&!a.error]]),h(r(i,null,{default:l(()=>[m(f(a.error),1)]),_:1},512),[[_,a.loaded&&a.error]]),h(r(O,{rows:a.logs,flat:"",dense:a.moduleConfig.dense,pagination:a.pagination,"binary-state-sort":"",columns:a.columns,"row-key":"_id","visible-columns":a.columnsVisible,class:"sticky-table-header full-height"},{body:l(({row:s})=>[r(H,null,{default:l(()=>[r(v,null,{default:l(()=>[r(d,{name:s.icon},null,8,["name"]),m(" \xA0"+f(s.from),1)]),_:2},1024),r(v,null,{default:l(()=>[m(f(s.ts),1)]),_:2},1024),r(v,null,{default:l(()=>[s.severity==="info"?(u(),g(d,{key:0,size:"xs",name:"mdi-information",color:"blue"})):s.severity==="warn"?(u(),g(d,{key:1,size:"xs",name:"mdi-alert-box",color:"warning"})):s.severity==="error"?(u(),g(d,{key:2,size:"xs",name:"mdi-close-box",color:"negative"})):(u(),g(d,{key:3,size:"xs",name:"mdi-bug",color:"grey"})),T("span",{style:{"margin-left":"4px"},class:V("text-"+(s.severity==="info"?"primary":s.severity==="warn"?"warning":s.severity==="error"?"negative":"grey"))},f(s.severity),3)]),_:2},1024),r(v,null,{default:l(()=>[m(f(typeof s.message=="object"?JSON.stringify(s.message):s.message),1)]),_:2},1024)]),_:2},1024)]),_:1},8,["rows","dense","pagination","columns","visible-columns"]),[[_,a.loaded&&!a.error]])],4)}var K=Q(J,[["render",q]]);export{K as default};
