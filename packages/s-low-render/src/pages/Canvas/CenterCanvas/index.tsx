import React, { useEffect, useLayoutEffect } from "react";
import { inject, observer } from "mobx-react";
import Child from "./Child";

function CenterCanvas({ edit }: any) {
  // !!!不能删除 用于刷新组件
  const { refreshId, append, selectId, setCodeTree } = edit;

  useEffect(() => {
    // 统一接收平台信息，调用对应方法处理
    window.addEventListener("message", getMessage);

    // 主动告知父元素已经开始监听 可以执行同步了
    window.parent.postMessage(
      {
        type: "preview-init-success",
      },
      "*"
    );
    return () => {
      window.removeEventListener("message", getMessage);
    };
  }, []);

  useLayoutEffect(() => {
    if (edit.codeTree) {
      // eslint-disable-next-line array-callback-return
      if (edit.codeTree.children.length) {
        edit.codeTree.children.map((child: any) => {
          const height = document.getElementById(child.id)?.offsetHeight;
          child.height = height;
        });

        window.parent.postMessage(
          {
            type: "updateCodeTree",
            params: edit.codeTree,
          },
          "*"
        );
      }
    }
  }, [edit.codeTree, edit.codeTree.refreshId]);

  useEffect(() => {
    selectId &&
      window.parent.postMessage(
        {
          type: "selectId",
          params: selectId,
        },
        "*"
      );
  }, [selectId]);

  function getMessage(e: any) {
    if (e.source !== window.parent) return;

    if (e.data) {
      let { even, params } = e.data;

      if (even === "move") moveWaiting(params);
      if (even === "updateCodeTree") updateCodeTree(params);
    }
  }

  function moveWaiting(params: any) {
    append(params.data);
  }

  function updateCodeTree(params: any) {
    setCodeTree(params);
  }

  return (
    <>
      {edit.codeTree.children.map((code: any, index: number) => (
        <Child
          key={code.id}
          id={code.id}
          data={code}
          parentId={edit.codeTree.id}
          index={index}
          edit={edit}
          selectId={edit.selectId}
        />
      ))}
    </>
  );
}

export default inject("edit")(observer(CenterCanvas));
