import { MenuProps } from "antd";
export function getMenuItems(items: any[]): MenuProps["items"] {
  return items.map((menu) => {
    let children = undefined;
    if (Array.isArray(menu.children)) {
      children = getMenuItems(menu.children);
    }

    return {
      key: menu.id,
      children,
      label: menu.name,
    };
  });
}
