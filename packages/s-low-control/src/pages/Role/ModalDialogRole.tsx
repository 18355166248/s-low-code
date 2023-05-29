import XModal from "@/components/Modal/XModal";
import { Button, Input, Form, notification, Divider } from "antd";
import React, { FC, useState } from "react";
import { useRoleContext } from "./Role.context";
import { observer } from "mobx-react-lite";
import { add, modify } from "@/services/test";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const ModalDialog: FC<Props> = () => {
  const { modalDialogRef, modalOption, getList, modalShow } = useRoleContext();

  const formDisabled = modalOption.type === "detail";

  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    form.setFieldsValue(modalOption.initialValues);
  }, [modalShow]);

  function submitHandle(formData: any) {
    setLoading(true);
    const requestMethod = modalOption.type === "add" ? add : modify;
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
    <XModal title={modalOption.title} ctrlRef={modalDialogRef} footer={null}>
      <Form form={form} onFinish={submitHandle}>
        <Form.Item
          label="itemSourceType"
          name="itemSourceType"
          rules={[
            {
              required: true,
              type: "integer",
              message: "该值必须为整数",
              transform(value) {
                if (value) {
                  return Number(value);
                }
              },
            },
          ]}
        >
          <Input disabled={formDisabled} />
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
    </XModal>
  );
};

export default observer(ModalDialog);
