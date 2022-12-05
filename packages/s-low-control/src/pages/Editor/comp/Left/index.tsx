import React, { Fragment } from "react";
import menus from "../../schema/fields";
import EditComsList from "./EditComsList";

function Left() {
  return (
    <div style={{ width: 340 }} className="flex">
      <div className="left border-r border-gray-100" style={{ width: 140 }}>
        <div className="text-center text-lg py-3 border-b border-gray-100">
          组件
        </div>
        <div className="pt-4">
          {menus.map((menu) => {
            return <Fragment key={menu.key}>{menu.panel}</Fragment>;
          })}
        </div>
      </div>
      <div className="right flex-1 overflow-x-auto">
        <div className="text-center text-lg py-3 border-b border-gray-100">
          图层
        </div>
        <div className="pt-4">
          <EditComsList />
        </div>
      </div>
    </div>
  );
}

export default Left;
