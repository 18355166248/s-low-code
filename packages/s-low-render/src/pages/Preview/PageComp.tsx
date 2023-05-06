import React, { FC } from "react";
import previewData from "../Canvas/schema/preview";
import { FieldNodeSchema } from "../Canvas/types";
import { canNesting } from "../Canvas/utils";

interface Props {
  data: FieldNodeSchema;
}

const PageComp: FC<Props> = ({ data }) => {
  const CurrentNode = previewData[data.type];
  return (
    <CurrentNode {...data.props}>
      {!canNesting(data.type)
        ? data.props.children
        : data.children.map((curField: any) => (
            <PageComp key={curField.id} data={curField} />
          ))}
    </CurrentNode>
  );
};

export default PageComp;
