var whiteImagesList = ["gundam"];

// Listen to fetch events
// eslint-disable-next-line no-restricted-globals
self.addEventListener("fetch", function (event) {
  // Check if the image is a jpeg
  const url = event.request.url;
  if (/\.jpg$|.jpeg$|.png$/.test(event.request.url)) {
    if (whiteImagesList.some((v) => url.indexOf(v) > -1)) return;

    // Inspect the accept header for WebP support
    var supportsWebp = false;
    if (event.request.headers.has("accept")) {
      supportsWebp = event.request.headers.get("accept").includes("webp");
    }

    // If we support WebP
    if (supportsWebp) {
      // Clone the request
      var req = event.request.clone();

      // Build the return URL
      var returnUrl = req.url.substr(0, req.url.lastIndexOf(".")) + ".webp";

      event.respondWith(
        fetch(returnUrl, {
          mode: "no-cors",
        })
      );
    }
  }
});

// service-worker.js
// SW 不再在 install 阶段执行 skipWaiting 了

// eslint-disable-next-line no-restricted-globals
self.addEventListener("message", (event) => {
  if (event.data === "skipWaiting") {
    console.log("更新sw2-");
    // eslint-disable-next-line no-restricted-globals
    self.skipWaiting();
  }
});
