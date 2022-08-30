import React, { useState } from "react";
import { Button, Modal } from "antd";
import IframeHtml from "./IframeHtml";
import styles from "./index.module.scss";
import cs from "classnames";

interface Props {
  className?: string;
}

function PreviewHtml(props: Props) {
  const { className } = props;
  const [visible, setVisible] = useState<any>();

  function show() {
    setVisible(true);
  }

  return (
    <div className={className}>
      <Button type="primary" onClick={show}>
        预览
      </Button>
      <Modal
        width={423}
        visible={visible}
        destroyOnClose
        onCancel={() => setVisible(false)}
        footer={null}
      >
        <div className={cs(styles.box, "mt-10")}>
          <IframeHtml />
        </div>
      </Modal>
    </div>
  );
}

export default PreviewHtml;
