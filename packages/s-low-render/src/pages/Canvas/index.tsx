import React, { useEffect } from "react";

function Canvas() {
  useEffect(() => {
    getMessage();
  }, []);

  // 统一接收平台信息，调用对应方法处理
  function getMessage() {
    window.addEventListener("message", function (e) {
      if (e.source !== window.parent) return;

      if (e.data) {
        let { even, params } = e.data;

        if (even === "move") moveWaiting(params);
      }
    });
  }

  function moveWaiting(params: any) {
    console.log(22, params);
  }
  return <div>Canvas</div>;
}

export default Canvas;
