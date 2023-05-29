import { FilterFormLayout } from "@xmly/mi-design";
import { Form, Input } from "antd";
import React, { FC } from "react";
import { useUserContext } from "./User.context";

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
  } = useUserContext();

  function onOk() {
    resetPagination();
    getList();
  }

  function onCreact() {
    setModalOption({
      initialValues: {},
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
      <Form.Item label="用户名" name="userName">
        <Input allowClear={true} />
      </Form.Item>
    </FilterFormLayout>
  );
};

export default FilterForm;
