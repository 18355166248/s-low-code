import { Tag } from "antd";
import React, { FC, useRef } from "react";
import styles from "./index.module.scss";
import SettingModal, {
  JumpFormValuesInterface,
  refProps,
  tagMap,
} from "./SettingModal";

export interface PageJumpProps {
  onChange: (value: JumpFormValuesInterface) => void;
  value: JumpFormValuesInterface;
}
const PageJump: FC<PageJumpProps> = (props) => {
  const { value } = props;
  const modalRef = useRef<refProps>(null);

  function open() {
    modalRef.current?.open();
  }

  return (
    <>
      <div className="flex items-center">
        {value?.config && (
          <Tag color="#108ee9">{tagMap[value?.config]?.name}</Tag>
        )}
        <div onClick={open} className={`${styles.btn} cursor-pointer`}>
          {value?.config ? "修改" : "选择要跳转的页面"}
        </div>
      </div>
      <SettingModal ref={modalRef} {...props} />
    </>
  );
};

export default PageJump;
