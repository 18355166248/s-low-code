importScripts("https://unpkg.com/prettier@2.2.1/standalone.js");
importScripts("https://unpkg.com/prettier@2.2.1/parser-babel.js");

self.addEventListener(
  "message",
  function (e) {
    console.log(111, e.data);
    self.postMessage(
      prettier.format(e.data, {
        parser: "babel",
        plugins: prettierPlugins,
      })
    );
  },
  false
);

// onmessage = (e) => {
//   console.log(`收到了主进程发出的信息：${e.data}`);
//   //收到了主进程发出的信息：hello worker
//   postMessage("你好，我是子进程！");
// };
