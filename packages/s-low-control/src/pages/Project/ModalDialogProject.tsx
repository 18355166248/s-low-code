import { Button, Input, Form, notification, Divider, Modal } from "antd";
import React, { FC, useState, useEffect } from "react";
import { useProjectContext } from "./Project.context";
import { observer } from "mobx-react-lite";
import { createProject, updateProject } from "@/services/project";

function add(data: any) {
  return Promise.resolve();
}

function modify(data: any) {
  return Promise.resolve();
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const ModalDialog: FC<Props> = () => {
  const { modalDialogRef, modalOption, getList } = useProjectContext();
  const [visible, setVisible] = useState(false);

  const formDisabled = modalOption.type === "detail";

  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    modalDialogRef.current = {
      open: () => setVisible(true),
      close: () => setVisible(false),
    };
  }, []);

  React.useEffect(() => {
    visible && form.setFieldsValue(modalOption.initialValues);
  }, [visible, modalOption.initialValues]);

  function submitHandle(formData: any) {
    setLoading(true);
    const requestMethod =
      modalOption.type === "add" ? createProject : updateProject;
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

  return (
    <Modal
      title={modalOption.title}
      open={visible}
      footer={null}
      onCancel={onCancel}
    >
      <Form
        form={form}
        onFinish={submitHandle}
        className="mt-5"
        labelCol={{ flex: "0 0 100px" }}
      >
        <Form.Item
          label="项目名称"
          name="name"
          rules={[
            {
              required: true,
              message: "请输入",
            },
          ]}
        >
          <Input disabled={formDisabled} />
        </Form.Item>
        <Form.Item label="描述" name="description">
          <Input.TextArea disabled={formDisabled} autoSize />
        </Form.Item>

        {modalOption.type !== "detail" && (
          <>
            <Divider className="mt-10" />
            <div className="flex justify-end">
              <Button onClick={onCancel} className="mr-3">
                取消
              </Button>
              <Button type="primary" htmlType="submit" loading={loading}>
                确定
              </Button>
            </div>
          </>
        )}
      </Form>
    </Modal>
  );
};

export default observer(ModalDialog);
