function wrapPluginInitFn(n,t,e){var a=n.init;return t&&(n.name=t),n.init=function(t,r){if(t.readyState&&t.readyState.state>=3||!t.on)return s();function s(){a.call(n,t,r)}t.on(e,s)},n}var sd,utmKeys=["channel_utm_source","channel_utm_content","channel_utm_term","channel_utm_medium","channel_utm_campaign"],ChannelUtm={init:function(n){n&&!sd&&((sd=n)._.each(utmKeys,function(n){sd.source_channel_standard=sd.source_channel_standard+" "+n,sd.para.source_type.utm.push(n)}),sd.registerInterceptor("businessStage",{getUtmData:{entry:function(n){var t=!1,e=n||{};return sd._.each(utmKeys,function(n){var a=sd._.getQueryParam(location.href,n);a.length&&(t=!0,e[n.slice(8)]=a)}),t&&sd.register&&sd.register({link_v:"1"}),e}}}))}};wrapPluginInitFn(ChannelUtm,"ChannelUtm","sdkAfterInitPara");export default ChannelUtm;