!function(){"use strict";function n(n,r,t){if(r&&(n.plugin_name=r),t&&n.init){var a=n.init;n.init=function(o,i){function l(){a.call(n,o,i)}return e(o,n,r),o.readyState&&o.readyState.state>=3||!o.on?l():void o.on(t,l)}}return n}function e(n,e,r){function t(e,t){n.logger?n.logger.msg.apply(n.logger,t).module(r+""||"").level(e).log():n.log&&n.log.apply(n,t)}e.log=function(){t("log",arguments)},e.warn=function(){t("warn",arguments)},e.error=function(){t("error",arguments)}}function r(e,r,t){return n(e,r,t),e.plugin_version=g,e}function t(n,e){var r=u.kit.encodeTrackData(e);return n.indexOf("?")!==-1?n+"&"+r:n+"?"+r}function a(n){var e=new c.ImageSend(n);e.start()}function o(n,e){var r=n.server_url,o=n.data;c.isArray(r)&&r.length?c.each(r,function(e){e&&(n.data=t(e,o),n.callback=null,n.server_url=e,a(n))}):"string"==typeof r&&""!==r?(n.data=t(r,o),a(n)):u.logger&&u.logger.msg("\u5f53\u524d server_url \u4e3a\u7a7a\u6216\u4e0d\u6b63\u786e\uff0c\u53ea\u5728\u63a7\u5236\u53f0\u6253\u5370\u65e5\u5fd7\uff0cnetwork \u4e2d\u4e0d\u4f1a\u53d1\u6570\u636e\uff0c\u8bf7\u914d\u7f6e\u6b63\u786e\u7684 server_url\uff01").level("warn").log(),e.cancellationToken.stop()}function i(){"image"!==u.para.send_type&&"ajax"!==u.para.send_type&&"beacon"!==u.para.send_type&&(u.para.send_type="image")}function l(){u.on("sdkInitPara",function(){i()}),u.on("sdkAfterInitPara",function(){u.registerInterceptor("sendDataStage",{send:{priority:130,entry:o}})})}var u,c,g="1.25.9",f={plugin_name:"ImageSender",init:function(n){u=n,c=u._,l()}},s=r(f);return s}();