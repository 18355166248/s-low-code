import React, { FC } from 'react';
import FilterForm from './FilterFormRole';
import ModalDialog from './ModalDialogRole';
import { RoleContext } from './Role.context';
import { store } from './Role.models';
import TableView from './TableRole';

// 角色管理
const Role: FC = () => {
  return (
    <RoleContext.Provider value={store}>
      <div className="p-6 bg-white rounded-lg shadow-outer">
        {/* 过滤器 */}
        <FilterForm />
        {/* 表格 */}
        <TableView />
        {/* 新增弹窗 */}
        <ModalDialog />
      </div>
    </RoleContext.Provider>
  );
};

export default Role;
