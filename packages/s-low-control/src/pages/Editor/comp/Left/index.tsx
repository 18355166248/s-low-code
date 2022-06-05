import React, { useState } from "react";
import { Tabs } from "antd";
import { Html5Outlined, AntDesignOutlined } from "@ant-design/icons";
import menus from "../../schema/fields";

interface IconProps {
  active: boolean;
}

export const icons = {
  HTML5: ({ active }: IconProps) => {
    return <Html5Outlined style={active ? { color: "#40a9ff" } : {}} />;
  },
  antd: ({ active }: IconProps) => {
    return <AntDesignOutlined style={active ? { color: "#40a9ff" } : {}} />;
  },
};

function Left() {
  const [type, setType] = useState("HTML5");
  return (
    <div className="w-60">
      <Tabs tabPosition="left" onChange={(val) => setType(val)}>
        {menus.map((menu) => {
          const Icon = icons[menu.icon];
          return (
            <Tabs.TabPane
              tab={<Icon active={menu.key === type} />}
              key={menu.key}
            >
              {menu.panel}
            </Tabs.TabPane>
          );
        })}
      </Tabs>
    </div>
  );
}

export default Left;
