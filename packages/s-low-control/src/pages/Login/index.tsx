import { Button, Form, Input } from "antd";
import { FC, useEffect } from "react";
import "./index.scoped.scss";
import LoginLeftImg from "../../assets/images/login/login_left.png";
import { isLogin, useAuth } from "../Auth/AuthContext";
import { LOGIN_DTO } from "@/services/types/login";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/svg/slow.svg";

interface LoginProps {}

const Login: FC<LoginProps> = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  function goHome() {
    navigate("/", { replace: true });
  }

  function onFinish(values: LOGIN_DTO["params"]) {
    signin(values).then((res) => {
      goHome();
    });
  }
  useEffect(() => {
    if (location.pathname === "/login") {
      if (isLogin()) goHome();
    }
  }, []);

  return (
    <div className="login">
      <img src={LoginLeftImg} alt="" className="leftImg" />
      <div className="login-form bg-white p-10 rounded-md">
        <div className="flex items-center mb-10">
          <img src={logo} alt="" className="logo mr-4" />
          <h2>Slow Code</h2>
        </div>
        <Form
          layout="vertical"
          size="middle"
          requiredMark={false}
          onFinish={onFinish}
          initialValues={{ userName: "jiang", password: "123456" }}
        >
          <Form.Item
            className="mb-10"
            name="userName"
            label="用户名"
            rules={[
              {
                required: true,
                message: "请输入用户名",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            className="mb-10"
            name="password"
            label="密码"
            rules={[
              {
                required: true,
                message: "请输入密码",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item noStyle>
            <Button type="primary" className="submit" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
