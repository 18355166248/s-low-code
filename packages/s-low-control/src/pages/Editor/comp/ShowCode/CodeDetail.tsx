import React, { useEffect, useState } from "react";
import AceEditor from "react-ace";
import { inject, observer } from "mobx-react";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import { generateCode } from "./generateCode";

const myWorker = new Worker("./worker.js");

function CodeDetail(props: any) {
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

  return (
    <div>
      <AceEditor
        style={{ width: "100%" }}
        mode="javascript"
        theme="monokai"
        name="code"
        height="560px"
        fontSize={16}
        editorProps={{ $blockScrolling: true }}
        value={code}
        readOnly
      />
    </div>
  );
}

export default inject("edit")(observer(CodeDetail));
