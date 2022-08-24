import LowImage from "@/PreviewComponents/LowImage";
import LowTitle from "@/PreviewComponents/LowTitle";

const previewField = {
  LowImage: (props: any) => <LowImage {...props}> /</LowImage>,
  LowTitle: (props: any) => <LowTitle {...props}> /</LowTitle>,
};

export default previewField;
