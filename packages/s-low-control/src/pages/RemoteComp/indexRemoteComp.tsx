import React, { FC } from "react";
import FilterForm from "./FilterFormRemoteComp";
import ModalDialog from "./ModalDialogRemoteComp";
import { RemoteCompContext } from "./RemoteComp.context";
import { store } from "./RemoteComp.models";
import TableView from "./TableRemoteComp";

// 远程组件
const RemoteComp: FC = () => {
  return (
    <RemoteCompContext.Provider value={store}>
      <div className="p-6 bg-white rounded-lg shadow-outer">
        {/* 过滤器 */}
        <FilterForm />
        {/* 表格 */}
        <TableView />
        {/* 新增弹窗 */}
        <ModalDialog />
      </div>
    </RemoteCompContext.Provider>
  );
};

export default RemoteComp;
