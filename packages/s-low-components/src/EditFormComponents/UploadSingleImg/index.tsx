import ImgCrop from "antd-img-crop";
import type {
  RcFile,
  UploadChangeParam,
  UploadFile,
  UploadProps,
} from "antd/es/upload/interface";
import React, { useEffect, useState } from "react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { isFunction } from "lodash-es";
import { message, Upload } from "antd";
import { getToken } from "src/utils/auth";

interface Props {
  onChange: (value: string) => void;
  value: string;
}

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const uploadProps: UploadProps = {
  beforeUpload: (file) => {
    const isPNG = file.type.indexOf("image/") > -1;
    if (!isPNG) {
      message.error(`${file.name} is not a png file`);
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isPNG || Upload.LIST_IGNORE;
  },
  action: `${process.env.REACT_APP_BASE_URL}/api/v1/upload/file`,
  headers: {
    Authorization: "Bearer " + getToken(),
  },
  listType: "picture-card",
  showUploadList: false,
};

const UploadSingleImg: React.FC<Props> = (props) => {
  const { onChange, value } = props;

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  useEffect(() => {
    setImageUrl(value);
  }, [value]);

  // const beforeUpload = (file: RcFile) => {
  //   const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  //   if (!isJpgOrPng) {
  //     message.error("You can only upload JPG/PNG file!");
  //   }
  //   const isLt2M = file.size / 1024 / 1024 < 2;
  //   if (!isLt2M) {
  //     message.error("Image must smaller than 2MB!");
  //   }
  //   getBase64(file as RcFile, (url) => {
  //     setLoading(false);
  //     setImageUrl(url);

  //     isFunction(onChange) && onChange(url);
  //   });

  //   return false;
  // };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  function onChangeUpload({ file }: UploadChangeParam<UploadFile<File>>) {
    if (file.status === "done") {
      onChange((file.response as any).data);
    }
  }

  return (
    <ImgCrop rotationSlider>
      <Upload {...uploadProps} onChange={onChangeUpload}>
        {imageUrl ? (
          <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
        ) : (
          uploadButton
        )}
      </Upload>
    </ImgCrop>
  );
};

export default UploadSingleImg;
