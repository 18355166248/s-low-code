"use strict";(self.webpackChunks_low_control=self.webpackChunks_low_control||[]).push([[791],{3458:function(e,n,t){t.r(n);var r=t(8655),i=t.n(r),o=t(5180),a=t(8318),u=t(5614),s=t(447),c=t(7582),l=c.V5.model({name:c.V5.optional(c.V5.string,"\u7528\u6237\u540d")}),f=c.V5.model("AppStore",{userInfo:l}).volatile((function(){return{}})).views((function(e){return{get getIsOperate(){var n,t;return null===(n=e.userInfo)||void 0===n||null===(t=n.bizRoles)||void 0===t?void 0:t.includes(2)}}})).actions((function(e){return{setOpenKeys:function(n){e.openKeys=n},afterCreate:function(){},beforeDestroy:function(){}}})),d=t(9561),m=t(120),p=t(5139),h=t(2916),v=t(6775),g=f.create({userInfo:{name:""}}),j=(0,a.aj)(m._);var x=function(){return(0,v.jsx)(s.zt,{app:g,children:(0,v.jsx)(d.ZP,{componentSize:"middle",locale:h.Z,children:(0,v.jsx)(r.Suspense,{fallback:(0,v.jsx)(p.Z,{}),children:(0,v.jsx)(u.pG,{router:j})})})})},y=function(e){e&&e instanceof Function&&t.e(293).then(t.bind(t,5293)).then((function(n){var t=n.getCLS,r=n.getFID,i=n.getFCP,o=n.getLCP,a=n.getTTFB;t(e),r(e),i(e),o(e),a(e)}))};o.createRoot(document.getElementById("root")).render((0,v.jsx)(i().StrictMode,{children:(0,v.jsx)(x,{})})),y()},5139:function(e,n,t){var r=t(5372),i=t(9808),o=t(6775);n.Z=function(){return(0,i.createPortal)((0,o.jsx)("div",{className:"w-full h-full flex justify-center items-center",children:(0,o.jsx)(r.Z,{})}),document.body)}},5306:function(e,n,t){t.d(n,{X:function(){return r}});var r="previewIframeId511"},6941:function(e,n,t){t.d(n,{Ho:function(){return d},bg:function(){return f},aC:function(){return l}});var r=t(9197),i=t(1197);var o=t(9651),a=t(8655),u=t(5614),s=t(6775),c=(0,a.createContext)(null);function l(){return(0,a.useContext)(c)}var f=function(){return(0,o.qn)()};function d(e){var n=e.children,t=(0,a.useState)(null),l=(0,r.Z)(t,2),f=l[0],d=l[1],m=(0,a.useRef)(!1),p=(0,u.s0)(),h="/login"!==window.location.pathname;(0,a.useEffect)((function(){var e=(0,o.qn)();e&&d(e),e||m.current||!h||v()}),[]);var v=function(){return m.current=!0,(e={userName:null===f||void 0===f?void 0:f.userName},i.Z.post("/auth/signOut",e)).then((function(){d(null),(0,o.JV)(),h&&p("/login")})).finally((function(){m.current=!1}));var e};return(0,s.jsx)(c.Provider,{value:{user:f,signin:function(e){return(n=e,i.Z.post("/auth/signIn",n)).then((function(e){return(0,o.RR)(e),d(e.user),e}));var n},signout:v},children:n})}},120:function(e,n,t){t.d(n,{D:function(){return P},_:function(){return S}});var r=t(5290),i=t.p+"static/media/gundam.992af5d54fe64ec08f35.jpeg",o=t(5614),a=t(6775),u=function(){var e=(0,o.s0)();return(0,a.jsxs)("div",{className:"bg-blue-50 relative content grow shrink basis-full flex",children:[(0,a.jsx)("div",{className:"left",children:(0,a.jsxs)("div",{className:"operate mt-20 mx-20 bg-white rounded-3xl inline-flex flex-col  items-left pl-10 pr-20 pt-10 pb-20",children:[(0,a.jsx)("div",{className:"mb-10",children:(0,a.jsx)("h3",{className:"text-2xl",children:"SLow\u4f4e\u4ee3\u7801"})}),(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)(r.ZP,{type:"primary",size:"large",className:"mr-4",onClick:function(){e("/application/project")},children:"\u5f00\u59cb\u4f7f\u7528"}),(0,a.jsx)(r.ZP,{size:"large",children:"\u64cd\u4f5c\u6307\u5357"})]})]})}),(0,a.jsx)("div",{className:"right pr-20 pt-20",children:(0,a.jsx)("img",{src:i,alt:""})})]})};var s=function(){return(0,a.jsx)(u,{})},c=t(6941),l=function(){return(0,a.jsx)(c.Ho,{children:(0,a.jsx)(o.j3,{})})},f=t(8655),d=(0,f.lazy)((function(){return Promise.all([t.e(278),t.e(946),t.e(334),t.e(663),t.e(287)]).then(t.bind(t,3042))})),m=(0,f.lazy)((function(){return Promise.all([t.e(278),t.e(946),t.e(371),t.e(762),t.e(443),t.e(312)]).then(t.bind(t,7181))})),p=(0,f.lazy)((function(){return Promise.all([t.e(278),t.e(946),t.e(334),t.e(371),t.e(762),t.e(770),t.e(873),t.e(663),t.e(997),t.e(443),t.e(343),t.e(308),t.e(390)]).then(t.bind(t,4212))})),h=(0,f.lazy)((function(){return Promise.all([t.e(278),t.e(946),t.e(371),t.e(707)]).then(t.bind(t,2707))})),v=(0,f.lazy)((function(){return Promise.all([t.e(278),t.e(946),t.e(334),t.e(371),t.e(762),t.e(770),t.e(873),t.e(663),t.e(997),t.e(102),t.e(443),t.e(343),t.e(308),t.e(599)]).then(t.bind(t,8184))})),g=(0,f.lazy)((function(){return Promise.all([t.e(278),t.e(946),t.e(334),t.e(371),t.e(762),t.e(770),t.e(873),t.e(663),t.e(443),t.e(343),t.e(216)]).then(t.bind(t,3216))})),j=(0,f.lazy)((function(){return Promise.all([t.e(278),t.e(946),t.e(334),t.e(371),t.e(762),t.e(770),t.e(443),t.e(343),t.e(468)]).then(t.bind(t,9468))})),x=(0,f.lazy)((function(){return Promise.all([t.e(278),t.e(946),t.e(334),t.e(371),t.e(762),t.e(770),t.e(610),t.e(443),t.e(343),t.e(578)]).then(t.bind(t,5578))})),y=(0,f.lazy)((function(){return Promise.all([t.e(278),t.e(946),t.e(334),t.e(371),t.e(762),t.e(770),t.e(873),t.e(663),t.e(997),t.e(610),t.e(443),t.e(343),t.e(308),t.e(189)]).then(t.bind(t,9816))})),b=(0,f.lazy)((function(){return Promise.all([t.e(278),t.e(334),t.e(873),t.e(102),t.e(87),t.e(308),t.e(460)]).then(t.bind(t,1070))})),P=[{path:"project",id:"/application/project",name:"\u9879\u76ee\u7ba1\u7406",element:(0,a.jsx)(p,{})},{path:"user",id:"/application/user",name:"\u7528\u6237\u7ba1\u7406",element:(0,a.jsx)(v,{})},{path:"role",id:"/application/role",name:"\u89d2\u8272\u7ba1\u7406",element:(0,a.jsx)(g,{})},{path:"menu",id:"/application/menu",name:"\u83dc\u5355\u7ba1\u7406",element:(0,a.jsx)(j,{})},{path:"images",id:"/application/images",name:"\u56fe\u7247\u7ba1\u7406",element:(0,a.jsx)(x,{})},{path:"remoteComp",id:"/application/remoteComp",name:"\u8fdc\u7a0b\u7ec4\u4ef6",element:(0,a.jsx)(y,{})}],S=[{path:"/",element:(0,a.jsx)(l,{}),children:[{path:"login",element:(0,a.jsx)(d,{})},{path:"",element:(0,a.jsx)(m,{}),children:[{path:"home",element:(0,a.jsx)(s,{})},{path:"application",element:(0,a.jsx)(h,{}),children:P},{path:"/editor/:id",element:(0,a.jsx)(b,{}),loader:function(){return new Response(JSON.stringify({some:"thing"}),{status:200})}}]}]}]},1197:function(e,n,t){t.d(n,{Z:function(){return m}});var r,i=t(9356),o=t(3835),a=t.n(o),u=t(5849),s=t(9670),c=[function(e){return"get"===e.method?((0,s.Hk)(e.params),(0,s.m9)(e.params)):"post"===e.method&&((0,s.Hk)(e.data),(0,s.m9)(e.data)),e},function(e){return Promise.reject(e)}],l=t(9651),f={timeout:2e4,responseType:"json",headers:{"Content-Type":"application/json"},baseURL:"".concat("http://101.43.11.224:13000","/api/v1")},d=a().create(f);(r=d.interceptors.request).use.apply(r,(0,i.Z)(c)),d.interceptors.request.use((function(e){var n=(0,l.LP)();return e.headers.Authorization="Bearer "+n,e}),(function(e){return Promise.reject(e)})),d.interceptors.response.use((function(e){var n,t;return 200!==(null===(n=e.data)||void 0===n?void 0:n.code)?(e.data.message&&u.Z.error({message:e.data.message}),Promise.reject(e.data.message)):null===(t=e.data)||void 0===t?void 0:t.data}),(function(e){var n;if(401===(null===e||void 0===e||null===(n=e.response)||void 0===n?void 0:n.status))return(0,l.JV)(),window.location.replace("/login"),Promise.reject(e);var t=null===e||void 0===e?void 0:e.response.data;return t&&t.message&&u.Z.error({key:t.message,message:t.message}),Promise.reject(e)}));var m=d},9651:function(e,n,t){t.d(n,{JV:function(){return c},LP:function(){return a},RR:function(){return s},T:function(){return l},qn:function(){return u}});var r=t(5306),i="SLOW_AUTH_TOKEN",o="SLOW_USER";function a(){return localStorage.getItem(i)}function u(){return JSON.parse(localStorage.getItem(o)||"null")}function s(e){var n;n=e.access_token,localStorage.setItem(i,n),function(e){var n=e.user;localStorage.setItem(o,JSON.stringify(n))}(e)}function c(){localStorage.removeItem(i),localStorage.removeItem(o)}function l(){var e=document.getElementById(r.X);null===e||void 0===e||e.contentWindow.postMessage({even:"updateToken",params:a()},"*")}},9670:function(e,n,t){t.d(n,{Hk:function(){return o},Z3:function(){return a},m9:function(){return u}});var r=t(8269),i=t(2498);function o(e){e instanceof Object&&Object.keys(e).forEach((function(n){"string"===typeof e[n]&&(e[n]=e[n].trim())}))}function a(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"id";return e.map((function(e,o){return(0,i.Z)((0,i.Z)({},e),{},(0,r.Z)({},t,Array.isArray(n)?n.reduce((function(n,t){return n+(e[t]||t)}),""):o+1))}))}function u(e){e instanceof Object&&Object.keys(e).forEach((function(n){var t=e[n];(void 0===t||null===t||"string"===typeof t&&""===t.trim())&&delete e[n]}))}}}]);
//# sourceMappingURL=791.378b24db.chunk.js.map