import React, { FC } from "react";
import cs from "classnames";
import styles from "./index.module.scss";
import "./index.scss";

export const alignEnum = {
  start: {
    key: "start",
    label: "居左",
    value: "justify-start",
  },
  end: {
    key: "end",
    label: "居右",
    value: "justify-end",
  },
  center: {
    label: "居中",
    key: "center",
    value: "justify-center",
  },
  between: {
    key: "between",
    label: "两端对齐",
    value: "justify-between",
  },
  around: {
    key: "around",
    label: "间隔相等",
    value: "justify-around",
  },
  evenly: {
    key: "evenly",
    label: "间隔相等2",
    value: "justify-evenly",
  },
};

type ALIGN = keyof typeof alignEnum;

interface Props {
  title: string; // 标题
  subTitle: string; // 副标题
  align: ALIGN; // 布局选择
  backgroundColor?: string; // 背景色
  paddingX?: string; // 左右边距
  paddingY?: string; // 上下边距
  titleFontSize?: string; // 标题大小
  subTitleFontSize?: string; // 副标题带下
  titleColor?: string; // 标题颜色
  subTitleColor?: string; // 副标题颜色
}

const LowTitle: FC<Props> = ({
  title,
  subTitle,
  align,
  backgroundColor,
  paddingX = 0,
  paddingY = 0,
  titleFontSize = 20,
  subTitleFontSize = 12,
  titleColor,
  subTitleColor,
}) => {
  return (
    <div className={styles.box} style={{ backgroundColor }}>
      <div
        className={cs(styles.lowTitle, alignEnum[align].value, ["flex"])}
        style={{
          padding: `${paddingY}px ${paddingX}px`,
        }}
      >
        <span
          className={cs([styles.title, "flex"])}
          style={{ fontSize: titleFontSize, color: titleColor }}
        >
          {title}
        </span>
        <span
          className={styles.subTitle}
          style={{ fontSize: subTitleFontSize, color: subTitleColor }}
        >
          {subTitle}
        </span>
      </div>
    </div>
  );
};

export default LowTitle;
