import { Button } from "antd";
import { inject, observer } from "mobx-react";
import { FC } from "react";

const OpenLine: FC = ({ edit }: any) => {
  const { id } = edit.project;
  function open() {
    window.open(`http://localhost:3900/preview/${id}`);
  }
  return <Button onClick={open}>在线地址</Button>;
};

export default inject("edit")(observer(OpenLine));
