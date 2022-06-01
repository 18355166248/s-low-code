import React, { useState } from "react";
import { Button, Modal } from "antd";
import IframeHtml from './IframeHtml';

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
        title="预览"
        width={800}
        visible={visible}
        destroyOnClose
        onCancel={() => setVisible(false)}
        footer={null}
      >
        <IframeHtml />
      </Modal>
    </div>
  );
}

export default PreviewHtml;
