import * as React from "react";
import { Tabs } from "antd";

export type LowTabsPaneTypes = {};

const LowTabsPane: React.FC<LowTabsPaneTypes> = (props) => {
  return <Tabs.TabPane tab="Tab标题" children="Tab内容" {...props} />;
};

export default LowTabsPane;
