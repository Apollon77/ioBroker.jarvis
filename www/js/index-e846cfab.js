import{a4 as N,co as B,dn as L,Q as C,k as z,aY as P,bQ as F,bt as Q,ds as G,aG as w,ay as o,W as y,aE as V,a2 as a,b1 as i,bS as K,A as E,U as l,X as g,a1 as $,D as h,V as k,bT as M,d1 as Z,b3 as b,bn as T,bV as x,bB as _,bE as S,bD as J,bW as ee,I as H,bU as I,cN as te,bG as R,bO as O,bp as A,bF as se,bH as q,bw as ae}from"./index-5acd5d96.js";import{Q as ie}from"./QToolbar-229ec962.js";import{Q as oe}from"./QHeader-09145521.js";import{Q as re}from"./QDrawer-e42136bc.js";import{Q as W}from"./QVirtualScroll-9c07856b.js";import{Q as D}from"./QTooltip-2f3b9699.js";const ne=N({name:"NotificationEventPopup",setup(e){const r=G.getConnection,m=B(),p=L(),f=C(()=>m.dark.isActive),v=z({}),d=z(0),s={},t=(u,n=50)=>{setTimeout(()=>{s[u.id]=Math.max(0,s[u.id]-n),d.value=Date.now(),s[u.id]>0?t(u):v.value[u.id]=!1},n)},c=u=>p.set({notificationId:u.id,props:{state:"read"}}),j=u=>p.set({notificationId:u.id,props:{state:"archived"}}),X=u=>p.del({notificationId:u.id});P(()=>p.new,u=>Y(u.notifications));const U=z([]),Y=u=>{u=F(u),u.forEach(n=>{n.devices=!n.devices||Array.isArray(n.devices)?n.devices:n.devices.indexOf(",")>-1?n.devices.split(","):[n.devices],n.display==="popup"&&(!n.devices||n.devices.includes(r.client.id))&&((n.timeout||n.autoHideDuration||n.progress)&&(n.progress=!0,n.timeout=n.timeout||n.autoHideDuration||5e3,s[n.id]=n.timeout,t(n,500)),v.value[n.id]=!0,U.value.push(n))})};return{isDark:f,notificationList:U,dialogs:v,markAsArchived:j,markAsRead:c,remove:X}}}),le={class:"text-h6"},de={key:0,class:"text-caption"},ce=["innerHTML"];function ue(e,r,m,p,f,v){const d=w("icon");return o(!0),y(H,null,V(e.notificationList,s=>(o(),y("div",{key:s.id},[a(ee,{"model-value":e.dialogs[s.id],onHide:t=>e.dialogs[s.id]=!1,"transition-show":"scale","transition-hide":"scale"},{default:i(()=>[a(K,{class:E({"jarvis-notification-event-popup":!0,[s.category]:s.category!==void 0,["bg-"+(s.color||s.type||s.criticality||"primary")]:!0,["text-"+(s.textColor||"white")]:!0}),style:{width:"550px","max-width":"95vw"}},{default:i(()=>[s.title||s.caption?(o(),l(M,{key:0,class:"jarvis-notification-event-popup-title"},{default:i(()=>[g("div",le,[a(d,{name:s.icon,color:s.iconColor||"primary"},null,8,["name","color"]),$(" "+h(s.title),1)]),s.caption?(o(),y("div",de,h(s.caption),1)):k("",!0)]),_:2},1024)):k("",!0),s.message?(o(),l(M,{key:1,class:"q-pt-none jarvis-notification-event-popup-message"},{default:i(()=>[g("div",{innerHTML:s.message},null,8,ce)]),_:2},1024)):k("",!0),s.progress?(o(),l(M,{key:2,class:E(["q-pa-none",{["updated-"+e.refresh]:!0,["text-"+(s.textColor||s.type||s.criticality||"primary")]:!0,["bg-"+(s.color||"white")]:!0}])},{default:i(()=>[a(Z,{value:e.timers[s.id]?e.timers[s.id]/s.timeout:0,class:"q-mt-md",color:s.color||s.type||s.criticality||"accent"},null,8,["value","color"])]),_:2},1032,["class"])):k("",!0),b(a(x,{class:E(["jarvis-notification-event-popup-actions nowrap",{["bg-"+(s.textColor||s.type||s.criticality||(e.isDark?"grey-10":"white"))]:!0,["text-"+(s.color||"primary")]:!0}])},{default:i(()=>[b(a(_,{dense:"",flat:"",label:e.$t("Delete"),icon:"mdi-delete",color:s.type==="negative"||s.criticality==="negative"?"yellow":"negative",onClick:t=>e.remove(s)},null,8,["label","color","onClick"]),[[S]]),a(J),b(a(_,{dense:"",flat:"",label:e.$t("Archive"),icon:"mdi-package-down",onClick:t=>e.markAsArchived(s)},null,8,["label","onClick"]),[[S]]),b(a(_,{dense:"",flat:"",label:e.$t("Mark as Read"),icon:"mdi-check",onClick:t=>e.markAsRead(s)},null,8,["label","onClick"]),[[S]])]),_:2},1032,["class"]),[[T,s.state!=="delete"]])]),_:2},1032,["class"])]),_:2},1032,["model-value","onHide"])]))),128)}var pe=Q(ne,[["render",ue]]);const me=N({name:"NotificationEventSnackbar",setup(){const e=B(),r=G.getConnection,m=L(),p=t=>m.set({notificationId:t.id,props:{state:"read"}}),f=t=>m.set({notificationId:t.id,props:{state:"archived"}}),v=t=>m.del({notificationId:t.id}),d=(t={})=>{!t.type&&t.criticality&&(t.type=t.criticality==="error"?"negative":t.criticality==="success"?"positive":t.criticality),!t.position&&t.snackbarOrigin&&(t.position=[],t.snackbarOrigin.horizontal&&t.position.push(t.snackbarOrigin.horizontal),t.snackbarOrigin.vertical&&t.position.push(t.snackbarOrigin.vertical),t.position=t.position.join(t.position.length===2?"-":""));const c={badgeStyle:"display: none",html:!0,position:"bottom-right",progress:!0,progressClass:"jarvis-notification-event-snackbar-progress",classes:"jarvis-notification-event-snackbar "+(t.category||""),actions:t.state!=="delete"&&[{icon:"mdi-circle-slice-8",size:"sm",color:t.textColor||"white",handler:()=>p(t)},{icon:"mdi-package-down",size:"sm",color:t.textColor||"white",handler:()=>f(t)},{icon:"mdi-delete",size:"sm",color:t.type==="negative"||t.criticality==="negative"?"yellow":"negative",handler:()=>v(t)}],...t,color:t.type||t.criticality||t.color||"primary",textColor:"white",type:t.type||t.criticality||void 0,timeout:t.timeout||t.autoHideDuration||5e3,message:t.title||t.message,group:t.id};e.notify(c)};P(()=>m.new,t=>s(t.notifications));const s=t=>{t=F(t),t.forEach(c=>{c.devices=!c.devices||Array.isArray(c.devices)?c.devices:c.devices.indexOf(",")>-1?c.devices.split(","):[c.devices],c.display==="snackbar"&&(!c.devices||c.devices.includes(r.client.id))&&d(c)})};return{}}});function ve(e,r,m,p,f,v){return o(),y("div")}var he=Q(me,[["render",ve]]);const fe=N({name:"Divider",props:["label"]}),ke={class:"row full-width"},ye={class:"col",style:{margin:"auto 0"}},ge={style:{"text-align":"center"}},_e={class:"col",style:{margin:"auto 0"}};function $e(e,r,m,p,f,v){return o(),y("div",ke,[g("div",ye,[a(I)]),g("div",ge,[$(" \xA0\xA0"),g("em",null,h(e.label),1),$("\xA0\xA0 ")]),g("div",_e,[a(I)])])}var we=Q(fe,[["render",$e]]);const be=N({name:"NotificationListItem",props:["notification"],setup(e){const r=L();return{show:()=>{r.setNew({notifications:[{...e.notification,progress:!1,autoHideDuration:null,timeout:null}]})},markAsRead:()=>r.set({notificationId:e.notification.id,props:{state:"read"}}),markAsUnread:()=>r.set({notificationId:e.notification.id,props:{state:"unread"}}),markAsArchived:()=>r.set({notificationId:e.notification.id,props:{state:"archived"}}),remove:()=>r.del({notificationId:e.notification.id})}}}),Ae={class:"text-weight-medium"},Ce=["innerHTML"],Ne={class:"text-grey-8 q-gutter-xs"};function Qe(e,r,m,p,f,v){const d=w("icon");return o(),y("div",null,[b((o(),l(se,{clickable:"",class:E(["jarvis-notifications-item",{[e.notification.state||"unread"]:!0,[e.notification.category]:e.notification.category!==void 0}]),onClick:A(e.show,["stop"]),id:"notification-"+e.notification.id},{default:i(()=>[a(R,{avatar:""},{default:i(()=>[a(d,{name:e.notification.icon||"mdi-comment",color:e.notification.iconColor||"primary",size:"sm"},null,8,["name","color"])]),_:1}),a(R,null,{default:i(()=>[a(O,{lines:"1"},{default:i(()=>[g("span",Ae,h(e.notification.title),1),b(g("span",null," - "+h(e.notification.caption),513),[[T,e.notification.caption]])]),_:1}),e.notification.message?(o(),l(O,{key:0,caption:"",lines:"1",style:{"max-height":"200px"}},{default:i(()=>[g("div",{innerHTML:e.notification.message,class:"overflow-dots"},null,8,Ce)]),_:1})):k("",!0)]),_:1}),a(R,{side:""},{default:i(()=>[g("div",Ne,[e.notification.state==="read"?(o(),l(_,{key:0,onClick:A(e.markAsUnread,["stop"]),class:"gt-xs",size:"12px",flat:"",dense:"",round:"",icon:"mdi-check"},{default:i(()=>[a(D,null,{default:i(()=>[$(h(e.$t("Mark as Unread")),1)]),_:1})]),_:1},8,["onClick"])):k("",!0),e.notification.state!=="read"&&e.notification.state!=="archived"?(o(),l(_,{key:1,onClick:A(e.markAsRead,["stop"]),class:"gt-xs",size:"12px",flat:"",dense:"",round:"",icon:"mdi-circle-outline"},{default:i(()=>[a(D,null,{default:i(()=>[$(h(e.$t("Mark as Read")),1)]),_:1})]),_:1},8,["onClick"])):k("",!0),e.notification.state!=="archived"?(o(),l(_,{key:2,onClick:A(e.markAsArchived,["stop"]),class:"gt-xs",size:"12px",flat:"",dense:"",round:"",icon:"mdi-package-down"},{default:i(()=>[a(D,null,{default:i(()=>[$(h(e.$t("Archive")),1)]),_:1})]),_:1},8,["onClick"])):k("",!0),e.notification.state==="archived"?(o(),l(_,{key:3,onClick:A(e.markAsUnread,["stop"]),class:"gt-xs",size:"12px",flat:"",dense:"",round:"",icon:"mdi-package-up"},{default:i(()=>[a(D,null,{default:i(()=>[$(h(e.$t("Restore from Archive")),1)]),_:1})]),_:1},8,["onClick"])):k("",!0),e.notification.state==="archived"?(o(),l(_,{key:4,onClick:A(e.remove,["stop"]),color:"negative",class:"gt-xs",size:"12px",flat:"",dense:"",round:"",icon:"delete"},{default:i(()=>[a(D,null,{default:i(()=>[$(h(e.$t("Delete")),1)]),_:1})]),_:1},8,["onClick"])):k("",!0)])]),_:1})]),_:1},8,["class","onClick","id"])),[[te]]),a(I)])}var De=Q(be,[["render",Qe]]);const Ie=N({name:"NotificationList",components:{NotificationItem:De,Divider:we},setup(){const e=L();return{showArchived:z(!1),notificationsActive:C(()=>e.getActive),notificationsArchived:C(()=>e.getArchived)}}}),Le={class:"q-mt-xs jarvis-notifications-items"},je={key:2};function ze(e,r,m,p,f,v){const d=w("notification-item"),s=w("divider");return o(),y("div",Le,[a(I),e.notificationsActive.length<200?(o(),l(q,{key:0},{default:i(()=>[(o(!0),y(H,null,V(e.notificationsActive,t=>(o(),l(d,{key:t.id,notification:t},null,8,["notification"]))),128))]),_:1})):(o(),l(W,{key:1,items:e.notificationsActive},{default:i(({item:t})=>[a(d,{notification:t},null,8,["notification"])]),_:1},8,["items"])),b(a(_,{flat:"",class:"full-width",onClick:r[0]||(r[0]=t=>e.showArchived=!e.showArchived)},{default:i(()=>[e.showArchived?(o(),l(s,{key:0,label:e.$t("hide archived notifications")},null,8,["label"])):(o(),l(s,{key:1,label:e.$t("show archived notifications")},null,8,["label"]))]),_:1},512),[[T,e.notificationsArchived&&e.notificationsArchived.length>0]]),e.showArchived?(o(),y("div",je,[a(I),e.notificationsArchived.length<200?(o(),l(q,{key:0},{default:i(()=>[(o(!0),y(H,null,V(e.notificationsArchived,t=>(o(),l(d,{key:t.id,notification:t},null,8,["notification"]))),128))]),_:1})):(o(),l(W,{key:1,items:e.notificationsArchived},{default:i(({item:t})=>[a(d,{notification:t},null,8,["notification"])]),_:1},8,["items"]))])):k("",!0)])}var Ee=Q(Ie,[["render",ze]]);const He=N({name:"NotificationDrawer",components:{NotificationEventPopup:pe,NotificationEventSnackbar:he,NotificationList:Ee},setup(){const e=ae(),r=L(),m=Math.min(500,Math.max(document.body.scrollWidth,document.documentElement.scrollWidth,document.body.offsetWidth,document.documentElement.offsetWidth,document.documentElement.clientWidth)),p=s=>e.set("drawerNotifications",s),f=C({get(){return e.drawerNotifications},set(s){p(s)}}),v=C(()=>r.getUnread.length),d=C(()=>r.getActive.length+r.getArchived.length);return{toggleNotifications:p,drawerNotifications:f,unread:v,all:d,width:m}}});function Me(e,r,m,p,f,v){const d=w("notification-event-popup"),s=w("notification-event-snackbar"),t=w("icon"),c=w("notification-list");return o(),y(H,null,[a(d),a(s),a(re,{modelValue:e.drawerNotifications,"onUpdate:modelValue":r[1]||(r[1]=j=>e.drawerNotifications=j),side:"right",behavior:"mobile",width:e.width,overlay:"",bordered:"","content-class":"jarvis-notifications body",class:"jarvis-notifications-container"},{default:i(()=>[a(oe,{style:{position:"relative",left:"0"}},{default:i(()=>[a(ie,null,{default:i(()=>[g("h6",null,[a(t,{name:"mdi-bell"}),$(" "+h(e.$t("Notifications"))+" ("+h(e.unread)+" / "+h(e.all)+") ",1)]),a(J),a(_,{flat:"",dense:"",round:"",icon:"mdi-chevron-right","aria-label":"Menu",onClick:r[0]||(r[0]=j=>e.toggleNotifications(!1))})]),_:1})]),_:1}),e.drawerNotifications?(o(),l(c,{key:0})):k("",!0)]),_:1},8,["modelValue","width"])],64)}var qe=Q(He,[["render",Me]]);export{qe as default};
