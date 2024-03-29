import { Button, Input, Form, notification, Divider, Modal } from 'antd';
import React, { FC, useState, useEffect } from 'react';
import { useMenuContext } from './Menu.context';
import { observer } from 'mobx-react-lite';

function add(data: any) {
  return Promise.resolve();
}

function modify(data: any) {
  return Promise.resolve();
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const ModalDialog: FC<Props> = () => {
  const {
    modalDialogRef,
    modalOption,
    getList,
    modalShow,
  } = useMenuContext();
  const [visible, setVisible] = useState(false);

  const formDisabled = modalOption.type === 'detail';

  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    modalDialogRef.current = {
      open: () => setVisible(true),
      close: () => setVisible(false),
    };
  }, []);

  React.useEffect(() => {
    form.setFieldsValue(modalOption.initialValues);
  }, [modalShow]);

  function submitHandle(formData: any) {
    setLoading(true);
    const requestMethod = modalOption.type === 'add' ? add : modify;
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
    <Modal title={modalOption.title} open={visible} footer={null}>
      <Form form={form} onFinish={submitHandle} className="mt-5">
        <Form.Item
          label="demo"
          name="demo"
          rules={[
            {
              required: true,
              message: "请输入",
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
    </Modal>
  );
};

export default observer(ModalDialog);
