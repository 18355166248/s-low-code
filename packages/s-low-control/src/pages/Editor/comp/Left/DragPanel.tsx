import { Col, Row } from "antd";
import React from "react";
import { FieldNode } from "../../schema/types";
import DragItem from "./DragItem";

interface Props {
  data: FieldNode[];
}

function DragPanel(props: Props) {
  const { data } = props;
  return (
    <div className="py-6 px-4">
      <Row gutter={15}>
        {data.map((item) => (
          <Col span={12} key={item.type}>
            <DragItem data={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default DragPanel;
