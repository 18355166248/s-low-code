import { Input, Form, Modal, Tabs } from "antd";
import { mapKeys } from "lodash-es";
import React, { forwardRef, useImperativeHandle, useState } from "react";
import { PageJumpProps } from ".";

interface Props extends PageJumpProps {}
export interface refProps {
  open(): void;
  close(): void;
}

export interface JumpFormValuesInterface {
  config: keyof typeof tagMap;
  url?: string;
}

export const tagMap = {
  url: {
    key: "url" as "url",
    name: "站外链接",
    render: <Input placeholder="请输入外部链接H5地址" />,
  },
};

const SettingModal = forwardRef<refProps, Props>((props, ref) => {
  const { value, onChange } = props;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  useImperativeHandle(ref, () => ({
    open,
    close,
  }));

  function open() {
    setIsModalVisible(true);
  }

  const handleOk = () => {
    setIsModalVisible(false);
  };

  function close() {
    form.resetFields();
    setIsModalVisible(false);
  }

  function onValuesChange(val: string, values: JumpFormValuesInterface) {
    onChange({ ...values });
  }

  return (
    <Modal
      title="请选择跳转页面"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={close}
    >
      <Form form={form} onValuesChange={onValuesChange} initialValues={value}>
        <Form.Item noStyle name="config" initialValue={tagMap.url.key}>
          <Tabs>
            {Object.values(tagMap).map((tag) => (
              <Tabs.TabPane tab={tag.name} key={tag.key}>
                <Form.Item noStyle name={tag.key}>
                  {tag.render}
                </Form.Item>
              </Tabs.TabPane>
            ))}
          </Tabs>
        </Form.Item>
      </Form>
    </Modal>
  );
});

export default SettingModal;
