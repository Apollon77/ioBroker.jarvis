import{bt as Z,a4 as _,Q as g,dc as x,ef as ee,k as S,r as ae,an as oe,ao as te,eg as L,aG as se,ay as b,W as D,X as n,C as $,a1 as M,D as v,b3 as i,bn as d,a2 as y,b1 as N,U as j,V as w,bB as A,cU as re,I as Q,bs as ne,b$ as O,cJ as U,dv as H}from"./index-5545aad5.js";import{Q as le}from"./QTooltip-6852bffb.js";const{getPaletteColor:ie,changeAlpha:de}=ne,X={"./adapters/alexa2.js":()=>O(()=>import("./alexa2-18ae27f5.js"),["js/alexa2-18ae27f5.js","js/index-5545aad5.js","css/index-cec2d967.css"]),"./adapters/musiccast.js":()=>O(()=>import("./musiccast-3fa7cf00.js"),["js/musiccast-3fa7cf00.js","js/index-5545aad5.js","css/index-cec2d967.css"]),"./adapters/plex.js":()=>O(()=>import("./plex-7a33e31f.js"),["js/plex-7a33e31f.js","js/index-5545aad5.js","css/index-cec2d967.css"]),"./adapters/spotify-premium.js":()=>O(()=>import("./spotify-premium-d198f147.js"),["js/spotify-premium-d198f147.js","js/index-5545aad5.js","css/index-cec2d967.css"]),"./adapters/yamaha.js":()=>O(()=>import("./yamaha-14074a03.js"),["js/yamaha-14074a03.js","js/index-5545aad5.js","css/index-cec2d967.css"])},ue=_({name:"ModuleMediaControl",props:["widget","_containerSize","_widgetSize"],setup(e){const o=g(()=>e.widget.config),f=g(()=>({...x.joinConfig(o.value,ee)})),l=g(()=>f.value.adapter.substr(0,f.value.adapter.indexOf("."))),T=S([]),h=S(null),p=g(()=>T.value.find(s=>s.id===h.value)||{}),t=ae({}),q=g(()=>({height:e._containerSize.height-50+"px","background-image":t.cover?"url('"+f.value.coverUrl+t.cover+"')":"none","background-size":f.value.coverMode?"auto 100%":"100% auto",paddingTop:e._containerSize.height-50-50-6+"px"})),F=g(()=>({background:de(ie("primary"),.8)})),G=g(()=>({width:(Math.floor(t.progress/t.duration*e._widgetSize.width)||0)+"px"})),I=S(0),E=S(0),J=a=>V("progress",Math.round(a.layerX/e._widgetSize.width*t.duration)),W=a=>{I.value=Math.round(a.layerX/e._widgetSize.width*100),E.value=L(I.value/100*t.duration)},k=S({}),m=S({}),C=(a="",s=null)=>(s=s||h.value||"",s?(f.value.adapter+m.value[l.value]._namespace+a).replace("{PLAYER}",s||""):null),R=({val:a})=>{k.value[l.value]&&k.value[l.value].setPlayer&&k.value[l.value].setPlayer(s=>C(s,a),s=>C(s)),h.value=a,U.set("MediaControl.player."+e.widget.id,a)},V=(a,s=!0)=>{if(a==="play"&&p.value?(t.play=!0,R({val:p.value.id})):a==="pause"&&(t.play=!1),m.value[l.value][a]&&m.value[l.value][a].action){const u=C(m.value[l.value][a].action);u&&H.getConnection.setState(u,m.value[l.value][a].setter?m.value[l.value][a].setter(s,C):s).catch(P=>{console.error(P)})}},z=S([]),Y=a=>{if(!z.value.includes(a)){z.value.push(a);const s=H.getConnection;for(const u in m.value[l.value]){let r=m.value[l.value][u];r=typeof r=="string"?{state:r}:r,r&&r.state&&(r.stateKey=u,s.subscribeState(C(r.state),({err:P,state:c})=>{!P&&c&&c.val!==void 0&&(c.val=r.display&&r.display[c.val]||c.val,t[u]=r.convert?r.convert(c.val):c.val)}))}}},B=()=>{k.value[l.value]&&k.value[l.value].getPlayers(f.value.adapter).then(a=>{if(a.length>0){T.value=a;const s=U.get("MediaControl.player."+e.widget.id)||a[0].id,u=s&&a[a.findIndex(r=>r.id===s)];h.value=u?u.id:a[0].id,Y(h.value)}})};let K=null;return oe(()=>{const a=[];for(const s in X){const u=X[s]().then(r=>{const P=s.substr(s.lastIndexOf("/")+1).replace(".js","");return k.value[P]=r,m.value[P]=r.default,!0});a.push(u)}Promise.allSettled(a).then(()=>{B(),K=setInterval(()=>{B()},60*1e3)})}),te(()=>K&&clearInterval(K)),{secondsToHoursMinutesSeconds:L,media:t,cover:q,trackInformation:F,trackProgress:G,updateProgressSetter:W,setProgress:J,setProgressToTime:E,setProgressToPercent:I,selectPlayer:R,players:T,player:p,set:V,adapterKey:l,adapterStates:m}}}),pe={class:"full-height"},me={class:"row"},ve={class:"col nowrap ellipsis"},ye={class:"row"},fe={class:"col-grow",style:{overflow:"hidden"}},ce={class:"col-shrink",style:{"text-align":"right"}},ge={class:"track-duration disabled"},Se={class:"controls q-pa-sm"},he={class:"controlsLeft"},ke={class:"controlsCenter"},Pe={class:"controlsRight"};function be(e,o,f,l,T,h){const p=se("inputs");return b(),D("div",pe,[n("div",{class:"cover",style:$(e.cover)},[n("div",{class:"track-information q-pa-sm",style:$(e.trackInformation)},[n("div",me,[n("div",ve,[M(v((e.media.artist||"")+(e.media.album?" - "+e.media.album:""))+" ",1),i(n("span",null,"("+v(e.media.year)+")",513),[[d,e.media.align==="top"&&e.media.year]])])]),n("div",ye,[n("div",fe,[M(v(e.media.track)+" ",1),i(n("span",null,"("+v(e.media.year)+")",513),[[d,e.media.align==="bottom"&&e.media.year]])]),i(n("div",ce,[M(v(e.secondsToHoursMinutesSeconds(e.media.progress))+" ",1),i(n("span",null,"/ "+v(e.secondsToHoursMinutesSeconds(e.media.duration)),513),[[d,e.media.progress&&e.media.duration]])],512),[[d,e.media.progress||e.media.duration]])])],4),i(n("div",{class:"track-duration",onMousemove:o[1]||(o[1]=(...t)=>e.updateProgressSetter&&e.updateProgressSetter(...t)),onClick:o[2]||(o[2]=(...t)=>e.setProgress&&e.setProgress(...t))},[y(le,{anchor:"top middle"},{default:N(()=>[M(v(e.setProgressToTime)+" ("+v(e.setProgressToPercent)+"%)",1)]),_:1}),n("div",{class:"track-progress",style:$(e.trackProgress),onClick:o[0]||(o[0]=(...t)=>e.setProgress&&e.setProgress(...t))},null,4)],544),[[d,e.media.progress]]),i(n("div",ge,null,512),[[d,!e.media.progress]])],4),n("div",Se,[n("div",he,[e.media.type!=="RADIO"?(b(),j(p,{key:0,type:"button",color:"accent",icon:"mdi-monitor-cellphone-star",tooltip:e.player.name,items:e.players,onOnSelect:e.selectPlayer,selected:e.player.id},null,8,["tooltip","items","onOnSelect","selected"])):w("",!0)]),n("div",ke,[y(re,null,{default:N(()=>[e.adapterStates[e.adapterKey]&&e.adapterStates[e.adapterKey].previous&&e.adapterStates[e.adapterKey].previous.action?i((b(),j(A,{key:0,color:"primary",onClick:o[3]||(o[3]=t=>e.set("previous")),icon:"mdi-skip-previous"},null,512)),[[d,e.media.type!=="RADIO"]]):w("",!0),y(A,{color:"primary",onClick:o[4]||(o[4]=t=>e.set(e.media.play?"pause":"play")),icon:e.media.play?"mdi-pause":"mdi-play"},null,8,["icon"]),e.adapterStates[e.adapterKey]&&e.adapterStates[e.adapterKey].next&&e.adapterStates[e.adapterKey].next.action?i((b(),j(A,{key:1,color:"primary",onClick:o[5]||(o[5]=t=>e.set("next")),icon:"mdi-skip-next"},null,512)),[[d,e.media.type!=="RADIO"]]):w("",!0)]),_:1})]),n("div",Pe,[e.media.type!=="RADIO"?(b(),D(Q,{key:0},[i(y(p,{round:"",onOnClick:o[6]||(o[6]=t=>e.set("shuffle","on")),type:"button",color:"secondary",icon:"mdi-shuffle-disabled",tooltip:"shuffle is off"},null,512),[[d,e.adapterStates[e.adapterKey]&&e.adapterStates[e.adapterKey].shuffle&&e.media.shuffle==="off"]]),i(y(p,{round:"",onOnClick:o[7]||(o[7]=t=>e.set("shuffle","off")),type:"button",color:"secondary",icon:"mdi-shuffle-variant",tooltip:"shuffle is on"},null,512),[[d,e.adapterStates[e.adapterKey]&&e.adapterStates[e.adapterKey].shuffle&&e.media.shuffle==="on"]])],64)):w("",!0),e.media.type!=="RADIO"?(b(),D(Q,{key:1},[i(y(p,{round:"",onOnClick:o[8]||(o[8]=t=>e.set("repeat","once")),type:"button",color:"secondary",icon:"mdi-repeat-off",tooltip:"repeat off"},null,512),[[d,e.adapterStates[e.adapterKey]&&e.adapterStates[e.adapterKey].repeat&&e.media.repeat==="off"]]),i(y(p,{round:"",onOnClick:o[9]||(o[9]=t=>e.set("repeat","all")),type:"button",color:"secondary",icon:"mdi-repeat-once",tooltip:"repeat once"},null,512),[[d,e.adapterStates[e.adapterKey]&&e.adapterStates[e.adapterKey].repeat&&e.media.repeat==="once"]]),i(y(p,{round:"",onOnClick:o[10]||(o[10]=t=>e.set("repeat","off")),type:"button",color:"secondary",icon:"mdi-repeat",tooltip:"repeat all"},null,512),[[d,e.adapterStates[e.adapterKey]&&e.adapterStates[e.adapterKey].repeat&&e.media.repeat==="all"]])],64)):w("",!0)])])])}var Oe=Z(ue,[["render",be]]);export{Oe as default};
