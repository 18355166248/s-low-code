import React from "react";
import { useDragLayer } from "react-dnd";

function CustomDragLayer() {
  const { item, isDragging, clientOffset } = useDragLayer((monitor) => ({
    isDragging: monitor.isDragging(),
    item: monitor.getItem(),
    clientOffset: monitor.getClientOffset(),
  }));

  if (!isDragging || !clientOffset) return null;

  return (
    <div className="fixed pointer-events-none inset-0">
      <div
        className="px-3 py-1 text-center bg-red-900 bg-opacity-50 rounded-sm text-white inline-block"
        style={{
          transform: `translate(${clientOffset.x - 10}px, ${
            clientOffset.y - 10
          }px)`,
        }}
      >
        {item?.data?.type}
      </div>
    </div>
  );
}

export default CustomDragLayer;
