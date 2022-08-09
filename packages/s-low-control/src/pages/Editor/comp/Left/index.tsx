import React, { Fragment } from "react";
import menus from "../../schema/fields";

function Left() {
  return (
    <div className="w-60">
      {menus.map((menu) => {
        return <Fragment key={menu.key}>{menu.panel}</Fragment>;
      })}
    </div>
  );
}

export default Left;
