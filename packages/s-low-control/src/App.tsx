import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "mobx-react";
import { AppStore } from "@/stores/AppStore";
import { ConfigProvider } from "antd";
import { routes } from "./router";
import { Suspense } from "react";
import FullScreenLoading from "./components/Loading/FullScreenLoading";
import zhCN from "antd/locale/zh_CN";

const app = AppStore.create({ userInfo: { name: "" } });

const router = createBrowserRouter(routes);

function App() {
  return (
    <Provider app={app}>
      <ConfigProvider componentSize="middle" locale={zhCN}>
        <Suspense fallback={<FullScreenLoading />}>
          <RouterProvider router={router} />
        </Suspense>
      </ConfigProvider>
    </Provider>
  );
}

export default App;
