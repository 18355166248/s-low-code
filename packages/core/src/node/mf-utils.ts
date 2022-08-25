import { MicroAppConfig } from '../webpack/plugins/emit-expose-webpack-plugin';

/**
 * @Description 格式化 mf 的remote
 * @Author lang.jiang
 * @Date 2022-08-24 17:41:52
 */
export const getModuleFederationRemotes = (microAppConfig: MicroAppConfig) => {
  const remotes: Record<string, string> = {};
  console.log('microAppConfig.remote', microAppConfig.remotes)
  for (const remote of microAppConfig.remotes) {
    remotes[remote.name] = `${remote.name}@${remote.url.endsWith('/') ? remote.url : `${remote.url}/`}remoteEntry.js`;
  }
  return remotes;
};
