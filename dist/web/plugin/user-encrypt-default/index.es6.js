var sdkversion_placeholder="1.25.9";function wrapPluginInitFn(n,e,r){if(e&&(n.plugin_name=e),r&&n.init){var t=n.init;n.init=function(i,u){if(wrapLogFn(i,n,e),i.readyState&&i.readyState.state>=3||!i.on)return o();function o(){t.call(n,i,u)}i.on(r,o)}}return n}function wrapLogFn(n,e,r){function t(e,t){n.logger?n.logger.msg.apply(n.logger,t).module(r+""||"").level(e).log():n.log&&n.log.apply(n,t)}e.log=function(){t("log",arguments)},e.warn=function(){t("warn",arguments)},e.error=function(){t("error",arguments)}}function createPlugin(n,e,r){return wrapPluginInitFn(n,e,r),n.plugin_version=sdkversion_placeholder,n}var userEncryptDefault={init:function(n){var e=n._.isString,r=n._.rot13defs,t=n._.dfmapping,i="data:enc;";n.ee.sdk.on("afterInitPara",function(){n.kit.userEncrypt=function(n){return"dfm-enc-"+t(n)},n.kit.userDecrypt=function(n){return 0===n.indexOf(i)?(n=n.substring(i.length),n=r(n)):0===n.indexOf("dfm-enc-")&&(n=n.substring("dfm-enc-".length),n=t(n)),n},n.kit.userDecryptIfNeeded=function(r){return!e(r)||0!==r.indexOf(i)&&0!==r.indexOf("dfm-enc-")||(r=n.kit.userDecrypt(r)),r}})},plugin_name:"UserEncryptDefault"},index=createPlugin(userEncryptDefault);export default index;