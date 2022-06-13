import React, { useEffect } from "react";
import { useDrop } from "react-dnd";
import { CARD } from "../ItemTypes";
import { inject, observer } from "mobx-react";
import { FieldNodeSchema } from "../types";
import Child from "./Child";

function CenterCanvas({ edit }: any) {
  // !!!不能删除 用于刷新组件
  const { refreshId, append, selectId } = edit;

  useEffect(() => {
    // 统一接收平台信息，调用对应方法处理
    window.addEventListener("message", move);
    return () => {
      window.removeEventListener("message", move);
    };
  }, []);

  useEffect(() => {
    edit.codeTree &&
      window.parent.postMessage(
        {
          type: "updateCodeTree",
          params: edit.codeTree,
        },
        "*"
      );
  }, [edit.codeTree]);

  useEffect(() => {
    selectId &&
      window.parent.postMessage(
        {
          type: "selectId",
          params: selectId,
        },
        "*"
      );
  }, [selectId]);

  function move(e: any) {
    if (e.source !== window.parent) return;

    if (e.data) {
      let { even, params } = e.data;

      if (even === "move") moveWaiting(params);
    }
  }

  function moveWaiting(params: any) {
    append(params.data);
  }

  const [{ isOver, canDrop, item }, drop] = useDrop(() => ({
    accept: CARD,
    drop: (
      item: { data: FieldNodeSchema; index?: number; parentId?: string },
      monitor
    ) => {
      const didDrop = monitor.didDrop(); // returns false for direct drop target
      if (didDrop) return;

      if (!item.data.id) {
        edit.append(item.data);
      } else {
        edit.moveCom({
          dragParentId: item.parentId,
          dragIndex: item.index,
          item: item.data,
          data: edit.codeTree,
        });
      }

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
    <>
      {edit.codeTree.children.map((code: any, index: number) => (
        <Child
          key={code.id}
          data={code}
          parentId={edit.codeTree.id}
          index={index}
          edit={edit}
          selectId={edit.selectId}
        />
      ))}
    </>
    // <div className="flex-1 p-4 overflow-y-scroll bg-indigo-50">
    //   <div
    //     ref={drop}
    //     className={cl(
    //       "space-y-1 bg-white border-gray-200 border m-auto min-h-full transition-all duration-300 relative"
    //     )}
    //   >
    //     {edit.codeTree.children.map((code: any, index: number) => (
    //       <Child
    //         key={code.id}
    //         data={code}
    //         parentId={edit.codeTree.id}
    //         index={index}
    //         edit={edit}
    //         selectId={edit.selectId}
    //       />
    //     ))}
    //     {edit.codeTree.children.length === 0 && (
    //       <div className="flex items-center justify-center text-gray-200 text-3xl absolute inset-0">
    //         拖动组件到这里
    //       </div>
    //     )}

    //     {isOver && canDrop && !item.data.id ? (
    //       <div className="border-indigo-500 border my-1" />
    //     ) : null}
    //     <CustomDragLayer />
    //   </div>
    // </div>
  );
}

export default inject("edit")(observer(CenterCanvas));
