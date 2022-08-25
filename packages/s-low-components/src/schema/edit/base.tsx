import ColorPicker from "../../EditFormComponents/ColorPicker";
import { Slider } from "antd";
import { lazy } from "react";
import { EditFieldType } from "../types";

const editField: EditFieldType = {
  LowImage: {
    list: [
      {
        key: "imgContent",
        name: "图片内容",
        type: "title",
        children: [
          {
            key: "url",
            name: "图片上传",
            type: "custom",
            component: lazy(
              () =>
                import(
                  /* webpackChunkName: "components-UploadSingleImg" */ "../../EditFormComponents/UploadSingleImg"
                )
            ),
          },
          {
            key: "jumpConfig",
            name: "页面跳转",
            type: "custom",
            component: lazy(
              () =>
                import(
                  /* webpackChunkName: "components-PageJump" */ "../../EditFormComponents/PageJump"
                )
            ),
          },
        ],
      },
      {
        key: "imgStyle",
        name: "图片样式",
        type: "title",
        children: [
          {
            key: "paddingXY",
            name: "左右边距",
            type: "custom",
            component: (props: any) => <Slider min={0} max={100} {...props} />,
          },
          {
            key: "radiusDep",
            name: "图片圆角",
            type: "custom",
            component: (props: any) => <Slider min={0} max={50} {...props} />,
          },
          {
            key: "paddingTop",
            name: "上边距",
            type: "custom",
            component: (props: any) => <Slider min={0} max={100} {...props} />,
          },
          {
            key: "paddingBottom",
            name: "下边距",
            type: "custom",
            component: (props: any) => <Slider min={0} max={100} {...props} />,
          },
        ],
      },
    ],
  },
  LowTitle: {
    list: [
      {
        key: "titleContent",
        name: "标题内容",
        type: "title",
        children: [
          {
            key: "title",
            name: "标题",
            type: "Input",
          },
          {
            key: "subTitle",
            name: "副标题",
            type: "Input",
          },
        ],
      },
      {
        key: "titleFlex",
        name: "标题布局",
        type: "title",
        children: [
          {
            key: "align",
            name: "布局选择",
            type: "Input",
          },
        ],
      },
      {
        key: "titleStyle",
        name: "标题样式",
        type: "title",
        children: [
          {
            key: "paddingX",
            name: "左右边距",
            type: "custom",
            component: (props: any) => <Slider min={0} max={100} {...props} />,
          },
          {
            key: "paddingY",
            name: "上下边距",
            type: "custom",
            component: (props: any) => <Slider min={0} max={100} {...props} />,
          },
          {
            key: "titleFontSize",
            name: "标题字体",
            type: "custom",
            component: (props: any) => <Slider min={10} max={50} {...props} />,
          },
          {
            key: "subTitleFontSize",
            name: "副标题字体",
            type: "custom",
            component: (props: any) => <Slider min={10} max={50} {...props} />,
          },
          {
            key: "titleColor",
            name: "标题颜色",
            type: "custom",
            component: (props: any) => <ColorPicker {...props} />,
          },
          {
            key: "subTitleColor",
            name: "副标题颜色",
            type: "custom",
            component: (props: any) => <ColorPicker {...props} />,
          },
          {
            key: "backgroundColor",
            name: "背景色",
            type: "custom",
            component: (props: any) => <ColorPicker {...props} />,
          },
        ],
      },
    ],
  },
};

export default editField;
