import { Dropdown, MenuProps } from "antd";
import { FC } from "react";
import logo from "../../../assets/images/svg/slow-txt.svg";
import { DownOutlined } from "@ant-design/icons";
import { useAuth } from "@/pages/Auth/AuthContext";
import "./index.scoped.scss";
import { Link } from "react-router-dom";

interface MainHeaderProps {}

const MainHeader: FC<MainHeaderProps> = () => {
  const { user, signout } = useAuth();
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "退出登录",
      onClick: signout,
    },
  ];
  return (
    <div className="header h-14 flex justify-between relative z-10 flex-none bg-white overflow-hidden">
      <Link to="/" className="left-logo h-full flex items-center">
        <img src={logo} alt="" className="inline-block logo" />
      </Link>
      <div className="inline-flex justify-between items-center pr-4 ">
        <Dropdown menu={{ items }}>
          <span className="color cursor-pointer">
            <span className="mr-2">{user?.userName}</span>
            <DownOutlined />
          </span>
        </Dropdown>
      </div>
    </div>
  );
};

export default MainHeader;
