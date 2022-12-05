import { Form, Input, Button } from "antd";
import React, { FC, useEffect } from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

interface Props {
  onChange: any;
  value: any;
}

const TabsItems: FC<Props> = ({ onChange, value }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldValue("tabsItems", value);
  }, [value, form]);

  function onValuesChange(_: any, values: any) {
    if (Array.isArray(values.tabsItems)) {
      onChange(
        values.tabsItems.map((item: any, index: number) => {
          return {
            children: [],
            ...value[index],
            label: item.label,
            key: index,
          };
        })
      );
    }
  }

  return (
    <Form form={form} autoComplete="off" onValuesChange={onValuesChange}>
      <Form.List name="tabsItems">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <div
                className="flex items-center"
                key={key}
                style={{ marginBottom: 6 }}
              >
                <Form.Item
                  {...restField}
                  name={[name, "label"]}
                  style={{ marginBottom: 0, marginRight: 8 }}
                >
                  <Input />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </div>
            ))}
            <Form.Item>
              <Button
                onClick={() =>
                  add({
                    label: `标题${fields.length + 1}`,
                    key: fields.length + 1,
                  })
                }
                block
                icon={<PlusOutlined />}
              />
            </Form.Item>
          </>
        )}
      </Form.List>
    </Form>
  );
};

export default TabsItems;
