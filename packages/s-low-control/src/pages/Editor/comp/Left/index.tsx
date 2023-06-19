import React, { Fragment, useEffect, useRef, useState } from "react";
import menus from "../../schema/fields";
import { getAllRemoteCompList } from "@/services/remoteComp";
import TypeTitle from "./components/TypeTitle";
import { initRemoteFields } from "@/components/RemoteComp";
import DragPanel from "./DragPanel";
import { FieldNode } from "s-low-components";
import { useUpdate } from "ahooks";

function Left() {
  const remoteList = useRef<any[]>([]);
  const update = useUpdate();

  useEffect(() => {
    initList();
    return () => {
      remoteList.current = [];
    };
  }, []);

  function initList() {
    getAllRemoteCompList().then((res) => {
      if (Array.isArray(res.data)) {
        res.data.forEach((remote: any) => {
          initRemoteFields(remote).then((remoteConfig: any) => {
            const has = remoteList.current.findIndex(
              (v) => v.name === remoteConfig.name
            );
            if (has === -1) {
              remoteList.current.push({
                ...remoteConfig,
                remote,
              });
              if (remoteList.current.length === res.data.length) {
                update();
              }
            }
          });
        });
      }
    });
  }

  return (
    <div style={{ width: 221 }}>
      <div>
        <div className="text-center mt-6 text-base ">
          <TypeTitle>本地组件</TypeTitle>
        </div>
        {menus.map((menu) => {
          return <Fragment key={menu.key}>{menu.panel}</Fragment>;
        })}

        <div className="text-center mt-6 text-base ">
          <TypeTitle>远程组件</TypeTitle>
        </div>
        <DragPanel data={remoteList.current as FieldNode[]} />
      </div>
    </div>
  );
}

export default Left;
