import{V as S}from"./vendor.vue-demi-c5e13d03.js";import{a as J,r as W}from"./vendor.resize-detector-10772b10.js";import{i as Y,t as $}from"./vendor.echarts-c3f5bfdf.js";import{d as G,a7 as D,R as A,Z as K,u as b,V as Q,w as z,z as P,q as X,J as ee,_ as te,Y as ne,O as re}from"./vendor.vue-1bbf3cb4.js";var d=function(){return d=Object.assign||function(e){for(var r,n=1,s=arguments.length;n<s;n++)for(var t in r=arguments[n])Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t]);return e},d.apply(this,arguments)},ae=["getWidth","getHeight","getDom","getOption","resize","dispatchAction","convertToPixel","convertFromPixel","containPixel","getDataURL","getConnectedDataURL","appendData","clear","isDisposed","dispose"];function oe(e){return r=Object.create(null),ae.forEach(function(n){r[n]=function(s){return function(){for(var t=[],l=0;l<arguments.length;l++)t[l]=arguments[l];if(!e.value)throw new Error("ECharts is not initialized yet.");return e.value[s].apply(e.value,t)}}(n)}),r;var r}var ie={autoresize:Boolean},ue=/^on[^a-z]/,se=function(e){return ue.test(e)};function T(e,r){var n=re(e);return n&&typeof n=="object"&&"value"in n?n.value||r:n||r}var ce={loading:Boolean,loadingOptions:Object},y=null,H=[],_=[];(function(e,r){if(e&&typeof document!="undefined"){var n,s=r.prepend===!0?"prepend":"append",t=r.singleTag===!0,l=typeof r.container=="string"?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(t){var p=H.indexOf(l);p===-1&&(p=H.push(l)-1,_[p]={}),n=_[p]&&_[p][s]?_[p][s]:_[p][s]=E()}else n=E();e.charCodeAt(0)===65279&&(e=e.substring(1)),n.styleSheet?n.styleSheet.cssText+=e:n.appendChild(document.createTextNode(e))}function E(){var O=document.createElement("style");if(O.setAttribute("type","text/css"),r.attributes)for(var g=Object.keys(r.attributes),m=0;m<g.length;m++)O.setAttribute(g[m],r.attributes[g[m]]);var U=s==="prepend"?"afterbegin":"beforeend";return l.insertAdjacentElement(U,O),O}})(`x-vue-echarts{display:block;width:100%;height:100%;min-width:0}
`,{});var le=function(){if(y!=null)return y;if(typeof HTMLElement=="undefined"||typeof customElements=="undefined")return y=!1;try{new Function("tag",`class EChartsElement extends HTMLElement {
  __dispose = null;

  disconnectedCallback() {
    if (this.__dispose) {
      this.__dispose();
      this.__dispose = null;
    }
  }
}

if (customElements.get(tag) == null) {
  customElements.define(tag, EChartsElement);
}
`)("x-vue-echarts")}catch{return y=!1}return y=!0}();S&&S.config.ignoredElements.push("x-vue-echarts");var ge="ecTheme",he=G({name:"echarts",props:d(d({option:Object,theme:{type:[Object,String]},initOptions:Object,updateOptions:Object,group:String,manualUpdate:Boolean},ie),ce),emits:[],inheritAttrs:!1,setup:function(e,r){var n=r.attrs,s=D(),t=D(),l=D(),p=A("ecTheme",null),E=A("ecInitOptions",null),O=A("ecUpdateOptions",null),g=K(e),m=g.autoresize,U=g.manualUpdate,F=g.loading,I=g.loadingOptions,N=b(function(){return l.value||e.option||null}),B=b(function(){return e.theme||T(p,{})}),R=b(function(){return e.initOptions||T(E,{})}),M=b(function(){return e.updateOptions||T(O,{})}),V=b(function(){return function(c){var a={};for(var u in c)se(u)||(a[u]=c[u]);return a}(n)}),q=Q().proxy.$listeners;function x(c){if(s.value){var a=t.value=Y(s.value,B.value,R.value);e.group&&(a.group=e.group);var u=q;u||(u={},Object.keys(n).filter(function(i){return i.indexOf("on")===0&&i.length>2}).forEach(function(i){var o=i.charAt(2).toLowerCase()+i.slice(3);o.substring(o.length-4)==="Once"&&(o="~".concat(o.substring(0,o.length-4))),u[o]=n[i]})),Object.keys(u).forEach(function(i){var o=u[i];if(o){var f=i.toLowerCase();f.charAt(0)==="~"&&(f=f.substring(1),o.__once__=!0);var h=a;if(f.indexOf("zr:")===0&&(h=a.getZr(),f=f.substring(3)),o.__once__){delete o.__once__;var w=o;o=function(){for(var C=[],L=0;L<arguments.length;L++)C[L]=arguments[L];w.apply(void 0,C),h.off(f,o)}}h.on(f,o)}}),m.value?ne(function(){a&&!a.isDisposed()&&a.resize(),v()}):v()}function v(){var i=c||N.value;i&&a.setOption(i,M.value)}}function k(){t.value&&(t.value.dispose(),t.value=void 0)}var j=null;z(U,function(c){typeof j=="function"&&(j(),j=null),c||(j=z(function(){return e.option},function(a,u){a&&(t.value?t.value.setOption(a,d({notMerge:a.value!==(u==null?void 0:u.value)},M.value)):x())},{deep:!0}))},{immediate:!0}),z([B,R],function(){k(),x()},{deep:!0}),P(function(){e.group&&t.value&&(t.value.group=e.group)});var Z=oe(t);return function(c,a,u){var v=A("ecLoadingOptions",{}),i=b(function(){return d(d({},T(v,{})),u==null?void 0:u.value)});P(function(){var o=c.value;o&&(a.value?o.showLoading(i.value):o.hideLoading())})}(t,F,I),function(c,a,u){var v=null;z([u,c,a],function(i,o,f){var h=i[0],w=i[1],C=i[2];h&&w&&C&&(v=$(function(){w.resize()},100),J(h,v)),f(function(){v&&h&&W(h,v)})})}(t,m,s),X(function(){x()}),ee(function(){le&&s.value?s.value.__dispose=k:k()}),d({chart:t,root:s,setOption:function(c,a){e.manualUpdate&&(l.value=c),t.value?t.value.setOption(c,a||{}):x(c)},nonEventAttrs:V},Z)},render:function(){var e=S?{attrs:this.nonEventAttrs}:d({},this.nonEventAttrs);return e.ref="root",e.class=e.class?["echarts"].concat(e.class):"echarts",te("x-vue-echarts",e)}});export{he as S,ge as U};
