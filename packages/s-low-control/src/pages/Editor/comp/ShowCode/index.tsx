import React, { useState } from "react";
import { Button, Modal } from "antd";
import CodeDetail from "./CodeDetail";

function ShowCode() {
  const [visible, setVisible] = useState<any>();

  function show() {
    setVisible(true);
  }
  return (
    <div>
      <Button onClick={show}>Code</Button>
      <Modal
        title="代码预览"
        width={800}
        visible={visible}
        destroyOnClose
        onCancel={() => setVisible(false)}
        footer={null}
      >
        <CodeDetail />
      </Modal>
    </div>
  );
}

export default ShowCode;
