import { observer, inject } from "mobx-react";
import React, { FC, useCallback, useEffect, useRef } from "react";
import { Empty, Tree } from "antd";
import DropList from "./Comps/DropList";
import { ItemInterface } from "./Comps/DropList/DropArea";
import { dfs } from "@/utils";
import { FieldNodeSchema } from "../../index.store";

const EditComsList: FC<any> = ({ edit }) => {
  const { refreshId, codeTree, postMessageIframe, setCodeTree } = edit;

  // useCallback存在拿不到最新 codeTree 的情况, 通过useRef解决
  const codeTreeRef = useRef(codeTree);
  codeTreeRef.current = codeTree;

  const updateChildren = useCallback(
    (
      codeTreeData: any,
      data: FieldNodeSchema,
      item: ItemInterface,
      index: number
    ) => {
      dfs(codeTreeData, (curField: FieldNodeSchema) => {
        if (curField.id === data.id) {
          if (Array.isArray(curField.props.items[index].children)) {
            curField.props.items[index].children.push(item.data);
          } else {
            curField.props.items[index].children = [item.data];
          }
          setCodeTree(codeTreeData);
          return false;
        }

        return true;
      });
    },
    [setCodeTree]
  );

  const titleRender = useCallback(
    (nodeData: any) => {
      const { items = [], canDrop } = nodeData.props;
      function dropEnd(item: ItemInterface, index: number) {
        updateChildren(codeTreeRef.current, nodeData, item, index);
        // 通知 store 数据更新  store 再通知 iframe 数据更新
        postMessageIframe();
      }

      return (
        <>
          <div>
            <span
              className={`iconfont mr-1 ${nodeData.iconfont}`}
              style={{ fontSize: 12 }}
            />
            {nodeData.name}
          </div>
          {/* 拖拽区域展示 */}
          {items.length && canDrop ? (
            <DropList list={items} type={nodeData.type} dropEnd={dropEnd} />
          ) : null}
        </>
      );
    },
    [postMessageIframe, updateChildren]
  );

  return (
    <>
      <Tree
        treeData={codeTree.children}
        fieldNames={{ title: "name", key: "id", children: "children" }}
        defaultExpandAll
        autoExpandParent
        selectable={false}
        titleRender={titleRender}
      />

      {!codeTree.children.length && (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="暂无数据" />
      )}
    </>
  );
};

export default inject("edit")(observer(EditComsList));
