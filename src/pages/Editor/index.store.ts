import { types } from "mobx-state-tree";
import { FieldNode } from "./schema/types";
import { v4 as uuid } from "uuid";
import { dfs } from "@/utils";
import { canNesting } from "./schema/utils";

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
  .actions((self: Self) => ({
    // 根级新增
    append(data: FieldNode) {
      const id = uuid();
      self.codeTree.children = [
        ...self.codeTree.children,
        {
          ...data,
          id,
          children: [],
        },
      ];

      if (self.codeTree.children.length === 1) {
        self.selectId = self.codeTree.children[0].id;
      }
    },
    /**
     * 新增到组件内部
     * @param param0 item新增组件  data鼠标放入的组件数据   parentId鼠标放入的组件父级id hoverIndex鼠标放入的组件所在索引
     */
    appendCom({
      item,
      data,
      parentId,
      hoverIndex,
      positionDown,
    }: {
      item: FieldNode;
      data: FieldNodeSchema;
      parentId: string;
      hoverIndex: number;
      positionDown: boolean;
    }) {
      console.log(item, data, parentId, hoverIndex);
      const id = uuid();

      dfs(self.codeTree, (curField: FieldNodeSchema) => {
        // 不是嵌套组件 就把新增组件放在父组件里(data的同级)
        if (!canNesting(data.type) && curField.id === parentId) {
          // 通过positionDown判断是放在data上还是下
          if (positionDown) {
            curField.children.splice(hoverIndex + 1, 0, {
              ...item,
              id,
              children: [],
            });
          } else {
            curField.children.splice(hoverIndex, 0, {
              ...item,
              id,
              children: [],
            });
          }

          return false; // 停止dfs
        }

        // 是嵌套组件 将新组件放入data中
        if (canNesting(data.type) && curField.id === data.id) {
          curField.children.push({
            ...data,
            id,
            children: [],
          });

          return false;
        }

        return true;
      });
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
