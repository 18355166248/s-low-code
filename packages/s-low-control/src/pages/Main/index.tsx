import { Layout } from "antd";
import { FC, Suspense, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import MainHeader from "./Header";
import "./index.scoped.scss";

interface Props {}

const Main: FC<Props> = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/home");
    }
  }, [location, navigate]);

  return (
    <Layout className="h-full flex flex-col">
      <MainHeader />
      <Suspense>
        <Outlet />
      </Suspense>
    </Layout>
  );
};

export default Main;
