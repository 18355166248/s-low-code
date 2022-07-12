import UploadSingleImg from "@/EditFormComponents/UploadSingleImg";
import { editKey, Field } from "../types";

const editField: Record<editKey, Field[]> = {
  LowImage: [
    {
      key: "imgContent",
      name: "图片内容",
      type: "title",
      children: [
        {
          key: "url",
          name: "图片上传",
          type: "custom",
          component: UploadSingleImg,
        },
      ],
    },
  ],
  LowTitle: [
    {
      key: "children",
      name: "标题",
      type: "Input",
    },
  ],
};

export default editField;
