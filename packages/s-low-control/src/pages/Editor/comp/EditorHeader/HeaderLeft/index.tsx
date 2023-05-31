import { inject, observer } from "mobx-react";
import { FC } from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

interface HeaderLeftProps {}

const HeaderLeft: FC<HeaderLeftProps> = (props: any) => {
  const { edit } = props;
  const { project } = edit;
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return (
    <div className="inline-flex justify-between items-center h-full pl-6">
      <ArrowLeftOutlined className="cursor-pointer color" onClick={goBack} />
      <span className="ml-2">{project?.name}</span>
    </div>
  );
};

export default inject("edit")(observer(HeaderLeft));
