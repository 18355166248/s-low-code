import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "mobx-react";
import { AppStore } from "@/stores/AppStore";
import { ConfigProvider, Spin } from "antd";
import { routes } from "./router";
import { Suspense } from "react";

const app = AppStore.create({ userInfo: { name: "" } });

const router = createBrowserRouter(routes);

function App() {
  return (
    <Provider app={app}>
      <ConfigProvider componentSize="middle">
        <Suspense fallback={<Spin />}>
          <RouterProvider router={router} />
        </Suspense>
      </ConfigProvider>
    </Provider>
  );
}

export default App;
