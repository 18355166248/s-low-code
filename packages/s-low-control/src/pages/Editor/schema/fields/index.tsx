import DragPanel from "../../comp/Left/DragPanel";
import { MenuType } from "../types";
import baseData from "./base";

const menus: MenuType[] = [
  {
    key: "base",
    panel: <DragPanel data={baseData} />,
  },
];

export default menus;
