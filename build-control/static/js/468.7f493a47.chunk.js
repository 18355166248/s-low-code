"use strict";(self.webpackChunks_low_control=self.webpackChunks_low_control||[]).push([[468],{9468:function(t,n,i){i.r(n),i.d(n,{default:function(){return m}});var e=i(8655),a={},o=(0,e.createContext)(a),s=i(2498),r=i(9182),l=i(9221),c=i(6280);var d=i(8082),u=new((0,r.Z)((function t(){var n=this;(0,l.Z)(this,t),this.filterParams=void 0,this.modalShow=void 0,this.pagination=void 0,this.modalOption=void 0,this.list={pending:!1,success:!1,error:!1,data:[]},this.modalDialogRef={current:null},this.openModalHandle=function(){n.modalShow=!0,n.modalDialogRef.current.open()},this.closeModalHandle=function(){n.modalShow=!1},this.setFilterParams=function(t){n.filterParams=t},this.getList=function(){var t;n.list.pending=!0,(t=n.filterParams,c.Z.get("/menus",{params:t})).then((function(t){n.list={data:t,pending:!1,success:!0,error:!1}})).catch((function(){n.list.error=!0,n.list.pending=!1}))},this.resetPagination=function(){n.pagination.current=1},this.reset=function(){n.filterParams={},n.resetPagination(),n.getList()},this.setModalOption=function(t){n.modalOption=t},this.onTableChange=function(t){n.pagination=(0,s.Z)((0,s.Z)({},n.pagination),{},{current:t.current}),n.getList()},(0,d.ky)(this),this.modalShow=!1,this.filterParams={},this.modalOption={},this.pagination={current:1,pageSize:10,total:0}}))),h=i(419),g=i(1387),f=i(6775),p=(0,h.observer)((function(){var t=(0,e.useContext)(o),n=(t.pagination,t.list),i=t.getList,a=t.onTableChange;t.setModalOption,t.openModalHandle;return(0,e.useEffect)((function(){i()}),[]),(0,f.jsx)(g.Z,{scroll:{x:"max-content"},style:{marginTop:16},dataSource:n.data,columns:[{title:"\u83dc\u5355\u540d\u79f0",dataIndex:"name",key:"name"},{title:"\u6743\u9650",dataIndex:"acl",key:"acl"}],rowKey:"id",loading:n.pending,pagination:!1,onChange:a})})),m=function(){return(0,f.jsx)(o.Provider,{value:u,children:(0,f.jsx)("div",{className:"p-6 bg-white rounded-lg shadow-outer",children:(0,f.jsx)(p,{})})})}}}]);
//# sourceMappingURL=468.7f493a47.chunk.js.map