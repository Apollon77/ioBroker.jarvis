import{_ as J,q as W,X as q,dg as G,a3 as m,cu as T,d6 as V,dh as I,z as j,A as Y,cG as R,j as E,o as y,d as h,J as u,a2 as d,e as t,k as s,w as n,i as L,t as r,a6 as c,cO as F,a5 as O,N as K,F as S,l as $,L as X,f as Z,M as x,$ as z,a7 as v,dd as H}from"./index-29fd0eef.js";import{m as ee}from"./marked.esm-9e29a1ec.js";const se=W({name:"AccountPage",setup(){const e=q(),B=G(),A=m(),_=m(!1),b=m(!1),w=T.get("sessionId")||V();T.set("sessionId",w);const k="Ad8Db5feNlBy6SdFa7O0fpJ2QYIcyFO9SGSg4tNpxOgOlLyWTkN6JmOFBV58ItTpdUwfBGW2L8WuoIAn",f=document.createElement("script");f.setAttribute("src","https://www.paypal.com/sdk/js?client-id="+k+"&components=buttons&currency=EUR&vault=true&intent=subscription"),f.setAttribute("data-namespace","paypal_sdk"),document.body.appendChild(f);const l=m(),D=m([]),N=m(),M=m([]);I.post("user/details",{action:"getLoginBySessionId",sessionId:w}).then(o=>{if(!o)throw new Error("User not signed in!");b.value=!0,l.value=o,T.set("userId",o),console.log("User signed-in: "+o),I.post("user/invoice",{action:"getInvoicesByUserId",userId:o}).then(a=>{M.value=a}).catch(a=>{console.warn(a.message)}),I.post("user/details",{action:"getInstallations",userId:o}).then(a=>{D.value=a.map(i=>{const p=JSON.parse(i.system),C={value:i.ioBrokerId,label:"System: "+p.hostname+" ("+p.platform+"), ID: "+i.ioBrokerId};return i.selected==="1"&&(N.value=C),C})}).catch(a=>{console.warn(a.message)})}).catch(o=>{console.warn(o.message),o.value=o.message,b.value=!1});let g=null;const Q=()=>{window.paypal?window.paypal.use(["login"],o=>{const a=B.uuid,i=B.system,p=H._systemId;o.render({appid:"Ad8Db5feNlBy6SdFa7O0fpJ2QYIcyFO9SGSg4tNpxOgOlLyWTkN6JmOFBV58ItTpdUwfBGW2L8WuoIAn",scopes:"openid",containerid:"paypal-button-login",responseType:"code",locale:"de-de",buttonType:"LWP",buttonShape:"pill",buttonSize:"lg",fullPage:"true",state:btoa(w+"|"+a+"|"+p+"|"+JSON.stringify(i)+"|"+window.location.href),returnurl:"https://www.zefau.net/jarvis/user/paypal_login.php"})}):setTimeout(()=>Q(),100)},U=()=>{if(!window.paypal_sdk)setTimeout(()=>U(),100);else{document.querySelector("#paypal-button-subscribe");const o={style:{shape:"rect",color:"blue",layout:"horizontal",label:"buynow",tagline:!1},createSubscription:(a,i)=>i.subscription.create({plan_id:"P-8EY03930L1769123MMEFPZPI"}),onApprove:(a,i)=>{_.value=!0,I.post("user/invoice",{action:"assignUserToInvoice",userId:l.value,subscriptionId:a.subscriptionID}).then(p=>H.setToken(p,a.subscriptionID,N.value.value)).catch(p=>console.error(p)).finally(()=>{_.value="done",window.location.reload()})}};g=window.paypal_sdk.Buttons(o),g.render("#paypal-button-subscribe")}};j(()=>{Q(),U()}),Y(()=>{g&&g.close&&g.close(),Object.keys(window).forEach(o=>{/paypal|zoid|post_robot/.test(o)&&delete window[o]})});const P={};return["SupportByBuying","Disclaimer"].forEach(o=>{let a="",i=0;for(P[o]=[];(a=e.t(o+"["+i+"]"))!==o+"["+i+"]";)i++,P[o].push(a)}),{format:R,marked:ee,now:Math.ceil(Date.now()/1e3),t:P,installations:D,invoices:M,userId:l,isLogin:b,isPaying:_,error:A}}}),te={class:"row q-px-sm"},oe={class:"col"},ne={class:"row q-pa-md"},ae={class:"col-5"},le={class:"text-h6"},ie=t("div",{class:"text-subtitle2"},null,-1),re={class:"text-center"},ue={class:"row"},de={class:"col-12"},ce={class:"text-center"},pe=t("div",{id:"paypal-button-login"},null,-1),me=[pe],ye={class:"text-h6"},he=t("div",{class:"text-subtitle2"},null,-1),fe={class:"col-2 items-center"},ge={class:"col-5"},ve={class:"text-h6"},_e=t("div",{class:"text-subtitle2"},null,-1),be=["innerHTML"],we=["innerHTML"],Ie=t("div",{id:"paypal-button-subscribe"},null,-1);function Le(e,B,A,_,b,w){const k=E("alert"),f=E("inputs");return y(),h("div",null,[u(t("div",te,[t("div",oe,[s(k,null,{default:n(()=>[L(r(e.error),1)]),_:1})])],512),[[d,e.error]]),t("div",ne,[t("div",ae,[s(O,null,{default:n(()=>[s(c,{class:"bg-primary text-white"},{default:n(()=>[t("div",le,r(e.isLogin===!0?e.$t("User")+" ID":e.$t("Sign In")),1),ie]),_:1}),s(c,null,{default:n(()=>[u(t("div",re,[s(F,{color:"primary",size:"3em"})],512),[[d,e.isLogin===null]]),u(t("div",null,[t("div",ue,[t("div",de,[s(f,{standout:"",value:e.userId,label:"User",disable:""},null,8,["value"])])])],512),[[d,e.isLogin===!0]]),u(t("div",ce,me,512),[[d,e.isLogin===!1]])]),_:1})]),_:1}),u(s(O,{class:"q-mt-md"},{default:n(()=>[s(c,{class:"bg-primary text-white"},{default:n(()=>[t("div",ye,r(e.$t("Bills")),1),he]),_:1}),s(c,null,{default:n(()=>[s(K,null,{default:n(()=>[(y(!0),h(S,null,$(e.invoices,l=>(y(),h(S,{key:"item-"+l.invoiceId},[s(X,{class:Z({"bg-positive":l.expires>e.now})},{default:n(()=>[s(x,null,{default:n(()=>[s(z,null,{default:n(()=>[L(r(l.date)+", #"+r(l.invoiceId),1)]),_:2},1024),s(z,{caption:""},{default:n(()=>[L(r(e.$t("valid to"))+" "+r(e.format(l.expires*1e3,"dd. MMM yyyy, HH:mm")),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["class"]),s(v)],64))),128))]),_:1})]),_:1})]),_:1},512),[[d,e.invoices.length>0]])]),t("div",fe,[s(v,{vertical:"",style:{margin:"auto",height:"100%"}})]),t("div",ge,[s(O,null,{default:n(()=>[s(c,{class:"bg-primary text-white"},{default:n(()=>[t("div",ve,r(e.$t("Buy"))+" & "+r(e.$t("Subscribe")),1),_e]),_:1}),s(c,null,{default:n(()=>[(y(!0),h(S,null,$(e.t.SupportByBuying,l=>(y(),h("p",{key:l},[t("span",{innerHTML:e.marked.parse(l)},null,8,be)]))),128))]),_:1}),s(v),s(c,null,{default:n(()=>[t("strong",null,r(e.$t("Legal Remarks")),1),(y(!0),h(S,null,$(e.t.Disclaimer,l=>(y(),h("p",{key:l},[t("span",{innerHTML:e.marked.parse(l)},null,8,we)]))),128))]),_:1}),s(v),u(s(c,{class:"text-center"},{default:n(()=>[L(r(e.$t("Login first to buy & subscribe"))+". ",1)]),_:1},512),[[d,e.isLogin===!1]]),u(s(c,{class:"text-center"},{default:n(()=>[u(t("div",null,[Ie,t("em",null,r(e.$t("buy now")),1),s(v,{class:"q-mt-sm"})],512),[[d,e.isPaying===!1]]),u(t("div",null,[s(F,{color:"primary",size:"3em"})],512),[[d,e.isPaying===!0]])]),_:1},512),[[d,e.isLogin===!0&&e.userId]])]),_:1})])])])}var ke=J(se,[["render",Le]]);export{ke as default};
