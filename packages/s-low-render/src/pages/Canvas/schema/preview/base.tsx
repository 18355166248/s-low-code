import LowImage from "@/slow-components/LowImage";
import LowTitle from "@/slow-components/LowTitle";

const previewField = {
  LowImage: (props: any) => <LowImage {...props}> /</LowImage>,
  LowTitle: (props: any) => <LowTitle {...props}> /</LowTitle>,
};

export default previewField;
