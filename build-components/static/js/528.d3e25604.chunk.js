/*! For license information please see 528.d3e25604.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunks_low_components=self.webpackChunks_low_components||[]).push([[528,655],{5460:function(e,n,o){o.r(n);var r=o(8655),t=o.n(r),i=o(5180),c=o(2498),l=o(2728),a="PageJump_btn__bCBIr",u=o(9197),f=o(6078),s=o(6319),d=o(4616),m=o(6302),b=o(6775),y={url:{key:"url",name:"\u7ad9\u5916\u94fe\u63a5",render:(0,b.jsx)(f.Z,{placeholder:"\u8bf7\u8f93\u5165\u5916\u90e8\u94fe\u63a5H5\u5730\u5740"})}},g=(0,r.forwardRef)((function(e,n){var o=e.value,t=e.onChange,i=(0,r.useState)(!1),l=(0,u.Z)(i,2),a=l[0],f=l[1],g=s.Z.useForm(),v=(0,u.Z)(g,1)[0];function p(){f(!0)}(0,r.useImperativeHandle)(n,(function(){return{open:p,close:x}}));function x(){v.resetFields(),f(!1)}var h=(0,r.useMemo)((function(){return Object.values(y).map((function(e){return{key:e.key,label:e.name,children:e.render}}))}),[]);return(0,b.jsx)(d.Z,{title:"\u8bf7\u9009\u62e9\u8df3\u8f6c\u9875\u9762",open:a,onOk:function(){f(!1)},onCancel:x,children:(0,b.jsx)(s.Z,{form:v,onValuesChange:function(e,n){t((0,c.Z)({},n))},initialValues:o,children:(0,b.jsx)(s.Z.Item,{noStyle:!0,name:"config",initialValue:y.url.key,children:(0,b.jsx)(m.Z,{items:h})})})})})),v=g,p=function(e){var n,o=e.value,t=(0,r.useRef)(null);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("div",{className:"flex items-center",children:[(null===o||void 0===o?void 0:o.config)&&(0,b.jsx)(l.Z,{color:"#108ee9",children:null===(n=y[null===o||void 0===o?void 0:o.config])||void 0===n?void 0:n.name}),(0,b.jsx)("div",{onClick:function(){var e;null===(e=t.current)||void 0===e||e.open()},className:"".concat(a," cursor-pointer"),children:null!==o&&void 0!==o&&o.config?"\u4fee\u6539":"\u9009\u62e9\u8981\u8df3\u8f6c\u7684\u9875\u9762"})]}),(0,b.jsx)(v,(0,c.Z)({ref:t},e))]})};var x=function(){return(0,b.jsx)("div",{className:"App",children:(0,b.jsx)(p,{value:{url:"",config:"url"},onChange:function(){}})})},h=function(e){e&&e instanceof Function&&o.e(293).then(o.bind(o,5293)).then((function(n){var o=n.getCLS,r=n.getFID,t=n.getFCP,i=n.getLCP,c=n.getTTFB;o(e),r(e),t(e),i(e),c(e)}))};i.createRoot(document.getElementById("root")).render((0,b.jsx)(t().StrictMode,{children:(0,b.jsx)(x,{})})),h()},1362:function(e,n,o){o.d(n,{R_:function(){return r.Z},iN:function(){return l}});var r=o(3164),t={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1677FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},i={},c={};Object.keys(t).forEach((function(e){i[e]=(0,r.Z)(t[e]),i[e].primary=i[e][5],c[e]=(0,r.Z)(t[e],{theme:"dark",backgroundColor:"#141414"}),c[e].primary=c[e][5]}));i.red,i.volcano,i.gold,i.orange,i.yellow,i.lime,i.green,i.cyan;var l=i.blue;i.geekblue,i.purple,i.magenta,i.grey,i.grey},1706:function(e,n,o){o.d(n,{Lx:function(){return a},Qy:function(){return s},Ro:function(){return c},Wf:function(){return i},dF:function(){return l},du:function(){return u},vS:function(){return t}});var r=o(8269),t={overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},i=function(e){return{boxSizing:"border-box",margin:0,padding:0,color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight,listStyle:"none",fontFamily:e.fontFamily}},c=function(){return{display:"inline-flex",alignItems:"center",color:"inherit",fontStyle:"normal",lineHeight:0,textAlign:"center",textTransform:"none",verticalAlign:"-0.125em",textRendering:"optimizeLegibility","-webkit-font-smoothing":"antialiased","-moz-osx-font-smoothing":"grayscale","> *":{lineHeight:1},svg:{display:"inline-block"}}},l=function(){return{"&::before":{display:"table",content:'""'},"&::after":{display:"table",clear:"both",content:'""'}}},a=function(e){var n;return{a:(n={color:e.colorLink,textDecoration:e.linkDecoration,backgroundColor:"transparent",outline:"none",cursor:"pointer",transition:"color ".concat(e.motionDurationSlow),"-webkit-text-decoration-skip":"objects","&:hover":{color:e.colorLinkHover},"&:active":{color:e.colorLinkActive}},(0,r.Z)(n,"&:active,\n  &:hover",{textDecoration:e.linkHoverDecoration,outline:0}),(0,r.Z)(n,"&:focus",{textDecoration:e.linkFocusDecoration,outline:0}),(0,r.Z)(n,"&[disabled]",{color:e.colorTextDisabled,cursor:"not-allowed"}),n)}},u=function(e,n){var o=e.fontFamily,t=e.fontSize,i='[class^="'.concat(n,'"], [class*=" ').concat(n,'"]');return(0,r.Z)({},i,(0,r.Z)({fontFamily:o,fontSize:t,boxSizing:"border-box","&::before, &::after":{boxSizing:"border-box"}},i,{boxSizing:"border-box","&::before, &::after":{boxSizing:"border-box"}}))},f=function(e){return{outline:"".concat(e.lineWidthFocus,"px solid ").concat(e.colorPrimaryBorder),outlineOffset:1,transition:"outline-offset 0s, outline 0s"}},s=function(e){return{"&:focus-visible":Object.assign({},f(e))}}},5657:function(e,n,o){o.d(n,{Z:function(){return l},_:function(){return c}});var r=o(4001),t=o(9602),i=["children"],c=t.createContext({});function l(e){var n=e.children,o=(0,r.Z)(e,i);return t.createElement(c.Provider,{value:o},n)}},5180:function(e,n,o){var r=o(1549);n.createRoot=r.createRoot,n.hydrateRoot=r.hydrateRoot},5221:function(e,n){var o="function"===typeof Symbol&&Symbol.for,r=o?Symbol.for("react.element"):60103,t=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,c=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,a=o?Symbol.for("react.provider"):60109,u=o?Symbol.for("react.context"):60110,f=o?Symbol.for("react.async_mode"):60111,s=o?Symbol.for("react.concurrent_mode"):60111,d=o?Symbol.for("react.forward_ref"):60112,m=o?Symbol.for("react.suspense"):60113,b=o?Symbol.for("react.suspense_list"):60120,y=o?Symbol.for("react.memo"):60115,g=o?Symbol.for("react.lazy"):60116,v=o?Symbol.for("react.block"):60121,p=o?Symbol.for("react.fundamental"):60117,x=o?Symbol.for("react.responder"):60118,h=o?Symbol.for("react.scope"):60119;function S(e){if("object"===typeof e&&null!==e){var n=e.$$typeof;switch(n){case r:switch(e=e.type){case f:case s:case i:case l:case c:case m:return e;default:switch(e=e&&e.$$typeof){case u:case d:case g:case y:case a:return e;default:return n}}case t:return n}}}function k(e){return S(e)===s}n.isFragment=function(e){return S(e)===i},n.isMemo=function(e){return S(e)===y}},135:function(e,n,o){e.exports=o(5221)}}]);
//# sourceMappingURL=528.d3e25604.chunk.js.map