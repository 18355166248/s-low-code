"use strict";(self.webpackChunks_low_control=self.webpackChunks_low_control||[]).push([[843],{5458:function(t,e,n){var r=n(4591),o=n(5257),i=n(4804),a=n(6956),c=n(4625);e.Z=function(t){var e=t.width,n=void 0===e?500:e,s=t.title,u=t.ctrlRef,l=t.onOk,f=t.onCancel,d=t.children,p=t.footer,b=(0,o.useState)(!1),v=(0,r.Z)(b,2),h=v[0],j=v[1],Z=(0,o.useState)(!1),m=(0,r.Z)(Z,2),g=m[0],y=m[1],x=(0,o.useCallback)((function(){j(!1),(0,a.Z)(f)&&f()}),[f]);function w(){j(!0)}function O(){y(!(arguments.length>0&&void 0!==arguments[0])||arguments[0])}return(0,o.useEffect)((function(){return u.current||(u.current={open:w,close:x,loading:O}),function(){u.current=void 0}}),[x,u]),(0,c.jsx)(i.Z,{width:n,title:s,open:h,confirmLoading:g,onOk:function(){(0,a.Z)(l)&&l()},onCancel:x,destroyOnClose:!0,footer:p,children:d})}},3394:function(t,e,n){n.r(e),n.d(e,{default:function(){return $t}});var r=n(5257),o=n.n(r),i=(n(4099),n(2987)),a=n(3478),c=n(1789),s={roleList:[]},u=(0,r.createContext)(s),l=function(){return(0,r.useContext)(u)},f=n(4625),d=function(){var t=l(),e=t.setFilterParams,n=t.getList,r=t.reset,o=t.resetPagination,s=t.openModalHandle,u=t.setModalOption;return(0,f.jsx)(i.Z,{onOk:function(){o(),n()},onCreate:function(){u({initialValues:{},title:"\u65b0\u589e",type:"add"}),s()},onReset:function(){r()},onValuesChange:function(t,n){e(n)},children:(0,f.jsx)(a.Z.Item,{label:"\u7528\u6237\u540d",name:"userName",children:(0,f.jsx)(c.Z,{allowClear:!0})})})},p=n(4591),b=n(5458),v=n(7214),h=n(5066),j=n(3135),Z=n(4944),m=n(1459),g=n(3233);function y(t){return g.Z.post("/user",t)}function x(t){return g.Z.patch("/user/".concat(t.id),t)}var w=(0,m.observer)((function(){var t=l(),e=t.modalDialogRef,n=t.modalOption,i=t.getList,s=t.roleList,u="detail"===n.type,d="add"===n.type,m=a.Z.useForm(),g=(0,p.Z)(m,1)[0],w=(0,r.useState)(!1),O=(0,p.Z)(w,2),P=O[0],A=O[1];return o().useEffect((function(){g.setFieldsValue(n.initialValues)}),[n.initialValues]),(0,f.jsx)(b.Z,{title:n.title,ctrlRef:e,footer:null,children:(0,f.jsxs)(a.Z,{form:g,onFinish:function(t){A(!0);var r="add"===n.type?y:x;n.initialValues.id&&(t.id=n.initialValues.id),r(t).then((function(){v.Z.success({message:"".concat(n.title,"\u6210\u529f\uff01")}),e.current.close(),i()})).finally((function(){A(!1)}))},className:"mt-10",labelCol:{flex:"0 0 80px"},children:[(0,f.jsx)(a.Z.Item,{label:"\u7528\u6237\u540d",name:"userName",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"}],children:(0,f.jsx)(c.Z,{disabled:u})}),d?(0,f.jsx)(a.Z.Item,{label:"\u5bc6\u7801",name:"password",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801"}],children:(0,f.jsx)(c.Z,{disabled:u})}):null,(0,f.jsx)(a.Z.Item,{label:"\u89d2\u8272",name:"roles",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u89d2\u8272"}],children:(0,f.jsx)(h.Z,{disabled:u,mode:"multiple",style:{width:"100%"},children:s.map((function(t){return(0,f.jsx)(h.Z.Option,{children:t.name},t.id)}))})}),"detail"!==n.type&&(0,f.jsxs)("div",{className:"mt-10",children:[(0,f.jsx)(j.Z,{}),(0,f.jsxs)("div",{className:"flex justify-end",children:[(0,f.jsx)(Z.ZP,{onClick:function(){g.resetFields(),e.current.close()},className:"mr-3",children:"\u53d6\u6d88"}),(0,f.jsx)(Z.ZP,{type:"primary",htmlType:"submit",loading:P,children:"\u786e\u5b9a"})]})]})]})})})),O=n(3745),P=n(9050),A=n(1120),C=n(3210),S=n(600);var L=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&!1!==e(t[n],n,t););return t},k=n(2037),V=function(){try{var t=(0,k.Z)(Object,"defineProperty");return t({},"",{}),t}catch(e){}}();var I=function(t,e,n){"__proto__"==e&&V?V(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n},N=n(572),F=Object.prototype.hasOwnProperty;var M=function(t,e,n){var r=t[e];F.call(t,e)&&(0,N.Z)(r,n)&&(void 0!==n||e in t)||I(t,e,n)};var R=function(t,e,n,r){var o=!n;n||(n={});for(var i=-1,a=e.length;++i<a;){var c=e[i],s=r?r(n[c],t[c],c,n,t):void 0;void 0===s&&(s=t[c]),o?I(n,c,s):M(n,c,s)}return n},U=n(1959);var E=function(t,e){return t&&R(e,(0,U.Z)(e),t)},_=n(3820),D=n(994),T=n(9176);var B=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e},H=Object.prototype.hasOwnProperty;var q=function(t){if(!(0,D.Z)(t))return B(t);var e=(0,T.Z)(t),n=[];for(var r in t)("constructor"!=r||!e&&H.call(t,r))&&n.push(r);return n},J=n(4499);var z=function(t){return(0,J.Z)(t)?(0,_.Z)(t,!0):q(t)};var G=function(t,e){return t&&R(e,z(e),t)},K=n(9230),W="object"==typeof exports&&exports&&!exports.nodeType&&exports,$=W&&"object"==typeof module&&module&&!module.nodeType&&module,Q=$&&$.exports===W?K.Z.Buffer:void 0,X=Q?Q.allocUnsafe:void 0;var Y=function(t,e){if(e)return t.slice();var n=t.length,r=X?X(n):new t.constructor(n);return t.copy(r),r};var tt=function(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e},et=n(7138);var nt=function(t,e){return R(t,(0,et.Z)(t),e)},rt=n(1831),ot=(0,n(6253).Z)(Object.getPrototypeOf,Object),it=n(7329),at=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)(0,rt.Z)(e,(0,et.Z)(t)),t=ot(t);return e}:it.Z;var ct=function(t,e){return R(t,at(t),e)},st=n(935),ut=n(365);var lt=function(t){return(0,ut.Z)(t,z,at)},ft=n(4420),dt=Object.prototype.hasOwnProperty;var pt=function(t){var e=t.length,n=new t.constructor(e);return e&&"string"==typeof t[0]&&dt.call(t,"index")&&(n.index=t.index,n.input=t.input),n},bt=n(6366);var vt=function(t){var e=new t.constructor(t.byteLength);return new bt.Z(e).set(new bt.Z(t)),e};var ht=function(t,e){var n=e?vt(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)},jt=/\w*$/;var Zt=function(t){var e=new t.constructor(t.source,jt.exec(t));return e.lastIndex=t.lastIndex,e},mt=n(2777),gt=mt.Z?mt.Z.prototype:void 0,yt=gt?gt.valueOf:void 0;var xt=function(t){return yt?Object(yt.call(t)):{}};var wt=function(t,e){var n=e?vt(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)};var Ot=function(t,e,n){var r=t.constructor;switch(e){case"[object ArrayBuffer]":return vt(t);case"[object Boolean]":case"[object Date]":return new r(+t);case"[object DataView]":return ht(t,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return wt(t,n);case"[object Map]":case"[object Set]":return new r;case"[object Number]":case"[object String]":return new r(t);case"[object RegExp]":return Zt(t);case"[object Symbol]":return xt(t)}},Pt=Object.create,At=function(){function t(){}return function(e){if(!(0,D.Z)(e))return{};if(Pt)return Pt(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();var Ct=function(t){return"function"!=typeof t.constructor||(0,T.Z)(t)?{}:At(ot(t))},St=n(3761),Lt=n(6940),kt=n(2126);var Vt=function(t){return(0,kt.Z)(t)&&"[object Map]"==(0,ft.Z)(t)},It=n(4226),Nt=n(6683),Ft=Nt.Z&&Nt.Z.isMap,Mt=Ft?(0,It.Z)(Ft):Vt;var Rt=function(t){return(0,kt.Z)(t)&&"[object Set]"==(0,ft.Z)(t)},Ut=Nt.Z&&Nt.Z.isSet,Et=Ut?(0,It.Z)(Ut):Rt,_t="[object Arguments]",Dt="[object Function]",Tt="[object Object]",Bt={};Bt[_t]=Bt["[object Array]"]=Bt["[object ArrayBuffer]"]=Bt["[object DataView]"]=Bt["[object Boolean]"]=Bt["[object Date]"]=Bt["[object Float32Array]"]=Bt["[object Float64Array]"]=Bt["[object Int8Array]"]=Bt["[object Int16Array]"]=Bt["[object Int32Array]"]=Bt["[object Map]"]=Bt["[object Number]"]=Bt[Tt]=Bt["[object RegExp]"]=Bt["[object Set]"]=Bt["[object String]"]=Bt["[object Symbol]"]=Bt["[object Uint8Array]"]=Bt["[object Uint8ClampedArray]"]=Bt["[object Uint16Array]"]=Bt["[object Uint32Array]"]=!0,Bt["[object Error]"]=Bt[Dt]=Bt["[object WeakMap]"]=!1;var Ht=function t(e,n,r,o,i,a){var c,s=1&n,u=2&n,l=4&n;if(r&&(c=i?r(e,o,i,a):r(e)),void 0!==c)return c;if(!(0,D.Z)(e))return e;var f=(0,St.Z)(e);if(f){if(c=pt(e),!s)return tt(e,c)}else{var d=(0,ft.Z)(e),p=d==Dt||"[object GeneratorFunction]"==d;if((0,Lt.Z)(e))return Y(e,s);if(d==Tt||d==_t||p&&!i){if(c=u||p?{}:Ct(e),!s)return u?ct(e,G(c,e)):nt(e,E(c,e))}else{if(!Bt[d])return i?e:{};c=Ot(e,d,s)}}a||(a=new S.Z);var b=a.get(e);if(b)return b;a.set(e,c),Et(e)?e.forEach((function(o){c.add(t(o,n,r,o,e,a))})):Mt(e)&&e.forEach((function(o,i){c.set(i,t(o,n,r,i,e,a))}));var v=l?u?lt:st.Z:u?z:U.Z,h=f?void 0:v(e);return L(h||e,(function(o,i){h&&(o=e[i=o]),M(c,i,t(o,n,r,i,e,a))})),c};var qt=function(t){return Ht(t,5)},Jt=n(1418),zt=new((0,P.Z)((function t(){var e=this;(0,A.Z)(this,t),this.filterParams=void 0,this.modalShow=void 0,this.pagination=void 0,this.modalOption=void 0,this.list={pending:!1,success:!1,error:!1,data:[]},this.roleList=[],this.modalDialogRef={current:null},this.openModalHandle=function(){e.modalShow=!0,e.modalDialogRef.current.open()},this.closeModalHandle=function(){e.modalShow=!1},this.setFilterParams=function(t){e.filterParams=t},this.getParams=function(){return(0,O.Z)((0,O.Z)((0,O.Z)({},e.filterParams),e.pagination),{},{pageNo:e.pagination.current})},this.setRoleList=function(t){e.roleList=t},this.initRoleList=function(){(0,C.J)().then((function(t){e.setRoleList(t)}))},this.setList=function(t){e.list=t},this.setPagination=function(t){e.pagination=t},this.getList=function(){var t;e.list.pending=!0,(t=e.getParams(),g.Z.get("/user",{params:t})).then((function(t){e.setList({data:t.data,pending:!1,success:!0,error:!1}),e.setPagination((0,O.Z)((0,O.Z)({},e.pagination),{},{total:t.total}))})).catch((function(){e.list.error=!0,e.list.pending=!1}))},this.resetPagination=function(){e.pagination.current=1},this.reset=function(){e.filterParams={},e.resetPagination(),e.getList()},this.setModalOption=function(t){if((t=qt(t)).initialValues.roles){var n=(0,Jt.ZN)(t.initialValues.roles);t.initialValues.roles=n.map((function(t){return String(t.id)}))}e.modalOption=t},this.onTableChange=function(t){e.pagination=(0,O.Z)((0,O.Z)({},e.pagination),{},{current:t.current}),e.getList()},(0,Jt.ky)(this),this.modalShow=!1,this.filterParams={},this.modalOption={initialValues:{}},this.pagination={current:1,pageSize:10,total:0}}))),Gt=(n(6394),n(4296)),Kt=n(378),Wt=(0,m.observer)((function(){var t=l(),e=t.pagination,n=t.list,o=t.getList,i=t.onTableChange,a=t.setModalOption,c=t.openModalHandle,s=t.initRoleList,u=[{title:"\u7528\u6237\u540d",dataIndex:"userName",key:"userName"},{title:"\u89d2\u8272\u540d",dataIndex:"roles",key:"roles",render:function(t){return t.map((function(t){return t.name})).join(", ")}},{title:"\u64cd\u4f5c",fixed:"right",width:100,render:function(t){var e=[{type:"text",text:"\u7f16\u8f91",onClick:function(){a({initialValues:t,title:"\u7f16\u8f91",type:"edit"}),c()}},{type:"text",text:"\u67e5\u770b",onClick:function(){a({initialValues:t,title:"\u67e5\u770b",type:"detail"}),c()}}];return(0,f.jsx)(Gt.Z,{columns:e})}}];return(0,r.useEffect)((function(){o(),s()}),[]),(0,f.jsx)(Kt.Z,{scroll:{x:"max-content"},dataSource:n.data,columns:u,rowKey:"id",loading:n.pending,pagination:(0,O.Z)((0,O.Z)({},e),{},{hideOnSinglePage:!1,showTotal:function(t){return"\u603b ".concat(t," \u6761")}}),onChange:i})})),$t=function(){return(0,f.jsx)(u.Provider,{value:zt,children:(0,f.jsxs)("div",{className:"p-6 bg-white rounded-lg shadow-outer",children:[(0,f.jsx)(d,{}),(0,f.jsx)(Wt,{}),(0,f.jsx)(w,{})]})})}},3210:function(t,e,n){n.d(e,{J:function(){return o}});var r=n(3233);function o(){return r.Z.get("/roles")}}}]);
//# sourceMappingURL=843.47c8d05a.chunk.js.map