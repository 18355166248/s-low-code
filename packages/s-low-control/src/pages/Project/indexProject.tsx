import React, { FC } from 'react';
import FilterForm from './FilterFormProject';
import ModalDialog from './ModalDialogProject';
import { ProjectContext } from './Project.context';
import { store } from './Project.models';
import TableView from './TableProject';

// 项目管理
const Project: FC = () => {
  return (
    <ProjectContext.Provider value={store}>
      <div className="p-6 bg-white rounded-lg shadow-outer">
        {/* 过滤器 */}
        <FilterForm />
        {/* 表格 */}
        <TableView />
        {/* 新增弹窗 */}
        <ModalDialog />
      </div>
    </ProjectContext.Provider>
  );
};

export default Project;
