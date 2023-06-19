import { isDev } from "@/utils/env";
import { importRemote } from "@module-federation/utilities";

// 加载左侧配置
export function initRemoteFields({ path, name }: any) {
  return new Promise((resolve, reject) => {
    const app2Utils = importRemote({
      url: isDev
        ? (process.env.REACT_APP_REMOTE_COMP as string)
        : `${process.env.REACT_APP_REMOTE_COMP}/${path}`,
      scope: name,
      module: "./fields",
    });
    app2Utils
      .then((res: any) => {
        resolve(res.default);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

// 加载右侧编辑属性配置
export function initRemoteEdit({ path, name }: any) {
  return new Promise((resolve, reject) => {
    const app2Utils = importRemote({
      url: isDev
        ? (process.env.REACT_APP_REMOTE_COMP as string)
        : `${process.env.REACT_APP_REMOTE_COMP}/${path}`,
      scope: name,
      module: "./edit",
    });
    app2Utils
      .then((res: any) => {
        resolve(res.default);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
