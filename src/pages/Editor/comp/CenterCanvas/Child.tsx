import React, { useEffect, useRef, useState } from "react";
import { FieldNodeSchema } from "../../index.store";
import { useDrop, useDrag } from "react-dnd";
import { CARD } from "../../ItemTypes";
import previewData from "../../schema/preview";
import cl from "classnames";
import { inject, observer } from "mobx-react";
import { getEmptyImage } from "react-dnd-html5-backend";
import { canNesting } from "../../schema/utils";

interface Props {
  parentId: string;
  data: FieldNodeSchema;
  index: number;
  edit?: any;
}

function Child(props: Props) {
  const { parentId, data, index, edit } = props;

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
        } else if (_item.parentId === parentId) {
          edit.moveRowRoot(_item.index, index);
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

  const classNames = cl("min-h-field relative p-2 border border-dashed", {
    "outline outline-1 outline-cyan-500 border-opacity-0":
      data.id === edit.selectId,
    "border-purple-700": isOverCurrent,
  });

  drop(drag(ref));

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, []);

  return (
    <div ref={ref} className={classNames}>
      <CurrentNode {...data.props}>
        {!canNesting(data.type)
          ? data.props.children
          : data.children.map((curField, _i) => (
              <Child
                key={curField.id}
                data={curField}
                parentId={parentId}
                index={_i}
                edit={edit}
              />
            ))}
      </CurrentNode>
    </div>
  );
}

export default Child;
