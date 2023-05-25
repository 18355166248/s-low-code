import React, { FC } from 'react';
import FilterForm from './FilterFormUser';
import ModalDialog from './ModalDialogUser';
import { UserContext } from './User.context';
import { store } from './User.models';
import TableView from './TableUser';

// 用户管理
const User: FC = () => {
  return (
    <UserContext.Provider value={store}>
      <div className="p-6 bg-white rounded-lg shadow-outer">
        {/* 过滤器 */}
        <FilterForm />
        {/* 表格 */}
        <TableView />
        {/* 新增弹窗 */}
        <ModalDialog />
      </div>
    </UserContext.Provider>
  );
};

export default User;
