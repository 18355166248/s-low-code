/*! For license information please see 588.f7c64f79.chunk.js.LICENSE.txt */
(self.webpackChunks_low_components=self.webpackChunks_low_components||[]).push([[588],{645:function(e,t,r){"use strict";r.d(t,{E:function(){return u},Z:function(){return c}});r(8655);var n=r(9485),o=r.n(n),i={box:"LowTitle_box__9ayec",lowTitle:"LowTitle_lowTitle__7T3Ny",title:"LowTitle_title__mJfhO"},l=r(6775),u={start:{key:"start",label:"\u5c45\u5de6",value:"justify-start"},end:{key:"end",label:"\u5c45\u53f3",value:"justify-end"},center:{label:"\u5c45\u4e2d",key:"center",value:"justify-center"},between:{key:"between",label:"\u4e24\u7aef\u5bf9\u9f50",value:"justify-between"},around:{key:"around",label:"\u95f4\u9694\u76f8\u7b49",value:"justify-around"},evenly:{key:"evenly",label:"\u95f4\u9694\u76f8\u7b492",value:"justify-evenly"}},c=function(e){var t=e.title,r=e.subTitle,n=e.align,c=e.backgroundColor,s=e.paddingX,a=void 0===s?0:s,f=e.paddingY,d=void 0===f?0:f,p=e.titleFontSize,y=void 0===p?20:p,v=e.subTitleFontSize,b=void 0===v?12:v,g=e.titleColor,m=e.subTitleColor;return(0,l.jsx)("div",{className:i.box,style:{backgroundColor:c},children:(0,l.jsxs)("div",{className:o()(i.lowTitle,u[n].value,["flex"]),style:{padding:"".concat(d,"px ").concat(a,"px")},children:[(0,l.jsx)("span",{className:o()([i.title,"flex"]),style:{fontSize:y,color:g},children:t}),(0,l.jsx)("span",{className:i.subTitle,style:{fontSize:b,color:m},children:r})]})})}},588:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n=r(2498),o=r(6775),i=function(e){var t=e.url,r=e.paddingXY,n=void 0===r?0:r,i=e.paddingTop,l=void 0===i?0:i,u=e.paddingBottom,c=void 0===u?0:u,s=e.radiusDep,a=void 0===s?0:s,f=e.jumpConfig;return t?(0,o.jsx)("div",{children:(0,o.jsx)("img",{src:t,alt:"",style:{paddingLeft:n,paddingRight:n,paddingTop:l,paddingBottom:c,borderRadius:"".concat(a,"%")},onClick:function(){(null===f||void 0===f?void 0:f.url)&&(window.location.href=null===f||void 0===f?void 0:f.url)}})}):(0,o.jsxs)("div",{className:"flex flex-col items-center justify-center text-gray-400",style:{height:100},children:[(0,o.jsx)("span",{className:"iconfont slow-tupian1 mb-2"}),"\u70b9\u51fb\u6dfb\u52a0\u56fe\u7247"]})},l=r(645),u={LowImage:function(e){return(0,o.jsx)(i,(0,n.Z)({},e))},LowTitle:function(e){return(0,o.jsx)(l.Z,(0,n.Z)({},e))}}},9485:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var l=o.apply(null,r);l&&e.push(l)}}else if("object"===i){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var u in r)n.call(r,u)&&r[u]&&e.push(u)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},1865:function(e,t,r){"use strict";var n=r(1845),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var n,i={},s=null,a=null;for(n in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(a=t.ref),t)l.call(t,n)&&!c.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:s,ref:a,props:i,_owner:u.current}}t.Fragment=i,t.jsx=s,t.jsxs=s},6775:function(e,t,r){"use strict";e.exports=r(1865)},8269:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(4160);function o(e,t,r){return(t=(0,n.Z)(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},2498:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(8269);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}},4160:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(5229);function o(e){var t=function(e,t){if("object"!==(0,n.Z)(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==(0,n.Z)(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===(0,n.Z)(t)?t:String(t)}},5229:function(e,t,r){"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}r.d(t,{Z:function(){return n}})}}]);
//# sourceMappingURL=588.f7c64f79.chunk.js.map