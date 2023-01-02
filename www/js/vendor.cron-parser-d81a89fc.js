import{l as I}from"./vendor.luxon-bef2801e.js";import{i as U}from"./vendor.is-nan-275bc091.js";import{o as V}from"./helpers-7b53fe93.js";var S=I;o.prototype.addYear=function(){this._date=this._date.plus({years:1})};o.prototype.addMonth=function(){this._date=this._date.plus({months:1}).startOf("month")};o.prototype.addDay=function(){this._date=this._date.plus({days:1}).startOf("day")};o.prototype.addHour=function(){var t=this._date;this._date=this._date.plus({hours:1}).startOf("hour"),this._date<=t&&(this._date=this._date.plus({hours:1}))};o.prototype.addMinute=function(){var t=this._date;this._date=this._date.plus({minutes:1}).startOf("minute"),this._date<t&&(this._date=this._date.plus({hours:1}))};o.prototype.addSecond=function(){var t=this._date;this._date=this._date.plus({seconds:1}).startOf("second"),this._date<t&&(this._date=this._date.plus({hours:1}))};o.prototype.subtractYear=function(){this._date=this._date.minus({years:1})};o.prototype.subtractMonth=function(){this._date=this._date.minus({months:1}).endOf("month").startOf("second")};o.prototype.subtractDay=function(){this._date=this._date.minus({days:1}).endOf("day").startOf("second")};o.prototype.subtractHour=function(){var t=this._date;this._date=this._date.minus({hours:1}).endOf("hour").startOf("second"),this._date>=t&&(this._date=this._date.minus({hours:1}))};o.prototype.subtractMinute=function(){var t=this._date;this._date=this._date.minus({minutes:1}).endOf("minute").startOf("second"),this._date>t&&(this._date=this._date.minus({hours:1}))};o.prototype.subtractSecond=function(){var t=this._date;this._date=this._date.minus({seconds:1}).startOf("second"),this._date>t&&(this._date=this._date.minus({hours:1}))};o.prototype.getDate=function(){return this._date.day};o.prototype.getFullYear=function(){return this._date.year};o.prototype.getDay=function(){var t=this._date.weekday;return t==7?0:t};o.prototype.getMonth=function(){return this._date.month-1};o.prototype.getHours=function(){return this._date.hour};o.prototype.getMinutes=function(){return this._date.minute};o.prototype.getSeconds=function(){return this._date.second};o.prototype.getMilliseconds=function(){return this._date.millisecond};o.prototype.getTime=function(){return this._date.valueOf()};o.prototype.getUTCDate=function(){return this._getUTC().day};o.prototype.getUTCFullYear=function(){return this._getUTC().year};o.prototype.getUTCDay=function(){var t=this._getUTC().weekday;return t==7?0:t};o.prototype.getUTCMonth=function(){return this._getUTC().month-1};o.prototype.getUTCHours=function(){return this._getUTC().hour};o.prototype.getUTCMinutes=function(){return this._getUTC().minute};o.prototype.getUTCSeconds=function(){return this._getUTC().second};o.prototype.toISOString=function(){return this._date.toUTC().toISO()};o.prototype.toJSON=function(){return this._date.toJSON()};o.prototype.setDate=function(t){this._date=this._date.set({day:t})};o.prototype.setFullYear=function(t){this._date=this._date.set({year:t})};o.prototype.setDay=function(t){this._date=this._date.set({weekday:t})};o.prototype.setMonth=function(t){this._date=this._date.set({month:t+1})};o.prototype.setHours=function(t){this._date=this._date.set({hour:t})};o.prototype.setMinutes=function(t){this._date=this._date.set({minute:t})};o.prototype.setSeconds=function(t){this._date=this._date.set({second:t})};o.prototype.setMilliseconds=function(t){this._date=this._date.set({millisecond:t})};o.prototype._getUTC=function(){return this._date.toUTC()};o.prototype.toString=function(){return this.toDate().toString()};o.prototype.toDate=function(){return this._date.toJSDate()};o.prototype.isLastDayOfMonth=function(){var t=this._date.plus({days:1}).startOf("day");return this._date.month!==t.month};function o(t,r){var e={zone:r};if(t?t instanceof o?this._date=t._date:t instanceof Date?this._date=S.DateTime.fromJSDate(t,e):typeof t=="number"?this._date=S.DateTime.fromMillis(t,e):typeof t=="string"&&(this._date=S.DateTime.fromISO(t,e),this._date.isValid||(this._date=S.DateTime.fromRFC2822(t,e)),this._date.isValid||(this._date=S.DateTime.fromSQL(t,e)),this._date.isValid||(this._date=S.DateTime.fromFormat(t,"EEE, d MMM yyyy HH:mm:ss",e))):this._date=S.DateTime.local(),!this._date||!this._date.isValid)throw new Error("CronDate: unhandled timestamp: "+JSON.stringify(t));r&&r!==this._date.zoneName&&(this._date=this._date.setZone(r))}var W=o;function M(t){return{start:t,count:1}}function z(t,r){t.end=r,t.step=r-t.start,t.count=2}function k(t,r,e){r&&(r.count===2?(t.push(M(r.start)),t.push(M(r.end))):t.push(r)),e&&t.push(e)}function N(t){for(var r=[],e=void 0,n=0;n<t.length;n++){var s=t[n];typeof s!="number"?(k(r,e,M(s)),e=void 0):e?e.count===1?z(e,s):e.step===s-e.end?(e.count++,e.end=s):e.count===2?(r.push(M(e.start)),e=M(e.end),z(e,s)):(k(r,e),e=M(s)):e=M(s)}return k(r,e),r}var L=N,$=L;function H(t,r,e){var n=$(t);if(n.length===1){var s=n[0],h=s.step;if(h===1&&s.start===r&&s.end===e)return"*";if(h!==1&&s.start===r&&s.end===e-h+1)return"*/"+h}for(var a=[],l=0,f=n.length;l<f;++l){var u=n[l];if(u.count===1)a.push(u.start);else{var h=u.step;h===1?a.push(u.start+"-"+u.end):u.end===e-h+1?a.push(u.start+"/"+h):a.push(u.start+"-"+u.end+"/"+h)}}return a.join(",")}var j=H,E=W,D=U,J=j,F=1e4;function i(t,r){this._options=r,this._utc=r.utc||!1,this._tz=this._utc?"UTC":r.tz,this._currentDate=new E(r.currentDate,this._tz),this._startDate=r.startDate?new E(r.startDate,this._tz):null,this._endDate=r.endDate?new E(r.endDate,this._tz):null,this._isIterator=r.iterator||!1,this._hasIterated=!1,this._nthDayOfWeek=r.nthDayOfWeek||0,this.fields=i._freezeFields(t)}i.map=["second","minute","hour","dayOfMonth","month","dayOfWeek"];i.predefined={"@yearly":"0 0 1 1 *","@monthly":"0 0 1 * *","@weekly":"0 0 * * 0","@daily":"0 0 * * *","@hourly":"0 * * * *"};i.constraints=[{min:0,max:59,chars:[]},{min:0,max:59,chars:[]},{min:0,max:23,chars:[]},{min:1,max:31,chars:["L"]},{min:1,max:12,chars:[]},{min:0,max:7,chars:[]}];i.daysInMonth=[31,29,31,30,31,30,31,31,30,31,30,31];i.aliases={month:{jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12},dayOfWeek:{sun:0,mon:1,tue:2,wed:3,thu:4,fri:5,sat:6}};i.parseDefaults=["0","*","*","*","*","*"];i.standardValidCharacters=/^[\d|/|*|\-|,]+$/;i.dayOfWeekValidCharacters=/^[\d|/|*|\-|,|\?]+$/;i.dayOfMonthValidCharacters=/^[\d|L|/|*|\-|,|\?]+$/;i.validCharacters={second:i.standardValidCharacters,minute:i.standardValidCharacters,hour:i.standardValidCharacters,dayOfMonth:i.dayOfMonthValidCharacters,month:i.standardValidCharacters,dayOfWeek:i.dayOfWeekValidCharacters};i._parseField=function(r,e,n){switch(r){case"month":case"dayOfWeek":var s=i.aliases[r];e=e.replace(/[a-z]{1,3}/gi,function(f){if(f=f.toLowerCase(),typeof s[f]!="undefined")return s[f];throw new Error('Validation error, cannot resolve alias "'+f+'"')});break}if(!i.validCharacters[r].test(e))throw new Error("Invalid characters, got value: "+e);e.indexOf("*")!==-1?e=e.replace(/\*/g,n.min+"-"+n.max):e.indexOf("?")!==-1&&(e=e.replace(/\?/g,n.min+"-"+n.max));function h(f){var u=[];function d(p){if(p instanceof Array)for(var m=0,g=p.length;m<g;m++){var c=p[m];if(typeof c=="string"&&n.chars.indexOf(c)>-1){u.push(c);continue}if(typeof c!="number"||D(c)||c<n.min||c>n.max)throw new Error("Constraint error, got value "+c+" expected range "+n.min+"-"+n.max);u.push(c)}else{if(typeof p=="string"&&n.chars.indexOf(p)>-1){u.push(p);return}var w=+p;if(D(w)||w<n.min||w>n.max)throw new Error("Constraint error, got value "+p+" expected range "+n.min+"-"+n.max);r==="dayOfWeek"&&(w=w%7),u.push(w)}}var _=f.split(",");if(!_.every(function(p){return p.length>0}))throw new Error("Invalid list value format");if(_.length>1)for(var v=0,y=_.length;v<y;v++)d(a(_[v]));else d(a(f));return u.sort(i._sortCompareFn),u}function a(f){var u=1,d=f.split("/");return d.length>1?(d[0]==+d[0]&&(d=[d[0]+"-"+n.max,d[1]]),l(d[0],d[d.length-1])):l(f,u)}function l(f,u){var d=[],_=f.split("-");if(_.length>1){if(_.length<2)return+f;if(!_[0].length){if(!_[1].length)throw new Error("Invalid range: "+f);return+f}var v=+_[0],y=+_[1];if(D(v)||D(y)||v<n.min||y>n.max)throw new Error("Constraint error, got range "+v+"-"+y+" expected range "+n.min+"-"+n.max);if(v>=y)throw new Error("Invalid range: "+f);var p=+u;if(D(p)||p<=0)throw new Error("Constraint error, cannot repeat at every "+p+" time.");for(var m=v,g=y;m<=g;m++)p>0&&p%u===0?(p=1,d.push(m)):p++;return d}return D(+f)?f:+f}return h(e)};i._sortCompareFn=function(t,r){var e=typeof t=="number",n=typeof r=="number";return e&&n?t-r:!e&&n?1:e&&!n?-1:t.localeCompare(r)};i._handleMaxDaysInMonth=function(t){if(t.month.length===1){var r=i.daysInMonth[t.month[0]-1];if(t.dayOfMonth[0]>r)throw new Error("Invalid explicit day of month definition");return t.dayOfMonth.filter(function(e){return e==="L"?!0:e<=r}).sort(i._sortCompareFn)}};i._freezeFields=function(t){for(var r=0,e=i.map.length;r<e;++r){var n=i.map[r],s=t[n];t[n]=Object.freeze(s)}return Object.freeze(t)};i.prototype._applyTimezoneShift=function(t,r,e){if(e==="Month"||e==="Day"){var n=t.getTime();t[r+e]();var s=t.getTime();n===s&&(t.getMinutes()===0&&t.getSeconds()===0?t.addHour():t.getMinutes()===59&&t.getSeconds()===59&&t.subtractHour())}else{var h=t.getHours();t[r+e]();var a=t.getHours(),l=a-h;l===2?this.fields.hour.length!==24&&(this._dstStart=a):l===0&&t.getMinutes()===0&&t.getSeconds()===0&&this.fields.hour.length!==24&&(this._dstEnd=a)}};i.prototype._findSchedule=function(r){function e(g,c){for(var w=0,O=c.length;w<O;w++)if(c[w]>=g)return c[w]===g;return c[0]===g}function n(g,c){if(c<6){if(g.getDate()<8&&c===1)return!0;var w=g.getDate()%7?1:0,O=g.getDate()-g.getDate()%7,T=Math.floor(O/7)+w;return T===c}return!1}function s(g){return g.length>0&&g.indexOf("L")>=0}r=r||!1;for(var h=r?"subtract":"add",a=new E(this._currentDate,this._tz),l=this._startDate,f=this._endDate,u=a.getTime(),d=0;d<F;){if(d++,r){if(l&&a.getTime()-l.getTime()<0)throw new Error("Out of the timespan range")}else if(f&&f.getTime()-a.getTime()<0)throw new Error("Out of the timespan range");var _=e(a.getDate(),this.fields.dayOfMonth);s(this.fields.dayOfMonth)&&(_=_||a.isLastDayOfMonth());var v=e(a.getDay(),this.fields.dayOfWeek),y=this.fields.dayOfMonth.length>=i.daysInMonth[a.getMonth()],p=this.fields.dayOfWeek.length===i.constraints[5].max-i.constraints[5].min+1,m=a.getHours();if(!_&&!v){this._applyTimezoneShift(a,h,"Day");continue}if(!y&&p&&!_){this._applyTimezoneShift(a,h,"Day");continue}if(y&&!p&&!v){this._applyTimezoneShift(a,h,"Day");continue}if(this._nthDayOfWeek>0&&!n(a,this._nthDayOfWeek)){this._applyTimezoneShift(a,h,"Day");continue}if(!e(a.getMonth()+1,this.fields.month)){this._applyTimezoneShift(a,h,"Month");continue}if(e(m,this.fields.hour)){if(this._dstEnd===m&&!r){this._dstEnd=null,this._applyTimezoneShift(a,"add","Hour");continue}}else if(this._dstStart!==m){this._dstStart=null,this._applyTimezoneShift(a,h,"Hour");continue}else if(!e(m-1,this.fields.hour)){a[h+"Hour"]();continue}if(!e(a.getMinutes(),this.fields.minute)){this._applyTimezoneShift(a,h,"Minute");continue}if(!e(a.getSeconds(),this.fields.second)){this._applyTimezoneShift(a,h,"Second");continue}if(u===a.getTime()){h==="add"||a.getMilliseconds()===0?this._applyTimezoneShift(a,h,"Second"):a.setMilliseconds(0);continue}break}if(d>=F)throw new Error("Invalid expression, loop limit exceeded");return this._currentDate=new E(a,this._tz),this._hasIterated=!0,a};i.prototype.next=function(){var r=this._findSchedule();return this._isIterator?{value:r,done:!this.hasNext()}:r};i.prototype.prev=function(){var r=this._findSchedule(!0);return this._isIterator?{value:r,done:!this.hasPrev()}:r};i.prototype.hasNext=function(){var t=this._currentDate,r=this._hasIterated;try{return this._findSchedule(),!0}catch{return!1}finally{this._currentDate=t,this._hasIterated=r}};i.prototype.hasPrev=function(){var t=this._currentDate,r=this._hasIterated;try{return this._findSchedule(!0),!0}catch{return!1}finally{this._currentDate=t,this._hasIterated=r}};i.prototype.iterate=function(r,e){var n=[];if(r>=0)for(var s=0,h=r;s<h;s++)try{var a=this.next();n.push(a),e&&e(a,s)}catch{break}else for(var s=0,h=r;s>h;s--)try{var a=this.prev();n.push(a),e&&e(a,s)}catch{break}return n};i.prototype.reset=function(r){this._currentDate=new E(r||this._options.currentDate)};i.prototype.stringify=function(r){for(var e=[],n=r?0:1,s=i.map.length;n<s;++n){var h=i.map[n],a=this.fields[h],l=i.constraints[n];e.push(J(a,l.min,l.max))}return e.join(" ")};i.parse=function(r,e){var n=this;typeof e=="function"&&(e={});function s(h,a){a||(a={}),typeof a.currentDate=="undefined"&&(a.currentDate=new E(void 0,n._tz)),i.predefined[h]&&(h=i.predefined[h]);var l=[],f=(h+"").trim().split(/\s+/);if(f.length>6)throw new Error("Invalid cron expression");for(var u=i.map.length-f.length,d=0,_=i.map.length;d<_;++d){var v=i.map[d],y=f[f.length>_?d:d-u];if(d<u||!y)l.push(i._parseField(v,i.parseDefaults[d],i.constraints[d]));else{var p=v==="dayOfWeek"?w(y):y;l.push(i._parseField(v,p,i.constraints[d]))}}for(var m={},d=0,_=i.map.length;d<_;d++){var g=i.map[d];m[g]=l[d]}var c=i._handleMaxDaysInMonth(m);return m.dayOfMonth=c||m.dayOfMonth,new i(m,a);function w(O){var T=O.split("#");if(T.length>1){var x=+T[T.length-1];if(/,/.test(O))throw new Error("Constraint error, invalid dayOfWeek `#` and `,` special characters are incompatible");if(/\//.test(O))throw new Error("Constraint error, invalid dayOfWeek `#` and `/` special characters are incompatible");if(/-/.test(O))throw new Error("Constraint error, invalid dayOfWeek `#` and `-` special characters are incompatible");if(T.length>2||D(x)||x<1||x>5)throw new Error("Constraint error, invalid dayOfWeek occurrence number (#)");return a.nthDayOfWeek=x,T[0]}return O}}return s(r,e)};i.fieldsToExpression=function(r,e){function n(v,y,p){if(!y)throw new Error("Validation error, Field "+v+" is missing");if(y.length===0)throw new Error("Validation error, Field "+v+" contains no values");for(var m=0,g=y.length;m<g;m++){var c=y[m];if(!(typeof c=="string"&&p.chars.indexOf(c)>-1)&&(typeof c!="number"||D(c)||c<p.min||c>p.max))throw new Error("Constraint error, got value "+c+" expected range "+p.min+"-"+p.max)}}for(var s={},h=0,a=i.map.length;h<a;++h){var l=i.map[h],f=r[l];n(l,f,i.constraints[h]);for(var u=[],d=-1;++d<f.length;)u[d]=f[d];if(f=u.sort(i._sortCompareFn).filter(function(v,y,p){return!y||v!==p[y-1]}),f.length!==u.length)throw new Error("Validation error, Field "+l+" contains duplicate values");s[l]=f}var _=i._handleMaxDaysInMonth(s);return s.dayOfMonth=_||s.dayOfMonth,new i(s,e||{})};var Y=i,b=Y;function C(){}C._parseEntry=function(r){var e=r.split(" ");if(e.length===6)return{interval:b.parse(r)};if(e.length>6)return{interval:b.parse(e.slice(0,6).join(" ")),command:e.slice(6,e.length)};throw new Error("Invalid entry: "+r)};C.parseExpression=function(r,e){return b.parse(r,e)};C.fieldsToExpression=function(r,e){return b.fieldsToExpression(r,e)};C.parseString=function(r){for(var e=r.split(`
`),n={variables:{},expressions:[],errors:{}},s=0,h=e.length;s<h;s++){var a=e[s],l=null,f=a.trim();if(f.length>0){if(f.match(/^#/))continue;if(l=f.match(/^(.*)=(.*)$/))n.variables[l[1]]=l[2];else{var u=null;try{u=C._parseEntry("0 "+f),n.expressions.push(u.interval)}catch(d){n.errors[f]=d}}}}return n};C.parseFile=function(r,e){V.readFile(r,function(n,s){if(n){e(n);return}return e(null,C.parseString(s.toString()))})};var Z=C;export{W as d,Z as p};
