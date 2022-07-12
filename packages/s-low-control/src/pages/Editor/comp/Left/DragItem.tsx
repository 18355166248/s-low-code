import { FieldNode } from "../../schema/types";
import { useDrag } from "react-dnd";
import { CARD } from "../../ItemTypes";
import cl from "classnames";
import { inject, observer } from "mobx-react";

interface Props {
  data: FieldNode;
  edit?: any;
}

function DragItem(props: Props) {
  const { data, edit } = props;
  const { setIsDragging } = edit;

  const [{ isDragging }, dragRef] = useDrag(() => {
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

  return (
    <div
      ref={dragRef}
      className={cl(
        "p-2 text-center text-gray-600 cursor-move hover:bg-gray-100  hover:text-gray-900",
        {
          "opacity-50": isDragging,
        }
      )}
    >
      <div className="mb-2">
        <span className={`iconfont ${data.iconfont}`}></span>
      </div>
      <div>{data.name}</div>
    </div>
  );
}

export default inject("edit")(observer(DragItem));
