import React, { FC, useCallback, useEffect, useState } from "react";
import { Modal } from "antd";
import { isFunction } from "lodash-es";

export type CtrlRef = {
  open: () => void;
  close: () => void;
  loading: () => void;
};

interface Props {
  width?: string | number;
  title: string;
  children: JSX.Element;
  ctrlRef: { current: CtrlRef };
  onOk?: () => void;
  onCancel?: () => void;
}

const XModal: FC<Props> = (props: Props) => {
  const { width = 500, title, ctrlRef, onOk, onCancel, children } = props;

  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const _close = useCallback(() => {
    setVisible(false);
    if (isFunction(onCancel)) onCancel();
  }, [onCancel]);

  useEffect(() => {
    if (!ctrlRef.current) {
      ctrlRef.current = {
        open,
        close: _close,
        loading,
      };
    }
  }, [_close, ctrlRef]);

  function open() {
    setVisible(true);
  }
  function _onOk() {
    if (isFunction(onOk)) onOk();
  }
  function loading(bool: boolean = true) {
    setConfirmLoading(bool);
  }

  return (
    <Modal
      width={width}
      title={title}
      open={visible}
      confirmLoading={confirmLoading}
      onOk={_onOk}
      onCancel={_close}
      destroyOnClose
    >
      {children}
    </Modal>
  );
};

export default XModal;
