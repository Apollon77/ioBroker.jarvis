import{bx as ee,c0 as te,c1 as ae,c2 as oe,c3 as O,c4 as ne,c5 as ie,k,Q as f,c6 as le,c7 as se,c8 as re,c9 as ce,ca as ue,cb as de,cc as fe,aY as C,ao as x,cd as E,ce as H,cf as ve,cg as A,ch as j,ci as he,ac as q,b6 as ge,a9 as me,cj as D,ck as ye,cl as Te,cm as be}from"./index-2eefae4b.js";var Se=ee({name:"QTooltip",inheritAttrs:!1,props:{...te,...ae,...oe,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:O},self:{type:String,default:"top middle",validator:O},offset:{type:Array,default:()=>[14,14],validator:ne},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...ie],setup(e,{slots:M,emit:y,attrs:v}){let i,l;const h=me(),{proxy:{$q:o}}=h,s=k(null),u=k(!1),L=f(()=>D(e.anchor,o.lang.rtl)),Q=f(()=>D(e.self,o.lang.rtl)),W=f(()=>e.persistent!==!0),{registerTick:N,removeTick:R}=le(),{registerTimeout:d}=se(),{transitionProps:_,transitionStyle:B}=re(e),{localScrollTarget:T,changeScrollEvent:I,unconfigureScrollTarget:U}=ce(e,P),{anchorEl:a,canShow:V,anchorEvents:r}=ue({showing:u,configureAnchorEl:K}),{show:Y,hide:g}=de({showing:u,canShow:V,handleShow:z,handleHide:F,hideOnRouteChange:W,processOnMount:!0});Object.assign(r,{delayShow:G,delayHide:J});const{showPortal:b,hidePortal:p,renderPortal:$}=fe(h,s,Z);if(o.platform.is.mobile===!0){const t={anchorEl:a,innerRef:s,onClickOutside(n){return g(n),n.target.classList.contains("q-dialog__backdrop")&&be(n),!0}},m=f(()=>e.modelValue===null&&e.persistent!==!0&&u.value===!0);C(m,n=>{(n===!0?Te:E)(t)}),x(()=>{E(t)})}function z(t){b(),N(()=>{l=new MutationObserver(()=>c()),l.observe(s.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),c(),P()}),i===void 0&&(i=C(()=>o.screen.width+"|"+o.screen.height+"|"+e.self+"|"+e.anchor+"|"+o.lang.rtl,c)),d(()=>{b(!0),y("show",t)},e.transitionDuration)}function F(t){R(),p(),S(),d(()=>{p(!0),y("hide",t)},e.transitionDuration)}function S(){l!==void 0&&(l.disconnect(),l=void 0),i!==void 0&&(i(),i=void 0),U(),H(r,"tooltipTemp")}function c(){const t=s.value;a.value===null||!t||ve({el:t,offset:e.offset,anchorEl:a.value,anchorOrigin:L.value,selfOrigin:Q.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function G(t){if(o.platform.is.mobile===!0){A(),document.body.classList.add("non-selectable");const m=a.value,n=["touchmove","touchcancel","touchend","click"].map(w=>[m,w,"delayHide","passiveCapture"]);j(r,"tooltipTemp",n)}d(()=>{Y(t)},e.delay)}function J(t){o.platform.is.mobile===!0&&(H(r,"tooltipTemp"),A(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),d(()=>{g(t)},e.hideDelay)}function K(){if(e.noParentEvent===!0||a.value===null)return;const t=o.platform.is.mobile===!0?[[a.value,"touchstart","delayShow","passive"]]:[[a.value,"mouseenter","delayShow","passive"],[a.value,"mouseleave","delayHide","passive"]];j(r,"anchor",t)}function P(){if(a.value!==null||e.scrollTarget!==void 0){T.value=he(a.value,e.scrollTarget);const t=e.noParentEvent===!0?c:g;I(T.value,t)}}function X(){return u.value===!0?q("div",{...v,ref:s,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",v.class],style:[v.style,B.value],role:"tooltip"},ye(M.default)):null}function Z(){return q(ge,_.value,X)}return x(S),Object.assign(h.proxy,{updatePosition:c}),$}});export{Se as Q};
