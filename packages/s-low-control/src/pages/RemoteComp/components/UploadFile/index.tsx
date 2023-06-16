import { Upload, Button } from "antd";
import { FC, useMemo, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadFile, UploadProps } from "antd/es/upload/interface";

interface UploadFileProps {}

const UploadFileZip: FC<UploadFileProps> = (props) => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const uploadProps: UploadProps = useMemo(() => {
    return {
      onRemove: (file) => {
        const index = fileList.indexOf(file);
        const newFileList = fileList.slice();
        newFileList.splice(index, 1);
        setFileList(newFileList);
      },
      beforeUpload: (file) => {
        setFileList([file]);

        return false;
      },
      fileList,
    };
  }, [fileList]);

  return (
    <Upload {...uploadProps} {...props}>
      <Button icon={<UploadOutlined />}>点击上传</Button>
    </Upload>
  );
};

export default UploadFileZip;
