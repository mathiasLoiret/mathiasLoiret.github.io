(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15b5e2c8"],{3022:function(t,e,r){(function(t,n){var i=/%[sdj%]/g;e.format=function(t){if(!E(t)){for(var e=[],r=0;r<arguments.length;r++)e.push(u(arguments[r]));return e.join(" ")}r=1;for(var n=arguments,o=n.length,a=String(t).replace(i,function(t){if("%%"===t)return"%";if(r>=o)return t;switch(t){case"%s":return String(n[r++]);case"%d":return Number(n[r++]);case"%j":try{return JSON.stringify(n[r++])}catch(t){return"[Circular]"}default:return t}}),c=n[r];r<o;c=n[++r])v(c)||!k(c)?a+=" "+c:a+=" "+u(c);return a},e.deprecate=function(r,i){if(j(t.process))return function(){return e.deprecate(r,i).apply(this,arguments)};if(!0===n.noDeprecation)return r;var o=!1;function a(){if(!o){if(n.throwDeprecation)throw new Error(i);n.traceDeprecation?console.trace(i):console.error(i),o=!0}return r.apply(this,arguments)}return a};var o,a={};function u(t,r){var n={seen:[],stylize:s};return arguments.length>=3&&(n.depth=arguments[2]),arguments.length>=4&&(n.colors=arguments[3]),b(r)?n.showHidden=r:r&&e._extend(n,r),j(n.showHidden)&&(n.showHidden=!1),j(n.depth)&&(n.depth=2),j(n.colors)&&(n.colors=!1),j(n.customInspect)&&(n.customInspect=!0),n.colors&&(n.stylize=c),f(n,t,n.depth)}function c(t,e){var r=u.styles[e];return r?"["+u.colors[r][0]+"m"+t+"["+u.colors[r][1]+"m":t}function s(t,e){return t}function l(t){var e={};return t.forEach(function(t,r){e[t]=!0}),e}function f(t,r,n){if(t.customInspect&&r&&D(r.inspect)&&r.inspect!==e.inspect&&(!r.constructor||r.constructor.prototype!==r)){var i=r.inspect(n,t);return E(i)||(i=f(t,i,n)),i}var o=p(t,r);if(o)return o;var a=Object.keys(r),u=l(a);if(t.showHidden&&(a=Object.getOwnPropertyNames(r)),A(r)&&(a.indexOf("message")>=0||a.indexOf("description")>=0))return d(r);if(0===a.length){if(D(r)){var c=r.name?": "+r.name:"";return t.stylize("[Function"+c+"]","special")}if(O(r))return t.stylize(RegExp.prototype.toString.call(r),"regexp");if(z(r))return t.stylize(Date.prototype.toString.call(r),"date");if(A(r))return d(r)}var s,b="",v=!1,w=["{","}"];if(h(r)&&(v=!0,w=["[","]"]),D(r)){var x=r.name?": "+r.name:"";b=" [Function"+x+"]"}return O(r)&&(b=" "+RegExp.prototype.toString.call(r)),z(r)&&(b=" "+Date.prototype.toUTCString.call(r)),A(r)&&(b=" "+d(r)),0!==a.length||v&&0!=r.length?n<0?O(r)?t.stylize(RegExp.prototype.toString.call(r),"regexp"):t.stylize("[Object]","special"):(t.seen.push(r),s=v?g(t,r,n,u,a):a.map(function(e){return m(t,r,n,u,e,v)}),t.seen.pop(),y(s,b,w)):w[0]+b+w[1]}function p(t,e){if(j(e))return t.stylize("undefined","undefined");if(E(e)){var r="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(r,"string")}return x(e)?t.stylize(""+e,"number"):b(e)?t.stylize(""+e,"boolean"):v(e)?t.stylize("null","null"):void 0}function d(t){return"["+Error.prototype.toString.call(t)+"]"}function g(t,e,r,n,i){for(var o=[],a=0,u=e.length;a<u;++a)B(e,String(a))?o.push(m(t,e,r,n,String(a),!0)):o.push("");return i.forEach(function(i){i.match(/^\d+$/)||o.push(m(t,e,r,n,i,!0))}),o}function m(t,e,r,n,i,o){var a,u,c;if(c=Object.getOwnPropertyDescriptor(e,i)||{value:e[i]},c.get?u=c.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):c.set&&(u=t.stylize("[Setter]","special")),B(n,i)||(a="["+i+"]"),u||(t.seen.indexOf(c.value)<0?(u=v(r)?f(t,c.value,null):f(t,c.value,r-1),u.indexOf("\n")>-1&&(u=o?u.split("\n").map(function(t){return"  "+t}).join("\n").substr(2):"\n"+u.split("\n").map(function(t){return"   "+t}).join("\n"))):u=t.stylize("[Circular]","special")),j(a)){if(o&&i.match(/^\d+$/))return u;a=JSON.stringify(""+i),a.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),a=t.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=t.stylize(a,"string"))}return a+": "+u}function y(t,e,r){var n=t.reduce(function(t,e){return 0,e.indexOf("\n")>=0&&0,t+e.replace(/\u001b\[\d\d?m/g,"").length+1},0);return n>60?r[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+r[1]:r[0]+e+" "+t.join(", ")+" "+r[1]}function h(t){return Array.isArray(t)}function b(t){return"boolean"===typeof t}function v(t){return null===t}function w(t){return null==t}function x(t){return"number"===typeof t}function E(t){return"string"===typeof t}function S(t){return"symbol"===typeof t}function j(t){return void 0===t}function O(t){return k(t)&&"[object RegExp]"===_(t)}function k(t){return"object"===typeof t&&null!==t}function z(t){return k(t)&&"[object Date]"===_(t)}function A(t){return k(t)&&("[object Error]"===_(t)||t instanceof Error)}function D(t){return"function"===typeof t}function C(t){return null===t||"boolean"===typeof t||"number"===typeof t||"string"===typeof t||"symbol"===typeof t||"undefined"===typeof t}function _(t){return Object.prototype.toString.call(t)}function q(t){return t<10?"0"+t.toString(10):t.toString(10)}e.debuglog=function(t){if(j(o)&&(o=Object({NODE_ENV:"production",BASE_URL:"/"}).NODE_DEBUG||""),t=t.toUpperCase(),!a[t])if(new RegExp("\\b"+t+"\\b","i").test(o)){var r=n.pid;a[t]=function(){var n=e.format.apply(e,arguments);console.error("%s %d: %s",t,r,n)}}else a[t]=function(){};return a[t]},e.inspect=u,u.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},u.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=h,e.isBoolean=b,e.isNull=v,e.isNullOrUndefined=w,e.isNumber=x,e.isString=E,e.isSymbol=S,e.isUndefined=j,e.isRegExp=O,e.isObject=k,e.isDate=z,e.isError=A,e.isFunction=D,e.isPrimitive=C,e.isBuffer=r("d60a");var N=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function U(){var t=new Date,e=[q(t.getHours()),q(t.getMinutes()),q(t.getSeconds())].join(":");return[t.getDate(),N[t.getMonth()],e].join(" ")}function B(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.log=function(){console.log("%s - %s",U(),e.format.apply(e,arguments))},e.inherits=r("3fb5"),e._extend=function(t,e){if(!e||!k(e))return t;var r=Object.keys(e),n=r.length;while(n--)t[r[n]]=e[r[n]];return t}}).call(this,r("c8ba"),r("4362"))},"3e8f":function(t,e){},"3fb5":function(t,e){"function"===typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}},4362:function(t,e,r){e.nextTick=function(t){setTimeout(t,0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,n="/";e.cwd=function(){return n},e.chdir=function(e){t||(t=r("df7c")),n=t.resolve(e,n)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"7f7f":function(t,e,r){var n=r("86cc").f,i=Function.prototype,o=/^\s*function ([^ (]*)/,a="name";a in i||r("9e1e")&&n(i,a,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},"8b48":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app flex-row align-items-center"},[r("div",{staticClass:"container"},[r("b-row",{staticClass:"justify-content-center"},[r("b-col",{attrs:{md:"8"}},[r("b-card-group",[r("b-card",{staticClass:"p-4",attrs:{"no-body":""}},[r("b-card-body",[r("b-form",[r("h1",[t._v("Login")]),r("p",{staticClass:"text-muted"},[t._v("Sign In to your account")]),r("b-input-group",{staticClass:"mb-3"},[r("b-input-group-prepend",[r("b-input-group-text",[r("i",{staticClass:"icon-user"})])],1),r("b-form-input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Username",autocomplete:"username email"},model:{value:t.mail,callback:function(e){t.mail=e},expression:"mail"}})],1),r("b-input-group",{staticClass:"mb-4"},[r("b-input-group-prepend",[r("b-input-group-text",[r("i",{staticClass:"icon-lock"})])],1),r("b-form-input",{staticClass:"form-control",attrs:{type:"password",placeholder:"Password",autocomplete:"current-password"},model:{value:t.pwd,callback:function(e){t.pwd=e},expression:"pwd"}})],1),t.failed?r("h1",{staticClass:"alert alert-danger",staticStyle:{"font-size":"15px"}},[t._v(" Failed to connect !")]):t._e(),r("b-row",[r("b-col",{attrs:{cols:"6"}},[r("b-button",{staticClass:"px-4",attrs:{zvariant:"primary"},on:{click:t.connect}},[t._v("Login")])],1),r("b-col",{staticClass:"text-right",attrs:{cols:"6"}},[r("b-button",{staticClass:"px-0",attrs:{variant:"link"}},[t._v("Forgot password?")])],1)],1)],1)],1)],1),r("b-card",{staticClass:"text-white bg-primary py-5 d-md-down-none",staticStyle:{width:"44%"},attrs:{"no-body":""}},[r("b-card-body",{staticClass:"text-center"},[r("div",[r("h2",[t._v("Sign up")]),r("p",[t._v("No account yet ? start to create my account !")]),r("b-button",{staticClass:"active mt-3",attrs:{variant:"primary"}},[t._v("Register Now!")])],1)])],1)],1)],1)],1)],1)])},i=[],o=(r("7f7f"),r("ac6a"),r("a481"),r("cadf"),r("551c"),r("097d"),[{id:0,name:"John Doe",email:"JohnDoe@gmail.com",pwd:"aze",registered:"2018/01/01",role:"Salaried"},{id:1,name:"Samppa Nori",email:"SamppaNori@gmail.com",pwd:"aze",registered:"2018/01/01",role:"Team manager"},{id:2,name:"Estavan Lykos",email:"EstavanLykos@gmail.com",pwd:"aze",registered:"2018/02/01",role:"Human Resources Director"},{id:3,name:"Salaried Example",email:"salaried@gmail.com",pwd:"aze",registered:"2018/01/01",role:"Salaried"},{id:4,name:"Team manager Example",email:"teammanager@gmail.com",pwd:"aze",registered:"2018/01/01",role:"Team manager"},{id:5,name:"HRD Example",email:"hrd@gmail.com",pwd:"aze",registered:"2018/02/01",role:"Human Resources Director"}]),a=o,u=(r("f654"),r("3e8f"),{name:"User",data:function(){return{failed:!1,mail:"",pwd:""}},methods:{connect:function(){console.log(this.mail),console.log(this.pwd),this.checkServerIdentity()?this.$router.replace({path:"/dashboard"}):this.failed=!0},checkServerIdentity:function(){var t=this,e=!1;return a.forEach(function(r){r.email==t.mail&&r.pwd==t.pwd&&(sessionStorage.setItem("idUser",r.id),sessionStorage.setItem("nameUser",r.name),sessionStorage.setItem("roleUser",r.role),e=!0)}),e}}}),c=u,s=r("2877"),l=Object(s["a"])(c,n,i,!1,null,null,null);l.options.__file="Login.vue";e["default"]=l.exports},d60a:function(t,e){t.exports=function(t){return t&&"object"===typeof t&&"function"===typeof t.copy&&"function"===typeof t.fill&&"function"===typeof t.readUInt8}},df7c:function(t,e,r){(function(t){function r(t,e){for(var r=0,n=t.length-1;n>=0;n--){var i=t[n];"."===i?t.splice(n,1):".."===i?(t.splice(n,1),r++):r&&(t.splice(n,1),r--)}if(e)for(;r--;r)t.unshift("..");return t}var n=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,i=function(t){return n.exec(t).slice(1)};function o(t,e){if(t.filter)return t.filter(e);for(var r=[],n=0;n<t.length;n++)e(t[n],n,t)&&r.push(t[n]);return r}e.resolve=function(){for(var e="",n=!1,i=arguments.length-1;i>=-1&&!n;i--){var a=i>=0?arguments[i]:t.cwd();if("string"!==typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(e=a+"/"+e,n="/"===a.charAt(0))}return e=r(o(e.split("/"),function(t){return!!t}),!n).join("/"),(n?"/":"")+e||"."},e.normalize=function(t){var n=e.isAbsolute(t),i="/"===a(t,-1);return t=r(o(t.split("/"),function(t){return!!t}),!n).join("/"),t||n||(t="."),t&&i&&(t+="/"),(n?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(o(t,function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},e.relative=function(t,r){function n(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var r=t.length-1;r>=0;r--)if(""!==t[r])break;return e>r?[]:t.slice(e,r-e+1)}t=e.resolve(t).substr(1),r=e.resolve(r).substr(1);for(var i=n(t.split("/")),o=n(r.split("/")),a=Math.min(i.length,o.length),u=a,c=0;c<a;c++)if(i[c]!==o[c]){u=c;break}var s=[];for(c=u;c<i.length;c++)s.push("..");return s=s.concat(o.slice(u)),s.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){var e=i(t),r=e[0],n=e[1];return r||n?(n&&(n=n.substr(0,n.length-1)),r+n):"."},e.basename=function(t,e){var r=i(t)[2];return e&&r.substr(-1*e.length)===e&&(r=r.substr(0,r.length-e.length)),r},e.extname=function(t){return i(t)[3]};var a="b"==="ab".substr(-1)?function(t,e,r){return t.substr(e,r)}:function(t,e,r){return e<0&&(e=t.length+e),t.substr(e,r)}}).call(this,r("4362"))},f654:function(t,e,r){"use strict";(function(e){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function n(t,e){if(t===e)return 0;for(var r=t.length,n=e.length,i=0,o=Math.min(r,n);i<o;++i)if(t[i]!==e[i]){r=t[i],n=e[i];break}return r<n?-1:n<r?1:0}function i(t){return e.Buffer&&"function"===typeof e.Buffer.isBuffer?e.Buffer.isBuffer(t):!(null==t||!t._isBuffer)}var o=r("3022"),a=Object.prototype.hasOwnProperty,u=Array.prototype.slice,c=function(){return"foo"===function(){}.name}();function s(t){return Object.prototype.toString.call(t)}function l(t){return!i(t)&&("function"===typeof e.ArrayBuffer&&("function"===typeof ArrayBuffer.isView?ArrayBuffer.isView(t):!!t&&(t instanceof DataView||!!(t.buffer&&t.buffer instanceof ArrayBuffer))))}var f=t.exports=b,p=/\s*function\s+([^\(\s]*)\s*/;function d(t){if(o.isFunction(t)){if(c)return t.name;var e=t.toString(),r=e.match(p);return r&&r[1]}}function g(t,e){return"string"===typeof t?t.length<e?t:t.slice(0,e):t}function m(t){if(c||!o.isFunction(t))return o.inspect(t);var e=d(t),r=e?": "+e:"";return"[Function"+r+"]"}function y(t){return g(m(t.actual),128)+" "+t.operator+" "+g(m(t.expected),128)}function h(t,e,r,n,i){throw new f.AssertionError({message:r,actual:t,expected:e,operator:n,stackStartFunction:i})}function b(t,e){t||h(t,!0,e,"==",f.ok)}function v(t,e,r,a){if(t===e)return!0;if(i(t)&&i(e))return 0===n(t,e);if(o.isDate(t)&&o.isDate(e))return t.getTime()===e.getTime();if(o.isRegExp(t)&&o.isRegExp(e))return t.source===e.source&&t.global===e.global&&t.multiline===e.multiline&&t.lastIndex===e.lastIndex&&t.ignoreCase===e.ignoreCase;if(null!==t&&"object"===typeof t||null!==e&&"object"===typeof e){if(l(t)&&l(e)&&s(t)===s(e)&&!(t instanceof Float32Array||t instanceof Float64Array))return 0===n(new Uint8Array(t.buffer),new Uint8Array(e.buffer));if(i(t)!==i(e))return!1;a=a||{actual:[],expected:[]};var u=a.actual.indexOf(t);return-1!==u&&u===a.expected.indexOf(e)||(a.actual.push(t),a.expected.push(e),x(t,e,r,a))}return r?t===e:t==e}function w(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function x(t,e,r,n){if(null===t||void 0===t||null===e||void 0===e)return!1;if(o.isPrimitive(t)||o.isPrimitive(e))return t===e;if(r&&Object.getPrototypeOf(t)!==Object.getPrototypeOf(e))return!1;var i=w(t),a=w(e);if(i&&!a||!i&&a)return!1;if(i)return t=u.call(t),e=u.call(e),v(t,e,r);var c,s,l=k(t),f=k(e);if(l.length!==f.length)return!1;for(l.sort(),f.sort(),s=l.length-1;s>=0;s--)if(l[s]!==f[s])return!1;for(s=l.length-1;s>=0;s--)if(c=l[s],!v(t[c],e[c],r,n))return!1;return!0}function E(t,e,r){v(t,e,!0)&&h(t,e,r,"notDeepStrictEqual",E)}function S(t,e){if(!t||!e)return!1;if("[object RegExp]"==Object.prototype.toString.call(e))return e.test(t);try{if(t instanceof e)return!0}catch(t){}return!Error.isPrototypeOf(e)&&!0===e.call({},t)}function j(t){var e;try{t()}catch(t){e=t}return e}function O(t,e,r,n){var i;if("function"!==typeof e)throw new TypeError('"block" argument must be a function');"string"===typeof r&&(n=r,r=null),i=j(e),n=(r&&r.name?" ("+r.name+").":".")+(n?" "+n:"."),t&&!i&&h(i,r,"Missing expected exception"+n);var a="string"===typeof n,u=!t&&o.isError(i),c=!t&&i&&!r;if((u&&a&&S(i,r)||c)&&h(i,r,"Got unwanted exception"+n),t&&i&&r&&!S(i,r)||!t&&i)throw i}f.AssertionError=function(t){this.name="AssertionError",this.actual=t.actual,this.expected=t.expected,this.operator=t.operator,t.message?(this.message=t.message,this.generatedMessage=!1):(this.message=y(this),this.generatedMessage=!0);var e=t.stackStartFunction||h;if(Error.captureStackTrace)Error.captureStackTrace(this,e);else{var r=new Error;if(r.stack){var n=r.stack,i=d(e),o=n.indexOf("\n"+i);if(o>=0){var a=n.indexOf("\n",o+1);n=n.substring(a+1)}this.stack=n}}},o.inherits(f.AssertionError,Error),f.fail=h,f.ok=b,f.equal=function(t,e,r){t!=e&&h(t,e,r,"==",f.equal)},f.notEqual=function(t,e,r){t==e&&h(t,e,r,"!=",f.notEqual)},f.deepEqual=function(t,e,r){v(t,e,!1)||h(t,e,r,"deepEqual",f.deepEqual)},f.deepStrictEqual=function(t,e,r){v(t,e,!0)||h(t,e,r,"deepStrictEqual",f.deepStrictEqual)},f.notDeepEqual=function(t,e,r){v(t,e,!1)&&h(t,e,r,"notDeepEqual",f.notDeepEqual)},f.notDeepStrictEqual=E,f.strictEqual=function(t,e,r){t!==e&&h(t,e,r,"===",f.strictEqual)},f.notStrictEqual=function(t,e,r){t===e&&h(t,e,r,"!==",f.notStrictEqual)},f.throws=function(t,e,r){O(!0,t,e,r)},f.doesNotThrow=function(t,e,r){O(!1,t,e,r)},f.ifError=function(t){if(t)throw t};var k=Object.keys||function(t){var e=[];for(var r in t)a.call(t,r)&&e.push(r);return e}}).call(this,r("c8ba"))}}]);
//# sourceMappingURL=chunk-15b5e2c8.3ef43012.js.map