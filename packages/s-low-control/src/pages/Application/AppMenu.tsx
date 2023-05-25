import { Menu } from "antd";
import { FC } from "react";
import { getMenuItems } from "./menu.utils";
import { applicationChildren } from "@/router";

interface AppMenuProps {}

const items = getMenuItems(applicationChildren);

const AppMenu: FC<AppMenuProps> = () => {
  return (
    <Menu
      style={{ width: 200 }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
    />
  );
};

export default AppMenu;
