import React, { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useProjectContext } from "./Project.context";
import { ActionList } from "@xmly/mi-design";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const TableProject: FC<Props> = () => {
  const {
    pagination,
    list,
    getList,
    onTableChange,
    setModalOption,
    openModalHandle,
  } = useProjectContext();

  const navigate = useNavigate();

  const columns: ColumnsType<object> = [
    {
      title: "项目名称",
      dataIndex: "name",
      key: "name",
      width: 300,
    },
    {
      title: "描述",
      dataIndex: "description",
      key: "description",
      ellipsis: true,
    },
    {
      title: "操作",
      fixed: "right",
      width: 120,
      render: (record: any) => {
        const actionList: any[] = [
          {
            type: "text",
            text: "搭建",
            onClick: () => {
              navigate(`/editor/${record.id}`);
            },
          },
          {
            type: "text",
            text: "编辑",
            onClick: () => {
              setModalOption({
                initialValues: record,
                title: "编辑",
                type: "edit",
              });
              openModalHandle();
            },
          },
          {
            type: "text",
            text: "查看",
            onClick: () => {
              setModalOption({
                initialValues: record,
                title: "查看",
                type: "detail",
              });
              openModalHandle();
            },
          },
        ];
        return <ActionList columns={actionList} />;
      },
    },
  ];

  useEffect(() => {
    getList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Table
      style={{ marginTop: 16 }}
      dataSource={list.data}
      columns={columns}
      rowKey="id"
      loading={list.pending}
      pagination={{ ...pagination, hideOnSinglePage: false }}
      onChange={onTableChange}
    />
  );
};

export default observer(TableProject);
