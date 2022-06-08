import React, { useEffect, useRef, useState } from "react";
import { FieldNodeSchema } from "../types";
import { useDrop, useDrag } from "react-dnd";
import { CARD } from "../ItemTypes";
import previewData from "../preview";
import cl from "classnames";
import { getEmptyImage } from "react-dnd-html5-backend";
import { canNesting } from "../utils";
import { DeleteOutlined } from "@ant-design/icons";
import styles from "./child.module.scss";

interface Props {
  parentId: string;
  data: FieldNodeSchema;
  index: number;
  selectId: string;
  edit?: any;
}

function Child(props: Props) {
  const { parentId, data, index, selectId, edit } = props;

  const [hasDropped, setHasDropped] = useState(false);
  const [hasDroppedOnChild, setHasDroppedOnChild] = useState(false);
  const [positionDown, setPositionDown] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null);

  const CurrentNode = previewData[data.type];

  const [{ isOver, canDrop, isOverCurrent }, drop] = useDrop(
    () => ({
      accept: CARD,
      drop(_item: any, monitor) {
        const didDrop = monitor.didDrop();
        if (didDrop) return;

        setHasDropped(true);
        setHasDroppedOnChild(didDrop);

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
    [
      data,
      parentId,
      index,
      setHasDropped,
      setHasDroppedOnChild,
      positionDown,
      edit,
    ]
  );

  const [, drag, preview] = useDrag(() => {
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

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, []);

  function setSelectId(e: any) {
    e.stopPropagation();
    edit.setSelectId(data.id);
  }

  function onRemove() {
    edit.removeCom(parentId, index);
  }

  return (
    <div
      ref={ref}
      className={cl(
        "min-h-field relative p-3 border border-dashed",
        styles.child,
        {
          "outline outline-1 outline-cyan-500 border-opacity-0": selected,
          "border-purple-700": isOverCurrent,
        }
      )}
      onClick={setSelectId}
    >
      {selected && (
        <DeleteOutlined
          onClick={onRemove}
          className={cl(
            "cursor-pointer absolute top-0 right-0",
            styles.deleteChildIcon
          )}
        />
      )}
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
              />
            ))}
      </CurrentNode>
    </div>
  );
}

export default Child;
