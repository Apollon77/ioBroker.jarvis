var f="%[a-f0-9]{2}",g=new RegExp("("+f+")|([^%]+?)","gi"),h=new RegExp("("+f+")+","gi");function n(r,e){try{return[decodeURIComponent(r.join(""))]}catch{}if(r.length===1)return r;e=e||1;var t=r.slice(0,e),a=r.slice(e);return Array.prototype.concat.call([],n(t),n(a))}function v(r){try{return decodeURIComponent(r)}catch{for(var e=r.match(g)||[],t=1;t<e.length;t++)r=n(e,t).join(""),e=r.match(g)||[];return r}}function l(r){for(var e={"%FE%FF":"\uFFFD\uFFFD","%FF%FE":"\uFFFD\uFFFD"},t=h.exec(r);t;){try{e[t[0]]=decodeURIComponent(t[0])}catch{var a=v(t[0]);a!==t[0]&&(e[t[0]]=a)}t=h.exec(r)}e["%C2"]="\uFFFD";for(var c=Object.keys(e),o=0;o<c.length;o++){var F=c[o];r=r.replace(new RegExp(F,"g"),e[F])}return r}var y=function(r){if(typeof r!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof r+"`");try{return r=r.replace(/\+/g," "),decodeURIComponent(r)}catch{return l(r)}};export{y as d};
