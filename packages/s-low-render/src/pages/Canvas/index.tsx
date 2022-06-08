import React, { useEffect } from "react";
import CenterCanvas from "./CenterCanvas";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { EditStore } from "./index.store";
import { Provider } from "mobx-react";

const editStore = EditStore.create();

function Canvas() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Provider edit={editStore}>
        <CenterCanvas />
      </Provider>
    </DndProvider>
  );
}

export default Canvas;
