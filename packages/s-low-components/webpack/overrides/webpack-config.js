const { ModuleFederationPlugin } = require("webpack").container;
const { EmitExposeWebpackPlugin } = require("@slow/core");
const MFConfig = require("../modulefederation.config.js");
const { publicPath } = require("./path.js");

const webpackConfigPath = "react-scripts/config/webpack.config";
const webpackConfig = require(webpackConfigPath);

const override = (config) => {
  // 本地服务打包路径
  const port = "4001";
  const websocketPath = `ws://localhost:${port.toString()}/ws`;

  config.devServer = {
    client: {
      webSocketURL: websocketPath,
    },
    static: {
      directory: publicPath,
      watch: {
        ignored: (f) => {
          // 生成的类型定义不要监听，否则会引发全局的 reload 使 HMR 失去意义
          return f.endsWith(".d.ts");
        },
      },
    },
    allowedHosts: "all",
    hot: true,
    port,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };

  const MFConfigClone = JSON.parse(JSON.stringify(MFConfig));
  delete MFConfigClone.url;
  config.plugins.push(new ModuleFederationPlugin(MFConfigClone));

  config.plugins.push(
    new EmitExposeWebpackPlugin({
      appConfig: MFConfig,
      outputBasePath: publicPath,
    })
  );

  config.output.publicPath = "auto";

  return config;
};

require.cache[require.resolve(webpackConfigPath)].exports = (env) =>
  override(webpackConfig(env));

module.exports = require(webpackConfigPath);
