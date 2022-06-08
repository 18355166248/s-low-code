import previewData from "./preview";

export interface FieldNode {
  type: keyof typeof previewData;
  props: Record<string, any>;
  module?: string;
}

export interface FieldNodeSchema extends FieldNode {
  id: string;
  children: FieldNodeSchema[];
}
