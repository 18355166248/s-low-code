export interface FieldNode {
  type: any;
  props: Record<string, any>;
  module?: string;
  children?: any[];
}

export interface FieldNodeSchema extends FieldNode {
  id: string;
  children: FieldNodeSchema[];
}
