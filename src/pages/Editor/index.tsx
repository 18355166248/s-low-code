import { Provider } from "mobx-react";
import React, { useState } from "react";
import styles from "./index.module.scss";
import { EditStore } from "./index.store";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { Switch } from "antd";
import Left from "./comp/Left";
import CenterCanvas from "./comp/CenterCanvas";
import Right from "./comp/Right";

const editStore = EditStore.create();

function Editor() {
  const [checked, setChecked] = useState(false);

  return (
    <DndProvider backend={HTML5Backend}>
      <Provider edit={editStore}>
        <div className="h-screen flex flex-col text-gray-600">
          <header className="h-14 px-2 shadow-sm sticky border-b border-gray-200 flex-shrink-0  flex justify-between items-center">
            <div className="inline-flex justify-center items-center">
              <div className="inline-flex justify-center items-center">
                <Switch checked={checked} onChange={(c) => setChecked(c)} />
              </div>
              {/* <ShowCodeBtn />
              <SaveBtn /> */}
            </div>
          </header>

          <main className="flex-1 overflow-hidden flex">
            <Left />
            <CenterCanvas />
            <Right />
          </main>
        </div>
      </Provider>
    </DndProvider>
  );
}

export default Editor;
