import React, { useRef, useState } from "react";
import { FieldNodeSchema } from "../types";
import { useDrop, useDrag } from "react-dnd";
import { CARD } from "../ItemTypes";
import previewData from "../schema/preview";
import cl from "classnames";
import { canNesting } from "../utils";

interface Props {
  id?: string;
  parentId: string;
  data: FieldNodeSchema;
  index: number;
  selectId: string;
  remotePreviewData: Record<string, any>;
  edit?: any;
}

function Child(props: Props) {
  const { id, parentId, data, index, selectId, edit, remotePreviewData } =
    props;
  const [positionDown, setPositionDown] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null);

  const CurrentNode = previewData[data.type] || remotePreviewData[data.type];

  const [{ isOver, canDrop, isOverCurrent }, drop] = useDrop(
    () => ({
      accept: CARD,
      drop(_item: any, monitor) {
        const didDrop = monitor.didDrop();
        if (didDrop) return;

        // 没有id是新增 反之是移动
        if (!_item.data.id) {
          edit.appendCom({
            item: _item.data,
            data,
            parentId,
            hoverIndex: index,
            positionDown,
          });
        } else {
          edit.moveCom({
            dragParentId: _item.parentId,
            item: _item.data,
            data,
            parentId,
            hoverIndex: index,
            dragIndex: _item.index,
            positionDown,
          });
        }
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
        isOverCurrent: monitor.isOver({ shallow: true }),
      }),
      hover: (item, monitor) => {
        // 只判断hover最小的组件
        const isHoverCurrent = monitor.isOver({ shallow: true });
        if (isHoverCurrent && ref.current) {
          const hoverBoundingRect = ref.current.getBoundingClientRect();
          // 获取hover组件的高度的一半
          const hoverMiddleY =
            (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
          const clientOffset = monitor.getClientOffset(); // 鼠标的位置
          if (clientOffset) {
            const hoverClentY = clientOffset.y - hoverBoundingRect.top; // 鼠标唯一hover组件的纵向位置

            setPositionDown(hoverClentY >= hoverMiddleY); // 判断鼠标是位于组件的上半部还是下半部
          }
        }
      },
    }),
    [data, parentId, index, positionDown, edit]
  );

  const [, drag] = useDrag(() => {
    return {
      type: CARD,
      item: { data, parentId, index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    };
  }, [index, parentId, data]);

  const selected = data.id === selectId;

  drop(drag(ref));

  function setSelectId(e: any) {
    e.stopPropagation();
    edit.setSelectId(data.id);
  }

  return (
    <div ref={ref} onClick={setSelectId} id={id} className="relative">
      {/* 选中border */}
      <div
        className={cl("absolute w-full h-full", {
          "border border-primary": selected,
          "border border-primary border-dashed": isOverCurrent,
        })}
      ></div>
      {/* hover border */}
      <div
        className={
          "absolute w-full h-full hover:border hover:border-primary hover:border-dashed"
        }
      ></div>
      {CurrentNode && (
        <CurrentNode {...data.props}>
          {!canNesting(data.type)
            ? data.props.children
            : data.children.map((curField, _i) => (
                <Child
                  key={curField.id}
                  data={curField}
                  parentId={data.id}
                  index={_i}
                  edit={edit}
                  selectId={selectId}
                  remotePreviewData={remotePreviewData}
                />
              ))}
        </CurrentNode>
      )}
    </div>
  );
}

export default Child;
