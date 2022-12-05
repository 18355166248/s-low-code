import { FieldNodeSchema } from "@/pages/Editor/index.store";
import { CARD } from "@/pages/Editor/ItemTypes";
import { FC } from "react";
import { useDrop } from "react-dnd";

export interface ItemInterface {
  data: FieldNodeSchema;
  index?: number;
  parentId?: string;
}

export interface DropAreaProps {
  dropEnd?: (item: ItemInterface) => void;
}

const DropArea: FC<DropAreaProps> = ({ dropEnd }) => {
  const [{ isOver, canDrop, item }, drop] = useDrop(() => ({
    accept: CARD,
    drop: (item: ItemInterface, monitor) => {
      const didDrop = monitor.didDrop(); // returns false for direct drop target
      if (didDrop) return;

      dropEnd?.(item);

      return {};
    },
    collect: (monitor) => ({
      isOver: monitor.isOver({
        shallow: true,
      }),
      canDrop: monitor.canDrop(),
      item: monitor.getItem(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`border  bg-gray-100 text-gray-400 rounded-md px-5 ${
        isOver ? "border-pink-900" : ""
      }`}
      style={{ borderStyle: isOver ? "solid" : "dashed" }}
    >
      拖拽区域
    </div>
  );
};

export default DropArea;
