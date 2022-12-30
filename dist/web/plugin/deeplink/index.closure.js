!function(){"use strict";function i(i,t,e){if(t&&(i.plugin_name=t),e&&i.init){var n=i.init;i.init=function(t,o){function r(){n.call(i,t,o)}return t.readyState&&t.readyState.state>=3||!t.on?r():void t.on(e,r)}}return i}function t(t,e,n){return i(t,e,n),t.plugin_version=o,t}function e(){return"undefined"!=typeof n&&document[n]}var n,o="_sdk_sdk_version",r=(/micromessenger\/([\d.]+)/i.test(navigator.userAgent||""),function(){var i={};return"undefined"!=typeof document.hidden?(i.hidden="hidden",i.visibilityChange="visibilitychange"):"undefined"!=typeof document.msHidden?(i.hidden="msHidden",i.visibilityChange="msvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(i.hidden="webkitHidden",i.visibilityChange="webkitvisibilitychange"),i});n=r().hidden;var s={android:/Android/i,iOS:/iPhone|iPad|iPod/i},d=function(){for(var i in s)if(navigator.userAgent.match(s[i]))return i;return""},a=d(),l=function(){return s.hasOwnProperty(a)},h=function(i){return null!=i&&"[object Object]"==Object.prototype.toString.call(i)},u=function(i){var t=/\/sd\/(\w+)\/(\w+)$/;return i.match(t)},c=function(i){var t=i._.URL(i.para.server_url);return{origin:t.origin,project:t.searchParams.get("project")||"default"}},g=function(i,t,o){i.log("\u5c1d\u8bd5\u5524\u8d77 android app");var r=t;i.log("\u5524\u8d77APP\u7684\u5730\u5740\uff1a"+r),window.location=r,i.timer=setTimeout(function(){var t=e();return i.log("hide:"+n+":"+document[n]),t?(i.log("The page is hidden, stop navigating to download page"),!1):(i.log("App\u53ef\u80fd\u672a\u5b89\u88c5\uff0c\u8df3\u8f6c\u5230\u4e0b\u8f7d\u5730\u5740"),void(window.location=o))},i.timeout)},p=function(i,t,n){i.log("\u5c1d\u8bd5\u5524\u8d77 iOS app:"+t),window.location.href=t,i.timer=setTimeout(function(){var t=e();return t?(i.log("The page is hidden, stop navigating to download page"),!1):(i.log("App\u53ef\u80fd\u672a\u5b89\u88c5\uff0c\u8df3\u8f6c\u5230\u4e0b\u8f7d\u5730\u5740"),void(window.location.href=n))},i.timeout),i.log("new timer:"+i.timer)},f={key:null,timer:null,sd:null,data:null,timeout:2500,apiURL:"{origin}/sdk/deeplink/param?key={key}&system_type=JS&project={project}",init:function(i){if(this.sd)return this.log("deeplink\u5df2\u7ecf\u521d\u59cb\u5316"),!1;if(this.sd=i,this.log("deeplink init called"),null===this.sd)return this.log("\u795e\u7b56JS SDK\u672a\u6210\u529f\u5f15\u5165"),!1;var t={};if(arguments.length>0&&(1===arguments.length&&h(arguments[0])?t=arguments[0]:arguments.length>=2&&h(arguments[1])&&(t=arguments[1])),!l())return this.log("\u4e0d\u652f\u6301\u5f53\u524d\u7cfb\u7edf\uff0c\u76ee\u524d\u53ea\u652f\u6301Android\u548ciOS"),!1;if(h(t)&&this.sd._.isNumber(t.timeout)&&t.timeout>=2500&&(this.timeout=t.timeout),!this.sd.para.server_url)return this.log("\u795e\u7b56JS SDK\u914d\u7f6e\u9879server_url\u672a\u6b63\u786e\u914d\u7f6e"),!1;var e=c(this.sd);this.apiURL=this.apiURL.replace("{origin}",e.origin).replace("{project}",e.project);var n=this.sd._.getQueryParam(window.location.href,"deeplink");if(!n)return this.log("\u5f53\u524d\u9875\u9762\u7f3a\u5c11deeplink\u53c2\u6570"),!1;n=window.decodeURIComponent(n);var o=u(n);return o?(this.key=o[2],this.apiURL=this.apiURL.replace("{key}",window.encodeURIComponent(o[2])),this.sd._.ajax({url:this.apiURL,type:"GET",cors:!0,credentials:!1,success:function(i){return i.errorMsg?(f.log("API\u62a5\u9519\uff1a"+i.errorMsg),!1):(f.data=i,f.log("API\u67e5\u8be2\u6210\u529f\uff0c\u6570\u636e\uff1a"+JSON.stringify(i,null,"  ")),void(this.data.app_key&&(this.data.android_info&&this.data.android_info.url_schemes&&(this.data.android_info.url_schemes+="://sensorsdata/sd/"+this.data.app_key+"/"+this.key),this.data.ios_info&&this.data.ios_info.url_schemes&&(this.data.ios_info.url_schemes+="://sensorsdata/sd/"+this.data.app_key+"/"+this.key))))}.bind(this),error:function(){f.log("API\u67e5\u8be2\u51fa\u9519")}}),void this.addListeners()):(this.log("\u5f53\u524d\u9875\u9762\u7684deeplink\u53c2\u6570\u65e0\u6548"),!1)},openDeepLink:function(){if(this.log("openDeeplink()"),!this.data)return this.log("\u6ca1\u6709Deep link\u6570\u636e!"),!1;if("iOS"===a){this.log("\u5f53\u524d\u7cfb\u7edf\u662fiOS");var i=this.sd&&this.sd._&&this.sd._.getIOSVersion()>=9&&this.data.ios_info.ios_wake_url?this.data.ios_info.ios_wake_url:this.data.ios_info.url_schemes;this.log("\u5524\u8d77APP\u7684\u5730\u5740\uff1a"+i),p(this,i,this.data.ios_info.download_url)}else this.log("\u5f53\u524d\u7cfb\u7edf\u662f android"),g(this,this.data.android_info.url_schemes,this.data.android_info.download_url)},log:function(i){this.sd&&this.sd.log(i)},addListeners:function(){var i=r().visibilityChange;i&&document.addEventListener(i,function(){clearTimeout(this.timer),this.log("visibilitychange, clear timeout:"+this.timer)}.bind(this),!1),window.addEventListener("pagehide",function(){this.log("page hide, clear timeout:"+this.timer),clearTimeout(this.timer)}.bind(this),!1)}},m=t(f,"Deeplink","sdkReady");return m}();