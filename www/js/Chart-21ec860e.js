import{bt as d,a4 as c,dd as f,dc as p,dM as u,dw as n,dK as g,aG as m,ay as l,W as b,U as v,d3 as y,V as w,b3 as x,bn as C,X as S,a2 as z,C as k,bp as L}from"./index-e8eb9d18.js";import"./index-82a5246c.js";import"./components-f617531a.js";import"./_commonjsHelpers-55d1ff45.js";import"./QTooltip-3f844f9d.js";import"./json-editor-4a37dc13.js";const V=c({name:"ModuleChart",props:["_containerSize","_widgetSize","widget"],data(){return this.devices={},{widgetSize:this._widgetSize,states:{},stateLabels:{},stateValues:{},error:null,loaded:!1}},methods:{zIndex(e){const t=document.querySelector(".jarvis-widget-"+this.widget.id);t&&(t.style.zIndex=e)},fitChart(){this.loaded&&this.vchart&&this.vchart.resize({width:"auto",height:"auto"})},gotState(e,t,i,s){if(e){this.error=e,this.loaded=!0;return}const{item:a}=this.devices[t.id+"#"+i];this.states[t.id+"#"+i]=s,this.stateLabels[t.id+"#"+i]=a.label||s.label||t.name,this.stateValues[t.id+"#"+i]=parseFloat(s.value),this.timer&&clearTimeout(this.timer),this.timer=setTimeout(()=>{this.setChartOptions()},500)},setChartOptions(){let e={};!this.config.type||this.config.type==="bar"?e={xAxis:[{type:"category",axisTick:{alignWithLabel:!0},axisLabel:{show:!1}}],yAxis:[{type:"value",max:this.config.barStack===!0?Math.round(Object.values(this.stateValues).reduce((t,i)=>t+i)/100)*100:this.config.maxValue,min:this.config.minValue}]}:this.config.type==="pie"?e={series:[{type:"pie",radius:this.config.pieRadius===!0?["40%","80%"]:["80%","0%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:this.$q.dark.isActive?"#333":"#fff",borderWidth:2},label:{formatter:"{c}",position:"inside"},emphasis:{label:{show:!0}},labelLine:{show:!1},data:Object.keys(this.stateLabels).map(t=>{const i=this.states[t]&&this.states[t].unit||"";return{value:this.stateValues[t],name:t+":"+this.stateLabels[t],label:{formatter:this.config.label===!0?"":this.stateValues[t]+" "+i},unit:i,itemStyle:{color:this.devices[t].item.moduleConfig&&this.devices[t].item.moduleConfig.color}}})}]}:this.config.type==="circle"&&(e={angleAxis:{max:this.config.maxValue&&parseInt(this.config.maxValue)||void 0},radiusAxis:{type:"category",axisLabel:{show:!1}},polar:{radius:this.config.radius?["10%",this.config.radius+"%"]:this.widget.title?["10%","60%"]:["10%","70%"],center:this.config.legend==="bottom"?["50%","45%"]:["50%","50%"]}}),e=f(e,{legend:{show:this.config.legend!=="off",bottom:this.config.legend==="bottom"?0:"auto",padding:[10,10,5,10],textStyle:{color:this.$q.dark.isActive?"#fff":"#666"},tooltip:{show:!0,position:"bottom",borderWidth:1,borderColor:"#ccc",formatter:t=>{const[i,s]=t.name.split(":"),a=this.stateValues[i],o=this.devices[i].item.moduleConfig&&this.devices[i].item.moduleConfig.color;return'<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:'+o+';"></span><span style="font-size:14px;color:#666;font-weight:400;margin-left:2px">'+s+'</span><span style="float:right;margin-left:20px;font-size:14px;color:#666;font-weight:900">'+(typeof a=="number"?a.toFixed(2):"-")+(this.states[i]&&this.states[i].unit?" "+this.states[i].unit:"")+"</span>"}},formatter:t=>{const[,i]=t.split(":");return i},data:Object.keys(this.stateLabels).map(t=>({name:t+":"+this.stateLabels[t],itemStyle:{color:this.devices[t].item.moduleConfig&&this.devices[t].item.moduleConfig.color}}))},grid:{top:"15%",left:"1%",right:"2%",bottom:"12%",containLabel:!0},label:{color:this.$q.dark.isActive?"#fff":"#333",fontWeight:"bold"},tooltip:{position:"top",formatter:t=>{const{marker:i,seriesName:s,name:a,data:o}=t,[,r]=(this.config.type==="bar"||this.config.type==="circle"?s:a).split(":");return""+i+'<span style="font-size:14px;color:#666;font-weight:400;margin-left:2px">'+r+'</span><span style="float:right;margin-left:20px;font-size:14px;color:#666;font-weight:900">'+(typeof o.value=="number"?o.value.toFixed(2):"-")+(o&&o.unit?" "+o.unit:"")+"</span>"}},series:this.config.type==="pie"?[]:Object.keys(this.stateLabels).map(t=>{const i=this.states[t]&&this.states[t].unit||"",s={name:t+":"+this.stateLabels[t],type:"bar",showBackground:!0,stack:!this.config.type||this.config.type==="bar"?this.config.barStack:!1,emphasis:{focus:"series"},label:{show:!0,position:"insideTop"},data:[{value:this.stateValues[t],label:{formatter:this.config.label===!0?"":this.stateValues[t]+" "+i},unit:i,itemStyle:{color:this.devices[t].item.moduleConfig&&this.devices[t].item.moduleConfig.color}}]};return this.config.type==="circle"&&(s.coordinateSystem="polar",s.label={show:!0,fontWeight:"bold",color:this.$q.dark.isActive?"#fff":"#000",position:"start",offset:[2,2]}),s})}),this.vchart&&this.vchart.setOption(e,!0),this.loaded=!0}},computed:{config(){return p.joinConfig(this.widget.config,u)}},watch:{_widgetSize(e){this.widgetSize!==e&&(this.widgetSize=e)}},mounted(){this.vchart=this.$refs.vchart,this.widget.items&&this.revision!==this.widget.revision&&(this.revision=this.widget.revision,this.widget.items.forEach(e=>{if(e.type==="device"){const t=n.get(e.deviceId||null);e.moduleConfig&&e.moduleConfig.color&&g("chart--"+t.name.toLowerCase().replace(/ /g,"-").replace(/\./g,"-"),e.moduleConfig.color),t?(this.stateLabels[t.id+"#"+e.primaryStateKey]=t.name,this.devices[t.id+"#"+e.primaryStateKey]={item:e,device:t},n.listen(t.id,e.primaryStateKey,this.gotState)):console.error(this.$i18n.t("No device specified"))}})),window.addEventListener("orientationchange",()=>{this.fitChart()})},beforeUnmount(){for(const e in this.devices)this.devices[e]}});function $(e,t,i,s,a,o){const r=m("v-chart");return l(),b("div",{onTouchstart:t[0]||(t[0]=L(()=>{},["stop"])),onMouseover:t[1]||(t[1]=h=>e.zIndex(99)),onMouseout:t[2]||(t[2]=h=>e.zIndex("initial")),style:{"min-width":"1px","min-height":"1px"}},[e.loaded?w("",!0):(l(),v(y,{key:0,indeterminate:""})),x(S("div",{style:k({"min-width":"100%","min-height":"100%",width:e.widgetSize.width+"px",height:e._containerSize.height+"px"})},[z(r,{autoresize:"",ref:"vchart"},null,512)],4),[[C,e.loaded&&!e.error]])],32)}var B=d(V,[["render",$]]);export{B as default};
