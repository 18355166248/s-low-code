export interface FieldNode {
  type: any;
  props: Record<string, any>;
  module?: string;
}

export interface FieldNodeSchema extends FieldNode {
  id: string;
  children: FieldNodeSchema[];
}
