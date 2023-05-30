import React, { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useUserContext } from "./User.context";
import { ActionList } from "@xmly/mi-design";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const TableUser: FC<Props> = () => {
  const {
    pagination,
    list,
    getList,
    onTableChange,
    setModalOption,
    openModalHandle,
    initRoleList,
  } = useUserContext();

  const columns: ColumnsType<object> = [
    {
      title: "用户名",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "角色名",
      dataIndex: "roles",
      key: "roles",
      render: (value: any[]) => {
        return value.map((v) => v.name).join(", ");
      },
    },
    {
      title: "操作",
      fixed: "right",
      width: 100,
      render: (record: any) => {
        const actionList: any[] = [
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
    initRoleList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Table
      scroll={{ x: "max-content" }}
      dataSource={list.data}
      columns={columns}
      rowKey="id"
      loading={list.pending}
      pagination={{
        ...pagination,
        hideOnSinglePage: false,
      }}
      onChange={onTableChange}
    />
  );
};

export default observer(TableUser);
