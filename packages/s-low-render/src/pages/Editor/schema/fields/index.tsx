import { ReactElement } from "react";
import { icons } from "../../comp/Left";
import DragPanel from "../../comp/Left/DragPanel";
import antdData from './antd';
import HTML5Data from "./HTML5";

export interface MenuType {
  key: string;
  icon: keyof typeof icons;
  panel: ReactElement;
}

const menus: MenuType[] = [
  {
    key: "HTML5",
    icon: "HTML5",
    panel: <DragPanel data={HTML5Data} />,
  },
  {
    key: "antd",
    icon: "antd",
    panel: <DragPanel data={antdData} />,
  },
];

export default menus;
