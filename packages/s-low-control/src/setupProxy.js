const { createProxyMiddleware } = require("http-proxy-middleware");

// 编译环境
const BUILD_ENV = process.env.REACT_APP_BUILD_ENV;
// 是否为本地开发环境
const isDev = BUILD_ENV === "development";
// 是否为测试环境
const isTest = BUILD_ENV === "test";
// 是否为 UAT 环境
const isUat = BUILD_ENV === "uat";
// 是否为生产环境
const isProd = BUILD_ENV === "production";

const domain = isDev || isTest ? ".test" : isUat ? ".uat" : "";

module.exports = function (app) {
  app.use(
    createProxyMiddleware(["/api"], {
      target: `http://localhost:3001`,
      secure: true,
      changeOrigin: true,
      cookieDomainRewrite: `localhost:3001`,
      pathRewrite: {
        // 以自由添加的前缀作为本地接口代理的标记，请求发送时会被替换掉
        "^/dev_proxy_ops": "",
      },
    })
  );

  // app.use(
  //   createProxyMiddleware("/web", {
  //     target: "http://passport.test.ximalaya.com/",
  //     changeOrigin: true,
  //     cookieDomainRewrite: "passport.test.ximalaya.com",
  //   })
  // );
};
