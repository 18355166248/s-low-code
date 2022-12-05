import * as React from "react";
import { Tabs } from "antd";
import { cloneDeep } from "lodash-es";
import previewField, { editKey } from "src/schema/preview/base";

export type LowTabsTypes = {
  centered: boolean;
  canDrop: boolean;
  items: [{ label: string; key: string; children: any }];
};

const LowTabs: React.FC<LowTabsTypes> = (props) => {
  const filterProps = () => {
    const itemsClone = cloneDeep(props.items);

    itemsClone.forEach((item) => {
      if (Array.isArray(item.children)) {
        item.children = (
          <div>
            {item.children.map((itemChild: any, index: number) => {
              const Com = previewField[itemChild.type as editKey] as any;
              return (
                <React.Fragment key={index}>
                  <Com {...itemChild.props} />
                </React.Fragment>
              );
            })}
          </div>
        );
      }
    });
    return {
      items: itemsClone,
      centered: props.centered,
    };
  };
  return <Tabs {...filterProps()} />;
};

export default LowTabs;
