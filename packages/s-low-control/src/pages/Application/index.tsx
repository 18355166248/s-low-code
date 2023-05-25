import { Layout } from "antd";
import { FC } from "react";
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
        <Outlet />
      </Content>
    </Layout>
  );
};

export default Application;
