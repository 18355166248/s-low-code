import { types } from "mobx-state-tree";
import { FieldNode } from "./schema/types";
import { v4 as uuid } from "uuid";
import { dfs } from "@/utils";
import { canNesting } from "./schema/utils";
import { cloneDeep } from "lodash-es";

export interface FieldNodeSchema extends FieldNode {
  id: string;
  children: FieldNodeSchema[];
}

export interface State extends FieldNodeSchema {
  focusId?: string;
}

interface Self {
  codeTree: State;
  selectId?: string;
}

const initialValue: State = {
  id: "root",
  props: {},
  type: "div",
  children: [],
};

export const EditStore = types
  .model("EditStore", {
    refreshId: types.optional(types.number, 0),
    rightRefreshId: types.optional(types.number, 0),
  })
  .volatile(() => ({
    codeTree: initialValue,
    selectId: "",
    isDragging: false,
    iframeRef: { current: null },
    selectedComp: null,
  }))
  .views((self: any) => ({
    get rootCode() {
      return self.codeTree;
    },
  }))
  .actions((self: any) => ({
    setCodeTree(code: any) {
      self.codeTree = code;
    },
    setIsDragging(bool: boolean) {
      self.isDragging = bool;
    },
    refresh() {
      self.refreshId += 1;
    },
    refreshRight() {
      self.rightRefreshId += 1;
    },
    setSelectId(id: string) {
      self.selectId = id;
      self.updateSelectedComp();
    },
    updateSelectedComp() {
      dfs(self.codeTree, (curField: FieldNodeSchema) => {
        if (curField.id === self.selectId) {
          self.setSelectedComp(curField);
          return false;
        }
        return true;
      });
    },
    setSelectedComp(comp: any) {
      self.selectedComp = comp;
    },
    setIframeRef(ref: { current: any }) {
      self.iframeRef = ref;
    },
    removeCom(parentId: string, hoverIndex: number) {
      dfs(self.codeTree, (curField: FieldNodeSchema) => {
        if (curField.id === parentId) {
          curField.children.splice(hoverIndex, 1);

          return false;
        }
        return true;
      });

      self.refresh();
    },
    updateSelected({ key, value }: { key: string; value: any }) {
      dfs(self.codeTree, (curField: FieldNodeSchema) => {
        if (curField.id === self.selectId) {
          curField.props[key] = value;
          self.setSelectedComp({ ...curField });
          return false;
        }
        return true;
      });
      self.refresh();
    },
    afterCreate() {
      console.log("EditStore afterCreate");
    },
    beforeDestroy() {
      console.log("EditStore beforeDestroy");
    },
  }));
