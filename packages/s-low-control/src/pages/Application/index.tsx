import FullScreenLoading from "@/components/Loading/FullScreenLoading";
import { Layout, Spin } from "antd";
import { FC, Suspense } from "react";
import { createPortal } from "react-dom";
import { Outlet } from "react-router-dom";
import AppMenu from "./AppMenu";

const { Sider, Content } = Layout;

interface Props {}

const Application: FC<Props> = () => {
  return (
    <Layout>
      <Sider style={{ backgroundColor: "white" }}>
        <AppMenu />
      </Sider>
      <Content>
        <Suspense fallback={<FullScreenLoading />}>
          <Outlet />
        </Suspense>
      </Content>
    </Layout>
  );
};

export default Application;
