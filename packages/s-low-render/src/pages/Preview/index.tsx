import { getProject } from "@/services/project";
import { useUpdate } from "ahooks";
import React, { FC, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { initRemotePreview } from "../RemoteComp";
import PageComp from "./PageComp";
import { filterRemoteList } from "./utils";

interface Props {}

const Preview: FC<Props> = () => {
  const { id } = useParams();
  const remotePreviewData = useRef<Record<string, any>>({});
  const update = useUpdate();

  const [data, setData] = useState([]);

  useEffect(() => {
    if (id) {
      getProject(id).then((res: any) => {
        setData(JSON.parse(res.code || "[]"));
      });
    }
  }, []);

  useEffect(() => {
    // 加载远程组件
    if (data.length) {
      // 先过滤出远程组件 再将相同的远程组件去重
      const list = filterRemoteList(data);

      list.forEach((item: any) => {
        initRemotePreview(item.remote).then((remoteComp: any) => {
          if (!remotePreviewData.current[item.type]) {
            remotePreviewData.current[item.type] = remoteComp;

            if (Object.keys(remotePreviewData.current).length === list.length) {
              update();
            }
          }
        });
      });
    }
  }, [data]);

  return (
    <div>
      {Array.isArray(data) &&
        data.map((comp: any) => (
          <PageComp
            key={comp.id}
            data={comp}
            remotePreviewData={remotePreviewData.current}
          />
        ))}
    </div>
  );
};

export default Preview;
