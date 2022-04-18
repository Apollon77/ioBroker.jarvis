import{Q as w}from"./QTooltip-30d1582f.js";import{_ as T,q as M,e3 as I,d7 as O,e4 as z,cu as S,j as N,o as h,d as g,e as s,n as f,i as c,t as l,J as o,a2 as a,k as p,w as k,a as v,g as m,cQ as $,F as b,E as A,dn as C,O as P}from"./index-8c8fca3a.js";const{getPaletteColor:D,changeAlpha:R}=A,B=M({name:"MediaControl",props:["widget","_containerSize","_widgetSize"],data(){return this.secondsToHoursMinutesSeconds=I,{widgetSize:this._widgetSize,media:{},setProgressToPercent:0,setProgressToTime:0,players:[],playerId:null}},computed:{config(){return O.joinConfig(this.widget.config,z)},player(){return this.players.find(t=>t.id===this.playerId)||{}},trackInformation(){return{background:R(D("primary"),.8)}},trackProgress(){return{width:(Math.floor(this.media.progress/this.media.duration*this.widgetSize.width)||0)+"px"}},cover(){return{height:this._containerSize.height-50+"px","background-image":this.media.cover?"url('"+this.config.coverUrl+this.media.cover+"')":"none","background-size":this.config.coverMode?"auto 100%":"100% auto",paddingTop:this._containerSize.height-50-50-6+"px"}}},methods:{getPlayerNode(e="",t=this.playerId||""){return t?(this.config.adapter+this.adapterStates._namespace+e).replace("{PLAYER}",t||""):null},updateProgressSetter(e){this.setProgressToPercent=Math.round(e.layerX/this.widgetSize.width*100),this.setProgressToTime=this.secondsToHoursMinutesSeconds(this.setProgressToPercent/100*this.media.duration)},set(e,t=!0){if(e==="play"&&this.player?(this.media.play=!0,this.selectPlayer({val:this.player.id})):e==="pause"&&(this.media.play=!1),this.adapterStates[e]&&this.adapterStates[e].action){const n=this.getPlayerNode(this.adapterStates[e].action);n&&C.getConnection.setState(n,this.adapterStates[e].setter?this.adapterStates[e].setter(t,this.getPlayerNode):t).catch(y=>{console.error(y)})}},setProgress(e){this.set("progress",Math.round(e.layerX/this.widgetSize.width*this.media.duration))},setPlayer(){this.adapter.getPlayers(this.config.adapter).then(e=>{if(e.length>0){this.players=e;const t=S.get("MediaControl.player."+this.widget.id)||e[0].id,n=t&&e[e.findIndex(r=>r.id===t)];this.playerId=n?n.id:e[0].id,this.subscribePlayer(this.playerId)}})},selectPlayer({val:e}){this.adapter&&this.adapter.setPlayer&&this.adapter.setPlayer(t=>this.getPlayerNode(t,e),t=>this.getPlayerNode(t)),this.playerId=e,S.set("MediaControl.player."+this.widget.id,e)},subscribePlayer(e){if(!this.subscribedPlayers.includes(e)){this.subscribedPlayers.push(e);const t=C.getConnection;for(const n in this.adapterStates){let r=this.adapterStates[n];r=typeof r=="string"?{state:r}:r,r&&r.state&&(r.stateKey=n,t.subscribeState(this.getPlayerNode(r.state),({err:y,state:d})=>{!y&&d&&d.val!==void 0&&(d.val=r.display&&r.display[d.val]||d.val,this.media[n]=r.convert?r.convert(d.val):d.val)}))}}}},watch:{_widgetSize(e){this.widgetSize=e},config:{immediate:!0,deep:!0,handler:function(e){this.subscribedPlayers=[];try{this.adapter=require("./adapters/"+this.config.adapter.substr(0,this.config.adapter.indexOf("."))+".js"),this.adapterStates=this.adapter.default||{},this.setPlayer(),this.refreshPlayers=setInterval(()=>{this.setPlayer()},60*1e3)}catch(t){console.error("No adapter selected",t),this.error="No adapter selected!",this.adapterStates={}}}}},beforeUnmount(){clearInterval(this.refreshPlayers)}}),H={class:"full-height"},Q={class:"row"},q={class:"col nowrap ellipsis"},V={class:"row"},j={class:"col-grow",style:{overflow:"hidden"}},E={class:"col-shrink",style:{"text-align":"right"}},F={class:"track-duration disabled"},L={class:"controls q-pa-sm"},U={class:"controlsLeft"},X={class:"controlsCenter"},G={class:"controlsRight"};function J(e,t,n,r,y,d){const u=N("inputs");return h(),g("div",H,[s("div",{class:"cover",style:f(e.cover)},[s("div",{class:"track-information q-pa-sm",style:f(e.trackInformation)},[s("div",Q,[s("div",q,[c(l((e.media.artist||"")+(e.media.album?" - "+e.media.album:""))+" ",1),o(s("span",null,"("+l(e.media.year)+")",513),[[a,e.media.align==="top"&&e.media.year]])])]),s("div",V,[s("div",j,[c(l(e.media.track)+" ",1),o(s("span",null,"("+l(e.media.year)+")",513),[[a,e.media.align==="bottom"&&e.media.year]])]),o(s("div",E,[c(l(e.secondsToHoursMinutesSeconds(e.media.progress))+" ",1),o(s("span",null,l(e.secondsToHoursMinutesSeconds(e.media.duration)),513),[[a,e.media.progress&&e.media.duration]])],512),[[a,e.media.progress||e.media.duration]])])],4),o(s("div",{class:"track-duration",onMousemove:t[1]||(t[1]=(...i)=>e.updateProgressSetter&&e.updateProgressSetter(...i)),onClick:t[2]||(t[2]=(...i)=>e.setProgress&&e.setProgress(...i))},[p(w,{anchor:"top middle"},{default:k(()=>[c(l(e.setProgressToTime)+" ("+l(e.setProgressToPercent)+"%)",1)]),_:1}),s("div",{class:"track-progress",style:f(e.trackProgress),onClick:t[0]||(t[0]=(...i)=>e.setProgress&&e.setProgress(...i))},null,4)],544),[[a,e.media.progress]]),o(s("div",F,null,512),[[a,!e.media.progress]])],4),s("div",L,[s("div",U,[e.media.type!=="RADIO"?(h(),v(u,{key:0,type:"button",color:"accent",icon:"mdi-monitor-cellphone-star",tooltip:e.player.name,items:e.players,onOnSelect:e.selectPlayer,selected:e.player.id},null,8,["tooltip","items","onOnSelect","selected"])):m("",!0)]),s("div",X,[p($,null,{default:k(()=>[e.adapterStates.previous&&e.adapterStates.previous.action?o((h(),v(P,{key:0,color:"primary",onClick:t[3]||(t[3]=i=>e.set("previous")),icon:"mdi-skip-previous"},null,512)),[[a,e.media.type!=="RADIO"]]):m("",!0),p(P,{color:"primary",onClick:t[4]||(t[4]=i=>e.set(e.media.play?"pause":"play")),icon:e.media.play?"mdi-pause":"mdi-play"},null,8,["icon"]),e.adapterStates.next&&e.adapterStates.next.action?o((h(),v(P,{key:1,color:"primary",onClick:t[5]||(t[5]=i=>e.set("next")),icon:"mdi-skip-next"},null,512)),[[a,e.media.type!=="RADIO"]]):m("",!0)]),_:1})]),s("div",G,[e.media.type!=="RADIO"?(h(),g(b,{key:0},[o(p(u,{round:"",onOnClick:t[6]||(t[6]=i=>e.set("shuffle","on")),type:"button",color:"secondary",icon:"mdi-shuffle-disabled",tooltip:"shuffle is off"},null,512),[[a,e.adapterStates.shuffle&&e.media.shuffle==="off"]]),o(p(u,{round:"",onOnClick:t[7]||(t[7]=i=>e.set("shuffle","off")),type:"button",color:"secondary",icon:"mdi-shuffle-variant",tooltip:"shuffle is on"},null,512),[[a,e.adapterStates.shuffle&&e.media.shuffle==="on"]])],64)):m("",!0),e.media.type!=="RADIO"?(h(),g(b,{key:1},[o(p(u,{round:"",onOnClick:t[8]||(t[8]=i=>e.set("repeat","once")),type:"button",color:"secondary",icon:"mdi-repeat-off",tooltip:"repeat off"},null,512),[[a,e.adapterStates.repeat&&e.media.repeat==="off"]]),o(p(u,{round:"",onOnClick:t[9]||(t[9]=i=>e.set("repeat","all")),type:"button",color:"secondary",icon:"mdi-repeat-once",tooltip:"repeat once"},null,512),[[a,e.adapterStates.repeat&&e.media.repeat==="once"]]),o(p(u,{round:"",onOnClick:t[10]||(t[10]=i=>e.set("repeat","off")),type:"button",color:"secondary",icon:"mdi-repeat",tooltip:"repeat all"},null,512),[[a,e.adapterStates.repeat&&e.media.repeat==="all"]])],64)):m("",!0)])])])}var Z=T(B,[["render",J]]);export{Z as default};
