"use strict";(self.webpackChunks_low_control=self.webpackChunks_low_control||[]).push([[791],{3458:function(e,n,t){t.r(n);var r=t(8655),o=t.n(r),i=t(5180),a=t(8318),s=t(5614),u=t(447),c=t(7582),l=c.V5.model({name:c.V5.optional(c.V5.string,"\u7528\u6237\u540d")}),f=c.V5.model("AppStore",{userInfo:l}).volatile((function(){return{}})).views((function(e){return{get getIsOperate(){var n,t;return null===(n=e.userInfo)||void 0===n||null===(t=n.bizRoles)||void 0===t?void 0:t.includes(2)}}})).actions((function(e){return{setOpenKeys:function(n){e.openKeys=n},afterCreate:function(){},beforeDestroy:function(){}}})),d=t(5244),m=t(120),p=t(5139),h=t(2499),v=t(6775),g=f.create({userInfo:{name:""}}),j=(0,a.aj)(m._);var x=function(){return(0,v.jsx)(u.zt,{app:g,children:(0,v.jsx)(d.ZP,{componentSize:"middle",locale:h.Z,children:(0,v.jsx)(r.Suspense,{fallback:(0,v.jsx)(p.Z,{}),children:(0,v.jsx)(s.pG,{router:j})})})})},y=function(e){e&&e instanceof Function&&t.e(293).then(t.bind(t,5293)).then((function(n){var t=n.getCLS,r=n.getFID,o=n.getFCP,i=n.getLCP,a=n.getTTFB;t(e),r(e),o(e),i(e),a(e)}))};i.createRoot(document.getElementById("root")).render((0,v.jsx)(o().StrictMode,{children:(0,v.jsx)(x,{})})),y()},5139:function(e,n,t){var r=t(3012),o=t(9808),i=t(6775);n.Z=function(){return(0,o.createPortal)((0,i.jsx)("div",{className:"w-full h-full flex justify-center items-center",children:(0,i.jsx)(r.Z,{})}),document.body)}},5306:function(e,n,t){t.d(n,{X:function(){return r}});var r="previewIframeId511"},6941:function(e,n,t){t.d(n,{Ho:function(){return d},bg:function(){return f},aC:function(){return l}});var r=t(9197),o=t(6280);var i=t(9651),a=t(8655),s=t(5614),u=t(6775),c=(0,a.createContext)(null);function l(){return(0,a.useContext)(c)}var f=function(){return(0,i.qn)()};function d(e){var n=e.children,t=(0,a.useState)(null),l=(0,r.Z)(t,2),f=l[0],d=l[1],m=(0,a.useRef)(!1),p=(0,s.s0)(),h="/login"!==window.location.pathname;(0,a.useEffect)((function(){var e=(0,i.qn)();e&&d(e),e||m.current||!h||v()}),[]);var v=function(){return m.current=!0,(e={userName:null===f||void 0===f?void 0:f.userName},o.Z.post("/auth/signOut",e)).then((function(){d(null),(0,i.JV)(),h&&p("/login")})).finally((function(){m.current=!1}));var e};return(0,u.jsx)(c.Provider,{value:{user:f,signin:function(e){return(n=e,o.Z.post("/auth/signIn",n)).then((function(e){return(0,i.RR)(e),d(e.user),e}));var n},signout:v},children:n})}},120:function(e,n,t){t.d(n,{D:function(){return y},_:function(){return b}});var r=t(8121),o=t.p+"static/media/gundam.992af5d54fe64ec08f35.jpeg",i=t(5614),a=t(6775),s=function(){var e=(0,i.s0)();return(0,a.jsxs)("div",{className:"bg-blue-50 relative content grow shrink basis-full flex",children:[(0,a.jsx)("div",{className:"left",children:(0,a.jsxs)("div",{className:"operate mt-20 mx-20 bg-white rounded-3xl inline-flex flex-col  items-left pl-10 pr-20 pt-10 pb-20",children:[(0,a.jsx)("div",{className:"mb-10",children:(0,a.jsx)("h3",{className:"text-2xl",children:"SLow\u4f4e\u4ee3\u7801"})}),(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)(r.ZP,{type:"primary",size:"large",className:"mr-4",onClick:function(){e("/application/project")},children:"\u5f00\u59cb\u4f7f\u7528"}),(0,a.jsx)(r.ZP,{size:"large",children:"\u64cd\u4f5c\u6307\u5357"})]})]})}),(0,a.jsx)("div",{className:"right pr-20 pt-20",children:(0,a.jsx)("img",{src:o,alt:""})})]})};var u=function(){return(0,a.jsx)(s,{})},c=t(6941),l=function(){return(0,a.jsx)(c.Ho,{children:(0,a.jsx)(i.j3,{})})},f=t(8655),d=(0,f.lazy)((function(){return Promise.all([t.e(356),t.e(342),t.e(84),t.e(531),t.e(718)]).then(t.bind(t,3042))})),m=(0,f.lazy)((function(){return Promise.all([t.e(356),t.e(342),t.e(599),t.e(126),t.e(443),t.e(57)]).then(t.bind(t,7181))})),p=(0,f.lazy)((function(){return Promise.all([t.e(356),t.e(342),t.e(599),t.e(84),t.e(126),t.e(387),t.e(445),t.e(531),t.e(939),t.e(443),t.e(343),t.e(308),t.e(848)]).then(t.bind(t,4212))})),h=(0,f.lazy)((function(){return Promise.all([t.e(356),t.e(342),t.e(599),t.e(707)]).then(t.bind(t,2707))})),v=(0,f.lazy)((function(){return Promise.all([t.e(356),t.e(342),t.e(599),t.e(84),t.e(126),t.e(387),t.e(445),t.e(531),t.e(939),t.e(102),t.e(443),t.e(343),t.e(308),t.e(790)]).then(t.bind(t,8184))})),g=(0,f.lazy)((function(){return Promise.all([t.e(356),t.e(342),t.e(599),t.e(84),t.e(126),t.e(387),t.e(445),t.e(531),t.e(443),t.e(343),t.e(987)]).then(t.bind(t,6987))})),j=(0,f.lazy)((function(){return Promise.all([t.e(356),t.e(342),t.e(599),t.e(84),t.e(126),t.e(387),t.e(443),t.e(343),t.e(468)]).then(t.bind(t,9468))})),x=(0,f.lazy)((function(){return Promise.all([t.e(356),t.e(84),t.e(445),t.e(102),t.e(573),t.e(561)]).then(t.bind(t,4179))})),y=[{path:"project",id:"/application/project",name:"\u9879\u76ee\u7ba1\u7406",element:(0,a.jsx)(p,{})},{path:"user",id:"/application/user",name:"\u7528\u6237\u7ba1\u7406",element:(0,a.jsx)(v,{})},{path:"role",id:"/application/role",name:"\u89d2\u8272\u7ba1\u7406",element:(0,a.jsx)(g,{})},{path:"menu",id:"/application/menu",name:"\u83dc\u5355\u7ba1\u7406",element:(0,a.jsx)(j,{})}],b=[{path:"/",element:(0,a.jsx)(l,{}),children:[{path:"login",element:(0,a.jsx)(d,{})},{path:"",element:(0,a.jsx)(m,{}),children:[{path:"home",element:(0,a.jsx)(u,{})},{path:"application",element:(0,a.jsx)(h,{}),children:y},{path:"/editor/:id",element:(0,a.jsx)(x,{}),loader:function(){return new Response(JSON.stringify({some:"thing"}),{status:200})}}]}]}]},6280:function(e,n,t){t.d(n,{Z:function(){return p}});var r=t(9356),o=t(3835),i=t.n(o),a=t(8803);function s(e){e instanceof Object&&Object.keys(e).forEach((function(n){"string"===typeof e[n]&&(e[n]=e[n].trim())}))}function u(e){e instanceof Object&&Object.keys(e).forEach((function(n){var t=e[n];(void 0===t||null===t||"string"===typeof t&&""===t.trim())&&delete e[n]}))}var c,l=[function(e){return"get"===e.method?(s(e.params),u(e.params)):"post"===e.method&&(s(e.data),u(e.data)),e},function(e){return Promise.reject(e)}],f=t(9651),d={timeout:5e3,responseType:"json",headers:{"Content-Type":"application/json"},baseURL:"".concat("http://110.42.188.221:13000","/api/v1")},m=i().create(d);(c=m.interceptors.request).use.apply(c,(0,r.Z)(l)),m.interceptors.request.use((function(e){var n=(0,f.LP)();return e.headers.Authorization="Bearer "+n,e}),(function(e){return Promise.reject(e)})),m.interceptors.response.use((function(e){var n,t;return 200!==(null===(n=e.data)||void 0===n?void 0:n.code)?(e.data.message&&a.Z.error({message:e.data.message}),Promise.reject(e.data.message)):null===(t=e.data)||void 0===t?void 0:t.data}),(function(e){var n;if(401===(null===e||void 0===e||null===(n=e.response)||void 0===n?void 0:n.status))return(0,f.JV)(),window.location.replace("/login"),Promise.reject(e);var t=null===e||void 0===e?void 0:e.response.data;return t&&t.message&&a.Z.error({key:t.message,message:t.message}),Promise.reject(e)}));var p=m},9651:function(e,n,t){t.d(n,{JV:function(){return c},LP:function(){return a},RR:function(){return u},T:function(){return l},qn:function(){return s}});var r=t(5306),o="SLOW_AUTH_TOKEN",i="SLOW_USER";function a(){return localStorage.getItem(o)}function s(){return JSON.parse(localStorage.getItem(i)||"null")}function u(e){var n;n=e.access_token,localStorage.setItem(o,n),function(e){var n=e.user;localStorage.setItem(i,JSON.stringify(n))}(e)}function c(){localStorage.removeItem(o),localStorage.removeItem(i)}function l(){var e=document.getElementById(r.X);null===e||void 0===e||e.contentWindow.postMessage({even:"updateToken",params:a()},"*")}}}]);
//# sourceMappingURL=791.4b96a4c2.chunk.js.map