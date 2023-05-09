var sdkversion_placeholder="1.25.4";function wrapPluginInitFn(e,t,a){if(t&&(e.plugin_name=t),a&&e.init){var i=e.init;e.init=function(r,n){if(wrapLogFn(r,e,t),r.readyState&&r.readyState.state>=3||!r.on)return s();function s(){i.call(e,r,n)}r.on(a,s)}}return e}function wrapLogFn(e,t,a){function i(t,i){e.logger?e.logger.msg.apply(e.logger,i).module(a+""||"").level(t).log():e.log&&e.log.apply(e,i)}t.log=function(){i("log",arguments)},t.warn=function(){i("warn",arguments)},t.error=function(){i("error",arguments)}}function createPlugin(e,t,a){return wrapPluginInitFn(e,t,a),e.plugin_version=sdkversion_placeholder,e}var page_hidden_status_refresh_time=5e3,MAX_DURATION=432e3;function PageLeave(){this.sd=null,this.start_time=+new Date,this.page_show_status=!0,this.page_hidden_status=!1,this._={},this.timer=null,this.current_page_url=document.referrer,this.url=location.href,this.title=document.title||"",this.option={},this.heartbeat_interval_time=5e3,this.heartbeat_interval_timer=null,this.page_id=null,this.storage_name="sawebjssdkpageleave",this.max_duration=MAX_DURATION}PageLeave.prototype.init=function(e,t){if(e){if(this.sd=e,this._=this.sd._,t){this.option=t;var a=t.heartbeat_interval_time;a&&(this._.isNumber(a)||this._.isNumber(1*a))&&1*a>0&&(this.heartbeat_interval_time=1e3*a);var i=t.max_duration;i&&(this._.isNumber(i)||this._.isNumber(1*i))&&1*i>0&&(this.max_duration=i)}this.page_id=Number(String(this._.getRandom()).slice(2,5)+String(this._.getRandom()).slice(2,4)+String((new Date).getTime()).slice(-4)),this.addEventListener(),!0===document.hidden?this.page_show_status=!1:this.addHeartBeatInterval(),this.log("PageLeave\u521d\u59cb\u5316\u5b8c\u6bd5")}else this.log("\u795e\u7b56JS SDK\u672a\u6210\u529f\u5f15\u5165")},PageLeave.prototype.log=function(e){this.sd&&this.sd.log(e)},PageLeave.prototype.refreshPageEndTimer=function(){var e=this;this.timer&&(clearTimeout(this.timer),this.timer=null),this.timer=setTimeout(function(){e.page_hidden_status=!1},page_hidden_status_refresh_time)},PageLeave.prototype.hiddenStatusHandler=function(){clearTimeout(this.timer),this.timer=null,this.page_hidden_status=!1},PageLeave.prototype.pageStartHandler=function(){this.start_time=+new Date,!0==!document.hidden?this.page_show_status=!0:this.page_show_status=!1,this.url=location.href,this.title=document.title},PageLeave.prototype.pageEndHandler=function(){if(!0!==this.page_hidden_status){var e=this.getPageLeaveProperties();!1===this.page_show_status&&delete e.event_duration,this.page_show_status=!1,this.page_hidden_status=!0,this.isCollectUrl(this.url)&&this.sd.track("$WebPageLeave",e),this.refreshPageEndTimer(),this.delHeartBeatData()}},PageLeave.prototype.addEventListener=function(){this.addPageStartListener(),this.addPageSwitchListener(),this.addSinglePageListener(),this.addPageEndListener()},PageLeave.prototype.addPageStartListener=function(){var e=this;"onpageshow"in window&&this._.addEvent(window,"pageshow",function(){e.pageStartHandler(),e.hiddenStatusHandler()})},PageLeave.prototype.isCollectUrl=function(e){return"function"!=typeof this.option.isCollectUrl||("string"!=typeof e||""===e||this.option.isCollectUrl(e))},PageLeave.prototype.addSinglePageListener=function(){var e=this;this.sd.ee&&this.sd.ee.spa.prepend("switch",function(t){t!==location.href&&(e.url=t,e.pageEndHandler(),e.stopHeartBeatInterval(),e.current_page_url=e.url,e.pageStartHandler(),e.hiddenStatusHandler(),e.addHeartBeatInterval())})},PageLeave.prototype.addPageEndListener=function(){var e=this;this._.each(["pagehide","beforeunload","unload"],function(t){"on"+t in window&&e._.addEvent(window,t,function(){e.pageEndHandler(),e.stopHeartBeatInterval()})})},PageLeave.prototype.addPageSwitchListener=function(){var e=this;this._.listenPageState({visible:function(){e.pageStartHandler(),e.hiddenStatusHandler(),e.addHeartBeatInterval()},hidden:function(){e.url=location.href,e.title=document.title,e.pageEndHandler(),e.stopHeartBeatInterval()}})},PageLeave.prototype.addHeartBeatInterval=function(){this._.localStorage.isSupport()&&this.startHeartBeatInterval()},PageLeave.prototype.startHeartBeatInterval=function(){var e=this;this.heartbeat_interval_timer&&this.stopHeartBeatInterval();var t=!0;this.isCollectUrl(this.url)||(t=!1),this.heartbeat_interval_timer=setInterval(function(){t&&e.saveHeartBeatData()},this.heartbeat_interval_time),t&&this.saveHeartBeatData("is_first_heartbeat"),this.reissueHeartBeatData()},PageLeave.prototype.stopHeartBeatInterval=function(){clearInterval(this.heartbeat_interval_timer),this.heartbeat_interval_timer=null},PageLeave.prototype.saveHeartBeatData=function(e){var t=this.getPageLeaveProperties(),a=new Date;t.$time=a,"is_first_heartbeat"===e&&(t.event_duration=3.14);var i=this.sd.kit.buildData({type:"track",event:"$WebPageLeave",properties:t});try{"success"===this.sd.bridge.bridge_info.verify_success&&(i.properties.$time=1*a)}catch(r){this.log(r.message)}i.heartbeat_interval_time=this.heartbeat_interval_time,this.sd.store.saveObjectVal(this.storage_name+"-"+this.page_id,i)},PageLeave.prototype.delHeartBeatData=function(e){this._.localStorage.isSupport()&&this._.localStorage.remove(e||this.storage_name+"-"+this.page_id)},PageLeave.prototype.reissueHeartBeatData=function(){for(var e=window.localStorage.length-1;e>=0;e--){var t=window.localStorage.key(e);if(t&&t!==this.storage_name+"-"+this.page_id&&0===t.indexOf(this.storage_name+"-")){var a=this.sd.store.readObjectVal(t);this._.isObject(a)&&1*new Date-a.time>a.heartbeat_interval_time+5e3&&(delete a.heartbeat_interval_time,this.sd.kit.sendData(a),this.delHeartBeatData(t))}}},PageLeave.prototype.getPageLeaveProperties=function(){var e=(+new Date-this.start_time)/1e3;(isNaN(e)||e<0||e>this.max_duration)&&(e=0),e=Number(e.toFixed(3));var t=this._.getReferrer(this.current_page_url),a=document.documentElement&&document.documentElement.scrollTop||window.pageYOffset||document.body&&document.body.scrollTop||0;a=Math.round(a)||0;var i={$title:this.title,$url:this._.getURL(this.url),$url_path:this._.getURLPath(this._.URL(this.url).pathname),$referrer_host:t?this._.getHostname(t):"",$referrer:t,$viewport_position:a};return 0!==e&&(i.event_duration=e),i=this._.extend(i,this.option.custom_props)};var pageLeave=new PageLeave,index=createPlugin(pageLeave,"PageLeave","sdkReady");export default index;