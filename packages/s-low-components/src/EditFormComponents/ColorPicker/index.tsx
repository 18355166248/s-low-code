import React, { FC, useState } from "react";
import { SketchPicker } from "react-color";
import styles from "./index.module.scss";

interface Props {
  value: string;
  onChange: (value: any) => void;
}

const ColorPicker: FC<Props> = ({ value, onChange }) => {
  const [visible, setVisible] = useState(false);

  function _onChange(value: any) {
    const { r, g, b, a } = value.rgb;
    onChange && onChange(`rgba(${r}, ${g}, ${b}, ${a})`);
  }

  return (
    <div className={styles.colorPicker}>
      <div
        className={styles.card}
        style={{ backgroundColor: value }}
        onClick={() => setVisible(true)}
      ></div>
      {visible ? (
        <div className={styles.popover}>
          <div className={styles.cover} onClick={() => setVisible(false)} />
          <SketchPicker width="250" color={value} onChange={_onChange} />
        </div>
      ) : null}
    </div>
  );
};

export default ColorPicker;
