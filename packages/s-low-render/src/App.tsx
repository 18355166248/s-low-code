import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { Provider } from "mobx-react";
import { AppStore } from "@/stores/AppStore";
import Canvas from "./pages/Canvas";
import Preview from "./pages/Preview";
import { setToken } from "./utils/auth";

const app = AppStore.create({ userInfo: { name: "" } });

function App() {
  useEffect(() => {
    // 监听父组件传递过来的登录token
    window.addEventListener("message", updateToken);
    return () => {
      window.removeEventListener("message", updateToken);
    };
  }, []);

  function updateToken(e: any) {
    const { data } = e;
    const { even, params } = data;
    if (even === "updateToken") {
      setToken(params);
    }
  }
  return (
    <Provider app={app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Canvas />} />
          <Route path="/preview/:id" element={<Preview />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
