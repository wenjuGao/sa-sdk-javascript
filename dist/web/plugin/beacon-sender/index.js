(window.SensorsDataWebJSSDKPlugin=window.SensorsDataWebJSSDKPlugin||{}).BeaconSender=function(){"use strict";function n(n,r,t){if(r&&(n.plugin_name=r),t&&n.init){var a=n.init;n.init=function(o,i){function u(){a.call(n,o,i)}return e(o,n,r),o.readyState&&o.readyState.state>=3||!o.on?u():void o.on(t,u)}}return n}function e(n,e,r){function t(e,t){n.logger?n.logger.msg.apply(n.logger,t).module(r+""||"").level(e).log():n.log&&n.log.apply(n,t)}e.log=function(){t("log",arguments)},e.warn=function(){t("warn",arguments)},e.error=function(){t("error",arguments)}}function r(e,r,t){return n(e,r,t),e.plugin_version=l,e}function t(n){var e=new c.BeaconSend(n);e.start()}function a(n,e){if("beacon"===u.para.send_type){var r=n.server_url;n.data=u.kit.encodeTrackData(n.data),c.isArray(r)&&r.length?c.each(r,function(e){n.callback=null,n.server_url=e,t(n)}):"string"==typeof u.para.server_url&&""!==u.para.server_url?t(n):u.log("\u5f53\u524d server_url \u4e3a\u7a7a\u6216\u4e0d\u6b63\u786e\uff0c\u53ea\u5728\u63a7\u5236\u53f0\u6253\u5370\u65e5\u5fd7\uff0cnetwork \u4e2d\u4e0d\u4f1a\u53d1\u6570\u636e\uff0c\u8bf7\u914d\u7f6e\u6b63\u786e\u7684 server_url\uff01"),e.cancellationToken.stop()}return n}function o(){"beacon"!==u.para.send_type||c.isSupportBeaconSend()||(u.para.send_type="image")}function i(){u.on("sdkInitPara",function(){o()}),u.on("sdkAfterInitPara",function(){u.registerInterceptor("sendDataStage",{send:{priority:110,entry:a}})})}var u,c,l="1.25.4",s={plugin_name:"BeaconSender",init:function(n){u=n,c=u._,i()}},g=r(s);return g}();