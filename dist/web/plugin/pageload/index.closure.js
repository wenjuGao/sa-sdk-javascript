!function(){"use strict";function e(e,t,r){if(t&&(e.plugin_name=t),r&&e.init){var o=e.init;e.init=function(i,a){function d(){o.call(e,i,a)}return n(i,e,t),i.readyState&&i.readyState.state>=3||!i.on?d():void i.on(r,d)}}return e}function n(e,n,t){function r(n,r){e.logger?e.logger.msg.apply(e.logger,r).module(t+""||"").level(n).log():e.log&&e.log.apply(e,r)}n.log=function(){r("log",arguments)},n.warn=function(){r("warn",arguments)},n.error=function(){r("error",arguments)}}function t(n,t,o){return e(n,t,o),n.plugin_version=r,n}var r="1.25.4",o=!1,i={init:function(e,n){function t(n,t){if(n.getEntries&&"function"==typeof n.getEntries){for(var r=n.getEntries(),o=null,i=0;i<r.length;i++)"transferSize"in r[i]&&(o+=r[i].transferSize);e._.isNumber(o)&&o>=0&&o<10737418240&&(t.$page_resource_size=Number((o/1024).toFixed(3)))}}function r(n){var t=0;if(n.timing){var r=n.timing;0!==r.fetchStart&&e._.isNumber(r.fetchStart)&&0!==r.domContentLoadedEventEnd&&e._.isNumber(r.domContentLoadedEventEnd)?t=r.domContentLoadedEventEnd-r.fetchStart:e.log("performance \u6570\u636e\u83b7\u53d6\u5f02\u5e38")}return t}function i(n){var t=0;if(e._.isFunction(n.getEntriesByType)){var r=n.getEntriesByType("navigation")||[{}];t=(r[0]||{}).domContentLoadedEventEnd||0}return t}function a(){var d=0,u=window.performance||window.webkitPerformance||window.msPerformance||window.mozPerformance,c={$url:e._.getURL(),$title:document.title,$url_path:e._.getURLPath(),$referrer:e._.getReferrer(null,!0)};if(u?(d=i(u)||r(u),t(u,c)):e.log("\u6d4f\u89c8\u5668\u672a\u652f\u6301 performance API."),d>0){var f=e._.isObject(n)&&n.max_duration||1800;d=Number((d/1e3).toFixed(3)),(!e._.isNumber(f)||f<=0||d<=f)&&(c.event_duration=d)}o||(e.track("$WebPageLoad",c),o=!0),window.removeEventListener?window.removeEventListener("load",a):window.detachEvent&&window.detachEvent("onload",a)}"complete"==document.readyState?a():window.addEventListener?window.addEventListener("load",a):window.attachEvent&&window.attachEvent("onload",a)}},a=t(i,"PageLoad","sdkReady");return a}();