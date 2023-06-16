import { FilterFormLayout } from "jiang-btp-design";
import { Form, Input } from "antd";
import React, { FC } from "react";
import { useRemoteCompContext } from "./RemoteComp.context";

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
  } = useRemoteCompContext();

  function onOk() {
    resetPagination();
    getList();
  }

  function onCreate() {
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
      onCreate={onCreate}
      onReset={onReset}
      onValuesChange={onValuesChange}
      labelWidth={40}
    >
      <Form.Item label="名称" name="name">
        <Input allowClear={true} />
      </Form.Item>
    </FilterFormLayout>
  );
};

export default FilterForm;
