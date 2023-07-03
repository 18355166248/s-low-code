import React, { FC } from "react";
// import FilterForm from './FilterFormMenu';
// import ModalDialog from './ModalDialogMenu';
import { MenuContext } from "./Menu.context";
import { store } from "./Menu.models";
import TableView from "./TableMenu";

// 菜单管理
const Menu: FC = () => {
  return (
    <MenuContext.Provider value={store}>
      <div className="p-6 bg-white rounded-lg shadow-outer">
        {/* 过滤器 */}
        {/* <FilterForm /> */}
        {/* 表格 */}
        <TableView />
        {/* 新增弹窗 */}
        {/* <ModalDialog /> */}
      </div>
    </MenuContext.Provider>
  );
};

export default Menu;
