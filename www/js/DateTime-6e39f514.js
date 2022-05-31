var $=Object.defineProperty,Q=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var C=(e,t,s)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,E=(e,t)=>{for(var s in t||(t={}))b.call(t,s)&&C(e,s,t[s]);if(j)for(var s of j(t))G.call(t,s)&&C(e,s,t[s]);return e},O=(e,t)=>Q(e,V(t));import{_ as J,q,cG as u,dH as W,dI as Z,d7 as K,dJ as X,j as x,o as c,d as l,e as o,k as n,J as m,a2 as D,t as h,g as d,dg as ee,cO as f}from"./index-29fd0eef.js";var M={};Object.defineProperty(M,"__esModule",{value:!0});const z=90.8333,g=360/24,te=60*60*1e3;function se(e){return Math.ceil((e.getTime()-new Date(e.getFullYear(),0,1).getTime())/864e5)}function T(e){return Math.sin(e*2*Math.PI/360)}function P(e){return Math.acos(e)*360/(2*Math.PI)}function ie(e){return Math.asin(e)*360/(2*Math.PI)}function ne(e){return Math.tan(e*2*Math.PI/360)}function I(e){return Math.cos(e*2*Math.PI/360)}function y(e,t){const s=e%t;return s<0?s+t:s}function A(e,t,s,w,r){const v=se(r),a=t/g,k=s?v+(6-a)/24:v+(18-a)/24,p=.9856*k-3.289,_=y(p+1.916*T(p)+.02*T(2*p)+282.634,360),B=.91764*ne(_);let i;i=360/(2*Math.PI)*Math.atan(B),i=y(i,360);const F=Math.floor(_/90)*90,L=Math.floor(i/90)*90;i=i+(F-L),i/=g;const H=.39782*T(_),N=I(ie(H)),S=(I(w)-H*T(e))/(N*I(e)),U=(s?360-P(S):P(S))/g+i-.06571*k-6.622,R=y(U-t/g,24),Y=Date.UTC(r.getFullYear(),r.getMonth(),r.getDate());return new Date(Y+R*te)}function ae(e,t,s=new Date){return A(e,t,!0,z,s)}function oe(e,t,s=new Date){return A(e,t,!1,z,s)}var re=M.getSunrise=ae,ce=M.getSunset=oe;const le=q({name:"ModuleDateTime",props:["widget","_containerSize","_widgetSize"],data(){return{DateTime:null,gps:null,sunrise:null,sunset:null,week:null}},methods:{runInterval(){this.config.refresh&&this.config.refresh>0&&(this.setDateTimeInterval=setInterval(()=>{this.setDateTime()},this.config.refresh*1e3))},setDateTime(){try{const e=new Date;this.DateTime=u(e,this.config.format.replace(/(?:\r|\n|\r\n)/g,"'<br />'")),this.week=W(e)+".",this.gps!==null&&(this.sunrise=u(re(...this.gps),"HH:mm"),this.sunset=u(ce(...this.gps),"HH:mm"))}catch(e){console.log(e.message||e),this.DateTime=u(new Date,this.config._defaults.format)}}},computed:O(E({},Z(ee)),{config(){const e=K.joinConfig(this.widget.config,X);return e.refresh=e.format.indexOf("s")>-1?1:e.format.indexOf("m")>-1?10:60,e},city(){return this.ioBrokerStore.meta.city}}),watch:{"ioBrokerStore.meta":{deep:!0,immediate:!0,handler(e){const{latitude:t,longitude:s}=e;this.gps=!t||!s?null:[t,s],this.gps&&this.setDateTime()}},widget:{immediate:!0,handler(e){e.revision!==this.revision&&(this.revision=e.revision,clearInterval(this.setDateTimeInterval),this.runInterval(),this.setDateTime())}}},created(){this.revision=null},beforeUnmount(){clearInterval(this.setDateTimeInterval)}}),ue={class:"jarvis-DateTime-Clock DateTime-Clock"},me=["innerHTML"],De={class:"row jarvis-DateTime-Details DateTime-Details"},he={key:0},de={class:"jarvis-DateTime-Details-Item DateTime-Details-Item"},fe={key:1},ge={class:"jarvis-DateTime-Details-Item DateTime-Details-Item"},Te={key:2},ve={class:"jarvis-DateTime-Details-Item DateTime-Details-Item"},pe={key:3},_e={class:"jarvis-DateTime-Details-Item DateTime-Details-Item"};function Ie(e,t,s,w,r,v){const a=x("icon");return c(),l("div",{key:e.revision,class:"jarvis-DateTime-Container DateTime-Container"},[o("div",ue,[o("span",{innerHTML:e.DateTime},null,8,me)]),o("div",De,[e.config.city!==!1?(c(),l("div",he,[n(a,{size:"xs",name:"mdi-city-variant-outline",class:"jarvis-DateTime-Details-Icon DateTime-Details-Icon"}),m(n(f,{color:"primary"},null,512),[[D,!e.city]]),o("span",de,h(e.city),1)])):d("",!0),e.config.sun!==!1?(c(),l("div",fe,[n(a,{size:"xs",name:"mdi-weather-sunset-up",class:"jarvis-DateTime-Details-Icon DateTime-Details-Icon"}),m(n(f,{color:"primary"},null,512),[[D,!e.sunrise]]),o("span",ge,h(e.sunrise),1)])):d("",!0),e.config.sun!==!1?(c(),l("div",Te,[n(a,{size:"xs",name:"mdi-weather-sunset-down",class:"jarvis-DateTime-Details-Icon DateTime-Details-Icon"}),m(n(f,{color:"primary"},null,512),[[D,!e.sunset]]),o("span",ve,h(e.sunset),1)])):d("",!0),e.config.calendarweek!==!1?(c(),l("div",pe,[n(a,{size:"xs",name:"mdi-calendar-week",class:"jarvis-DateTime-Details-Icon DateTime-Details-Icon"}),m(n(f,{color:"primary"},null,512),[[D,!e.week]]),o("span",_e,h(e.week),1)])):d("",!0)])])}var He=J(le,[["render",Ie]]);export{He as default};
