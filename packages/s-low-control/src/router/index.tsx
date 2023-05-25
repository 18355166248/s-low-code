import Home from "@/pages/Home";
import Slow from "@/pages/Slow";
import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const Login = lazy(() => import("@/pages/Login"));

const Main = lazy(() => import("@/pages/Main"));
const Application = lazy(() => import("@/pages/Application"));
const User = lazy(() => import("@/pages/User/indexUser"));
const Role = lazy(() => import("@/pages/Role/indexRole"));
const Menu = lazy(() => import("@/pages/Menu/indexMenu"));

const Editor = lazy(() => import("@/pages/Editor"));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Slow />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "",
        element: <Main />,
        children: [
          {
            path: "home",
            element: <Home />,
          },
          {
            path: "application",
            element: <Application />,
            children: [
              {
                path: "user",
                element: <User />,
              },
              {
                path: "role",
                element: <Role />,
              },
              {
                path: "menu",
                element: <Menu />,
              },
            ],
          },
        ],
      },
      {
        path: "/editor/:type/:id",
        element: <Editor />,
        loader: () => {
          const data = { some: "thing" };
          return new Response(JSON.stringify(data), {
            status: 200,
          });
        },
      },
    ],
  },
];
