import { Radio } from "antd";
import { isFunction } from "lodash-es";
import React, { FC } from "react";
import { alignEnum } from "src/PreviewComponents/LowTitle";

interface Props {
  value: string;
  onChange(val: any): void;
}

const TitleAlignConfig: FC<Props> = ({ value, onChange }) => {
  function _onChange(e: any) {
    isFunction(onChange) && onChange(e.target.value);
  }
  return (
    <Radio.Group size="small" value={value} onChange={_onChange}>
      {Object.values(alignEnum).map((align) => (
        <Radio.Button key={align.key} value={align.key}>
          {align.label}
        </Radio.Button>
      ))}
    </Radio.Group>
  );
};

export default TitleAlignConfig;
