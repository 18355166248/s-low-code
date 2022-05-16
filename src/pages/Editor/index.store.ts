import { types } from "mobx-state-tree";
import { FieldNode } from "./schema/types";
import { v4 as uuid } from "uuid";

export interface FieldNodeSchema extends FieldNode {
  id: string;
  children: FieldNodeSchema[];
}

export interface State extends FieldNodeSchema {
  focusId?: string;
}

const initialValue: State = {
  id: "root",
  props: {},
  type: "div",
  children: [],
};

export const EditStore = types
  .model("EditStore")
  .volatile(() => ({
    codeTree: initialValue,
    selectId: "",
  }))
  .views((self: any) => ({
    get rootCode() {
      return self.codeTree.children;
    },
  }))
  .actions((self: any) => ({
    append(data: FieldNode) {
      const id = uuid();
      self.codeTree.children = [
        ...self.codeTree.children,
        {
          ...data,
          id,
        },
      ];

      if (self.codeTree.children.length === 1) {
        self.selectId = self.codeTree.children[0].id;
      }
    },
    moveRowRoot(dragIndex: number, dropIndex: number) {
      const list = self.codeTree.children;
      const s = list.splice(dragIndex, 1)[0];
      list.splice(dropIndex, 0, s);
      self.codeTree.children = [...list];
      console.log(self.codeTree.children);
    },
    afterCreate() {
      console.log("EditStore afterCreate");
    },
    beforeDestroy() {
      console.log("EditStore beforeDestroy");
    },
  }));
