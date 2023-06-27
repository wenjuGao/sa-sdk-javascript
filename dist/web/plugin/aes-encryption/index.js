(window.SensorsDataWebJSSDKPlugin=window.SensorsDataWebJSSDKPlugin||{}).AesEncryption=function(){"use strict";function t(t,r,n){if(r&&(t.plugin_name=r),n&&t.init){var i=t.init;t.init=function(o,c){function a(){i.call(t,o,c)}return e(o,t,r),o.readyState&&o.readyState.state>=3||!o.on?a():void o.on(n,a)}}return t}function e(t,e,r){function n(e,n){t.logger?t.logger.msg.apply(t.logger,n).module(r+""||"").level(e).log():t.log&&t.log.apply(t,n)}e.log=function(){n("log",arguments)},e.warn=function(){n("warn",arguments)},e.error=function(){n("error",arguments)}}function r(e,r,n){return t(e,r,n),e.plugin_version=l,e}function n(t){return null!=t&&"[object Object]"==Object.prototype.toString.call(t)}function i(){if("function"==typeof Uint32Array){var t="";if("undefined"!=typeof crypto?t=crypto:"undefined"!=typeof msCrypto&&(t=msCrypto),n(t)&&t.getRandomValues){var e=new Uint32Array(1),r=t.getRandomValues(e)[0],i=Math.pow(2,32);return r/i}}return m(1e19)/1e19}function o(t){return{mode:S.mode.CBC,padding:S.pad.Pkcs7,iv:t||s()}}function c(t,e,r,n){var i=o(r),c=t;"string"!=typeof t&&(c=JSON.stringify(t)),n||(e=S.enc.Base64.parse(e));var a=S.enc.Utf8.parse(c),s=S.AES.encrypt(a,e,i).toString(),u=i.iv.clone().concat(S.enc.Base64.parse(s)).toString(S.enc.Base64);return u}function a(t,e,r){var n=S.enc.Base64.parse(t).toString(),i=n.substr(0,32),c=S.enc.Hex.parse(n.substr(32)).toString(S.enc.Base64),a=o(S.enc.Hex.parse(i));r||(e=S.enc.Base64.parse(e));var s=S.AES.decrypt(c,e,a);return s.toString(S.enc.Utf8)}function s(t){t=t||16;for(var e="";t-- >0;){var r=Math.ceil(127*i()).toString(16);e+=2===r.length?r:"0"+r}return S.enc.Hex.parse(e)}function u(t){var e=c(t,_.k,v);return{key_id:_.kid,key_hash:_.khash,nc:1,payload:e}}function f(t){try{var e=u(t),r=JSON.stringify(e),n="crc="+g._.hashCode(r);return"data="+encodeURIComponent(r)+"&ext="+encodeURIComponent(n)+"&gzip=9"}catch(i){return B("\u6570\u636e\u52a0\u5bc6\u53d1\u9001\u5f02\u5e38\u3002"),k.call(g.kit,t)}}function h(t,e){return!!t||(B(e+"\u4e0d\u80fd\u4e3a\u7a7a\u3002"),!1)}function d(t,e,r){return typeof t===r||(B("\u53c2\u6570\u7c7b\u578b\u9519\u8bef,"+e+"\u5fc5\u987b\u4e3a"+r),!1)}function p(t,e,r,n){try{var i=r||_&&_.k;return h(i,"\u53c2\u6570key")&&d(i,"\u53c2\u6570key","string")?(void 0===n&&(n=void 0!==r),t?c(e,i,null,n):a(e,i,n)):e}catch(o){return B("\u6267\u884c\u52a0\u89e3\u5bc6\u5931\u8d25\uff0c\u8fd4\u56de\u539f\u59cb\u6570\u636e\u3002"),e}}var l="1.25.9",y={};!function(t,e){t.CryptoJS=e()}(y,function(){var t=t||function(t,e){var r;if("undefined"!=typeof window&&window.crypto&&(r=window.crypto),"undefined"!=typeof self&&self.crypto&&(r=self.crypto),"undefined"!=typeof globalThis&&globalThis.crypto&&(r=globalThis.crypto),!r&&"undefined"!=typeof window&&window.msCrypto&&(r=window.msCrypto),!r&&"undefined"!=typeof global&&global.crypto&&(r=global.crypto),!r&&"function"==typeof require)try{r=require("crypto")}catch(n){}var i=function(){if(r){if("function"==typeof r.getRandomValues)try{return r.getRandomValues(new Uint32Array(1))[0]}catch(t){}if("function"==typeof r.randomBytes)try{return r.randomBytes(4).readInt32LE()}catch(t){}}throw new Error("Native crypto module could not be used to get secure random number.")},o=Object.create||function(){function t(){}return function(e){var r;return t.prototype=e,r=new t,t.prototype=null,r}}(),c={},a=c.lib={},s=a.Base=function(){return{extend:function(t){var e=o(this);return t&&e.mixIn(t),e.hasOwnProperty("init")&&this.init!==e.init||(e.init=function(){e.$super.init.apply(this,arguments)}),e.init.prototype=e,e.$super=this,e},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),u=a.WordArray=s.extend({init:function(t,r){t=this.words=t||[],r!=e?this.sigBytes=r:this.sigBytes=4*t.length},toString:function(t){return(t||h).stringify(this)},concat:function(t){var e=this.words,r=t.words,n=this.sigBytes,i=t.sigBytes;if(this.clamp(),n%4)for(var o=0;o<i;o++){var c=r[o>>>2]>>>24-o%4*8&255;e[n+o>>>2]|=c<<24-(n+o)%4*8}else for(var a=0;a<i;a+=4)e[n+a>>>2]=r[a>>>2];return this.sigBytes+=i,this},clamp:function(){var e=this.words,r=this.sigBytes;e[r>>>2]&=4294967295<<32-r%4*8,e.length=t.ceil(r/4)},clone:function(){var t=s.clone.call(this);return t.words=this.words.slice(0),t},random:function(t){for(var e=[],r=0;r<t;r+=4)e.push(i());return new u.init(e,t)}}),f=c.enc={},h=f.Hex={stringify:function(t){for(var e=t.words,r=t.sigBytes,n=[],i=0;i<r;i++){var o=e[i>>>2]>>>24-i%4*8&255;n.push((o>>>4).toString(16)),n.push((15&o).toString(16))}return n.join("")},parse:function(t){for(var e=t.length,r=[],n=0;n<e;n+=2)r[n>>>3]|=parseInt(t.substr(n,2),16)<<24-n%8*4;return new u.init(r,e/2)}},d=f.Latin1={stringify:function(t){for(var e=t.words,r=t.sigBytes,n=[],i=0;i<r;i++){var o=e[i>>>2]>>>24-i%4*8&255;n.push(String.fromCharCode(o))}return n.join("")},parse:function(t){for(var e=t.length,r=[],n=0;n<e;n++)r[n>>>2]|=(255&t.charCodeAt(n))<<24-n%4*8;return new u.init(r,e)}},p=f.Utf8={stringify:function(t){try{return decodeURIComponent(escape(d.stringify(t)))}catch(e){throw new Error("Malformed UTF-8 data")}},parse:function(t){return d.parse(unescape(encodeURIComponent(t)))}},l=a.BufferedBlockAlgorithm=s.extend({reset:function(){this._data=new u.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=p.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(e){var r,n=this._data,i=n.words,o=n.sigBytes,c=this.blockSize,a=4*c,s=o/a;s=e?t.ceil(s):t.max((0|s)-this._minBufferSize,0);var f=s*c,h=t.min(4*f,o);if(f){for(var d=0;d<f;d+=c)this._doProcessBlock(i,d);r=i.splice(0,f),n.sigBytes-=h}return new u.init(r,h)},clone:function(){var t=s.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0}),y=(a.Hasher=l.extend({cfg:s.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){l.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){t&&this._append(t);var e=this._doFinalize();return e},blockSize:16,_createHelper:function(t){return function(e,r){return new t.init(r).finalize(e)}},_createHmacHelper:function(t){return function(e,r){return new y.HMAC.init(t,r).finalize(e)}}}),c.algo={});return c}(Math);return t}),function(t,e){e(t.CryptoJS)}(y,function(t){return function(e){function r(t,e,r,n,i,o,c){var a=t+(e&r|~e&n)+i+c;return(a<<o|a>>>32-o)+e}function n(t,e,r,n,i,o,c){var a=t+(e&n|r&~n)+i+c;return(a<<o|a>>>32-o)+e}function i(t,e,r,n,i,o,c){var a=t+(e^r^n)+i+c;return(a<<o|a>>>32-o)+e}function o(t,e,r,n,i,o,c){var a=t+(r^(e|~n))+i+c;return(a<<o|a>>>32-o)+e}var c=t,a=c.lib,s=a.WordArray,u=a.Hasher,f=c.algo,h=[];!function(){for(var t=0;t<64;t++)h[t]=4294967296*e.abs(e.sin(t+1))|0}();var d=f.MD5=u.extend({_doReset:function(){this._hash=new s.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(t,e){for(var c=0;c<16;c++){var a=e+c,s=t[a];t[a]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8)}var u=this._hash.words,f=t[e+0],d=t[e+1],p=t[e+2],l=t[e+3],y=t[e+4],v=t[e+5],g=t[e+6],_=t[e+7],k=t[e+8],m=t[e+9],S=t[e+10],B=t[e+11],w=t[e+12],x=t[e+13],C=t[e+14],z=t[e+15],b=u[0],E=u[1],D=u[2],M=u[3];b=r(b,E,D,M,f,7,h[0]),M=r(M,b,E,D,d,12,h[1]),D=r(D,M,b,E,p,17,h[2]),E=r(E,D,M,b,l,22,h[3]),b=r(b,E,D,M,y,7,h[4]),M=r(M,b,E,D,v,12,h[5]),D=r(D,M,b,E,g,17,h[6]),E=r(E,D,M,b,_,22,h[7]),b=r(b,E,D,M,k,7,h[8]),M=r(M,b,E,D,m,12,h[9]),D=r(D,M,b,E,S,17,h[10]),E=r(E,D,M,b,B,22,h[11]),b=r(b,E,D,M,w,7,h[12]),M=r(M,b,E,D,x,12,h[13]),D=r(D,M,b,E,C,17,h[14]),E=r(E,D,M,b,z,22,h[15]),b=n(b,E,D,M,d,5,h[16]),M=n(M,b,E,D,g,9,h[17]),D=n(D,M,b,E,B,14,h[18]),E=n(E,D,M,b,f,20,h[19]),b=n(b,E,D,M,v,5,h[20]),M=n(M,b,E,D,S,9,h[21]),D=n(D,M,b,E,z,14,h[22]),E=n(E,D,M,b,y,20,h[23]),b=n(b,E,D,M,m,5,h[24]),M=n(M,b,E,D,C,9,h[25]),D=n(D,M,b,E,l,14,h[26]),E=n(E,D,M,b,k,20,h[27]),b=n(b,E,D,M,x,5,h[28]),M=n(M,b,E,D,p,9,h[29]),D=n(D,M,b,E,_,14,h[30]),E=n(E,D,M,b,w,20,h[31]),b=i(b,E,D,M,v,4,h[32]),M=i(M,b,E,D,k,11,h[33]),D=i(D,M,b,E,B,16,h[34]),E=i(E,D,M,b,C,23,h[35]),b=i(b,E,D,M,d,4,h[36]),M=i(M,b,E,D,y,11,h[37]),D=i(D,M,b,E,_,16,h[38]),E=i(E,D,M,b,S,23,h[39]),b=i(b,E,D,M,x,4,h[40]),M=i(M,b,E,D,f,11,h[41]),D=i(D,M,b,E,l,16,h[42]),E=i(E,D,M,b,g,23,h[43]),b=i(b,E,D,M,m,4,h[44]),M=i(M,b,E,D,w,11,h[45]),D=i(D,M,b,E,z,16,h[46]),E=i(E,D,M,b,p,23,h[47]),b=o(b,E,D,M,f,6,h[48]),M=o(M,b,E,D,_,10,h[49]),D=o(D,M,b,E,C,15,h[50]),E=o(E,D,M,b,v,21,h[51]),b=o(b,E,D,M,w,6,h[52]),M=o(M,b,E,D,l,10,h[53]),D=o(D,M,b,E,S,15,h[54]),E=o(E,D,M,b,d,21,h[55]),b=o(b,E,D,M,k,6,h[56]),M=o(M,b,E,D,z,10,h[57]),D=o(D,M,b,E,g,15,h[58]),E=o(E,D,M,b,x,21,h[59]),b=o(b,E,D,M,y,6,h[60]),M=o(M,b,E,D,B,10,h[61]),D=o(D,M,b,E,p,15,h[62]),E=o(E,D,M,b,m,21,h[63]),u[0]=u[0]+b|0,u[1]=u[1]+E|0,u[2]=u[2]+D|0,u[3]=u[3]+M|0},_doFinalize:function(){var t=this._data,r=t.words,n=8*this._nDataBytes,i=8*t.sigBytes;r[i>>>5]|=128<<24-i%32;var o=e.floor(n/4294967296),c=n;r[(i+64>>>9<<4)+15]=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),r[(i+64>>>9<<4)+14]=16711935&(c<<8|c>>>24)|4278255360&(c<<24|c>>>8),t.sigBytes=4*(r.length+1),this._process();for(var a=this._hash,s=a.words,u=0;u<4;u++){var f=s[u];s[u]=16711935&(f<<8|f>>>24)|4278255360&(f<<24|f>>>8)}return a},clone:function(){var t=u.clone.call(this);return t._hash=this._hash.clone(),t}});c.MD5=u._createHelper(d),c.HmacMD5=u._createHmacHelper(d)}(Math),t.MD5}),function(t,e,r){e(t.CryptoJS)}(y,function(t){return function(){var e=t,r=e.lib,n=r.Base,i=r.WordArray,o=e.algo,c=o.MD5,a=o.EvpKDF=n.extend({cfg:n.extend({keySize:4,hasher:c,iterations:1}),init:function(t){this.cfg=this.cfg.extend(t)},compute:function(t,e){for(var r,n=this.cfg,o=n.hasher.create(),c=i.create(),a=c.words,s=n.keySize,u=n.iterations;a.length<s;){r&&o.update(r),r=o.update(t).finalize(e),o.reset();for(var f=1;f<u;f++)r=o.finalize(r),o.reset();c.concat(r)}return c.sigBytes=4*s,c}});e.EvpKDF=function(t,e,r){return a.create(r).compute(t,e)}}(),t.EvpKDF}),function(t,e){e(t.CryptoJS)}(y,function(t){return function(){function e(t,e,r){for(var n=[],o=0,c=0;c<e;c++)if(c%4){var a=r[t.charCodeAt(c-1)]<<c%4*2,s=r[t.charCodeAt(c)]>>>6-c%4*2,u=a|s;n[o>>>2]|=u<<24-o%4*8,o++}return i.create(n,o)}var r=t,n=r.lib,i=n.WordArray,o=r.enc;o.Base64={stringify:function(t){var e=t.words,r=t.sigBytes,n=this._map;t.clamp();for(var i=[],o=0;o<r;o+=3)for(var c=e[o>>>2]>>>24-o%4*8&255,a=e[o+1>>>2]>>>24-(o+1)%4*8&255,s=e[o+2>>>2]>>>24-(o+2)%4*8&255,u=c<<16|a<<8|s,f=0;f<4&&o+.75*f<r;f++)i.push(n.charAt(u>>>6*(3-f)&63));var h=n.charAt(64);if(h)for(;i.length%4;)i.push(h);return i.join("")},parse:function(t){var r=t.length,n=this._map,i=this._reverseMap;if(!i){i=this._reverseMap=[];for(var o=0;o<n.length;o++)i[n.charCodeAt(o)]=o}var c=n.charAt(64);if(c){var a=t.indexOf(c);a!==-1&&(r=a)}return e(t,r,i)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}(),t.enc.Base64}),function(t,e,r){e(t.CryptoJS)}(y,function(t){t.lib.Cipher||function(e){var r=t,n=r.lib,i=n.Base,o=n.WordArray,c=n.BufferedBlockAlgorithm,a=r.enc,s=(a.Utf8,a.Base64),u=r.algo,f=u.EvpKDF,h=n.Cipher=c.extend({cfg:i.extend(),createEncryptor:function(t,e){return this.create(this._ENC_XFORM_MODE,t,e)},createDecryptor:function(t,e){return this.create(this._DEC_XFORM_MODE,t,e)},init:function(t,e,r){this.cfg=this.cfg.extend(r),this._xformMode=t,this._key=e,this.reset()},reset:function(){c.reset.call(this),this._doReset()},process:function(t){return this._append(t),this._process()},finalize:function(t){t&&this._append(t);var e=this._doFinalize();return e},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function t(t){return"string"==typeof t?w:m}return function(e){return{encrypt:function(r,n,i){return t(n).encrypt(e,r,n,i)},decrypt:function(r,n,i){return t(n).decrypt(e,r,n,i)}}}}()}),d=(n.StreamCipher=h.extend({_doFinalize:function(){var t=this._process(!0);return t},blockSize:1}),r.mode={}),p=n.BlockCipherMode=i.extend({createEncryptor:function(t,e){return this.Encryptor.create(t,e)},createDecryptor:function(t,e){return this.Decryptor.create(t,e)},init:function(t,e){this._cipher=t,this._iv=e}}),l=d.CBC=function(){function t(t,r,n){var i,o=this._iv;o?(i=o,this._iv=e):i=this._prevBlock;for(var c=0;c<n;c++)t[r+c]^=i[c]}var r=p.extend();return r.Encryptor=r.extend({processBlock:function(e,r){var n=this._cipher,i=n.blockSize;t.call(this,e,r,i),n.encryptBlock(e,r),this._prevBlock=e.slice(r,r+i)}}),r.Decryptor=r.extend({processBlock:function(e,r){var n=this._cipher,i=n.blockSize,o=e.slice(r,r+i);n.decryptBlock(e,r),t.call(this,e,r,i),this._prevBlock=o}}),r}(),y=r.pad={},v=y.Pkcs7={pad:function(t,e){for(var r=4*e,n=r-t.sigBytes%r,i=n<<24|n<<16|n<<8|n,c=[],a=0;a<n;a+=4)c.push(i);var s=o.create(c,n);t.concat(s)},unpad:function(t){var e=255&t.words[t.sigBytes-1>>>2];t.sigBytes-=e}},g=(n.BlockCipher=h.extend({cfg:h.cfg.extend({mode:l,padding:v}),reset:function(){var t;h.reset.call(this);var e=this.cfg,r=e.iv,n=e.mode;this._xformMode==this._ENC_XFORM_MODE?t=n.createEncryptor:(t=n.createDecryptor,this._minBufferSize=1),this._mode&&this._mode.__creator==t?this._mode.init(this,r&&r.words):(this._mode=t.call(n,this,r&&r.words),this._mode.__creator=t)},_doProcessBlock:function(t,e){this._mode.processBlock(t,e)},_doFinalize:function(){var t,e=this.cfg.padding;return this._xformMode==this._ENC_XFORM_MODE?(e.pad(this._data,this.blockSize),t=this._process(!0)):(t=this._process(!0),e.unpad(t)),t},blockSize:4}),n.CipherParams=i.extend({init:function(t){this.mixIn(t)},toString:function(t){return(t||this.formatter).stringify(this)}})),_=r.format={},k=_.OpenSSL={stringify:function(t){var e,r=t.ciphertext,n=t.salt;return e=n?o.create([1398893684,1701076831]).concat(n).concat(r):r,e.toString(s)},parse:function(t){var e,r=s.parse(t),n=r.words;return 1398893684==n[0]&&1701076831==n[1]&&(e=o.create(n.slice(2,4)),n.splice(0,4),r.sigBytes-=16),g.create({ciphertext:r,salt:e})}},m=n.SerializableCipher=i.extend({cfg:i.extend({format:k}),encrypt:function(t,e,r,n){n=this.cfg.extend(n);var i=t.createEncryptor(r,n),o=i.finalize(e),c=i.cfg;return g.create({ciphertext:o,key:r,iv:c.iv,algorithm:t,mode:c.mode,padding:c.padding,blockSize:t.blockSize,formatter:n.format})},decrypt:function(t,e,r,n){n=this.cfg.extend(n),e=this._parse(e,n.format);var i=t.createDecryptor(r,n).finalize(e.ciphertext);return i},_parse:function(t,e){return"string"==typeof t?e.parse(t,this):t}}),S=r.kdf={},B=S.OpenSSL={execute:function(t,e,r,n){n||(n=o.random(8));var i=f.create({keySize:e+r}).compute(t,n),c=o.create(i.words.slice(e),4*r);return i.sigBytes=4*e,g.create({key:i,iv:c,salt:n})}},w=n.PasswordBasedCipher=m.extend({cfg:m.cfg.extend({kdf:B}),encrypt:function(t,e,r,n){n=this.cfg.extend(n);var i=n.kdf.execute(r,t.keySize,t.ivSize);n.iv=i.iv;var o=m.encrypt.call(this,t,e,i.key,n);return o.mixIn(i),o},decrypt:function(t,e,r,n){n=this.cfg.extend(n),e=this._parse(e,n.format);var i=n.kdf.execute(r,t.keySize,t.ivSize,e.salt);n.iv=i.iv;var o=m.decrypt.call(this,t,e,i.key,n);return o}})}()}),function(t,e,r){e(t.CryptoJS)}(y,function(t){return function(){var e=t,r=e.lib,n=r.BlockCipher,i=e.algo,o=[],c=[],a=[],s=[],u=[],f=[],h=[],d=[],p=[],l=[];!function(){for(var t=[],e=0;e<256;e++)e<128?t[e]=e<<1:t[e]=e<<1^283;for(var r=0,n=0,e=0;e<256;e++){var i=n^n<<1^n<<2^n<<3^n<<4;i=i>>>8^255&i^99,o[r]=i,c[i]=r;var y=t[r],v=t[y],g=t[v],_=257*t[i]^16843008*i;a[r]=_<<24|_>>>8,s[r]=_<<16|_>>>16,u[r]=_<<8|_>>>24,f[r]=_;var _=16843009*g^65537*v^257*y^16843008*r;h[i]=_<<24|_>>>8,d[i]=_<<16|_>>>16,p[i]=_<<8|_>>>24,l[i]=_,r?(r=y^t[t[t[g^y]]],n^=t[t[n]]):r=n=1}}();var y=[0,1,2,4,8,16,32,64,128,27,54],v=i.AES=n.extend({_doReset:function(){var t;if(!this._nRounds||this._keyPriorReset!==this._key){for(var e=this._keyPriorReset=this._key,r=e.words,n=e.sigBytes/4,i=this._nRounds=n+6,c=4*(i+1),a=this._keySchedule=[],s=0;s<c;s++)s<n?a[s]=r[s]:(t=a[s-1],s%n?n>6&&s%n==4&&(t=o[t>>>24]<<24|o[t>>>16&255]<<16|o[t>>>8&255]<<8|o[255&t]):(t=t<<8|t>>>24,t=o[t>>>24]<<24|o[t>>>16&255]<<16|o[t>>>8&255]<<8|o[255&t],t^=y[s/n|0]<<24),a[s]=a[s-n]^t);for(var u=this._invKeySchedule=[],f=0;f<c;f++){var s=c-f;if(f%4)var t=a[s];else var t=a[s-4];f<4||s<=4?u[f]=t:u[f]=h[o[t>>>24]]^d[o[t>>>16&255]]^p[o[t>>>8&255]]^l[o[255&t]]}}},encryptBlock:function(t,e){this._doCryptBlock(t,e,this._keySchedule,a,s,u,f,o)},decryptBlock:function(t,e){var r=t[e+1];t[e+1]=t[e+3],t[e+3]=r,this._doCryptBlock(t,e,this._invKeySchedule,h,d,p,l,c);var r=t[e+1];t[e+1]=t[e+3],t[e+3]=r},_doCryptBlock:function(t,e,r,n,i,o,c,a){for(var s=this._nRounds,u=t[e]^r[0],f=t[e+1]^r[1],h=t[e+2]^r[2],d=t[e+3]^r[3],p=4,l=1;l<s;l++){var y=n[u>>>24]^i[f>>>16&255]^o[h>>>8&255]^c[255&d]^r[p++],v=n[f>>>24]^i[h>>>16&255]^o[d>>>8&255]^c[255&u]^r[p++],g=n[h>>>24]^i[d>>>16&255]^o[u>>>8&255]^c[255&f]^r[p++],_=n[d>>>24]^i[u>>>16&255]^o[f>>>8&255]^c[255&h]^r[p++];u=y,f=v,h=g,d=_}var y=(a[u>>>24]<<24|a[f>>>16&255]<<16|a[h>>>8&255]<<8|a[255&d])^r[p++],v=(a[f>>>24]<<24|a[h>>>16&255]<<16|a[d>>>8&255]<<8|a[255&u])^r[p++],g=(a[h>>>24]<<24|a[d>>>16&255]<<16|a[u>>>8&255]<<8|a[255&f])^r[p++],_=(a[d>>>24]<<24|a[u>>>16&255]<<16|a[f>>>8&255]<<8|a[255&h])^r[p++];t[e]=y,t[e+1]=v,t[e+2]=g,t[e+3]=_},keySize:8});e.AES=n._createHelper(v)}(),t.AES});var v,g,_,k,m=function(){function t(){return r=(9301*r+49297)%233280,r/233280}var e=new Date,r=e.getTime();return function(e){return Math.ceil(t()*e)}}(),S=y.CryptoJS,B=window.console&&window.console.log||function(){},w={init:function(t,e){return g=t,B=g&&g.log||B,t&&t.kit&&t.kit.encodeTrackData?void(h(e,"\u521d\u59cb\u914d\u7f6econfig")&&h(e.k,"\u521d\u59cb\u53c2\u6570k")&&h(e.kid,"\u521d\u59cb\u53c2\u6570kid")&&h(e.khash,"\u521d\u59cb\u53c2\u6570khash")&&d(e.k,"\u521d\u59cb\u53c2\u6570k","string")&&d(e.khash,"\u521d\u59cb\u53c2\u6570khash","string")&&d(e.kid,"\u521d\u59cb\u53c2\u6570kid","number")?(_=e,v=s(),k=g.kit.encodeTrackData,g.kit.encodeTrackData=f,B("AES\u63d2\u4ef6\u521d\u59cb\u5316\u5b8c\u6210")):B("AES\u63d2\u4ef6\u521d\u59cb\u5316\u5931\u8d25")):void B("AES\u63d2\u4ef6\u521d\u59cb\u5316\u5931\u8d25,\u5f53\u524d\u4e3bsdk\u4e0d\u652f\u6301AES\u63d2\u4ef6\uff0c\u8bf7\u5347\u7ea7\u4e3bsdk")},encrypt:function(t,e,r){return p(!0,t,e,r)},decrypt:function(t,e,r){return p(!1,t,e,r)}},x=r(w,"AesEncryption","sdkReady");return x}();