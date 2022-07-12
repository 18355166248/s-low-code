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
        className={"p-2 text-center text-gray-600"}
        style={{
          transform: `translate(${clientOffset.x - 10}px, ${
            clientOffset.y - 10
          }px)`,
        }}
      >
        <div className="mb-2">
          <span className={`iconfont ${item?.data.iconfont}`}></span>
        </div>
        <div>{item?.data.name}</div>
      </div>
      {/* <div
        className="px-3 py-1 text-center bg-red-900 bg-opacity-50 rounded-sm text-white inline-block"
        style={{
          transform: `translate(${clientOffset.x - 10}px, ${
            clientOffset.y - 10
          }px)`,
        }}
      >
        {item?.data?.name}
      </div> */}
    </div>
  );
}

export default CustomDragLayer;
