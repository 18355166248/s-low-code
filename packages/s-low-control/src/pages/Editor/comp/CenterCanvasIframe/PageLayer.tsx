import { inject, observer } from "mobx-react";
import React, { FC } from "react";
import FloatTab from "./comp/FloatTab";
import styles from "./index.module.scss";

interface Props {
  drop: any;
}

const PageLayer: FC<Props> = ({ edit, drop }: any) => {
  const { isDragging, codeTree, selectId, removeCom } = edit;
  // 中间预览的组件列表
  const { children: compChildren = [] } = codeTree;

  return (
    <div
      ref={drop}
      className={styles.pageLayer}
      style={{ zIndex: isDragging ? 20 : 1 }}
    >
      {compChildren.map((comp: any, index: number) => (
        <div
          className="relative"
          key={comp.id}
          style={{ height: comp.height || 0 }}
        >
          <FloatTab
            isSelected={selectId === comp.id}
            name={comp.name}
            onDelete={() => removeCom(codeTree.id, index)}
          />
        </div>
      ))}
    </div>
  );
};

export default inject("edit")(observer(PageLayer));
