import { types } from "mobx-state-tree";
import { FieldNode } from "./types";
import { v4 as uuid } from "uuid";
import { dfs } from "@/utils";
import { canNesting } from "./utils";
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
    selectedComp: null,
  }))
  .views((self: any) => ({
    get rootCode() {
      return self.codeTree;
    },
  }))
  .actions((self: any) => ({
    setCodeTree (code: any) {
      self.codeTree = code
    },
    refresh() {
      self.refreshId += 1;
    },
    refreshRight() {
      self.rightRefreshId += 1;
    },
    setSelectId(id: string) {
      self.selectId = id;
    },
    // 根级新增
    append(data: FieldNode) {
      const id = uuid();
      self.codeTree = {
        ...self.codeTree,
        children: [
          ...self.codeTree.children,
          {
            ...cloneDeep(data),
            id,
            children: [],
          },
        ],
      };

      if (self.codeTree.children.length === 1) {
        self.setSelectId(self.codeTree.children[0].id);
      }
    },
    /**
     * 新增到组件内部
     */
    appendCom({
      item, // 拖拽的数据
      data, // hover的数据
      parentId, // hover父级id
      hoverIndex, // hover索引
      positionDown, // 鼠标在hover组件上半部还是下半部
    }: {
      item: FieldNode;
      data: FieldNodeSchema;
      parentId: string;
      hoverIndex: number;
      positionDown: boolean;
    }) {
      const id = uuid();

      dfs(self.codeTree, (curField: FieldNodeSchema) => {
        // 不是嵌套组件 就把新增组件放在父组件里(data的同级)
        if (!canNesting(data.type) && curField.id === parentId) {
          // 通过positionDown判断是放在data上还是下
          if (positionDown) {
            // !!!这里要注意 children不能覆盖item的, id必须要覆盖item的
            curField.children.splice(hoverIndex + 1, 0, {
              children: [],
              ...cloneDeep(item),
              id,
            });
          } else {
            curField.children.splice(hoverIndex, 0, {
              children: [],
              ...cloneDeep(item),
              id,
            });
          }

          return false; // 停止dfs
        }

        // 是嵌套组件 将新组件放入data中
        if (canNesting(data.type) && curField.id === data.id) {
          curField.children.push({
            children: [],
            ...cloneDeep(item),
            id,
          });

          return false;
        }

        return true;
      });

      self.selectId = id;
    },
    // 移动组件
    moveCom({
      dragParentId, // 拖拽组件的父级id
      item: dragData, // 拖拽组件
      data: hoverData, // hover组件
      parentId, // hover组件父级id
      hoverIndex, // hover组件索引
      dragIndex, // 拖拽组件索引
      positionDown, // 鼠标在hover组件上半部还是下半部
    }: {
      dragParentId: string;
      item: FieldNodeSchema;
      data: FieldNodeSchema;
      parentId: string;
      hoverIndex: number;
      dragIndex: number;
      positionDown: boolean;
    }) {
      if (hoverData.id === dragData.id) return; // 自己套自己 不动

      let hoverInDragChild = false;

      // 判断拖拽组件是不是拖拽进自己内部, 如果是不处理
      dfs(dragData, (curField: FieldNodeSchema) => {
        if (curField.id === hoverData.id) {
          hoverInDragChild = true;
          return false;
        }

        return true;
      });

      if (hoverInDragChild) return;

      // 删除拖拽组件原位置
      dfs(self.codeTree, (curField: FieldNodeSchema) => {
        if (curField.id === dragParentId) {
          curField.children.splice(dragIndex, 1);
          return false;
        }

        return true;
      });

      // 新增组件到拖拽后的位置
      self.appendCom({
        item: dragData,
        data: hoverData,
        parentId,
        hoverIndex,
        positionDown,
      });
    },
    moveRowRoot(dragIndex: number, dropIndex: number) {
      const list = self.codeTree.children;
      const s = list.splice(dragIndex, 1)[0];
      list.splice(dropIndex, 0, s);
      self.codeTree.children = [...list];
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
