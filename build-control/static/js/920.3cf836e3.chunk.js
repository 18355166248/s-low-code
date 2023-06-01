"use strict";(self.webpackChunks_low_control=self.webpackChunks_low_control||[]).push([[920],{733:function(t,e,n){n.r(e),n.d(e,{default:function(){return L}});var i=n(5257),a=n.n(i),o=(n(4099),n(2987)),r=n(3478),s=n(5654),l={},c=(0,i.createContext)(l),u=function(){return(0,i.useContext)(c)},d=n(4625),f=function(){var t=u(),e=t.setFilterParams,n=t.getList,i=t.reset,a=t.resetPagination,l=t.openModalHandle,c=t.setModalOption;return(0,d.jsx)(o.Z,{onOk:function(){a(),n()},onCreate:function(){c({initialValues:{itemSourceType:"",role:"",name:"",channelId:""},title:"\u65b0\u589e",type:"add"}),l()},onReset:function(){i()},onValuesChange:function(t,n){e(n)},children:(0,d.jsx)(r.Z.Item,{label:"\u9879\u76ee\u540d\u79f0",name:"name",children:(0,d.jsx)(s.Z,{allowClear:!0})})})},p=n(4591),h=n(3769),m=n(4804),g=n(3135),x=n(4944),Z=n(1459),j=n(7728);var y=(0,Z.observer)((function(){var t=u(),e=t.modalDialogRef,n=t.modalOption,o=t.getList,l=(0,i.useState)(!1),c=(0,p.Z)(l,2),f=c[0],Z=c[1],y="detail"===n.type,v=r.Z.useForm(),C=(0,p.Z)(v,1)[0],w=(0,i.useState)(!1),b=(0,p.Z)(w,2),k=b[0],P=b[1];function S(){C.resetFields(),e.current.close()}return(0,i.useEffect)((function(){e.current={open:function(){return Z(!0)},close:function(){return Z(!1)}}}),[]),a().useEffect((function(){f&&C.setFieldsValue(n.initialValues)}),[f,n.initialValues]),(0,d.jsx)(m.Z,{title:n.title,open:f,footer:null,onCancel:S,children:(0,d.jsxs)(r.Z,{form:C,onFinish:function(t){P(!0);var i="add"===n.type?j.$L:j.ty;n.initialValues.id&&(t.id=n.initialValues.id),i(t).then((function(){h.Z.success({message:"".concat(n.title,"\u6210\u529f\uff01")}),e.current.close(),o()})).finally((function(){P(!1)}))},className:"mt-5",labelCol:{flex:"0 0 100px"},children:[(0,d.jsx)(r.Z.Item,{label:"\u9879\u76ee\u540d\u79f0",name:"name",rules:[{required:!0,message:"\u8bf7\u8f93\u5165"}],children:(0,d.jsx)(s.Z,{disabled:y})}),(0,d.jsx)(r.Z.Item,{label:"\u63cf\u8ff0",name:"description",children:(0,d.jsx)(s.Z.TextArea,{disabled:y,autoSize:!0})}),"detail"!==n.type&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(g.Z,{className:"mt-10"}),(0,d.jsxs)("div",{className:"flex justify-end",children:[(0,d.jsx)(x.ZP,{onClick:S,className:"mr-3",children:"\u53d6\u6d88"}),(0,d.jsx)(x.ZP,{type:"primary",htmlType:"submit",loading:k,children:"\u786e\u5b9a"})]})]})]})})})),v=n(3745),C=n(9050),w=n(1120),b=n(1418),k=new((0,C.Z)((function t(){var e=this;(0,w.Z)(this,t),this.filterParams=void 0,this.modalShow=void 0,this.pagination=void 0,this.modalOption=void 0,this.list={pending:!1,success:!1,error:!1,data:[]},this.modalDialogRef={current:null},this.openModalHandle=function(){e.modalShow=!0,e.modalDialogRef.current.open()},this.closeModalHandle=function(){e.modalShow=!1},this.setFilterParams=function(t){e.filterParams=t},this.getList=function(){e.list.pending=!0,(0,j.ku)((0,v.Z)((0,v.Z)({},e.filterParams),{},{pageSize:e.pagination.pageSize,pageNo:e.pagination.current})).then((function(t){e.list={data:t.data,pending:!1,success:!0,error:!1},e.pagination=(0,v.Z)((0,v.Z)({},e.pagination),{},{total:t.totalSize})})).catch((function(){e.list.error=!0,e.list.pending=!1}))},this.resetPagination=function(){e.pagination.current=1},this.reset=function(){e.filterParams={},e.resetPagination(),e.getList()},this.setModalOption=function(t){e.modalOption=t},this.onTableChange=function(t){e.pagination=(0,v.Z)((0,v.Z)({},e.pagination),{},{current:t.current}),e.getList()},(0,b.ky)(this),this.modalShow=!1,this.filterParams={},this.modalOption={},this.pagination={current:1,pageSize:10,total:0}}))),P=(n(6394),n(4296)),S=n(3975),O=n(4165),V=(0,Z.observer)((function(){var t=u(),e=t.pagination,n=t.list,a=t.getList,o=t.onTableChange,r=t.setModalOption,s=t.openModalHandle,l=(0,O.s0)(),c=[{title:"\u9879\u76ee\u540d\u79f0",dataIndex:"name",key:"name",width:300},{title:"\u63cf\u8ff0",dataIndex:"description",key:"description",ellipsis:!0},{title:"\u64cd\u4f5c",fixed:"right",width:120,render:function(t){var e=[{type:"text",text:"\u642d\u5efa",onClick:function(){l("/editor/".concat(t.id))}},{type:"text",text:"\u7f16\u8f91",onClick:function(){r({initialValues:t,title:"\u7f16\u8f91",type:"edit"}),s()}},{type:"text",text:"\u67e5\u770b",onClick:function(){r({initialValues:t,title:"\u67e5\u770b",type:"detail"}),s()}}];return(0,d.jsx)(P.Z,{columns:e})}}];return(0,i.useEffect)((function(){a()}),[]),(0,d.jsx)(S.Z,{style:{marginTop:16},dataSource:n.data,columns:c,rowKey:"id",loading:n.pending,pagination:(0,v.Z)((0,v.Z)({},e),{},{hideOnSinglePage:!1}),onChange:o})})),L=function(){return(0,d.jsx)(c.Provider,{value:k,children:(0,d.jsxs)("div",{className:"p-6 bg-white rounded-lg shadow-outer",children:[(0,d.jsx)(f,{}),(0,d.jsx)(V,{}),(0,d.jsx)(y,{})]})})}},7728:function(t,e,n){n.d(e,{$L:function(){return r},YD:function(){return l},e5:function(){return o},ku:function(){return a},ty:function(){return s}});var i=n(6519);function a(t){return i.Z.get("/project",{params:t})}function o(t){return i.Z.get("/project/".concat(t))}function r(t){return i.Z.post("/project",t)}function s(t){return i.Z.patch("/project/".concat(t.id),t)}function l(t){return i.Z.patch("/project/code/".concat(t.id),t)}}}]);
//# sourceMappingURL=920.3cf836e3.chunk.js.map