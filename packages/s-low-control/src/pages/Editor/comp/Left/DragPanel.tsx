import React from "react";
import { FieldNode } from "../../schema/types";
import DragItem from "./DragItem";

interface Props {
  data: FieldNode[];
}

function DragPanel(props: Props) {
  const { data } = props;
  return (
    <div className='py-4 pr-6'>
      {data.map((item) => (
        <DragItem key={item.type} data={item} />
      ))}
    </div>
  );
}

export default DragPanel;
