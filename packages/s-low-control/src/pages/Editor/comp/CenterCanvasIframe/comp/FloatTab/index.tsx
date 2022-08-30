import React, { FC } from "react";
import styles from "./index.module.scss";
import cs from "classnames";

interface Props {
  name: string;
  isSelected: boolean;
  onDelete(): void;
}

const FloatTab: FC<Props> = ({ name, isSelected, onDelete }) => {
  return (
    <div className={cs("absolute", styles.floatTab)}>
      {isSelected ? (
        <span
          onClick={onDelete}
          className="iconfont slow-shanchusekuai cursor-pointer text-gray-400 hover:text-gray-500
"
        ></span>
      ) : (
        <span>{name}</span>
      )}
    </div>
  );
};

export default FloatTab;
