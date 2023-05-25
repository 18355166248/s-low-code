import { FC } from "react";
import { Outlet } from "react-router-dom";
import { AuthProvider } from "../Auth/AuthContext";

interface SlowProps {}

const Slow: FC<SlowProps> = () => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
};

export default Slow;
