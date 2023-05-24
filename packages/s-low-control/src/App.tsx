import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { Provider } from "mobx-react";
import { AppStore } from "@/stores/AppStore";
import Editor from "./pages/Editor";
import { ConfigProvider } from "antd";

const app = AppStore.create({ userInfo: { name: "" } });

function App() {
  return (
    <Provider app={app}>
      <ConfigProvider componentSize="small">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Editor />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ConfigProvider>
    </Provider>
  );
}

export default App;
