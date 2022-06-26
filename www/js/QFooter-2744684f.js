import{bW as y,ct as T,cu as k,cv as _,cw as S,cx as O,c as l,x as f,u as m,cy as b,cz as q,h as v,cf as P,aY as x,bf as I,a2 as p,cA as K,b6 as M,cB as j,cC as A}from"./index-5ed861c6.js";var E=y({name:"QRouteTab",props:{...T,...k},emits:_,setup(o,{slots:c,emit:u}){const a=S(),{renderTab:t,$tabs:n}=O(o,c,u,{exact:l(()=>o.exact),...a});return f(()=>o.name+o.exact+(a.linkRoute.value||{}).href,()=>{n.verifyRouteModel()}),()=>t(a.linkTag.value,a.linkProps.value)}}),N=y({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(o,{slots:c}){const{proxy:{$q:u}}=x(),a=m(b);m(q,()=>{console.error("QPage needs to be child of QPageContainer")});const t=l(()=>{const r=(a.header.space===!0?a.header.size:0)+(a.footer.space===!0?a.footer.size:0);if(typeof o.styleFn=="function"){const h=a.isContainer.value===!0?a.containerHeight.value:u.screen.height;return o.styleFn(r,h)}return{minHeight:a.isContainer.value===!0?a.containerHeight.value-r+"px":u.screen.height===0?r!==0?`calc(100vh - ${r}px)`:"100vh":u.screen.height-r+"px"}}),n=l(()=>`q-page ${o.padding===!0?" q-layout-padding":""}`);return()=>v("main",{class:n.value,style:t.value},P(c.default))}}),U=y({name:"QPageContainer",setup(o,{slots:c}){const{proxy:{$q:u}}=x(),a=m(b,()=>{console.error("QPageContainer needs to be child of QLayout")});I(q,!0);const t=l(()=>{const n={};return a.header.space===!0&&(n.paddingTop=`${a.header.size}px`),a.right.space===!0&&(n[`padding${u.lang.rtl===!0?"Left":"Right"}`]=`${a.right.size}px`),a.footer.space===!0&&(n.paddingBottom=`${a.footer.size}px`),a.left.space===!0&&(n[`padding${u.lang.rtl===!0?"Right":"Left"}`]=`${a.left.size}px`),n});return()=>v("div",{class:"q-page-container",style:t.value},P(c.default))}}),W=y({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(o,{slots:c,emit:u}){const{proxy:{$q:a}}=x(),t=m(b,()=>{console.error("QFooter needs to be child of QLayout")}),n=p(parseInt(o.heightHint,10)),r=p(!0),h=p(K.value===!0||t.isContainer.value===!0?0:window.innerHeight),g=l(()=>o.reveal===!0||t.view.value.indexOf("F")>-1||a.platform.is.ios&&t.isContainer.value===!0),$=l(()=>t.isContainer.value===!0?t.containerHeight.value:h.value),Q=l(()=>{if(o.modelValue!==!0)return 0;if(g.value===!0)return r.value===!0?n.value:0;const e=t.scroll.value.position+$.value+n.value-t.height.value;return e>0?e:0}),z=l(()=>o.modelValue!==!0||g.value===!0&&r.value!==!0),R=l(()=>o.modelValue===!0&&z.value===!0&&o.reveal===!0),w=l(()=>"q-footer q-layout__section--marginal "+(g.value===!0?"fixed":"absolute")+"-bottom"+(o.bordered===!0?" q-footer--bordered":"")+(z.value===!0?" q-footer--hidden":"")+(o.modelValue!==!0?" q-layout--prevent-focus"+(g.value!==!0?" hidden":""):"")),F=l(()=>{const e=t.rows.value.bottom,s={};return e[0]==="l"&&t.left.space===!0&&(s[a.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),e[2]==="r"&&t.right.space===!0&&(s[a.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),s});function i(e,s){t.update("footer",e,s)}function d(e,s){e.value!==s&&(e.value=s)}function H({height:e}){d(n,e),i("size",e)}function V(){if(o.reveal!==!0)return;const{direction:e,position:s,inflectionPoint:L}=t.scroll.value;d(r,e==="up"||s-L<100||t.height.value-$.value-s-n.value<300)}function B(e){R.value===!0&&d(r,!0),u("focusin",e)}f(()=>o.modelValue,e=>{i("space",e),d(r,!0),t.animate()}),f(Q,e=>{i("offset",e)}),f(()=>o.reveal,e=>{e===!1&&d(r,o.modelValue)}),f(r,e=>{t.animate(),u("reveal",e)}),f([n,t.scroll,t.height],V),f(()=>a.screen.height,e=>{t.isContainer.value!==!0&&d(h,e)});const C={};return t.instances.footer=C,o.modelValue===!0&&i("size",n.value),i("space",o.modelValue),i("offset",Q.value),M(()=>{t.instances.footer===C&&(t.instances.footer=void 0,i("size",0),i("offset",0),i("space",!1))}),()=>{const e=j(c.default,[v(A,{debounce:0,onResize:H})]);return o.elevated===!0&&e.push(v("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),v("footer",{class:w.value,style:F.value,onFocusin:B},e)}}});export{E as Q,N as a,U as b,W as c};
