import { FC } from "react";
import { Outlet } from "react-router-dom";

interface Props {}

const Application: FC<Props> = () => {
  return (
    <div>
      Application
      <Outlet />
    </div>
  );
};

export default Application;
