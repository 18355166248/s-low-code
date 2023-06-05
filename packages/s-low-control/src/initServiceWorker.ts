function emitUpdate() {
  if (window.confirm("页面有更新 请确认!") === true) {
    try {
      navigator.serviceWorker.getRegistration().then((reg: any) => {
        console.log("通知 sw 更新");
        reg.waiting.postMessage("skipWaiting");
      });
    } catch (e) {
      window.location.reload();
    }
  }
}

const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register(
        "/service-worker.js",
        {
          scope: "/",
        }
      );

      if (registration.waiting) {
        emitUpdate();
        return;
      }

      if (registration.installing) {
        console.log("正在安装 Service worker");
      } else if (registration.waiting) {
        console.log("已安装 Service worker installed");
      } else if (registration.active) {
        console.log("激活 Service worker");
      }

      // 避免无限刷新
      registration.onupdatefound = function () {
        const installingWorker = registration.installing;
        console.log(
          "🚀 ~ file: initServiceWorker.ts:33 ~ registerServiceWorker ~ installingWorker:",
          installingWorker
        );

        if (installingWorker) {
          installingWorker.onstatechange = function () {
            switch (installingWorker.state) {
              case "installed":
                if (navigator.serviceWorker.controller) {
                  // 更新
                  emitUpdate();
                }
                break;
            }
          };
        }
      };
    } catch (error) {
      console.error(`注册失败：${error}`);
    }
  }
};

registerServiceWorker();

export {};
