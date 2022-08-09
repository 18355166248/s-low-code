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
        key: "children",
        name: "标题",
        type: "Input",
      },
    ],
  },
};

export default editField;
