import Home from "@/pages/Home";
import Slow from "@/pages/Slow";
import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const Login = lazy(() => import("@/pages/Login"));

const Main = lazy(() => import("@/pages/Main"));

const Project = lazy(() => import("@/pages/Project/indexProject"));
const Application = lazy(() => import("@/pages/Application"));
const User = lazy(() => import("@/pages/User/indexUser"));
const Role = lazy(() => import("@/pages/Role/indexRole"));
const Menu = lazy(() => import("@/pages/Menu/indexMenu"));

const Editor = lazy(() => import("@/pages/Editor"));

// 应用页面路由/菜单
type appInterface = RouteObject & {
  name?: string;
};
export const applicationChildren: appInterface[] = [
  {
    path: "project",
    id: "/application/project",
    name: "项目管理",
    element: <Project />,
  },
  {
    path: "user",
    id: "/application/user",
    name: "用户管理",
    element: <User />,
  },
  {
    path: "role",
    id: "/application/role",
    name: "角色管理",
    element: <Role />,
  },
  {
    path: "menu",
    id: "/application/menu",
    name: "菜单管理",
    element: <Menu />,
  },
];

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
            children: applicationChildren as RouteObject[],
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
