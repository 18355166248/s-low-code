import { Provider } from "mobx-react";
import { EditStore } from "./index.store";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import Left from "./comp/Left";
import Right from "./comp/Right";
import ShowCode from "./comp/ShowCode";
import PreviewHtml from "./comp/Preview";
import CenterCanvasIframe from "./comp/CenterCanvasIframe";
import logo from "../../assets/images/logo.jpg";

const editStore = EditStore.create();

function Editor() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Provider edit={editStore}>
        <div className="h-screen flex flex-col text-gray-600">
          <header className="h-14 pr-2 shadow-sm sticky border-b border-gray-200 flex-shrink-0  flex justify-between items-center">
            <div className="inline-flex justify-between items-center h-full">
              <img src={logo} alt="" className="h-full" />
            </div>
            <div className="inline-flex justify-between items-center">
              <PreviewHtml className="mr-3" />
              <ShowCode />
            </div>
          </header>

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
