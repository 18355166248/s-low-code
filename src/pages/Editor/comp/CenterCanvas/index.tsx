import React from "react";
import { useDrop } from "react-dnd";
import cl from "classnames";
import { CARD } from "../../ItemTypes";
import CustomDragLayer from "./CustomDragLayer";
import { inject, observer } from "mobx-react";
import { FieldNodeSchema } from "../../index.store";
import Child from "./Child";

function CenterCanvas(props: any) {
  const { edit } = props;

  const [{ isOver, canDrop, item }, drop] = useDrop(() => ({
    accept: CARD,
    drop: (item: { data: FieldNodeSchema }, monitor) => {
      const didDrop = monitor.didDrop(); // returns false for direct drop target
      if (didDrop) return;

      if (!item.data.id) {
        edit.append(item.data);
      }

      console.log("move", item.data);

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
    <div className="flex-1 p-4 overflow-y-scroll bg-indigo-50">
      <div
        ref={drop}
        className={cl(
          "space-y-1 bg-white border-gray-200 border m-auto min-h-full transition-all duration-300 relative"
        )}
      >
        {edit.codeTree.children.map((code: any, index: number) => (
          <Child
            key={code.id}
            data={code}
            parentId={edit.codeTree.id}
            index={index}
            edit={edit}
          />
        ))}
        {edit.codeTree.children.length === 0 && (
          <div className="flex items-center justify-center text-gray-200 text-3xl absolute inset-0">
            拖动组件到这里
          </div>
        )}

        {isOver && canDrop && !item.data.id ? (
          <div className="border-indigo-500 border my-1" />
        ) : null}
        <CustomDragLayer />
      </div>
    </div>
  );
}

export default inject("edit")(observer(CenterCanvas));
