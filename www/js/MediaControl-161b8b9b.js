import{Q as w}from"./QTooltip-96e5fd0a.js";import{bt as T,a4 as M,dT as I,d7 as O,dU as z,cq as P,aG as N,ay as h,W as y,X as s,C as f,a1 as m,D as l,b3 as a,bn as i,a2 as p,b1 as S,U as v,V as c,bC as k,cO as $,I as b,bs as D,dp as C}from"./index-b364605d.js";const{getPaletteColor:A,changeAlpha:R}=D,B=M({name:"ModuleMediaControl",props:["widget","_containerSize","_widgetSize"],data(){return this.secondsToHoursMinutesSeconds=I,{widgetSize:this._widgetSize,media:{},setProgressToPercent:0,setProgressToTime:0,players:[],playerId:null}},computed:{config(){return O.joinConfig(this.widget.config,z)},player(){return this.players.find(t=>t.id===this.playerId)||{}},trackInformation(){return{background:R(A("primary"),.8)}},trackProgress(){return{width:(Math.floor(this.media.progress/this.media.duration*this.widgetSize.width)||0)+"px"}},cover(){return{height:this._containerSize.height-50+"px","background-image":this.media.cover?"url('"+this.config.coverUrl+this.media.cover+"')":"none","background-size":this.config.coverMode?"auto 100%":"100% auto",paddingTop:this._containerSize.height-50-50-6+"px"}}},methods:{getPlayerNode(e="",t=this.playerId||""){return t?(this.config.adapter+this.adapterStates._namespace+e).replace("{PLAYER}",t||""):null},updateProgressSetter(e){this.setProgressToPercent=Math.round(e.layerX/this.widgetSize.width*100),this.setProgressToTime=this.secondsToHoursMinutesSeconds(this.setProgressToPercent/100*this.media.duration)},set(e,t=!0){if(e==="play"&&this.player?(this.media.play=!0,this.selectPlayer({val:this.player.id})):e==="pause"&&(this.media.play=!1),this.adapterStates[e]&&this.adapterStates[e].action){const n=this.getPlayerNode(this.adapterStates[e].action);n&&C.getConnection.setState(n,this.adapterStates[e].setter?this.adapterStates[e].setter(t,this.getPlayerNode):t).catch(g=>{console.error(g)})}},setProgress(e){this.set("progress",Math.round(e.layerX/this.widgetSize.width*this.media.duration))},setPlayer(){this.adapter.getPlayers(this.config.adapter).then(e=>{if(e.length>0){this.players=e;const t=P.get("MediaControl.player."+this.widget.id)||e[0].id,n=t&&e[e.findIndex(o=>o.id===t)];this.playerId=n?n.id:e[0].id,this.subscribePlayer(this.playerId)}})},selectPlayer({val:e}){this.adapter&&this.adapter.setPlayer&&this.adapter.setPlayer(t=>this.getPlayerNode(t,e),t=>this.getPlayerNode(t)),this.playerId=e,P.set("MediaControl.player."+this.widget.id,e)},subscribePlayer(e){if(!this.subscribedPlayers.includes(e)){this.subscribedPlayers.push(e);const t=C.getConnection;for(const n in this.adapterStates){let o=this.adapterStates[n];o=typeof o=="string"?{state:o}:o,o&&o.state&&(o.stateKey=n,t.subscribeState(this.getPlayerNode(o.state),({err:g,state:d})=>{!g&&d&&d.val!==void 0&&(d.val=o.display&&o.display[d.val]||d.val,this.media[n]=o.convert?o.convert(d.val):d.val)}))}}}},watch:{_widgetSize(e){this.widgetSize=e},config:{immediate:!0,deep:!0,handler:function(e){this.subscribedPlayers=[];try{this.adapter=require("./adapters/"+this.config.adapter.substr(0,this.config.adapter.indexOf("."))+".js"),this.adapterStates=this.adapter.default||{},this.setPlayer(),this.refreshPlayers=setInterval(()=>{this.setPlayer()},60*1e3)}catch(t){console.error("No adapter selected",t),this.error="No adapter selected!",this.adapterStates={}}}}},beforeUnmount(){clearInterval(this.refreshPlayers)}}),H={class:"full-height"},V={class:"row"},q={class:"col nowrap ellipsis"},Q={class:"row"},U={class:"col-grow",style:{overflow:"hidden"}},j={class:"col-shrink",style:{"text-align":"right"}},X={class:"track-duration disabled"},E={class:"controls q-pa-sm"},F={class:"controlsLeft"},G={class:"controlsCenter"},L={class:"controlsRight"};function W(e,t,n,o,g,d){const u=N("inputs");return h(),y("div",H,[s("div",{class:"cover",style:f(e.cover)},[s("div",{class:"track-information q-pa-sm",style:f(e.trackInformation)},[s("div",V,[s("div",q,[m(l((e.media.artist||"")+(e.media.album?" - "+e.media.album:""))+" ",1),a(s("span",null,"("+l(e.media.year)+")",513),[[i,e.media.align==="top"&&e.media.year]])])]),s("div",Q,[s("div",U,[m(l(e.media.track)+" ",1),a(s("span",null,"("+l(e.media.year)+")",513),[[i,e.media.align==="bottom"&&e.media.year]])]),a(s("div",j,[m(l(e.secondsToHoursMinutesSeconds(e.media.progress))+" ",1),a(s("span",null,l(e.secondsToHoursMinutesSeconds(e.media.duration)),513),[[i,e.media.progress&&e.media.duration]])],512),[[i,e.media.progress||e.media.duration]])])],4),a(s("div",{class:"track-duration",onMousemove:t[1]||(t[1]=(...r)=>e.updateProgressSetter&&e.updateProgressSetter(...r)),onClick:t[2]||(t[2]=(...r)=>e.setProgress&&e.setProgress(...r))},[p(w,{anchor:"top middle"},{default:S(()=>[m(l(e.setProgressToTime)+" ("+l(e.setProgressToPercent)+"%)",1)]),_:1}),s("div",{class:"track-progress",style:f(e.trackProgress),onClick:t[0]||(t[0]=(...r)=>e.setProgress&&e.setProgress(...r))},null,4)],544),[[i,e.media.progress]]),a(s("div",X,null,512),[[i,!e.media.progress]])],4),s("div",E,[s("div",F,[e.media.type!=="RADIO"?(h(),v(u,{key:0,type:"button",color:"accent",icon:"mdi-monitor-cellphone-star",tooltip:e.player.name,items:e.players,onOnSelect:e.selectPlayer,selected:e.player.id},null,8,["tooltip","items","onOnSelect","selected"])):c("",!0)]),s("div",G,[p($,null,{default:S(()=>[e.adapterStates.previous&&e.adapterStates.previous.action?a((h(),v(k,{key:0,color:"primary",onClick:t[3]||(t[3]=r=>e.set("previous")),icon:"mdi-skip-previous"},null,512)),[[i,e.media.type!=="RADIO"]]):c("",!0),p(k,{color:"primary",onClick:t[4]||(t[4]=r=>e.set(e.media.play?"pause":"play")),icon:e.media.play?"mdi-pause":"mdi-play"},null,8,["icon"]),e.adapterStates.next&&e.adapterStates.next.action?a((h(),v(k,{key:1,color:"primary",onClick:t[5]||(t[5]=r=>e.set("next")),icon:"mdi-skip-next"},null,512)),[[i,e.media.type!=="RADIO"]]):c("",!0)]),_:1})]),s("div",L,[e.media.type!=="RADIO"?(h(),y(b,{key:0},[a(p(u,{round:"",onOnClick:t[6]||(t[6]=r=>e.set("shuffle","on")),type:"button",color:"secondary",icon:"mdi-shuffle-disabled",tooltip:"shuffle is off"},null,512),[[i,e.adapterStates.shuffle&&e.media.shuffle==="off"]]),a(p(u,{round:"",onOnClick:t[7]||(t[7]=r=>e.set("shuffle","off")),type:"button",color:"secondary",icon:"mdi-shuffle-variant",tooltip:"shuffle is on"},null,512),[[i,e.adapterStates.shuffle&&e.media.shuffle==="on"]])],64)):c("",!0),e.media.type!=="RADIO"?(h(),y(b,{key:1},[a(p(u,{round:"",onOnClick:t[8]||(t[8]=r=>e.set("repeat","once")),type:"button",color:"secondary",icon:"mdi-repeat-off",tooltip:"repeat off"},null,512),[[i,e.adapterStates.repeat&&e.media.repeat==="off"]]),a(p(u,{round:"",onOnClick:t[9]||(t[9]=r=>e.set("repeat","all")),type:"button",color:"secondary",icon:"mdi-repeat-once",tooltip:"repeat once"},null,512),[[i,e.adapterStates.repeat&&e.media.repeat==="once"]]),a(p(u,{round:"",onOnClick:t[10]||(t[10]=r=>e.set("repeat","off")),type:"button",color:"secondary",icon:"mdi-repeat",tooltip:"repeat all"},null,512),[[i,e.adapterStates.repeat&&e.media.repeat==="all"]])],64)):c("",!0)])])])}var Z=T(B,[["render",W]]);export{Z as default};
