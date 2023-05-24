import { types } from "mobx-state-tree";
import { USER_INFO } from "./appStore.types";

export const AppStore = types
  .model("AppStore", {
    userInfo: USER_INFO,
  })
  .volatile(() => ({}))
  .views((self: any) => ({
    // 判断是否是运营
    get getIsOperate() {
      return self.userInfo?.bizRoles?.includes(2);
    },
  }))
  .actions((self: any) => ({
    setOpenKeys(data: any[]) {
      self.openKeys = data;
    },
    afterCreate() {
      // console.log("appStore afterCreate");
    },
    beforeDestroy() {
      // console.log("appStore beforeDestroy");
    },
  }));
