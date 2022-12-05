import React, { FC } from "react";
import DropArea, { ItemInterface } from "./DropArea";

interface Props {
  list: any[];
  type: string;
  dropEnd?: (item: ItemInterface, index: number) => void;
}

const DropList: FC<Props> = ({ list, type, dropEnd }) => {
  // 拖拽到可拖拽区域拖拽结束回调
  function _dropEnd(item: ItemInterface, index: number) {
    // LowTabs数据特殊处理 start
    if (type === "LowTabs") {
      dropEnd?.(item, index);
    }
    // LowTabs数据特殊处理 end
  }

  return (
    <div className="children ml-4">
      {list.map((v: any, i: number) => (
        <div key={i}>
          <div>{v.label}</div>
          <div className="children ml-4">
            {v.children?.map((dropChild: any, dropChildIndex: number) => (
              <div key={dropChildIndex}>{dropChild?.name}</div>
            ))}
            <DropArea dropEnd={(item: ItemInterface) => _dropEnd(item, i)} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DropList;
