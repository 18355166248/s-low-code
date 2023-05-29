import { Spin } from "antd";
import { FC } from "react";
import { createPortal } from "react-dom";

interface FullScreenLoadingProps {}

const FullScreenLoading: FC<FullScreenLoadingProps> = () => {
  return createPortal(
    <div className="w-full h-full flex justify-center items-center">
      <Spin />
    </div>,
    document.body
  );
};

export default FullScreenLoading;
