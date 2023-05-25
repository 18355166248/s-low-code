import { Button, Form, Input } from "antd";
import { FC } from "react";
import "./index.scoped.scss";
import LoginLeftImg from "../../assets/images/login/login_left.png";
import { useAuth } from "../Auth/AuthContext";
import { LOGIN_DTO } from "@/services/types/login";
import { useNavigate } from "react-router-dom";

interface LoginProps {}

const Login: FC<LoginProps> = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();
  function onFinish(values: LOGIN_DTO["params"]) {
    signin(values).then((res) => {
      navigate("/");
    });
  }

  return (
    <div className="login">
      <img src={LoginLeftImg} alt="" className="leftImg" />
      <div className="login-form bg-white p-10 rounded-md">
        <h2 className="mb-10">Slow Code</h2>
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
