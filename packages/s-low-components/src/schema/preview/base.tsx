import LowImage from "../../PreviewComponents/LowImage";
import LowTitle from "../../PreviewComponents/LowTitle";

const previewField = {
  LowImage: (props: any) => <LowImage {...props} />,
  LowTitle: (props: any) => <LowTitle {...props} />,
};

export default previewField;
