(window.SensorsDataWebJSSDKPlugin=window.SensorsDataWebJSSDKPlugin||{}).RegisterProperties=function(){"use strict";function e(e,t){if("track"!==e.type)return e;var i=t.sd,r=i._,o=i.saEvent.check,n=r.extend2Lev({properties:{}},e),s=t.customRegister,p=n.properties,u=n.event,g={};return r.each(s,function(e){if(r.isObject(e))r.indexOf(e.events,u)>-1&&o({properties:e.properties})&&(g=r.extend(g,e.properties));else if(r.isFunction(e)){var t=e({event:u,properties:p,data:n});r.isObject(t)&&!r.isEmptyObject(t)&&o({properties:t})&&(g=r.extend(g,t))}}),e.properties=r.extend(p,g),e}function t(){this.sd=null,this.log=window.console&&window.console.log||function(){},this.customRegister=[]}function i(e,t,i){if(t&&(e.plugin_name=t),i&&e.init){var o=e.init;e.init=function(n,s){function p(){o.call(e,n,s)}return r(n,e,t),n.readyState&&n.readyState.state>=3||!n.on?p():void n.on(i,p)}}return e}function r(e,t,i){function r(t,r){e.logger?e.logger.msg.apply(e.logger,r).module(i+""||"").level(t).log():e.log&&e.log.apply(e,r)}t.log=function(){r("log",arguments)},t.warn=function(){r("warn",arguments)},t.error=function(){r("error",arguments)}}function o(e,t,r){return i(e,t,r),e.plugin_version=n,e}t.prototype.init=function(t){if(t){this.sd=t,this._=t._,this.log=t.log;var i=this;t.registerInterceptor("buildDataStage",{extendProps:{priority:0,entry:function(t){return e(t,i)}}})}else this.log("\u795e\u7b56JS SDK\u672a\u6210\u529f\u5f15\u5165")},t.prototype.register=function(e){return this.sd?void(this._.isObject(e)&&this._.isArray(e.events)&&e.events.length>0&&this._.isObject(e.properties)&&!this._.isEmptyObject(e.properties)?this.customRegister.push(e):this.log("RegisterProperties: register \u53c2\u6570\u9519\u8bef")):void this.log("\u795e\u7b56JS SDK\u672a\u6210\u529f\u5f15\u5165")},t.prototype.hookRegister=function(e){return this.sd?void(this._.isFunction(e)?this.customRegister.push(e):this.log("RegisterProperties: hookRegister \u53c2\u6570\u9519\u8bef")):void this.log("\u795e\u7b56JS SDK\u672a\u6210\u529f\u5f15\u5165")};var n="1.25.9";t.prototype.plugin_name="RegisterProperties";var s=new t,p=o(s);return p}();