"use strict";(self.webpackChunks_low_control=self.webpackChunks_low_control||[]).push([[189],{9816:function(e,n,o){o.r(n),o.d(n,{default:function(){return ne}});var t=o(8655),r=o.n(t),a=(o(7451),o(1469)),i=o(8663),l=o(3820),c={},s=(0,t.createContext)(c),d=function(){return(0,t.useContext)(s)},u=o(6775),f=function(){var e=d(),n=e.setFilterParams,o=e.getList,t=e.reset,r=e.resetPagination,c=e.openModalHandle,s=e.setModalOption;return(0,u.jsx)(a.Z,{onOk:function(){r(),o()},onCreate:function(){s({initialValues:{itemSourceType:"",role:"",name:"",channelId:""},title:"\u65b0\u589e",type:"add"}),c()},onReset:function(){t()},onValuesChange:function(e,o){n(o)},labelWidth:40,children:(0,u.jsx)(i.Z.Item,{label:"\u540d\u79f0",name:"name",children:(0,u.jsx)(l.Z,{allowClear:!0})})})},p=o(9197),g=o(5849),m=o(9581),h=o(8939),b=o(5290),v=o(419),Z=o(2498),x=o(2736),C=o(7556),y=function(e){var n=(0,t.useState)([]),o=(0,p.Z)(n,2),r=o[0],a=o[1],i=(0,t.useMemo)((function(){return{onRemove:function(e){var n=r.indexOf(e),o=r.slice();o.splice(n,1),a(o)},beforeUpload:function(e){return a([e]),!1},fileList:r}}),[r]);return(0,u.jsx)(x.Z,(0,Z.Z)((0,Z.Z)((0,Z.Z)({},i),e),{},{children:(0,u.jsx)(b.ZP,{icon:(0,u.jsx)(C.Z,{}),children:"\u70b9\u51fb\u4e0a\u4f20"})}))},j=o(5767),k=(0,v.observer)((function(){var e,n,o=d(),a=o.modalDialogRef,c=o.modalOption,s=o.getList,f=(0,t.useState)(!1),v=(0,p.Z)(f,2),Z=v[0],x=v[1],C="detail"===c.type,k=i.Z.useForm(),S=(0,p.Z)(k,1)[0],O=(0,t.useState)(!1),P=(0,p.Z)(O,2),w=P[0],N=P[1];function z(){S.resetFields(),a.current.close()}return(0,t.useEffect)((function(){a.current={open:function(){return x(!0)},close:function(){return x(!1)}}}),[]),r().useEffect((function(){var e,n;Z&&S.setFieldsValue({name:null===(e=c.initialValues)||void 0===e?void 0:e.name,zhName:null===(n=c.initialValues)||void 0===n?void 0:n.zhName})}),[Z,null===(e=c.initialValues)||void 0===e?void 0:e.name,null===(n=c.initialValues)||void 0===n?void 0:n.zhName,S]),(0,u.jsx)(m.Z,{title:c.title,open:Z,footer:null,onCancel:z,children:(0,u.jsxs)(i.Z,{form:S,onFinish:function(e){var n,o="add"===c.type,t=new FormData;o?(t.append("name",e.name),t.append("zhName",e.zhName),t.append("version",e.version),t.append("file",e.file.file)):(t.append("version",e.version),t.append("file",e.file.file)),(o?j.X3:j.A8)(t,null===(n=c.initialValues)||void 0===n?void 0:n.id).then((function(){g.Z.success({message:"".concat(c.title,"\u6210\u529f\uff01")}),z(),s()})).finally((function(){N(!1)}))},className:"mt-5",labelCol:{flex:"0 0 110px"},children:[(0,u.jsx)(i.Z.Item,{label:"\u7ec4\u4ef6\u540d(\u82f1\u6587)",name:"name",rules:[{required:!0,message:"\u8bf7\u8f93\u5165"}],children:(0,u.jsx)(l.Z,{disabled:C})}),(0,u.jsx)(i.Z.Item,{label:"\u7ec4\u4ef6\u540d(\u4e2d\u6587)",name:"zhName",rules:[{required:!0,message:"\u8bf7\u8f93\u5165"}],children:(0,u.jsx)(l.Z,{disabled:C})}),(0,u.jsx)(i.Z.Item,{label:"\u7248\u672c\u53f7",name:"version",rules:[{required:!0,message:"\u8bf7\u8f93\u5165"}],children:(0,u.jsx)(l.Z,{disabled:C})}),(0,u.jsx)(i.Z.Item,{label:"\u6253\u5305\u7ec4\u4ef6",name:"file",rules:[{required:!0,message:"\u8bf7\u8f93\u5165"}],children:(0,u.jsx)(y,{})}),"detail"!==c.type&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(h.Z,{className:"mt-10"}),(0,u.jsxs)("div",{className:"flex justify-end",children:[(0,u.jsx)(b.ZP,{onClick:z,className:"mr-3",children:"\u53d6\u6d88"}),(0,u.jsx)(b.ZP,{type:"primary",htmlType:"submit",loading:w,children:"\u786e\u5b9a"})]})]})]})})})),S=o(9182),O=o(9221),P=o(8082),w=new((0,S.Z)((function e(){var n=this;(0,O.Z)(this,e),this.filterParams=void 0,this.modalShow=void 0,this.pagination=void 0,this.modalOption=void 0,this.list={pending:!1,success:!1,error:!1,data:[]},this.modalDialogRef={current:null},this.openModalHandle=function(){n.modalShow=!0,n.modalDialogRef.current.open()},this.closeModalHandle=function(){n.modalShow=!1},this.setFilterParams=function(e){n.filterParams=e},this.getList=function(){n.list.pending=!0,(0,j.DX)((0,Z.Z)((0,Z.Z)({},n.filterParams),{},{pageSize:n.pagination.pageSize,pageNo:n.pagination.current})).then((function(e){n.list={data:e.data,pending:!1,success:!0,error:!1},n.pagination=(0,Z.Z)((0,Z.Z)({},n.pagination),{},{total:e.totalSize})})).catch((function(){n.list.error=!0,n.list.pending=!1}))},this.resetPagination=function(){n.pagination.current=1},this.reset=function(){n.filterParams={},n.resetPagination(),n.getList()},this.setModalOption=function(e){n.modalOption=e},this.onTableChange=function(e){n.pagination=(0,Z.Z)((0,Z.Z)({},n.pagination),{},{current:e.current}),n.getList()},(0,P.ky)(this),this.modalShow=!1,this.filterParams={},this.modalOption={},this.pagination={current:1,pageSize:10,total:0}}))),N=(o(5625),o(1579)),z=o(8269),I=o(1345),E=o(9485),T=o.n(E),M=o(9602),F=o(5798),H=o(2231),L=o(9504);var V=o(686),B=o(7287),D=o(1835),R=o(6709),X=function(e,n,o){var t,r="string"!==typeof(t=o)?t:t.charAt(0).toUpperCase()+t.slice(1);return(0,z.Z)({},"".concat(e.componentCls,"-").concat(n),(0,z.Z)({color:e["color".concat(o)],background:e["color".concat(r,"Bg")],borderColor:e["color".concat(r,"Border")]},"&".concat(e.componentCls,"-borderless"),{borderColor:"transparent"}))},W=function(e){return(0,B.Z)(e,(function(n,o){var t=o.textColor,r=o.lightBorderColor,a=o.lightColor,i=o.darkColor;return(0,z.Z)({},"".concat(e.componentCls,"-").concat(n),(0,z.Z)({color:t,background:a,borderColor:r,"&-inverse":{color:e.colorTextLightSolid,background:i,borderColor:i}},"&".concat(e.componentCls,"-borderless"),{borderColor:"transparent"}))}))},_=function(e){var n,o,t,r=e.paddingXXS,a=e.lineWidth,i=e.tagPaddingHorizontal,l=e.componentCls,c=i-a,s=r-a;return t={},(0,z.Z)(t,l,Object.assign(Object.assign({},(0,V.Wf)(e)),(o={display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:c,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:"".concat(e.lineWidth,"px ").concat(e.lineType," ").concat(e.colorBorder),borderRadius:e.borderRadiusSM,opacity:1,transition:"all ".concat(e.motionDurationMid),textAlign:"start"},(0,z.Z)(o,"&".concat(l,"-rtl"),{direction:"rtl"}),(0,z.Z)(o,"&, a, a:hover",{color:e.defaultColor}),(0,z.Z)(o,"".concat(l,"-close-icon"),{marginInlineStart:s,color:e.colorTextDescription,fontSize:e.tagIconSize,cursor:"pointer",transition:"all ".concat(e.motionDurationMid),"&:hover":{color:e.colorTextHeading}}),(0,z.Z)(o,"&".concat(l,"-has-color"),(0,z.Z)({borderColor:"transparent"},"&, a, a:hover, ".concat(e.iconCls,"-close, ").concat(e.iconCls,"-close:hover"),{color:e.colorTextLightSolid})),(0,z.Z)(o,"&-checkable",(n={backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer"},(0,z.Z)(n,"&:not(".concat(l,"-checkable-checked):hover"),{color:e.colorPrimary,backgroundColor:e.colorFillSecondary}),(0,z.Z)(n,"&:active, &-checked",{color:e.colorTextLightSolid}),(0,z.Z)(n,"&-checked",{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}}),(0,z.Z)(n,"&:active",{backgroundColor:e.colorPrimaryActive}),n)),(0,z.Z)(o,"&-hidden",{display:"none"}),(0,z.Z)(o,"> ".concat(e.iconCls," + span, > span + ").concat(e.iconCls),{marginInlineStart:c}),o))),(0,z.Z)(t,"".concat(l,"-borderless"),{borderColor:"transparent",background:e.tagBorderlessBg}),t},A=(0,D.Z)("Tag",(function(e){var n=e.lineWidth,o=e.fontSizeIcon,t=e.fontSizeSM,r="".concat(e.lineHeightSM*t,"px"),a=(0,R.TS)(e,{tagFontSize:t,tagLineHeight:r,tagIconSize:o-2*n,tagPaddingHorizontal:8,tagBorderlessBg:e.colorFillTertiary});return[_(a),W(a),X(a,"success","Success"),X(a,"processing","Info"),X(a,"error","Error"),X(a,"warning","Warning")]}),(function(e){return{defaultBg:e.colorFillQuaternary,defaultColor:e.colorText}})),q=function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(o[t[r]]=e[t[r]])}return o},U=function(e){var n,o=e.prefixCls,t=e.className,r=e.checked,a=e.onChange,i=e.onClick,l=q(e,["prefixCls","className","checked","onChange","onClick"]),c=(0,M.useContext(L.E_).getPrefixCls)("tag",o),s=A(c),d=(0,p.Z)(s,2),u=d[0],f=d[1],g=T()(c,(n={},(0,z.Z)(n,"".concat(c,"-checkable"),!0),(0,z.Z)(n,"".concat(c,"-checkable-checked"),r),n),t,f);return u(M.createElement("span",Object.assign({},l,{className:g,onClick:function(e){null===a||void 0===a||a(!r),null===i||void 0===i||i(e)}})))},K=function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(o[t[r]]=e[t[r]])}return o},Q=function(e,n){var o,t=e.prefixCls,r=e.className,a=e.rootClassName,i=e.style,l=e.children,c=e.icon,s=e.color,d=e.onClose,u=e.closeIcon,f=e.closable,g=void 0!==f&&f,m=e.bordered,h=void 0===m||m,b=K(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","closeIcon","closable","bordered"]),v=M.useContext(L.E_),Z=v.getPrefixCls,x=v.direction,C=M.useState(!0),y=(0,p.Z)(C,2),j=y[0],k=y[1];M.useEffect((function(){"visible"in b&&k(b.visible)}),[b.visible]);var S=(0,F.o2)(s)||(0,F.yT)(s),O=Object.assign({backgroundColor:s&&!S?s:void 0},i),P=Z("tag",t),w=A(P),N=(0,p.Z)(w,2),E=N[0],V=N[1],B=T()(P,(o={},(0,z.Z)(o,"".concat(P,"-").concat(s),S),(0,z.Z)(o,"".concat(P,"-has-color"),s&&!S),(0,z.Z)(o,"".concat(P,"-hidden"),!j),(0,z.Z)(o,"".concat(P,"-rtl"),"rtl"===x),(0,z.Z)(o,"".concat(P,"-borderless"),!h),o),r,a,V),D=function(e){e.stopPropagation(),null===d||void 0===d||d(e),e.defaultPrevented||k(!1)},R=M.useMemo((function(){return g?u?M.createElement("span",{className:"".concat(P,"-close-icon"),onClick:D},u):M.createElement(I.Z,{className:"".concat(P,"-close-icon"),onClick:D}):null}),[g,u,P,D]),X="function"===typeof b.onClick||l&&"a"===l.type,W=c||null,_=W?M.createElement(M.Fragment,null,W,M.createElement("span",null,l)):l,q=M.createElement("span",Object.assign({},b,{ref:n,className:B,style:O}),_,R);return E(X?M.createElement(H.Z,null,q):q)},G=M.forwardRef(Q);G.CheckableTag=U;var J=G,Y=o(9770),$=["magenta","red","volcano","orange","gold","lime","green","cyan","blue","geekblue","purple","pink","#ff461f","#bce672","#eaff56","#3eede7","#afdd22","#425066","#8d4bbb","#0c8918","#e4c6d0","#789262","#896c39","#955539","#60281e","#392f41"],ee=(0,v.observer)((function(){var e=d(),n=e.pagination,o=e.list,r=e.getList,a=e.onTableChange,i=e.setModalOption,l=e.openModalHandle,c=[{title:"\u4e2d\u6587\u540d",dataIndex:"zhName",key:"zhName"},{title:"\u540d\u79f0",dataIndex:"name",key:"name"},{title:"\u7248\u672c",dataIndex:"versions",key:"versions",render:function(e){return(0,u.jsx)(u.Fragment,{children:e.map((function(e){return(0,u.jsx)(J,{color:$[Math.floor(Math.random()*$.length)],children:e.version},e.version)}))})}},{title:"\u5f53\u524d\u7248\u672c",dataIndex:"currentVersion",key:"currentVersion"},{title:"\u64cd\u4f5c",fixed:"right",width:100,render:function(e){var n=[{type:"text",text:"\u65b0\u589e\u7248\u672c",onClick:function(){i({initialValues:e,title:"\u65b0\u589e\u7248\u672c",type:"edit"}),l()}}];return(0,u.jsx)(N.Z,{columns:n})}}];return(0,t.useEffect)((function(){r()}),[]),(0,u.jsx)(Y.Z,{scroll:{x:"max-content"},style:{marginTop:16},dataSource:o.data,columns:c,rowKey:"id",loading:o.pending,pagination:(0,Z.Z)((0,Z.Z)({},n),{},{hideOnSinglePage:!1}),onChange:a})})),ne=function(){return(0,u.jsx)(s.Provider,{value:w,children:(0,u.jsxs)("div",{className:"p-6 bg-white rounded-lg shadow-outer",children:[(0,u.jsx)(f,{}),(0,u.jsx)(ee,{}),(0,u.jsx)(k,{})]})})}},5767:function(e,n,o){o.d(n,{A8:function(){return l},CX:function(){return a},DX:function(){return r},X3:function(){return i}});var t=o(1197);function r(e){return t.Z.get("/remote-comp",{params:e})}function a(){return t.Z.get("/remote-comp/all")}function i(e){return t.Z.post("/remote-comp",e)}function l(e,n){return t.Z.patch("/remote-comp".concat(n?"/".concat(n):""),e)}}}]);
//# sourceMappingURL=189.5635cc5c.chunk.js.map