import { Space } from "antd";
import { FC } from "react";
import OpenLine from "./OpenLine";
import PreviewHtml from "./Preview";
import Save from "./Save";
import ShowCode from "./ShowCode";

interface HeaderRightProps {}

const HeaderRight: FC<HeaderRightProps> = () => {
  return (
    <div className="inline-flex justify-between items-center">
      <Space>
        {/* 实时预览 */}
        <PreviewHtml />
        {/* 展示代码 */}
        <ShowCode />
        {/* 保存 */}
        <Save />
        {/* 打开在线地址 */}
        <OpenLine />
      </Space>
    </div>
  );
};

export default HeaderRight;
