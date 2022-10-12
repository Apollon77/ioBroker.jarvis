import{bt as W,a4 as G,bM as R,k as g,as as z,aw as Y,cH as J,aG as C,ay as p,W as b,b3 as I,bn as _,X as r,a2 as o,b1 as c,a1 as A,D as m,bT as v,I as E,aE as S,bU as L,cP as N,bS as T,bH as X,dh as B,dk as Z,U as D,bG as O,bO as q,bu as K,bp as x,A as ee,bF as te}from"./index-cf042324.js";import{m as ne}from"./marked.esm-4cbe47a7.js";/*!
 * paypal-js v5.1.1 (2022-08-03T17:21:59.218Z)
 * Copyright 2020-present, PayPal, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(e,t){var n=document.querySelector('script[src="'.concat(e,'"]'));if(n===null)return null;var l=V(e,t),i=n.cloneNode();if(delete i.dataset.uidAuto,Object.keys(i.dataset).length!==Object.keys(l.dataset).length)return null;var s=!0;return Object.keys(i.dataset).forEach(function(d){i.dataset[d]!==l.dataset[d]&&(s=!1)}),s?n:null}function re(e){var t=e.url,n=e.attributes,l=e.onSuccess,i=e.onError,s=V(t,n);s.onerror=i,s.onload=l,document.head.insertBefore(s,document.head.firstElementChild)}function se(e){var t="https://www.paypal.com/sdk/js";e.sdkBaseURL&&(t=e.sdkBaseURL,delete e.sdkBaseURL),ie(e);var n=Object.keys(e).filter(function(s){return typeof e[s]!="undefined"&&e[s]!==null&&e[s]!==""}).reduce(function(s,d){var u=e[d].toString();return d.substring(0,5)==="data-"?s.dataAttributes[d]=u:s.queryParams[d]=u,s},{queryParams:{},dataAttributes:{}}),l=n.queryParams,i=n.dataAttributes;return{url:"".concat(t,"?").concat(oe(l)),dataAttributes:i}}function oe(e){var t="";return Object.keys(e).forEach(function(n){t.length!==0&&(t+="&"),t+=n+"="+e[n]}),t}function le(e){var t=e.split("/* Original Error:")[1];return t?t.replace(/\n/g,"").replace("*/","").trim():e}function V(e,t){t===void 0&&(t={});var n=document.createElement("script");return n.src=e,Object.keys(t).forEach(function(l){n.setAttribute(l,t[l]),l==="data-csp-nonce"&&n.setAttribute("nonce",t["data-csp-nonce"])}),n}function ie(e){var t=e["merchant-id"],n=e["data-merchant-id"],l="",i="";return Array.isArray(t)?t.length>1?(l="*",i=t.toString()):l=t.toString():typeof t=="string"&&t.length>0?l=t:typeof n=="string"&&n.length>0&&(l="*",i=n),e["merchant-id"]=l,e["data-merchant-id"]=i,e}function ue(e,t){if(t===void 0&&(t=P()),Q(e,t),typeof window=="undefined")return t.resolve(null);var n=se(e),l=n.url,i=n.dataAttributes,s=i["data-namespace"]||"paypal",d=H(s);return ae(l,i)&&d?t.resolve(d):ce({url:l,attributes:i},t).then(function(){var u=H(s);if(u)return u;throw new Error("The window.".concat(s," global variable is not available."))})}function ce(e,t){t===void 0&&(t=P()),Q(e,t);var n=e.url,l=e.attributes;if(typeof n!="string"||n.length===0)throw new Error("Invalid url.");if(typeof l!="undefined"&&typeof l!="object")throw new Error("Expected attributes to be an object.");return new t(function(i,s){if(typeof window=="undefined")return i();re({url:n,attributes:l,onSuccess:function(){return i()},onError:function(){var d=new Error('The script "'.concat(n,'" failed to load.'));return window.fetch?fetch(n).then(function(u){return u.status===200&&s(d),u.text()}).then(function(u){var a=le(u);s(new Error(a))}).catch(function(u){s(u)}):s(d)}})})}function P(){if(typeof Promise=="undefined")throw new Error("Promise is undefined. To resolve the issue, use a Promise polyfill.");return Promise}function H(e){return window[e]}function Q(e,t){if(typeof e!="object"||e===null)throw new Error("Expected an options object.");if(typeof t!="undefined"&&typeof t!="function")throw new Error("Expected PromisePonyfill to be a function.")}const de=G({name:"AccountPage",setup(){console.log("AccountPage","setup()");const e=R(),t="Ad8Db5feNlBy6SdFa7O0fpJ2QYIcyFO9SGSg4tNpxOgOlLyWTkN6JmOFBV58ItTpdUwfBGW2L8WuoIAn",n=g(),l=g(!1),i=B.getLicence(),s=g(null),d=g(i.subscriber.email_address),u=g(i.subscriptionId),a=g(null),k=g(!1),U=()=>{s.value=null,d.value&&(u.value||a.value)&&(k.value=!0,Z.post("user/invoice",{action:u.value?"getInvoicesBySubscriptionId":"getInvoicesByInvoiceId",email:d.value,subscriptionId:u.value,invoiceId:a.value}).then(f=>{s.value=f.map(h=>(h.selected=i&&h.invoiceId===i.invoiceId,h))}).catch(f=>{s.value=[],console.warn("AccountPage",f.message)}).finally(()=>{k.value=!1}))},j=f=>{B.setToken(f).then(()=>window.location.reload())};let y=null;z(()=>{U(),ue({"client-id":t,components:"buttons",currency:"EUR",vault:!0,intent:"subscription"}).then(f=>{const h={style:{shape:"rect",color:"blue",layout:"horizontal",label:"buynow",tagline:!1},createSubscription:(w,$)=>$.subscription.create({plan_id:"P-8EY03930L1769123MMEFPZPI"}),onApprove:(w,$)=>{l.value=!0,B.setToken(null,w.subscriptionID).catch(F=>console.error(F)).finally(()=>{l.value="done",window.location.reload()})}};y=f.Buttons(h),y.render("#paypal-button-subscribe").catch(w=>{console.error("Failed to render the PayPal Buttons",w)})})}),Y(()=>{y&&y.close&&y.close(),Object.keys(window).forEach(f=>{/paypal|zoid|post_robot/.test(f)&&delete window[f]})});const M={};return["SupportByBuying","UsageNotice","Termination","Disclaimer"].forEach(f=>{let h="",w=0;for(M[f]=[];(h=e.t(f+"["+w+"]"))!==f+"["+w+"]";)w++,M[f].push(h)}),{format:J,marked:ne,now:Math.ceil(Date.now()/1e3),t:M,invoiceId:a,subscriptionId:u,email:d,status:k,getInvoices:U,invoices:s,setLicence:j,isPaying:l,error:n}}}),fe={class:"q-ma-sm"},pe={class:"row"},me={class:"col"},be={class:"row no-wrap q-col-gutter-sm"},ve={class:"col-8"},he={class:"text-h6"},we=r("div",{class:"text-subtitle2"},null,-1),ge=["innerHTML"],ye=["innerHTML"],Ie=["innerHTML"],_e=r("div",{id:"paypal-button-subscribe"},null,-1),Ee={class:"col-4"},Se={class:"text-h6"},ke=r("div",{class:"text-subtitle2"},null,-1),Le={class:"row"},Me={class:"col"},Ae={class:"row"},Te={class:"col"},Be=r("div",{class:"col-shrink q-px-md q-pb-sm row flex-center"},"or",-1),De={class:"col"},Oe={class:"row"},Ue={class:"col text-center"},$e={class:"col text-center"},Ce={class:"text-h6"},Ne=r("div",{class:"text-subtitle2"},null,-1),qe=["innerHTML"];function He(e,t,n,l,i,s){const d=C("alert"),u=C("inputs");return p(),b("div",fe,[I(r("div",pe,[r("div",me,[o(d,null,{default:c(()=>[A(m(e.error),1)]),_:1})])],512),[[_,e.error]]),r("div",be,[r("div",ve,[o(T,null,{default:c(()=>[o(v,{class:"bg-primary text-white"},{default:c(()=>[r("div",he,m(e.$t("Buy"))+" & "+m(e.$t("Subscribe")),1),we]),_:1}),o(v,null,{default:c(()=>[(p(!0),b(E,null,S(e.t.SupportByBuying,a=>(p(),b("p",{key:a},[r("span",{innerHTML:e.marked.parse(a)},null,8,ge)]))),128))]),_:1}),o(L),o(v,null,{default:c(()=>[r("strong",null,m(e.$t("Usage Notice")),1),(p(!0),b(E,null,S(e.t.UsageNotice,a=>(p(),b("p",{key:a},[r("span",{innerHTML:e.marked.parse(a)},null,8,ye)]))),128))]),_:1}),o(L),o(v,null,{default:c(()=>[r("strong",null,m(e.$t("Legal Remarks")),1),(p(!0),b(E,null,S(e.t.Disclaimer,a=>(p(),b("p",{key:a},[r("span",{innerHTML:e.marked.parse(a)},null,8,Ie)]))),128))]),_:1}),o(L),o(v,{class:"text-center"},{default:c(()=>[I(r("div",null,[r("em",null,m(e.$t("buy now")),1),_e],512),[[_,e.isPaying===!1]]),I(r("div",null,[o(N,{color:"primary",size:"3em"})],512),[[_,e.isPaying===!0]])]),_:1})]),_:1})]),r("div",Ee,[o(T,{class:"q-mb-sm"},{default:c(()=>[o(v,{class:"bg-primary text-white"},{default:c(()=>[r("div",Se,m(e.$t("Get Licences")),1),ke]),_:1}),o(v,null,{default:c(()=>[r("div",Le,[r("div",Me,[o(u,{modelValue:e.email,"onUpdate:modelValue":t[0]||(t[0]=a=>e.email=a),label:"E-Mail",value:e.email},null,8,["modelValue","value"])])]),r("div",Ae,[r("div",Te,[o(u,{modelValue:e.subscriptionId,"onUpdate:modelValue":t[1]||(t[1]=a=>e.subscriptionId=a),label:"Abonnement-ID",value:e.subscriptionId},null,8,["modelValue","value"])]),Be,r("div",De,[o(u,{modelValue:e.invoiceId,"onUpdate:modelValue":t[2]||(t[2]=a=>e.invoiceId=a),label:"Invoice-ID",value:e.invoiceId},null,8,["modelValue","value"])])]),r("div",Oe,[I(r("div",Ue,[o(u,{onOnClick:e.getInvoices,type:"button",label:e.$t("Get Licences"),flat:!1,color:"primary"},null,8,["onOnClick","label"])],512),[[_,e.status===!1]]),I(r("div",$e,[o(N,{color:"primary",size:"3em"})],512),[[_,e.status!==!1]])]),o(L,{class:"q-mx-sm q-my-md"}),o(X,null,{default:c(()=>[(p(!0),b(E,null,S(e.invoices,a=>(p(),D(te,{key:a._id,class:ee({"bg-positive":a.expires>e.now})},{default:c(()=>[o(O,null,{default:c(()=>[o(q,null,{default:c(()=>[A(m(a.date)+", #"+m(a.invoiceId),1)]),_:2},1024),o(q,{caption:""},{default:c(()=>[A(m(e.$t("valid to"))+" "+m(e.format(a.expires*1e3,"dd. MMM yyyy, HH:mm")),1)]),_:2},1024)]),_:2},1024),a.selected?(p(),D(O,{key:0,side:""},{default:c(()=>[o(K,{name:"mdi-checkbox-marked-circle-outline",color:"white"})]),_:1})):(p(),D(O,{key:1,side:""},{default:c(()=>[o(u,{type:"button",round:"",tooltip:e.$t("Set Licence"),class:"gt-xs",flat:"",icon:"mdi-checkbox-blank-circle-outline",onClick:x(k=>e.setLicence(a.token),["stop"])},null,8,["tooltip","onClick"])]),_:2},1024))]),_:2},1032,["class"]))),128))]),_:1})]),_:1})]),_:1}),o(T,null,{default:c(()=>[o(v,{class:"bg-primary text-white"},{default:c(()=>[r("div",Ce,m(e.$t("Unsubscribe"))+" / "+m(e.$t("Terminate")),1),Ne]),_:1}),o(v,null,{default:c(()=>[(p(!0),b(E,null,S(e.t.Termination,a=>(p(),b("p",{key:a},[r("span",{innerHTML:e.marked.parse(a)},null,8,qe)]))),128))]),_:1})]),_:1})])])])}var Qe=W(de,[["render",He]]);export{Qe as default};
