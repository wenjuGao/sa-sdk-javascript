!function(){"use strict";function e(e){return y&&y.call(g,JSON.stringify(e))}function n(e){return v.call(g)&&b&&b.call(g,JSON.stringify(e))}function a(e,n){return n&&"function"==typeof n[e.callType]&&n[e.callType]()}function r(e,n,a){if(n&&(e.plugin_name=n),a&&e.init){var r=e.init;e.init=function(n,i){function t(){r.call(e,n,i)}return n.readyState&&n.readyState.state>=3||!n.on?t():void n.on(a,t)}}return e}function i(e,n,a){return r(e,n,a),e.plugin_version=S,e}function t(){if(d=window.SensorsData_APP_JS_Bridge,l=d&&d.sensorsdata_track,c=d&&d.sensorsdata_verify,_=d&&d.sensorsdata_visual_verify,u&&!u.bridge.activeBridge&&(c||l||_)){u.bridge.activeBridge=k;var e=c||l;if(_&&(e=!!_.call(d,JSON.stringify({server_url:u.para.server_url}))),u.bridge.bridge_info={touch_app_bridge:!0,platform:"android",verify_success:e?"success":"fail"},!u.para.app_js_bridge)return void f("app_js_bridge is not configured, data will not be sent by android obsolete bridge.");u.registerInterceptor("sendDataStage",{send:{priority:80,entry:s}}),f("Android obsolete bridge inits succeed.")}}function s(e,n){if(u.para.app_js_bridge.is_mui||"item_set"===e.data.type||"item_delete"===e.data.type)return e;var a=e.callback;if(c){var r=c&&c.call(d,JSON.stringify(p.extend({server_url:u.para.server_url},e.data)));return r?(p.isFunction(a)&&a(),n.cancellationToken.cancel(),e):u.para.app_js_bridge.is_send?(u.debug.apph5({data:e.data,step:"3.1",output:"all"}),e):(p.isFunction(a)&&a(),n.cancellationToken.cancel(),e)}return l&&l.call(d,JSON.stringify(p.extend({server_url:u.para.server_url},e.data))),p.isFunction(a)&&a(),n.cancellationToken.cancel(),e}function o(e){var n=e.callType;return n in m.commands?m.commands[n](e,d):d&&p.isFunction(d.sensorsdata_js_call_app)?d.sensorsdata_js_call_app(JSON.stringify(e)):void 0}var d,l,c,_,u,p,f,g=window.SensorsData_App_Visual_Bridge,v=g&&g.sensorsdata_visualized_mode,y=g&&g.sensorsdata_visualized_alert_info,b=g&&g.sensorsdata_hover_web_nodes,m={isVerify:function(){return v&&(v===!0||v.call(g))},commands:{app_alert:e,visualized_track:n,page_info:n,sensorsdata_get_app_visual_config:a}},S="_sdk_sdk_version",k={init:function(e){u=e,p=u&&u._,f=u&&u.log||console&&console.log||function(){},t()},handleCommand:o},J=i(k,"AndroidObsoleteBridge","sdkAfterInitPara");return J}();