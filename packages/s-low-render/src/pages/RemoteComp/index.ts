import { isDev } from "@/utils/env";
import { importRemote } from "@module-federation/utilities";

// 加载中间预览配置
export function initRemotePreview({ path, name }: any) {
  return new Promise((resolve, reject) => {
    const app2Utils = importRemote({
      url: isDev
        ? (process.env.REACT_APP_REMOTE_COMP as string)
        : `${process.env.REACT_APP_REMOTE_COMP}/${path}`,
      scope: name,
      module: "./preview",
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
