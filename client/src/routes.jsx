import {
    HomeIcon,
    UserCircleIcon,
    TableCellsIcon,
    InformationCircleIcon,
    ServerStackIcon,
    RectangleStackIcon,
  } from "@heroicons/react/24/solid";
  import { AddPost, Home, Profile  } from "./pages/Main";
  import { Register, Login } from "./pages/auth";
import SinglePost from "./pages/Main/SinglePost";
  
  const icon = {
    className: "w-5 h-5 text-inherit",
  };


  
  export const routes = [
    {
      layout: "main",
      pages: [
        {
          icon: <HomeIcon {...icon} />,
          name: "home",
          path: "/home",
          element: <Home />,
        },
        
        {
          icon: <TableCellsIcon {...icon} />,
          name: "addBlog",
          path: "/addBlog",
          element: <AddPost />,
        },
        
      ],
    },
    {
      title: "auth pages",
      layout: "auth",
      pages: [
        {
          icon: <ServerStackIcon {...icon} />,
          name: "login",
          path: "/login",
          element: <Login />,
        },
        {
          icon: <RectangleStackIcon {...icon} />,
          name: "register",
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ];
  
  export default routes;
  