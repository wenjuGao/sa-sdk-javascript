!function(){"use strict";function n(n,e,a){if(e&&(n.plugin_name=e),a&&n.init){var r=n.init;n.init=function(i,o){function c(){r.call(n,i,o)}return t(i,n,e),i.readyState&&i.readyState.state>=3||!i.on?c():void i.on(a,c)}}return n}function t(n,t,e){function a(t,a){n.logger?n.logger.msg.apply(n.logger,a).module(e+""||"").level(t).log():n.log&&n.log.apply(n,a)}t.log=function(){a("log",arguments)},t.warn=function(){a("warn",arguments)},t.error=function(){a("error",arguments)}}function e(t,e,a){return n(t,e,a),t.plugin_version=l,t}function a(n){var t=[];return c.each(n,function(n){c.isArray(n)?t=t.concat(a(n)):t.push(c.optimizeServerUrl(n))}),t}function r(n,t){t=c.isArray(t)?t:[t];var e=!1;return c.isArray(n)?c.each(n,function(n){c.indexOf(t,n)>-1&&(e=!0)}):c.indexOf(t,n)>-1&&(e=!0),e}function i(n,t){var e=o.kit.encodeTrackData(t);return n.indexOf("?")!==-1?n+"&"+e:n+"?"+e}var o,c,u,l="1.25.9",s={hookFn:null,init:function(n){this.hookFn=n,o.registerInterceptor("sendDataStage",{send:{priority:20,entry:function(n,t){return s.sendData(n,t),n}}})},sendData:function(n,t){var e=n.data,i=e.event,o=n.server_url,u=n.callback,l=this,s=this.hookFn({event_name:i,data:c.extend2Lev({identities:{},lib:{},properties:{}},e),server_url:o});return c.isArray(s)&&s.length?(s=a(s),r(o,s)?u=null:t.cancellationToken.stop(),c.each(s,function(t){if(t&&""!==t&&!r(t,o)){var e=function(t){return function(){l.sendCall({server_url:t,data:n.data,config:null,callback:u}),u=null,n.callback=null}}(t);setTimeout(e)}}),n):(c.isFunction(u)&&u(),t.cancellationToken.stop(),n)},getInstance:function(n){return"beacon"===o.para.send_type&&c.isSupportBeaconSend()?(n.data=o.kit.encodeTrackData(n.data),new c.BeaconSend(n)):"ajax"===o.para.send_type&&c.isSupportCors()?(n.data=o.kit.encodeTrackData(n.data),new c.AjaxSend(n)):(n.data.time=1*new Date,n.data=i(n.server_url,n.data),new c.ImageSend(n))},sendCall:function(n){var t=this.getInstance(n);t.start()}},d={plugin_name:"CustomEventsSender",init:function(n,t){if(o=n,c=o._,u=o&&o.log||console&&console.log||function(){},c.isFunction(t)){if(o.readyState&&o.readyState.state>=3||!o.on)return s.init(t);o.on("sdkAfterInitPara",function(){s.init(t)})}else u("CustomEventsSender init failed\uff0chookFn error. hookFn:",t)}},f=e(d);return f}();