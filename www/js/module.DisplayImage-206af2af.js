import{c as m}from"./vendor.quasar-78ba37d9.js";import{d as c,r as u,o as t,a,b as s,v as r,h as o,i as y,j as I,t as D,y as n,n as l}from"./vendor.vue-1bbf3cb4.js";import{M as v}from"./modules-9c8c454f.js";import{D as g}from"./controllers-596cf83c.js";import{_ as b}from"./helpers-7b53fe93.js";var z={"DisplayImage#description":"Zeigt ein Bild aus einer URL oder einem base64-Wert an.","config#DisplayImage#url#label":"URL oder Base64-Wert des Bilds","config#DisplayImage#url#info":"URL oder Base64-Wert des Bilds, das anzuzeigen ist (wenn angegeben wird das unten ausgew\xE4hlte Ger\xE4t ignoriert).","config#DisplayImage#size#label":"Gr\xF6\xDFe / Anpassung","config#DisplayImage#size#info":"Gibt an wie das Bild der Widget-Gr\xF6\xDFe anzupassen ist.","config#DisplayImage#size#option#unset":"keine Anpassung (Bild im Original)","config#DisplayImage#size#option#fit":"Anpassung an Widget-Gr\xF6\xDFe (Bild-Verh\xE4ltnis wird NICHT beibehalten)","config#DisplayImage#size#option#fitx":"Anpassung an Widget-Breite (Bild-Verh\xE4ltnis wird beibehalten)","config#DisplayImage#size#option#fity":"Anpassung an Widget-H\xF6he (Bild-Verh\xE4ltnis wird beibehalten)","config#DisplayImage#repeat#label":"Wiederholung","config#DisplayImage#repeat#info":"Gibt an, ob das Bild im Widget wiederholt / dupliziert werden soll, wenn dieses kleines ist als das Widget.","config#DisplayImage#repeat#option#norepeat":"Keine Wiederholung","config#DisplayImage#repeat#option#repeat":"Wiederholung (horizontal und vertikal)","config#DisplayImage#repeat#option#repeatx":"Wiederholung (nur horizontal)","config#DisplayImage#repeat#option#repeaty":"Wiederholung (nur vertikal)","config#DisplayImage#refresh#label":"Aktualisierungsintervall","config#DisplayImage#refresh#info":"Intervall (in Sekunden) nach dem das Bild aktualisiert wird. Der Wert 0 deaktiviert die Aktualisierung (empfohlen bei statischem Bild).","config#DisplayImage#refreshMethod#label":"Refresh Methode","config#DisplayImage#refreshMethod#info":"Um das Bild zu aktualisieren ist es notwendig die URL zu \xE4ndern. Dies kann entweder mit einer zuf\xE4lligen Nummer oder einem Leerzeichen als Erweiterung der URL erfolgen.","config#DisplayImage#refreshMethod#option#random":"Zuf\xE4llige Nummer der URL anf\xFCgen","config#DisplayImage#refreshMethod#option#whitespace":"Leerzeichen der URL anf\xFCgen"},N=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"})),w={"DisplayImage#description":"Displays a picture from an URL or a base64 value.","config#DisplayImage#url#label":"URL or base64 value of the image","config#DisplayImage#url#info":"URL or base64 value of the image to show (if this is given, device set below will be ignored).","config#DisplayImage#size#label":"Size / Adaption","config#DisplayImage#size#info":"Defines how the image is adapted to the widget.","config#DisplayImage#size#option#unset":"no adaption (image keeps original size)","config#DisplayImage#size#option#fit":"fit to widget (image does NOT keep size-relation)","config#DisplayImage#size#option#fitx":"fit to widget-width (image keeps size-relation)","config#DisplayImage#size#option#fity":"fit to screen-height (image keeps size-relation)","config#DisplayImage#repeat#label":"Repetition","config#DisplayImage#repeat#info":"Defines whether the image shall be repeated / duplicated in case it is smaller than the widget.","config#DisplayImage#repeat#option#norepeat":"no repeat","config#DisplayImage#repeat#option#repeat":"repeat (horizontally and vertically)","config#DisplayImage#repeat#option#repeatx":"repeat (horizontally)","config#DisplayImage#repeat#option#repeaty":"repeat (vertically)","config#DisplayImage#refresh#label":"Refresh Interval","config#DisplayImage#refresh#info":"Interval (in seconds) the image will be refreshed. The value 0 turns this off (recommended with static contents).","config#DisplayImage#refreshMethod#label":"Refresh Method","config#DisplayImage#refreshMethod#info":"In order to refresh the image it is required to change the URL. This can be done be either attaching a random string or a whitespace to the URL.","config#DisplayImage#refreshMethod#option#random":"Attach random string to URL","config#DisplayImage#refreshMethod#option#whitespace":"Attach whitespace to URL"},C=Object.freeze(Object.defineProperty({__proto__:null,default:w},Symbol.toStringTag,{value:"Module"})),_={"DisplayImage#description":"\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u0442 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435, \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u043D\u043E\u0435 \u043F\u043E \u0441\u0441\u044B\u043B\u043A\u0435 \u0438\u043B\u0438 \u0437\u0430\u043A\u043E\u0434\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0435 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 base64","config#DisplayImage#url#label":"\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0438\u043B\u0438 \u0434\u0430\u043D\u043D\u044B\u0435 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 base64","config#DisplayImage#url#info":"\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0438\u043B\u0438 \u0434\u0430\u043D\u043D\u044B\u0435 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 base64 (\u0435\u0441\u043B\u0438 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u043E, \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E, \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u043D \u043D\u0438\u0436\u0435, \u0431\u0443\u0434\u0435\u0442 \u0438\u0433\u043D\u043E\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F)","config#DisplayImage#size#label":"\u0420\u0430\u0437\u043C\u0435\u0440 / \u0410\u0434\u043E\u043F\u0442\u0430\u0446\u0438\u044F","config#DisplayImage#size#info":"\u041E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442, \u043A\u0430\u043A \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u0430\u0434\u043E\u043F\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043E \u043A \u0432\u0438\u0434\u0436\u0435\u0442\u0443","config#DisplayImage#size#option#unset":"\u0431\u0435\u0437 \u0430\u0434\u043E\u043F\u044C\u0430\u0446\u0438\u0438 (\u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442 \u043E\u0440\u0438\u0433\u0438\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440)","config#DisplayImage#size#option#fit":"\u0440\u0430\u0441\u0442\u044F\u043D\u0443\u0442\u044C \u043D\u0430 \u0432\u0438\u0434\u0436\u0435\u0442 (\u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u041D\u0415 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442 \u043F\u0440\u043E\u043F\u043E\u0440\u0446\u0438\u0438)","config#DisplayImage#size#option#fitx":"\u0440\u0430\u0441\u0442\u044F\u043D\u0443\u0442\u044C \u043F\u043E \u0448\u0438\u0440\u0438\u043D\u0435 \u0432\u0438\u0434\u0436\u0435\u0442\u0430 (\u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442 \u043F\u0440\u043E\u043F\u043E\u0440\u0446\u0438\u0438)","config#DisplayImage#size#option#fity":"\u0440\u0430\u0441\u0442\u044F\u043D\u0443\u0442\u044C \u043F\u043E \u0432\u044B\u0441\u043E\u0442\u0435 \u0432\u0438\u0434\u0436\u0435\u0442\u0430 (\u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442 \u043F\u0440\u043E\u043F\u043E\u0440\u0446\u0438\u0438)","config#DisplayImage#repeat#label":"\u041F\u043E\u0432\u0442\u043E\u0440","config#DisplayImage#repeat#info":"\u041E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442, \u043A\u0430\u043A \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u043F\u043E\u0432\u0442\u043E\u0440\u044F\u0442\u044C\u0441\u044F, \u0435\u0441\u043B\u0438 \u043E\u043D\u043E \u043C\u0435\u043D\u044C\u0448\u0435 \u0432\u0438\u0434\u0436\u0435\u0442\u0430","config#DisplayImage#repeat#option#norepeat":"\u043D\u0435 \u043F\u043E\u0432\u0442\u043E\u0440\u044F\u0442\u044C","config#DisplayImage#repeat#option#repeat":"\u043F\u043E\u0432\u0442\u043E\u0440\u044F\u0442\u044C (\u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u043E \u0438 \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E)","config#DisplayImage#repeat#option#repeatx":"\u043F\u043E\u0432\u0442\u043E\u0440\u044F\u0442\u044C (\u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u043E)","config#DisplayImage#repeat#option#repeaty":"\u043F\u043E\u0432\u0442\u043E\u0440\u044F\u0442\u044C (\u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E)","config#DisplayImage#refresh#label":"\u0418\u043D\u0442\u0435\u0440\u0432\u0430\u043B \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F","config#DisplayImage#refresh#info":"\u0418\u043D\u0442\u0435\u0440\u0432\u0430\u043B \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F (\u0432 \u0441\u0435\u043A\u0443\u043D\u0434\u0430\u0445). \u0415\u0441\u043B\u0438 \u0443\u043A\u0430\u0437\u0430\u043D\u043E 0, \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u043E\u0442\u043A\u043B\u044E\u0447\u0435\u043D\u043E (\u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439)","config#DisplayImage#refreshMethod#label":"\u041C\u0435\u0442\u043E\u0434 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F","config#DisplayImage#refreshMethod#info":"\u0427\u0442\u043E\u0431\u044B \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435, \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C URL. \u042D\u0442\u043E \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0441\u0434\u0435\u043B\u0430\u043D\u043E \u043B\u0438\u0431\u043E \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435\u043C \u0441\u043B\u0443\u0447\u0430\u0439\u043D\u043E\u0439 \u0441\u0442\u0440\u043E\u043A\u0438, \u043B\u0438\u0431\u043E \u043F\u0440\u043E\u0431\u0435\u043B\u0430 \u043A URL-\u0430\u0434\u0440\u0435\u0441\u0443","config#DisplayImage#refreshMethod#option#random":"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u043B\u0443\u0447\u0430\u0439\u043D\u0443\u044E \u0441\u0442\u0440\u043E\u043A\u0443 \u043A URL-\u0430\u0434\u0440\u0435\u0441\u0443","config#DisplayImage#refreshMethod#option#whitespace":"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u0440\u043E\u0431\u0435\u043B \u043A URL-\u0430\u0434\u0440\u0435\u0441\u0443"},P=Object.freeze(Object.defineProperty({__proto__:null,default:_},Symbol.toStringTag,{value:"Module"}));const S={addGroup:!1,addDivider:!1,addDevice:{max:1,fields:["primaryStateKey"]}};var p=[{columns:12,parameter:"url",label:"config#DisplayImage#url#label",info:"config#DisplayImage#url#info",placeholder:"http://"},{columns:7,parameter:"size",label:"config#DisplayImage#size#label",info:"config#DisplayImage#size#info",type:"Select",options:[{translate:"config#DisplayImage#size#option#unset",value:"unset"},{translate:"config#DisplayImage#size#option#fit",value:"fit"},{translate:"config#DisplayImage#size#option#fitx",value:"cover"},{translate:"config#DisplayImage#size#option#fity",value:"contain"}],value:"fit"},{columns:2,parameter:"refresh",label:"config#DisplayImage#refresh#label",info:"config#DisplayImage#refresh#info",type:"Number",value:0,min:0},{columns:3,parameter:"refreshMethod",label:"config#DisplayImage#refreshMethod#label",info:"config#DisplayImage#refreshMethod#info",type:"Select",options:[{translate:"config#DisplayImage#refreshMethod#option#random",value:"random"},{translate:"config#DisplayImage#refreshMethod#option#whitespace",value:"whitespace"}],value:"whitespace"}],$=Object.freeze(Object.defineProperty({__proto__:null,Settings:S,default:p},Symbol.toStringTag,{value:"Module"}));const M=c({name:"ModuleDisplayImage",props:["widget","_containerSize","_widgetSize","_alignment"],data(){return{size:{width:this._widgetSize.width,height:this._containerSize.height-1},url:null,state:{},loaded:!1,error:!1}},computed:{config(){return v.joinConfig(this.widget.config,p)},deviceConfig(){return this.widget.items&&this.widget.items[0]||{}},style(){return{...this.state&&this.state.bodyStyle||this.state&&this.state.stateStyle||{},width:this.config.size==="fit"||this.config.size==="cover"?this.size.width+"px":"auto",height:this.config.size==="fit"||this.config.size==="contain"?this.size.height-1+"px":"auto"}}},methods:{gotState(e,h,f,i){if(this.loaded=!0,e){this.error=e&&e.message||e;return}this.state=i,this.url!==i.value&&this.setUrl(i.value||"")},runInterval(){this.config.refresh&&this.config.refresh>0&&(this.setRefreshInterval&&clearInterval(this.setRefreshInterval),this.setRefreshInterval=setInterval(()=>{if(this.url&&this.url.startsWith("data:image")&&clearInterval(this.setRefreshInterval),this.url&&!this.url.startsWith("data:image")&&this.config.refreshMethod==="random"){const e=this.url.indexOf("?")!==-1?this.url.substr(this.url.indexOf("?")).replace("?","&").replace(/&_r=[0-9]*/,""):"";this.setUrl(this.url.substr(0,this.url.indexOf("?")>-1?this.url.indexOf("?"):this.url.length)+"?_r="+Date.now()+e)}else this.url&&!this.url.startsWith("data:image")&&this.config.refreshMethod==="whitespace"&&this.setUrl((this.url+" ").replace(/ {2}/g,""))},this.config.refresh*1e3))},setUrl(e){e=e.toString().trim(),e&&e.indexOf("<svg")!==-1&&(e=e.replace("<svg ",'<svg width="100%" height="100%" ')),e&&!e.startsWith("data:image")&&e.indexOf("/")===-1&&(e="data:image;base64,"+e),this.url=e,this.revision=Date.now().toString()}},watch:{_widgetSize(e){this.size.width=e.width},_containerSize(e){this.size.height=e.height-1},deviceConfig:{immediate:!0,handler:function(e){this.revision=this.widget.revision,this.widget.config.url?(this.setUrl(this.widget.config.url),this.loaded=!0):(this.device=g.get(e.deviceId),this.device?e.primaryStateKey&&g.listen(this.device.id,e.primaryStateKey,this.gotState):(this.error="DisplayImage: "+this.$i18n.t("Device {deviceId} not found").replace("{deviceId}",e.deviceId),console.warn(this.error),this.loaded=!0))}}},mounted(){this.runInterval()},beforeUnmount(){this.setRefreshInterval&&clearInterval(this.setRefreshInterval),this.device}}),R=["innerHTML"],U=["src"];function L(e,h,f,i,k,O){const d=u("alert");return t(),a("div",{class:l(["jarvis-DisplayImage",{[e._alignment.h]:!0,[e._alignment.v]:!0}]),style:n({width:e.size.width+"px",height:e.size.height+"px"})},[s(o(m,{indeterminate:""},null,512),[[r,!e.loaded&&!e.error]]),s(o(d,null,{default:y(()=>[I(D(e.error),1)]),_:1},512),[[r,e.loaded&&e.error]]),e.url&&e.url.startsWith("<svg")?(t(),a("div",{key:0,style:n(e.style),innerHTML:e.url},null,12,R)):s((t(),a("img",{key:1,class:l(["jarvis-DisplayImage-Image",{[e._alignment.h]:!0,[e._alignment.v]:!0}]),src:e.url,style:n(e.style)},null,14,U)),[[r,e.loaded&&!e.error]])],6)}var W=b(M,[["render",L]]),K=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"}));export{K as D,N as _,C as a,P as b,$ as c};
