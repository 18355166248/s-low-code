import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "mobx-react";
import { AppStore } from "@/stores/AppStore";
import { ConfigProvider } from "antd";
import { routes } from "./router";

const app = AppStore.create({ userInfo: { name: "" } });

const router = createBrowserRouter(routes);

function App() {
  return (
    <Provider app={app}>
      <ConfigProvider componentSize="small">
        <RouterProvider router={router} />
      </ConfigProvider>
    </Provider>
  );
}

export default App;
