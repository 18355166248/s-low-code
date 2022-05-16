import React, { useEffect, useRef, useState } from "react";
import { FieldNodeSchema } from "../../index.store";
import { useDrop, useDrag } from "react-dnd";
import { CARD } from "../../ItemTypes";
import previewData from "../../schema/preview";
import cl from "classnames";
import { inject, observer } from "mobx-react";
import { getEmptyImage } from "react-dnd-html5-backend";

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

  const ref = useRef(null);

  const CurrentNode = previewData[data.type];

  const [{ isOver, canDrop, isOverCurrent }, drop] = useDrop(
    () => ({
      accept: CARD,
      drop(_item: any, monitor) {
        const didDrop = monitor.didDrop();
        if (didDrop) return;

        setHasDropped(true);
        setHasDroppedOnChild(didDrop);

        if (_item.parentId === parentId) {
          edit.moveRowRoot(_item.index, index);
        }
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
        isOverCurrent: monitor.isOver({ shallow: true }),
      }),
    }),
    [data, parentId, index, setHasDropped, setHasDroppedOnChild]
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

  const classNames = cl("relative p-2 h-8 border border-dashed", {
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
      <CurrentNode {...data.props} />
    </div>
  );
}

export default inject("edit")(observer(Child));
