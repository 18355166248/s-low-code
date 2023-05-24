import Home from "@/pages/Home";
import { lazy } from "react";

const Edtor = lazy(() => import("@/pages/Editor"));

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/editor/:type/:id",
    element: <Edtor />,
    loader: () => {
      const data = { some: "thing" };
      return new Response(JSON.stringify(data), {
        status: 200,
      });
    },
  },
];
