(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"0634":function(t,e,i){var a={"./":"139f","./de":"19ff","./de.js":"19ff","./en":"f740","./en.js":"f740","./index":"139f","./index.js":"139f"};function s(t){var e=n(t);return i(e)}function n(t){if(!i.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}s.keys=function(){return Object.keys(a)},s.resolve=n,t.exports=s,s.id="0634"},"139f":function(t,e,i){"use strict";i.r(e);var a=i("0692");e["default"]={translations:Object(a["a"])((t=>i("0634")("./"+t))),register:a["c"]}},"19ff":function(t,e,i){"use strict";i.r(e),e["default"]={Notifications:"Benachrichtigungen","hide archived notifications":"verstecke archivierte Benachrichtigungen","show archived notifications":"zeige archivierte Benachrichtigungen"}},"3d83":function(t,e,i){},"42f6":function(t,e,i){var a={"./":"bf05","./de":"8ac8","./de.js":"8ac8","./en":"4a4e","./en.js":"4a4e","./index":"bf05","./index.js":"bf05"};function s(t){var e=n(t);return i(e)}function n(t){if(!i.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}s.keys=function(){return Object.keys(a)},s.resolve=n,t.exports=s,s.id="42f6"},"493f":function(t,e,i){"use strict";i("528e")},"4a4e":function(t,e,i){"use strict";i.r(e),e["default"]={}},"528e":function(t,e,i){},5747:function(t,e,i){"use strict";i("8130")},"6a7e":function(t,e,i){"use strict";i("c6f0c")},"74e0":function(t,e,i){},"76c6":function(t,e,i){},7922:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-layout",{attrs:{view:"hHh lpR fFf"}},[i("q-resize-observer",{on:{resize:t.onResize}}),i("q-header",{attrs:{reveal:""}},[t.tabsCount>1?i("q-tabs",{attrs:{"inline-label":"",dense:"",align:"left"},model:{value:t.tabId,callback:function(e){t.tabId=e},expression:"tabId"}},[i("q-btn",{staticClass:"q-ml-sm",attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:t.toggleDrawerLeft}}),i("div",{staticClass:"row nowrap",staticStyle:{margin:"2px 0"}},[t._l(t.tabs,(function(e){return i("q-route-tab",{key:e.id,ref:"tabs",refInFor:!0,style:{backgroundColor:e.backgroundColor,color:e.color},attrs:{to:{params:{tabId:e.id}},name:e.id}},[[i("icon",{staticClass:"tabIcon",attrs:{name:e.icon,color:e.iconColor||"#fff",size:"xs"}}),!0!==t.page.hideLabels?i("div",{staticClass:"q-tab__label"},[t._v(t._s(e.title))]):t._e()]],2)})),i("q-btn-dropdown",{directives:[{name:"show",rawName:"v-show",value:t.enableTabsDropdown,expression:"enableTabsDropdown"}],attrs:{"auto-close":"",stretch:"",flat:"",icon:"mdi-tab-unselected",label:t.$t("More")+"..."},nativeOn:{mouseover:function(e){t.hiddenTabsDropdown=!0}},model:{value:t.hiddenTabsDropdown,callback:function(e){t.hiddenTabsDropdown=e},expression:"hiddenTabsDropdown"}},[i("q-list",t._l(t.hiddenTabs,(function(e){return i("q-item",{key:e.id,attrs:{clickable:""},on:{click:function(i){t.tabId=e.id}}},[i("q-item-section",{attrs:{avatar:""}},[i("icon",{attrs:{name:e.icon}})],1),i("q-item-section",[t._v(t._s(e.title))])],1)})),1)],1)],2),i("q-space"),i("q-btn",{staticClass:"q-mr-sm",staticStyle:{"margin-bottom":"-4px"},attrs:{flat:"",dense:"",round:"",icon:"mdi-bell","aria-label":"Notifications"},on:{click:t.toggleDrawerRight}},[i("q-badge",{attrs:{color:"secondary",align:"middle",floating:""}},[t._v(t._s(t.unreadNotificationsCount))])],1)],1):t._e()],1),i("q-drawer",{attrs:{value:t.drawerLeft,side:"left",behavior:"mobile",overlay:"",bordered:""},on:{input:t.toggleDrawerLeft}},[i("sidebar")],1),i("notification-event-popup"),i("notification-event-snackbar"),i("notification-drawer"),i("device-details-popup"),i("q-page-container",[i("q-page",{staticClass:"jarvis-page jarvis-body",attrs:{"style-fn":t.pageContainer}},[i("q-tab-panels",{staticStyle:{"background-color":"transparent"},attrs:{animated:"",swipeable:t.$q.platform.is.mobile},model:{value:t.tabId,callback:function(e){t.tabId=e},expression:"tabId"}},t._l(t.tabs,(function(e){return i("q-tab-panel",{key:e.id,staticStyle:{padding:"0"},attrs:{name:e.id}},[i("page",{attrs:{page:t.page,tab:e}})],1)})),1)],1)],1)],1)},s=[],n=i("a6f4"),o=i("853a"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-dialog",{attrs:{value:null!==t.deviceId},on:{hide:t.onClose}},[i("q-card",{staticClass:"column",staticStyle:{width:"800px","max-width":"80vw","flex-wrap":"nowrap"}},[i("q-card-section",{staticClass:"row items-center"},[i("div",{staticClass:"text-h6"},[t._v(t._s(t.device.name))]),i("q-space"),i("q-btn",{attrs:{flat:"",round:"",color:"grey",icon:"close"},on:{click:t.onClose}})],1),i("q-separator"),i("q-card-section",{staticClass:"col q-pa-none scroll body"},[i("state-list",{attrs:{openDeviceDetails:!1,widget:t.widget}})],1),i("q-separator"),i("q-card-actions",{attrs:{align:"right"}},[i("q-btn",{attrs:{flat:"",label:t.$t("Close"),color:"primary"},on:{click:t.onClose}})],1)],1)],1)},c=[],l=i("ded3"),d=i.n(l),h=i("ec26"),p=i("3dff"),g=Object(n["c"])({name:"DeviceDetailsPopup",components:{StateList:p["default"]},computed:{deviceId(){return this.$store.state.jarvis.selectedDeviceId},device(){const t=this.$store.state.jarvis.devices;return this.deviceId&&t[this.deviceId]||{}},widget(){const t=[];for(const e in this.device.states){if(void 0===this.device.states[e].state)continue;0!==t.length&&t.push({id:Object(h["a"])(),type:"divider"});const i=this.device.states[e];t.push(d()(d()({id:Object(h["a"])(),type:"device",deviceId:this.device.id,bodyStateKey:e,primaryStateKey:e},i),{},{label:i.label||e,deviceStateDetails:!0}))}return{items:t}}},methods:{onClose(){this.$store.commit("jarvis/set",{selectedDeviceId:null})}}}),u=g,f=i("2877"),m=i("24e8"),v=i("f09f"),b=i("a370"),w=i("2c91"),C=i("9c40"),q=i("eb85"),y=i("4b7e"),_=i("eebe"),$=i.n(_),k=Object(f["a"])(u,r,c,!1,null,null,null),S=k.exports;$()(k,"components",{QDialog:m["a"],QCard:v["a"],QCardSection:b["a"],QSpace:w["a"],QBtn:C["a"],QSeparator:q["a"],QCardActions:y["a"]});var x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-drawer",{attrs:{value:t.drawerRight,side:"right",behavior:"mobile",width:500,overlay:"",bordered:"","content-class":"NotificationDrawer"},on:{input:function(e){return t.toggleDrawerRight(!1)}}},[i("q-header",[i("q-toolbar",[i("h6",[i("icon",{attrs:{name:"mdi-bell"}}),t._v("\n\t\t\t"+t._s(t.$t("Notifications"))+"\n\t\t")],1),i("q-space"),i("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"mdi-chevron-right","aria-label":"Menu"},on:{click:function(e){return t.toggleDrawerRight(!1)}}})],1)],1),i("notification-list")],1)},j=[],Q=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"q-mt-sm NotificationList"},[i("q-separator"),i("q-list",t._l(t.notificationsActive,(function(t){return i("div",{key:t.id},[i("notification-item",{attrs:{notification:t}})],1)})),0),i("q-btn",{staticClass:"full-width",attrs:{flat:""},on:{click:function(e){return t.toggle()}}},[t.showArchived?i("divider",{attrs:{label:t.$t("hide archived notifications")}}):i("divider",{attrs:{label:t.$t("show archived notifications")}})],1),t.showArchived?i("div",[i("q-separator"),i("q-list",t._l(t.notificationsArchived,(function(t){return i("div",{key:t.id},[i("notification-item",{attrs:{notification:t}})],1)})),0)],1):t._e()],1)},z=[],T=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row full-width"},[i("div",{staticClass:"col",staticStyle:{margin:"auto 0"}},[i("q-separator")],1),i("div",{staticStyle:{"text-align":"center"}},[t._v("\n\t\t  "),i("em",[t._v(t._s(t.label))]),t._v("  \n\t")]),i("div",{staticClass:"col",staticStyle:{margin:"auto 0"}},[i("q-separator")],1)])},D=[],I=Object(n["c"])({name:"Divider",props:["label"]}),O=I,R=Object(f["a"])(O,T,D,!1,null,null,null),N=R.exports;$()(R,"components",{QSeparator:q["a"]});var H=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],class:t.notification.state||"unread",attrs:{clickable:"",id:"notification-"+t.notification.id},on:{click:t.show}},[i("q-item-section",{attrs:{avatar:""}},[i("icon",{attrs:{name:t.notification.icon||"mdi-comment",color:"primary",size:"24px"}})],1),i("q-item-section",[i("q-item-label",{attrs:{lines:"1"}},[i("span",{staticClass:"text-weight-medium"},[t._v(t._s(t.notification.title))])]),t.notification.message?i("q-item-label",{attrs:{caption:"",lines:"1"}},[i("div",{staticClass:"overflow-dots",domProps:{innerHTML:t._s(t.notification.message)}})]):t._e()],1),i("q-item-section",{attrs:{side:""}},[i("div",{staticClass:"text-grey-8 q-gutter-xs"},["read"===t.notification.state?i("q-btn",{staticClass:"gt-xs",attrs:{size:"12px",flat:"",dense:"",round:"",icon:"mdi-circle-outline"},on:{click:t.unread}},[i("q-tooltip",[t._v(t._s(t.$t("Mark as unread")))])],1):t._e(),"read"!==t.notification.state&&"archived"!==t.notification.state?i("q-btn",{staticClass:"gt-xs",attrs:{size:"12px",flat:"",dense:"",round:"",icon:"mdi-circle-slice-8"},on:{click:t.read}},[i("q-tooltip",[t._v(t._s(t.$t("Mark as read")))])],1):t._e(),"archived"!==t.notification.state?i("q-btn",{staticClass:"gt-xs",attrs:{size:"12px",flat:"",dense:"",round:"",icon:"mdi-package-down"},on:{click:t.archive}},[i("q-tooltip",[t._v(t._s(t.$t("Mark as archived")))])],1):t._e(),"archived"===t.notification.state?i("q-btn",{staticClass:"gt-xs",attrs:{size:"12px",flat:"",dense:"",round:"",icon:"mdi-package-up"},on:{click:t.unarchive}},[i("q-tooltip",[t._v(t._s(t.$t("Restore from archive")))])],1):t._e(),"archived"===t.notification.state?i("q-btn",{staticClass:"gt-xs",attrs:{color:"negative",size:"12px",flat:"",dense:"",round:"",icon:"delete"},on:{click:t.remove}},[i("q-tooltip",[t._v(t._s(t.$t("Delete")))])],1):t._e()],1)])],1),i("q-separator")],1)},A=[],E=Object(n["c"])({name:"NotificationListItem",props:["notification"],methods:{preventDefault(t){t.stopPropagation()},show(){this.$store.commit("notifications/setNew",{notifications:[d()(d()({},this.notification),{},{dialog:"popup",progress:!1})]})},read(t){this.preventDefault(t),this.$store.dispatch("notifications/set",{notificationId:this.notification.id,props:{state:"read"}})},unread(t){this.preventDefault(t),this.$store.dispatch("notifications/set",{notificationId:this.notification.id,props:{state:"unread"}})},archive(t){this.preventDefault(t),this.$store.dispatch("notifications/set",{notificationId:this.notification.id,props:{state:"archived"}})},unarchive(t){this.preventDefault(t),this.$store.dispatch("notifications/set",{notificationId:this.notification.id,props:{state:"unread"}})},remove(t){this.preventDefault(t),this.$store.dispatch("notifications/del",{notificationId:this.notification.id})}}}),L=E,P=(i("5747"),i("66e5")),M=i("4074"),B=i("0170"),G=i("05c0"),F=i("714f"),W=Object(f["a"])(L,H,A,!1,null,null,null),V=W.exports;$()(W,"components",{QItem:P["a"],QItemSection:M["a"],QItemLabel:B["a"],QBtn:C["a"],QTooltip:G["a"],QSeparator:q["a"]}),$()(W,"directives",{Ripple:F["a"]});var U=Object(n["c"])({name:"NotificationList",components:{NotificationItem:V,Divider:N},data(){return{showArchived:!1}},methods:{toggle(){this.showArchived=!this.showArchived}},computed:{notificationsActive(){return this.$store.getters["notifications/getActive"]},notificationsArchived(){return this.$store.getters["notifications/getArchived"]}}}),J=U,K=(i("f894"),i("1c1c")),X=Object(f["a"])(J,Q,z,!1,null,null,null),Y=X.exports;$()(X,"components",{QSeparator:q["a"],QList:K["a"],QBtn:C["a"]});var Z=i("139f"),tt=Object(n["c"])({name:"NotificationDrawer",components:{NotificationList:Y},methods:{toggleDrawerRight(t){this.$store.commit("jarvis/set",{drawerRightOpen:void 0!==t?t:!this.drawerRight})}},computed:{drawerRight(){return this.$store.state.jarvis.drawerRightOpen}},created(){Z["default"].register(this.$i18n,Z["default"].translations)}}),et=tt,it=(i("6a7e"),i("9404")),at=i("e359"),st=i("65c6"),nt=Object(f["a"])(et,x,j,!1,null,null,null),ot=nt.exports;$()(nt,"components",{QDrawer:it["a"],QHeader:at["a"],QToolbar:st["a"],QSpace:w["a"],QBtn:C["a"]});var rt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div")},ct=[],lt=Object(n["c"])({name:"NotificationEventSnackbar",methods:{markAsArchived(t){this.$store.dispatch("notifications/set",{notificationId:t.id,props:{state:"archived"}})},markAsRead(t){this.$store.dispatch("notifications/set",{notificationId:t.id,props:{state:"read"}})},remove(t){this.$store.dispatch("notifications/del",{notificationId:t.id})},show(t={}){!t.type&&t.criticality&&(t.type="error"===t.criticality?"negative":"success"===t.criticality?"positive":t.criticality),!t.position&&t.snackbarOrigin&&(t.position=[],t.snackbarOrigin.horizontal&&t.position.push(t.snackbarOrigin.horizontal),t.snackbarOrigin.vertical&&t.position.push(t.snackbarOrigin.vertical),t.position=t.position.join(2===t.position.length?"-":"")),this.$q.notify(d()(d()({color:"primary",textColor:"white",html:!0,position:"bottom-right",group:!1,progress:!0,progressClass:"jarvis-notification-event-snackbar-progress",timeout:t.autoHideDuration||5e3,classes:"jarvis-notification-event-snackbar",actions:[{icon:"mdi-circle-slice-8",size:"sm",color:t.textColor||"white",handler:()=>this.markAsRead(t)},{icon:"mdi-package-down",size:"sm",color:t.textColor||"white",handler:()=>this.markAsArchived(t)},{icon:"mdi-delete",size:"sm",color:"negative",handler:()=>this.remove(t)}]},t),{},{message:t.title||t.message}))}},created(){this.$store.subscribe((t=>{if("notifications/setNew"===t.type){const e=t.payload.notifications;e.forEach((t=>"snackbar"===t.display&&this.show(t))),this.$store.commit("notifications/resetNew")}}))}}),dt=lt,ht=Object(f["a"])(dt,rt,ct,!1,null,null,null),pt=ht.exports,gt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.notifications,(function(e){var a,s,n;return i("q-dialog",{key:e.id,staticClass:"jarvis-notification-event-popup",attrs:{value:t.dialogs[e.id],"transition-show":"scale","transition-hide":"scale"},on:{hide:function(i){t.dialogs[e.id]=!1}}},[i("q-card",{class:(a={},a["bg-"+(e.color||e.type||"primary")]=!0,a["text-"+(e.textColor||"white")]=!0,a),staticStyle:{width:"500px","max-width":"80vw"}},[e.title||e.caption?i("q-card-section",[i("div",{staticClass:"text-h6"},[t._v(t._s(e.title))]),e.caption?i("div",{staticClass:"text-caption"},[t._v(t._s(e.caption))]):t._e()]):t._e(),e.message?i("q-card-section",{staticClass:"q-pt-none"},[i("div",{domProps:{innerHTML:t._s(e.message)}})]):t._e(),e.progress?i("q-card-section",{staticClass:"q-pa-none",class:(s={},s["updated-"+t.refresh]=!0,s["text-"+(e.color||e.type||"primary")]=!0,s["bg-"+(e.textColor||"white")]=!0,s)},[i("q-linear-progress",{staticClass:"q-mt-md",attrs:{value:t.timers[e.id]?t.timers[e.id]/e.timeout:0,color:e.color||e.type||"primary"}})],1):t._e(),i("q-card-actions",{class:(n={},n["text-"+(e.color||e.type||"primary")]=!0,n["bg-"+(e.textColor||"white")]=!0,n)},[i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:t.$t("Delete"),icon:"mdi-delete",color:"negative"},on:{click:function(i){return t.remove(e)}}}),i("q-space"),i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:t.$t("Archive"),icon:"mdi-package-down"},on:{click:function(i){return t.markAsArchived(e)}}}),i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:t.$t("Mark as Read"),icon:"mdi-circle-slice-8"},on:{click:function(i){return t.markAsRead(e)}}})],1)],1)],1)})),1)},ut=[],ft=Object(n["c"])({name:"NotificationEventPopup",data(){return{refresh:0,dialogs:{},timers:{},notifications:[]}},methods:{markAsArchived(t){this.$store.dispatch("notifications/set",{notificationId:t.id,props:{state:"archived"}})},markAsRead(t){this.$store.dispatch("notifications/set",{notificationId:t.id,props:{state:"read"}})},remove(t){this.$store.dispatch("notifications/del",{notificationId:t.id})},timer(t,e=50){setTimeout((()=>{this.$set(this.timers,t.id,Math.max(0,this.timers[t.id]-e)),this.refresh=Date.now(),this.timers[t.id]>0?this.timer(t):this.$set(this.dialogs,t.id,!1)}),e)}},created(){this.$store.subscribe((t=>{"notifications/setNew"===t.type&&(this.notifications=t.payload.notifications.filter((t=>"popup"===t.display)),this.notifications.forEach((t=>{t.progress&&(t.timeout=t.timeout||5e3,this.timers[t.id]=t.timeout,this.timer(t,500)),this.$set(this.dialogs,t.id,!0)})),this.$store.commit("notifications/resetNew"))}))}}),mt=ft,vt=i("6b1d"),bt=i("7f67"),wt=Object(f["a"])(mt,gt,ut,!1,null,null,null),Ct=wt.exports;$()(wt,"components",{QDialog:m["a"],QCard:v["a"],QCardSection:b["a"],QLinearProgress:vt["a"],QCardActions:y["a"],QBtn:C["a"],QSpace:w["a"]}),$()(wt,"directives",{ClosePopup:bt["a"]});var qt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[!0!==t.tab.fullscreen?i("div",{staticClass:"container",style:{gridTemplateRows:"repeat("+t.containerRows+", "+t.widgetHeight+"px)",columnGap:t.widgetGap+"px",rowGap:t.widgetGap+"px",padding:t.widgetGap+"px"}},t._l(t.getWidgetContainers,(function(e){return i("div",{key:e.i,staticClass:"box",style:{gridColumn:e.x+1+" / span "+e.w,gridRow:e.y+1+" / span "+e.h}},[i("widget",{attrs:{page:t.page,tab:t.tab,widgets:e.items||[],config:e,containerSize:{width:t.$q.screen.width/12*e.w,height:e.h*t.widgetHeight+(e.h-1)*t.widgetGap}}})],1)})),0):i("div",{style:{height:t.pageHeight+"px"}},[i("widget",{attrs:{fullscreen:"",page:t.page,tab:t.tab,widgets:t.fullscreenContainer.items||[],config:t.fullscreenContainer,containerSize:{width:t.$q.screen.width,height:t.pageHeight}}})],1)])},yt=[],_t=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"jarvis-widget widget bgcolor",class:{tile:t.tab.widgetEdges,paper:!t.tab.widgetEdges},style:!1===t.scaleToFitContents?{"overflow-y":"auto"}:{}},[i("q-card",{staticClass:"jarvis-module module full-width full-height",class:"jarvis-module-"+t.widget.module,attrs:{flat:""}},[!0!==t.widget.hideTitle&&(t.widget.icon||t.widget.title)?i("q-item",{ref:"widgetTitle"},[t.widget.icon?i("q-item-section",{attrs:{side:""}},[i("q-avatar",{staticClass:"widget-icon jarvis-widget-icon",attrs:{square:t.tab.widgetEdges,rounded:!t.tab.widgetEdges,icon:t.widget.icon,"font-size":"24px"}})],1):t._e(),i("q-item-section",[i("q-item-label",{staticClass:"text-h6"},[t._v(t._s(t.widget.title))])],1)],1):t._e(),!0!==t.widget.hideTitle&&(t.widget.icon||t.widget.title)?i("q-separator"):t._e(),i("q-card-section",{staticClass:"jarvis-widget-content widget-content",attrs:{horizontal:""}},[i("q-resize-observer",{on:{resize:t.onResize}}),i("div",{staticClass:"widget-scaler full-width",style:t.scaleStyle},[i(t.modules[t.widget.module],t._b({tag:"component",staticClass:"full-width",attrs:{widget:t.widget,_containerSize:{width:t.containerSize.width,height:t.containerSize.height-t.widgetTitleSize},_widgetSize:{width:t.size.width,height:t.size.height}}},"component",Object.assign({},t.$props,t.$attrs),!1))],1)],1)],1)],1)},$t=[],kt=i("6211"),St=Object(n["c"])({name:"Widget",props:["page","tab","widgets","config","widgetSize","containerSize"],mounted(){this.widgetTitleSize=this.$refs.widgetTitle&&this.$refs.widgetTitle.$el.offsetHeight||0},computed:{scale(){if(!1===this.scaleToFitContents||kt["b"].includes(this.widget.module))return{x:1,y:1};const t={x:this.size?Math.min(1,this.containerSize.width/this.size.width):1,y:this.size?Math.min(1,(this.containerSize.height-this.widgetTitleSize)/this.size.height):1};return t},position(){const t=[0,0];return t[0]="center"===this.alignmentHorizontal?"50%":"right"===this.alignmentHorizontal?"100%":this.alignmentHorizontal,t[1]="middle"===this.alignmentVertical?"50%":"bottom"===this.alignmentVertical?"100%":this.alignmentVertical,t},scaleSizes(){return{width:"fill-width"!==this.alignmentHorizontal?"100%":Math.floor(1/(this.scale.y<this.scale.x?this.scale.y:this.scale.x)*100)+"% !important",height:this.containerSize.height-this.widgetTitleSize+"px"}},scaleStyle(){const t={transform:"scale("+(this.scale.y<this.scale.x?this.scale.y:this.scale.x)+")","transform-origin":this.position.join(" ")};return"middle"===this.alignmentVertical&&(t.margin="auto"),t},widget(){const t=this.widgets[0];return this.$store.state.jarvis.widgets[t]||{}}},methods:{onResize(t){this.size=t}},data(){this.modules=kt["c"]._Modules;let{alignmentHorizontal:t,alignmentVertical:e,scaleToFitContents:i}=this.config;return t=t||"center",e=e||"top",i=void 0===i||i,{scaleToFitContents:i,alignmentHorizontal:t,alignmentVertical:e,size:{width:0,height:0},widgetTitleSize:0}}}),xt=St,jt=(i("493f"),i("cb32")),Qt=i("3980"),zt=Object(f["a"])(xt,_t,$t,!1,null,null,null),Tt=zt.exports;$()(zt,"components",{QCard:v["a"],QItem:P["a"],QItemSection:M["a"],QAvatar:jt["a"],QItemLabel:B["a"],QSeparator:q["a"],QCardSection:b["a"],QResizeObserver:Qt["a"]});var Dt=Object(n["c"])({name:"Page",props:["page","tab"],components:{Widget:Tt},computed:{widgetGap(){return this.isSmartphone&&this.widgetConfig.smartphoneGapSize||this.isTablet&&this.widgetConfig.tabletGapSize||this.widgetConfig.desktopGapSize||5},pageHeight(){return this.$store.state.jarvis.pageHeight},containerRows(){return Math.max.apply(Math,this.getWidgetContainers.map((t=>t.y+t.h)))},widgetHeight(){const t=this.isSmartphone&&this.widgetConfig.smartphoneFitPageHeight||this.isTablet&&this.widgetConfig.tabletFitPageHeight||this.widgetConfig.desktopFitPageHeight||!1,e=this.isSmartphone&&this.widgetConfig.smartphoneWidgetHeight||this.isTablet&&this.widgetConfig.tabletWidgetHeight||this.widgetConfig.desktopWidgetHeight||100;return!0===t?(this.pageHeight-2*this.widgetGap)/this.containerRows-this.widgetGap:e},fullscreenContainer(){var t;return(null===(t=this.getWidgetContainers)||void 0===t?void 0:t[0])||{}},getWidgetContainers(){return this.isSmartphone&&"specific-layout"===this.widgetConfig.smartphoneSameAs||this.isTablet&&"smartphone"===this.widgetConfig.tabletSameAs?this.tab.widgetsSmartphone||[]:this.isTablet&&"specific-layout"===this.widgetConfig.tabletSameAs||this.isSmartphone&&"tablet"===this.widgetConfig.smartphoneSameAs?this.tab.widgetsTablet||[]:this.tab.widgetsDesktop||[]}},data(){return this.isSmartphone=this.$q.platform.is.mobile,this.isTablet=!1,this.widgetConfig=this.tab.widgetConfig||{},{}}}),It=Dt,Ot=(i("b9ad"),Object(f["a"])(It,qt,yt,!1,null,null,null)),Rt=Ot.exports,Nt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-page-container",[i("q-list",{attrs:{dense:""}},t._l(t.drawerItems,(function(e){return i("div",{key:e.id},["divider"===e.type?i("q-separator",{attrs:{spaced:""}}):t._e(),"header"===e.type?i("q-item-label",{attrs:{header:""}},[t._v(t._s(e.title))]):t._e(),e.type&&"page"!==e.type?t._e():i("q-item",{staticClass:"full-width",class:{selected:e.id===t.pageSelected},style:{backgroundColor:e.backgroundColor,color:e.color},attrs:{to:{params:{tabId:e.tabs&&e.tabs[0]&&e.tabs[0].id}},clickable:"","active-class":"selected"},on:{click:function(i){return t.setPage(e)}}},[i("q-item-section",{class:{selectedText:e.id===t.pageSelected},style:{color:e.iconColor},attrs:{avatar:"",center:""}},[i("icon",{attrs:{name:e.icon}})],1),i("q-item-section",[i("q-item-label",[t._v(t._s(e.title))])],1)],1),e.type&&"page"!==e.type?t._e():i("div",{staticClass:"spacer",class:{selected:e.id===t.pageSelected}})],1)})),0),i("q-list",{staticClass:"positionPageEnd"},[i("q-item-label",{attrs:{header:""}},[t._v("jarvis")]),i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",to:"/configuration/"}},[i("q-item-section",{attrs:{avatar:""}},[i("icon",{attrs:{name:"mdi-cog",color:"primary"}})],1),i("q-item-section",[t._v(t._s(t.$t("Configuration"))+" & "+t._s(t.$t("Help")))])],1)],1)],1)},Ht=[],At=i("bf05"),Et=Object(n["c"])({name:"Sidebar",methods:{setPage(t){var e;const i=null===(e=t.tabs)||void 0===e?void 0:e[0].id;this.$store.commit("jarvis/set",{selectedTabId:i,selectedPageId:t.id,drawerLeftOpen:!1})}},computed:{pageSelected(){const t=this.$store.getters["jarvis/getSelectedPageId"];return t},drawerItems(){const t=this.$store.state.jarvis.layout||[];return o["a"].isPro()?t:t.slice(0,5)}},created(){At["default"].register(this.$i18n,At["default"].translations)}}),Lt=Et,Pt=(i("84d2"),i("09e3")),Mt=Object(f["a"])(Lt,Nt,Ht,!1,null,null,null),Bt=Mt.exports;$()(Mt,"components",{QPageContainer:Pt["a"],QList:K["a"],QSeparator:q["a"],QItemLabel:B["a"],QItem:P["a"],QItemSection:M["a"]}),$()(Mt,"directives",{Ripple:F["a"]});var Gt=Object(n["c"])({name:"Jarvis",components:{DeviceDetailsPopup:S,NotificationDrawer:ot,NotificationEventSnackbar:pt,NotificationEventPopup:Ct,Page:Rt,Sidebar:Bt},mounted(){if(o["a"].isPro()){const t=document.getElementById("customStyles")||document.createElement("style");t.innerHTML=this.$store.state.jarvis.styles,t.id="customStyles";const e=document.getElementsByTagName("head");e[0].appendChild(t)}},methods:{onResize(t){this.enableTabsDropdown=!1,this.hiddenTabs=[];const e=this.$q.screen.width;this.$refs.tabs&&this.$refs.tabs.forEach(((t,i)=>{t.$el.style.display="inherit";const a=t.$el.offsetLeft+t.$el.offsetWidth+200;a>e&&(t.$el.style.display="none",this.enableTabsDropdown=!0,this.hiddenTabs.push(this.tabs[i]))}))},toggleDrawerLeft(t){(t||!0===this.drawerLeft)&&this.$store.commit("jarvis/set",{drawerLeftOpen:!this.drawerLeft})},toggleDrawerRight(){this.$store.commit("jarvis/set",{drawerRightOpen:!this.drawerRight})},pageContainer(t,e){return this.$store.commit("jarvis/set",{pageHeight:e-t}),{}},hideDropdown(){setTimeout((()=>{this.hiddenTabsDropdown=!1}),500)}},data(){return{enableTabsDropdown:!1,hiddenTabs:[],hiddenTabsDropdown:!1}},watch:{page(t){setTimeout((()=>{this.onResize()}),0)}},computed:{drawerLeft(){return this.$store.state.jarvis.drawerLeftOpen},drawerRight(){return this.$store.state.jarvis.drawerRightOpen},page(){return this.$store.getters["jarvis/getSelectedPage"]||{}},tabs(){const t=this.page.tabs||[];return o["a"].isPro()?t:t.slice(0,5)},tabId:{get(){return this.$store.getters["jarvis/getSelectedTabId"]},set(t){this.$store.commit("jarvis/set",{selectedTabId:t})}},tabsCount(){return Object.keys(this.tabs).length},unreadNotificationsCount(){return this.$store.getters["notifications/getUnread"].length}}}),Ft=Gt,Wt=(i("c23f"),i("4d5a")),Vt=i("429b"),Ut=i("7867"),Jt=i("7460"),Kt=i("f20b"),Xt=i("58a8"),Yt=i("9989"),Zt=i("adad"),te=i("823b"),ee=Object(f["a"])(Ft,a,s,!1,null,null,null);e["default"]=ee.exports;$()(ee,"components",{QLayout:Wt["a"],QResizeObserver:Qt["a"],QHeader:at["a"],QTabs:Vt["a"],QBtn:C["a"],QRouteTab:Ut["a"],QTab:Jt["a"],QBtnDropdown:Kt["a"],QList:K["a"],QItem:P["a"],QItemSection:M["a"],QSpace:w["a"],QBadge:Xt["a"],QDrawer:it["a"],QPageContainer:Pt["a"],QPage:Yt["a"],QTabPanels:Zt["a"],QTabPanel:te["a"]})},8130:function(t,e,i){},"84d2":function(t,e,i){"use strict";i("8936")},8936:function(t,e,i){},"8ac8":function(t,e,i){"use strict";i.r(e),e["default"]={Configuration:"Konfiguration",Help:"Hilfe"}},b9ad:function(t,e,i){"use strict";i("74e0")},bf05:function(t,e,i){"use strict";i.r(e);var a=i("0692");e["default"]={translations:Object(a["a"])((t=>i("42f6")("./"+t))),register:a["c"]}},c23f:function(t,e,i){"use strict";i("76c6")},c6f0c:function(t,e,i){},f740:function(t,e,i){"use strict";i.r(e),e["default"]={}},f894:function(t,e,i){"use strict";i("3d83")}}]);