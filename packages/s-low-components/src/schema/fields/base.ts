import { FieldNode } from "../types";

const data: FieldNode[] = [
  {
    name: "图片",
    type: "LowImage",
    props: {},
    iconfont: "slow-tupian",
  },
  {
    name: "标题",
    type: "LowTitle",
    props: {
      title: "英雄联盟",
      subTitle: "惩戒之⚔",
      align: "start",
      backgroundColor: "rgba(255, 255, 255, 1)",
      titleColor: "rgba(74, 144, 226, 1)",
      subTitleColor: "rgba(74, 144, 226, 1)",
    },
    iconfont: "slow-biaotizujian",
  },
  {
    name: "标签",
    type: "LowTabs",
    props: {
      centered: true,
      canDrop: true,
      items: [{ label: "标题1", key: "1", children: [] }],
    },
    iconfont: "slow-bootstrap_tabs",
  },
];

export default data;
