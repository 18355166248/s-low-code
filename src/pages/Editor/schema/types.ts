import previewData from "./preview";
import { Fields } from "../comp/Right/fields";

export interface FieldNode {
  type: keyof typeof previewData;
  props: Record<string, any>;
  module?: string;
}

export interface Field extends Record<string, any> {
  key: string;
  name: string;
  type: keyof typeof Fields;
}
