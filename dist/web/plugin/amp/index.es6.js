function wrapPluginInitFn(t,i,s){var n=t.init;return i&&(t.name=i),t.init=function(i,e){if(i.readyState&&i.readyState.state>=3||!i.on)return d();function d(){n.call(t,i,e)}i.on(s,d)},t}var amp={sd:null,init:function(t){if(this.sd)return!1;if(this.sd=t,!this.sd||!this.sd._)return!1;var i=this.sd._.cookie.get("sensors_amp_id"),s=this.sd.store._state.distinct_id;if(i&&i.length>0){var n="amp-"===i.slice(0,4);if(i!==s){if(!n)return!1;this.sd.store._state.first_id?(this.sd.identify(i,!0),this.sd.saEvent.send({original_id:i,distinct_id:s,type:"track_signup",event:"$SignUp",properties:{}},null),this.setAmpId(s)):this.sd.identify(i,!0)}}else this.setAmpId(s);this.addListener()},addListener:function(){var t=this;this.sd.events.on("changeDistinctId",function(i){t.setAmpId(i)}),this.sd.events.isReady()},setAmpId:function(t){this.sd._.cookie.set("sensors_amp_id",t)}};wrapPluginInitFn(amp,"Amp","sdkReady");export default amp;