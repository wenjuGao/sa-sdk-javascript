!function(){"use strict";function t(t,n,s){if(n&&(t.plugin_name=n),s&&t.init){var e=t.init;t.init=function(r,d){function o(){e.call(t,r,d)}return i(r,t,n),r.readyState&&r.readyState.state>=3||!r.on?o():void r.on(s,o)}}return t}function i(t,i,n){function s(i,s){t.logger?t.logger.msg.apply(t.logger,s).module(n+""||"").level(i).log():t.log&&t.log.apply(t,s)}i.log=function(){s("log",arguments)},i.warn=function(){s("warn",arguments)},i.error=function(){s("error",arguments)}}function n(i,n,e){return t(i,n,e),i.plugin_version=s,i}var s="1.25.9",e={sd:null,init:function(t){if(this.sd)return!1;if(this.sd=t,!this.sd||!this.sd._)return!1;var i=this.sd._.cookie.get("sensors_amp_id"),n=this.sd.store._state.distinct_id;if(i&&i.length>0){var s="amp-"===i.slice(0,4);if(i!==n){if(!s)return!1;this.sd.store._state.first_id?(this.sd.identify(i,!0),this.sd.saEvent.send({original_id:i,distinct_id:n,type:"track_signup",event:"$SignUp",properties:{}},null),this.setAmpId(n)):this.sd.identify(i,!0)}}else this.setAmpId(n);this.addListener()},addListener:function(){var t=this;this.sd.events.on("changeDistinctId",function(i){t.setAmpId(i)}),this.sd.events.isReady()},setAmpId:function(t){this.sd._.cookie.set("sensors_amp_id",t)}},r=n(e,"Amp","sdkReady");return r}();