import React, { useEffect } from "react";
import { FieldNode } from "../../schema/types";
import { useDrag } from "react-dnd";
import { CARD } from "../../ItemTypes";
import cl from "classnames";
import { getEmptyImage } from "react-dnd-html5-backend";
import { inject, observer } from "mobx-react";

interface Props {
  data: FieldNode;
  edit?: any;
}

function DragItem(props: Props) {
  const { data, edit } = props;
  const { setIsDragging } = edit;

  const [{ isDragging }, dragRef, preview] = useDrag(() => {
    return {
      type: CARD,
      item: { data },
      collect: (monitor) => {
        const isDragging = monitor.isDragging();
        setIsDragging(isDragging);
        return {
          isDragging,
        };
      },
      end() {
        console.log("end");
      },
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

export default inject("edit")(observer(DragItem));
