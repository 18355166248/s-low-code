import React, { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useMenuContext } from "./Menu.context";
import { ActionList } from "@xmly/mi-design";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const TableMenu: FC<Props> = () => {
  const {
    pagination,
    list,
    getList,
    onTableChange,
    setModalOption,
    openModalHandle,
  } = useMenuContext();

  const columns: ColumnsType<object> = [
    {
      title: "菜单名称",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "权限",
      dataIndex: "acl",
      key: "acl",
    },
    // {
    //   title: "操作",
    //   fixed: "right",
    //   width: 100,
    //   render: (record: any) => {
    //     const actionList: any[] = [
    //       {
    //         type: "text",
    //         text: "编辑",
    //         onClick: () => {
    //           setModalOption({
    //             initialValues: record,
    //             title: "编辑",
    //             type: "edit",
    //           });
    //           openModalHandle();
    //         },
    //       },
    //       {
    //         type: "text",
    //         text: "查看",
    //         onClick: () => {
    //           setModalOption({
    //             initialValues: record,
    //             title: "查看",
    //             type: "detail",
    //           });
    //           openModalHandle();
    //         },
    //       },
    //     ];
    //     return <ActionList columns={actionList} />;
    //   },
    // },
  ];

  useEffect(() => {
    getList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Table
      scroll={{ x: "max-content" }}
      style={{ marginTop: 16 }}
      dataSource={list.data}
      columns={columns}
      rowKey="id"
      loading={list.pending}
      pagination={false}
      onChange={onTableChange}
    />
  );
};

export default observer(TableMenu);
