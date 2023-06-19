import React, { FC } from "react";
import previewData from "../Canvas/schema/preview";
import { FieldNodeSchema } from "../Canvas/types";
import { canNesting } from "../Canvas/utils";

interface Props {
  data: FieldNodeSchema;
  remotePreviewData: Record<string, any>;
}

const PageComp: FC<Props> = ({ data, remotePreviewData }) => {
  const CurrentNode = previewData[data.type] || remotePreviewData[data.type];
  return CurrentNode ? (
    <CurrentNode {...data.props}>
      {!canNesting(data.type)
        ? data.props.children
        : data.children.map((curField: any) => (
            <PageComp
              key={curField.id}
              data={curField}
              remotePreviewData={remotePreviewData}
            />
          ))}
    </CurrentNode>
  ) : null;
};

export default PageComp;
