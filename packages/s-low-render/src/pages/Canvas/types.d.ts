import { editKey } from "s-low-components";

export interface FieldNode {
  type: editKey;
  props: Record<string, any>;
  module?: string;
}

export interface FieldNodeSchema extends FieldNode {
  id: string;
  children: FieldNodeSchema[];
}
