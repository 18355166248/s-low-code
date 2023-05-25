import { Button } from "antd";
import { FC } from "react";
import GunDamImg from "@/assets/images/main/gundam.jpeg";

import "./index.scoped.scss";
import { useNavigate } from "react-router-dom";

interface MainContentProps {}

const MainContent: FC<MainContentProps> = () => {
  const navigate = useNavigate();

  function goApplication() {
    navigate("/application/user");
  }

  return (
    <div className="bg-blue-50 relative content grow shrink basis-full flex">
      <div className="left">
        <div className="operate mt-20 mx-20 bg-white rounded-3xl inline-flex flex-col  items-left pl-10 pr-20 pt-10 pb-20">
          <div className="mb-10">
            <h3 className="text-2xl">SLow低代码</h3>
          </div>
          <div className="flex">
            <Button
              type="primary"
              size="large"
              className="mr-4"
              onClick={goApplication}
            >
              开始使用
            </Button>
            <Button size="large">操作指南</Button>
          </div>
        </div>
      </div>
      <div className="right pr-20 pt-20">
        <img src={GunDamImg} alt="" />
      </div>
    </div>
  );
};

export default MainContent;
