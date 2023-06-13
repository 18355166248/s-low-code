import React, { Fragment, useEffect, useState } from "react";
import menus from "../../schema/fields";
import { importRemote } from "@module-federation/utilities";

function Left() {
  const [remoteList, setRemoteList] = useState([]);

  useEffect(() => {
    const app2Utils = importRemote({
      url: "http://localhost:4001",
      scope: "lowTitle",
      module: "./fields",
    });
    app2Utils.then((res) => {
      console.log("res", res);
    });
  }, []);

  return (
    <div style={{ width: 221 }}>
      {menus.map((menu) => {
        return <Fragment key={menu.key}>{menu.panel}</Fragment>;
      })}
    </div>
  );
}

export default Left;
