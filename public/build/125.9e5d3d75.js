"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[125],{9125:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});n(2675),n(9463),n(2259),n(5700),n(6280),n(6918),n(8706),n(3792),n(9572),n(4170),n(2892),n(9904),n(4185),n(875),n(287),n(6099),n(825),n(7764),n(2953),n(6031);function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,l(r.key),r)}}function c(e,t,n){return t=i(t),function(e,t){if(t&&("object"==r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,u()?Reflect.construct(t,n||[],i(e).constructor):t.apply(e,n))}function u(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(u=function(){return!!e})()}function i(e){return i=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},i(e)}function a(e,t){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},a(e,t)}function f(e,t,n){return(t=l(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){var t=function(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==r(t)?t:t+""}var s=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return f(e=c(this,t,[].concat(r)),"connect",(function(){e.setTwoFactorAuthResendCodeCounter()})),f(e,"setTwoFactorAuthResendCodeCounter",(function(){var e=60,t=null,n=document.getElementById("resend_code_counter"),r=document.getElementById("resend_code_text");null!=n&&(t=setInterval((function(){if(e<=0){clearInterval(t);var o=document.createElement("a"),c=document.getElementById("form");o.href="/2fa-resend-code",o.className="flex justify-center text-blue-600 font-bold",o.textContent="Resend code",c.appendChild(o),n.classList.add("hidden"),r.classList.add("hidden")}var u,i,a;n.textContent="You can request for a new one in "+(u=e,i=Math.floor(u/60),a=u%60,"".concat(i,":").concat(a<10?"0":"").concat(a)),e-=1}),1e3))})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&a(e,t)}(t,e),n=t,r&&o(n.prototype,r),u&&o(n,u),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r,u}(n(2891).xI)}}]);