"use strict";(self.webpackChunks_low_control=self.webpackChunks_low_control||[]).push([[460],{1070:function(e,n,t){t.r(n),t.d(n,{default:function(){return Pe}});var r=t(2498),i=t(447),c=t(7582);function o(e,n){if(!1===n(e))return!1;if(Array.isArray(null===e||void 0===e?void 0:e.children))for(var t=e.children.length-1;t>=0;t--)if(!o(e.children[t],n))return!1;return!0}var s=t(9651),a={id:"root",props:{},type:"",children:[]},d=c.V5.model("EditStore",{refreshId:c.V5.optional(c.V5.number,0),rightRefreshId:c.V5.optional(c.V5.number,0)}).volatile((function(){return{codeTree:a,selectId:"",isDragging:!1,iframeRef:{current:null},selectedComp:{},project:{},isChildInit:!1}})).views((function(e){return{get rootCode(){return e.codeTree}}})).actions((function(e){return{setProject:function(n){e.project=n},setCodeTree:function(n){e.codeTree=n},setIsDragging:function(n){e.isDragging=n},refresh:function(){e.refreshId+=1},refreshRight:function(){e.rightRefreshId+=1},setSelectId:function(n){e.selectId=n,e.updateSelectedComp()},updateSelectedComp:function(){o(e.codeTree,(function(n){return n.id!==e.selectId||(e.setSelectedComp(n),!1)}))},setSelectedComp:function(n){e.selectedComp=n},setIframeRef:function(n){e.iframeRef=n},updateSelected:function(n){var t=n.key,i=n.value;o(e.codeTree,(function(n){return n.id!==e.selectId||(n.props[t]=i,e.setSelectedComp((0,r.Z)({},n)),!1)})),e.postMessageIframe()},removeCom:function(n,t){o(e.codeTree,(function(e){return e.id!==n||(e.children.splice(t,1),!1)})),e.postMessageIframe()},postMessageIframe:function(){var n;null===(n=e.iframeRef.current)||void 0===n||n.contentWindow.postMessage({even:"updateCodeTree",params:e.codeTree},"*")},initIframe:function(){e.codeTree.children.length&&e.isChildInit&&this.postMessageIframe()},getChildMessage:function(n){var t=n.data;if("preview-init-success"===(void 0===t?{}:t).type)e.isChildInit=!0,(0,s.T)(),e.initIframe()},afterCreate:function(){},beforeDestroy:function(){}}})),u=t(4855),l=t(2453),f=t(8655),p=t(426),h=t(933),m=t(9197),v=t(8333),x="CARD",j=t(9485),g=t.n(j),y=t(6775);var C=(0,i.f3)("edit")((0,i.Pi)((function(e){var n=e.data,t=e.edit.setIsDragging,r=(0,v.c)((function(){return{type:x,item:{data:n},collect:function(e){var n=e.isDragging();return t(n),{isDragging:n}},end:function(){}}})),i=(0,m.Z)(r,2),c=i[0].isDragging,o=i[1];return(0,y.jsxs)("div",{ref:o,className:g()("p-2 text-center text-gray-600 cursor-move hover:bg-gray-100  hover:text-gray-900",{"opacity-50":c}),children:[(0,y.jsx)("div",{className:"mb-2",children:(0,y.jsx)("span",{className:"iconfont ".concat(n.iconfont)})}),(0,y.jsx)("div",{children:n.name})]})})));var Z=function(e){var n=e.data;return(0,y.jsx)("div",{className:"py-4 px-4",children:(0,y.jsx)(p.Z,{gutter:15,children:n.map((function(e){return(0,y.jsx)(h.Z,{span:12,children:(0,y.jsx)(C,{data:e})},e.type)}))})})},w=t(7208),b=t.n(w),N=[{key:"base",panel:(0,y.jsx)(Z,{data:b()})}],_=t(5767),I=function(e){var n=e.children;return(0,y.jsx)("span",{className:"border-solid border-l-0 border-t-0 border-r-0 border-b-2 border-sky-500 pb-1",children:n})},k=!1,P=t(6205);var T=t(3471);var D=function(){var e=(0,f.useRef)([]),n=(0,T.Z)();return(0,f.useEffect)((function(){return(0,_.CX)().then((function(t){Array.isArray(t.data)&&t.data.forEach((function(i){(function(e){var n=e.path,t=e.name;return new Promise((function(e,r){(0,P.importRemote)({url:k?"http://110.42.188.221:11000":"".concat("http://110.42.188.221:11000","/").concat(n),scope:t,module:"./fields"}).then((function(n){e(n.default)})).catch((function(e){r(e)}))}))})(i).then((function(c){-1===e.current.findIndex((function(e){return e.name===c.name}))&&(e.current.push((0,r.Z)((0,r.Z)({},c),{},{remote:i})),e.current.length===t.data.length&&n())}))}))})),function(){e.current=[]}}),[]),(0,y.jsx)("div",{style:{width:221},children:(0,y.jsxs)("div",{children:[(0,y.jsx)("div",{className:"text-center mt-6 text-base ",children:(0,y.jsx)(I,{children:"\u672c\u5730\u7ec4\u4ef6"})}),N.map((function(e){return(0,y.jsx)(f.Fragment,{children:e.panel},e.key)})),(0,y.jsx)("div",{className:"text-center mt-6 text-base ",children:(0,y.jsx)(I,{children:"\u8fdc\u7a0b\u7ec4\u4ef6"})}),(0,y.jsx)(Z,{data:e.current})]})})},S=t(4001),E=t(3152);var R={Input:function(e){var n=e.onChange,t=e.value;return(0,y.jsx)(E.Z,{value:t,onChange:function(e){return n(e.target.value)}})},title:""},O=t(4392),A=t.n(O),M=(0,r.Z)({},A()),L="EditTitle_wrapLabel__3a7FK",W=function(e){var n=e.name;return(0,y.jsx)("div",{className:L,children:(0,y.jsx)("span",{children:n})})},V=t(9450),X=["key","name","type"];var z=(0,i.f3)("edit")((0,i.Pi)((function(e){var n=e.edit,t=n.selectedComp,i=n.updateSelected,c=n.setCodeTree,o=n.setSelectId,s=(0,f.useRef)({}),a=(0,T.Z)(),d=M[t.type]||s.current[t.type]||{},u=d.list,l=void 0===u?[]:u,p=d.subLabelWidth,h=void 0===p?70:p;(0,f.useEffect)((function(){var e=t.remote;(0,V.Z)(e)&&function(e){var n=e.path,t=e.name;return new Promise((function(e,r){(0,P.importRemote)({url:k?"http://110.42.188.221:11000":"".concat("http://110.42.188.221:11000","/").concat(n),scope:t,module:"./edit"}).then((function(n){e(n.default)})).catch((function(e){r(e)}))}))}(e).then((function(e){s.current[t.type]||(s.current[t.type]=e,a())}))}),[t]),(0,f.useEffect)((function(){return window.addEventListener("message",v),function(){window.removeEventListener("message",v)}}),[]);var m=function(e){var n=e.key,i=(e.name,e.type),c=(0,S.Z)(e,X),o=R[i];return(0,y.jsx)(o,(0,r.Z)((0,r.Z)({},c),{},{value:null===t||void 0===t?void 0:t.props[n],onChange:function(e){return x(n,e)}}))};function v(e){var n=e.data,t=void 0===n?{}:n,r=t.type,i=t.params;if(i)switch(r){case"updateCodeTree":c(i);break;case"selectId":o(i)}}function x(e,n){i({key:e,value:n})}return(0,y.jsxs)("div",{className:"w-80 overflow-y-scroll",children:[(0,y.jsx)("div",{className:"leading-6 text-center font-medium border-b py-4",children:"\u5c5e\u6027\u8bbe\u7f6e"}),(0,y.jsx)(f.Suspense,{children:(0,y.jsx)("div",{className:"text-xs",children:t.type&&function e(n){return n.map((function(n){var i=n.key,c=n.name,o=n.children,s=n.type,a=n.component;switch(s){case"title":return(0,y.jsxs)("div",{children:[(0,y.jsx)(W,(0,r.Z)({},n),i),(0,y.jsx)("div",{className:"px-4 py-5",children:Array.isArray(o)&&e(o)})]},i);case"custom":return(0,y.jsxs)("div",{className:"flex items-center mb-2",children:[(0,y.jsx)("div",{style:{width:h},children:c}),(0,y.jsx)("div",{className:"ml-2 flex-1",children:a?(0,y.jsx)(a,(0,r.Z)((0,r.Z)({},n),{},{value:null===t||void 0===t?void 0:t.props[i],onChange:function(e){return x(i,e)}})):m(n)})]},i);default:return(0,y.jsxs)("div",{className:"flex items-center mb-2",children:[(0,y.jsx)("div",{style:{width:h},children:c}),(0,y.jsx)("div",{className:"ml-2 flex-1",children:m(n)})]},i)}}))}(l)})})]})}))),F="PhoneContainer_ctn__vOgrZ",G="PhoneContainer_ctnHead__331WG",J="PhoneContainer_ctnBody__TscrG",K="PhoneContainer_ctnHeightTag__TcAD-";var B=function(e){var n=e.children;return(0,y.jsxs)("div",{className:F,children:[(0,y.jsx)("div",{className:G}),(0,y.jsx)("div",{className:J,children:n}),(0,y.jsx)("div",{className:K,children:(0,y.jsx)("span",{children:"iPhone 8\u624b\u673a\u9ad8\u5ea6"})})]})},H=t(5306),U=t(9451),Y="CenterCanvasIframe_phoneBody__rxKNn",$="CenterCanvasIframe_iframe__Z2MvK",q="CenterCanvasIframe_pageLayer__1mCOC",Q="FloatTab_floatTab__d7sG6",ee=function(e){var n=e.name,t=e.isSelected,r=e.onDelete;return(0,y.jsx)("div",{className:g()("absolute",Q),children:t?(0,y.jsx)("span",{onClick:r,className:"iconfont slow-shanchusekuai cursor-pointer text-gray-400 hover:text-gray-500\n"}):(0,y.jsx)("span",{children:n})})},ne=(0,i.f3)("edit")((0,i.Pi)((function(e){var n=e.edit,t=e.drop,r=n.isDragging,i=n.codeTree,c=n.selectId,o=n.removeCom,s=i.children,a=void 0===s?[]:s;return(0,y.jsx)("div",{ref:t,className:q,style:{zIndex:r?20:1},children:a.map((function(e,n){return(0,y.jsx)("div",{className:"relative",style:{height:e.height||0},children:(0,y.jsx)(ee,{isSelected:c===e.id,name:e.name,onDelete:function(){return o(i.id,n)}})},e.id)}))})})));var te=(0,i.f3)("edit")((0,i.Pi)((function(e){var n=e.edit.setIframeRef,t=(0,f.useRef)(null);(0,f.useEffect)((function(){n(t)}),[]);var r=(0,U.L)((function(){return{accept:x,drop:function(e,n){if(!n.didDrop())return t.current.contentWindow.postMessage({even:"move",params:e},"*"),{}},collect:function(e){return{isOver:e.isOver({shallow:!0}),canDrop:e.canDrop(),item:e.getItem()}}}})),i=(0,m.Z)(r,2),c=i[0],o=(c.isOver,c.canDrop,c.item,i[1]);return(0,y.jsx)("div",{className:"flex-1 p-4 overflow-y-scroll bg-indigo-50",children:(0,y.jsx)(B,{children:(0,y.jsxs)("div",{className:Y,children:[(0,y.jsx)("iframe",{ref:t,src:"http://110.42.188.221:11002",className:$,id:H.X}),(0,y.jsx)(ne,{drop:o})]})})})}))),re=t(5614),ie=t(7037),ce=t(9534),oe=(0,i.f3)("edit")((0,i.Pi)((function(e){var n=e.edit.project,t=(0,re.s0)();return(0,y.jsxs)("div",{className:"inline-flex justify-between items-center h-full pl-6",children:[(0,y.jsx)(ce.Z,{className:"cursor-pointer color",onClick:function(){t(-1)}}),(0,y.jsx)("span",{className:"ml-2",children:null===n||void 0===n?void 0:n.name})]})}))),se=t(2817),ae=t(4604),de=(0,i.f3)("edit")((0,i.Pi)((function(e){var n=e.edit.project.id;return(0,y.jsx)(ae.ZP,{onClick:function(){window.open("".concat("http://110.42.188.221:11002","/preview/").concat(n))},children:"\u5728\u7ebf\u5730\u5740"})}))),ue=t(4172),le="Preview_iframe__nUsLI",fe="Preview_box__3rAT0";var pe=(0,i.f3)("edit")((0,i.Pi)((function(e){var n=e.edit.project.id,t=(0,f.useRef)(null);return(0,y.jsx)("iframe",{ref:t,src:"".concat("http://110.42.188.221:11002","/preview/").concat(n),className:le})})));var he=function(e){var n=e.className,t=(0,f.useState)(),r=(0,m.Z)(t,2),i=r[0],c=r[1];return(0,y.jsxs)("div",{className:n,children:[(0,y.jsx)(ae.ZP,{type:"primary",onClick:function(){c(!0)},children:"\u9884\u89c8"}),(0,y.jsx)(ue.Z,{width:423,open:i,destroyOnClose:!0,onCancel:function(){return c(!1)},footer:null,children:(0,y.jsx)("div",{className:g()(fe,"mt-10"),children:(0,y.jsx)(pe,{})})})]})},me=t(776),ve=(0,i.f3)("edit")((0,i.Pi)((function(e){var n=e.edit,t=n.codeTree,i=n.project;return(0,y.jsx)(ae.ZP,{type:"primary",onClick:function(){(0,ie.YD)((0,r.Z)((0,r.Z)({},i),{},{code:JSON.stringify(t.children)})).then((function(){me.Z.success({message:"\u4fdd\u5b58\u6210\u529f"})}))},children:"\u4fdd\u5b58"})}))),xe=t(9530),je=(t(7930),t(1594),t(8733),t(9356)),ge=t(7735),ye=t(6657),Ce=t(7083),Ze=function(e){var n={};var t=function e(t){t.module&&(n[t.module]&&-1===n[t.module].indexOf(t.type)&&(n[t.module]=[].concat((0,je.Z)(n[t.module]),[t.type])),n[t.module]||(n[t.module]=[t.type]));var r="";t.props&&Object.keys(t.props).forEach((function(e){if("children"!==e&&t.props[e]){var n=(0,ye.Z)(t.props[e])?"{".concat(JSON.stringify(t.props[e]),"}"):"'".concat(t.props[e],"'");r="".concat(r," ").concat(e,"=").concat(n)}}));var i=t.children&&t.children.length>0?(0,Ce.Z)(t.children,e).join(""):function(e){return(0,ge.Z)(e.props.children)?e.props.children:""}(t);return i?"<".concat(t.type||"").concat(r,">\n        ").concat(i,"\n      </").concat(t.type||"",">"):"<".concat(t.type||"div").concat(r," />")}(e),r="";return Object.keys(n).forEach((function(e){r+="import {".concat(n[e].join(","),"} from '").concat(e,"';")})),"import React from 'react';\n  ".concat(r,"\n\n  function App() {\n      return (\n          ").concat(t,"\n      );\n  }\n\n  export default App;")},we=new Worker("/worker.js");var be=(0,i.f3)("edit")((0,i.Pi)((function(e){var n=e.edit,t=(0,f.useState)(""),r=(0,m.Z)(t,2),i=r[0],c=r[1];return(0,f.useEffect)((function(){we.onmessage=function(e){c(e.data)}}),[]),(0,f.useEffect)((function(){var e=Ze(n.codeTree);we.postMessage(e)}),[n.codeTree]),(0,y.jsx)("div",{children:(0,y.jsx)(xe.ZP,{style:{width:"100%"},mode:"javascript",theme:"monokai",name:"code",height:"560px",fontSize:16,editorProps:{$blockScrolling:!0},value:i,readOnly:!0})})})));var Ne=function(){var e=(0,f.useState)(),n=(0,m.Z)(e,2),t=n[0],r=n[1];return(0,y.jsxs)("div",{children:[(0,y.jsx)(ae.ZP,{onClick:function(){r(!0)},children:"Code"}),(0,y.jsx)(ue.Z,{title:"\u4ee3\u7801\u9884\u89c8",width:800,open:t,destroyOnClose:!0,onCancel:function(){return r(!1)},footer:null,children:(0,y.jsx)(be,{})})]})},_e=function(){return(0,y.jsx)("div",{className:"inline-flex justify-between items-center",children:(0,y.jsxs)(se.Z,{children:[(0,y.jsx)(he,{}),(0,y.jsx)(Ne,{}),(0,y.jsx)(ve,{}),(0,y.jsx)(de,{})]})})},Ie=function(){return(0,y.jsxs)("header",{className:"h-10 pr-3 shadow-sm sticky border-b border-gray-200 flex-shrink-0  flex justify-between items-center",children:[(0,y.jsx)(oe,{}),(0,y.jsx)(_e,{})]})},ke=d.create();var Pe=function(){var e=(0,re.UO)().id;return(0,f.useEffect)((function(){return window.addEventListener("message",ke.getChildMessage),function(){window.removeEventListener("message",ke.getChildMessage)}}),[]),(0,f.useEffect)((function(){e&&(0,ie.e5)(e).then((function(e){var n=ke.codeTree,t=ke.setProject,i=ke.setCodeTree,c=ke.initIframe;t(e),n.children=JSON.parse(e.code||"[]"),i((0,r.Z)({},n)),c()}))}),[e]),(0,y.jsx)(l.W,{backend:u.PD,children:(0,y.jsx)(i.zt,{edit:ke,children:(0,y.jsxs)("div",{className:"flex flex-1 overflow-hidden flex-col text-gray-600 bg-white",children:[(0,y.jsx)(Ie,{}),(0,y.jsxs)("main",{className:"flex-1 overflow-hidden flex",children:[(0,y.jsx)(D,{}),(0,y.jsx)(te,{}),(0,y.jsx)(z,{})]})]})})})}},7037:function(e,n,t){t.d(n,{$L:function(){return o},YD:function(){return a},e5:function(){return c},ku:function(){return i},ty:function(){return s}});var r=t(1197);function i(e){return r.Z.get("/project",{params:e})}function c(e){return r.Z.get("/project/".concat(e))}function o(e){return r.Z.post("/project",e)}function s(e){return r.Z.patch("/project/".concat(e.id),e)}function a(e){return r.Z.patch("/project/code/".concat(e.id),e)}},5767:function(e,n,t){t.d(n,{A8:function(){return s},CX:function(){return c},DX:function(){return i},X3:function(){return o}});var r=t(1197);function i(e){return r.Z.get("/remote-comp",{params:e})}function c(){return r.Z.get("/remote-comp/all")}function o(e){return r.Z.post("/remote-comp",e)}function s(e,n){return r.Z.patch("/remote-comp".concat(n?"/".concat(n):""),e)}}}]);
//# sourceMappingURL=460.c14a1d46.chunk.js.map