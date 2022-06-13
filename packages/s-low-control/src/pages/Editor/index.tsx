import { Provider } from "mobx-react";
import React, { useState } from "react";
import styles from "./index.module.scss";
import { EditStore } from "./index.store";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

import Left from "./comp/Left";
import Right from "./comp/Right";
import ShowCode from "./comp/ShowCode";
import PreviewHtml from "./comp/PreviewHtml";
import CenterCanvasIframe from "./comp/CenterCanvasIframe";
import CenterCanvas from './comp/CenterCanvas';

const editStore = EditStore.create();

function Editor() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Provider edit={editStore}>
        <div className="h-screen flex flex-col text-gray-600">
          <header className="h-14 px-2 shadow-sm sticky border-b border-gray-200 flex-shrink-0  flex justify-between items-center">
            <div className="inline-flex justify-between items-center"></div>
            <div className="inline-flex justify-between items-center">
              <PreviewHtml className="mr-3" />
              <ShowCode />
            </div>
          </header>

          <main className="flex-1 overflow-hidden flex">
            <Left />
            <CenterCanvasIframe />
            {/* <CenterCanvas /> */}
            <Right />
          </main>
        </div>
      </Provider>
    </DndProvider>
  );
}

export default Editor;
