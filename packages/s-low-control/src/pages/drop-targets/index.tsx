import type { FC } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Outlet } from "react-router-dom";

import { Box } from "./Box";
import { Dustbin } from "./Dustbin";

const Drop: FC = () => (
  <DndProvider backend={HTML5Backend} context={window}>
    <div>
      {/* <Outlet /> */}
      <div style={{ overflow: "hidden", clear: "both", margin: "-1rem" }}>
        <Dustbin greedy={true} txt="1">
          <Dustbin greedy={true} txt="2">
            <Dustbin greedy={true} txt="3" />
          </Dustbin>
        </Dustbin>

        <Dustbin>
          <Dustbin>
            <Dustbin />
          </Dustbin>
        </Dustbin>
      </div>

      <div style={{ overflow: "hidden", clear: "both", marginTop: "1.5rem" }}>
        <Box />
      </div>
    </div>
  </DndProvider>
);

export default Drop;
