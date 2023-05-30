import XModal from "@/components/Modal/XModal";
import { Button, Input, Form, notification, Divider, Select } from "antd";
import React, { FC, useState } from "react";
import { useUserContext } from "./User.context";
import { observer } from "mobx-react-lite";
import { createUser, updateUser } from "@/services/user";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const ModalDialog: FC<Props> = () => {
  const { modalDialogRef, modalOption, getList, roleList } = useUserContext();

  const formDisabled = modalOption.type === "detail";
  const isCreate = modalOption.type === "add";

  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    form.setFieldsValue(modalOption.initialValues);
  }, [modalOption.initialValues]);

  function submitHandle(formData: any) {
    setLoading(true);
    const requestMethod = modalOption.type === "add" ? createUser : updateUser;
    if (modalOption.initialValues.id) {
      formData.id = modalOption.initialValues.id;
    }
    requestMethod(formData)
      .then(() => {
        notification.success({ message: `${modalOption.title}成功！` });
        modalDialogRef.current.close();
        getList();
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function onCancel() {
    form.resetFields();
    modalDialogRef.current.close();
  }

  function onChange(values: any) {
    console.log(values);
  }

  return (
    <XModal title={modalOption.title} ctrlRef={modalDialogRef} footer={null}>
      <Form
        form={form}
        onFinish={submitHandle}
        className="mt-10"
        labelCol={{
          flex: "0 0 80px",
        }}
        onValuesChange={onChange}
      >
        <Form.Item
          label="用户名"
          name="userName"
          rules={[
            {
              required: true,
              message: "请输入用户名",
            },
          ]}
        >
          <Input disabled={formDisabled} />
        </Form.Item>
        {isCreate ? (
          <Form.Item
            label="密码"
            name="password"
            rules={[
              {
                required: true,
                message: "请输入密码",
              },
            ]}
          >
            <Input disabled={formDisabled} />
          </Form.Item>
        ) : null}

        <Form.Item
          label="角色"
          name="roles"
          rules={[
            {
              required: true,
              message: "请选择角色",
            },
          ]}
        >
          <Select
            disabled={formDisabled}
            mode="multiple"
            style={{ width: "100%" }}
          >
            {roleList.map((role: any) => (
              <Select.Option key={role.id}>{role.name}</Select.Option>
            ))}
          </Select>
        </Form.Item>

        {modalOption.type !== "detail" && (
          <div className="mt-10">
            <Divider />
            <div className="flex justify-end">
              <Button onClick={onCancel} className="mr-3">
                取消
              </Button>
              <Button type="primary" htmlType="submit" loading={loading}>
                确定
              </Button>
            </div>
          </div>
        )}
      </Form>
    </XModal>
  );
};

export default observer(ModalDialog);
