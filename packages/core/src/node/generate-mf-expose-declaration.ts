/**
 * @Description 生成 module federation expose 声明，一般用于消费者调用
 * @Author lang.jiang
 * @Date 2022-08-24 17:27:59
 */
import axios from 'axios'
import * as url from 'url';
import * as fs from 'fs-extra';
import * as path from 'path';
import { sourcePath } from '../common/paths';
import { MicroAppConfig } from '../webpack/plugins/emit-expose-webpack-plugin';

export const generateMfExposeDeclaration = async (appConfig: MicroAppConfig) => {
  const declareTypeRoot = path.resolve(sourcePath, 'types', 'mf-remotes');
  await fs.ensureDir(declareTypeRoot);

  for (const { name, url: remoteUrl } of appConfig.remotes) {
    const targetFileName = `${name}-exposes.d.ts`;

    const remote = url.resolve(remoteUrl, 'mf-expose-types/expose.d.ts');
    console.log(`fetching remotes types declarations from ${remote}...`)
    const declarations = await axios.get(remote);
    await fs.writeFile(path.resolve(declareTypeRoot, targetFileName), declarations.data);
  }

  console.log('Done!');
};

