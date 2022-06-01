import { inject, observer } from "mobx-react";
import React, { useState, useEffect } from "react";
import { generateCode } from "../ShowCode/generateCode";
import ReactDOMServer from "react-dom/server";

const myWorker = new Worker("./worker.js");

function IframeHtml(props: any) {
  const { edit } = props;

  const [code, setCode] = useState("");

  useEffect(() => {
    myWorker.onmessage = function (e) {
      setCode(e.data);
    };
  }, []);

  useEffect(() => {
    const code = generateCode(edit.codeTree);
    myWorker.postMessage(code);
  }, [edit.codeTree]);

  // console.log(ReactDOMServer.renderToStaticMarkup(code));
  return <div>{code}</div>;
}

export default inject("edit")(observer(IframeHtml));
