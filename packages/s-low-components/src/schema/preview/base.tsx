import LowImage from "../../PreviewComponents/LowImage";
import LowTitle from "../../PreviewComponents/LowTitle";
import LowTabs from "../../PreviewComponents/LowTabs";

export type editKey = keyof typeof previewField;

const previewField = {
  LowImage: (props: any) => <LowImage {...props} />,
  LowTitle: (props: any) => <LowTitle {...props} />,
  LowTabs: (props: any) => <LowTabs {...props} />,
};

export default previewField;
