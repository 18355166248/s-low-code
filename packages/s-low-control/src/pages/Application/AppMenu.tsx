import { Menu } from "antd";
import { FC, useEffect, useState } from "react";
import { getMenuItems } from "./menu.utils";
import { applicationChildren } from "@/router";
import { useLocation, useNavigate } from "react-router-dom";

interface AppMenuProps {}

const items = getMenuItems(applicationChildren);

const AppMenu: FC<AppMenuProps> = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  useEffect(() => {
    setSelectedKeys([location.pathname]);
  }, []);

  function onChange({ key }: { key: string }) {
    navigate(key);
    setSelectedKeys([key]);
  }

  return (
    <Menu
      style={{ width: 200 }}
      selectedKeys={selectedKeys}
      onClick={onChange}
      mode="inline"
      items={items}
    />
  );
};

export default AppMenu;
