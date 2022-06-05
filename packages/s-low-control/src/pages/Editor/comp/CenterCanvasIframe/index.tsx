import PhoneContainer from "@/components/PhoneContainer";
import React from "react";
import { useDrop } from "react-dnd";
import { FieldNodeSchema } from "../../index.store";
import { CARD } from "../../ItemTypes";
import CustomDragLayer from '../CenterCanvas/CustomDragLayer';
import styles from "./index.module.scss";

function CenterCanvasIframe() {
  const [{ isOver, canDrop, item }, drop] = useDrop(() => ({
    accept: CARD,
    drop: (
      item: { data: FieldNodeSchema; index?: number; parentId?: string },
      monitor
    ) => {
      const didDrop = monitor.didDrop(); // returns false for direct drop target
      if (didDrop) return;

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
    <div className="flex-1 p-4 overflow-y-scroll bg-indigo-50">
      <PhoneContainer>
        <div className={styles.phoneBody}>
          <iframe src="http://localhost:3900/" className={styles.iframe} />
          {/* 拖拽和iframe交互蒙层 */}
          <div ref={drop} className={styles.pageLayer}>
            <CustomDragLayer />
          </div>
        </div>
      </PhoneContainer>
    </div>
  );
}

export default CenterCanvasIframe;
