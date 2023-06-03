import { getToken } from "@/utils/auth";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload, UploadProps, message } from "antd";
import { UploadChangeParam, UploadFile } from "antd/es/upload";
import { useState } from "react";
import { useImagesContext } from "./Images.context";

const uploadProps: UploadProps = {
  beforeUpload: (file) => {
    const isPNG = file.type.indexOf("image/") > -1;
    if (!isPNG) {
      message.error(`${file.name} is not a png file`);
    }
    return isPNG || Upload.LIST_IGNORE;
  },
  action: `${process.env.REACT_APP_BASE_URL}/api/v1/upload/file`,
  headers: {
    Authorization: "Bearer " + getToken(),
  },
};

function UploadBtn() {
  const { getList } = useImagesContext();

  const [fileList, setFileList] = useState<UploadFile<File>[]>([]);

  function onChange({ file, fileList }: UploadChangeParam<UploadFile<File>>) {
    if (file.status === "done") {
      getList();
      setTimeout(() => {
        setFileList([]);
      }, 400);
    } else {
      setFileList(fileList);
    }
  }

  return (
    <Upload {...uploadProps} fileList={fileList} onChange={onChange}>
      <Button type="primary" icon={<UploadOutlined />}>
        上传图片
      </Button>
    </Upload>
  );
}

export default UploadBtn;
