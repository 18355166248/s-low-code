import { getProject } from "@/services/project";
import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageComp from "./PageComp";

interface Props {}

const Preview: FC<Props> = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    if (id) {
      getProject(id).then((res: any) => {
        setData(JSON.parse(res.code));
      });
    }
  }, []);

  return (
    <div>
      {Array.isArray(data) &&
        data.map((comp: any) => <PageComp key={comp.id} data={comp} />)}
    </div>
  );
};

export default Preview;
