!function(){"use strict";function n(n,e,t){if(e&&(n.plugin_name=e),t&&n.init){var a=n.init;n.init=function(o,i){function u(){a.call(n,o,i)}return r(o,n,e),o.readyState&&o.readyState.state>=3||!o.on?u():void o.on(t,u)}}return n}function r(n,r,e){function t(r,t){n.logger?n.logger.msg.apply(n.logger,t).module(e+""||"").level(r).log():n.log&&n.log.apply(n,t)}r.log=function(){t("log",arguments)},r.warn=function(){t("warn",arguments)},r.error=function(){t("error",arguments)}}function e(r,e,t){return n(r,e,t),r.plugin_version=l,r}function t(n){var r=new c.BeaconSend(n);r.start()}function a(n,r){if("beacon"===u.para.send_type){var e=n.server_url;n.data=u.kit.encodeTrackData(n.data),c.isArray(e)&&e.length?c.each(e,function(r){n.callback=null,n.server_url=r,t(n)}):"string"==typeof u.para.server_url&&""!==u.para.server_url?t(n):u.log("\u5f53\u524d server_url \u4e3a\u7a7a\u6216\u4e0d\u6b63\u786e\uff0c\u53ea\u5728\u63a7\u5236\u53f0\u6253\u5370\u65e5\u5fd7\uff0cnetwork \u4e2d\u4e0d\u4f1a\u53d1\u6570\u636e\uff0c\u8bf7\u914d\u7f6e\u6b63\u786e\u7684 server_url\uff01"),r.cancellationToken.stop()}return n}function o(){"beacon"!==u.para.send_type||c.isSupportBeaconSend()||(u.para.send_type="image")}function i(){u.on("sdkInitPara",function(){o()}),u.on("sdkAfterInitPara",function(){u.registerInterceptor("sendDataStage",{send:{priority:110,entry:a}})})}var u,c,l="1.25.9",s={plugin_name:"BeaconSender",init:function(n){u=n,c=u._,i()}},f=e(s);return f}();