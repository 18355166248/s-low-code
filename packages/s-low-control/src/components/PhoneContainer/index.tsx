import React from "react";
import styles from "./index.module.scss";

function PhoneContainer({ children }: any) {
  return (
    <div className={styles.ctn}>
      <div className={styles.ctnHead}></div>
      <div className={styles.ctnBody}>{children}</div>
      <div className={styles.ctnHeightTag}>
        <span>iPhone 8手机高度</span>
      </div>
    </div>
  );
}

export default PhoneContainer;
