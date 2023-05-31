import { Provider } from "mobx-react";
import { EditStore } from "./index.store";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import Left from "./comp/Left";
import Right from "./comp/Right";
import CenterCanvasIframe from "./comp/CenterCanvasIframe";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProject } from "@/services/project";
import EditorHeader from "./comp/EditorHeader";

const editStore = EditStore.create();

function Editor() {
  const { id } = useParams();

  useEffect(() => {
    window.addEventListener("message", editStore.getChildMessage);

    return () => {
      window.removeEventListener("message", editStore.getChildMessage);
    };
  }, []);

  useEffect(() => {
    if (id) {
      getProject(id).then((res: any) => {
        const { codeTree, setProject, setCodeTree, initIframe } = editStore;
        setProject(res);
        (codeTree as any).children = JSON.parse(res.code || "[]");
        setCodeTree({ ...codeTree });
        initIframe();
      });
    }
  }, [id]);

  return (
    <DndProvider backend={HTML5Backend}>
      <Provider edit={editStore}>
        <div className="flex flex-1 overflow-hidden flex-col text-gray-600 bg-white">
          <EditorHeader />

          <main className="flex-1 overflow-hidden flex">
            <Left />
            <CenterCanvasIframe />
            <Right />
          </main>
        </div>
      </Provider>
    </DndProvider>
  );
}

export default Editor;
