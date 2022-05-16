import { types } from "mobx-state-tree";

export const USER_INFO = types.model({
  name: types.optional(types.string, "用户名"),
});
