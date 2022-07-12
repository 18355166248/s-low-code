import { FC } from "react";

interface Props {
  url?: string;
}

const LowImage: FC<Props> = (props: Props) => {
  const { url } = props;
  return url ? (
    <div>
      <img src={url} alt="" />
    </div>
  ) : (
    <div
      className="flex flex-col items-center justify-center text-gray-400"
      style={{ height: 100 }}
    >
      <span className="iconfont slow-tupian1 mb-2"></span>
      点击添加图片
    </div>
  );
};

export default LowImage;
