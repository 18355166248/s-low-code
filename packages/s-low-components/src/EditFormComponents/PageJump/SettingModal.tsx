import { Input, Form, Modal, Tabs } from "antd";
import { forwardRef, useImperativeHandle, useMemo, useState } from "react";
import { PageJumpProps } from ".";
import type { TabsProps } from "antd";

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

  const items: TabsProps["items"] = useMemo(
    () =>
      Object.values(tagMap).map((tag) => ({
        key: tag.key,
        label: tag.name,
        children: tag.render,
      })),
    []
  );

  return (
    <Modal
      title="请选择跳转页面"
      open={isModalVisible}
      onOk={handleOk}
      onCancel={close}
    >
      <Form form={form} onValuesChange={onValuesChange} initialValues={value}>
        <Form.Item noStyle name="config" initialValue={tagMap.url.key}>
          <Tabs items={items} />
        </Form.Item>
      </Form>
    </Modal>
  );
});

export default SettingModal;
