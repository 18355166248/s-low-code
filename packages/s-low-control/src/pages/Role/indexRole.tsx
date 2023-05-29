import React, { FC } from "react";
import { RoleContext } from "./Role.context";
import { store } from "./Role.models";
import TableView from "./TableRole";
import ModalDialog from "./ModalDialogRole";

// 角色管理
const Role: FC = () => {
  return (
    <RoleContext.Provider value={store}>
      <div className="p-6 bg-white rounded-lg shadow-outer">
        <TableView />
        <ModalDialog />
      </div>
    </RoleContext.Provider>
  );
};

export default Role;
