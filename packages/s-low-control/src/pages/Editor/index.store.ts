import { types } from "mobx-state-tree";
import { FieldNode } from "./schema/types";
import { dfs } from "@/utils";

export interface FieldNodeSchema extends FieldNode {
  id: string;
  children: FieldNodeSchema[];
}

export interface State
  extends Omit<FieldNodeSchema, "type" | "iconfont" | "name"> {
  focusId?: string;
  type: "";
}

const initialValue: State = {
  id: "root",
  props: {},
  type: "",
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
    selectedComp: {},
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
    updateSelected({ key, value }: { key: string; value: any }) {
      dfs(self.codeTree, (curField: FieldNodeSchema) => {
        if (curField.id === self.selectId) {
          curField.props[key] = value;
          self.setSelectedComp({ ...curField });
          return false;
        }
        return true;
      });

      (self.iframeRef.current as any)?.contentWindow.postMessage(
        {
          even: "updateCodeTree",
          params: self.codeTree,
        },
        "*"
      );
    },
    afterCreate() {
      console.log("EditStore afterCreate");
    },
    beforeDestroy() {
      console.log("EditStore beforeDestroy");
    },
  }));
