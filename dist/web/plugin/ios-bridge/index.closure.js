!function(){"use strict";function e(e,i,a){if(i&&(e.plugin_name=i),a&&e.init){var r=e.init;e.init=function(i,s){function t(){r.call(e,i,s)}return i.readyState&&i.readyState.state>=3||!i.on?t():void i.on(a,t)}}return e}function i(i,a,r){return e(i,a,r),i.plugin_version=c,i}function a(){if(t=window.SensorsData_iOS_JS_Bridge&&window.SensorsData_iOS_JS_Bridge.sensorsdata_app_server_url,n=function(){return window.webkit&&window.webkit.messageHandlers&&window.webkit.messageHandlers.sensorsdataNativeTracker},d&&!d.bridge.activeBridge&&n()&&n().postMessage){if(d.bridge.activeBridge=p,d.para.app_js_bridge&&!d.para.app_js_bridge.is_mui&&(d.bridge.is_verify_success=t&&d.bridge.validateAppUrl(t)),d.bridge.bridge_info={touch_app_bridge:!0,platform:"ios",verify_success:d.bridge.is_verify_success?"success":"fail",support_two_way_call:!0},!d.para.app_js_bridge)return void o("app_js_bridge is not configured, data will not be sent by iOS bridge.");d.registerInterceptor("sendDataStage",{send:{priority:70,entry:r}}),o("IOS bridge inits succeed.")}}function r(e,i){if(d.para.app_js_bridge.is_mui||"item_set"===e.data.type||"item_delete"===e.data.type)return e;var a=e.callback;return d.bridge.is_verify_success?(n()&&n().postMessage(JSON.stringify({callType:"app_h5_track",data:_.extend({server_url:d.para.server_url},e.data)})),_.isFunction(a)&&a(),i.cancellationToken.cancel(),e):d.para.app_js_bridge.is_send?(d.debug.apph5({data:e.data,step:"4.1",output:"all"}),e):(_.isFunction(a)&&a(),i.cancellationToken.cancel(),e)}function s(e){var i=e.callType;return"page_info"!==i&&"visualized_track"!==i||d.bridge.hasVisualModeBridge()?"sensorsdata_get_app_visual_config"===i?_.isObject(window.SensorsData_APP_New_H5_Bridge)&&window.SensorsData_APP_New_H5_Bridge[i]:n()&&n().postMessage(JSON.stringify(e)):null}var t,n,d,_,o,c="_sdk_sdk_version",p={init:function(e){d=e,_=d&&d._,o=d&&d.log||console&&console.log||function(){},a()},handleCommand:s},u=i(p,"IOSBridge","sdkAfterInitPara");return u}();