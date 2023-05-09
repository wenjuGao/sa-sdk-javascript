var iosServerUrl,iosTracker,sd,_,log,sdkversion_placeholder="1.25.4";function wrapPluginInitFn(e,r,i){if(r&&(e.plugin_name=r),i&&e.init){var a=e.init;e.init=function(s,n){if(wrapLogFn(s,e,r),s.readyState&&s.readyState.state>=3||!s.on)return t();function t(){a.call(e,s,n)}s.on(i,t)}}return e}function wrapLogFn(e,r,i){function a(r,a){e.logger?e.logger.msg.apply(e.logger,a).module(i+""||"").level(r).log():e.log&&e.log.apply(e,a)}r.log=function(){a("log",arguments)},r.warn=function(){a("warn",arguments)},r.error=function(){a("error",arguments)}}function createPlugin(e,r,i){return wrapPluginInitFn(e,r,i),e.plugin_version=sdkversion_placeholder,e}var IOSBridge={init:function(e){_=(sd=e)&&sd._,log=sd&&sd.log||console&&console.log||function(){},initBridge()},handleCommand:handleCommand};function initBridge(){iosServerUrl=window.SensorsData_iOS_JS_Bridge&&window.SensorsData_iOS_JS_Bridge.sensorsdata_app_server_url,iosTracker=function(){return window.webkit&&window.webkit.messageHandlers&&window.webkit.messageHandlers.sensorsdataNativeTracker},sd&&!sd.bridge.activeBridge&&iosTracker()&&iosTracker().postMessage&&(sd.bridge.activeBridge=IOSBridge,sd.para.app_js_bridge&&!sd.para.app_js_bridge.is_mui&&(sd.bridge.is_verify_success=iosServerUrl&&sd.bridge.validateAppUrl(iosServerUrl)),sd.bridge.bridge_info={touch_app_bridge:!0,platform:"ios",verify_success:sd.bridge.is_verify_success?"success":"fail",support_two_way_call:!0},sd.para.app_js_bridge?(sd.registerInterceptor("sendDataStage",{send:{priority:70,entry:sendData}}),log("IOS bridge inits succeed.")):log("app_js_bridge is not configured, data will not be sent by iOS bridge."))}function sendData(e,r){if(sd.para.app_js_bridge.is_mui||"item_set"===e.data.type||"item_delete"===e.data.type)return e;var i=e.callback;return sd.bridge.is_verify_success?(iosTracker()&&iosTracker().postMessage(JSON.stringify({callType:"app_h5_track",data:_.extend({server_url:sd.para.server_url},e.data)})),_.isFunction(i)&&i(),r.cancellationToken.cancel(),e):sd.para.app_js_bridge.is_send?(sd.debug.apph5({data:e.data,step:"4.1",output:"all"}),e):(_.isFunction(i)&&i(),r.cancellationToken.cancel(),e)}function handleCommand(e){var r=e.callType;return"page_info"!==r&&"visualized_track"!==r||sd.bridge.hasVisualModeBridge()?"sensorsdata_get_app_visual_config"===r?_.isObject(window.SensorsData_APP_New_H5_Bridge)&&window.SensorsData_APP_New_H5_Bridge[r]:iosTracker()&&iosTracker().postMessage(JSON.stringify(e)):null}var index=createPlugin(IOSBridge,"IOSBridge","sdkAfterInitPara");export default index;