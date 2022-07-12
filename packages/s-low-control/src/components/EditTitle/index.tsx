import React, { FC } from "react";
import styles from "./index.module.scss";

interface Props {
  name?: string;
}

const EditTitle: FC<Props> = ({ name }) => {
  return (
    <div className={styles.wrapLabel}>
      <span>{name}</span>
    </div>
  );
};

export default EditTitle;
