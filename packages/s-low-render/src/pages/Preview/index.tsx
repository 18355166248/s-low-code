import useLocalStorage from "@/hooks/useLocalStorage";
import React, { FC } from "react";
import { codeTreeStorageKey } from "../Canvas/const";
import PageComp from "./PageComp";

interface Props {}

const Preview: FC<Props> = () => {
  const [codeTreeStorage] = useLocalStorage(codeTreeStorageKey);

  return (
    <div>
      {Array.isArray(codeTreeStorage.children) &&
        codeTreeStorage.children.map((comp: any) => (
          <PageComp key={comp.id} data={comp} />
        ))}
    </div>
  );
};

export default Preview;
