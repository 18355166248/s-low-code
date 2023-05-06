import DragPanel from "../../comp/Left/DragPanel";
import { MenuType } from "../types";
import fields from "remote/fields";
import { FieldNode } from "s-low-components";

const menus: MenuType[] = [
  {
    key: "base",
    panel: <DragPanel data={fields as FieldNode[]} />,
  },
];

export default menus;
