import { ReactElement } from "react";

// 组件属性
export interface FieldNode {
  type: any;
  props: Record<string, any>;
  iconfont: string;
  name: string;
  module?: string; // 依赖
}

// 右侧
export interface editType {
  type: "title" | "Input";
}

// 右侧 组件的可编辑属性
export interface Field extends editType, Record<string, any> {
  key: string;
  name: string;
}

export interface EditFieldValue {
  subLabelWidth?: number; // 字表单label宽度
  list: Field[];
}

export type EditFieldType = Record<editKey, EditFieldValue>;

// 组件名
export type editKey = "LowImage" | "LowTitle";

// 菜单属性
export interface MenuType {
  key: string;
  panel: ReactElement;
}
