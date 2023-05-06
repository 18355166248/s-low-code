import { ReactElement } from "react";
import previewField from "./preview/base";

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
interface Field extends editType, Record<string, any> {
  key: string;
  name: string;
}

export interface EditFieldValue {
  subLabelWidth?: number; // 字表单label宽度
  list: Field[];
}

// 菜单属性
export interface MenuType {
  key: string;
  panel: ReactElement;
}

// 左侧的组件名类型定义
export type editKey = keyof typeof previewField;

// 中间画布预览组件的类型定义
export type PreviewFieldInterface = Record<
  editKey,
  (props: any) => JSX.Element
>;

// 右侧编辑表单的类型定义
export type EditFieldType = Record<editKey, EditFieldValue>;
