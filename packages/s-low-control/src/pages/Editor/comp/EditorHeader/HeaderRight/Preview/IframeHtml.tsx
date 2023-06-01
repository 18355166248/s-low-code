/* eslint-disable jsx-a11y/iframe-has-title */
import { inject, observer } from "mobx-react";
import React, { useRef } from "react";
import styles from "./index.module.scss";

function IframeHtml({ edit }: any) {
  const { project } = edit;
  const { id } = project;
  const iframeRef = useRef(null);

  return (
    <iframe
      ref={iframeRef}
      src={`${process.env.REACT_APP_PREVIEW_CHILD_URL}/preview/${id}`}
      className={styles.iframe}
    />
  );
}

export default inject("edit")(observer(IframeHtml));
