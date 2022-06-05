import React, { useEffect } from "react";
import { FieldNode } from "../../schema/types";
import { useDrag } from "react-dnd";
import { CARD } from "../../ItemTypes";
import cl from "classnames";
import { getEmptyImage } from "react-dnd-html5-backend";

interface Props {
  data: FieldNode;
}

function DragItem(props: Props) {
  const { data } = props;

  const [{ isDragging }, dragRef, preview] = useDrag(() => {
    return {
      type: CARD,
      item: { data },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    };
  });

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, []);

  return (
    <>
      <div
        ref={dragRef}
        className={cl(
          "p-2 border border-gray-200 text-center text-gray-600 shadow-sm rounded-sm cursor-move hover:bg-gray-100 hover:text-gray-900 ",
          {
            "opacity-50": isDragging,
          }
        )}
      >
        {data.type}
      </div>
    </>
  );
}

export default DragItem;
