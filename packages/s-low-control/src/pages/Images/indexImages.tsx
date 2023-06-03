import React, { FC } from "react";
// import FilterForm from "./FilterFormImages";
// import ModalDialog from "./ModalDialogImages";
import { ImagesContext } from "./Images.context";
import { store } from "./Images.models";
import TableView from "./TableImages";
import UploadBtn from "./UploadBtn";

// 图片管理
const Images: FC = () => {
  return (
    <ImagesContext.Provider value={store}>
      <div className="p-6 bg-white rounded-lg shadow-outer">
        {/* 过滤器 */}
        {/* <FilterForm /> */}
        <UploadBtn />
        {/* 表格 */}
        <TableView />
        {/* 新增弹窗 */}
        {/* <ModalDialog /> */}
      </div>
    </ImagesContext.Provider>
  );
};

export default Images;
