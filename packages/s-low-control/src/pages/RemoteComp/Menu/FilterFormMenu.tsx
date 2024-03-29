import { FilterFormLayout } from "jiang-btp-design";
import { Form, Input } from "antd";
import React, { FC } from "react";
import { useMenuContext } from "./Menu.context";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const FilterForm: FC<Props> = () => {
  const {
    setFilterParams,
    getList,
    reset,
    resetPagination,
    openModalHandle,
    setModalOption,
  } = useMenuContext();

  function onOk() {
    resetPagination();
    getList();
  }

  function onCreact() {
    setModalOption({
      initialValues: {
        itemSourceType: "",
        role: "",
        name: "",
        channelId: "",
      },
      title: "新增",
      type: "add",
    });
    openModalHandle();
  }

  function onReset() {
    reset();
  }

  function onValuesChange(_: any, allValues: any) {
    setFilterParams(allValues);
  }

  return (
    <FilterFormLayout
      onOk={onOk}
      onCreate={onCreact}
      onReset={onReset}
      onValuesChange={onValuesChange}
    >
      <Form.Item label="demo" name="Demo">
        <Input allowClear={true} />
      </Form.Item>
    </FilterFormLayout>
  );
};

export default FilterForm;
