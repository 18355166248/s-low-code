import { Input } from "antd";
import React, { ReactElement } from "react";

interface Props {
  onChange: (value: string) => void;
  value: any;
}
function InputCustom({ onChange, value }: Props): ReactElement {
  return (
    <Input
      size="small"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default InputCustom;
