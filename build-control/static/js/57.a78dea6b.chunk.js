"use strict";(self.webpackChunks_low_control=self.webpackChunks_low_control||[]).push([[57],{7181:function(n,e,o){o.r(e),o.d(e,{default:function(){return g}});var r=o(7962),t=o(8655),a=o(5614),i=o(6801);var c=o.p+"static/media/slow-txt.9bc8ae89f858e570e80ead3fdf624849.svg",l=o(2498),s=o(3587),u=o(1889),d=o(3256),f=function(n,e){return s.createElement(d.Z,(0,l.Z)((0,l.Z)({},n),{},{ref:e,icon:u.Z}))};f.displayName="DownOutlined";var m=s.forwardRef(f),p=o(6941),y=o(8318),v=o(6775),h=function(){var n=(0,p.aC)(),e=n.user,o=[{key:"1",label:"\u9000\u51fa\u767b\u5f55",onClick:n.signout}];return(0,v.jsxs)("div",{className:"header h-14 flex justify-between relative z-10 flex-none bg-white overflow-hidden",children:[(0,v.jsx)(y.rU,{to:"/",className:"left-logo h-full flex items-center",children:(0,v.jsx)("img",{src:c,alt:"",className:"inline-block logo"})}),(0,v.jsx)("div",{className:"inline-flex justify-between items-center pr-4 ",children:(0,v.jsx)(i.Z,{menu:{items:o},children:(0,v.jsxs)("span",{className:"color cursor-pointer",children:[(0,v.jsx)("span",{className:"mr-2",children:null===e||void 0===e?void 0:e.userName}),(0,v.jsx)(m,{})]})})})]})},g=function(){var n=(0,a.TH)(),e=(0,a.s0)();return(0,t.useEffect)((function(){"/"===n.pathname&&e("/home")}),[n,e]),(0,v.jsxs)(r.Z,{className:"h-full flex flex-col",children:[(0,v.jsx)(h,{}),(0,v.jsx)(t.Suspense,{children:(0,v.jsx)(a.j3,{})})]})}},3256:function(n,e,o){o.d(e,{Z:function(){return V}});var r=o(2498),t=o(9197),a=o(8269),i=o(4001),c=o(3587),l=o.n(c),s=o(9485),u=o.n(s),d=(0,c.createContext)({}),f=o(5229),m=o(4946),p=o(5597),y=2,v=.16,h=.05,g=.05,C=.15,b=5,x=4,k=[{index:7,opacity:.15},{index:6,opacity:.25},{index:5,opacity:.3},{index:5,opacity:.45},{index:5,opacity:.65},{index:5,opacity:.85},{index:4,opacity:.9},{index:3,opacity:.95},{index:2,opacity:.97},{index:1,opacity:.98}];function w(n){var e=n.r,o=n.g,r=n.b,t=(0,m.py)(e,o,r);return{h:360*t.h,s:t.s,v:t.v}}function Z(n){var e=n.r,o=n.g,r=n.b;return"#".concat((0,m.vq)(e,o,r,!1))}function N(n,e,o){var r;return(r=Math.round(n.h)>=60&&Math.round(n.h)<=240?o?Math.round(n.h)-y*e:Math.round(n.h)+y*e:o?Math.round(n.h)+y*e:Math.round(n.h)-y*e)<0?r+=360:r>=360&&(r-=360),r}function j(n,e,o){return 0===n.h&&0===n.s?n.s:((r=o?n.s-v*e:e===x?n.s+v:n.s+h*e)>1&&(r=1),o&&e===b&&r>.1&&(r=.1),r<.06&&(r=.06),Number(r.toFixed(2)));var r}function E(n,e,o){var r;return(r=o?n.v+g*e:n.v-C*e)>1&&(r=1),Number(r.toFixed(2))}function T(n){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=[],r=(0,p.uA)(n),t=b;t>0;t-=1){var a=w(r),i=Z((0,p.uA)({h:N(a,t,!0),s:j(a,t,!0),v:E(a,t,!0)}));o.push(i)}o.push(Z(r));for(var c=1;c<=x;c+=1){var l=w(r),s=Z((0,p.uA)({h:N(l,c),s:j(l,c),v:E(l,c)}));o.push(s)}return"dark"===e.theme?k.map((function(n){var r=n.index,t=n.opacity;return Z(function(n,e,o){var r=o/100;return{r:(e.r-n.r)*r+n.r,g:(e.g-n.g)*r+n.g,b:(e.b-n.b)*r+n.b}}((0,p.uA)(e.backgroundColor||"#141414"),(0,p.uA)(o[r]),100*t))})):o}var A={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1890FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},F={},D={};Object.keys(A).forEach((function(n){F[n]=T(A[n]),F[n].primary=F[n][5],D[n]=T(A[n],{theme:"dark",backgroundColor:"#141414"}),D[n].primary=D[n][5]}));F.red,F.volcano,F.gold,F.orange,F.yellow,F.lime,F.green,F.cyan,F.blue,F.geekblue,F.purple,F.magenta,F.grey;var M=o(1551),I=o(6156);function _(n){return"object"===(0,f.Z)(n)&&"string"===typeof n.name&&"string"===typeof n.theme&&("object"===(0,f.Z)(n.icon)||"function"===typeof n.icon)}function z(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(n).reduce((function(e,o){var r=n[o];if("class"===o)e.className=r,delete e.class;else e[o]=r;return e}),{})}function B(n,e,o){return o?l().createElement(n.tag,(0,r.Z)((0,r.Z)({key:e},z(n.attrs)),o),(n.children||[]).map((function(o,r){return B(o,"".concat(e,"-").concat(n.tag,"-").concat(r))}))):l().createElement(n.tag,(0,r.Z)({key:e},z(n.attrs)),(n.children||[]).map((function(o,r){return B(o,"".concat(e,"-").concat(n.tag,"-").concat(r))})))}function H(n){return T(n)[0]}function O(n){return n?Array.isArray(n)?n:[n]:[]}var R=["icon","className","onClick","style","primaryColor","secondaryColor"],S={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};var q=function(n){var e,o,t=n.icon,a=n.className,l=n.onClick,s=n.style,u=n.primaryColor,f=n.secondaryColor,m=(0,i.Z)(n,R),p=S;if(u&&(p={primaryColor:u,secondaryColor:f||H(u)}),function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n",e=(0,c.useContext)(d).csp;(0,c.useEffect)((function(){(0,I.hq)(n,"@ant-design-icons",{prepend:!0,csp:e})}),[])}(),e=_(t),o="icon should be icon definiton, but got ".concat(t),(0,M.ZP)(e,"[@ant-design/icons] ".concat(o)),!_(t))return null;var y=t;return y&&"function"===typeof y.icon&&(y=(0,r.Z)((0,r.Z)({},y),{},{icon:y.icon(p.primaryColor,p.secondaryColor)})),B(y.icon,"svg-".concat(y.name),(0,r.Z)({className:a,onClick:l,style:s,"data-icon":y.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},m))};q.displayName="IconReact",q.getTwoToneColors=function(){return(0,r.Z)({},S)},q.setTwoToneColors=function(n){var e=n.primaryColor,o=n.secondaryColor;S.primaryColor=e,S.secondaryColor=o||H(e),S.calculated=!!o};var P=q;function G(n){var e=O(n),o=(0,t.Z)(e,2),r=o[0],a=o[1];return P.setTwoToneColors({primaryColor:r,secondaryColor:a})}var L=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];G("#1890ff");var U=c.forwardRef((function(n,e){var o,l=n.className,s=n.icon,f=n.spin,m=n.rotate,p=n.tabIndex,y=n.onClick,v=n.twoToneColor,h=(0,i.Z)(n,L),g=c.useContext(d),C=g.prefixCls,b=void 0===C?"anticon":C,x=g.rootClassName,k=u()(x,b,(o={},(0,a.Z)(o,"".concat(b,"-").concat(s.name),!!s.name),(0,a.Z)(o,"".concat(b,"-spin"),!!f||"loading"===s.name),o),l),w=p;void 0===w&&y&&(w=-1);var Z=m?{msTransform:"rotate(".concat(m,"deg)"),transform:"rotate(".concat(m,"deg)")}:void 0,N=O(v),j=(0,t.Z)(N,2),E=j[0],T=j[1];return c.createElement("span",(0,r.Z)((0,r.Z)({role:"img","aria-label":s.name},h),{},{ref:e,tabIndex:w,onClick:y,className:k}),c.createElement(P,{icon:s,primaryColor:E,secondaryColor:T,style:Z}))}));U.displayName="AntdIcon",U.getTwoToneColor=function(){var n=P.getTwoToneColors();return n.calculated?[n.primaryColor,n.secondaryColor]:n.primaryColor},U.setTwoToneColor=G;var V=U},1693:function(n,e,o){var r=o(9197),t=o(9602),a=o(906);e.Z=function(){var n=t.useState(!1),e=(0,r.Z)(n,2),o=e[0],i=e[1];return t.useEffect((function(){i((0,a.fk)())}),[]),o}},906:function(n,e,o){o.d(e,{fk:function(){return i},jD:function(){return a}});var r,t=o(8847),a=function(){return(0,t.Z)()&&window.document.documentElement},i=function(){if(!a())return!1;if(void 0!==r)return r;var n=document.createElement("div");return n.style.display="flex",n.style.flexDirection="column",n.style.rowGap="1px",n.appendChild(document.createElement("div")),n.appendChild(document.createElement("div")),document.body.appendChild(n),r=1===n.scrollHeight,document.body.removeChild(n),r}},7962:function(n,e,o){var r=o(9934),t=o(1468),a=r.ZP;a.Header=r.h4,a.Footer=r.$_,a.Content=r.VY,a.Sider=t.Z,e.Z=a}}]);
//# sourceMappingURL=57.a78dea6b.chunk.js.map