!function(){"use strict";function n(n,r,e){if(r&&(n.plugin_name=r),e&&n.init){var i=n.init;n.init=function(o,u){function a(){i.call(n,o,u)}return t(o,n,r),o.readyState&&o.readyState.state>=3||!o.on?a():void o.on(e,a)}}return n}function t(n,t,r){function e(t,e){n.logger?n.logger.msg.apply(n.logger,e).module(r+""||"").level(t).log():n.log&&n.log.apply(n,e)}t.log=function(){e("log",arguments)},t.warn=function(){e("warn",arguments)},t.error=function(){e("error",arguments)}}function r(t,r,e){return n(t,r,e),t.plugin_version=o,t}var e,i="utm_source utm_medium utm_campaign utm_content utm_term",o="1.25.8",u={init:function(n){function t(){var n=i.split(" "),t="",r={};return e._.isArray(e.para.source_channel)&&e.para.source_channel.length>0&&(n=n.concat(e.para.source_channel),n=e._.unique(n)),e._.each(n,function(n){t=e._.getQueryParam(location.href,n),t.length&&(r[n]=t)}),r}n&&!e&&(e=n,e.registerInterceptor("businessStage",{getUtmData:{priority:0,entry:function(){return t()}}}))}},a=r(u,"Utm","sdkAfterInitPara");return a}();