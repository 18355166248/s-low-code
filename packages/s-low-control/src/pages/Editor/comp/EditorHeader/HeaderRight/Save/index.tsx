import { updateProjectCode } from "@/services/project";
import { Button, notification } from "antd";
import { inject, observer } from "mobx-react";
import { FC } from "react";

const Save: FC = ({ edit }: any) => {
  const { codeTree, project } = edit;

  function onSave() {
    updateProjectCode({
      ...project,
      code: JSON.stringify(codeTree.children),
    }).then(() => {
      notification.success({ message: "保存成功" });
    });
  }

  return (
    <Button type="primary" onClick={onSave}>
      保存
    </Button>
  );
};

export default inject("edit")(observer(Save));
