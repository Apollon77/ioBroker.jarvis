import{_ as L,q as Q,dg as S,aA as A,c as I,d7 as B,dw as M,a4 as b,z as N,j as P,o as l,d as T,J as h,a2 as _,k as r,d1 as V,w as i,n as j,i as c,t as f,Q as u,a as m,e as D,f as $,cI as E,dn as F,d6 as O,cG as H}from"./index-8c8fca3a.js";import{c as J,Q as R,b as g}from"./QTable-051274b9.js";import"./QVirtualScroll-8505407f.js";const q=Q({name:"AdapterLogs",props:["widget","_containerSize"],setup(s){const v=F.getConnection,k=S(),C=A(s.widget,"config"),t=I(()=>B.joinConfig(C.value,M)),z=[{name:"from",field:"from",label:"Adapter",align:"left",sortable:!0},{name:"ts",field:"ts",label:"Time",align:"left",sortable:!0},{name:"severity",field:"severity",label:"Severity",align:"left",sortable:!0},{name:"message",field:"message",label:"Message",align:"left",sortable:!1}],p=I(()=>({sortBy:t.value.sortColumn||"",descending:t.value.sortDirection!==void 0?t.value.sortDirection:!1,rowsPerPage:t.value.rowsPerPage||10})),a=e=>!(!t.value.adapters.includes(e.from)||!t.value.severity.includes(e.severity)||t.value.message&&RegExp(t.value.message,"gi").test(e.message)),y=(e,n)=>(e.from.startsWith("host.")||e.from,e.raw=e.message,e._id=O(),e.ts=Number.isInteger(e.ts)?H(e.ts,t.value.timeFormat||"dd.MM.yyyy HH:mm:ss"):e.ts,e.icon=n[e.from]&&n[e.from].extIcon?"img:"+n[e.from].extIcon:"",e.message=e.message.replace(e.from,""),e.message=e.message.indexOf(") ")!==-1?e.message.substr(e.message.indexOf(") ")+2):e.message,e),x=b(!1),w=b(null),d=b();return N(()=>{const e=k.instances.val||{};v.getLogs("current").then(n=>{d.value=n.filter(o=>a(o)).map(o=>y(o,e)),E.getInstance().on("message",o=>{a(o)&&d.value.unshift(y(o,e))}),v.on("_log",o=>{a(o)&&d.value.unshift(y(o,e))})}).catch(n=>{console.error(n),w.value=n.message||n}).finally(()=>{x.value=!0})}),{moduleConfig:t,columns:z,columnsVisible:["from","ts","severity","message"],pagination:p,loaded:x,error:w,logs:d}}});function G(s,v,k,C,t,z){const p=P("alert");return l(),T("div",{key:s.widget.revision,class:"jarvis-AdapterLogs",style:j({height:s._containerSize.height+"px"})},[h(r(V,{indeterminate:""},null,512),[[_,!s.loaded&&!s.error]]),h(r(p,null,{default:i(()=>[c(f(s.error),1)]),_:1},512),[[_,s.loaded&&s.error]]),h(r(J,{rows:s.logs,flat:"",dense:s.moduleConfig.dense,pagination:s.pagination,"binary-state-sort":"",columns:s.columns,"row-key":"_id","visible-columns":s.columnsVisible,class:"sticky-table-header full-height"},{body:i(({row:a})=>[r(R,null,{default:i(()=>[r(g,null,{default:i(()=>[r(u,{name:a.icon},null,8,["name"]),c(" \xA0"+f(a.from),1)]),_:2},1024),r(g,null,{default:i(()=>[c(f(a.ts),1)]),_:2},1024),r(g,null,{default:i(()=>[a.severity==="info"?(l(),m(u,{key:0,size:"xs",name:"mdi-information",color:"blue"})):a.severity==="warn"?(l(),m(u,{key:1,size:"xs",name:"mdi-alert-box",color:"warning"})):a.severity==="error"?(l(),m(u,{key:2,size:"xs",name:"mdi-close-box",color:"negative"})):(l(),m(u,{key:3,size:"xs",name:"mdi-bug",color:"grey"})),D("span",{style:{"margin-left":"4px"},class:$("text-"+(a.severity==="info"?"primary":a.severity==="warn"?"warning":a.severity==="error"?"negative":"grey"))},f(a.severity),3)]),_:2},1024),r(g,null,{default:i(()=>[c(f(typeof a.message=="object"?JSON.stringify(a.message):a.message),1)]),_:2},1024)]),_:2},1024)]),_:1},8,["rows","dense","pagination","columns","visible-columns"]),[[_,s.loaded&&!s.error]])],4)}var X=L(q,[["render",G]]);export{X as default};
