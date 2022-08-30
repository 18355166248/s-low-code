import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { Provider } from "mobx-react";
import { AppStore } from "@/stores/AppStore";
import Canvas from "./pages/Canvas";
import Preview from "./pages/Preview";

const app = AppStore.create({ userInfo: { name: "" } });

function App() {
  return (
    <Provider app={app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Canvas />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
