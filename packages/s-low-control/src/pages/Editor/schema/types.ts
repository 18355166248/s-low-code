import editData from "./edit";
import { Fields } from "../comp/Right/fields";
import { ReactElement } from "react";

// 组件属性
export interface FieldNode {
  type: keyof typeof editData;
  props: Record<string, any>;
  iconfont: string;
  name: string;
  module?: string; // 依赖
}

// 右侧
export interface editType {
  type: "title" | keyof typeof Fields;
}

// 右侧 组件的可编辑属性
export interface Field extends editType, Record<string, any> {
  key: string;
  name: string;
}

// 组件名
export type editKey = "LowImage" | "LowTitle";

// 菜单属性
export interface MenuType {
  key: string;
  panel: ReactElement;
}
