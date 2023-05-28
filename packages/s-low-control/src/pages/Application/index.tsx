import { Layout, Spin } from "antd";
import { FC, Suspense } from "react";
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
        <Suspense fallback={<Spin className="w-full h-full" />}>
          <Outlet />
        </Suspense>
      </Content>
    </Layout>
  );
};

export default Application;
