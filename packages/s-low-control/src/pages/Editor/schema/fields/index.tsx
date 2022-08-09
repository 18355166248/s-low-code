import DragPanel from "../../comp/Left/DragPanel";
import { MenuType } from "../types";
import fields from "remote/fields";

const menus: MenuType[] = [
  {
    key: "base",
    panel: <DragPanel data={fields} />,
  },
];

export default menus;
