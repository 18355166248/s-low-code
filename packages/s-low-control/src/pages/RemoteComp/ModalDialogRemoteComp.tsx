import { Button, Input, Form, notification, Divider, Modal } from "antd";
import React, { FC, useState, useEffect } from "react";
import { useRemoteCompContext } from "./RemoteComp.context";
import { observer } from "mobx-react-lite";
import UploadFileZip from "./components/UploadFile";
import {
  createRemoteComp,
  createRemoteCompVersion,
} from "@/services/remoteComp";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const ModalDialog: FC<Props> = () => {
  const { modalDialogRef, modalOption, getList } = useRemoteCompContext();
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
    visible &&
      form.setFieldsValue({
        name: modalOption.initialValues?.name,
        zhName: modalOption.initialValues?.zhName,
      });
  }, [
    visible,
    modalOption.initialValues?.name,
    modalOption.initialValues?.zhName,
    form,
  ]);

  function submitHandle(formData: any) {
    const isCreate = modalOption.type === "add";
    const data = new FormData();
    if (isCreate) {
      data.append("name", formData.name);
      data.append("zhName", formData.zhName);
      data.append("version", formData.version);
      data.append("file", formData.file.file);
    } else {
      data.append("version", formData.version);
      data.append("file", formData.file.file);
    }
    const requestMethod = isCreate ? createRemoteComp : createRemoteCompVersion;

    requestMethod(data, modalOption.initialValues?.id)
      .then(() => {
        notification.success({ message: `${modalOption.title}成功！` });
        onCancel();
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
        labelCol={{ flex: "0 0 110px" }}
      >
        <Form.Item
          label="组件名(英文)"
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
        <Form.Item
          label="组件名(中文)"
          name="zhName"
          rules={[
            {
              required: true,
              message: "请输入",
            },
          ]}
        >
          <Input disabled={formDisabled} />
        </Form.Item>
        <Form.Item
          label="版本号"
          name="version"
          rules={[
            {
              required: true,
              message: "请输入",
            },
          ]}
        >
          <Input disabled={formDisabled} />
        </Form.Item>
        <Form.Item
          label="打包组件"
          name="file"
          rules={[
            {
              required: true,
              message: "请输入",
            },
          ]}
        >
          <UploadFileZip />
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
