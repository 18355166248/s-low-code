import { FC } from "react";

interface Props {
  url?: string;
  jumpConfig?: { config: string; url: string }; // 跳转地址
  paddingXY?: number; // 左右间距
  paddingTop?: number; // 上间距
  paddingBottom?: number; // 下间距
  radiusDep?: number; // 图片圆角
}

const LowImage: FC<Props> = (props: Props) => {
  const {
    url,
    paddingXY = 0,
    paddingTop = 0,
    paddingBottom = 0,
    radiusDep = 0,
    jumpConfig,
  } = props;

  function imgClick() {
    jumpConfig?.url && (window.location.href = jumpConfig?.url);
  }

  return url ? (
    <div>
      <img
        src={url}
        alt=""
        style={{
          paddingLeft: paddingXY,
          paddingRight: paddingXY,
          paddingTop,
          paddingBottom,
          borderRadius: `${radiusDep}%`,
        }}
        onClick={imgClick}
      />
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
