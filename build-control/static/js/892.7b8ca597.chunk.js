(self.webpackChunks_low_control=self.webpackChunks_low_control||[]).push([[892],{7736:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.generateRandomHexColor=void 0;t.generateRandomHexColor=function(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}},6892:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),t.getModuleFederationRemotes=void 0;var a=r(9325);Object.defineProperty(t,"getModuleFederationRemotes",{enumerable:!0,get:function(){return a.getModuleFederationRemotes}}),o(r(7736),t)},9325:function(e,t,r){"use strict";var n=r(4113).default;Object.defineProperty(t,"__esModule",{value:!0}),t.getModuleFederationRemotes=void 0;t.getModuleFederationRemotes=function(e){var t,r={},o=n(e.remotes);try{for(o.s();!(t=o.n()).done;){var a=t.value;r[a.name]="".concat(a.name,"@").concat(a.url.endsWith("/")?a.url:"".concat(a.url,"/"),"remoteEntry.js")}}catch(u){o.e(u)}finally{o.f()}return r}},6596:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},4113:function(e,t,r){var n=r(2659);e.exports=function(e,t){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=n(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,i=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){c=!0,u=e},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw u}}}},e.exports.__esModule=!0,e.exports.default=e.exports},2659:function(e,t,r){var n=r(6596);e.exports=function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=892.7b8ca597.chunk.js.map