/* eslint-disable jsx-a11y/iframe-has-title */
import { inject, observer } from "mobx-react";
import React, { useState, useEffect, useRef } from "react";
import styles from "./index.module.scss";

function IframeHtml(props: any) {
  const iframeRef = useRef(null);
  return (
    <iframe
      ref={iframeRef}
      src="http://localhost:3900/preview"
      className={styles.iframe}
    />
  );
}

export default inject("edit")(observer(IframeHtml));
