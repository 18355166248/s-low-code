import previewData from "./preview";

export interface FieldNode {
  type: keyof typeof previewData;
  props: Record<string, any>;
  module?: string;
}
