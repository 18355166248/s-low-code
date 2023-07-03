import React, { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useRemoteCompContext } from "./RemoteComp.context";
import { ActionList } from "jiang-btp-design";
import { Table, Tag } from "antd";
import { ColumnsType } from "antd/es/table";
import { generateRandomHexColor } from "s-low-core";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const TableRemoteComp: FC<Props> = () => {
  const {
    pagination,
    list,
    getList,
    onTableChange,
    setModalOption,
    openModalHandle,
  } = useRemoteCompContext();

  const columns: ColumnsType<object> = [
    {
      title: "中文名",
      dataIndex: "zhName",
      key: "zhName",
    },
    {
      title: "名称",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "版本",
      dataIndex: "versions",
      key: "versions",
      render: (list: any[]) => (
        <>
          {list.map((v) => (
            <Tag key={v.version} color={generateRandomHexColor()}>
              {v.version}
            </Tag>
          ))}
        </>
      ),
    },
    {
      title: "当前版本",
      dataIndex: "currentVersion",
      key: "currentVersion",
    },
    {
      title: "操作",
      fixed: "right",
      width: 100,
      render: (record: any) => {
        const actionList: any[] = [
          {
            type: "text",
            text: "新增版本",
            onClick: () => {
              setModalOption({
                initialValues: record,
                title: "新增版本",
                type: "edit",
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
      scroll={{ x: "max-content" }}
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

export default observer(TableRemoteComp);
